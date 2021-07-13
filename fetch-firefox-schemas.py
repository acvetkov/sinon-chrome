#!/usr/bin/python3

import json
import re
import sys
from concurrent.futures import ThreadPoolExecutor
from operator import itemgetter
from pathlib import Path
from urllib.request import urlopen


BASE_URL = 'https://hg.mozilla.org/releases/mozilla-release/raw-file/'
BROWSER_PATH = '/browser/components/extensions'
TOOLKIT_PATH = '/toolkit/components/extensions'
TMP_SCHEMAS_DIR = Path('./tmp_firefox_schemas/')
# Taken from sidebar at: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API
PUBLIC_APIS = [
    "alarms",
    "bookmarks",
    "browserAction",
    "browserSettings",
    "browsingData",
    "captivePortal",
    "clipboard",
    "commands",
    "contentScripts",
    "contextMenus",
    "contextualIdentities",
    "cookies",
    "devtools",
    "devtools.inspectedWindow",
    "devtools.network",
    "devtools.panels",
    "dns",
    "downloads",
    "events",
    "extension",
    "extensionTypes",
    "find",
    "history",
    "i18n",
    "identity",
    "idle",
    "management",
    "menus",
    "notifications",
    "omnibox",
    "pageAction",
    "permissions",
    "pkcs11",
    "privacy",
    "proxy",
    "runtime",
    "search",
    "sessions",
    "sidebarAction",
    "storage",
    "tabs",
    "theme",
    "topSites",
    "types",
    "userScripts",
    "webNavigation",
    "webRequest",
    "windows",
]


def main():
    args = sys.argv
    if len(args) == 1 or (len(args) == 2 and args[1] in ('-h', '--help')):
        print_usage()
    elif len(args) == 3 and args[1] == "download":
        download(args[2])
    elif len(args) == 2 and args[1] == "merge":
        merge()
    else:
        print("Error: invalid command line", file=sys.stderr)
        print_usage()
        sys.exit(1)


def print_usage():
    print(f"Usage: {sys.argv[0]} [download <REVISION>] [merge]")
    print("  <REVISION>    Found at https://hg.mozilla.org/releases/mozilla-release/tags")


def download(revision):
    browser_url = f"{BASE_URL}{revision}{BROWSER_PATH}/schemas/"
    toolkit_url = f"{BASE_URL}{revision}{TOOLKIT_PATH}/schemas/"

    print(f"Fetching list of schemas at {browser_url}")
    schema_list = fetch_json_links(browser_url)

    print(f"Fetching list of schemas at {toolkit_url}")
    schema_list.extend(fetch_json_links(toolkit_url))

    TMP_SCHEMAS_DIR.mkdir(exist_ok=True)
    with ThreadPoolExecutor() as executor:
        executor.map(fetch_and_save_json_schema, schema_list)


def fetch_json_links(url):
    response = urlopen(url).read().decode('utf-8')
    return [
        url + entry.split(' ', maxsplit=3)[2]
        for entry in response.strip().split('\n')
        if entry.endswith('.json')
    ]


def fetch_and_save_json_schema(url):
    file_name = Path(url).name
    print(f"Getting {file_name}…")
    try:
        response = urlopen(url)
        (TMP_SCHEMAS_DIR / file_name).write_text(response.read().decode('utf-8'))
    except Exception as e:
        print(f"Error retrieving {file_name}: ({e})")


def merge():
    schema_dict = {}
    files = list(TMP_SCHEMAS_DIR.iterdir())
    if len(files) == 0:
        print("Error: no files to merge. Download schemas files first.", file=sys.stderr)
        print_usage()
        sys.exit(1)
    files.sort()
    for file in files:
        print(f"Reading {file.name}")
        content = json.loads(remove_comments(file.open().read()))
        for d in (d for d in content if (namespace := d["namespace"]).split('.')[0] in PUBLIC_APIS):
            print(f"> Found namespace: {namespace}")
            if namespace in schema_dict:
                deep_update(schema_dict[namespace], d)
            else:
                schema_dict[namespace] = d
    
    print("\nPut this in `readme.md`:")
    for schema in schema_dict.values():
        ns = schema["namespace"]
        print(f"* [browser.{ns}](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/{ns})")
    Path("stable-api-ff.json").write_text(get_final_json(schema_dict))


def remove_comments(s):
    start_index = s.index('[')
    return s[start_index:]


def deep_update(d, u):
    for key, val in u.items():
        if key not in d:
            d[key] = val
        elif isinstance(val, dict):
            d[key] = update(d[key], val)
        elif isinstance(val, list):
            if d[key] != val:
                d[key].extend(val)
        else:
            d[key] = val
    return d


def get_final_json(schema_dict):
    return (json.dumps(list(schema_dict.values()), indent=2)
        .replace('''"id": "Setting"''', '''"id": "BrowserSetting"''')
        .replace('''"$ref": "types.Setting"''', '''"$ref": "types.BrowserSetting"''')
    )


main()
