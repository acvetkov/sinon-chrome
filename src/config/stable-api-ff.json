[
  {
    "namespace": "alarms",
    "permissions": ["alarms"],
    "types": [
      {
        "id": "Alarm",
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": "Name of this alarm."
          },
          "scheduledTime": {
            "type": "number",
            "description": "Time when the alarm is scheduled to fire, in milliseconds past the epoch."
          },
          "periodInMinutes": {
            "type": "number",
            "optional": true,
            "description": "When present, signals that the alarm triggers periodically after so many minutes."
          }
        }
      }
    ],
    "functions": [
      {
        "name": "create",
        "type": "function",
        "description": "Creates an alarm. After the delay is expired, the onAlarm event is fired. If there is another alarm with the same name (or no name if none is specified), it will be cancelled and replaced by this alarm.",
        "parameters": [
          {
            "type": "string",
            "name": "name",
            "optional": true,
            "description": "Optional name to identify this alarm. Defaults to the empty string."
          },
          {
            "type": "object",
            "name": "alarmInfo",
            "description": "Details about the alarm. The alarm first fires either at 'when' milliseconds past the epoch (if 'when' is provided), after 'delayInMinutes' minutes from the current time (if 'delayInMinutes' is provided instead), or after 'periodInMinutes' minutes from the current time (if only 'periodInMinutes' is provided). Users should never provide both 'when' and 'delayInMinutes'. If 'periodInMinutes' is provided, then the alarm recurs repeatedly after that many minutes.",
            "properties": {
              "when": {"type": "number", "optional": true,
                "description": "Time when the alarm is scheduled to first fire, in milliseconds past the epoch."},
              "delayInMinutes": {"type": "number", "optional": true,
                "description": "Number of minutes from the current time after which the alarm should first fire."},
              "periodInMinutes": {"type": "number", "optional": true,
                "description": "Number of minutes after which the alarm should recur repeatedly."}
            }
          }
        ]
      },
      {
        "name": "get",
        "type": "function",
        "description": "Retrieves details about the specified alarm.",
        "async": "callback",
        "parameters": [
          {
            "type": "string",
            "name": "name",
            "optional": true,
            "description": "The name of the alarm to get. Defaults to the empty string."
          },
          {
            "type": "function",
            "name": "callback",
            "parameters": [
              { "name": "alarm", "$ref": "Alarm" }
            ]
          }
        ]
      },
      {
        "name": "getAll",
        "type": "function",
        "description": "Gets an array of all the alarms.",
        "async": "callback",
        "parameters": [
          {
            "type": "function",
            "name": "callback",
            "parameters": [
              { "name": "alarms", "type": "array", "items": { "$ref": "Alarm" } }
            ]
          }
        ]
      },
      {
        "name": "clear",
        "type": "function",
        "description": "Clears the alarm with the given name.",
        "async": "callback",
        "parameters": [
          {
            "type": "string",
            "name": "name",
            "optional": true,
            "description": "The name of the alarm to clear. Defaults to the empty string."
          },
          {
            "type": "function",
            "name": "callback",
            "parameters": [
              { "name": "wasCleared", "type": "boolean", "description": "Whether an alarm of the given name was found to clear." }
            ]
          }
        ]
      },
      {
        "name": "clearAll",
        "type": "function",
        "description": "Clears all alarms.",
        "async": "callback",
        "parameters": [
          {
            "type": "function",
            "name": "callback",
            "parameters": [
              { "name": "wasCleared", "type": "boolean", "description": "Whether any alarm was found to clear." }
            ]
          }
        ]
      }
    ],
    "events": [
      {
        "name": "onAlarm",
        "type": "function",
        "description": "Fired when an alarm has expired. Useful for transient background pages.",
        "parameters": [
          {
            "name": "name",
            "$ref": "Alarm",
            "description": "The alarm that has expired."
          }
        ]
      }
    ]
  },
  {
    "namespace": "cookies",
    "description": "Use the <code>browser.cookies</code> API to query and modify cookies, and to be notified when they change.",
    "permissions": ["cookies"],
    "types": [
      {
        "id": "Cookie",
        "type": "object",
        "description": "Represents information about an HTTP cookie.",
        "properties": {
          "name": {"type": "string", "description": "The name of the cookie."},
          "value": {"type": "string", "description": "The value of the cookie."},
          "domain": {"type": "string", "description": "The domain of the cookie (e.g. \"www.google.com\", \"example.com\")."},
          "hostOnly": {"type": "boolean", "description": "True if the cookie is a host-only cookie (i.e. a request's host must exactly match the domain of the cookie)."},
          "path": {"type": "string", "description": "The path of the cookie."},
          "secure": {"type": "boolean", "description": "True if the cookie is marked as Secure (i.e. its scope is limited to secure channels, typically HTTPS)."},
          "httpOnly": {"type": "boolean", "description": "True if the cookie is marked as HttpOnly (i.e. the cookie is inaccessible to client-side scripts)."},
          "session": {"type": "boolean", "description": "True if the cookie is a session cookie, as opposed to a persistent cookie with an expiration date."},
          "expirationDate": {"type": "number", "optional": true, "description": "The expiration date of the cookie as the number of seconds since the UNIX epoch. Not provided for session cookies."},
          "storeId": {"type": "string", "description": "The ID of the cookie store containing this cookie, as provided in getAllCookieStores()."}
        }
      },
      {
        "id": "CookieStore",
        "type": "object",
        "description": "Represents a cookie store in the browser. An incognito mode window, for instance, uses a separate cookie store from a non-incognito window.",
        "properties": {
          "id": {"type": "string", "description": "The unique identifier for the cookie store."},
          "tabIds": {"type": "array", "items": {"type": "integer"}, "description": "Identifiers of all the browser tabs that share this cookie store."}
        }
      },
      {
        "id": "OnChangedCause",
        "type": "string",
        "enum": ["evicted", "expired", "explicit", "expired_overwrite", "overwrite"],
        "description": "The underlying reason behind the cookie's change. If a cookie was inserted, or removed via an explicit call to $(ref:cookies.remove), \"cause\" will be \"explicit\". If a cookie was automatically removed due to expiry, \"cause\" will be \"expired\". If a cookie was removed due to being overwritten with an already-expired expiration date, \"cause\" will be set to \"expired_overwrite\".  If a cookie was automatically removed due to garbage collection, \"cause\" will be \"evicted\".  If a cookie was automatically removed due to a \"set\" call that overwrote it, \"cause\" will be \"overwrite\". Plan your response accordingly."
      }
    ],
    "functions": [
      {
        "name": "get",
        "type": "function",
        "description": "Retrieves information about a single cookie. If more than one cookie of the same name exists for the given URL, the one with the longest path will be returned. For cookies with the same path length, the cookie with the earliest creation time will be returned.",
        "async": "callback",
        "parameters": [
          {
            "type": "object",
            "name": "details",
            "description": "Details to identify the cookie being retrieved.",
            "properties": {
              "url": {"type": "string", "description": "The URL with which the cookie to retrieve is associated. This argument may be a full URL, in which case any data following the URL path (e.g. the query string) is simply ignored. If host permissions for this URL are not specified in the manifest file, the API call will fail."},
              "name": {"type": "string", "description": "The name of the cookie to retrieve."},
              "storeId": {"type": "string", "optional": true, "description": "The ID of the cookie store in which to look for the cookie. By default, the current execution context's cookie store will be used."}
            }
          },
          {
            "type": "function",
            "name": "callback",
            "parameters": [
              {
                "name": "cookie", "$ref": "Cookie", "optional": true, "description": "Contains details about the cookie. This parameter is null if no such cookie was found."
              }
            ]
          }
        ]
      },
      {
        "name": "getAll",
        "type": "function",
        "description": "Retrieves all cookies from a single cookie store that match the given information.  The cookies returned will be sorted, with those with the longest path first.  If multiple cookies have the same path length, those with the earliest creation time will be first.",
        "async": "callback",
        "parameters": [
          {
            "type": "object",
            "name": "details",
            "description": "Information to filter the cookies being retrieved.",
            "properties": {
              "url": {"type": "string", "optional": true, "description": "Restricts the retrieved cookies to those that would match the given URL."},
              "name": {"type": "string", "optional": true, "description": "Filters the cookies by name."},
              "domain": {"type": "string", "optional": true, "description": "Restricts the retrieved cookies to those whose domains match or are subdomains of this one."},
              "path": {"type": "string", "optional": true, "description": "Restricts the retrieved cookies to those whose path exactly matches this string."},
              "secure": {"type": "boolean", "optional": true, "description": "Filters the cookies by their Secure property."},
              "session": {"type": "boolean", "optional": true, "description": "Filters out session vs. persistent cookies."},
              "storeId": {"type": "string", "optional": true, "description": "The cookie store to retrieve cookies from. If omitted, the current execution context's cookie store will be used."}
            }
          },
          {
            "type": "function",
            "name": "callback",
            "parameters": [
              {
                "name": "cookies", "type": "array", "items": {"$ref": "Cookie"}, "description": "All the existing, unexpired cookies that match the given cookie info."
              }
            ]
          }
        ]
      },
      {
        "name": "set",
        "type": "function",
        "description": "Sets a cookie with the given cookie data; may overwrite equivalent cookies if they exist.",
        "async": "callback",
        "parameters": [
          {
            "type": "object",
            "name": "details",
            "description": "Details about the cookie being set.",
            "properties": {
              "url": {"type": "string", "description": "The request-URI to associate with the setting of the cookie. This value can affect the default domain and path values of the created cookie. If host permissions for this URL are not specified in the manifest file, the API call will fail."},
              "name": {"type": "string", "optional": true, "description": "The name of the cookie. Empty by default if omitted."},
              "value": {"type": "string", "optional": true, "description": "The value of the cookie. Empty by default if omitted."},
              "domain": {"type": "string", "optional": true, "description": "The domain of the cookie. If omitted, the cookie becomes a host-only cookie."},
              "path": {"type": "string", "optional": true, "description": "The path of the cookie. Defaults to the path portion of the url parameter."},
              "secure": {"type": "boolean", "optional": true, "description": "Whether the cookie should be marked as Secure. Defaults to false."},
              "httpOnly": {"type": "boolean", "optional": true, "description": "Whether the cookie should be marked as HttpOnly. Defaults to false."},
              "expirationDate": {"type": "number", "optional": true, "description": "The expiration date of the cookie as the number of seconds since the UNIX epoch. If omitted, the cookie becomes a session cookie."},
              "storeId": {"type": "string", "optional": true, "description": "The ID of the cookie store in which to set the cookie. By default, the cookie is set in the current execution context's cookie store."}
            }
          },
          {
            "type": "function",
            "name": "callback",
            "optional": true,
            "parameters": [
              {
                "name": "cookie", "$ref": "Cookie", "optional": true, "description": "Contains details about the cookie that's been set.  If setting failed for any reason, this will be \"null\", and $(ref:runtime.lastError) will be set."
              }
            ]
          }
        ]
      },
      {
        "name": "remove",
        "type": "function",
        "description": "Deletes a cookie by name.",
        "async": "callback",
        "parameters": [
          {
            "type": "object",
            "name": "details",
            "description": "Information to identify the cookie to remove.",
            "properties": {
              "url": {"type": "string", "description": "The URL associated with the cookie. If host permissions for this URL are not specified in the manifest file, the API call will fail."},
              "name": {"type": "string", "description": "The name of the cookie to remove."},
              "storeId": {"type": "string", "optional": true, "description": "The ID of the cookie store to look in for the cookie. If unspecified, the cookie is looked for by default in the current execution context's cookie store."}
            }
          },
          {
            "type": "function",
            "name": "callback",
            "optional": true,
            "parameters": [
              {
                "name": "details",
                "type": "object",
                "description": "Contains details about the cookie that's been removed.  If removal failed for any reason, this will be \"null\", and $(ref:runtime.lastError) will be set.",
                "optional": true,
                "properties": {
                  "url": {"type": "string", "description": "The URL associated with the cookie that's been removed."},
                  "name": {"type": "string", "description": "The name of the cookie that's been removed."},
                  "storeId": {"type": "string", "description": "The ID of the cookie store from which the cookie was removed."}
                }
              }
            ]
          }
        ]
      },
      {
        "name": "getAllCookieStores",
        "type": "function",
        "description": "Lists all existing cookie stores.",
        "async": "callback",
        "parameters": [
          {
            "type": "function",
            "name": "callback",
            "parameters": [
              {
                "name": "cookieStores", "type": "array", "items": {"$ref": "CookieStore"}, "description": "All the existing cookie stores."
              }
            ]
          }
        ]
      }
    ],
    "events": [
      {
        "name": "onChanged",
        "type": "function",
        "description": "Fired when a cookie is set or removed. As a special case, note that updating a cookie's properties is implemented as a two step process: the cookie to be updated is first removed entirely, generating a notification with \"cause\" of \"overwrite\" .  Afterwards, a new cookie is written with the updated values, generating a second notification with \"cause\" \"explicit\".",
        "parameters": [
          {
            "type": "object",
            "name": "changeInfo",
            "properties": {
              "removed": {"type": "boolean", "description": "True if a cookie was removed."},
              "cookie": {"$ref": "Cookie", "description": "Information about the cookie that was set or removed."},
              "cause": {"$ref": "OnChangedCause", "description": "The underlying reason behind the cookie's change."}
            }
          }
        ]
      }
    ]
  },
  {
    "namespace": "downloads",
    "permissions": ["downloads"],
    "types": [
      {
        "id": "FilenameConflictAction",
        "type": "string",
        "enum": [
          "uniquify",
          "overwrite",
          "prompt"
        ]
      },
      {
        "id": "InterruptReason",
        "type": "string",
        "enum": [
          "FILE_FAILED",
          "FILE_ACCESS_DENIED",
          "FILE_NO_SPACE",
          "FILE_NAME_TOO_LONG",
          "FILE_TOO_LARGE",
          "FILE_VIRUS_INFECTED",
          "FILE_TRANSIENT_ERROR",
          "FILE_BLOCKED",
          "FILE_SECURITY_CHECK_FAILED",
          "FILE_TOO_SHORT",
          "NETWORK_FAILED",
          "NETWORK_TIMEOUT",
          "NETWORK_DISCONNECTED",
          "NETWORK_SERVER_DOWN",
          "NETWORK_INVALID_REQUEST",
          "SERVER_FAILED",
          "SERVER_NO_RANGE",
          "SERVER_BAD_CONTENT",
          "SERVER_UNAUTHORIZED",
          "SERVER_CERT_PROBLEM",
          "SERVER_FORBIDDEN",
          "USER_CANCELED",
          "USER_SHUTDOWN",
          "CRASH"
        ]
      },
      {
        "id": "DangerType",
        "type": "string",
        "enum": [
          "file",
          "url",
          "content",
          "uncommon",
          "host",
          "unwanted",
          "safe",
          "accepted"
        ],
        "description": "<dl><dt>file</dt><dd>The download's filename is suspicious.</dd><dt>url</dt><dd>The download's URL is known to be malicious.</dd><dt>content</dt><dd>The downloaded file is known to be malicious.</dd><dt>uncommon</dt><dd>The download's URL is not commonly downloaded and could be dangerous.</dd><dt>safe</dt><dd>The download presents no known danger to the user's computer.</dd></dl>These string constants will never change, however the set of DangerTypes may change."
      },
      {
        "id": "State",
        "type": "string",
        "enum": [
          "in_progress",
          "interrupted",
          "complete"
        ],
        "description": "<dl><dt>in_progress</dt><dd>The download is currently receiving data from the server.</dd><dt>interrupted</dt><dd>An error broke the connection with the file host.</dd><dt>complete</dt><dd>The download completed successfully.</dd></dl>These string constants will never change, however the set of States may change."
      },
      {
        "id": "DownloadItem",
        "type": "object",
        "properties": {
          "id": {
            "description": "An identifier that is persistent across browser sessions.",
            "type": "integer"
          },
          "url": {
            "description": "Absolute URL.",
            "type": "string"
          },
          "referrer": {
            "type": "string"
          },
          "filename": {
            "description": "Absolute local path.",
            "type": "string"
          },
          "incognito": {
            "description": "False if this download is recorded in the history, true if it is not recorded.",
            "type": "boolean"
          },
          "danger": {
            "$ref": "DangerType",
            "description": "Indication of whether this download is thought to be safe or known to be suspicious."
          },
          "mime": {
            "description": "The file's MIME type.",
            "type": "string"
          },
          "startTime": {
            "description": "Number of milliseconds between the unix epoch and when this download began.",
            "type": "string"
          },
          "endTime": {
            "description": "Number of milliseconds between the unix epoch and when this download ended.",
            "optional": true,
            "type": "string"
          },
          "estimatedEndTime": {
            "type": "string",
            "optional": true
          },
          "state": {
            "$ref": "State",
            "description": "Indicates whether the download is progressing, interrupted, or complete."
          },
          "paused": {
            "description": "True if the download has stopped reading data from the host, but kept the connection open.",
            "type": "boolean"
          },
          "canResume": {
            "type": "boolean"
          },
          "error": {
            "description": "Number indicating why a download was interrupted.",
            "optional": true,
            "$ref": "InterruptReason"
          },
          "bytesReceived": {
            "description": "Number of bytes received so far from the host, without considering file compression.",
            "type": "number"
          },
          "totalBytes": {
            "description": "Number of bytes in the whole file, without considering file compression, or -1 if unknown.",
            "type": "number"
          },
          "fileSize": {
            "description": "Number of bytes in the whole file post-decompression, or -1 if unknown.",
            "type": "number"
          },
          "exists": {
            "type": "boolean"
          },
          "byExtensionId": {
            "type": "string",
            "optional": true
          },
          "byExtensionName": {
            "type": "string",
            "optional": true
          }
        }
      },
      {
        "id": "StringDelta",
        "type": "object",
        "properties": {
          "current": {
            "optional": true,
            "type": "string"
          },
          "previous": {
            "optional": true,
            "type": "string"
          }
        }
      },
      {
        "id": "DoubleDelta",
        "type": "object",
        "properties": {
          "current": {
            "optional": true,
            "type": "number"
          },
          "previous": {
            "optional": true,
            "type": "number"
          }
        }
      },
      {
        "id": "BooleanDelta",
        "type": "object",
        "properties": {
          "current": {
            "optional": true,
            "type": "boolean"
          },
          "previous": {
            "optional": true,
            "type": "boolean"
          }
        }
      },
      {
        "id": "DownloadTime",
        "description": "A time specified as a Date object, a number or string representing milliseconds since the epoch, or an ISO 8601 string",
        "choices": [
          {
            "type": "string",
            "pattern": "^[1-9]\\d*$"
          },
          {
            "$ref": "extensionTypes.Date"
          }
        ]
      },
      {
        "id": "DownloadQuery",
        "description": "Parameters that combine to specify a predicate that can be used to select a set of downloads.  Used for example in search() and erase()",
        "type": "object",
        "properties": {
          "query": {
            "description": "This array of search terms limits results to <a href='#type-DownloadItem'>DownloadItems</a> whose <code>filename</code> or <code>url</code> contain all of the search terms that do not begin with a dash '-' and none of the search terms that do begin with a dash.",
            "optional": true,
            "type": "array",
            "items": { "type": "string" }
          },
          "startedBefore": {
            "description": "Limits results to downloads that started before the given ms since the epoch.",
            "optional": true,
            "$ref": "DownloadTime"
          },
          "startedAfter": {
            "description": "Limits results to downloads that started after the given ms since the epoch.",
            "optional": true,
            "$ref": "DownloadTime"
          },
          "endedBefore": {
            "description": "Limits results to downloads that ended before the given ms since the epoch.",
            "optional": true,
            "$ref": "DownloadTime"
          },
          "endedAfter": {
            "description": "Limits results to downloads that ended after the given ms since the epoch.",
            "optional": true,
            "$ref": "DownloadTime"
          },
          "totalBytesGreater": {
            "description": "Limits results to downloads whose totalBytes is greater than the given integer.",
            "optional": true,
            "type": "number"
          },
          "totalBytesLess": {
            "description": "Limits results to downloads whose totalBytes is less than the given integer.",
            "optional": true,
            "type": "number"
          },
          "filenameRegex": {
            "description": "Limits results to <a href='#type-DownloadItem'>DownloadItems</a> whose <code>filename</code> matches the given regular expression.",
            "optional": true,
            "type": "string"
          },
          "urlRegex": {
            "description": "Limits results to <a href='#type-DownloadItem'>DownloadItems</a> whose <code>url</code> matches the given regular expression.",
            "optional": true,
            "type": "string"
          },
          "limit": {
            "description": "Setting this integer limits the number of results. Otherwise, all matching <a href='#type-DownloadItem'>DownloadItems</a> will be returned.",
            "optional": true,
            "type": "integer"
          },
          "orderBy": {
            "description": "Setting elements of this array to <a href='#type-DownloadItem'>DownloadItem</a> properties in order to sort the search results. For example, setting <code>orderBy='startTime'</code> sorts the <a href='#type-DownloadItem'>DownloadItems</a> by their start time in ascending order. To specify descending order, prefix <code>orderBy</code> with a hyphen: '-startTime'.",
            "optional": true,
            "type": "array",
            "items": { "type": "string" }
          },
          "id": {
            "type": "integer",
            "optional": true
          },
          "url": {
            "description": "Absolute URL.",
            "optional": true,
            "type": "string"
          },
          "filename": {
            "description": "Absolute local path.",
            "optional": true,
            "type": "string"
          },
          "danger": {
            "$ref": "DangerType",
            "description": "Indication of whether this download is thought to be safe or known to be suspicious.",
            "optional": true
          },
          "mime": {
            "description": "The file's MIME type.",
            "optional": true,
            "type": "string"
          },
          "startTime": {
            "optional": true,
            "type": "string"
          },
          "endTime": {
            "optional": true,
            "type": "string"
          },
          "state": {
            "$ref": "State",
            "description": "Indicates whether the download is progressing, interrupted, or complete.",
            "optional": true
          },
          "paused": {
            "description": "True if the download has stopped reading data from the host, but kept the connection open.",
            "optional": true,
            "type": "boolean"
          },
          "error": {
            "description": "Why a download was interrupted.",
            "optional": true,
            "$ref": "InterruptReason"
          },
          "bytesReceived": {
            "description": "Number of bytes received so far from the host, without considering file compression.",
            "optional": true,
            "type": "number"
          },
          "totalBytes": {
            "description": "Number of bytes in the whole file, without considering file compression, or -1 if unknown.",
            "optional": true,
            "type": "number"
          },
          "fileSize": {
            "description": "Number of bytes in the whole file post-decompression, or -1 if unknown.",
            "optional": true,
            "type": "number"
          },
          "exists": {
            "type": "boolean",
            "optional": true
          }
        }
      }
    ],
    "functions": [
      {
        "name": "download",
        "type": "function",
        "async": "callback",
        "description": "Download a URL. If the URL uses the HTTP[S] protocol, then the request will include all cookies currently set for its hostname. If both <code>filename</code> and <code>saveAs</code> are specified, then the Save As dialog will be displayed, pre-populated with the specified <code>filename</code>. If the download started successfully, <code>callback</code> will be called with the new <a href='#type-DownloadItem'>DownloadItem</a>'s <code>downloadId</code>. If there was an error starting the download, then <code>callback</code> will be called with <code>downloadId=undefined</code> and <a href='extension.html#property-lastError'>chrome.extension.lastError</a> will contain a descriptive string. The error strings are not guaranteed to remain backwards compatible between releases. You must not parse it.",
        "parameters": [
          {
            "description": "What to download and how.",
            "name": "options",
            "type": "object",
            "properties": {
              "url": {
                "description": "The URL to download.",
                "type": "string",
                "format": "url"
              },
              "filename": {
                "description": "A file path relative to the Downloads directory to contain the downloaded file.",
                "optional": true,
                "type": "string"
              },
              "conflictAction": {
                "$ref": "FilenameConflictAction",
                "optional": true
              },
              "saveAs": {
                "description": "Use a file-chooser to allow the user to select a filename.",
                "optional": true,
                "type": "boolean"
              },
              "method": {
                "unsupported": true,
                "description": "The HTTP method to use if the URL uses the HTTP[S] protocol.",
                "enum": [
                  "GET",
                  "POST"
                ],
                "optional": true,
                "type": "string"
              },
              "headers": {
                "unsupported": true,
                "optional": true,
                "type": "array",
                "description": "Extra HTTP headers to send with the request if the URL uses the HTTP[s] protocol. Each header is represented as a dictionary containing the keys <code>name</code> and either <code>value</code> or <code>binaryValue</code>, restricted to those allowed by XMLHttpRequest.",
                "items": {
                  "type": "object",
                  "properties": {
                    "name": {
                      "description": "Name of the HTTP header.",
                      "type": "string"
                    },
                    "value": {
                      "description": "Value of the HTTP header.",
                      "type": "string"
                    }
                  }
                }
              },
              "body": {
                "unsupported": true,
                "description": "Post body.",
                "optional": true,
                "type": "string"
              }
            }
          },
          {
            "name": "callback",
            "type": "function",
            "optional": true,
            "parameters": [
              {
                "name": "downloadId",
                "type": "integer"
              }
            ]
          }
        ]
      },
      {
        "name": "search",
        "type": "function",
        "async": "callback",
        "description": "Find <a href='#type-DownloadItem'>DownloadItems</a>. Set <code>query</code> to the empty object to get all <a href='#type-DownloadItem'>DownloadItems</a>. To get a specific <a href='#type-DownloadItem'>DownloadItem</a>, set only the <code>id</code> field.",
        "parameters": [
          {
            "name": "query",
            "$ref": "DownloadQuery"
          },
          {
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "items": {
                  "$ref": "DownloadItem"
                },
                "name": "results",
                "type": "array"
              }
            ]
          }
        ]
      },
      {
        "name": "pause",
        "type": "function",
        "async": "callback",
        "description": "Pause the download. If the request was successful the download is in a paused state. Otherwise <a href='extension.html#property-lastError'>chrome.extension.lastError</a> contains an error message. The request will fail if the download is not active.",
        "parameters": [
          {
            "description": "The id of the download to pause.",
            "name": "downloadId",
            "type": "integer"
          },
          {
            "name": "callback",
            "optional": true,
            "parameters": [],
            "type": "function"
          }
        ]
      },
      {
        "name": "resume",
        "type": "function",
        "async": "callback",
        "description": "Resume a paused download. If the request was successful the download is in progress and unpaused. Otherwise <a href='extension.html#property-lastError'>chrome.extension.lastError</a> contains an error message. The request will fail if the download is not active.",
        "parameters": [
          {
            "description": "The id of the download to resume.",
            "name": "downloadId",
            "type": "integer"
          },
          {
            "name": "callback",
            "optional": true,
            "parameters": [],
            "type": "function"
          }
        ]
      },
      {
        "name": "cancel",
        "type": "function",
        "async": "callback",
        "description": "Cancel a download. When <code>callback</code> is run, the download is cancelled, completed, interrupted or doesn't exist anymore.",
        "parameters": [
          {
            "description": "The id of the download to cancel.",
            "name": "downloadId",
            "type": "integer"
          },
          {
            "name": "callback",
            "optional": true,
            "parameters": [],
            "type": "function"
          }
        ]
      },
      {
        "name": "getFileIcon",
        "type": "function",
        "async": "callback",
        "description": "Retrieve an icon for the specified download. For new downloads, file icons are available after the <a href='#event-onCreated'>onCreated</a> event has been received. The image returned by this function while a download is in progress may be different from the image returned after the download is complete. Icon retrieval is done by querying the underlying operating system or toolkit depending on the platform. The icon that is returned will therefore depend on a number of factors including state of the download, platform, registered file types and visual theme. If a file icon cannot be determined, <a href='extension.html#property-lastError'>chrome.extension.lastError</a> will contain an error message.",
        "parameters": [
          {
            "description": "The identifier for the download.",
            "name": "downloadId",
            "type": "integer"
          },
          {
            "name": "options",
            "optional": true,
            "properties": {
              "size": {
                "description": "The size of the icon.  The returned icon will be square with dimensions size * size pixels.  The default size for the icon is 32x32 pixels.",
                "optional": true,
                "minimum": 1,
                "maximum": 127,
                "type": "integer"
              }
            },
            "type": "object"
          },
          {
            "name": "callback",
            "parameters": [
              {
                "name": "iconURL",
                "optional": true,
                "type": "string"
              }
            ],
            "type": "function"
          }
        ]
      },
      {
        "name": "open",
        "type": "function",
        "async": "callback",
        "description": "Open the downloaded file.",
        "permissions": ["downloads.open"],
        "parameters": [
          {
            "name": "downloadId",
            "type": "integer"
          },
          {
            "name": "callback",
            "type": "function",
            "optional": true,
            "parameters": []
          }
        ]
      },
      {
        "name": "show",
        "type": "function",
        "description": "Show the downloaded file in its folder in a file manager.",
        "async": "callback",
        "parameters": [
          {
            "name": "downloadId",
            "type": "integer"
          },
          {
            "name": "callback",
            "type": "function",
            "optional": true,
            "parameters": [
              {
                "name": "success",
                "type": "boolean"
              }
            ]
          }
        ]
      },
      {
        "name": "showDefaultFolder",
        "type": "function",
        "parameters": []
      },
      {
        "name": "erase",
        "type": "function",
        "async": "callback",
        "description": "Erase matching <a href='#type-DownloadItem'>DownloadItems</a> from history",
        "parameters": [
          {
            "name": "query",
            "$ref": "DownloadQuery"
          },
          {
            "name": "callback",
            "type": "function",
            "optional": true,
            "parameters": [
              {
                "items": {
                  "type": "integer"
                },
                "name": "erasedIds",
                "type": "array"
              }
            ]
          }
        ]
      },
      {
        "name": "removeFile",
        "async": "callback",
        "type": "function",
        "parameters": [
          {
            "name": "downloadId",
            "type": "integer"
          },
          {
            "name": "callback",
            "type": "function",
            "optional": true,
            "parameters": [ ]
          }
        ]
      },
      {
        "description": "Prompt the user to either accept or cancel a dangerous download. <code>acceptDanger()</code> does not automatically accept dangerous downloads.",
        "name": "acceptDanger",
        "unsupported": true,
        "parameters": [
          {
            "name": "downloadId",
            "type": "integer"
          },
          {
            "name": "callback",
            "type": "function",
            "optional": true,
            "parameters": [ ]
          }
        ],
        "type": "function"
      },
      {
        "description": "Initiate dragging the file to another application.",
        "name": "drag",
        "unsupported": true,
        "parameters": [
          {
            "name": "downloadId",
            "type": "integer"
          }
        ],
        "type": "function"
      },
      {
        "name": "setShelfEnabled",
        "type": "function",
        "unsupported": true,
        "parameters": [
          {
            "name": "enabled",
            "type": "boolean"
          }
        ]
      }
    ],
    "events": [
      {
        "description": "This event fires with the <a href='#type-DownloadItem'>DownloadItem</a> object when a download begins.",
        "name": "onCreated",
        "parameters": [
          {
            "$ref": "DownloadItem",
            "name": "downloadItem"
          }
        ],
        "type": "function"
      },
      {
        "description": "Fires with the <code>downloadId</code> when a download is erased from history.",
        "name": "onErased",
        "parameters": [
          {
            "name": "downloadId",
            "description": "The <code>id</code> of the <a href='#type-DownloadItem'>DownloadItem</a> that was erased.",
            "type": "integer"
          }
        ],
        "type": "function"
      },
      {
        "name": "onChanged",
        "description": "When any of a <a href='#type-DownloadItem'>DownloadItem</a>'s properties except <code>bytesReceived</code> changes, this event fires with the <code>downloadId</code> and an object containing the properties that changed.",
        "parameters": [
          {
            "name": "downloadDelta",
            "type": "object",
            "properties": {
              "id": {
                "description": "The <code>id</code> of the <a href='#type-DownloadItem'>DownloadItem</a> that changed.",
                "type": "integer"
              },
              "url": {
                "description": "Describes a change in a <a href='#type-DownloadItem'>DownloadItem</a>'s <code>url</code>.",
                "optional": true,
                "$ref": "StringDelta"
              },
              "filename": {
                "description": "Describes a change in a <a href='#type-DownloadItem'>DownloadItem</a>'s <code>filename</code>.",
                "optional": true,
                "$ref": "StringDelta"
              },
              "danger": {
                "description": "Describes a change in a <a href='#type-DownloadItem'>DownloadItem</a>'s <code>danger</code>.",
                "optional": true,
                "$ref": "StringDelta"
              },
              "mime": {
                "description": "Describes a change in a <a href='#type-DownloadItem'>DownloadItem</a>'s <code>mime</code>.",
                "optional": true,
                "$ref": "StringDelta"
              },
              "startTime": {
                "description": "Describes a change in a <a href='#type-DownloadItem'>DownloadItem</a>'s <code>startTime</code>.",
                "optional": true,
                "$ref": "StringDelta"
              },
              "endTime": {
                "description": "Describes a change in a <a href='#type-DownloadItem'>DownloadItem</a>'s <code>endTime</code>.",
                "optional": true,
                "$ref": "StringDelta"
              },
              "state": {
                "description": "Describes a change in a <a href='#type-DownloadItem'>DownloadItem</a>'s <code>state</code>.",
                "optional": true,
                "$ref": "StringDelta"
              },
              "canResume": {
                "optional": true,
                "$ref": "BooleanDelta"
              },
              "paused": {
                "description": "Describes a change in a <a href='#type-DownloadItem'>DownloadItem</a>'s <code>paused</code>.",
                "optional": true,
                "$ref": "BooleanDelta"
              },
              "error": {
                "description": "Describes a change in a <a href='#type-DownloadItem'>DownloadItem</a>'s <code>error</code>.",
                "optional": true,
                "$ref": "StringDelta"
              },
              "totalBytes": {
                "description": "Describes a change in a <a href='#type-DownloadItem'>DownloadItem</a>'s <code>totalBytes</code>.",
                "optional": true,
                "$ref": "DoubleDelta"
              },
              "fileSize": {
                "description": "Describes a change in a <a href='#type-DownloadItem'>DownloadItem</a>'s <code>fileSize</code>.",
                "optional": true,
                "$ref": "DoubleDelta"
              },
              "exists": {
                "optional": true,
                "$ref": "BooleanDelta"
              }
            }
          }
        ],
        "type": "function"
      }
    ]
  },
  {
    "namespace": "events",
    "description": "The <code>chrome.events</code> namespace contains common types used by APIs dispatching events to notify you when something interesting happens.",
    "types": [
      {
        "id": "Rule",
        "type": "object",
        "description": "Description of a declarative rule for handling events.",
        "properties": {
          "id": {
            "type": "string",
            "optional": true,
            "description": "Optional identifier that allows referencing this rule."
          },
          "tags": {
            "type": "array",
            "items": {"type": "string"},
            "optional": true,
            "description":  "Tags can be used to annotate rules and perform operations on sets of rules."
          },
          "conditions": {
            "type": "array",
            "items": {"type": "any"},
            "description": "List of conditions that can trigger the actions."
          },
          "actions": {
            "type": "array",
            "items": {"type": "any"},
            "description": "List of actions that are triggered if one of the condtions is fulfilled."
          },
          "priority": {
            "type": "integer",
            "optional": true,
            "description": "Optional priority of this rule. Defaults to 100."
          }
        }
      },
      {
        "id": "Event",
        "type": "object",
        "description": "An object which allows the addition and removal of listeners for a Chrome event.",
        "functions": [
          {
            "name": "addListener",
            "type": "function",
            "description": "Registers an event listener <em>callback</em> to an event.",
            "parameters": [
              {
                "name": "callback",
                "type": "function",
                "description": "Called when an event occurs. The parameters of this function depend on the type of event."
              }
            ]
          },
          {
            "name": "removeListener",
            "type": "function",
            "description": "Deregisters an event listener <em>callback</em> from an event.",
            "parameters": [
              {
                "name": "callback",
                "type": "function",
                "description": "Listener that shall be unregistered."
              }
            ]
          },
          {
            "name": "hasListener",
            "type": "function",
            "parameters": [
              {
                "name": "callback",
                "type": "function",
                "description": "Listener whose registration status shall be tested."
              }
            ],
            "returns": {
              "type": "boolean",
              "description": "True if <em>callback</em> is registered to the event."
            }
          },
          {
            "name": "hasListeners",
            "type": "function",
            "parameters": [],
            "returns": {
              "type": "boolean",
              "description": "True if any event listeners are registered to the event."
            }
          },
          {
            "name": "addRules",
            "unsupported": true,
            "type": "function",
            "description": "Registers rules to handle events.",
            "parameters": [
              {
                "name": "eventName",
                "type": "string",
                "description": "Name of the event this function affects."
              },
              {
                "name": "webViewInstanceId",
                "type": "integer",
                "description": "If provided, this is an integer that uniquely identfies the <webview> associated with this function call."
              },
              {
                "name": "rules",
                "type": "array",
                "items": {"$ref": "Rule"},
                "description": "Rules to be registered. These do not replace previously registered rules."
              },
              {
                "name": "callback",
                "optional": true,
                "type": "function",
                "parameters": [
                  {
                    "name": "rules",
                    "type": "array",
                    "items": {"$ref": "Rule"},
                    "description": "Rules that were registered, the optional parameters are filled with values."
                  }
                ],
                "description": "Called with registered rules."
              }
            ]
          },
          {
            "name": "getRules",
            "unsupported": true,
            "type": "function",
            "description": "Returns currently registered rules.",
            "parameters": [
              {
                "name": "eventName",
                "type": "string",
                "description": "Name of the event this function affects."
              },
              {
                "name": "webViewInstanceId",
                "type": "integer",
                "description": "If provided, this is an integer that uniquely identfies the <webview> associated with this function call."
              },
              {
                "name": "ruleIdentifiers",
                "optional": true,
                "type": "array",
                "items": {"type": "string"},
                "description": "If an array is passed, only rules with identifiers contained in this array are returned."
              },
              {
                "name": "callback",
                "type": "function",
                "parameters": [
                  {
                    "name": "rules",
                    "type": "array",
                    "items": {"$ref": "Rule"},
                    "description": "Rules that were registered, the optional parameters are filled with values."
                  }
                ],
                "description": "Called with registered rules."
              }
            ]
          },
          {
            "name": "removeRules",
            "unsupported": true,
            "type": "function",
            "description": "Unregisters currently registered rules.",
            "parameters": [
              {
                "name": "eventName",
                "type": "string",
                "description": "Name of the event this function affects."
              },
              {
                "name": "webViewInstanceId",
                "type": "integer",
                "description": "If provided, this is an integer that uniquely identfies the <webview> associated with this function call."
              },
              {
                "name": "ruleIdentifiers",
                "optional": true,
                "type": "array",
                "items": {"type": "string"},
                "description": "If an array is passed, only rules with identifiers contained in this array are unregistered."
              },
              {
                "name": "callback",
                "optional": true,
                "type": "function",
                "parameters": [],
                "description": "Called when rules were unregistered."
              }
            ]
          }
        ]
      },
      {
        "id": "UrlFilter",
        "type": "object",
        "description": "Filters URLs for various criteria. See <a href='events#filtered'>event filtering</a>. All criteria are case sensitive.",
        "properties": {
          "hostContains": {
            "type": "string",
            "description": "Matches if the host name of the URL contains a specified string. To test whether a host name component has a prefix 'foo', use hostContains: '.foo'. This matches 'www.foobar.com' and 'foo.com', because an implicit dot is added at the beginning of the host name. Similarly, hostContains can be used to match against component suffix ('foo.') and to exactly match against components ('.foo.'). Suffix- and exact-matching for the last components need to be done separately using hostSuffix, because no implicit dot is added at the end of the host name.",
            "optional": true
          },
          "hostEquals": {
            "type": "string",
            "description": "Matches if the host name of the URL is equal to a specified string.",
            "optional": true
          },
          "hostPrefix": {
            "type": "string",
            "description": "Matches if the host name of the URL starts with a specified string.",
            "optional": true
          },
          "hostSuffix": {
            "type": "string",
            "description": "Matches if the host name of the URL ends with a specified string.",
            "optional": true
          },
          "pathContains": {
            "type": "string",
            "description": "Matches if the path segment of the URL contains a specified string.",
            "optional": true
          },
          "pathEquals": {
            "type": "string",
            "description": "Matches if the path segment of the URL is equal to a specified string.",
            "optional": true
          },
          "pathPrefix": {
            "type": "string",
            "description": "Matches if the path segment of the URL starts with a specified string.",
            "optional": true
          },
          "pathSuffix": {
            "type": "string",
            "description": "Matches if the path segment of the URL ends with a specified string.",
            "optional": true
          },
          "queryContains": {
            "type": "string",
            "description": "Matches if the query segment of the URL contains a specified string.",
            "optional": true
          },
          "queryEquals": {
            "type": "string",
            "description": "Matches if the query segment of the URL is equal to a specified string.",
            "optional": true
          },
          "queryPrefix": {
            "type": "string",
            "description": "Matches if the query segment of the URL starts with a specified string.",
            "optional": true
          },
          "querySuffix": {
            "type": "string",
            "description": "Matches if the query segment of the URL ends with a specified string.",
            "optional": true
          },
          "urlContains": {
            "type": "string",
            "description": "Matches if the URL (without fragment identifier) contains a specified string. Port numbers are stripped from the URL if they match the default port number.",
            "optional": true
          },
          "urlEquals": {
            "type": "string",
            "description": "Matches if the URL (without fragment identifier) is equal to a specified string. Port numbers are stripped from the URL if they match the default port number.",
            "optional": true
          },
          "urlMatches": {
            "type": "string",
            "description": "Matches if the URL (without fragment identifier) matches a specified regular expression. Port numbers are stripped from the URL if they match the default port number. The regular expressions use the <a href=\"https://github.com/google/re2/blob/master/doc/syntax.txt\">RE2 syntax</a>.",
            "optional": true
          },
          "originAndPathMatches": {
            "type": "string",
            "description": "Matches if the URL without query segment and fragment identifier matches a specified regular expression. Port numbers are stripped from the URL if they match the default port number. The regular expressions use the <a href=\"https://github.com/google/re2/blob/master/doc/syntax.txt\">RE2 syntax</a>.",
            "optional": true
          },
          "urlPrefix": {
            "type": "string",
            "description": "Matches if the URL (without fragment identifier) starts with a specified string. Port numbers are stripped from the URL if they match the default port number.",
            "optional": true
          },
          "urlSuffix": {
            "type": "string",
            "description": "Matches if the URL (without fragment identifier) ends with a specified string. Port numbers are stripped from the URL if they match the default port number.",
            "optional": true
          },
          "schemes": {
            "type": "array",
            "description": "Matches if the scheme of the URL is equal to any of the schemes specified in the array.",
            "optional": true,
            "items": { "type": "string" }
          },
          "ports": {
            "type": "array",
            "description": "Matches if the port of the URL is contained in any of the specified port lists. For example <code>[80, 443, [1000, 1200]]</code> matches all requests on port 80, 443 and in the range 1000-1200.",
            "optional": true,
            "items": {
              "choices": [
                {"type": "integer", "description": "A specific port."},
                {"type": "array", "minItems": 2, "maxItems": 2, "items": {"type": "integer"}, "description": "A pair of integers identiying the start and end (both inclusive) of a port range."}
              ]
            }
          }
        }
      }
    ]
  },
  {
    "namespace": "manifest",
    "types": [
      {
        "$extend": "Permission",
        "choices": [
          {
            "type": "string",
            "pattern": "^experiments(\\.\\w+)+$"
          }
        ]
      }
    ]
  },
  {
    "namespace": "extensionTypes",
    "description": "The <code>browser.extensionTypes</code> API contains type declarations for WebExtensions.",
    "types": [
      {
        "id": "ImageFormat",
        "type": "string",
        "enum": ["jpeg", "png"],
        "description": "The format of an image."
      },
      {
        "id": "ImageDetails",
        "type": "object",
        "description": "Details about the format and quality of an image.",
        "properties": {
          "format": {
            "$ref": "ImageFormat",
            "optional": true,
            "description": "The format of the resulting image.  Default is <code>\"jpeg\"</code>."
          },
          "quality": {
            "type": "integer",
            "optional": true,
            "minimum": 0,
            "maximum": 100,
            "description": "When format is <code>\"jpeg\"</code>, controls the quality of the resulting image.  This value is ignored for PNG images.  As quality is decreased, the resulting image will have more visual artifacts, and the number of bytes needed to store it will decrease."
          }
        }
      },
      {
        "id": "RunAt",
        "type": "string",
        "enum": ["document_start", "document_end", "document_idle"],
        "description": "The soonest that the JavaScript or CSS will be injected into the tab."
      },
      {
        "id": "InjectDetails",
        "type": "object",
        "description": "Details of the script or CSS to inject. Either the code or the file property must be set, but both may not be set at the same time.",
        "properties": {
          "code": {"type": "string", "optional": true, "description": "JavaScript or CSS code to inject.<br><br><b>Warning:</b><br>Be careful using the <code>code</code> parameter. Incorrect use of it may open your extension to <a href=\"https://en.wikipedia.org/wiki/Cross-site_scripting\">cross site scripting</a> attacks."},
          "file": {"type": "string", "optional": true, "description": "JavaScript or CSS file to inject."},
          "allFrames": {"type": "boolean", "optional": true, "description": "If allFrames is <code>true</code>, implies that the JavaScript or CSS should be injected into all frames of current page. By default, it's <code>false</code> and is only injected into the top frame."},
          "matchAboutBlank": {"type": "boolean", "optional": true, "description": "If matchAboutBlank is true, then the code is also injected in about:blank and about:srcdoc frames if your extension has access to its parent document. Code cannot be inserted in top-level about:-frames. By default it is <code>false</code>."},
          "frameId": {
            "type": "integer",
            "minimum": 0,
            "optional": true,
            "description": "The ID of the frame to inject the script into. This may not be used in combination with <code>allFrames</code>."
          },
          "runAt": {
            "$ref": "RunAt",
            "optional": true,
            "description": "The soonest that the JavaScript or CSS will be injected into the tab. Defaults to \"document_idle\"."
          }
        }
      },
      {
        "id": "Date",
        "choices": [
          {
            "type": "string",
            "format": "date"
          },
          {
            "type": "integer",
            "minimum": 0
          },
          {
            "type": "object",
            "isInstanceOf": "Date",
            "additionalProperties": { "type": "any" }
          }
        ]
      }
    ]
  },
  {
    "namespace": "extension",
    "allowedContexts": ["content"],
    "description": "The <code>browser.extension</code> API has utilities that can be used by any extension page. It includes support for exchanging messages between an extension and its content scripts or between extensions, as described in detail in $(topic:messaging)[Message Passing].",
    "properties": {
      "lastError": {
        "type": "object",
        "optional": true,
        "allowedContexts": ["content"],
        "description": "Set for the lifetime of a callback if an ansychronous extension api has resulted in an error. If no error has occured lastError will be <var>undefined</var>.",
        "properties": {
          "message": { "type": "string", "description": "Description of the error that has taken place." }
        },
        "additionalProperties": {
          "type": "any"
        }
      },
      "inIncognitoContext": {
        "type": "boolean",
        "optional": true,
        "allowedContexts": ["content"],
        "description": "True for content scripts running inside incognito tabs, and for extension pages running inside an incognito process. The latter only applies to extensions with 'split' incognito_behavior."
      }
    },
    "types": [
      {
        "id": "ViewType",
        "type": "string",
        "enum": ["tab", "notification", "popup"],
        "description": "The type of extension view."
      }
    ],
    "functions": [
      {
        "name": "getURL",
        "type": "function",
        "allowedContexts": ["content"],
        "description": "Converts a relative path within an extension install directory to a fully-qualified URL.",
        "parameters": [
          {
            "type": "string",
            "name": "path",
            "description": "A path to a resource within an extension expressed relative to its install directory."
          }
        ],
        "returns": {
          "type": "string",
          "description": "The fully-qualified URL to the resource."
        }
      },
      {
        "name": "getViews",
        "type": "function",
        "description": "Returns an array of the JavaScript 'window' objects for each of the pages running inside the current extension.",
        "parameters": [
          {
            "type": "object",
            "name": "fetchProperties",
            "optional": true,
            "properties": {
              "type": {
                "$ref": "ViewType",
                "optional": true,
                "description": "The type of view to get. If omitted, returns all views (including background pages and tabs). Valid values: 'tab', 'notification', 'popup'."
              },
              "windowId": {
                "type": "integer",
                "optional": true,
                "description": "The window to restrict the search to. If omitted, returns all views."
              }
            }
          }
        ],
        "returns": {
          "type": "array",
          "description": "Array of global objects",
          "items": {
            "name": "viewGlobals",
            "type": "object",
            "isInstanceOf": "Window",
            "additionalProperties": { "type": "any" }
          }
        }
      },
      {
        "name": "getBackgroundPage",
        "type": "function",
        "description": "Returns the JavaScript 'window' object for the background page running inside the current extension. Returns null if the extension has no background page.",
        "parameters": [],
        "returns": {
          "type": "object",
          "optional": true,
          "name": "backgroundPageGlobal",
          "isInstanceOf": "Window",
          "additionalProperties": { "type": "any" }
        }
      },
      {
        "name": "isAllowedIncognitoAccess",
        "type": "function",
        "description": "Retrieves the state of the extension's access to Incognito-mode (as determined by the user-controlled 'Allowed in Incognito' checkbox.",
        "async": "callback",
        "parameters": [
          {
            "type": "function",
            "name": "callback",
            "parameters": [
              {
                "name": "isAllowedAccess",
                "type": "boolean",
                "description": "True if the extension has access to Incognito mode, false otherwise."
              }
            ]
          }
        ]
      },
      {
        "name": "isAllowedFileSchemeAccess",
        "type": "function",
        "description": "Retrieves the state of the extension's access to the 'file://' scheme (as determined by the user-controlled 'Allow access to File URLs' checkbox.",
        "async": "callback",
        "parameters": [
          {
            "type": "function",
            "name": "callback",
            "parameters": [
              {
                "name": "isAllowedAccess",
                "type": "boolean",
                "description": "True if the extension can access the 'file://' scheme, false otherwise."
              }
            ]
          }
        ]
      },
      {
        "name": "setUpdateUrlData",
        "unsupported": true,
        "type": "function",
        "description": "Sets the value of the ap CGI parameter used in the extension's update URL.  This value is ignored for extensions that are hosted in the browser vendor's store.",
        "parameters": [
          {"type": "string", "name": "data", "maxLength": 1024}
        ]
      }
    ],
    "events": [
      {
        "name": "onRequest",
        "unsupported": true,
        "deprecated": "Please use $(ref:runtime.onMessage).",
        "type": "function",
        "description": "Fired when a request is sent from either an extension process or a content script.",
        "parameters": [
          {"name": "request", "type": "any", "optional": true, "description": "The request sent by the calling script."},
          {"name": "sender", "$ref": "runtime.MessageSender" },
          {"name": "sendResponse", "type": "function", "description": "Function to call (at most once) when you have a response. The argument should be any JSON-ifiable object, or undefined if there is no response. If you have more than one <code>onRequest</code> listener in the same document, then only one may send a response." }
        ]
      },
      {
        "name": "onRequestExternal",
        "unsupported": true,
        "deprecated": "Please use $(ref:runtime.onMessageExternal).",
        "type": "function",
        "description": "Fired when a request is sent from another extension.",
        "parameters": [
          {"name": "request", "type": "any", "optional": true, "description": "The request sent by the calling script."},
          {"name": "sender", "$ref": "runtime.MessageSender" },
          {"name": "sendResponse", "type": "function", "description": "Function to call when you have a response. The argument should be any JSON-ifiable object, or undefined if there is no response." }
        ]
      }
    ]
  },
  {
    "namespace": "i18n",
    "allowedContexts": ["content"],
    "defaultContexts": ["content"],
    "description": "Use the <code>browser.i18n</code> infrastructure to implement internationalization across your whole app or extension.",
    "types": [
      {
        "id": "LanguageCode",
        "type": "string",
        "description": "An ISO language code such as <code>en</code> or <code>fr</code>. For a complete list of languages supported by this method, see <a href='http://src.chromium.org/viewvc/chrome/trunk/src/third_party/cld/languages/internal/languages.cc'>kLanguageInfoTable</a>. For an unknown language, <code>und</code> will be returned, which means that [percentage] of the text is unknown to CLD"
      }
    ],
    "functions": [
      {
        "name": "getAcceptLanguages",
        "type": "function",
        "description": "Gets the accept-languages of the browser. This is different from the locale used by the browser; to get the locale, use $(ref:i18n.getUILanguage).",
        "async": "callback",
        "parameters": [
          {
            "type": "function",
            "name": "callback",
            "parameters": [
              {"name": "languages", "type": "array", "items": {"$ref": "LanguageCode"}, "description": "Array of LanguageCode"}
            ]
          }
        ]
      },
      {
        "name": "getMessage",
        "type": "function",
        "description": "Gets the localized string for the specified message. If the message is missing, this method returns an empty string (''). If the format of the <code>getMessage()</code> call is wrong &mdash; for example, <em>messageName</em> is not a string or the <em>substitutions</em> array has more than 9 elements &mdash; this method returns <code>undefined</code>.",
        "parameters": [
          {
            "type": "string",
            "name": "messageName",
            "description": "The name of the message, as specified in the <code>$(topic:i18n-messages)[messages.json]</code> file."
          },
          {
            "type": "any",
            "name": "substitutions",
            "optional": true,
            "description": "Substitution strings, if the message requires any."
          }
        ],
        "returns": {
          "type": "string",
          "description": "Message localized for current locale."
        }
      },
      {
        "name": "getUILanguage",
        "type": "function",
        "description": "Gets the browser UI language of the browser. This is different from $(ref:i18n.getAcceptLanguages) which returns the preferred user languages.",
        "parameters": [],
        "returns": {
          "type": "string",
          "description": "The browser UI language code such as en-US or fr-FR."
        }
      },
      {
        "name": "detectLanguage",
        "type": "function",
        "description": "Detects the language of the provided text using CLD.",
        "async": "callback",
        "parameters": [
          {
            "type": "string",
            "name": "text",
            "description": "User input string to be translated."
          },
          {
            "type": "function",
            "name": "callback",
            "parameters": [
              {
                "type": "object",
                "name": "result",
                "description": "LanguageDetectionResult object that holds detected langugae reliability and array of DetectedLanguage",
                "properties": {
                  "isReliable": { "type": "boolean", "description": "CLD detected language reliability" },
                  "languages":
                  {
                    "type": "array",
                    "description": "array of detectedLanguage",
                    "items":
                    {
                      "type": "object",
                      "description": "DetectedLanguage object that holds detected ISO language code and its percentage in the input string",
                      "properties":
                      {
                        "language":
                        {
                          "$ref": "LanguageCode"
                        },
                        "percentage":
                        {
                          "type": "integer",
                          "description": "The percentage of the detected language"
                        }
                      }
                    }
                  }
                }
              }
            ]
          }
        ]
      }
    ],
    "events": []
  },
  {
    "namespace": "idle",
    "description": "Use the <code>browser.idle</code> API to detect when the machine's idle state changes.",
    "permissions": ["idle"],
    "types": [
      {
        "id": "IdleState",
        "type": "string",
        "enum": ["active", "idle"]
      }
    ],
    "functions": [
      {
        "name": "queryState",
        "type": "function",
        "description": "Returns \"idle\" if the user has not generated any input for a specified number of seconds, or \"active\" otherwise.",
        "async": "callback",
        "parameters": [
          {
            "name": "detectionIntervalInSeconds",
            "type": "integer",
            "minimum": 15,
            "description": "The system is considered idle if detectionIntervalInSeconds seconds have elapsed since the last user input detected."
          },
          {
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "name": "newState",
                "$ref": "IdleState"
              }
            ]
          }
        ]
      },
      {
        "name": "setDetectionInterval",
        "type": "function",
        "description": "Sets the interval, in seconds, used to determine when the system is in an idle state for onStateChanged events. The default interval is 60 seconds.",
        "parameters": [
          {
            "name": "intervalInSeconds",
            "type": "integer",
            "minimum": 15,
            "description": "Threshold, in seconds, used to determine when the system is in an idle state."
          }
        ]
      }
    ],
    "events": [
      {
        "name": "onStateChanged",
        "type": "function",
        "description": "Fired when the system changes to an active or idle state. The event fires with \"idle\" if the the user has not generated any input for a specified number of seconds, and \"active\" when the user generates input on an idle system.",
        "parameters": [
          {
            "name": "newState",
            "$ref": "IdleState"
          }
        ]
      }
    ]
  },
  {
    "namespace":"management",
    "description": "The <code>browser.management</code> API provides ways to manage the list of extensions that are installed and running.",
    "types": [
      {
        "id": "IconInfo",
        "description": "Information about an icon belonging to an extension.",
        "type": "object",
        "properties": {
          "size": {
            "type": "integer",
            "description": "A number representing the width and height of the icon. Likely values include (but are not limited to) 128, 48, 24, and 16."
          },
          "url": {
            "type": "string",
            "description": "The URL for this icon image. To display a grayscale version of the icon (to indicate that an extension is disabled, for example), append <code>?grayscale=true</code> to the URL."
          }
        }
      },
      {
        "id": "ExtensionDisabledReason",
        "description": "A reason the item is disabled.",
        "type": "string",
        "enum": ["unknown", "permissions_increase"]
      },
      {
        "id": "ExtensionType",
        "description": "The type of this extension. Will always be 'extension'.",
        "type": "string",
        "enum": ["extension"]
      },
      {
        "id": "ExtensionInstallType",
        "description": "How the extension was installed. One of<br><var>development</var>: The extension was loaded unpacked in developer mode,<br><var>normal</var>: The extension was installed normally via an .xpi file,<br><var>sideload</var>: The extension was installed by other software on the machine,<br><var>other</var>: The extension was installed by other means.",
        "type": "string",
        "enum": ["development", "normal", "sideload", "other"]
      },
      {
        "id": "ExtensionInfo",
        "description": "Information about an installed extension.",
        "type": "object",
        "properties": {
          "id": {
            "description": "The extension's unique identifier.",
            "type": "string"
          },
          "name": {
            "description": "The name of this extension.",
            "type": "string"
          },
          "shortName": {
            "description": "A short version of the name of this extension.",
            "type": "string"
          },
          "description": {
            "description": "The description of this extension.",
            "type": "string"
          },
          "version": {
            "description": "The <a href='manifest/version'>version</a> of this extension.",
            "type": "string"
          },
          "versionName": {
            "description": "The <a href='manifest/version#version_name'>version name</a> of this extension if the manifest specified one.",
            "type": "string",
            "optional": true
          },
          "mayDisable": {
            "description": "Whether this extension can be disabled or uninstalled by the user.",
            "type": "boolean"
          },
          "enabled": {
            "description": "Whether it is currently enabled or disabled.",
            "type": "boolean"
          },
          "disabledReason": {
            "description": "A reason the item is disabled.",
            "$ref": "ExtensionDisabledReason",
            "optional": true
          },
          "type": {
            "description": "The type of this extension. Will always return 'extension'.",
            "$ref": "ExtensionType"
          },
          "homepageUrl": {
            "description": "The URL of the homepage of this extension.",
            "type": "string",
            "optional": true
          },
          "updateUrl": {
            "description": "The update URL of this extension.",
            "type": "string",
            "optional": true
          },
          "optionsUrl": {
            "description": "The url for the item's options page, if it has one.",
            "type": "string"
          },
          "icons": {
            "description": "A list of icon information. Note that this just reflects what was declared in the manifest, and the actual image at that url may be larger or smaller than what was declared, so you might consider using explicit width and height attributes on img tags referencing these images. See the <a href='manifest/icons'>manifest documentation on icons</a> for more details.",
            "type": "array",
            "optional": true,
            "items": {
              "$ref": "IconInfo"
            }
          },
          "permissions": {
            "description": "Returns a list of API based permissions.",
            "type": "array",
            "items" : {
              "type": "string"
            }
          },
          "hostPermissions": {
            "description": "Returns a list of host based permissions.",
            "type": "array",
            "items" : {
              "type": "string"
            }
          },
          "installType": {
            "description": "How the extension was installed.",
            "$ref": "ExtensionInstallType"
          }
        }
      }
    ],
    "functions": [
      {
        "name": "getAll",
        "type": "function",
        "permissions": ["management"],
        "unsupported": true,
        "description": "Returns a list of information about installed extensions.",
        "async": "callback",
        "parameters": [
          {
            "name": "callback",
            "type": "function",
            "optional": true,
            "parameters": [
              {
                "type": "array",
                "name": "result",
                "items": {
                  "$ref": "ExtensionInfo"
                }
              }
            ]
          }
        ]
      },
      {
        "name": "get",
        "type": "function",
        "permissions": ["management"],
        "unsupported": true,
        "description": "Returns information about the installed extension that has the given ID.",
        "async": "callback",
        "parameters": [
          {
            "name": "id",
            "$ref": "manifest.ExtensionID",
            "description": "The ID from an item of $(ref:management.ExtensionInfo)."
          },
          {
            "name": "callback",
            "type": "function",
            "optional": true,
            "parameters": [
              {
                "name": "result",
                "$ref": "ExtensionInfo"
              }
            ]
          }
        ]
      },
      {
        "name": "getSelf",
        "type": "function",
        "description": "Returns information about the calling extension. Note: This function can be used without requesting the 'management' permission in the manifest.",
        "async": "callback",
        "parameters": [
          {
            "type": "function",
            "name": "callback",
            "optional": true,
            "parameters": [
              {
                "name": "result",
                "$ref": "ExtensionInfo"
              }
            ]
          }
        ]
      },
      {
        "name": "uninstallSelf",
        "type": "function",
        "description": "Uninstalls the calling extension. Note: This function can be used without requesting the 'management' permission in the manifest.",
        "async": "callback",
        "parameters": [
          {
            "type": "object",
            "name": "options",
            "optional": true,
            "properties": {
              "showConfirmDialog": {
                "type": "boolean",
                "optional": true,
                "description": "Whether or not a confirm-uninstall dialog should prompt the user. Defaults to false."
              },
              "dialogMessage": {
                "type": "string",
                "optional": true,
                "description": "The message to display to a user when being asked to confirm removal of the extension."
              }
            }
          },
          {
            "name": "callback",
            "type": "function",
            "optional": true,
            "parameters": []
          }
        ]
      }
    ]
  },
  {
    "namespace": "notifications",
    "permissions": ["notifications"],
    "types": [
      {
        "id": "TemplateType",
        "type": "string",
        "enum": [
          "basic",
          "image",
          "list",
          "progress"
        ]
      },
      {
        "id": "PermissionLevel",
        "type": "string",
        "enum": [
          "granted",
          "denied"
        ]
      },
      {
        "id": "NotificationItem",
        "type": "object",
        "properties": {
          "title": {
            "description": "Title of one item of a list notification.",
            "type": "string"
          },
          "message": {
            "description": "Additional details about this item.",
            "type": "string"
          }
        }
      },
      {
        "id": "CreateNotificationOptions",
        "type": "object",
        "properties": {
          "type": {
            "description": "Which type of notification to display.",
            "$ref": "TemplateType"
          },
          "iconUrl": {
            "optional": true,
            "description": "A URL to the sender's avatar, app icon, or a thumbnail for image notifications.",
            "type": "string"
          },
          "appIconMaskUrl": {
            "optional": true,
            "description": "A URL to the app icon mask.",
            "type": "string"
          },
          "title": {
            "description": "Title of the notification (e.g. sender name for email).",
            "type": "string"
          },
          "message": {
            "description": "Main notification content.",
            "type": "string"
          },
          "contextMessage": {
            "optional": true,
            "description": "Alternate notification content with a lower-weight font.",
            "type": "string"
          },
          "priority": {
            "optional": true,
            "description": "Priority ranges from -2 to 2. -2 is lowest priority. 2 is highest. Zero is default.",
            "type": "integer",
            "minimum": -2,
            "maximum": 2
          },
          "eventTime": {
            "optional": true,
            "description": "A timestamp associated with the notification, in milliseconds past the epoch.",
            "type": "number"
          },
          "buttons": {
            "unsupported": true,
            "optional": true,
            "description": "Text and icons for up to two notification action buttons.",
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "title": {
                  "type": "string"
                },
                "iconUrl": {
                  "optional": true,
                  "type": "string"
                }
              }
            }
          },
          "imageUrl": {
            "optional": true,
            "description": "A URL to the image thumbnail for image-type notifications.",
            "type": "string"
          },
          "items": {
            "optional": true,
            "description": "Items for multi-item notifications.",
            "type": "array",
            "items": { "$ref": "NotificationItem" }
          },
          "progress": {
            "optional": true,
            "description": "Current progress ranges from 0 to 100.",
            "type": "integer",
            "minimum": 0,
            "maximum": 100
          },
          "isClickable": {
            "optional": true,
            "description": "Whether to show UI indicating that the app will visibly respond to clicks on the body of a notification.",
            "type": "boolean"
          }
        }
      },
      {
        "id": "UpdateNotificationOptions",
        "type": "object",
        "properties": {
          "type": {
            "optional": true,
            "description": "Which type of notification to display.",
            "$ref": "TemplateType"
          },
          "iconUrl": {
            "optional": true,
            "description": "A URL to the sender's avatar, app icon, or a thumbnail for image notifications.",
            "type": "string"
          },
          "appIconMaskUrl": {
            "optional": true,
            "description": "A URL to the app icon mask.",
            "type": "string"
          },
          "title": {
            "optional": true,
            "description": "Title of the notification (e.g. sender name for email).",
            "type": "string"
          },
          "message": {
            "optional": true,
            "description": "Main notification content.",
            "type": "string"
          },
          "contextMessage": {
            "optional": true,
            "description": "Alternate notification content with a lower-weight font.",
            "type": "string"
          },
          "priority": {
            "optional": true,
            "description": "Priority ranges from -2 to 2. -2 is lowest priority. 2 is highest. Zero is default.",
            "type": "integer",
            "minimum": -2,
            "maximum": 2
          },
          "eventTime": {
            "optional": true,
            "description": "A timestamp associated with the notification, in milliseconds past the epoch.",
            "type": "number"
          },
          "buttons": {
            "unsupported": true,
            "optional": true,
            "description": "Text and icons for up to two notification action buttons.",
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "title": {
                  "type": "string"
                },
                "iconUrl": {
                  "optional": true,
                  "type": "string"
                }
              }
            }
          },
          "imageUrl": {
            "optional": true,
            "description": "A URL to the image thumbnail for image-type notifications.",
            "type": "string"
          },
          "items": {
            "optional": true,
            "description": "Items for multi-item notifications.",
            "type": "array",
            "items": { "$ref": "NotificationItem" }
          },
          "progress": {
            "optional": true,
            "description": "Current progress ranges from 0 to 100.",
            "type": "integer",
            "minimum": 0,
            "maximum": 100
          },
          "isClickable": {
            "optional": true,
            "description": "Whether to show UI indicating that the app will visibly respond to clicks on the body of a notification.",
            "type": "boolean"
          }
        }
      }
    ],
    "functions": [
      {
        "name": "create",
        "type": "function",
        "description": "Creates and displays a notification.",
        "async": "callback",
        "parameters": [
          {
            "optional": true,
            "type": "string",
            "name": "notificationId",
            "description": "Identifier of the notification. If it is empty, this method generates an id. If it matches an existing notification, this method first clears that notification before proceeding with the create operation."
          },
          {
            "$ref": "CreateNotificationOptions",
            "name": "options",
            "description": "Contents of the notification."
          },
          {
            "optional": true,
            "type": "function",
            "name": "callback",
            "parameters": [
              {
                "name": "notificationId",
                "type": "string",
                "description": "The notification id (either supplied or generated) that represents the created notification."
              }
            ]
          }
        ]
      },
      {
        "name": "update",
        "unsupported": true,
        "type": "function",
        "description": "Updates an existing notification.",
        "async": "callback",
        "parameters": [
          {
            "type": "string",
            "name": "notificationId",
            "description": "The id of the notification to be updated."
          },
          {
            "$ref": "UpdateNotificationOptions",
            "name": "options",
            "description": "Contents of the notification to update to."
          },
          {
            "optional": true,
            "type": "function",
            "name": "callback",
            "parameters": [
              {
                "name": "wasUpdated",
                "type": "boolean",
                "description": "Indicates whether a matching notification existed."
              }
            ]
          }
        ]
      },
      {
        "name": "clear",
        "type": "function",
        "description": "Clears an existing notification.",
        "async": "callback",
        "parameters": [
          {
            "type": "string",
            "name": "notificationId",
            "description": "The id of the notification to be updated."
          },
          {
            "optional": true,
            "type": "function",
            "name": "callback",
            "parameters": [
              {
                "name": "wasCleared",
                "type": "boolean",
                "description": "Indicates whether a matching notification existed."
              }
            ]
          }
        ]
      },
      {
        "name": "getAll",
        "type": "function",
        "description": "Retrieves all the notifications.",
        "async": "callback",
        "parameters": [
          {
            "type": "function",
            "name": "callback",
            "parameters": [
              {
                "name": "notifications",
                "type": "object",
                "description": "The set of notifications currently in the system."
              }
            ]
          }
        ]
      },
      {
        "name": "getPermissionLevel",
        "unsupported": true,
        "type": "function",
        "description": "Retrieves whether the user has enabled notifications from this app or extension.",
        "async": "callback",
        "parameters": [
          {
            "type": "function",
            "name": "callback",
            "parameters": [
              {
                "name": "level",
                "$ref": "PermissionLevel",
                "description": "The current permission level."
              }
            ]
          }
        ]
      }
    ],
    "events": [
      {
        "name": "onClosed",
        "type": "function",
        "description": "Fired when the notification closed, either by the system or by user action.",
        "parameters": [
          {
            "type": "string",
            "name": "notificationId",
            "description": "The notificationId of the closed notification."
          },
          {
            "type": "boolean",
            "name": "byUser",
            "description": "True if the notification was closed by the user."
          }
        ]
      },
      {
        "name": "onClicked",
        "type": "function",
        "description": "Fired when the user clicked in a non-button area of the notification.",
        "parameters": [
          {
            "type": "string",
            "name": "notificationId",
            "description": "The notificationId of the clicked notification."
          }
        ]
      },
      {
        "name": "onButtonClicked",
        "type": "function",
        "description": "Fired when the  user pressed a button in the notification.",
        "parameters": [
          {
            "type": "string",
            "name": "notificationId",
            "description": "The notificationId of the clicked notification."
          },
          {
            "type": "number",
            "name": "buttonIndex",
            "description": "The index of the button clicked by the user."
          }
        ]
      },
      {
        "name": "onPermissionLevelChanged",
        "unsupported": true,
        "type": "function",
        "description": "Fired when the user changes the permission level.",
        "parameters": [
          {
            "$ref": "PermissionLevel",
            "name": "level",
            "description": "The new permission level."
          }
        ]
      },
      {
        "name": "onShowSettings",
        "unsupported": true,
        "type": "function",
        "description": "Fired when the user clicked on a link for the app's notification settings.",
        "parameters": [
        ]
      }
    ]
  },
  {
    "namespace": "runtime",
    "allowedContexts": ["content"],
    "description": "Use the <code>browser.runtime</code> API to retrieve the background page, return details about the manifest, and listen for and respond to events in the app or extension lifecycle. You can also use this API to convert the relative path of URLs to fully-qualified URLs.",
    "types": [
      {
        "id": "Port",
        "type": "object",
        "allowedContexts": ["content"],
        "description": "An object which allows two way communication with other pages.",
        "properties": {
          "name": {"type": "string"},
          "disconnect": { "type": "function" },
          "onDisconnect": { "$ref": "events.Event" },
          "onMessage": { "$ref": "events.Event" },
          "postMessage": {"type": "function"},
          "sender": {
            "$ref": "MessageSender",
            "optional": true,
            "description": "This property will <b>only</b> be present on ports passed to onConnect/onConnectExternal listeners."
          }
        },
        "additionalProperties": { "type": "any"}
      },
      {
        "id": "MessageSender",
        "type": "object",
        "allowedContexts": ["content"],
        "description": "An object containing information about the script context that sent a message or request.",
        "properties": {
          "tab": {"$ref": "tabs.Tab", "optional": true, "description": "The $(ref:tabs.Tab) which opened the connection, if any. This property will <strong>only</strong> be present when the connection was opened from a tab (including content scripts), and <strong>only</strong> if the receiver is an extension, not an app."},
          "frameId": {"type": "integer", "optional": true, "description": "The $(topic:frame_ids)[frame] that opened the connection. 0 for top-level frames, positive for child frames. This will only be set when <code>tab</code> is set."},
          "id": {"type": "string", "optional": true, "description": "The ID of the extension or app that opened the connection, if any."},
          "url": {"type": "string", "optional": true, "description": "The URL of the page or frame that opened the connection. If the sender is in an iframe, it will be iframe's URL not the URL of the page which hosts it."},
          "tlsChannelId": {"unsupported": true, "type": "string", "optional": true, "description": "The TLS channel ID of the page or frame that opened the connection, if requested by the extension or app, and if available."}
        }
      },
      {
        "id": "PlatformOs",
        "type": "string",
        "allowedContexts": ["content"],
        "description": "The operating system the browser is running on.",
        "enum": ["mac", "win", "android", "cros", "linux", "openbsd"]
      },
      {
        "id": "PlatformArch",
        "type": "string",
        "enum": ["arm", "x86-32", "x86-64"],
        "allowedContexts": ["content"],
        "description": "The machine's processor architecture."
      },
      {
        "id": "PlatformInfo",
        "type": "object",
        "allowedContexts": ["content"],
        "description": "An object containing information about the current platform.",
        "properties": {
          "os": {
            "$ref": "PlatformOs",
            "description": "The operating system the browser is running on."
          },
          "arch": {
            "$ref": "PlatformArch",
            "description": "The machine's processor architecture."
          },
          "nacl_arch" : {
            "unsupported": true,
            "description": "The native client architecture. This may be different from arch on some platforms.",
            "$ref": "PlatformNaclArch"
          }
        }
      },
      {
        "id": "BrowserInfo",
        "type": "object",
        "description": "An object containing information about the current browser.",
        "properties": {
          "name": {
            "type": "string",
            "description": "The name of the browser, for example 'Firefox'."
          },
          "vendor": {
            "type": "string",
            "description": "The name of the browser vendor, for example 'Mozilla'."
          },
          "version": {
            "type": "string",
            "description": "The browser's version, for example '42.0.0' or '0.8.1pre'."
          },
          "buildID": {
            "type": "string",
            "description": "The browser's build ID/date, for example '20160101'."
          }
        }
      },
      {
        "id": "RequestUpdateCheckStatus",
        "type": "string",
        "enum": ["throttled", "no_update", "update_available"],
        "allowedContexts": ["content"],
        "description": "Result of the update check."
      },
      {
        "id": "OnInstalledReason",
        "type": "string",
        "enum": ["install", "update", "chrome_update", "shared_module_update"],
        "allowedContexts": ["content"],
        "description": "The reason that this event is being dispatched."
      },
      {
        "id": "OnRestartRequiredReason",
        "type": "string",
        "allowedContexts": ["content"],
        "description": "The reason that the event is being dispatched. 'app_update' is used when the restart is needed because the application is updated to a newer version. 'os_update' is used when the restart is needed because the browser/OS is updated to a newer version. 'periodic' is used when the system runs for more than the permitted uptime set in the enterprise policy.",
        "enum": ["app_update", "os_update", "periodic"]
      }
    ],
    "properties": {
      "lastError": {
        "type": "object",
        "optional": true,
        "allowedContexts": ["content"],
        "description": "This will be defined during an API method callback if there was an error",
        "properties": {
          "message": {
            "optional": true,
            "type": "string",
            "description": "Details about the error which occurred."
          }
        },
        "additionalProperties": {
          "type": "any"
        }
      },
      "id": {
        "type": "string",
        "allowedContexts": ["content"],
        "description": "The ID of the extension/app."
      }
    },
    "functions": [
      {
        "name": "getBackgroundPage",
        "type": "function",
        "description": "Retrieves the JavaScript 'window' object for the background page running inside the current extension/app. If the background page is an event page, the system will ensure it is loaded before calling the callback. If there is no background page, an error is set.",
        "async": "callback",
        "parameters": [
          {
            "type": "function",
            "name": "callback",
            "parameters": [
              {
                "name": "backgroundPage",
                "optional": true,
                "type": "object",
                "isInstanceOf": "Window",
                "additionalProperties": { "type": "any" },
                "description": "The JavaScript 'window' object for the background page."
              }
            ]
          }
        ]
      },
      {
        "name": "openOptionsPage",
        "type": "function",
        "description": "<p>Open your Extension's options page, if possible.</p><p>The precise behavior may depend on your manifest's <code>$(topic:optionsV2)[options_ui]</code> or <code>$(topic:options)[options_page]</code> key, or what the browser happens to support at the time.</p><p>If your Extension does not declare an options page, or the browser failed to create one for some other reason, the callback will set $(ref:lastError).</p>",
        "async": "callback",
        "parameters": [{
          "type": "function",
          "name": "callback",
          "parameters": [],
          "optional": true
        }]
      },
      {
        "name": "getManifest",
        "allowedContexts": ["content"],
        "description": "Returns details about the app or extension from the manifest. The object returned is a serialization of the full $(topic:manifest)[manifest file].",
        "type": "function",
        "parameters": [],
        "returns": {
          "type": "object",
          "properties": {},
          "additionalProperties": { "type": "any" },
          "description": "The manifest details."
        }
      },
      {
        "name": "getURL",
        "type": "function",
        "allowedContexts": ["content"],
        "description": "Converts a relative path within an app/extension install directory to a fully-qualified URL.",
        "parameters": [
          {
            "type": "string",
            "name": "path",
            "description": "A path to a resource within an app/extension expressed relative to its install directory."
          }
        ],
        "returns": {
          "type": "string",
          "description": "The fully-qualified URL to the resource."
        }
      },
      {
        "name": "setUninstallURL",
        "type": "function",
        "description": "Sets the URL to be visited upon uninstallation. This may be used to clean up server-side data, do analytics, and implement surveys. Maximum 255 characters.",
        "async": "callback",
        "parameters": [
          {
            "type": "string",
            "name": "url",
            "maxLength": 255,
            "description": "URL to be opened after the extension is uninstalled. This URL must have an http: or https: scheme. Set an empty string to not open a new tab upon uninstallation."
          },
          {
            "type": "function",
            "name": "callback",
            "optional": true,
            "description": "Called when the uninstall URL is set. If the given URL is invalid, $(ref:runtime.lastError) will be set.",
            "parameters": []
          }
        ]
      },
      {
        "name": "reload",
        "description": "Reloads the app or extension.",
        "type": "function",
        "parameters": []
      },
      {
        "name": "requestUpdateCheck",
        "unsupported": true,
        "type": "function",
        "description": "Requests an update check for this app/extension.",
        "async": "callback",
        "parameters": [
          {
            "type": "function",
            "name": "callback",
            "parameters": [
              {
                "name": "status",
                "$ref": "RequestUpdateCheckStatus",
                "description": "Result of the update check."
              },
              {
                "name": "details",
                "type": "object",
                "optional": true,
                "properties": {
                  "version": {
                    "type": "string",
                    "description": "The version of the available update."
                  }
                },
                "description": "If an update is available, this contains more information about the available update."
              }
            ]
          }
        ]
      },
      {
        "name": "restart",
        "unsupported": true,
        "description": "Restart the device when the app runs in kiosk mode. Otherwise, it's no-op.",
        "type": "function",
        "parameters": []
      },
      {
        "name": "connect",
        "type": "function",
        "allowedContexts": ["content"],
        "description": "Attempts to connect to connect listeners within an extension/app (such as the background page), or other extensions/apps. This is useful for content scripts connecting to their extension processes, inter-app/extension communication, and $(topic:manifest/externally_connectable)[web messaging]. Note that this does not connect to any listeners in a content script. Extensions may connect to content scripts embedded in tabs via $(ref:tabs.connect).",
        "parameters": [
          {"type": "string", "name": "extensionId", "optional": true, "description": "The ID of the extension or app to connect to. If omitted, a connection will be attempted with your own extension. Required if sending messages from a web page for $(topic:manifest/externally_connectable)[web messaging]."},
          {
            "type": "object",
            "name": "connectInfo",
            "properties": {
              "name": { "type": "string", "optional": true, "description": "Will be passed into onConnect for processes that are listening for the connection event." },
              "includeTlsChannelId": { "type": "boolean", "optional": true, "description": "Whether the TLS channel ID will be passed into onConnectExternal for processes that are listening for the connection event." }
            },
            "optional": true
          }
        ],
        "returns": {
          "$ref": "Port",
          "description": "Port through which messages can be sent and received. The port's $(ref:runtime.Port onDisconnect) event is fired if the extension/app does not exist. "
        }
      },
      {
        "name": "connectNative",
        "type": "function",
        "description": "Connects to a native application in the host machine.",
        "permissions": ["nativeMessaging"],
        "parameters": [
          {
            "type": "string",
            "name": "application",
            "description": "The name of the registered application to connect to."
          }
        ],
        "returns": {
          "$ref": "Port",
          "description": "Port through which messages can be sent and received with the application"
        }
      },
      {
        "name": "sendMessage",
        "type": "function",
        "allowAmbiguousOptionalArguments": true,
        "allowedContexts": ["content"],
        "description": "Sends a single message to event listeners within your extension/app or a different extension/app. Similar to $(ref:runtime.connect) but only sends a single message, with an optional response. If sending to your extension, the $(ref:runtime.onMessage) event will be fired in each page, or $(ref:runtime.onMessageExternal), if a different extension. Note that extensions cannot send messages to content scripts using this method. To send messages to content scripts, use $(ref:tabs.sendMessage).",
        "async": "responseCallback",
        "parameters": [
          {"type": "string", "name": "extensionId", "optional": true, "description": "The ID of the extension/app to send the message to. If omitted, the message will be sent to your own extension/app. Required if sending messages from a web page for $(topic:manifest/externally_connectable)[web messaging]."},
          { "type": "any", "name": "message" },
          {
            "type": "object",
            "name": "options",
            "properties": {
              "includeTlsChannelId": { "type": "boolean", "optional": true, "description": "Whether the TLS channel ID will be passed into onMessageExternal for processes that are listening for the connection event." }
            },
            "optional": true
          },
          {
            "type": "function",
            "name": "responseCallback",
            "optional": true,
            "parameters": [
              {
                "name": "response",
                "type": "any",
                "description": "The JSON response object sent by the handler of the message. If an error occurs while connecting to the extension, the callback will be called with no arguments and $(ref:runtime.lastError) will be set to the error message."
              }
            ]
          }
        ]
      },
      {
        "name": "sendNativeMessage",
        "type": "function",
        "description": "Send a single message to a native application.",
        "permissions": ["nativeMessaging"],
        "async": "responseCallback",
        "parameters": [
          {
            "name": "application",
            "description": "The name of the native messaging host.",
            "type": "string"
          },
          {
            "name": "message",
            "description": "The message that will be passed to the native messaging host.",
            "type": "any"
          },
          {
            "type": "function",
            "name": "responseCallback",
            "optional": true,
            "parameters": [
              {
                "name": "response",
                "type": "any",
                "description": "The response message sent by the native messaging host. If an error occurs while connecting to the native messaging host, the callback will be called with no arguments and $(ref:runtime.lastError) will be set to the error message."
              }
            ]
          }
        ]
      },
      {
        "name": "getBrowserInfo",
        "type": "function",
        "description": "Returns information about the current browser.",
        "async": "callback",
        "parameters": [
          {
            "type": "function",
            "name": "callback",
            "description": "Called with results",
            "parameters": [
              {
                "name": "browserInfo",
                "$ref": "BrowserInfo"
              }
            ]
          }
        ]
      },
      {
        "name": "getPlatformInfo",
        "type": "function",
        "description": "Returns information about the current platform.",
        "async": "callback",
        "parameters": [
          {
            "type": "function",
            "name": "callback",
            "description": "Called with results",
            "parameters": [
              {
                "name": "platformInfo",
                "$ref": "PlatformInfo"
              }
            ]
          }
        ]
      },
      {
        "name": "getPackageDirectoryEntry",
        "unsupported": true,
        "type": "function",
        "description": "Returns a DirectoryEntry for the package directory.",
        "async": "callback",
        "parameters": [
          {
            "type": "function",
            "name": "callback",
            "parameters": [
              {
                "name": "directoryEntry",
                "type": "object",
                "additionalProperties": { "type": "any" },
                "isInstanceOf": "DirectoryEntry"
              }
            ]
          }
        ]
      }
    ],
    "events": [
      {
        "name": "onStartup",
        "unsupported": true,
        "type": "function",
        "description": "Fired when a profile that has this extension installed first starts up. This event is not fired when an incognito profile is started, even if this extension is operating in 'split' incognito mode."
      },
      {
        "name": "onInstalled",
        "unsupported": true,
        "type": "function",
        "description": "Fired when the extension is first installed, when the extension is updated to a new version, and when the browser is updated to a new version.",
        "parameters": [
          {
            "type": "object",
            "name": "details",
            "properties": {
              "reason": {
                "$ref": "OnInstalledReason",
                "description": "The reason that this event is being dispatched."
              },
              "previousVersion": {
                "type": "string",
                "optional": true,
                "description": "Indicates the previous version of the extension, which has just been updated. This is present only if 'reason' is 'update'."
              },
              "id": {
                "type": "string",
                "optional": true,
                "description": "Indicates the ID of the imported shared module extension which updated. This is present only if 'reason' is 'shared_module_update'."
              }
            }
          }
        ]
      },
      {
        "name": "onSuspend",
        "unsupported": true,
        "type": "function",
        "description": "Sent to the event page just before it is unloaded. This gives the extension opportunity to do some clean up. Note that since the page is unloading, any asynchronous operations started while handling this event are not guaranteed to complete. If more activity for the event page occurs before it gets unloaded the onSuspendCanceled event will be sent and the page won't be unloaded. "
      },
      {
        "name": "onSuspendCanceled",
        "unsupported": true,
        "type": "function",
        "description": "Sent after onSuspend to indicate that the app won't be unloaded after all."
      },
      {
        "name": "onUpdateAvailable",
        "type": "function",
        "description": "Fired when an update is available, but isn't installed immediately because the app is currently running. If you do nothing, the update will be installed the next time the background page gets unloaded, if you want it to be installed sooner you can explicitly call $(ref:runtime.reload). If your extension is using a persistent background page, the background page of course never gets unloaded, so unless you call $(ref:runtime.reload) manually in response to this event the update will not get installed until the next time the browser itself restarts. If no handlers are listening for this event, and your extension has a persistent background page, it behaves as if $(ref:runtime.reload) is called in response to this event.",
        "parameters": [
          {
            "type": "object",
            "name": "details",
            "properties": {
              "version": {
                "type": "string",
                "description": "The version number of the available update."
              }
            },
            "additionalProperties": { "type": "any" },
            "description": "The manifest details of the available update."
          }
        ]
      },
      {
        "name": "onBrowserUpdateAvailable",
        "unsupported": true,
        "type": "function",
        "description": "Fired when an update for the browser is available, but isn't installed immediately because a browser restart is required.",
        "deprecated": "Please use $(ref:runtime.onRestartRequired).",
        "parameters": []
      },
      {
        "name": "onConnect",
        "type": "function",
        "allowedContexts": ["content"],
        "description": "Fired when a connection is made from either an extension process or a content script.",
        "parameters": [
          {"$ref": "Port", "name": "port"}
        ]
      },
      {
        "name": "onConnectExternal",
        "unsupported": true,
        "type": "function",
        "description": "Fired when a connection is made from another extension.",
        "parameters": [
          {"$ref": "Port", "name": "port"}
        ]
      },
      {
        "name": "onMessage",
        "type": "function",
        "allowedContexts": ["content"],
        "description": "Fired when a message is sent from either an extension process or a content script.",
        "parameters": [
          {"name": "message", "type": "any", "optional": true, "description": "The message sent by the calling script."},
          {"name": "sender", "$ref": "MessageSender" },
          {"name": "sendResponse", "type": "function", "description": "Function to call (at most once) when you have a response. The argument should be any JSON-ifiable object. If you have more than one <code>onMessage</code> listener in the same document, then only one may send a response. This function becomes invalid when the event listener returns, unless you return true from the event listener to indicate you wish to send a response asynchronously (this will keep the message channel open to the other end until <code>sendResponse</code> is called)." }
        ],
        "returns": {
          "type": "boolean",
          "optional": true,
          "description": "Return true from the event listener if you wish to call <code>sendResponse</code> after the event listener returns."
        }
      },
      {
        "name": "onMessageExternal",
        "unsupported": true,
        "type": "function",
        "description": "Fired when a message is sent from another extension/app. Cannot be used in a content script.",
        "parameters": [
          {"name": "message", "type": "any", "optional": true, "description": "The message sent by the calling script."},
          {"name": "sender", "$ref": "MessageSender" },
          {"name": "sendResponse", "type": "function", "description": "Function to call (at most once) when you have a response. The argument should be any JSON-ifiable object. If you have more than one <code>onMessage</code> listener in the same document, then only one may send a response. This function becomes invalid when the event listener returns, unless you return true from the event listener to indicate you wish to send a response asynchronously (this will keep the message channel open to the other end until <code>sendResponse</code> is called)." }
        ],
        "returns": {
          "type": "boolean",
          "optional": true,
          "description": "Return true from the event listener if you wish to call <code>sendResponse</code> after the event listener returns."
        }
      },
      {
        "name": "onRestartRequired",
        "unsupported": true,
        "type": "function",
        "description": "Fired when an app or the device that it runs on needs to be restarted. The app should close all its windows at its earliest convenient time to let the restart to happen. If the app does nothing, a restart will be enforced after a 24-hour grace period has passed. Currently, this event is only fired for Chrome OS kiosk apps.",
        "parameters": [
          {
            "$ref": "OnRestartRequiredReason",
            "name": "reason",
            "description": "The reason that the event is being dispatched."
          }
        ]
      }
    ]
  },
  {
    "namespace": "storage",
    "allowedContexts": ["content"],
    "defaultContexts": ["content"],
    "description": "Use the <code>browser.storage</code> API to store, retrieve, and track changes to user data.",
    "permissions": ["storage"],
    "types": [
      {
        "id": "StorageChange",
        "type": "object",
        "properties": {
          "oldValue": {
            "type": "any",
            "description": "The old value of the item, if there was an old value.",
            "optional": true
          },
          "newValue": {
            "type": "any",
            "description": "The new value of the item, if there is a new value.",
            "optional": true
          }
        }
      },
      {
        "id": "StorageArea",
        "type": "object",
        "functions": [
          {
            "name": "get",
            "type": "function",
            "description": "Gets one or more items from storage.",
            "async": "callback",
            "parameters": [
              {
                "name": "keys",
                "choices": [
                  { "type": "string" },
                  { "type": "array", "items": { "type": "string" } },
                  {
                    "type": "object",
                    "description": "Storage items to return in the callback, where the values are replaced with those from storage if they exist.",
                    "additionalProperties": { "type": "any" }
                  }
                ],
                "description": "A single key to get, list of keys to get, or a dictionary specifying default values (see description of the object).  An empty list or object will return an empty result object.  Pass in <code>null</code> to get the entire contents of storage.",
                "optional": true
              },
              {
                "name": "callback",
                "type": "function",
                "description": "Callback with storage items, or on failure (in which case $(ref:runtime.lastError) will be set).",
                "parameters": [
                  {
                    "name": "items",
                    "type": "object",
                    "additionalProperties": { "type": "any" },
                    "description": "Object with items in their key-value mappings."
                  }
                ]
              }
            ]
          },
          {
            "name": "getBytesInUse",
            "unsupported": true,
            "type": "function",
            "description": "Gets the amount of space (in bytes) being used by one or more items.",
            "async": "callback",
            "parameters": [
              {
                "name": "keys",
                "choices": [
                  { "type": "string" },
                  { "type": "array", "items": { "type": "string" } }
                ],
                "description": "A single key or list of keys to get the total usage for. An empty list will return 0. Pass in <code>null</code> to get the total usage of all of storage.",
                "optional": true
              },
              {
                "name": "callback",
                "type": "function",
                "description": "Callback with the amount of space being used by storage, or on failure (in which case $(ref:runtime.lastError) will be set).",
                "parameters": [
                  {
                    "name": "bytesInUse",
                    "type": "integer",
                    "description": "Amount of space being used in storage, in bytes."
                  }
                ]
              }
            ]
          },
          {
            "name": "set",
            "type": "function",
            "description": "Sets multiple items.",
            "async": "callback",
            "parameters": [
              {
                "name": "items",
                "type": "object",
                "additionalProperties": { "type": "any" },
                "description": "<p>An object which gives each key/value pair to update storage with. Any other key/value pairs in storage will not be affected.</p><p>Primitive values such as numbers will serialize as expected. Values with a <code>typeof</code> <code>\"object\"</code> and <code>\"function\"</code> will typically serialize to <code>{}</code>, with the exception of <code>Array</code> (serializes as expected), <code>Date</code>, and <code>Regex</code> (serialize using their <code>String</code> representation).</p>"
              },
              {
                "name": "callback",
                "type": "function",
                "description": "Callback on success, or on failure (in which case $(ref:runtime.lastError) will be set).",
                "parameters": [],
                "optional": true
              }
            ]
          },
          {
            "name": "remove",
            "type": "function",
            "description": "Removes one or more items from storage.",
            "async": "callback",
            "parameters": [
              {
                "name": "keys",
                "choices": [
                  {"type": "string"},
                  {"type": "array", "items": {"type": "string"}}
                ],
                "description": "A single key or a list of keys for items to remove."
              },
              {
                "name": "callback",
                "type": "function",
                "description": "Callback on success, or on failure (in which case $(ref:runtime.lastError) will be set).",
                "parameters": [],
                "optional": true
              }
            ]
          },
          {
            "name": "clear",
            "type": "function",
            "description": "Removes all items from storage.",
            "async": "callback",
            "parameters": [
              {
                "name": "callback",
                "type": "function",
                "description": "Callback on success, or on failure (in which case $(ref:runtime.lastError) will be set).",
                "parameters": [],
                "optional": true
              }
            ]
          }
        ]
      }
    ],
    "events": [
      {
        "name": "onChanged",
        "type": "function",
        "description": "Fired when one or more items change.",
        "parameters": [
          {
            "name": "changes",
            "type": "object",
            "additionalProperties": { "$ref": "StorageChange" },
            "description": "Object mapping each key that changed to its corresponding $(ref:storage.StorageChange) for that item."
          },
          {
            "name": "areaName",
            "type": "string",
            "description": "The name of the storage area (<code>\"sync\"</code>, <code>\"local\"</code> or <code>\"managed\"</code>) the changes are for."
          }
        ]
      }
    ],
    "properties": {
      "sync": {
        "unsupported": true,
        "$ref": "StorageArea",
        "description": "Items in the <code>sync</code> storage area are synced by the browser.",
        "properties": {
          "QUOTA_BYTES": {
            "value": 102400,
            "description": "The maximum total amount (in bytes) of data that can be stored in sync storage, as measured by the JSON stringification of every value plus every key's length. Updates that would cause this limit to be exceeded fail immediately and set $(ref:runtime.lastError)."
          },
          "QUOTA_BYTES_PER_ITEM": {
            "value": 8192,
            "description": "The maximum size (in bytes) of each individual item in sync storage, as measured by the JSON stringification of its value plus its key length. Updates containing items larger than this limit will fail immediately and set $(ref:runtime.lastError)."
          },
          "MAX_ITEMS": {
            "value": 512,
            "description": "The maximum number of items that can be stored in sync storage. Updates that would cause this limit to be exceeded will fail immediately and set $(ref:runtime.lastError)."
          },
          "MAX_WRITE_OPERATIONS_PER_HOUR": {
            "value": 1800,
            "description": "<p>The maximum number of <code>set</code>, <code>remove</code>, or <code>clear</code> operations that can be performed each hour. This is 1 every 2 seconds, a lower ceiling than the short term higher writes-per-minute limit.</p><p>Updates that would cause this limit to be exceeded fail immediately and set $(ref:runtime.lastError).</p>"
          },
          "MAX_WRITE_OPERATIONS_PER_MINUTE": {
            "value": 120,
            "description": "<p>The maximum number of <code>set</code>, <code>remove</code>, or <code>clear</code> operations that can be performed each minute. This is 2 per second, providing higher throughput than writes-per-hour over a shorter period of time.</p><p>Updates that would cause this limit to be exceeded fail immediately and set $(ref:runtime.lastError).</p>"
          },
          "MAX_SUSTAINED_WRITE_OPERATIONS_PER_MINUTE": {
            "value": 1000000,
            "deprecated": "The storage.sync API no longer has a sustained write operation quota.",
            "description": ""
          }
        }
      },
      "local": {
        "$ref": "StorageArea",
        "description": "Items in the <code>local</code> storage area are local to each machine.",
        "properties": {
          "QUOTA_BYTES": {
            "value": 5242880,
            "description": "The maximum amount (in bytes) of data that can be stored in local storage, as measured by the JSON stringification of every value plus every key's length. This value will be ignored if the extension has the <code>unlimitedStorage</code> permission. Updates that would cause this limit to be exceeded fail immediately and set $(ref:runtime.lastError)."
          }
        }
      },
      "managed": {
        "unsupported": true,
        "$ref": "StorageArea",
        "description": "Items in the <code>managed</code> storage area are set by the domain administrator, and are read-only for the extension; trying to modify this namespace results in an error."
      }
    }
  },
  {
    "namespace": "test",
    "allowedContexts": ["content"],
    "defaultContexts": ["content"],
    "description": "none",
    "functions": [
      {
        "name": "notifyFail",
        "type": "function",
        "description": "Notifies the browser process that test code running in the extension failed.  This is only used for internal unit testing.",
        "parameters": [
          {"type": "string", "name": "message"}
        ]
      },
      {
        "name": "notifyPass",
        "type": "function",
        "description": "Notifies the browser process that test code running in the extension passed.  This is only used for internal unit testing.",
        "parameters": [
          {"type": "string", "name": "message", "optional": true}
        ]
      },
      {
        "name": "log",
        "type": "function",
        "description": "Logs a message during internal unit testing.",
        "parameters": [
          {"type": "string", "name": "message"}
        ]
      },
      {
        "name": "sendMessage",
        "type": "function",
        "description": "Sends a string message to the browser process, generating a Notification that C++ test code can wait for.",
        "allowAmbiguousOptionalArguments": true,
        "parameters": [
          {"type": "any", "name": "arg1", "optional": true},
          {"type": "any", "name": "arg2", "optional": true}
        ]
      },
      {
        "name": "fail",
        "type": "function",
        "parameters": [
          {"type": "any", "name": "message", "optional": true}
        ]
      },
      {
        "name": "succeed",
        "type": "function",
        "parameters": [
          {"type": "any", "name": "message", "optional": true}
        ]
      },
      {
        "name": "assertTrue",
        "type": "function",
        "allowAmbiguousOptionalArguments": true,
        "parameters": [
          {"name": "test", "type": "any", "optional": true},
          {"type": "string", "name": "message", "optional": true}
        ]
      },
      {
        "name": "assertFalse",
        "type": "function",
        "allowAmbiguousOptionalArguments": true,
        "parameters": [
          {"name": "test", "type": "any", "optional": true},
          {"type": "string", "name": "message", "optional": true}
        ]
      },
      {
        "name": "assertBool",
        "type": "function",
        "unsupported": true,
        "parameters": [
          {
            "name": "test",
            "choices": [
              {"type": "string"},
              {"type": "boolean"}
            ]
          },
          {"type": "boolean", "name": "expected"},
          {"type": "string", "name": "message", "optional": true}
        ]
      },
      {
        "name": "checkDeepEq",
        "type": "function",
        "unsupported": true,
        "allowAmbiguousOptionalArguments": true,
        "parameters": [
          {"type": "any", "name": "expected"},
          {"type": "any", "name": "actual"}
        ]
      },
      {
        "name": "assertEq",
        "type": "function",
        "allowAmbiguousOptionalArguments": true,
        "parameters": [
          {"type": "any", "name": "expected", "optional": true},
          {"type": "any", "name": "actual", "optional": true},
          {"type": "string", "name": "message", "optional": true}
        ]
      },
      {
        "name": "assertNoLastError",
        "type": "function",
        "unsupported": true,
        "parameters": []
      },
      {
        "name": "assertLastError",
        "type": "function",
        "unsupported": true,
        "parameters": [
          {"type": "string", "name": "expectedError"}
        ]
      },
      {
        "name": "assertThrows",
        "type": "function",
        "unsupported": true,
        "parameters": [
          {"type": "function", "name": "fn"},
          {
            "type": "object",
            "name": "self",
            "additionalProperties": {"type": "any"},
            "optional": true
          },
          {"type": "array", "items": {"type": "any"}, "name": "args", "optional": true},
          {"choices": [ {"type": "string"}, {"type": "object", "isInstanceOf": "RegExp"} ], "name": "message", "optional": true}
        ]
      }
    ],
    "events": [
      {
        "name": "onMessage",
        "type": "function",
        "description": "Used to test sending messages to extensions.",
        "parameters": [
          {
            "type": "string",
            "name": "message"
          },
          {
            "type": "any",
            "name": "argument"
          }
        ]
      }
    ]
  },
  {
    "namespace": "webNavigation",
    "description": "Use the <code>browser.webNavigation</code> API to receive notifications about the status of navigation requests in-flight.",
    "permissions": ["webNavigation"],
    "types": [
      {
        "id": "TransitionType",
        "type": "string",
        "enum": ["link", "typed", "auto_bookmark", "auto_subframe", "manual_subframe", "generated", "start_page", "form_submit", "reload", "keyword", "keyword_generated"],
        "description": "Cause of the navigation. The same transition types as defined in the history API are used. These are the same transition types as defined in the $(topic:transition_types)[history API] except with <code>\"start_page\"</code> in place of <code>\"auto_toplevel\"</code> (for backwards compatibility)."
      },
      {
        "id": "TransitionQualifier",
        "type": "string",
        "enum": ["client_redirect", "server_redirect", "forward_back", "from_address_bar"]
      },
      {
        "id": "EventUrlFilters",
        "type": "object",
        "properties": {
          "url": {
            "type": "array",
            "minItems": 1,
            "items": { "$ref": "events.UrlFilter" }
          }
        }
      }
    ],
    "functions": [
      {
        "name": "getFrame",
        "type": "function",
        "description": "Retrieves information about the given frame. A frame refers to an &lt;iframe&gt; or a &lt;frame&gt; of a web page and is identified by a tab ID and a frame ID.",
        "async": "callback",
        "parameters": [
          {
            "type": "object",
            "name": "details",
            "description": "Information about the frame to retrieve information about.",
            "properties": {
              "tabId": { "type": "integer", "minimum": 0, "description": "The ID of the tab in which the frame is." },
              "processId": {"optional": true, "type": "integer", "description": "The ID of the process runs the renderer for this tab."},
              "frameId": { "type": "integer", "minimum": 0, "description": "The ID of the frame in the given tab." }
            }
          },
          {
            "type": "function",
            "name": "callback",
            "parameters": [
              {
                "type": "object",
                "name": "details",
                "optional": true,
                "description": "Information about the requested frame, null if the specified frame ID and/or tab ID are invalid.",
                "properties": {
                  "errorOccurred": {
                    "unsupported": true,
                    "type": "boolean",
                    "description": "True if the last navigation in this frame was interrupted by an error, i.e. the onErrorOccurred event fired."
                  },
                  "url": {
                    "type": "string",
                    "description": "The URL currently associated with this frame, if the frame identified by the frameId existed at one point in the given tab. The fact that an URL is associated with a given frameId does not imply that the corresponding frame still exists."
                  },
                  "parentFrameId": {
                    "type": "integer",
                    "description": "ID of frame that wraps the frame. Set to -1 of no parent frame exists."
                  }
                }
              }
            ]
          }
        ]
      },
      {
        "name": "getAllFrames",
        "type": "function",
        "description": "Retrieves information about all frames of a given tab.",
        "async": "callback",
        "parameters": [
          {
            "type": "object",
            "name": "details",
            "description": "Information about the tab to retrieve all frames from.",
            "properties": {
              "tabId": { "type": "integer", "minimum": 0, "description": "The ID of the tab." }
            }
          },
          {
            "type": "function",
            "name": "callback",
            "parameters": [
              {
                "name": "details",
                "type": "array",
                "description": "A list of frames in the given tab, null if the specified tab ID is invalid.",
                "optional": true,
                "items": {
                  "type": "object",
                  "properties": {
                    "errorOccurred": {
                      "unsupported": true,
                      "type": "boolean",
                      "description": "True if the last navigation in this frame was interrupted by an error, i.e. the onErrorOccurred event fired."
                    },
                    "processId": {
                      "unsupported": true,
                      "type": "integer",
                      "description": "The ID of the process runs the renderer for this tab."
                    },
                    "frameId": {
                      "type": "integer",
                      "description": "The ID of the frame. 0 indicates that this is the main frame; a positive value indicates the ID of a subframe."
                    },
                    "parentFrameId": {
                      "type": "integer",
                      "description": "ID of frame that wraps the frame. Set to -1 of no parent frame exists."
                    },
                    "url": {
                      "type": "string",
                      "description": "The URL currently associated with this frame."
                    }
                  }
                }
              }
            ]
          }
        ]
      }
    ],
    "events": [
      {
        "name": "onBeforeNavigate",
        "type": "function",
        "description": "Fired when a navigation is about to occur.",
        "parameters": [
          {
            "type": "object",
            "name": "details",
            "properties": {
              "tabId": {"type": "integer", "description": "The ID of the tab in which the navigation is about to occur."},
              "url": {"type": "string"},
              "processId": {"unsupported": true, "type": "integer", "description": "The ID of the process runs the renderer for this tab."},
              "frameId": {"type": "integer", "description": "0 indicates the navigation happens in the tab content window; a positive value indicates navigation in a subframe. Frame IDs are unique for a given tab and process."},
              "parentFrameId": {"type": "integer", "description": "ID of frame that wraps the frame. Set to -1 of no parent frame exists."},
              "timeStamp": {"type": "number", "description": "The time when the browser was about to start the navigation, in milliseconds since the epoch."}
            }
          }
        ],
        "extraParameters": [
          {
            "name": "filters",
            "optional": true,
            "$ref": "EventUrlFilters",
            "description": "Conditions that the URL being navigated to must satisfy. The 'schemes' and 'ports' fields of UrlFilter are ignored for this event."
          }
        ]
      },
      {
        "name": "onCommitted",
        "type": "function",
        "description": "Fired when a navigation is committed. The document (and the resources it refers to, such as images and subframes) might still be downloading, but at least part of the document has been received from the server and the browser has decided to switch to the new document.",
        "parameters": [
          {
            "type": "object",
            "name": "details",
            "properties": {
              "tabId": {"type": "integer", "description": "The ID of the tab in which the navigation occurs."},
              "url": {"type": "string"},
              "processId": {"unsupported": true, "type": "integer", "description": "The ID of the process runs the renderer for this tab."},
              "frameId": {"type": "integer", "description": "0 indicates the navigation happens in the tab content window; a positive value indicates navigation in a subframe. Frame IDs are unique within a tab."},
              "transitionType": {"unsupported": true, "$ref": "TransitionType", "description": "Cause of the navigation."},
              "transitionQualifiers": {"unsupported": true, "type": "array", "description": "A list of transition qualifiers.", "items": {"$ref": "TransitionQualifier"}},
              "timeStamp": {"type": "number", "description": "The time when the navigation was committed, in milliseconds since the epoch."}
            }
          }
        ],
        "extraParameters": [
          {
            "name": "filters",
            "optional": true,
            "$ref": "EventUrlFilters",
            "description": "Conditions that the URL being navigated to must satisfy. The 'schemes' and 'ports' fields of UrlFilter are ignored for this event."
          }
        ]
      },
      {
        "name": "onDOMContentLoaded",
        "type": "function",
        "description": "Fired when the page's DOM is fully constructed, but the referenced resources may not finish loading.",
        "parameters": [
          {
            "type": "object",
            "name": "details",
            "properties": {
              "tabId": {"type": "integer", "description": "The ID of the tab in which the navigation occurs."},
              "url": {"type": "string"},
              "processId": {"unsupported": true, "type": "integer", "description": "The ID of the process runs the renderer for this tab."},
              "frameId": {"type": "integer", "description": "0 indicates the navigation happens in the tab content window; a positive value indicates navigation in a subframe. Frame IDs are unique within a tab."},
              "timeStamp": {"type": "number", "description": "The time when the page's DOM was fully constructed, in milliseconds since the epoch."}
            }
          }
        ],
        "extraParameters": [
          {
            "name": "filters",
            "optional": true,
            "$ref": "EventUrlFilters",
            "description": "Conditions that the URL being navigated to must satisfy. The 'schemes' and 'ports' fields of UrlFilter are ignored for this event."
          }
        ]
      },
      {
        "name": "onCompleted",
        "type": "function",
        "description": "Fired when a document, including the resources it refers to, is completely loaded and initialized.",
        "parameters": [
          {
            "type": "object",
            "name": "details",
            "properties": {
              "tabId": {"type": "integer", "description": "The ID of the tab in which the navigation occurs."},
              "url": {"type": "string"},
              "processId": {"unsupported": true, "type": "integer", "description": "The ID of the process runs the renderer for this tab."},
              "frameId": {"type": "integer", "description": "0 indicates the navigation happens in the tab content window; a positive value indicates navigation in a subframe. Frame IDs are unique within a tab."},
              "timeStamp": {"type": "number", "description": "The time when the document finished loading, in milliseconds since the epoch."}
            }
          }
        ],
        "extraParameters": [
          {
            "name": "filters",
            "optional": true,
            "$ref": "EventUrlFilters",
            "description": "Conditions that the URL being navigated to must satisfy. The 'schemes' and 'ports' fields of UrlFilter are ignored for this event."
          }
        ]
      },
      {
        "name": "onErrorOccurred",
        "type": "function",
        "description": "Fired when an error occurs and the navigation is aborted. This can happen if either a network error occurred, or the user aborted the navigation.",
        "parameters": [
          {
            "type": "object",
            "name": "details",
            "properties": {
              "tabId": {"type": "integer", "description": "The ID of the tab in which the navigation occurs."},
              "url": {"type": "string"},
              "processId": {"unsupported": true, "type": "integer", "description": "The ID of the process runs the renderer for this tab."},
              "frameId": {"type": "integer", "description": "0 indicates the navigation happens in the tab content window; a positive value indicates navigation in a subframe. Frame IDs are unique within a tab."},
              "error": {"unsupported": true, "type": "string", "description": "The error description."},
              "timeStamp": {"type": "number", "description": "The time when the error occurred, in milliseconds since the epoch."}
            }
          }
        ],
        "extraParameters": [
          {
            "name": "filters",
            "optional": true,
            "$ref": "EventUrlFilters",
            "description": "Conditions that the URL being navigated to must satisfy. The 'schemes' and 'ports' fields of UrlFilter are ignored for this event."
          }
        ]
      },
      {
        "name": "onCreatedNavigationTarget",
        "unsupported": true,
        "type": "function",
        "description": "Fired when a new window, or a new tab in an existing window, is created to host a navigation.",
        "parameters": [
          {
            "type": "object",
            "name": "details",
            "properties": {
              "sourceTabId": {"type": "integer", "description": "The ID of the tab in which the navigation is triggered."},
              "sourceProcessId": {"type": "integer", "description": "The ID of the process runs the renderer for the source tab."},
              "sourceFrameId": {"type": "integer", "description": "The ID of the frame with sourceTabId in which the navigation is triggered. 0 indicates the main frame."},
              "url": {"type": "string", "description": "The URL to be opened in the new window."},
              "tabId": {"type": "integer", "description": "The ID of the tab in which the url is opened"},
              "timeStamp": {"type": "number", "description": "The time when the browser was about to create a new view, in milliseconds since the epoch."}
            }
          }
        ],
        "extraParameters": [
          {
            "name": "filters",
            "optional": true,
            "$ref": "EventUrlFilters",
            "description": "Conditions that the URL being navigated to must satisfy. The 'schemes' and 'ports' fields of UrlFilter are ignored for this event."
          }
        ]
      },
      {
        "name": "onReferenceFragmentUpdated",
        "type": "function",
        "description": "Fired when the reference fragment of a frame was updated. All future events for that frame will use the updated URL.",
        "parameters": [
          {
            "type": "object",
            "name": "details",
            "properties": {
              "tabId": {"type": "integer", "description": "The ID of the tab in which the navigation occurs."},
              "url": {"type": "string"},
              "processId": {"unsupported": true, "type": "integer", "description": "The ID of the process runs the renderer for this tab."},
              "frameId": {"type": "integer", "description": "0 indicates the navigation happens in the tab content window; a positive value indicates navigation in a subframe. Frame IDs are unique within a tab."},
              "transitionType": {"unsupported": true, "$ref": "TransitionType", "description": "Cause of the navigation."},
              "transitionQualifiers": {"unsupported": true, "type": "array", "description": "A list of transition qualifiers.", "items": {"$ref": "TransitionQualifier"}},
              "timeStamp": {"type": "number", "description": "The time when the navigation was committed, in milliseconds since the epoch."}
            }
          }
        ],
        "extraParameters": [
          {
            "name": "filters",
            "optional": true,
            "$ref": "EventUrlFilters",
            "description": "Conditions that the URL being navigated to must satisfy. The 'schemes' and 'ports' fields of UrlFilter are ignored for this event."
          }
        ]
      },
      {
        "name": "onTabReplaced",
        "type": "function",
        "description": "Fired when the contents of the tab is replaced by a different (usually previously pre-rendered) tab.",
        "parameters": [
          {
            "type": "object",
            "name": "details",
            "properties": {
              "replacedTabId": {"type": "integer", "description": "The ID of the tab that was replaced."},
              "tabId": {"type": "integer", "description": "The ID of the tab that replaced the old tab."},
              "timeStamp": {"type": "number", "description": "The time when the replacement happened, in milliseconds since the epoch."}
            }
          }
        ]
      },
      {
        "name": "onHistoryStateUpdated",
        "type": "function",
        "description": "Fired when the frame's history was updated to a new URL. All future events for that frame will use the updated URL.",
        "parameters": [
          {
            "type": "object",
            "name": "details",
            "properties": {
              "tabId": {"type": "integer", "description": "The ID of the tab in which the navigation occurs."},
              "url": {"type": "string"},
              "processId": {"unsupported": true, "type": "integer", "description": "The ID of the process runs the renderer for this tab."},
              "frameId": {"type": "integer", "description": "0 indicates the navigation happens in the tab content window; a positive value indicates navigation in a subframe. Frame IDs are unique within a tab."},
              "transitionType": {"unsupported": true, "$ref": "TransitionType", "description": "Cause of the navigation."},
              "transitionQualifiers": {"unsupported": true, "type": "array", "description": "A list of transition qualifiers.", "items": {"$ref": "TransitionQualifier"}},
              "timeStamp": {"type": "number", "description": "The time when the navigation was committed, in milliseconds since the epoch."}
            }
          }
        ],
        "extraParameters": [
          {
            "name": "filters",
            "optional": true,
            "$ref": "EventUrlFilters",
            "description": "Conditions that the URL being navigated to must satisfy. The 'schemes' and 'ports' fields of UrlFilter are ignored for this event."
          }
        ]
      }
    ]
  },
  {
    "namespace": "webRequest",
    "description": "Use the <code>browser.webRequest</code> API to observe and analyze traffic and to intercept, block, or modify requests in-flight.",
    "permissions": ["webRequest"],
    "properties": {
      "MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES": {
        "value": 20,
        "description": "The maximum number of times that <code>handlerBehaviorChanged</code> can be called per 10 minute sustained interval. <code>handlerBehaviorChanged</code> is an expensive function call that shouldn't be called often."
      }
    },
    "types": [
      {
        "id": "ResourceType",
        "type": "string",
        "enum": [
          "main_frame",
          "sub_frame",
          "stylesheet",
          "script",
          "image",
          "object",
          "xmlhttprequest",
          "xbl",
          "xslt",
          "ping",
          "beacon",
          "xml_dtd",
          "font",
          "media",
          "websocket",
          "csp_report",
          "imageset",
          "web_manifest",
          "other"
        ]
      },
      {
        "id": "OnBeforeRequestOptions",
        "type": "string",
        "enum": ["blocking", "requestBody"]
      },
      {
        "id": "OnBeforeSendHeadersOptions",
        "type": "string",
        "enum": ["requestHeaders", "blocking"]
      },
      {
        "id": "OnSendHeadersOptions",
        "type": "string",
        "enum": ["requestHeaders"]
      },
      {
        "id": "OnHeadersReceivedOptions",
        "type": "string",
        "enum": ["blocking", "responseHeaders"]
      },
      {
        "id": "OnAuthRequiredOptions",
        "type": "string",
        "enum": ["responseHeaders", "blocking", "asyncBlocking"]
      },
      {
        "id": "OnResponseStartedOptions",
        "type": "string",
        "enum": ["responseHeaders"]
      },
      {
        "id": "OnBeforeRedirectOptions",
        "type": "string",
        "enum": ["responseHeaders"]
      },
      {
        "id": "OnCompletedOptions",
        "type": "string",
        "enum": ["responseHeaders"]
      },
      {
        "id": "RequestFilter",
        "type": "object",
        "description": "An object describing filters to apply to webRequest events.",
        "properties": {
          "urls": {
            "type": "array",
            "description": "A list of URLs or URL patterns. Requests that cannot match any of the URLs will be filtered out.",
            "items": { "type": "string" }
          },
          "types": {
            "type": "array",
            "optional": true,
            "description": "A list of request types. Requests that cannot match any of the types will be filtered out.",
            "items": { "$ref": "ResourceType" }
          },
          "tabId": { "type": "integer", "optional": true },
          "windowId": { "type": "integer", "optional": true }
        }
      },
      {
        "id": "HttpHeaders",
        "type": "array",
        "description": "An array of HTTP headers. Each header is represented as a dictionary containing the keys <code>name</code> and either <code>value</code> or <code>binaryValue</code>.",
        "items": {
          "type": "object",
          "properties": {
            "name": {"type": "string", "description": "Name of the HTTP header."},
            "value": {"type": "string", "optional": true, "description": "Value of the HTTP header if it can be represented by UTF-8."},
            "binaryValue": {
              "type": "array",
              "optional": true,
              "description": "Value of the HTTP header if it cannot be represented by UTF-8, stored as individual byte values (0..255).",
              "items": {"type": "integer"}
            }
          }
        }
      },
      {
        "id": "BlockingResponse",
        "type": "object",
        "description": "Returns value for event handlers that have the 'blocking' extraInfoSpec applied. Allows the event handler to modify network requests.",
        "properties": {
          "cancel": {
            "type": "boolean",
            "optional": true,
            "description": "If true, the request is cancelled. Used in onBeforeRequest, this prevents the request from being sent."
          },
          "redirectUrl": {
            "type": "string",
            "optional": true,
            "description": "Only used as a response to the onBeforeRequest and onHeadersReceived events. If set, the original request is prevented from being sent/completed and is instead redirected to the given URL. Redirections to non-HTTP schemes such as data: are allowed. Redirects initiated by a redirect action use the original request method for the redirect, with one exception: If the redirect is initiated at the onHeadersReceived stage, then the redirect will be issued using the GET method."
          },
          "requestHeaders": {
            "$ref": "HttpHeaders",
            "optional": true,
            "description": "Only used as a response to the onBeforeSendHeaders event. If set, the request is made with these request headers instead."
          },
          "responseHeaders": {
            "$ref": "HttpHeaders",
            "optional": true,
            "description": "Only used as a response to the onHeadersReceived event. If set, the server is assumed to have responded with these response headers instead. Only return <code>responseHeaders</code> if you really want to modify the headers in order to limit the number of conflicts (only one extension may modify <code>responseHeaders</code> for each request)."
          },
          "authCredentials": {
            "type": "object",
            "description": "Only used as a response to the onAuthRequired event. If set, the request is made using the supplied credentials.",
            "optional": true,
            "properties": {
              "username": {"type": "string"},
              "password": {"type": "string"}
            }
          }
        }
      },
      {
        "id": "UploadData",
        "type": "object",
        "properties": {
          "bytes": {
            "type": "any",
            "optional": true,
            "description": "An ArrayBuffer with a copy of the data."
          },
          "file": {
            "type": "string",
            "optional": true,
            "description": "A string with the file's path and name."
          }
        },
        "description": "Contains data uploaded in a URL request."
      }
    ],
    "functions": [
      {
        "name": "handlerBehaviorChanged",
        "type": "function",
        "description": "Needs to be called when the behavior of the webRequest handlers has changed to prevent incorrect handling due to caching. This function call is expensive. Don't call it often.",
        "async": "callback",
        "parameters": [
          {
            "type": "function",
            "name": "callback",
            "optional": true,
            "parameters": []
          }
        ]
      }
    ],
    "events": [
      {
        "name": "onBeforeRequest",
        "type": "function",
        "description": "Fired when a request is about to occur.",
        "parameters": [
          {
            "type": "object",
            "name": "details",
            "properties": {
              "requestId": {"type": "string", "description": "The ID of the request. Request IDs are unique within a browser session. As a result, they could be used to relate different events of the same request."},
              "url": {"type": "string"},
              "method": {"type": "string", "description": "Standard HTTP method."},
              "frameId": {"type": "integer", "description": "The value 0 indicates that the request happens in the main frame; a positive value indicates the ID of a subframe in which the request happens. If the document of a (sub-)frame is loaded (<code>type</code> is <code>main_frame</code> or <code>sub_frame</code>), <code>frameId</code> indicates the ID of this frame, not the ID of the outer frame. Frame IDs are unique within a tab."},
              "parentFrameId": {"type": "integer", "description": "ID of frame that wraps the frame which sent the request. Set to -1 if no parent frame exists."},
              "requestBody": {
                "type": "object",
                "optional": true,
                "description": "Contains the HTTP request body data. Only provided if extraInfoSpec contains 'requestBody'.",
                "properties": {
                  "error": {"type": "string", "optional": true, "description": "Errors when obtaining request body data."},
                  "formData": {
                    "type": "object",
                    "optional": true,
                    "description": "If the request method is POST and the body is a sequence of key-value pairs encoded in UTF8, encoded as either multipart/form-data, or application/x-www-form-urlencoded, this dictionary is present and for each key contains the list of all values for that key. If the data is of another media type, or if it is malformed, the dictionary is not present. An example value of this dictionary is {'key': ['value1', 'value2']}.",
                    "properties": {},
                    "additionalProperties": {
                      "type": "array",
                      "items": { "type": "string" }
                    }
                  },
                  "raw" : {
                    "type": "array",
                    "optional": true,
                    "items": {"$ref": "UploadData"},
                    "description": "If the request method is PUT or POST, and the body is not already parsed in formData, then the unparsed request body elements are contained in this array."
                  }
                }
              },
              "tabId": {"type": "integer", "description": "The ID of the tab in which the request takes place. Set to -1 if the request isn't related to a tab."},
              "type": {"$ref": "ResourceType", "description": "How the requested resource will be used."},
              "timeStamp": {"type": "number", "description": "The time when this signal is triggered, in milliseconds since the epoch."}
            }
          }
        ],
        "extraParameters": [
          {
            "$ref": "RequestFilter",
            "name": "filter",
            "description": "A set of filters that restricts the events that will be sent to this listener."
          },
          {
            "type": "array",
            "optional": true,
            "name": "extraInfoSpec",
            "description": "Array of extra information that should be passed to the listener function.",
            "items": {
              "$ref": "OnBeforeRequestOptions"
            }
          }
        ],
        "returns": {
          "$ref": "BlockingResponse",
          "description": "If \"blocking\" is specified in the \"extraInfoSpec\" parameter, the event listener should return an object of this type.",
          "optional": true
        }
      },
      {
        "name": "onBeforeSendHeaders",
        "type": "function",
        "description": "Fired before sending an HTTP request, once the request headers are available. This may occur after a TCP connection is made to the server, but before any HTTP data is sent. ",
        "parameters": [
          {
            "type": "object",
            "name": "details",
            "properties": {
              "requestId": {"type": "string", "description": "The ID of the request. Request IDs are unique within a browser session. As a result, they could be used to relate different events of the same request."},
              "url": {"type": "string"},
              "method": {"type": "string", "description": "Standard HTTP method."},
              "frameId": {"type": "integer", "description": "The value 0 indicates that the request happens in the main frame; a positive value indicates the ID of a subframe in which the request happens. If the document of a (sub-)frame is loaded (<code>type</code> is <code>main_frame</code> or <code>sub_frame</code>), <code>frameId</code> indicates the ID of this frame, not the ID of the outer frame. Frame IDs are unique within a tab."},
              "parentFrameId": {"type": "integer", "description": "ID of frame that wraps the frame which sent the request. Set to -1 if no parent frame exists."},
              "tabId": {"type": "integer", "description": "The ID of the tab in which the request takes place. Set to -1 if the request isn't related to a tab."},
              "type": {"$ref": "ResourceType", "description": "How the requested resource will be used."},
              "timeStamp": {"type": "number", "description": "The time when this signal is triggered, in milliseconds since the epoch."},
              "requestHeaders": {"$ref": "HttpHeaders", "optional": true, "description": "The HTTP request headers that are going to be sent out with this request."}
            }
          }
        ],
        "extraParameters": [
          {
            "$ref": "RequestFilter",
            "name": "filter",
            "description": "A set of filters that restricts the events that will be sent to this listener."
          },
          {
            "type": "array",
            "optional": true,
            "name": "extraInfoSpec",
            "description": "Array of extra information that should be passed to the listener function.",
            "items": {
              "$ref": "OnBeforeSendHeadersOptions"
            }
          }
        ],
        "returns": {
          "$ref": "BlockingResponse",
          "description": "If \"blocking\" is specified in the \"extraInfoSpec\" parameter, the event listener should return an object of this type.",
          "optional": true
        }
      },
      {
        "name": "onSendHeaders",
        "type": "function",
        "description": "Fired just before a request is going to be sent to the server (modifications of previous onBeforeSendHeaders callbacks are visible by the time onSendHeaders is fired).",
        "parameters": [
          {
            "type": "object",
            "name": "details",
            "properties": {
              "requestId": {"type": "string", "description": "The ID of the request. Request IDs are unique within a browser session. As a result, they could be used to relate different events of the same request."},
              "url": {"type": "string"},
              "method": {"type": "string", "description": "Standard HTTP method."},
              "frameId": {"type": "integer", "description": "The value 0 indicates that the request happens in the main frame; a positive value indicates the ID of a subframe in which the request happens. If the document of a (sub-)frame is loaded (<code>type</code> is <code>main_frame</code> or <code>sub_frame</code>), <code>frameId</code> indicates the ID of this frame, not the ID of the outer frame. Frame IDs are unique within a tab."},
              "parentFrameId": {"type": "integer", "description": "ID of frame that wraps the frame which sent the request. Set to -1 if no parent frame exists."},
              "tabId": {"type": "integer", "description": "The ID of the tab in which the request takes place. Set to -1 if the request isn't related to a tab."},
              "type": {"$ref": "ResourceType", "description": "How the requested resource will be used."},
              "timeStamp": {"type": "number", "description": "The time when this signal is triggered, in milliseconds since the epoch."},
              "requestHeaders": {"$ref": "HttpHeaders", "optional": true, "description": "The HTTP request headers that have been sent out with this request."}
            }
          }
        ],
        "extraParameters": [
          {
            "$ref": "RequestFilter",
            "name": "filter",
            "description": "A set of filters that restricts the events that will be sent to this listener."
          },
          {
            "type": "array",
            "optional": true,
            "name": "extraInfoSpec",
            "description": "Array of extra information that should be passed to the listener function.",
            "items": {
              "$ref": "OnSendHeadersOptions"
            }
          }
        ]
      },
      {
        "name": "onHeadersReceived",
        "type": "function",
        "description": "Fired when HTTP response headers of a request have been received.",
        "parameters": [
          {
            "type": "object",
            "name": "details",
            "properties": {
              "requestId": {"type": "string", "description": "The ID of the request. Request IDs are unique within a browser session. As a result, they could be used to relate different events of the same request."},
              "url": {"type": "string"},
              "method": {"type": "string", "description": "Standard HTTP method."},
              "frameId": {"type": "integer", "description": "The value 0 indicates that the request happens in the main frame; a positive value indicates the ID of a subframe in which the request happens. If the document of a (sub-)frame is loaded (<code>type</code> is <code>main_frame</code> or <code>sub_frame</code>), <code>frameId</code> indicates the ID of this frame, not the ID of the outer frame. Frame IDs are unique within a tab."},
              "parentFrameId": {"type": "integer", "description": "ID of frame that wraps the frame which sent the request. Set to -1 if no parent frame exists."},
              "tabId": {"type": "integer", "description": "The ID of the tab in which the request takes place. Set to -1 if the request isn't related to a tab."},
              "type": {"$ref": "ResourceType", "description": "How the requested resource will be used."},
              "timeStamp": {"type": "number", "description": "The time when this signal is triggered, in milliseconds since the epoch."},
              "statusLine": {"type": "string", "description": "HTTP status line of the response or the 'HTTP/0.9 200 OK' string for HTTP/0.9 responses (i.e., responses that lack a status line)."},
              "responseHeaders": {"$ref": "HttpHeaders", "optional": true, "description": "The HTTP response headers that have been received with this response."},
              "statusCode": {"type": "integer", "description": "Standard HTTP status code returned by the server."}
            }
          }
        ],
        "extraParameters": [
          {
            "$ref": "RequestFilter",
            "name": "filter",
            "description": "A set of filters that restricts the events that will be sent to this listener."
          },
          {
            "type": "array",
            "optional": true,
            "name": "extraInfoSpec",
            "description": "Array of extra information that should be passed to the listener function.",
            "items": {
              "$ref": "OnHeadersReceivedOptions"
            }
          }
        ],
        "returns": {
          "$ref": "BlockingResponse",
          "description": "If \"blocking\" is specified in the \"extraInfoSpec\" parameter, the event listener should return an object of this type.",
          "optional": true
        }
      },
      {
        "name": "onAuthRequired",
        "unsupported": true,
        "type": "function",
        "description": "Fired when an authentication failure is received. The listener has three options: it can provide authentication credentials, it can cancel the request and display the error page, or it can take no action on the challenge. If bad user credentials are provided, this may be called multiple times for the same request.",
        "parameters": [
          {
            "type": "object",
            "name": "details",
            "properties": {
              "requestId": {"type": "string", "description": "The ID of the request. Request IDs are unique within a browser session. As a result, they could be used to relate different events of the same request."},
              "url": {"type": "string"},
              "method": {"type": "string", "description": "Standard HTTP method."},
              "frameId": {"type": "integer", "description": "The value 0 indicates that the request happens in the main frame; a positive value indicates the ID of a subframe in which the request happens. If the document of a (sub-)frame is loaded (<code>type</code> is <code>main_frame</code> or <code>sub_frame</code>), <code>frameId</code> indicates the ID of this frame, not the ID of the outer frame. Frame IDs are unique within a tab."},
              "parentFrameId": {"type": "integer", "description": "ID of frame that wraps the frame which sent the request. Set to -1 if no parent frame exists."},
              "tabId": {"type": "integer", "description": "The ID of the tab in which the request takes place. Set to -1 if the request isn't related to a tab."},
              "type": {"$ref": "ResourceType", "description": "How the requested resource will be used."},
              "timeStamp": {"type": "number", "description": "The time when this signal is triggered, in milliseconds since the epoch."},
              "scheme": {"type": "string", "description": "The authentication scheme, e.g. Basic or Digest."},
              "realm": {"type": "string", "description": "The authentication realm provided by the server, if there is one.", "optional": true},
              "challenger": {"type": "object", "description": "The server requesting authentication.", "properties": {"host": {"type": "string"}, "port": {"type": "integer"}}},
              "isProxy": {"type": "boolean", "description": "True for Proxy-Authenticate, false for WWW-Authenticate."},
              "responseHeaders": {"$ref": "HttpHeaders", "optional": true, "description": "The HTTP response headers that were received along with this response."},
              "statusLine": {"type": "string", "description": "HTTP status line of the response or the 'HTTP/0.9 200 OK' string for HTTP/0.9 responses (i.e., responses that lack a status line) or an empty string if there are no headers."},
              "statusCode": {"type": "integer", "description": "Standard HTTP status code returned by the server."}
            }
          },
          {
            "type": "function",
            "optional": true,
            "name": "callback",
            "parameters": [
              {"name": "response", "$ref": "BlockingResponse"}
            ]
          }
        ],
        "extraParameters": [
          {
            "$ref": "RequestFilter",
            "name": "filter",
            "description": "A set of filters that restricts the events that will be sent to this listener."
          },
          {
            "type": "array",
            "optional": true,
            "name": "extraInfoSpec",
            "description": "Array of extra information that should be passed to the listener function.",
            "items": {
              "$ref": "OnAuthRequiredOptions"
            }
          }
        ],
        "returns": {
          "$ref": "BlockingResponse",
          "description": "If \"blocking\" is specified in the \"extraInfoSpec\" parameter, the event listener should return an object of this type.",
          "optional": true
        }
      },
      {
        "name": "onResponseStarted",
        "type": "function",
        "description": "Fired when the first byte of the response body is received. For HTTP requests, this means that the status line and response headers are available.",
        "parameters": [
          {
            "type": "object",
            "name": "details",
            "properties": {
              "requestId": {"type": "string", "description": "The ID of the request. Request IDs are unique within a browser session. As a result, they could be used to relate different events of the same request."},
              "url": {"type": "string"},
              "method": {"type": "string", "description": "Standard HTTP method."},
              "frameId": {"type": "integer", "description": "The value 0 indicates that the request happens in the main frame; a positive value indicates the ID of a subframe in which the request happens. If the document of a (sub-)frame is loaded (<code>type</code> is <code>main_frame</code> or <code>sub_frame</code>), <code>frameId</code> indicates the ID of this frame, not the ID of the outer frame. Frame IDs are unique within a tab."},
              "parentFrameId": {"type": "integer", "description": "ID of frame that wraps the frame which sent the request. Set to -1 if no parent frame exists."},
              "tabId": {"type": "integer", "description": "The ID of the tab in which the request takes place. Set to -1 if the request isn't related to a tab."},
              "type": {"$ref": "ResourceType", "description": "How the requested resource will be used."},
              "timeStamp": {"type": "number", "description": "The time when this signal is triggered, in milliseconds since the epoch."},
              "ip": {"type": "string", "optional": true, "description": "The server IP address that the request was actually sent to. Note that it may be a literal IPv6 address."},
              "fromCache": {"type": "boolean", "description": "Indicates if this response was fetched from disk cache."},
              "statusCode": {"type": "integer", "description": "Standard HTTP status code returned by the server."},
              "responseHeaders": {"$ref": "HttpHeaders", "optional": true, "description": "The HTTP response headers that were received along with this response."},
              "statusLine": {"type": "string", "description": "HTTP status line of the response or the 'HTTP/0.9 200 OK' string for HTTP/0.9 responses (i.e., responses that lack a status line) or an empty string if there are no headers."}
            }
          }
        ],
        "extraParameters": [
          {
            "$ref": "RequestFilter",
            "name": "filter",
            "description": "A set of filters that restricts the events that will be sent to this listener."
          },
          {
            "type": "array",
            "optional": true,
            "name": "extraInfoSpec",
            "description": "Array of extra information that should be passed to the listener function.",
            "items": {
              "$ref": "OnResponseStartedOptions"
            }
          }
        ]
      },
      {
        "name": "onBeforeRedirect",
        "type": "function",
        "description": "Fired when a server-initiated redirect is about to occur.",
        "parameters": [
          {
            "type": "object",
            "name": "details",
            "properties": {
              "requestId": {"type": "string", "description": "The ID of the request. Request IDs are unique within a browser session. As a result, they could be used to relate different events of the same request."},
              "url": {"type": "string"},
              "method": {"type": "string", "description": "Standard HTTP method."},
              "frameId": {"type": "integer", "description": "The value 0 indicates that the request happens in the main frame; a positive value indicates the ID of a subframe in which the request happens. If the document of a (sub-)frame is loaded (<code>type</code> is <code>main_frame</code> or <code>sub_frame</code>), <code>frameId</code> indicates the ID of this frame, not the ID of the outer frame. Frame IDs are unique within a tab."},
              "parentFrameId": {"type": "integer", "description": "ID of frame that wraps the frame which sent the request. Set to -1 if no parent frame exists."},
              "tabId": {"type": "integer", "description": "The ID of the tab in which the request takes place. Set to -1 if the request isn't related to a tab."},
              "type": {"$ref": "ResourceType", "description": "How the requested resource will be used."},
              "timeStamp": {"type": "number", "description": "The time when this signal is triggered, in milliseconds since the epoch."},
              "ip": {"type": "string", "optional": true, "description": "The server IP address that the request was actually sent to. Note that it may be a literal IPv6 address."},
              "fromCache": {"type": "boolean", "description": "Indicates if this response was fetched from disk cache."},
              "statusCode": {"type": "integer", "description": "Standard HTTP status code returned by the server."},
              "redirectUrl": {"type": "string", "description": "The new URL."},
              "responseHeaders": {"$ref": "HttpHeaders", "optional": true, "description": "The HTTP response headers that were received along with this redirect."},
              "statusLine": {"type": "string", "description": "HTTP status line of the response or the 'HTTP/0.9 200 OK' string for HTTP/0.9 responses (i.e., responses that lack a status line) or an empty string if there are no headers."}
            }
          }
        ],
        "extraParameters": [
          {
            "$ref": "RequestFilter",
            "name": "filter",
            "description": "A set of filters that restricts the events that will be sent to this listener."
          },
          {
            "type": "array",
            "optional": true,
            "name": "extraInfoSpec",
            "description": "Array of extra information that should be passed to the listener function.",
            "items": {
              "$ref": "OnBeforeRedirectOptions"
            }
          }
        ]
      },
      {
        "name": "onCompleted",
        "type": "function",
        "description": "Fired when a request is completed.",
        "parameters": [
          {
            "type": "object",
            "name": "details",
            "properties": {
              "requestId": {"type": "string", "description": "The ID of the request. Request IDs are unique within a browser session. As a result, they could be used to relate different events of the same request."},
              "url": {"type": "string"},
              "method": {"type": "string", "description": "Standard HTTP method."},
              "frameId": {"type": "integer", "description": "The value 0 indicates that the request happens in the main frame; a positive value indicates the ID of a subframe in which the request happens. If the document of a (sub-)frame is loaded (<code>type</code> is <code>main_frame</code> or <code>sub_frame</code>), <code>frameId</code> indicates the ID of this frame, not the ID of the outer frame. Frame IDs are unique within a tab."},
              "parentFrameId": {"type": "integer", "description": "ID of frame that wraps the frame which sent the request. Set to -1 if no parent frame exists."},
              "tabId": {"type": "integer", "description": "The ID of the tab in which the request takes place. Set to -1 if the request isn't related to a tab."},
              "type": {"$ref": "ResourceType", "description": "How the requested resource will be used."},
              "timeStamp": {"type": "number", "description": "The time when this signal is triggered, in milliseconds since the epoch."},
              "ip": {"type": "string", "optional": true, "description": "The server IP address that the request was actually sent to. Note that it may be a literal IPv6 address."},
              "fromCache": {"type": "boolean", "description": "Indicates if this response was fetched from disk cache."},
              "statusCode": {"type": "integer", "description": "Standard HTTP status code returned by the server."},
              "responseHeaders": {"$ref": "HttpHeaders", "optional": true, "description": "The HTTP response headers that were received along with this response."},
              "statusLine": {"type": "string", "description": "HTTP status line of the response or the 'HTTP/0.9 200 OK' string for HTTP/0.9 responses (i.e., responses that lack a status line) or an empty string if there are no headers."}
            }
          }
        ],
        "extraParameters": [
          {
            "$ref": "RequestFilter",
            "name": "filter",
            "description": "A set of filters that restricts the events that will be sent to this listener."
          },
          {
            "type": "array",
            "optional": true,
            "name": "extraInfoSpec",
            "description": "Array of extra information that should be passed to the listener function.",
            "items": {
              "$ref": "OnCompletedOptions"
            }
          }
        ]
      },
      {
        "name": "onErrorOccurred",
        "type": "function",
        "description": "Fired when an error occurs.",
        "parameters": [
          {
            "type": "object",
            "name": "details",
            "properties": {
              "requestId": {"type": "string", "description": "The ID of the request. Request IDs are unique within a browser session. As a result, they could be used to relate different events of the same request."},
              "url": {"type": "string"},
              "method": {"type": "string", "description": "Standard HTTP method."},
              "frameId": {"type": "integer", "description": "The value 0 indicates that the request happens in the main frame; a positive value indicates the ID of a subframe in which the request happens. If the document of a (sub-)frame is loaded (<code>type</code> is <code>main_frame</code> or <code>sub_frame</code>), <code>frameId</code> indicates the ID of this frame, not the ID of the outer frame. Frame IDs are unique within a tab."},
              "parentFrameId": {"type": "integer", "description": "ID of frame that wraps the frame which sent the request. Set to -1 if no parent frame exists."},
              "tabId": {"type": "integer", "description": "The ID of the tab in which the request takes place. Set to -1 if the request isn't related to a tab."},
              "type": {"$ref": "ResourceType", "description": "How the requested resource will be used."},
              "timeStamp": {"type": "number", "description": "The time when this signal is triggered, in milliseconds since the epoch."},
              "ip": {"type": "string", "optional": true, "description": "The server IP address that the request was actually sent to. Note that it may be a literal IPv6 address."},
              "fromCache": {"type": "boolean", "description": "Indicates if this response was fetched from disk cache."},
              "error": {"type": "string", "description": "The error description. This string is <em>not</em> guaranteed to remain backwards compatible between releases. You must not parse and act based upon its content."}
            }
          }
        ],
        "extraParameters": [
          {
            "$ref": "RequestFilter",
            "name": "filter",
            "description": "A set of filters that restricts the events that will be sent to this listener."
          }
        ]
      }
    ]
  },
  {
    "namespace": "bookmarks",
    "description": "Use the <code>browser.bookmarks</code> API to create, organize, and otherwise manipulate bookmarks. Also see $(topic:override)[Override Pages], which you can use to create a custom Bookmark Manager page.",
    "permissions": ["bookmarks"],
    "types": [
      {
        "id": "BookmarkTreeNodeUnmodifiable",
        "type": "string",
        "enum": ["managed"],
        "description": "Indicates the reason why this node is unmodifiable. The <var>managed</var> value indicates that this node was configured by the system administrator or by the custodian of a supervised user. Omitted if the node can be modified by the user and the extension (default)."
      },
      {
        "id": "BookmarkTreeNode",
        "type": "object",
        "description": "A node (either a bookmark or a folder) in the bookmark tree.  Child nodes are ordered within their parent folder.",
        "properties": {
          "id": {
            "type": "string",
            "description": "The unique identifier for the node. IDs are unique within the current profile, and they remain valid even after the browser is restarted."
          },
          "parentId": {
            "type": "string",
            "optional": true,
            "description": "The <code>id</code> of the parent folder.  Omitted for the root node."
          },
          "index": {
            "type": "integer",
            "optional": true,
            "description": "The 0-based position of this node within its parent folder."
          },
          "url": {
            "type": "string",
            "optional": true,
            "description": "The URL navigated to when a user clicks the bookmark. Omitted for folders."
          },
          "title": {
            "type": "string",
            "description": "The text displayed for the node."
          },
          "dateAdded": {
            "type": "number",
            "optional": true,
            "description": "When this node was created, in milliseconds since the epoch (<code>new Date(dateAdded)</code>)."
          },
          "dateGroupModified": {
            "type": "number",
            "optional": true,
            "description": "When the contents of this folder last changed, in milliseconds since the epoch."
          },
          "unmodifiable": {
            "$ref": "BookmarkTreeNodeUnmodifiable",
            "optional": true,
            "description": "Indicates the reason why this node is unmodifiable. The <var>managed</var> value indicates that this node was configured by the system administrator or by the custodian of a supervised user. Omitted if the node can be modified by the user and the extension (default)."
          },
          "children": {
            "type": "array",
            "optional": true,
            "items": { "$ref": "BookmarkTreeNode" },
            "description": "An ordered list of children of this node."
          }
        }
      },
      {
        "id": "CreateDetails",
        "description": "Object passed to the create() function.",
        "type": "object",
        "properties": {
          "parentId": {
            "type": "string",
            "optional": true,
            "description": "Defaults to the Other Bookmarks folder."
          },
          "index": {
            "type": "integer",
            "minimum": 0,
            "optional": true
          },
          "title": {
            "type": "string",
            "optional": true
          },
          "url": {
            "type": "string",
            "optional": true
          }
        }
      }
    ],
    "functions": [
      {
        "name": "get",
        "type": "function",
        "description": "Retrieves the specified BookmarkTreeNode(s).",
        "async": "callback",
        "parameters": [
          {
            "name": "idOrIdList",
            "description": "A single string-valued id, or an array of string-valued ids",
            "choices": [
              {
                "type": "string"
              },
              {
                "type": "array",
                "items": {
                  "type": "string"
                },
                "minItems": 1
              }
            ]
          },
          {
            "type": "function",
            "name": "callback",
            "parameters": [
              {
                "name": "results",
                "type": "array",
                "items": { "$ref": "BookmarkTreeNode" }
              }
            ]
          }
        ]
      },
      {
        "name": "getChildren",
        "type": "function",
        "description": "Retrieves the children of the specified BookmarkTreeNode id.",
        "async": "callback",
        "parameters": [
          {
            "type": "string",
            "name": "id"
          },
          {
            "type": "function",
            "name": "callback",
            "parameters": [
              {
                "name": "results",
                "type": "array",
                "items": { "$ref": "BookmarkTreeNode"}
              }
            ]
          }
        ]
      },
      {
        "name": "getRecent",
        "type": "function",
        "description": "Retrieves the recently added bookmarks.",
        "async": "callback",
        "parameters": [
          {
            "type": "integer",
            "minimum": 1,
            "name": "numberOfItems",
            "description": "The maximum number of items to return."
          },
          {
            "type": "function",
            "name": "callback",
            "parameters": [
              {
                "name": "results",
                "type": "array",
                "items": { "$ref": "BookmarkTreeNode" }
              }
            ]
          }
        ]
      },
      {
        "name": "getTree",
        "type": "function",
        "description": "Retrieves the entire Bookmarks hierarchy.",
        "async": "callback",
        "parameters": [
          {
            "type": "function",
            "name": "callback",
            "parameters": [
              {
                "name": "results",
                "type": "array",
                "items": { "$ref": "BookmarkTreeNode" }
              }
            ]
          }
        ]
      },
      {
        "name": "getSubTree",
        "type": "function",
        "description": "Retrieves part of the Bookmarks hierarchy, starting at the specified node.",
        "async": "callback",
        "parameters": [
          {
            "type": "string",
            "name": "id",
            "description": "The ID of the root of the subtree to retrieve."
          },
          {
            "type": "function",
            "name": "callback",
            "parameters": [
              {
                "name": "results",
                "type": "array",
                "items": { "$ref": "BookmarkTreeNode" }
              }
            ]
          }
        ]
      },
      {
        "name": "search",
        "type": "function",
        "description": "Searches for BookmarkTreeNodes matching the given query. Queries specified with an object produce BookmarkTreeNodes matching all specified properties.",
        "async": "callback",
        "parameters": [
          {
            "name": "query",
            "description": "Either a string of words and quoted phrases that are matched against bookmark URLs and titles, or an object. If an object, the properties <code>query</code>, <code>url</code>, and <code>title</code> may be specified and bookmarks matching all specified properties will be produced.",
            "choices": [
              {
                "type": "string",
                "description": "A string of words and quoted phrases that are matched against bookmark URLs and titles."
              },
              {
                "type": "object",
                "description": "An object specifying properties and values to match when searching. Produces bookmarks matching all properties.",
                "properties": {
                  "query": {
                    "type": "string",
                    "optional": true,
                    "description": "A string of words and quoted phrases that are matched against bookmark URLs and titles."
                  },
                  "url": {
                    "type": "string",
                    "format": "url",
                    "optional": true,
                    "description": "The URL of the bookmark; matches verbatim. Note that folders have no URL."
                  },
                  "title": {
                    "type": "string",
                    "optional": true,
                    "description": "The title of the bookmark; matches verbatim."
                  }
                }
              }
            ]
          },
          {
            "type": "function",
            "name": "callback",
            "parameters": [
              {
                "name": "results",
                "type": "array",
                "items": { "$ref": "BookmarkTreeNode" }
              }
            ]
          }
        ]
      },
      {
        "name": "create",
        "type": "function",
        "description": "Creates a bookmark or folder under the specified parentId.  If url is NULL or missing, it will be a folder.",
        "async": "callback",
        "parameters": [
          {
            "$ref": "CreateDetails",
            "name": "bookmark"
          },
          {
            "type": "function",
            "name": "callback",
            "optional": true,
            "parameters": [
              {
                "name": "result",
                "$ref": "BookmarkTreeNode"
              }
            ]
          }
        ]
      },
      {
        "name": "move",
        "type": "function",
        "description": "Moves the specified BookmarkTreeNode to the provided location.",
        "async": "callback",
        "parameters": [
          {
            "type": "string",
            "name": "id"
          },
          {
            "type": "object",
            "name": "destination",
            "properties": {
              "parentId": {
                "type": "string",
                "optional": true
              },
              "index": {
                "type": "integer",
                "minimum": 0,
                "optional": true
              }
            }
          },
          {
            "type": "function",
            "name": "callback",
            "optional": true,
            "parameters": [
              {
                "name": "result",
                "$ref": "BookmarkTreeNode"
              }
            ]
          }
        ]
      },
      {
        "name": "update",
        "type": "function",
        "description": "Updates the properties of a bookmark or folder. Specify only the properties that you want to change; unspecified properties will be left unchanged.  <b>Note:</b> Currently, only 'title' and 'url' are supported.",
        "async": "callback",
        "parameters": [
          {
            "type": "string",
            "name": "id"
          },
          {
            "type": "object",
            "name": "changes",
            "properties": {
              "title": {
                "type": "string",
                "optional": true
              },
              "url": {
                "type": "string",
                "optional": true
              }
            }
          },
          {
            "type": "function",
            "name": "callback",
            "optional": true,
            "parameters": [
              {
                "name": "result",
                "$ref": "BookmarkTreeNode"
              }
            ]
          }
        ]
      },
      {
        "name": "remove",
        "type": "function",
        "description": "Removes a bookmark or an empty bookmark folder.",
        "async": "callback",
        "parameters": [
          {
            "type": "string",
            "name": "id"
          },
          {
            "type": "function",
            "name": "callback",
            "optional": true,
            "parameters": []
          }
        ]
      },
      {
        "name": "removeTree",
        "type": "function",
        "description": "Recursively removes a bookmark folder.",
        "async": "callback",
        "parameters": [
          {
            "type": "string",
            "name": "id"
          },
          {
            "type": "function",
            "name": "callback",
            "optional": true,
            "parameters": []
          }
        ]
      },
      {
        "name": "import",
        "unsupported": true,
        "type": "function",
        "description": "Imports bookmarks from an html bookmark file",
        "async": "callback",
        "parameters": [
          {
            "type": "function",
            "name": "callback",
            "optional": true,
            "parameters": []
          }
        ]
      },
      {
        "name": "export",
        "unsupported": true,
        "type": "function",
        "description": "Exports bookmarks to an html bookmark file",
        "async": "callback",
        "parameters": [
          {
            "type": "function",
            "name": "callback",
            "optional": true,
            "parameters": []
          }
        ]
      }
    ],
    "events": [
      {
        "name": "onCreated",
        "unsupported": true,
        "type": "function",
        "description": "Fired when a bookmark or folder is created.",
        "parameters": [
          {
            "type": "string",
            "name": "id"
          },
          {
            "$ref": "BookmarkTreeNode",
            "name": "bookmark"
          }
        ]
      },
      {
        "name": "onRemoved",
        "unsupported": true,
        "type": "function",
        "description": "Fired when a bookmark or folder is removed.  When a folder is removed recursively, a single notification is fired for the folder, and none for its contents.",
        "parameters": [
          {
            "type": "string",
            "name": "id"
          },
          {
            "type": "object",
            "name": "removeInfo",
            "properties": {
              "parentId": { "type": "string" },
              "index": { "type": "integer" },
              "node": { "$ref": "BookmarkTreeNode" }
            }
          }
        ]
      },
      {
        "name": "onChanged",
        "unsupported": true,
        "type": "function",
        "description": "Fired when a bookmark or folder changes.  <b>Note:</b> Currently, only title and url changes trigger this.",
        "parameters": [
          {
            "type": "string",
            "name": "id"
          },
          {
            "type": "object",
            "name": "changeInfo",
            "properties": {
              "title": { "type": "string" },
              "url": {
                "type": "string",
                "optional": true
              }
            }
          }
        ]
      },
      {
        "name": "onMoved",
        "unsupported": true,
        "type": "function",
        "description": "Fired when a bookmark or folder is moved to a different parent folder.",
        "parameters": [
          {
            "type": "string",
            "name": "id"
          },
          {
            "type": "object",
            "name": "moveInfo",
            "properties": {
              "parentId": { "type": "string" },
              "index": { "type": "integer" },
              "oldParentId": { "type": "string" },
              "oldIndex": { "type": "integer" }
            }
          }
        ]
      },
      {
        "name": "onChildrenReordered",
        "unsupported": true,
        "type": "function",
        "description": "Fired when the children of a folder have changed their order due to the order being sorted in the UI.  This is not called as a result of a move().",
        "parameters": [
          {
            "type": "string",
            "name": "id"
          },
          {
            "type": "object",
            "name": "reorderInfo",
            "properties": {
              "childIds": {
                "type": "array",
                "items": { "type": "string" }
              }
            }
          }
        ]
      },
      {
        "name": "onImportBegan",
        "unsupported": true,
        "type": "function",
        "description": "Fired when a bookmark import session is begun.  Expensive observers should ignore onCreated updates until onImportEnded is fired.  Observers should still handle other notifications immediately.",
        "parameters": []
      },
      {
        "name": "onImportEnded",
        "unsupported": true,
        "type": "function",
        "description": "Fired when a bookmark import session is ended.",
        "parameters": []
      }
    ]
  },
  {
    "namespace": "browserAction",
    "description": "Use browser actions to put icons in the main browser toolbar, to the right of the address bar. In addition to its icon, a browser action can also have a tooltip, a badge, and a popup.",
    "permissions": ["manifest:browser_action"],
    "types": [
      {
        "id": "ColorArray",
        "type": "array",
        "items": {
          "type": "integer",
          "minimum": 0,
          "maximum": 255
        },
        "minItems": 4,
        "maxItems": 4
      },
      {
        "id": "ImageDataType",
        "type": "object",
        "isInstanceOf": "ImageData",
        "additionalProperties": { "type": "any" },
        "description": "Pixel data for an image. Must be an ImageData object (for example, from a <code>canvas</code> element)."
      }
    ],
    "functions": [
      {
        "name": "setTitle",
        "type": "function",
        "description": "Sets the title of the browser action. This shows up in the tooltip.",
        "parameters": [
          {
            "name": "details",
            "type": "object",
            "properties": {
              "title": {
                "type": "string",
                "description": "The string the browser action should display when moused over."
              },
              "tabId": {
                "type": "integer",
                "optional": true,
                "description": "Limits the change to when a particular tab is selected. Automatically resets when the tab is closed."
              }
            }
          }
        ]
      },
      {
        "name": "getTitle",
        "type": "function",
        "description": "Gets the title of the browser action.",
        "async": "callback",
        "parameters": [
          {
            "name": "details",
            "type": "object",
            "properties": {
              "tabId": {
                "type": "integer",
                "optional": true,
                "description": "Specify the tab to get the title from. If no tab is specified, the non-tab-specific title is returned."
              }
            }
          },
          {
            "type": "function",
            "name": "callback",
            "parameters": [
              {
                "name": "result",
                "type": "string"
              }
            ]
          }
        ]
      },
      {
        "name": "setIcon",
        "type": "function",
        "description": "Sets the icon for the browser action. The icon can be specified either as the path to an image file or as the pixel data from a canvas element, or as dictionary of either one of those. Either the <b>path</b> or the <b>imageData</b> property must be specified.",
        "async": "callback",
        "parameters": [
          {
            "name": "details",
            "type": "object",
            "properties": {
              "imageData": {
                "choices": [
                  { "$ref": "ImageDataType" },
                  {
                    "type": "object",
                    "additionalProperties": {"$ref": "ImageDataType"}
                  }
                ],
                "optional": true,
                "description": "Either an ImageData object or a dictionary {size -> ImageData} representing icon to be set. If the icon is specified as a dictionary, the actual image to be used is chosen depending on screen's pixel density. If the number of image pixels that fit into one screen space unit equals <code>scale</code>, then image with size <code>scale</code> * 19 will be selected. Initially only scales 1 and 2 will be supported. At least one image must be specified. Note that 'details.imageData = foo' is equivalent to 'details.imageData = {'19': foo}'"
              },
              "path": {
                "choices": [
                  { "type": "string" },
                  {
                    "type": "object",
                    "additionalProperties": {"type": "string"}
                  }
                ],
                "optional": true,
                "description": "Either a relative image path or a dictionary {size -> relative image path} pointing to icon to be set. If the icon is specified as a dictionary, the actual image to be used is chosen depending on screen's pixel density. If the number of image pixels that fit into one screen space unit equals <code>scale</code>, then image with size <code>scale</code> * 19 will be selected. Initially only scales 1 and 2 will be supported. At least one image must be specified. Note that 'details.path = foo' is equivalent to 'details.imageData = {'19': foo}'"
              },
              "tabId": {
                "type": "integer",
                "optional": true,
                "description": "Limits the change to when a particular tab is selected. Automatically resets when the tab is closed."
              }
            }
          },
          {
            "type": "function",
            "name": "callback",
            "optional": true,
            "parameters": []
          }
        ]
      },
      {
        "name": "setPopup",
        "type": "function",
        "description": "Sets the html document to be opened as a popup when the user clicks on the browser action's icon.",
        "parameters": [
          {
            "name": "details",
            "type": "object",
            "properties": {
              "tabId": {
                "type": "integer",
                "optional": true,
                "minimum": 0,
                "description": "Limits the change to when a particular tab is selected. Automatically resets when the tab is closed."
              },
              "popup": {
                "type": "string",
                "description": "The html file to show in a popup.  If set to the empty string (''), no popup is shown."
              }
            }
          }
        ]
      },
      {
        "name": "getPopup",
        "type": "function",
        "description": "Gets the html document set as the popup for this browser action.",
        "async": "callback",
        "parameters": [
          {
            "name": "details",
            "type": "object",
            "properties": {
              "tabId": {
                "type": "integer",
                "optional": true,
                "description": "Specify the tab to get the popup from. If no tab is specified, the non-tab-specific popup is returned."
              }
            }
          },
          {
            "type": "function",
            "name": "callback",
            "parameters": [
              {
                "name": "result",
                "type": "string"
              }
            ]
          }
        ]
      },
      {
        "name": "setBadgeText",
        "type": "function",
        "description": "Sets the badge text for the browser action. The badge is displayed on top of the icon.",
        "parameters": [
          {
            "name": "details",
            "type": "object",
            "properties": {
              "text": {
                "type": "string",
                "description": "Any number of characters can be passed, but only about four can fit in the space."
              },
              "tabId": {
                "type": "integer",
                "optional": true,
                "description": "Limits the change to when a particular tab is selected. Automatically resets when the tab is closed."
              }
            }
          }
        ]
      },
      {
        "name": "getBadgeText",
        "type": "function",
        "description": "Gets the badge text of the browser action. If no tab is specified, the non-tab-specific badge text is returned.",
        "async": "callback",
        "parameters": [
          {
            "name": "details",
            "type": "object",
            "properties": {
              "tabId": {
                "type": "integer",
                "optional": true,
                "description": "Specify the tab to get the badge text from. If no tab is specified, the non-tab-specific badge text is returned."
              }
            }
          },
          {
            "type": "function",
            "name": "callback",
            "parameters": [
              {
                "name": "result",
                "type": "string"
              }
            ]
          }
        ]
      },
      {
        "name": "setBadgeBackgroundColor",
        "type": "function",
        "description": "Sets the background color for the badge.",
        "parameters": [
          {
            "name": "details",
            "type": "object",
            "properties": {
              "color": {
                "description": "An array of four integers in the range [0,255] that make up the RGBA color of the badge. For example, opaque red is <code>[255, 0, 0, 255]</code>. Can also be a string with a CSS value, with opaque red being <code>#FF0000</code> or <code>#F00</code>.",
                "choices": [
                  {"type": "string"},
                  {"$ref": "ColorArray"}
                ]
              },
              "tabId": {
                "type": "integer",
                "optional": true,
                "description": "Limits the change to when a particular tab is selected. Automatically resets when the tab is closed."
              }
            }
          }
        ]
      },
      {
        "name": "getBadgeBackgroundColor",
        "type": "function",
        "description": "Gets the background color of the browser action.",
        "async": "callback",
        "parameters": [
          {
            "name": "details",
            "type": "object",
            "properties": {
              "tabId": {
                "type": "integer",
                "optional": true,
                "description": "Specify the tab to get the badge background color from. If no tab is specified, the non-tab-specific badge background color is returned."
              }
            }
          },
          {
            "type": "function",
            "name": "callback",
            "parameters": [
              {
                "name": "result",
                "$ref": "ColorArray"
              }
            ]
          }
        ]
      },
      {
        "name": "enable",
        "type": "function",
        "description": "Enables the browser action for a tab. By default, browser actions are enabled.",
        "parameters": [
          {
            "type": "integer",
            "optional": true,
            "name": "tabId",
            "minimum": 0,
            "description": "The id of the tab for which you want to modify the browser action."
          }
        ]
      },
      {
        "name": "disable",
        "type": "function",
        "description": "Disables the browser action for a tab.",
        "parameters": [
          {
            "type": "integer",
            "optional": true,
            "name": "tabId",
            "minimum": 0,
            "description": "The id of the tab for which you want to modify the browser action."
          }
        ]
      },
      {
        "name": "openPopup",
        "type": "function",
        "description": "Opens the extension popup window in the active window but does not grant tab permissions.",
        "unsupported": true,
        "async": "callback",
        "parameters": [
          {
            "type": "function",
            "name": "callback",
            "parameters": [
              {
                "name": "popupView",
                "type": "object",
                "optional": true,
                "description": "JavaScript 'window' object for the popup window if it was succesfully opened.",
                "additionalProperties": { "type": "any" }
              }
            ]
          }
        ]
      }
    ],
    "events": [
      {
        "name": "onClicked",
        "type": "function",
        "description": "Fired when a browser action icon is clicked.  This event will not fire if the browser action has a popup.",
        "parameters": [
          {
            "name": "tab",
            "$ref": "tabs.Tab"
          }
        ]
      }
    ]
  },
  {
    "namespace": "commands",
    "description": "Use the commands API to add keyboard shortcuts that trigger actions in your extension, for example, an action to open the browser action or send a command to the xtension.",
    "permissions": ["manifest:commands"],
    "types": [
      {
        "id": "Command",
        "type": "object",
        "properties": {
          "name":        {
            "type": "string",
            "optional": true,
            "description": "The name of the Extension Command"
          },
          "description": {
            "type": "string",
            "optional": true,
            "description": "The Extension Command description"
          },
          "shortcut": {
            "type": "string",
            "optional": true,
            "description": "The shortcut active for this command, or blank if not active."
          }
        }
      }
    ],
    "events": [
      {
        "name": "onCommand",
        "description": "Fired when a registered command is activated using a keyboard shortcut.",
        "type": "function",
        "parameters": [
          {
            "name": "command",
            "type": "string"
          }
        ]
      }
    ],
    "functions": [
      {
        "name": "getAll",
        "type": "function",
        "async": "callback",
        "description": "Returns all the registered extension commands for this extension and their shortcut (if active).",
        "parameters": [
          {
            "type": "function",
            "name": "callback",
            "optional": true,
            "parameters": [
              {
                "name": "commands",
                "type": "array",
                "items": {
                  "$ref": "Command"
                }
              }
            ],
            "description": "Called to return the registered commands."
          }
        ]
      }
    ]
  },
  {
    "namespace": "contextMenusInternal",
    "description": "Use the <code>browser.contextMenus</code> API to add items to the browser's context menu. You can choose what types of objects your context menu additions apply to, such as images, hyperlinks, and pages.",
    "types": [
      {
        "id": "OnClickData",
        "type": "object",
        "description": "Information sent when a context menu item is clicked.",
        "properties": {
          "menuItemId": {
            "choices": [
              { "type": "integer" },
              { "type": "string" }
            ],
            "description": "The ID of the menu item that was clicked."
          },
          "parentMenuItemId": {
            "choices": [
              { "type": "integer" },
              { "type": "string" }
            ],
            "optional": true,
            "description": "The parent ID, if any, for the item clicked."
          },
          "mediaType": {
            "type": "string",
            "optional": true,
            "description": "One of 'image', 'video', or 'audio' if the context menu was activated on one of these types of elements."
          },
          "linkUrl": {
            "type": "string",
            "optional": true,
            "description": "If the element is a link, the URL it points to."
          },
          "srcUrl": {
            "type": "string",
            "optional": true,
            "description": "Will be present for elements with a 'src' URL."
          },
          "pageUrl": {
            "type": "string",
            "optional": true,
            "description": "The URL of the page where the menu item was clicked. This property is not set if the click occured in a context where there is no current page, such as in a launcher context menu."
          },
          "frameUrl": {
            "type": "string",
            "optional": true,
            "description": " The URL of the frame of the element where the context menu was clicked, if it was in a frame."
          },
          "selectionText": {
            "type": "string",
            "optional": true,
            "description": "The text for the context selection, if any."
          },
          "editable": {
            "type": "boolean",
            "description": "A flag indicating whether the element is editable (text input, textarea, etc.)."
          },
          "wasChecked": {
            "type": "boolean",
            "optional": true,
            "description": "A flag indicating the state of a checkbox or radio item before it was clicked."
          },
          "checked": {
            "type": "boolean",
            "optional": true,
            "description": "A flag indicating the state of a checkbox or radio item after it is clicked."
          }
        }
      }
    ],
    "events": [
      {
        "name": "onClicked",
        "type": "function",
        "description": "Fired when a context menu item is clicked.",
        "parameters": [
          {
            "name": "info",
            "$ref": "OnClickData",
            "description": "Information about the item clicked and the context where the click happened."
          },
          {
            "name": "tab",
            "$ref": "tabs.Tab",
            "description": "The details of the tab where the click took place. If the click did not take place in a tab, this parameter will be missing.",
            "optional": true
          }
        ]
      }
    ]
  },
  {
    "namespace": "contextMenus",
    "description": "Use the <code>browser.contextMenus</code> API to add items to the browser's context menu. You can choose what types of objects your context menu additions apply to, such as images, hyperlinks, and pages.",
    "permissions": ["contextMenus"],
    "properties": {
      "ACTION_MENU_TOP_LEVEL_LIMIT": {
        "value": 6,
        "description": "The maximum number of top level extension items that can be added to an extension action context menu. Any items beyond this limit will be ignored."
      }
    },
    "types": [
      {
        "id": "ContextType",
        "type": "string",
        "enum": ["all", "page", "frame", "selection", "link", "editable", "image", "video", "audio", "launcher", "browser_action", "page_action"],
        "description": "The different contexts a menu can appear in. Specifying 'all' is equivalent to the combination of all other contexts except for 'launcher'. The 'launcher' context is only supported by apps and is used to add menu items to the context menu that appears when clicking on the app icon in the launcher/taskbar/dock/etc. Different platforms might put limitations on what is actually supported in a launcher context menu."
      },
      {
        "id": "ItemType",
        "type": "string",
        "enum": ["normal", "checkbox", "radio", "separator"],
        "description": "The type of menu item."
      },
      {
        "id": "OnClickData",
        "type": "object",
        "description": "Information sent when a context menu item is clicked.",
        "properties": {
          "menuItemId": {
            "choices": [
              { "type": "integer" },
              { "type": "string" }
            ],
            "description": "The ID of the menu item that was clicked."
          },
          "parentMenuItemId": {
            "choices": [
              { "type": "integer" },
              { "type": "string" }
            ],
            "optional": true,
            "description": "The parent ID, if any, for the item clicked."
          },
          "mediaType": {
            "type": "string",
            "optional": true,
            "description": "One of 'image', 'video', or 'audio' if the context menu was activated on one of these types of elements."
          },
          "linkUrl": {
            "type": "string",
            "optional": true,
            "description": "If the element is a link, the URL it points to."
          },
          "srcUrl": {
            "type": "string",
            "optional": true,
            "description": "Will be present for elements with a 'src' URL."
          },
          "pageUrl": {
            "type": "string",
            "optional": true,
            "description": "The URL of the page where the menu item was clicked. This property is not set if the click occured in a context where there is no current page, such as in a launcher context menu."
          },
          "frameUrl": {
            "type": "string",
            "optional": true,
            "description": " The URL of the frame of the element where the context menu was clicked, if it was in a frame."
          },
          "selectionText": {
            "type": "string",
            "optional": true,
            "description": "The text for the context selection, if any."
          },
          "editable": {
            "type": "boolean",
            "description": "A flag indicating whether the element is editable (text input, textarea, etc.)."
          },
          "wasChecked": {
            "type": "boolean",
            "optional": true,
            "description": "A flag indicating the state of a checkbox or radio item before it was clicked."
          },
          "checked": {
            "type": "boolean",
            "optional": true,
            "description": "A flag indicating the state of a checkbox or radio item after it is clicked."
          }
        }
      }
    ],
    "functions": [
      {
        "name": "create",
        "type": "function",
        "description": "Creates a new context menu item. Note that if an error occurs during creation, you may not find out until the creation callback fires (the details will be in $(ref:runtime.lastError)).",
        "returns": {
          "choices": [
            { "type": "integer" },
            { "type": "string" }
          ],
          "description": "The ID of the newly created item."
        },
        "parameters": [
          {
            "type": "object",
            "name": "createProperties",
            "properties": {
              "type": {
                "$ref": "ItemType",
                "optional": true,
                "description": "The type of menu item. Defaults to 'normal' if not specified."
              },
              "id": {
                "type": "string",
                "optional": true,
                "description": "The unique ID to assign to this item. Mandatory for event pages. Cannot be the same as another ID for this extension."
              },
              "title": {
                "type": "string",
                "optional": true,
                "description": "The text to be displayed in the item; this is <em>required</em> unless <code>type</code> is 'separator'. When the context is 'selection', you can use <code>%s</code> within the string to show the selected text. For example, if this parameter's value is \"Translate '%s' to Pig Latin\" and the user selects the word \"cool\", the context menu item for the selection is \"Translate 'cool' to Pig Latin\"."
              },
              "checked": {
                "type": "boolean",
                "optional": true,
                "description": "The initial state of a checkbox or radio item: true for selected and false for unselected. Only one radio item can be selected at a time in a given group of radio items."
              },
              "contexts": {
                "type": "array",
                "items": {
                  "$ref": "ContextType"
                },
                "minItems": 1,
                "optional": true,
                "description": "List of contexts this menu item will appear in. Defaults to ['page'] if not specified."
              },
              "onclick": {
                "type": "function",
                "optional": true,
                "description": "A function that will be called back when the menu item is clicked. Event pages cannot use this; instead, they should register a listener for $(ref:contextMenus.onClicked).",
                "parameters": [
                  {
                    "name": "info",
                    "$ref": "contextMenusInternal.OnClickData",
                    "description": "Information about the item clicked and the context where the click happened."
                  },
                  {
                    "name": "tab",
                    "$ref": "tabs.Tab",
                    "description": "The details of the tab where the click took place. Note: this parameter only present for extensions."
                  }
                ]
              },
              "parentId": {
                "choices": [
                  { "type": "integer" },
                  { "type": "string" }
                ],
                "optional": true,
                "description": "The ID of a parent menu item; this makes the item a child of a previously added item."
              },
              "documentUrlPatterns": {
                "type": "array",
                "items": {"type": "string"},
                "optional": true,
                "description": "Lets you restrict the item to apply only to documents whose URL matches one of the given patterns. (This applies to frames as well.) For details on the format of a pattern, see $(topic:match_patterns)[Match Patterns]."
              },
              "targetUrlPatterns": {
                "type": "array",
                "items": {"type": "string"},
                "optional": true,
                "description": "Similar to documentUrlPatterns, but lets you filter based on the src attribute of img/audio/video tags and the href of anchor tags."
              },
              "enabled": {
                "type": "boolean",
                "optional": true,
                "description": "Whether this context menu item is enabled or disabled. Defaults to true."
              }
            }
          },
          {
            "type": "function",
            "name": "callback",
            "optional": true,
            "description": "Called when the item has been created in the browser. If there were any problems creating the item, details will be available in $(ref:runtime.lastError).",
            "parameters": []
          }
        ]
      },
      {
        "name": "update",
        "type": "function",
        "description": "Updates a previously created context menu item.",
        "async": "callback",
        "parameters": [
          {
            "choices": [
              { "type": "integer" },
              { "type": "string" }
            ],
            "name": "id",
            "description": "The ID of the item to update."
          },
          {
            "type": "object",
            "name": "updateProperties",
            "description": "The properties to update. Accepts the same values as the create function.",
            "properties": {
              "type": {
                "$ref": "ItemType",
                "optional": true
              },
              "title": {
                "type": "string",
                "optional": true
              },
              "checked": {
                "type": "boolean",
                "optional": true
              },
              "contexts": {
                "type": "array",
                "items": {
                  "$ref": "ContextType"
                },
                "minItems": 1,
                "optional": true
              },
              "onclick": {
                "type": "function",
                "optional": true,
                "parameters": [
                  {
                    "name": "info",
                    "$ref": "contextMenusInternal.OnClickData"
                  },
                  {
                    "name": "tab",
                    "$ref": "tabs.Tab",
                    "description": "The details of the tab where the click took place. Note: this parameter only present for extensions."
                  }
                ]
              },
              "parentId": {
                "choices": [
                  { "type": "integer" },
                  { "type": "string" }
                ],
                "optional": true,
                "description": "Note: You cannot change an item to be a child of one of its own descendants."
              },
              "documentUrlPatterns": {
                "type": "array",
                "items": {"type": "string"},
                "optional": true
              },
              "targetUrlPatterns": {
                "type": "array",
                "items": {"type": "string"},
                "optional": true
              },
              "enabled": {
                "type": "boolean",
                "optional": true
              }
            }
          },
          {
            "type": "function",
            "name": "callback",
            "optional": true,
            "parameters": [],
            "description": "Called when the context menu has been updated."
          }
        ]
      },
      {
        "name": "remove",
        "type": "function",
        "description": "Removes a context menu item.",
        "async": "callback",
        "parameters": [
          {
            "choices": [
              { "type": "integer" },
              { "type": "string" }
            ],
            "name": "menuItemId",
            "description": "The ID of the context menu item to remove."
          },
          {
            "type": "function",
            "name": "callback",
            "optional": true,
            "parameters": [],
            "description": "Called when the context menu has been removed."
          }
        ]
      },
      {
        "name": "removeAll",
        "type": "function",
        "description": "Removes all context menu items added by this extension.",
        "async": "callback",
        "parameters": [
          {
            "type": "function",
            "name": "callback",
            "optional": true,
            "parameters": [],
            "description": "Called when removal is complete."
          }
        ]
      }
    ],
    "events": [
      {
        "name": "onClicked",
        "type": "function",
        "description": "Fired when a context menu item is clicked.",
        "parameters": [
          {
            "name": "info",
            "$ref": "OnClickData",
            "description": "Information about the item clicked and the context where the click happened."
          },
          {
            "name": "tab",
            "$ref": "tabs.Tab",
            "description": "The details of the tab where the click took place. If the click did not take place in a tab, this parameter will be missing.",
            "optional": true
          }
        ]
      }
    ]
  },
  {
    "namespace": "history",
    "description": "Use the <code>browser.history</code> API to interact with the browser's record of visited pages. You can add, remove, and query for URLs in the browser's history. To override the history page with your own version, see $(topic:override)[Override Pages].",
    "permissions": ["history"],
    "types": [
      {
        "id": "TransitionType",
        "type": "string",
        "enum": ["link", "typed", "auto_bookmark", "auto_subframe", "manual_subframe", "generated", "auto_toplevel", "form_submit", "reload", "keyword", "keyword_generated"],
        "description": "The $(topic:transition-types)[transition type] for this visit from its referrer."
      },
      {
        "id": "HistoryItem",
        "type": "object",
        "description": "An object encapsulating one result of a history query.",
        "properties": {
          "id": {
            "type": "string",
            "description": "The unique identifier for the item."
          },
          "url": {
            "type": "string",
            "optional": true,
            "description": "The URL navigated to by a user."
          },
          "title": {
            "type": "string",
            "optional": true,
            "description": "The title of the page when it was last loaded."
          },
          "lastVisitTime": {
            "type": "number",
            "optional": true,
            "description": "When this page was last loaded, represented in milliseconds since the epoch."
          },
          "visitCount": {
            "type": "integer",
            "optional": true,
            "description": "The number of times the user has navigated to this page."
          },
          "typedCount": {
            "type": "integer",
            "optional": true,
            "description": "The number of times the user has navigated to this page by typing in the address."
          }
        }
      },
      {
        "id": "VisitItem",
        "type": "object",
        "description": "An object encapsulating one visit to a URL.",
        "properties": {
          "id": {
            "type": "string",
            "description": "The unique identifier for the item."
          },
          "visitId": {
            "type": "string",
            "description": "The unique identifier for this visit."
          },
          "visitTime": {
            "type": "number",
            "optional": true,
            "description": "When this visit occurred, represented in milliseconds since the epoch."
          },
          "referringVisitId": {
            "type": "string",
            "description": "The visit ID of the referrer."
          },
          "transition": {
            "$ref": "TransitionType",
            "description": "The $(topic:transition-types)[transition type] for this visit from its referrer."
          }
        }
      }
    ],
    "functions": [
      {
        "name": "search",
        "type": "function",
        "description": "Searches the history for the last visit time of each page matching the query.",
        "async": "callback",
        "parameters": [
          {
            "name": "query",
            "type": "object",
            "properties": {
              "text": {
                "type": "string",
                "description": "A free-text query to the history service.  Leave empty to retrieve all pages."
              },
              "startTime": {
                "$ref": "extensionTypes.Date",
                "optional": true,
                "description": "Limit results to those visited after this date. If not specified, this defaults to 24 hours in the past."
              },
              "endTime": {
                "$ref": "extensionTypes.Date",
                "optional": true,
                "description": "Limit results to those visited before this date."
              },
              "maxResults": {
                "type": "integer",
                "optional": true,
                "minimum": 1,
                "description": "The maximum number of results to retrieve.  Defaults to 100."
              }
            }
          },
          {
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "name": "results",
                "type": "array",
                "items": {
                  "$ref": "HistoryItem"
                }
              }
            ]
          }
        ]
      },
      {
        "name": "getVisits",
        "type": "function",
        "description": "Retrieves information about visits to a URL.",
        "async": "callback",
        "parameters": [
          {
            "name": "details",
            "type": "object",
            "properties": {
              "url": {
                "type": "string",
                "description": "The URL for which to retrieve visit information.  It must be in the format as returned from a call to history.search."
              }
            }
          },
          {
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "name": "results",
                "type": "array",
                "items": {
                  "$ref": "VisitItem"
                }
              }
            ]
          }
        ]
      },
      {
        "name": "addUrl",
        "type": "function",
        "description": "Adds a URL to the history with a default visitTime of the current time and a default $(topic:transition-types)[transition type] of \"link\".",
        "async": "callback",
        "parameters": [
          {
            "name": "details",
            "type": "object",
            "properties": {
              "url": {
                "type": "string",
                "description": "The URL to add. Must be a valid URL that can be added to history."
              },
              "title": {
                "type": "string",
                "optional": true,
                "description": "The title of the page."
              },
              "transition": {
                "$ref": "TransitionType",
                "optional": true,
                "description": "The $(topic:transition-types)[transition type] for this visit from its referrer."
              },
              "visitTime": {
                "$ref": "extensionTypes.Date",
                "optional": true,
                "description": "The date when this visit occurred."
              }
            }
          },
          {
            "name": "callback",
            "type": "function",
            "optional": true,
            "parameters": []
          }
        ]
      },
      {
        "name": "deleteUrl",
        "type": "function",
        "description": "Removes all occurrences of the given URL from the history.",
        "async": "callback",
        "parameters": [
          {
            "name": "details",
            "type": "object",
            "properties": {
              "url": {
                "type": "string",
                "description": "The URL to remove."
              }
            }
          },
          {
            "name": "callback",
            "type": "function",
            "optional": true,
            "parameters": []
          }
        ]
      },
      {
        "name": "deleteRange",
        "type": "function",
        "description": "Removes all items within the specified date range from the history.  Pages will not be removed from the history unless all visits fall within the range.",
        "async": "callback",
        "parameters": [
          {
            "name": "range",
            "type": "object",
            "properties": {
              "startTime": {
                "$ref": "extensionTypes.Date",
                "description": "Items added to history after this date."
              },
              "endTime": {
                "$ref": "extensionTypes.Date",
                "description": "Items added to history before this date."
              }
            }
          },
          {
            "name": "callback",
            "type": "function",
            "parameters": []
          }
        ]
      },
      {
        "name": "deleteAll",
        "type": "function",
        "description": "Deletes all items from the history.",
        "async": "callback",
        "parameters": [
          {
            "name": "callback",
            "type": "function",
            "parameters": []
          }
        ]
      }
    ],
    "events": [
      {
        "name": "onVisited",
        "type": "function",
        "description": "Fired when a URL is visited, providing the HistoryItem data for that URL.  This event fires before the page has loaded.",
        "parameters": [
          {
            "name": "result",
            "$ref": "HistoryItem"
          }
        ]
      },
      {
        "name": "onVisitRemoved",
        "type": "function",
        "description": "Fired when one or more URLs are removed from the history service.  When all visits have been removed the URL is purged from history.",
        "parameters": [
          {
            "name": "removed",
            "type": "object",
            "properties": {
              "allHistory": {
                "type": "boolean",
                "description": "True if all history was removed.  If true, then urls will be empty."
              },
              "urls": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            }
          }
        ]
      }
    ]
  },
  {
    "namespace": "pageAction",
    "description": "Use the <code>browser.pageAction</code> API to put icons inside the address bar. Page actions represent actions that can be taken on the current page, but that aren't applicable to all pages.",
    "permissions": ["manifest:page_action"],
    "types": [
      {
        "id": "ImageDataType",
        "type": "object",
        "isInstanceOf": "ImageData",
        "additionalProperties": { "type": "any" },
        "description": "Pixel data for an image. Must be an ImageData object (for example, from a <code>canvas</code> element)."
      }
    ],
    "functions": [
      {
        "name": "show",
        "type": "function",
        "async": true,
        "description": "Shows the page action. The page action is shown whenever the tab is selected.",
        "parameters": [
          {"type": "integer", "name": "tabId", "minimum": 0, "description": "The id of the tab for which you want to modify the page action."}
        ]
      },
      {
        "name": "hide",
        "type": "function",
        "async": true,
        "description": "Hides the page action.",
        "parameters": [
          {"type": "integer", "name": "tabId", "minimum": 0, "description": "The id of the tab for which you want to modify the page action."}
        ]
      },
      {
        "name": "setTitle",
        "type": "function",
        "description": "Sets the title of the page action. This is displayed in a tooltip over the page action.",
        "parameters": [
          {
            "name": "details",
            "type": "object",
            "properties": {
              "tabId": {"type": "integer", "minimum": 0, "description": "The id of the tab for which you want to modify the page action."},
              "title": {"type": "string", "description": "The tooltip string."}
            }
          }
        ]
      },
      {
        "name": "getTitle",
        "type": "function",
        "description": "Gets the title of the page action.",
        "async": "callback",
        "parameters": [
          {
            "name": "details",
            "type": "object",
            "properties": {
              "tabId": {
                "type": "integer",
                "description": "Specify the tab to get the title from."
              }
            }
          },
          {
            "type": "function",
            "name": "callback",
            "parameters": [
              {
                "name": "result",
                "type": "string"
              }
            ]
          }
        ]
      },
      {
        "name": "setIcon",
        "type": "function",
        "description": "Sets the icon for the page action. The icon can be specified either as the path to an image file or as the pixel data from a canvas element, or as dictionary of either one of those. Either the <b>path</b> or the <b>imageData</b> property must be specified.",
        "async": "callback",
        "parameters": [
          {
            "name": "details",
            "type": "object",
            "properties": {
              "tabId": {"type": "integer", "minimum": 0, "description": "The id of the tab for which you want to modify the page action."},
              "imageData": {
                "choices": [
                  { "$ref": "ImageDataType" },
                  {
                    "type": "object",
                    "additionalProperties": {"$ref": "ImageDataType"}
                  }
                ],
                "optional": true,
                "description": "Either an ImageData object or a dictionary {size -> ImageData} representing icon to be set. If the icon is specified as a dictionary, the actual image to be used is chosen depending on screen's pixel density. If the number of image pixels that fit into one screen space unit equals <code>scale</code>, then image with size <code>scale</code> * 19 will be selected. Initially only scales 1 and 2 will be supported. At least one image must be specified. Note that 'details.imageData = foo' is equivalent to 'details.imageData = {'19': foo}'"
              },
              "path": {
                "choices": [
                  { "type": "string" },
                  {
                    "type": "object",
                    "additionalProperties": {"type": "string"}
                  }
                ],
                "optional": true,
                "description": "Either a relative image path or a dictionary {size -> relative image path} pointing to icon to be set. If the icon is specified as a dictionary, the actual image to be used is chosen depending on screen's pixel density. If the number of image pixels that fit into one screen space unit equals <code>scale</code>, then image with size <code>scale</code> * 19 will be selected. Initially only scales 1 and 2 will be supported. At least one image must be specified. Note that 'details.path = foo' is equivalent to 'details.imageData = {'19': foo}'"
              }
            }
          },
          {
            "type": "function",
            "name": "callback",
            "optional": true,
            "parameters": []
          }
        ]
      },
      {
        "name": "setPopup",
        "type": "function",
        "description": "Sets the html document to be opened as a popup when the user clicks on the page action's icon.",
        "parameters": [
          {
            "name": "details",
            "type": "object",
            "properties": {
              "tabId": {"type": "integer", "minimum": 0, "description": "The id of the tab for which you want to modify the page action."},
              "popup": {
                "type": "string",
                "description": "The html file to show in a popup.  If set to the empty string (''), no popup is shown."
              }
            }
          }
        ]
      },
      {
        "name": "getPopup",
        "type": "function",
        "description": "Gets the html document set as the popup for this page action.",
        "async": "callback",
        "parameters": [
          {
            "name": "details",
            "type": "object",
            "properties": {
              "tabId": {
                "type": "integer",
                "description": "Specify the tab to get the popup from."
              }
            }
          },
          {
            "type": "function",
            "name": "callback",
            "parameters": [
              {
                "name": "result",
                "type": "string"
              }
            ]
          }
        ]
      }
    ],
    "events": [
      {
        "name": "onClicked",
        "type": "function",
        "description": "Fired when a page action icon is clicked.  This event will not fire if the page action has a popup.",
        "parameters": [
          {
            "name": "tab",
            "$ref": "tabs.Tab"
          }
        ]
      }
    ]
  },
  {
    "namespace": "tabs",
    "description": "Use the <code>browser.tabs</code> API to interact with the browser's tab system. You can use this API to create, modify, and rearrange tabs in the browser.",
    "types": [
      { "id": "MutedInfoReason",
        "type": "string",
        "description": "An event that caused a muted state change.",
        "enum": [
          {"name": "user", "description": "A user input action has set/overridden the muted state."},
          {"name": "capture", "description": "Tab capture started, forcing a muted state change."},
          {"name": "extension", "description": "An extension, identified by the extensionId field, set the muted state."}
        ]
      },
      {
        "id": "MutedInfo",
        "type": "object",
        "description": "Tab muted state and the reason for the last state change.",
        "properties": {
          "muted": {
            "type": "boolean",
            "description": "Whether the tab is prevented from playing sound (but hasn't necessarily recently produced sound). Equivalent to whether the muted audio indicator is showing."
          },
          "reason": {
            "$ref": "MutedInfoReason",
            "optional": true,
            "description": "The reason the tab was muted or unmuted. Not set if the tab's mute state has never been changed."
          },
          "extensionId": {
            "type": "string",
            "optional": true,
            "description": "The ID of the extension that changed the muted state. Not set if an extension was not the reason the muted state last changed."
          }
        }
      },
      {
        "id": "Tab",
        "type": "object",
        "properties": {
          "id": {"type": "integer", "minimum": -1, "optional": true, "description": "The ID of the tab. Tab IDs are unique within a browser session. Under some circumstances a Tab may not be assigned an ID, for example when querying foreign tabs using the $(ref:sessions) API, in which case a session ID may be present. Tab ID can also be set to $(ref:tabs.TAB_ID_NONE) for apps and devtools windows."},
          "index": {"type": "integer", "minimum": -1, "description": "The zero-based index of the tab within its window."},
          "windowId": {"type": "integer", "minimum": 0, "description": "The ID of the window the tab is contained within."},
          "openerTabId": {"unsupported": true, "type": "integer", "minimum": 0, "optional": true, "description": "The ID of the tab that opened this tab, if any. This property is only present if the opener tab still exists."},
          "selected": {"type": "boolean", "description": "Whether the tab is selected.", "deprecated": "Please use $(ref:tabs.Tab.highlighted).", "unsupported": true},
          "highlighted": {"type": "boolean", "description": "Whether the tab is highlighted."},
          "active": {"type": "boolean", "description": "Whether the tab is active in its window. (Does not necessarily mean the window is focused.)"},
          "pinned": {"type": "boolean", "description": "Whether the tab is pinned."},
          "audible": {"type": "boolean", "optional": true, "description": "Whether the tab has produced sound over the past couple of seconds (but it might not be heard if also muted). Equivalent to whether the speaker audio indicator is showing."},
          "mutedInfo": {"$ref": "MutedInfo", "optional": true, "description": "Current tab muted state and the reason for the last state change."},
          "url": {"type": "string", "optional": true, "permissions": ["tabs"], "description": "The URL the tab is displaying. This property is only present if the extension's manifest includes the <code>\"tabs\"</code> permission."},
          "title": {"type": "string", "optional": true, "permissions": ["tabs"], "description": "The title of the tab. This property is only present if the extension's manifest includes the <code>\"tabs\"</code> permission."},
          "favIconUrl": {"type": "string", "optional": true, "permissions": ["tabs"], "description": "The URL of the tab's favicon. This property is only present if the extension's manifest includes the <code>\"tabs\"</code> permission. It may also be an empty string if the tab is loading."},
          "status": {"type": "string", "optional": true, "description": "Either <em>loading</em> or <em>complete</em>."},
          "incognito": {"type": "boolean", "description": "Whether the tab is in an incognito window."},
          "width": {"type": "integer", "optional": true, "description": "The width of the tab in pixels."},
          "height": {"type": "integer", "optional": true, "description": "The height of the tab in pixels."},
          "sessionId": {"unsupported": true, "type": "string", "optional": true, "description": "The session ID used to uniquely identify a Tab obtained from the $(ref:sessions) API."}
        }
      },
      {
        "id": "ZoomSettingsMode",
        "type": "string",
        "description": "Defines how zoom changes are handled, i.e. which entity is responsible for the actual scaling of the page; defaults to <code>automatic</code>.",
        "enum": [
          {
            "name": "automatic",
            "description": "Zoom changes are handled automatically by the browser."
          },
          {
            "name": "manual",
            "description": "Overrides the automatic handling of zoom changes. The <code>onZoomChange</code> event will still be dispatched, and it is the responsibility of the extension to listen for this event and manually scale the page. This mode does not support <code>per-origin</code> zooming, and will thus ignore the <code>scope</code> zoom setting and assume <code>per-tab</code>."
          },
          {
            "name": "disabled",
            "description": "Disables all zooming in the tab. The tab will revert to the default zoom level, and all attempted zoom changes will be ignored."
          }
        ]
      },
      {
        "id": "ZoomSettingsScope",
        "type": "string",
        "description": "Defines whether zoom changes will persist for the page's origin, or only take effect in this tab; defaults to <code>per-origin</code> when in <code>automatic</code> mode, and <code>per-tab</code> otherwise.",
        "enum": [
          {
            "name": "per-origin",
            "description": "Zoom changes will persist in the zoomed page's origin, i.e. all other tabs navigated to that same origin will be zoomed as well. Moreover, <code>per-origin</code> zoom changes are saved with the origin, meaning that when navigating to other pages in the same origin, they will all be zoomed to the same zoom factor. The <code>per-origin</code> scope is only available in the <code>automatic</code> mode."
          },
          {
            "name": "per-tab",
            "description": "Zoom changes only take effect in this tab, and zoom changes in other tabs will not affect the zooming of this tab. Also, <code>per-tab</code> zoom changes are reset on navigation; navigating a tab will always load pages with their <code>per-origin</code> zoom factors."
          }
        ]
      },
      {
        "id": "ZoomSettings",
        "type": "object",
        "description": "Defines how zoom changes in a tab are handled and at what scope.",
        "properties": {
          "mode": {
            "$ref": "ZoomSettingsMode",
            "description": "Defines how zoom changes are handled, i.e. which entity is responsible for the actual scaling of the page; defaults to <code>automatic</code>.",
            "optional": true
          },
          "scope": {
            "$ref": "ZoomSettingsScope",
            "description": "Defines whether zoom changes will persist for the page's origin, or only take effect in this tab; defaults to <code>per-origin</code> when in <code>automatic</code> mode, and <code>per-tab</code> otherwise.",
            "optional": true
          },
          "defaultZoomFactor": {
            "type": "number",
            "optional": true,
            "description": "Used to return the default zoom level for the current tab in calls to tabs.getZoomSettings."
          }
        }
      },
      {
        "id": "TabStatus",
        "type": "string",
        "enum": ["loading", "complete"],
        "description": "Whether the tabs have completed loading."
      },
      {
        "id": "WindowType",
        "type": "string",
        "enum": ["normal", "popup", "panel", "app", "devtools"],
        "description": "The type of window."
      }
    ],
    "properties": {
      "TAB_ID_NONE": {
        "value": -1,
        "description": "An ID which represents the absence of a browser tab."
      }
    },
    "functions": [
      {
        "name": "get",
        "type": "function",
        "description": "Retrieves details about the specified tab.",
        "async": "callback",
        "parameters": [
          {
            "type": "integer",
            "name": "tabId",
            "minimum": 0
          },
          {
            "type": "function",
            "name": "callback",
            "parameters": [
              {"name": "tab", "$ref": "Tab"}
            ]
          }
        ]
      },
      {
        "name": "getCurrent",
        "type": "function",
        "description": "Gets the tab that this script call is being made from. May be undefined if called from a non-tab context (for example: a background page or popup view).",
        "async": "callback",
        "parameters": [
          {
            "type": "function",
            "name": "callback",
            "parameters": [
              {
                "name": "tab",
                "$ref": "Tab",
                "optional": true
              }
            ]
          }
        ]
      },
      {
        "name": "connect",
        "type": "function",
        "description": "Connects to the content script(s) in the specified tab. The $(ref:runtime.onConnect) event is fired in each content script running in the specified tab for the current extension. For more details, see $(topic:messaging)[Content Script Messaging].",
        "parameters": [
          {
            "type": "integer",
            "name": "tabId",
            "minimum": 0
          },
          {
            "type": "object",
            "name": "connectInfo",
            "properties": {
              "name": { "type": "string", "optional": true, "description": "Will be passed into onConnect for content scripts that are listening for the connection event." },
              "frameId": {
                "type": "integer",
                "optional": true,
                "minimum": 0,
                "description": "Open a port to a specific $(topic:frame_ids)[frame] identified by <code>frameId</code> instead of all frames in the tab."
              }
            },
            "optional": true
          }
        ],
        "returns": {
          "$ref": "runtime.Port",
          "description": "A port that can be used to communicate with the content scripts running in the specified tab. The port's $(ref:runtime.Port) event is fired if the tab closes or does not exist. "
        }
      },
      {
        "name": "sendRequest",
        "deprecated": "Please use $(ref:runtime.sendMessage).",
        "unsupported": true,
        "type": "function",
        "description": "Sends a single request to the content script(s) in the specified tab, with an optional callback to run when a response is sent back.  The $(ref:extension.onRequest) event is fired in each content script running in the specified tab for the current extension.",
        "parameters": [
          {
            "type": "integer",
            "name": "tabId",
            "minimum": 0
          },
          {
            "type": "any",
            "name": "request"
          },
          {
            "type": "function",
            "name": "responseCallback",
            "optional": true,
            "parameters": [
              {
                "name": "response",
                "type": "any",
                "description": "The JSON response object sent by the handler of the request. If an error occurs while connecting to the specified tab, the callback will be called with no arguments and $(ref:runtime.lastError) will be set to the error message."
              }
            ]
          }
        ]
      },
      {
        "name": "sendMessage",
        "type": "function",
        "description": "Sends a single message to the content script(s) in the specified tab, with an optional callback to run when a response is sent back.  The $(ref:runtime.onMessage) event is fired in each content script running in the specified tab for the current extension.",
        "async": "sendResponse",
        "parameters": [
          {
            "type": "integer",
            "name": "tabId",
            "minimum": 0
          },
          {
            "type": "any",
            "name": "message"
          },
          {
            "type": "object",
            "name": "options",
            "properties": {
              "frameId": {
                "type": "integer",
                "optional": true,
                "minimum": 0,
                "description": "Send a message to a specific $(topic:frame_ids)[frame] identified by <code>frameId</code> instead of all frames in the tab."
              }
            },
            "optional": true
          },
          {
            "type": "function",
            "name": "responseCallback",
            "optional": true,
            "parameters": [
              {
                "name": "response",
                "type": "any",
                "description": "The JSON response object sent by the handler of the message. If an error occurs while connecting to the specified tab, the callback will be called with no arguments and $(ref:runtime.lastError) will be set to the error message."
              }
            ]
          }
        ]
      },
      {
        "name": "getSelected",
        "deprecated": "Please use $(ref:tabs.query) <code>{active: true}</code>.",
        "unsupported": true,
        "type": "function",
        "description": "Gets the tab that is selected in the specified window.",
        "async": "callback",
        "parameters": [
          {
            "type": "integer",
            "name": "windowId",
            "minimum": -2,
            "optional": true,
            "description": "Defaults to the $(topic:current-window)[current window]."
          },
          {
            "type": "function",
            "name": "callback",
            "parameters": [
              {"name": "tab", "$ref": "Tab"}
            ]
          }
        ]
      },
      {
        "name": "getAllInWindow",
        "deprecated": "Please use $(ref:tabs.query) <code>{windowId: windowId}</code>.",
        "unsupported": true,
        "type": "function",
        "description": "Gets details about all tabs in the specified window.",
        "async": "callback",
        "parameters": [
          {
            "type": "integer",
            "name": "windowId",
            "minimum": -2,
            "optional": true,
            "description": "Defaults to the $(topic:current-window)[current window]."
          },
          {
            "type": "function",
            "name": "callback",
            "parameters": [
              {"name": "tabs", "type": "array", "items": { "$ref": "Tab" } }
            ]
          }
        ]
      },
      {
        "name": "create",
        "type": "function",
        "description": "Creates a new tab.",
        "async": "callback",
        "parameters": [
          {
            "type": "object",
            "name": "createProperties",
            "properties": {
              "windowId": {
                "type": "integer",
                "minimum": -2,
                "optional": true,
                "description": "The window to create the new tab in. Defaults to the $(topic:current-window)[current window]."
              },
              "index": {
                "type": "integer",
                "minimum": 0,
                "optional": true,
                "description": "The position the tab should take in the window. The provided value will be clamped to between zero and the number of tabs in the window."
              },
              "url": {
                "type": "string",
                "optional": true,
                "description": "The URL to navigate the tab to initially. Fully-qualified URLs must include a scheme (i.e. 'http://www.google.com', not 'www.google.com'). Relative URLs will be relative to the current page within the extension. Defaults to the New Tab Page."
              },
              "active": {
                "type": "boolean",
                "optional": true,
                "description": "Whether the tab should become the active tab in the window. Does not affect whether the window is focused (see $(ref:windows.update)). Defaults to <var>true</var>."
              },
              "selected": {
                "deprecated": "Please use <em>active</em>.",
                "unsupported": true,
                "type": "boolean",
                "optional": true,
                "description": "Whether the tab should become the selected tab in the window. Defaults to <var>true</var>"
              },
              "pinned": {
                "type": "boolean",
                "optional": true,
                "description": "Whether the tab should be pinned. Defaults to <var>false</var>"
              },
              "openerTabId": {
                "unsupported": true,
                "type": "integer",
                "minimum": 0,
                "optional": true,
                "description": "The ID of the tab that opened this tab. If specified, the opener tab must be in the same window as the newly created tab."
              }
            }
          },
          {
            "type": "function",
            "name": "callback",
            "optional": true,
            "parameters": [
              {
                "name": "tab",
                "$ref": "Tab",
                "description": "Details about the created tab. Will contain the ID of the new tab."
              }
            ]
          }
        ]
      },
      {
        "name": "duplicate",
        "type": "function",
        "description": "Duplicates a tab.",
        "async": "callback",
        "parameters": [
          {
            "type": "integer",
            "name": "tabId",
            "minimum": 0,
            "description": "The ID of the tab which is to be duplicated."
          },
          {
            "type": "function",
            "name": "callback",
            "optional": true,
            "parameters": [
              {
                "name": "tab",
                "optional": true,
                "description": "Details about the duplicated tab. The $(ref:tabs.Tab) object doesn't contain <code>url</code>, <code>title</code> and <code>favIconUrl</code> if the <code>\"tabs\"</code> permission has not been requested.",
                "$ref": "Tab"
              }
            ]
          }
        ]
      },
      {
        "name": "query",
        "type": "function",
        "description": "Gets all tabs that have the specified properties, or all tabs if no properties are specified.",
        "async": "callback",
        "parameters": [
          {
            "type": "object",
            "name": "queryInfo",
            "properties": {
              "active": {
                "type": "boolean",
                "optional": true,
                "description": "Whether the tabs are active in their windows."
              },
              "pinned": {
                "type": "boolean",
                "optional": true,
                "description": "Whether the tabs are pinned."
              },
              "audible": {
                "type": "boolean",
                "optional": true,
                "description": "Whether the tabs are audible."
              },
              "muted": {
                "type": "boolean",
                "optional": true,
                "description": "Whether the tabs are muted."
              },
              "highlighted": {
                "type": "boolean",
                "optional": true,
                "description": "Whether the tabs are highlighted."
              },
              "currentWindow": {
                "type": "boolean",
                "optional": true,
                "description": "Whether the tabs are in the $(topic:current-window)[current window]."
              },
              "lastFocusedWindow": {
                "type": "boolean",
                "optional": true,
                "description": "Whether the tabs are in the last focused window."
              },
              "status": {
                "$ref": "TabStatus",
                "optional": true,
                "description": "Whether the tabs have completed loading."
              },
              "title": {
                "type": "string",
                "optional": true,
                "description": "Match page titles against a pattern."
              },
              "url": {
                "choices": [
                  {"type": "string"},
                  {"type": "array", "items": {"type": "string"}}
                ],
                "optional": true,
                "description": "Match tabs against one or more $(topic:match_patterns)[URL patterns]. Note that fragment identifiers are not matched."
              },
              "windowId": {
                "type": "integer",
                "optional": true,
                "minimum": -2,
                "description": "The ID of the parent window, or $(ref:windows.WINDOW_ID_CURRENT) for the $(topic:current-window)[current window]."
              },
              "windowType": {
                "$ref": "WindowType",
                "optional": true,
                "description": "The type of window the tabs are in."
              },
              "index": {
                "type": "integer",
                "optional": true,
                "minimum": 0,
                "description": "The position of the tabs within their windows."
              }
            }
          },
          {
            "type": "function",
            "name": "callback",
            "parameters": [
              {
                "name": "result",
                "type": "array",
                "items": {
                  "$ref": "Tab"
                }
              }
            ]
          }
        ]
      },
      {
        "name": "highlight",
        "type": "function",
        "description": "Highlights the given tabs.",
        "async": "callback",
        "parameters": [
          {
            "type": "object",
            "name": "highlightInfo",
            "properties": {
              "windowId": {
                "type": "integer",
                "optional": true,
                "description": "The window that contains the tabs.",
                "minimum": -2
              },
              "tabs": {
                "description": "One or more tab indices to highlight.",
                "choices": [
                  {"type": "array", "items": {"type": "integer", "minimum": 0}},
                  {"type": "integer"}
                ]
              }
            }
          },
          {
            "type": "function",
            "name": "callback",
            "optional": true,
            "parameters": [
              {
                "name": "window",
                "$ref": "windows.Window",
                "description": "Contains details about the window whose tabs were highlighted."
              }
            ]
          }
        ]
      },
      {
        "name": "update",
        "type": "function",
        "description": "Modifies the properties of a tab. Properties that are not specified in <var>updateProperties</var> are not modified.",
        "async": "callback",
        "parameters": [
          {
            "type": "integer",
            "name": "tabId",
            "minimum": 0,
            "optional": true,
            "description": "Defaults to the selected tab of the $(topic:current-window)[current window]."
          },
          {
            "type": "object",
            "name": "updateProperties",
            "properties": {
              "url": {
                "type": "string",
                "optional": true,
                "description": "A URL to navigate the tab to."
              },
              "active": {
                "type": "boolean",
                "optional": true,
                "description": "Whether the tab should be active. Does not affect whether the window is focused (see $(ref:windows.update))."
              },
              "highlighted": {
                "unsupported": true,
                "type": "boolean",
                "optional": true,
                "description": "Adds or removes the tab from the current selection."
              },
              "selected": {
                "unsupported": true,
                "deprecated": "Please use <em>highlighted</em>.",
                "type": "boolean",
                "optional": true,
                "description": "Whether the tab should be selected."
              },
              "pinned": {
                "type": "boolean",
                "optional": true,
                "description": "Whether the tab should be pinned."
              },
              "muted": {
                "type": "boolean",
                "optional": true,
                "description": "Whether the tab should be muted."
              },
              "openerTabId": {
                "unsupported": true,
                "type": "integer",
                "minimum": 0,
                "optional": true,
                "description": "The ID of the tab that opened this tab. If specified, the opener tab must be in the same window as this tab."
              }
            }
          },
          {
            "type": "function",
            "name": "callback",
            "optional": true,
            "parameters": [
              {
                "name": "tab",
                "$ref": "Tab",
                "optional": true,
                "description": "Details about the updated tab. The $(ref:tabs.Tab) object doesn't contain <code>url</code>, <code>title</code> and <code>favIconUrl</code> if the <code>\"tabs\"</code> permission has not been requested."
              }
            ]
          }
        ]
      },
      {
        "name": "move",
        "type": "function",
        "description": "Moves one or more tabs to a new position within its window, or to a new window. Note that tabs can only be moved to and from normal (window.type === \"normal\") windows.",
        "async": "callback",
        "parameters": [
          {
            "name": "tabIds",
            "description": "The tab or list of tabs to move.",
            "choices": [
              {"type": "integer", "minimum": 0},
              {"type": "array", "items": {"type": "integer", "minimum": 0}}
            ]
          },
          {
            "type": "object",
            "name": "moveProperties",
            "properties": {
              "windowId": {
                "type": "integer",
                "minimum": -2,
                "optional": true,
                "description": "Defaults to the window the tab is currently in."
              },
              "index": {
                "type": "integer",
                "minimum": -1,
                "description": "The position to move the window to. -1 will place the tab at the end of the window."
              }
            }
          },
          {
            "type": "function",
            "name": "callback",
            "optional": true,
            "parameters": [
              {
                "name": "tabs",
                "description": "Details about the moved tabs.",
                "choices": [
                  {"$ref": "Tab"},
                  {"type": "array", "items": {"$ref": "Tab"}}
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "reload",
        "type": "function",
        "description": "Reload a tab.",
        "async": "callback",
        "parameters": [
          {
            "type": "integer",
            "name": "tabId",
            "minimum": 0,
            "optional": true,
            "description": "The ID of the tab to reload; defaults to the selected tab of the current window."
          },
          {
            "type": "object",
            "name": "reloadProperties",
            "optional": true,
            "properties": {
              "bypassCache": {
                "type": "boolean",
                "optional": true,
                "description": "Whether using any local cache. Default is false."
              }
            }
          },
          {
            "type": "function",
            "name": "callback",
            "optional": true,
            "parameters": []
          }
        ]
      },
      {
        "name": "remove",
        "type": "function",
        "description": "Closes one or more tabs.",
        "async": "callback",
        "parameters": [
          {
            "name": "tabIds",
            "description": "The tab or list of tabs to close.",
            "choices": [
              {"type": "integer", "minimum": 0},
              {"type": "array", "items": {"type": "integer", "minimum": 0}}
            ]
          },
          {
            "type": "function",
            "name": "callback",
            "optional": true,
            "parameters": []
          }
        ]
      },
      {
        "name": "detectLanguage",
        "type": "function",
        "description": "Detects the primary language of the content in a tab.",
        "async": "callback",
        "parameters": [
          {
            "type": "integer",
            "name": "tabId",
            "minimum": 0,
            "optional": true,
            "description": "Defaults to the active tab of the $(topic:current-window)[current window]."
          },
          {
            "type": "function",
            "name": "callback",
            "parameters": [
              {
                "type": "string",
                "name": "language",
                "description": "An ISO language code such as <code>en</code> or <code>fr</code>. For a complete list of languages supported by this method, see <a href='http://src.chromium.org/viewvc/chrome/trunk/src/third_party/cld/languages/internal/languages.cc'>kLanguageInfoTable</a>. The 2nd to 4th columns will be checked and the first non-NULL value will be returned except for Simplified Chinese for which zh-CN will be returned. For an unknown language, <code>und</code> will be returned."
              }
            ]
          }
        ]
      },
      {
        "name": "captureVisibleTab",
        "type": "function",
        "description": "Captures the visible area of the currently active tab in the specified window. You must have $(topic:declare_permissions)[&lt;all_urls&gt;] permission to use this method.",
        "permissions": ["<all_urls>"],
        "async": "callback",
        "parameters": [
          {
            "type": "integer",
            "name": "windowId",
            "minimum": -2,
            "optional": true,
            "description": "The target window. Defaults to the $(topic:current-window)[current window]."
          },
          {
            "$ref": "extensionTypes.ImageDetails",
            "name": "options",
            "optional": true
          },
          {
            "type": "function",
            "name": "callback",
            "parameters": [
              {
                "type": "string",
                "name": "dataUrl",
                "description": "A data URL which encodes an image of the visible area of the captured tab. May be assigned to the 'src' property of an HTML Image element for display."
              }
            ]
          }
        ]
      },
      {
        "name": "executeScript",
        "type": "function",
        "description": "Injects JavaScript code into a page. For details, see the $(topic:content_scripts)[programmatic injection] section of the content scripts doc.",
        "async": "callback",
        "parameters": [
          {
            "type": "integer",
            "name": "tabId",
            "minimum": 0,
            "optional": true,
            "description": "The ID of the tab in which to run the script; defaults to the active tab of the current window."
          },
          {
            "$ref": "extensionTypes.InjectDetails",
            "name": "details",
            "description": "Details of the script to run."
          },
          {
            "type": "function",
            "name": "callback",
            "optional": true,
            "description": "Called after all the JavaScript has been executed.",
            "parameters": [
              {
                "name": "result",
                "optional": true,
                "type": "array",
                "items": {"type": "any"},
                "description": "The result of the script in every injected frame."
              }
            ]
          }
        ]
      },
      {
        "name": "insertCSS",
        "type": "function",
        "description": "Injects CSS into a page. For details, see the $(topic:content_scripts)[programmatic injection] section of the content scripts doc.",
        "async": "callback",
        "parameters": [
          {
            "type": "integer",
            "name": "tabId",
            "minimum": 0,
            "optional": true,
            "description": "The ID of the tab in which to insert the CSS; defaults to the active tab of the current window."
          },
          {
            "$ref": "extensionTypes.InjectDetails",
            "name": "details",
            "description": "Details of the CSS text to insert."
          },
          {
            "type": "function",
            "name": "callback",
            "optional": true,
            "description": "Called when all the CSS has been inserted.",
            "parameters": []
          }
        ]
      },
      {
        "name": "removeCSS",
        "type": "function",
        "description": "Removes injected CSS from a page. For details, see the $(topic:content_scripts)[programmatic injection] section of the content scripts doc.",
        "async": "callback",
        "parameters": [
          {
            "type": "integer",
            "name": "tabId",
            "minimum": 0,
            "optional": true,
            "description": "The ID of the tab from which to remove the injected CSS; defaults to the active tab of the current window."
          },
          {
            "$ref": "extensionTypes.InjectDetails",
            "name": "details",
            "description": "Details of the CSS text to remove."
          },
          {
            "type": "function",
            "name": "callback",
            "optional": true,
            "description": "Called when all the CSS has been removed.",
            "parameters": []
          }
        ]
      },
      {
        "name": "setZoom",
        "type": "function",
        "description": "Zooms a specified tab.",
        "async": "callback",
        "parameters": [
          {
            "type": "integer",
            "name": "tabId",
            "minimum": 0,
            "optional": true,
            "description": "The ID of the tab to zoom; defaults to the active tab of the current window."
          },
          {
            "type": "number",
            "name": "zoomFactor",
            "description": "The new zoom factor. Use a value of 0 here to set the tab to its current default zoom factor. Values greater than zero specify a (possibly non-default) zoom factor for the tab."
          },
          {
            "type": "function",
            "name": "callback",
            "optional": true,
            "description": "Called after the zoom factor has been changed.",
            "parameters": []
          }
        ]
      },
      {
        "name": "getZoom",
        "type": "function",
        "description": "Gets the current zoom factor of a specified tab.",
        "async": "callback",
        "parameters": [
          {
            "type": "integer",
            "name": "tabId",
            "minimum": 0,
            "optional": true,
            "description": "The ID of the tab to get the current zoom factor from; defaults to the active tab of the current window."
          },
          {
            "type": "function",
            "name": "callback",
            "description": "Called with the tab's current zoom factor after it has been fetched.",
            "parameters": [
              {
                "type": "number",
                "name": "zoomFactor",
                "description": "The tab's current zoom factor."
              }
            ]
          }
        ]
      },
      {
        "name": "setZoomSettings",
        "type": "function",
        "description": "Sets the zoom settings for a specified tab, which define how zoom changes are handled. These settings are reset to defaults upon navigating the tab.",
        "async": "callback",
        "parameters": [
          {
            "type": "integer",
            "name": "tabId",
            "optional": true,
            "minimum": 0,
            "description": "The ID of the tab to change the zoom settings for; defaults to the active tab of the current window."
          },
          {
            "$ref": "ZoomSettings",
            "name": "zoomSettings",
            "description": "Defines how zoom changes are handled and at what scope."
          },
          {
            "type": "function",
            "name": "callback",
            "optional": true,
            "description": "Called after the zoom settings have been changed.",
            "parameters": []
          }
        ]
      },
      {
        "name": "getZoomSettings",
        "type": "function",
        "description": "Gets the current zoom settings of a specified tab.",
        "async": "callback",
        "parameters": [
          {
            "type": "integer",
            "name": "tabId",
            "optional": true,
            "minimum": 0,
            "description": "The ID of the tab to get the current zoom settings from; defaults to the active tab of the current window."
          },
          {
            "type": "function",
            "name": "callback",
            "description": "Called with the tab's current zoom settings.",
            "parameters": [
              {
                "$ref": "ZoomSettings",
                "name": "zoomSettings",
                "description": "The tab's current zoom settings."
              }
            ]
          }
        ]
      }
    ],
    "events": [
      {
        "name": "onCreated",
        "type": "function",
        "description": "Fired when a tab is created. Note that the tab's URL may not be set at the time this event fired, but you can listen to onUpdated events to be notified when a URL is set.",
        "parameters": [
          {
            "$ref": "Tab",
            "name": "tab",
            "description": "Details of the tab that was created."
          }
        ]
      },
      {
        "name": "onUpdated",
        "type": "function",
        "description": "Fired when a tab is updated.",
        "parameters": [
          {"type": "integer", "name": "tabId", "minimum": 0},
          {
            "type": "object",
            "name": "changeInfo",
            "description": "Lists the changes to the state of the tab that was updated.",
            "properties": {
              "status": {
                "type": "string",
                "optional": true,
                "description": "The status of the tab. Can be either <em>loading</em> or <em>complete</em>."
              },
              "url": {
                "type": "string",
                "optional": true,
                "description": "The tab's URL if it has changed."
              },
              "pinned": {
                "type": "boolean",
                "optional": true,
                "description": "The tab's new pinned state."
              },
              "audible": {
                "type": "boolean",
                "optional": true,
                "description": "The tab's new audible state."
              },
              "mutedInfo": {
                "$ref": "MutedInfo",
                "optional": true,
                "description": "The tab's new muted state and the reason for the change."
              },
              "favIconUrl": {
                "type": "string",
                "optional": true,
                "description": "The tab's new favicon URL."
              }
            }
          },
          {
            "$ref": "Tab",
            "name": "tab",
            "description": "Gives the state of the tab that was updated."
          }
        ]
      },
      {
        "name": "onMoved",
        "type": "function",
        "description": "Fired when a tab is moved within a window. Only one move event is fired, representing the tab the user directly moved. Move events are not fired for the other tabs that must move in response. This event is not fired when a tab is moved between windows. For that, see $(ref:tabs.onDetached).",
        "parameters": [
          {"type": "integer", "name": "tabId", "minimum": 0},
          {
            "type": "object",
            "name": "moveInfo",
            "properties": {
              "windowId": {"type": "integer", "minimum": 0},
              "fromIndex": {"type": "integer", "minimum": 0},
              "toIndex": {"type": "integer", "minimum": 0}
            }
          }
        ]
      },
      {
        "name": "onSelectionChanged",
        "deprecated": "Please use $(ref:tabs.onActivated).",
        "unsupported": true,
        "type": "function",
        "description": "Fires when the selected tab in a window changes.",
        "parameters": [
          {
            "type": "integer",
            "name": "tabId",
            "minimum": 0,
            "description": "The ID of the tab that has become active."
          },
          {
            "type": "object",
            "name": "selectInfo",
            "properties": {
              "windowId": {
                "type": "integer",
                "minimum": 0,
                "description": "The ID of the window the selected tab changed inside of."
              }
            }
          }
        ]
      },
      {
        "name": "onActiveChanged",
        "deprecated": "Please use $(ref:tabs.onActivated).",
        "unsupported": true,
        "type": "function",
        "description": "Fires when the selected tab in a window changes. Note that the tab's URL may not be set at the time this event fired, but you can listen to $(ref:tabs.onUpdated) events to be notified when a URL is set.",
        "parameters": [
          {
            "type": "integer",
            "name": "tabId",
            "minimum": 0,
            "description": "The ID of the tab that has become active."
          },
          {
            "type": "object",
            "name": "selectInfo",
            "properties": {
              "windowId": {
                "type": "integer",
                "minimum": 0,
                "description": "The ID of the window the selected tab changed inside of."
              }
            }
          }
        ]
      },
      {
        "name": "onActivated",
        "type": "function",
        "description": "Fires when the active tab in a window changes. Note that the tab's URL may not be set at the time this event fired, but you can listen to onUpdated events to be notified when a URL is set.",
        "parameters": [
          {
            "type": "object",
            "name": "activeInfo",
            "properties": {
              "tabId": {
                "type": "integer",
                "minimum": 0,
                "description": "The ID of the tab that has become active."
              },
              "windowId": {
                "type": "integer",
                "minimum": 0,
                "description": "The ID of the window the active tab changed inside of."
              }
            }
          }
        ]
      },
      {
        "name": "onHighlightChanged",
        "deprecated": "Please use $(ref:tabs.onHighlighted).",
        "unsupported": true,
        "type": "function",
        "description": "Fired when the highlighted or selected tabs in a window changes.",
        "parameters": [
          {
            "type": "object",
            "name": "selectInfo",
            "properties": {
              "windowId": {
                "type": "integer",
                "minimum": 0,
                "description": "The window whose tabs changed."
              },
              "tabIds": {
                "type": "array",
                "items": {"type": "integer", "minimum": 0},
                "description": "All highlighted tabs in the window."
              }
            }
          }
        ]
      },
      {
        "name": "onHighlighted",
        "type": "function",
        "description": "Fired when the highlighted or selected tabs in a window changes.",
        "parameters": [
          {
            "type": "object",
            "name": "highlightInfo",
            "properties": {
              "windowId": {
                "type": "integer",
                "minimum": 0,
                "description": "The window whose tabs changed."
              },
              "tabIds": {
                "type": "array",
                "items": {"type": "integer", "minimum": 0},
                "description": "All highlighted tabs in the window."
              }
            }
          }
        ]
      },
      {
        "name": "onDetached",
        "type": "function",
        "description": "Fired when a tab is detached from a window, for example because it is being moved between windows.",
        "parameters": [
          {"type": "integer", "name": "tabId", "minimum": 0},
          {
            "type": "object",
            "name": "detachInfo",
            "properties": {
              "oldWindowId": {"type": "integer", "minimum": 0},
              "oldPosition": {"type": "integer", "minimum": 0}
            }
          }
        ]
      },
      {
        "name": "onAttached",
        "type": "function",
        "description": "Fired when a tab is attached to a window, for example because it was moved between windows.",
        "parameters": [
          {"type": "integer", "name": "tabId", "minimum": 0},
          {
            "type": "object",
            "name": "attachInfo",
            "properties": {
              "newWindowId": {"type": "integer", "minimum": 0},
              "newPosition": {"type": "integer", "minimum": 0}
            }
          }
        ]
      },
      {
        "name": "onRemoved",
        "type": "function",
        "description": "Fired when a tab is closed.",
        "parameters": [
          {"type": "integer", "name": "tabId", "minimum": 0},
          {
            "type": "object",
            "name": "removeInfo",
            "properties": {
              "windowId": {"type": "integer", "minimum": 0, "description": "The window whose tab is closed." },
              "isWindowClosing": {"type": "boolean", "description": "True when the tab is being closed because its window is being closed." }
            }
          }
        ]
      },
      {
        "name": "onReplaced",
        "type": "function",
        "description": "Fired when a tab is replaced with another tab due to prerendering or instant.",
        "parameters": [
          {"type": "integer", "name": "addedTabId", "minimum": 0},
          {"type": "integer", "name": "removedTabId", "minimum": 0}
        ]
      },
      {
        "name": "onZoomChange",
        "type": "function",
        "description": "Fired when a tab is zoomed.",
        "parameters": [{
          "type": "object",
          "name": "ZoomChangeInfo",
          "properties": {
            "tabId": {"type": "integer", "minimum": 0},
            "oldZoomFactor": {"type": "number"},
            "newZoomFactor": {"type": "number"},
            "zoomSettings": {"$ref": "ZoomSettings"}
          }
        }]
      }
    ]
  },
  {
    "namespace": "windows",
    "description": "Use the <code>browser.windows</code> API to interact with browser windows. You can use this API to create, modify, and rearrange windows in the browser.",
    "types": [
      {
        "id": "WindowType",
        "type": "string",
        "description": "The type of browser window this is. Under some circumstances a Window may not be assigned type property, for example when querying closed windows from the $(ref:sessions) API.",
        "enum": ["normal", "popup", "panel", "app", "devtools"]
      },
      {
        "id": "WindowState",
        "type": "string",
        "description": "The state of this browser window. Under some circumstances a Window may not be assigned state property, for example when querying closed windows from the $(ref:sessions) API.",
        "enum": ["normal", "minimized", "maximized", "fullscreen", "docked"]
      },
      {
        "id": "Window",
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "optional": true,
            "minimum": 0,
            "description": "The ID of the window. Window IDs are unique within a browser session. Under some circumstances a Window may not be assigned an ID, for example when querying windows using the $(ref:sessions) API, in which case a session ID may be present."
          },
          "focused": {
            "type": "boolean",
            "description": "Whether the window is currently the focused window."
          },
          "top": {
            "type": "integer",
            "optional": true,
            "description": "The offset of the window from the top edge of the screen in pixels. Under some circumstances a Window may not be assigned top property, for example when querying closed windows from the $(ref:sessions) API."
          },
          "left": {
            "type": "integer",
            "optional": true,
            "description": "The offset of the window from the left edge of the screen in pixels. Under some circumstances a Window may not be assigned left property, for example when querying closed windows from the $(ref:sessions) API."
          },
          "width": {
            "type": "integer",
            "optional": true,
            "description": "The width of the window, including the frame, in pixels. Under some circumstances a Window may not be assigned width property, for example when querying closed windows from the $(ref:sessions) API."
          },
          "height": {
            "type": "integer",
            "optional": true,
            "description": "The height of the window, including the frame, in pixels. Under some circumstances a Window may not be assigned height property, for example when querying closed windows from the $(ref:sessions) API."
          },
          "tabs": {
            "type": "array",
            "items": { "$ref": "tabs.Tab" },
            "optional": true,
            "description": "Array of $(ref:tabs.Tab) objects representing the current tabs in the window."
          },
          "incognito": {
            "type": "boolean",
            "description": "Whether the window is incognito."
          },
          "type": {
            "$ref": "WindowType",
            "optional": true,
            "description": "The type of browser window this is."
          },
          "state": {
            "$ref": "WindowState",
            "optional": true,
            "description": "The state of this browser window."
          },
          "alwaysOnTop": {
            "type": "boolean",
            "description": "Whether the window is set to be always on top."
          },
          "sessionId": {
            "unsupported": true,
            "type": "string",
            "optional": true,
            "description": "The session ID used to uniquely identify a Window obtained from the $(ref:sessions) API."
          }
        }
      },
      {
        "id": "CreateType",
        "type": "string",
        "description": "Specifies what type of browser window to create. The 'panel' and 'detached_panel' types create a popup unless the '--enable-panels' flag is set.",
        "enum": ["normal", "popup", "panel", "detached_panel"]
      }
    ],
    "properties": {
      "WINDOW_ID_NONE": {
        "value": -1,
        "description": "The windowId value that represents the absence of a browser window."
      },
      "WINDOW_ID_CURRENT": {
        "value": -2,
        "description": "The windowId value that represents the $(topic:current-window)[current window]."
      }
    },
    "functions": [
      {
        "name": "get",
        "type": "function",
        "description": "Gets details about a window.",
        "async": "callback",
        "parameters": [
          {
            "type": "integer",
            "name": "windowId",
            "minimum": -2
          },
          {
            "type": "object",
            "name": "getInfo",
            "optional": true,
            "description": "",
            "properties": {
              "populate": {
                "type": "boolean",
                "optional": true,
                "description": "If true, the $(ref:windows.Window) object will have a <var>tabs</var> property that contains a list of the $(ref:tabs.Tab) objects. The <code>Tab</code> objects only contain the <code>url</code>, <code>title</code> and <code>favIconUrl</code> properties if the extension's manifest file includes the <code>\"tabs\"</code> permission."
              },
              "windowTypes": {
                "type": "array",
                "items": {
                  "$ref": "WindowType"
                },
                "optional": true,
                "description": "If set, the $(ref:windows.Window) returned will be filtered based on its type. If unset the default filter is set to <code>['app', 'normal', 'panel', 'popup']</code>, with <code>'app'</code> and <code>'panel'</code> window types limited to the extension's own windows."
              }
            }
          },
          {
            "type": "function",
            "name": "callback",
            "parameters": [
              {
                "name": "window",
                "$ref": "Window"
              }
            ]
          }
        ]
      },
      {
        "name": "getCurrent",
        "type": "function",
        "description": "Gets the $(topic:current-window)[current window].",
        "async": "callback",
        "parameters": [
          {
            "type": "object",
            "name": "getInfo",
            "optional": true,
            "description": "",
            "properties": {
              "populate": {
                "type": "boolean",
                "optional": true,
                "description": "If true, the $(ref:windows.Window) object will have a <var>tabs</var> property that contains a list of the $(ref:tabs.Tab) objects. The <code>Tab</code> objects only contain the <code>url</code>, <code>title</code> and <code>favIconUrl</code> properties if the extension's manifest file includes the <code>\"tabs\"</code> permission."
              },
              "windowTypes": {
                "type": "array",
                "items": { "$ref": "WindowType" },
                "optional": true,
                "description": "If set, the $(ref:windows.Window) returned will be filtered based on its type. If unset the default filter is set to <code>['app', 'normal', 'panel', 'popup']</code>, with <code>'app'</code> and <code>'panel'</code> window types limited to the extension's own windows."
              }
            }
          },
          {
            "type": "function",
            "name": "callback",
            "parameters": [
              {
                "name": "window",
                "$ref": "Window"
              }
            ]
          }
        ]
      },
      {
        "name": "getLastFocused",
        "type": "function",
        "description": "Gets the window that was most recently focused &mdash; typically the window 'on top'.",
        "async": "callback",
        "parameters": [
          {
            "type": "object",
            "name": "getInfo",
            "optional": true,
            "description": "",
            "properties": {
              "populate": {
                "type": "boolean",
                "optional": true,
                "description": "If true, the $(ref:windows.Window) object will have a <var>tabs</var> property that contains a list of the $(ref:tabs.Tab) objects. The <code>Tab</code> objects only contain the <code>url</code>, <code>title</code> and <code>favIconUrl</code> properties if the extension's manifest file includes the <code>\"tabs\"</code> permission."
              },
              "windowTypes": {
                "type": "array",
                "items": { "$ref": "WindowType" },
                "optional": true,
                "description": "If set, the $(ref:windows.Window) returned will be filtered based on its type. If unset the default filter is set to <code>['app', 'normal', 'panel', 'popup']</code>, with <code>'app'</code> and <code>'panel'</code> window types limited to the extension's own windows."
              }
            }
          },
          {
            "type": "function",
            "name": "callback",
            "parameters": [
              {
                "name": "window",
                "$ref": "Window"
              }
            ]
          }
        ]
      },
      {
        "name": "getAll",
        "type": "function",
        "description": "Gets all windows.",
        "async": "callback",
        "parameters": [
          {
            "type": "object",
            "name": "getInfo",
            "optional": true,
            "description": "",
            "properties": {
              "populate": {
                "type": "boolean",
                "optional": true,
                "description": "If true, each $(ref:windows.Window) object will have a <var>tabs</var> property that contains a list of the $(ref:tabs.Tab) objects for that window. The <code>Tab</code> objects only contain the <code>url</code>, <code>title</code> and <code>favIconUrl</code> properties if the extension's manifest file includes the <code>\"tabs\"</code> permission."
              },
              "windowTypes": {
                "type": "array",
                "items": { "$ref": "WindowType" },
                "optional": true,
                "description": "If set, the $(ref:windows.Window) returned will be filtered based on its type. If unset the default filter is set to <code>['app', 'normal', 'panel', 'popup']</code>, with <code>'app'</code> and <code>'panel'</code> window types limited to the extension's own windows."
              }
            }
          },
          {
            "type": "function",
            "name": "callback",
            "parameters": [
              {
                "name": "windows",
                "type": "array",
                "items": { "$ref": "Window" }
              }
            ]
          }
        ]
      },
      {
        "name": "create",
        "type": "function",
        "description": "Creates (opens) a new browser with any optional sizing, position or default URL provided.",
        "async": "callback",
        "parameters": [
          {
            "type": "object",
            "name": "createData",
            "properties": {
              "url": {
                "description": "A URL or array of URLs to open as tabs in the window. Fully-qualified URLs must include a scheme (i.e. 'http://www.google.com', not 'www.google.com'). Relative URLs will be relative to the current page within the extension. Defaults to the New Tab Page.",
                "optional": true,
                "choices": [
                  { "type": "string" },
                  {
                    "type": "array",
                    "items": { "type": "string" }
                  }
                ]
              },
              "tabId": {
                "type": "integer",
                "minimum": 0,
                "optional": true,
                "description": "The id of the tab for which you want to adopt to the new window."
              },
              "left": {
                "type": "integer",
                "optional": true,
                "description": "The number of pixels to position the new window from the left edge of the screen. If not specified, the new window is offset naturally from the last focused window. This value is ignored for panels."
              },
              "top": {
                "type": "integer",
                "optional": true,
                "description": "The number of pixels to position the new window from the top edge of the screen. If not specified, the new window is offset naturally from the last focused window. This value is ignored for panels."
              },
              "width": {
                "type": "integer",
                "minimum": 0,
                "optional": true,
                "description": "The width in pixels of the new window, including the frame. If not specified defaults to a natural width."
              },
              "height": {
                "type": "integer",
                "minimum": 0,
                "optional": true,
                "description": "The height in pixels of the new window, including the frame. If not specified defaults to a natural height."
              },
              "focused": {
                "unsupported": true,
                "type": "boolean",
                "optional": true,
                "description": "If true, opens an active window. If false, opens an inactive window."
              },
              "incognito": {
                "type": "boolean",
                "optional": true,
                "description": "Whether the new window should be an incognito window."
              },
              "type": {
                "$ref": "CreateType",
                "optional": true,
                "description": "Specifies what type of browser window to create. The 'panel' and 'detached_panel' types create a popup unless the '--enable-panels' flag is set."
              },
              "state": {
                "$ref": "WindowState",
                "optional": true,
                "description": "The initial state of the window. The 'minimized', 'maximized' and 'fullscreen' states cannot be combined with 'left', 'top', 'width' or 'height'."
              }
            },
            "optional": true
          },
          {
            "type": "function",
            "name": "callback",
            "optional": true,
            "parameters": [
              {
                "name": "window",
                "$ref": "Window",
                "description": "Contains details about the created window.",
                "optional": true
              }
            ]
          }
        ]
      },
      {
        "name": "update",
        "type": "function",
        "description": "Updates the properties of a window. Specify only the properties that you want to change; unspecified properties will be left unchanged.",
        "async": "callback",
        "parameters": [
          {
            "type": "integer",
            "name": "windowId",
            "minimum": -2
          },
          {
            "type": "object",
            "name": "updateInfo",
            "properties": {
              "left": {
                "type": "integer",
                "optional": true,
                "description": "The offset from the left edge of the screen to move the window to in pixels. This value is ignored for panels."
              },
              "top": {
                "type": "integer",
                "optional": true,
                "description": "The offset from the top edge of the screen to move the window to in pixels. This value is ignored for panels."
              },
              "width": {
                "type": "integer",
                "minimum": 0,
                "optional": true,
                "description": "The width to resize the window to in pixels. This value is ignored for panels."
              },
              "height": {
                "type": "integer",
                "minimum": 0,
                "optional": true,
                "description": "The height to resize the window to in pixels. This value is ignored for panels."
              },
              "focused": {
                "type": "boolean",
                "optional": true,
                "description": "If true, brings the window to the front. If false, brings the next window in the z-order to the front."
              },
              "drawAttention": {
                "type": "boolean",
                "optional": true,
                "description": "If true, causes the window to be displayed in a manner that draws the user's attention to the window, without changing the focused window. The effect lasts until the user changes focus to the window. This option has no effect if the window already has focus. Set to false to cancel a previous draw attention request."
              },
              "state": {
                "$ref": "WindowState",
                "optional": true,
                "description": "The new state of the window. The 'minimized', 'maximized' and 'fullscreen' states cannot be combined with 'left', 'top', 'width' or 'height'."
              }
            }
          },
          {
            "type": "function",
            "name": "callback",
            "optional": true,
            "parameters": [
              {
                "name": "window",
                "$ref": "Window"
              }
            ]
          }
        ]
      },
      {
        "name": "remove",
        "type": "function",
        "description": "Removes (closes) a window, and all the tabs inside it.",
        "async": "callback",
        "parameters": [
          {
            "type": "integer",
            "name": "windowId",
            "minimum": 0
          },
          {
            "type": "function",
            "name": "callback",
            "optional": true,
            "parameters": []
          }
        ]
      }
    ],
    "events": [
      {
        "name": "onCreated",
        "type": "function",
        "description": "Fired when a window is created.",
        "filters": [
          {
            "name": "windowTypes",
            "type": "array",
            "items": { "$ref": "WindowType" },
            "description": "Conditions that the window's type being created must satisfy. By default it will satisfy <code>['app', 'normal', 'panel', 'popup']</code>, with <code>'app'</code> and <code>'panel'</code> window types limited to the extension's own windows."
          }
        ],
        "parameters": [
          {
            "$ref": "Window",
            "name": "window",
            "description": "Details of the window that was created."
          }
        ]
      },
      {
        "name": "onRemoved",
        "type": "function",
        "description": "Fired when a window is removed (closed).",
        "filters": [
          {
            "name": "windowTypes",
            "type": "array",
            "items": { "$ref": "WindowType" },
            "description": "Conditions that the window's type being removed must satisfy. By default it will satisfy <code>['app', 'normal', 'panel', 'popup']</code>, with <code>'app'</code> and <code>'panel'</code> window types limited to the extension's own windows."
          }
        ],
        "parameters": [
          {
            "type": "integer",
            "name": "windowId",
            "minimum": 0,
            "description": "ID of the removed window."
          }
        ]
      },
      {
        "name": "onFocusChanged",
        "type": "function",
        "description": "Fired when the currently focused window changes. Will be $(ref:windows.WINDOW_ID_NONE) if all browser windows have lost focus. Note: On some Linux window managers, WINDOW_ID_NONE will always be sent immediately preceding a switch from one browser window to another.",
        "filters": [
          {
            "name": "windowTypes",
            "type": "array",
            "items": { "$ref": "WindowType" },
            "description": "Conditions that the window's type being removed must satisfy. By default it will satisfy <code>['app', 'normal', 'panel', 'popup']</code>, with <code>'app'</code> and <code>'panel'</code> window types limited to the extension's own windows."
          }
        ],
        "parameters": [
          {
            "type": "integer",
            "name": "windowId",
            "minimum": -1,
            "description": "ID of the newly focused window."
          }
        ]
      }
    ]
  }
]
