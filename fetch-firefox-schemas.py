#!/usr/bin/python3

import json
import re
import sys
from http.client import HTTPSConnection
from operator import itemgetter

moz = 'hg.mozilla.org'
# Find the revision for latest release
# https://hg.mozilla.org/releases/mozilla-release/tags
base_path = '/releases/mozilla-release/raw-file/'

def main():
    if len(sys.argv) != 2:
        print("Needs revision as argument")
        return
    rev = sys.argv[1]
    toolkit_path = base_path + rev + '/toolkit/components/extensions/schemas/'
    browser_path = base_path + rev + '/browser/components/extensions/schemas/'

    conn = HTTPSConnection(moz)
    sch_items = fetch_json_links(conn, toolkit_path)
    sch_items.extend(fetch_json_links(conn, browser_path))
    # Sort items
    sch_items.sort(key=itemgetter(0))

    schemas = []
    for file_name, path in sch_items:
        fetch_json_schema(conn, path + file_name, schemas)
    print(json.dumps(schemas, sort_keys=True, indent=2))


def fetch_json_links(conn, path):
    """
    Given a directory path create a list of json files
    """
    conn.request('GET', path)
    response = conn.getresponse()
    links = []

    for file_entry in response.read().decode('utf-8').strip().split('\n'):
        if file_entry:
            # File should be safe (that is, no spaces)
            file_name = file_entry.split(' ')[2]
            if '.json' == file_name[-5:]:
                links.append((file_name, path))
    return links


def fetch_json_schema(conn, path, schemas):
    """
    Given a file path fetch the schema object
    """
    conn.request('GET', path)
    response = conn.getresponse()
    remove_comments = re.sub('(?m)^(//|/\*| \*).*$', '', response.read().decode('utf-8'))
    for sch in json.loads(remove_comments):
        # TODO: Figure out how to properly implement 'extend' properties
        if 'native_manifest.json' in path or \
            ('manifest.json' not in path and sch['namespace'] == 'manifest'):
            continue
        else:
            schemas.append(sch)

main()
