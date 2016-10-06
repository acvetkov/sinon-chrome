[
  {
    "types": [
      {
        "id": "Alarm",
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "scheduledTime": {
            "type": "number"
          },
          "periodInMinutes": {
            "type": "number",
            "nullable": true
          }
        }
      },
      {
        "id": "AlarmCreateInfo",
        "type": "object",
        "properties": {
          "when": {
            "type": "number",
            "nullable": true
          },
          "delayInMinutes": {
            "type": "number",
            "nullable": true
          },
          "periodInMinutes": {
            "type": "number",
            "nullable": true
          }
        }
      }
    ],
    "functions": [
      {
        "name": "create",
        "type": "function",
        "parameters": [
          {
            "type": "string",
            "optional": true,
            "name": "name"
          },
          {
            "$ref": "AlarmCreateInfo",
            "optional": false,
            "name": "alarmInfo"
          }
        ],
        "static": true
      },
      {
        "name": "get",
        "type": "function",
        "parameters": [
          {
            "type": "string",
            "optional": true,
            "name": "name"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "$ref": "Alarm",
                "optional": true,
                "name": "alarm"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "getAll",
        "type": "function",
        "parameters": [
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "array",
                "items": {
                  "$ref": "Alarm"
                },
                "optional": false,
                "name": "alarms"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "clear",
        "type": "function",
        "parameters": [
          {
            "type": "string",
            "optional": true,
            "name": "name"
          },
          {
            "optional": true,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "boolean",
                "optional": false,
                "name": "wasCleared"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "clearAll",
        "type": "function",
        "parameters": [
          {
            "optional": true,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "boolean",
                "optional": false,
                "name": "wasCleared"
              }
            ]
          }
        ],
        "static": true
      }
    ],
    "events": [
      {
        "name": "onAlarm",
        "type": "function",
        "parameters": [
          {
            "$ref": "Alarm",
            "optional": false,
            "name": "alarm"
          }
        ]
      }
    ],
    "namespace": "alarms",
    "dependencies": [
      "permission:alarms"
    ]
  },
  {
    "types": [
      {
        "id": "LaunchItem",
        "type": "object",
        "properties": {
          "entry": {
            "type": "object"
          },
          "type": {
            "type": "string",
            "nullable": true
          }
        }
      },
      {
        "id": "LaunchSource",
        "type": "string",
        "enum": [
          "untracked",
          "app_launcher",
          "new_tab_page",
          "reload",
          "restart",
          "load_and_launch",
          "command_line",
          "file_handler",
          "url_handler",
          "system_tray",
          "about_page",
          "keyboard",
          "extensions_page",
          "management_api",
          "ephemeral_app",
          "background",
          "kiosk",
          "chrome_internal",
          "test",
          "installed_notification"
        ]
      },
      {
        "id": "ActionType",
        "type": "string",
        "enum": [
          "new_note"
        ]
      },
      {
        "id": "PlayStoreStatus",
        "type": "string",
        "enum": [
          "enabled",
          "available",
          "unknown"
        ]
      },
      {
        "id": "ActionData",
        "type": "object",
        "properties": {
          "actionType": {
            "$ref": "ActionType"
          }
        }
      },
      {
        "id": "LaunchData",
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "nullable": true
          },
          "items": {
            "type": "array",
            "items": {
              "$ref": "LaunchItem"
            },
            "nullable": true
          },
          "url": {
            "type": "string",
            "nullable": true
          },
          "referrerUrl": {
            "type": "string",
            "nullable": true
          },
          "isKioskSession": {
            "type": "boolean",
            "nullable": true
          },
          "isPublicSession": {
            "type": "boolean",
            "nullable": true
          },
          "source": {
            "$ref": "LaunchSource",
            "nullable": true
          },
          "actionData": {
            "$ref": "ActionData",
            "nullable": true
          },
          "playStoreStatus": {
            "$ref": "PlayStoreStatus",
            "nullable": true
          }
        }
      }
    ],
    "events": [
      {
        "name": "onEmbedRequested",
        "type": "function",
        "parameters": [
          {
            "$ref": "EmbedRequest",
            "optional": false,
            "name": "request"
          }
        ]
      },
      {
        "name": "onLaunched",
        "type": "function",
        "parameters": [
          {
            "$ref": "LaunchData",
            "optional": true,
            "name": "launchData"
          }
        ]
      },
      {
        "name": "onRestarted",
        "type": "function"
      }
    ],
    "namespace": "app.runtime"
  },
  {
    "types": [
      {
        "id": "ContentBounds",
        "type": "object",
        "properties": {
          "left": {
            "type": "integer",
            "nullable": true
          },
          "top": {
            "type": "integer",
            "nullable": true
          },
          "width": {
            "type": "integer",
            "nullable": true
          },
          "height": {
            "type": "integer",
            "nullable": true
          }
        }
      },
      {
        "id": "BoundsSpecification",
        "type": "object",
        "properties": {
          "left": {
            "type": "integer",
            "nullable": true
          },
          "top": {
            "type": "integer",
            "nullable": true
          },
          "width": {
            "type": "integer",
            "nullable": true
          },
          "height": {
            "type": "integer",
            "nullable": true
          },
          "minWidth": {
            "type": "integer",
            "nullable": true
          },
          "minHeight": {
            "type": "integer",
            "nullable": true
          },
          "maxWidth": {
            "type": "integer",
            "nullable": true
          },
          "maxHeight": {
            "type": "integer",
            "nullable": true
          }
        }
      },
      {
        "id": "FrameOptions",
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "nullable": true
          },
          "color": {
            "type": "string",
            "nullable": true
          },
          "activeColor": {
            "type": "string",
            "nullable": true
          },
          "inactiveColor": {
            "type": "string",
            "nullable": true
          }
        }
      },
      {
        "id": "State",
        "type": "string",
        "enum": [
          "normal",
          "fullscreen",
          "maximized",
          "minimized"
        ]
      },
      {
        "id": "WindowType",
        "type": "string",
        "enum": [
          "shell",
          "panel"
        ]
      },
      {
        "id": "CreateWindowOptions",
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "nullable": true
          },
          "innerBounds": {
            "$ref": "BoundsSpecification",
            "nullable": true
          },
          "outerBounds": {
            "$ref": "BoundsSpecification",
            "nullable": true
          },
          "defaultWidth": {
            "type": "integer",
            "nullable": true
          },
          "defaultHeight": {
            "type": "integer",
            "nullable": true
          },
          "defaultLeft": {
            "type": "integer",
            "nullable": true
          },
          "defaultTop": {
            "type": "integer",
            "nullable": true
          },
          "width": {
            "type": "integer",
            "nullable": true
          },
          "height": {
            "type": "integer",
            "nullable": true
          },
          "left": {
            "type": "integer",
            "nullable": true
          },
          "top": {
            "type": "integer",
            "nullable": true
          },
          "minWidth": {
            "type": "integer",
            "nullable": true
          },
          "minHeight": {
            "type": "integer",
            "nullable": true
          },
          "maxWidth": {
            "type": "integer",
            "nullable": true
          },
          "maxHeight": {
            "type": "integer",
            "nullable": true
          },
          "type": {
            "$ref": "WindowType",
            "nullable": true
          },
          "ime": {
            "type": "boolean",
            "nullable": true
          },
          "showInShelf": {
            "type": "boolean",
            "nullable": true
          },
          "icon": {
            "type": "string",
            "nullable": true
          },
          "frame": {
            "$ref": [
              {
                "sequence": false,
                "generic": null,
                "nullable": false,
                "array": false,
                "union": false,
                "idlType": "DOMString"
              },
              {
                "sequence": false,
                "generic": null,
                "nullable": false,
                "array": false,
                "union": false,
                "idlType": "FrameOptions"
              }
            ],
            "nullable": true
          },
          "bounds": {
            "$ref": "ContentBounds",
            "nullable": true
          },
          "alphaEnabled": {
            "type": "boolean",
            "nullable": true
          },
          "state": {
            "$ref": "State",
            "nullable": true
          },
          "hidden": {
            "type": "boolean",
            "nullable": true
          },
          "resizable": {
            "type": "boolean",
            "nullable": true
          },
          "singleton": {
            "type": "boolean",
            "nullable": true
          },
          "alwaysOnTop": {
            "type": "boolean",
            "nullable": true
          },
          "focused": {
            "type": "boolean",
            "nullable": true
          },
          "visibleOnAllWorkspaces": {
            "type": "boolean",
            "nullable": true
          }
        }
      }
    ],
    "functions": [
      {
        "name": "create",
        "type": "function",
        "parameters": [
          {
            "type": "string",
            "optional": false,
            "name": "url"
          },
          {
            "$ref": "CreateWindowOptions",
            "optional": true,
            "name": "options"
          },
          {
            "optional": true,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "object",
                "optional": false,
                "name": "createdWindow"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "current",
        "type": "function",
        "static": true
      },
      {
        "name": "initializeAppWindow",
        "type": "function",
        "parameters": [
          {
            "type": "object",
            "optional": false,
            "name": "state"
          }
        ],
        "static": true
      },
      {
        "name": "getAll",
        "type": "function",
        "static": true
      },
      {
        "name": "get",
        "type": "function",
        "parameters": [
          {
            "type": "string",
            "optional": false,
            "name": "id"
          }
        ],
        "static": true
      },
      {
        "name": "canSetVisibleOnAllWorkspaces",
        "type": "function",
        "static": true
      }
    ],
    "events": [
      {
        "name": "onBoundsChanged",
        "type": "function"
      },
      {
        "name": "onClosed",
        "type": "function"
      },
      {
        "name": "onFullscreened",
        "type": "function"
      },
      {
        "name": "onMaximized",
        "type": "function"
      },
      {
        "name": "onMinimized",
        "type": "function"
      },
      {
        "name": "onRestored",
        "type": "function"
      },
      {
        "name": "onAlphaEnabledChanged",
        "type": "function"
      },
      {
        "name": "onWindowFirstShown",
        "type": "function"
      }
    ],
    "namespace": "app.window"
  },
  {
    "types": [
      {
        "id": "VendorIdSource",
        "type": "string",
        "enum": [
          "bluetooth",
          "usb"
        ]
      },
      {
        "id": "AdapterState",
        "type": "object",
        "properties": {
          "address": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "powered": {
            "type": "boolean"
          },
          "available": {
            "type": "boolean"
          },
          "discovering": {
            "type": "boolean"
          }
        }
      },
      {
        "id": "Device",
        "type": "object",
        "properties": {
          "address": {
            "type": "string"
          },
          "name": {
            "type": "string",
            "nullable": true
          },
          "deviceClass": {
            "type": "integer",
            "nullable": true
          },
          "vendorIdSource": {
            "$ref": "VendorIdSource",
            "nullable": true
          },
          "vendorId": {
            "type": "integer",
            "nullable": true
          },
          "productId": {
            "type": "integer",
            "nullable": true
          },
          "deviceId": {
            "type": "integer",
            "nullable": true
          },
          "type": {
            "$ref": "DeviceType",
            "nullable": true
          },
          "paired": {
            "type": "boolean",
            "nullable": true
          },
          "connected": {
            "type": "boolean",
            "nullable": true
          },
          "connecting": {
            "type": "boolean",
            "nullable": true
          },
          "connectable": {
            "type": "boolean",
            "nullable": true
          },
          "uuids": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "nullable": true
          },
          "inquiryRssi": {
            "type": "integer",
            "nullable": true
          },
          "inquiryTxPower": {
            "type": "integer",
            "nullable": true
          }
        }
      }
    ],
    "functions": [
      {
        "name": "getAdapterState",
        "type": "function",
        "parameters": [
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "$ref": "AdapterState",
                "optional": false,
                "name": "adapterInfo"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "getDevice",
        "type": "function",
        "parameters": [
          {
            "type": "string",
            "optional": false,
            "name": "deviceAddress"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "$ref": "Device",
                "optional": false,
                "name": "deviceInfo"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "getDevices",
        "type": "function",
        "parameters": [
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "array",
                "items": {
                  "$ref": "Device"
                },
                "optional": false,
                "name": "deviceInfos"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "startDiscovery",
        "type": "function",
        "parameters": [
          {
            "optional": true,
            "name": "callback",
            "type": "function",
            "parameters": []
          }
        ],
        "static": true
      },
      {
        "name": "stopDiscovery",
        "type": "function",
        "parameters": [
          {
            "optional": true,
            "name": "callback",
            "type": "function",
            "parameters": []
          }
        ],
        "static": true
      }
    ],
    "events": [
      {
        "name": "onAdapterStateChanged",
        "type": "function",
        "parameters": [
          {
            "$ref": "AdapterState",
            "optional": false,
            "name": "state"
          }
        ]
      },
      {
        "name": "onDeviceAdded",
        "type": "function",
        "parameters": [
          {
            "$ref": "Device",
            "optional": false,
            "name": "device"
          }
        ]
      },
      {
        "name": "onDeviceChanged",
        "type": "function",
        "parameters": [
          {
            "$ref": "Device",
            "optional": false,
            "name": "device"
          }
        ]
      },
      {
        "name": "onDeviceRemoved",
        "type": "function",
        "parameters": [
          {
            "$ref": "Device",
            "optional": false,
            "name": "device"
          }
        ]
      }
    ],
    "namespace": "bluetooth"
  },
  {
    "types": [
      {
        "id": "SocketProperties",
        "type": "object",
        "properties": {
          "persistent": {
            "type": "boolean",
            "nullable": true
          },
          "name": {
            "type": "string",
            "nullable": true
          },
          "bufferSize": {
            "type": "integer",
            "nullable": true
          }
        }
      },
      {
        "id": "CreateInfo",
        "type": "object",
        "properties": {
          "socketId": {
            "type": "integer"
          }
        }
      },
      {
        "id": "ListenOptions",
        "type": "object",
        "properties": {
          "channel": {
            "type": "integer",
            "nullable": true
          },
          "psm": {
            "type": "integer",
            "nullable": true
          },
          "backlog": {
            "type": "integer",
            "nullable": true
          }
        }
      },
      {
        "id": "SocketInfo",
        "type": "object",
        "properties": {
          "socketId": {
            "type": "integer"
          },
          "persistent": {
            "type": "boolean"
          },
          "name": {
            "type": "string",
            "nullable": true
          },
          "bufferSize": {
            "type": "integer",
            "nullable": true
          },
          "paused": {
            "type": "boolean"
          },
          "connected": {
            "type": "boolean"
          },
          "address": {
            "type": "string",
            "nullable": true
          },
          "uuid": {
            "type": "string",
            "nullable": true
          }
        }
      },
      {
        "id": "AcceptInfo",
        "type": "object",
        "properties": {
          "socketId": {
            "type": "integer"
          },
          "clientSocketId": {
            "type": "integer"
          }
        }
      },
      {
        "id": "AcceptError",
        "type": "string",
        "enum": [
          "system_error",
          "not_listening"
        ]
      },
      {
        "id": "AcceptErrorInfo",
        "type": "object",
        "properties": {
          "socketId": {
            "type": "integer"
          },
          "errorMessage": {
            "type": "string"
          },
          "error": {
            "$ref": "AcceptError"
          }
        }
      },
      {
        "id": "ReceiveInfo",
        "type": "object",
        "properties": {
          "socketId": {
            "type": "integer"
          },
          "data": {
            "$ref": "ArrayBuffer"
          }
        }
      },
      {
        "id": "ReceiveError",
        "type": "string",
        "enum": [
          "disconnected",
          "system_error",
          "not_connected"
        ]
      },
      {
        "id": "ReceiveErrorInfo",
        "type": "object",
        "properties": {
          "socketId": {
            "type": "integer"
          },
          "errorMessage": {
            "type": "string"
          },
          "error": {
            "$ref": "ReceiveError"
          }
        }
      }
    ],
    "functions": [
      {
        "name": "create",
        "type": "function",
        "parameters": [
          {
            "$ref": "SocketProperties",
            "optional": true,
            "name": "properties"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "$ref": "CreateInfo",
                "optional": false,
                "name": "createInfo"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "update",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "socketId"
          },
          {
            "$ref": "SocketProperties",
            "optional": false,
            "name": "properties"
          },
          {
            "optional": true,
            "name": "callback",
            "type": "function",
            "parameters": []
          }
        ],
        "static": true
      },
      {
        "name": "setPaused",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "socketId"
          },
          {
            "type": "boolean",
            "optional": false,
            "name": "paused"
          },
          {
            "optional": true,
            "name": "callback",
            "type": "function",
            "parameters": []
          }
        ],
        "static": true
      },
      {
        "name": "listenUsingRfcomm",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "socketId"
          },
          {
            "type": "string",
            "optional": false,
            "name": "uuid"
          },
          {
            "$ref": "ListenOptions",
            "optional": true,
            "name": "options"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": []
          }
        ],
        "static": true
      },
      {
        "name": "listenUsingL2cap",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "socketId"
          },
          {
            "type": "string",
            "optional": false,
            "name": "uuid"
          },
          {
            "$ref": "ListenOptions",
            "optional": true,
            "name": "options"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": []
          }
        ],
        "static": true
      },
      {
        "name": "connect",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "socketId"
          },
          {
            "type": "string",
            "optional": false,
            "name": "address"
          },
          {
            "type": "string",
            "optional": false,
            "name": "uuid"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": []
          }
        ],
        "static": true
      },
      {
        "name": "disconnect",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "socketId"
          },
          {
            "optional": true,
            "name": "callback",
            "type": "function",
            "parameters": []
          }
        ],
        "static": true
      },
      {
        "name": "close",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "socketId"
          },
          {
            "optional": true,
            "name": "callback",
            "type": "function",
            "parameters": []
          }
        ],
        "static": true
      },
      {
        "name": "send",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "socketId"
          },
          {
            "$ref": "ArrayBuffer",
            "optional": false,
            "name": "data"
          },
          {
            "optional": true,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "integer",
                "optional": false,
                "name": "bytesSent"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "getInfo",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "socketId"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "$ref": "SocketInfo",
                "optional": false,
                "name": "socketInfo"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "getSockets",
        "type": "function",
        "parameters": [
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "array",
                "items": {
                  "$ref": "SocketInfo"
                },
                "optional": false,
                "name": "sockets"
              }
            ]
          }
        ],
        "static": true
      }
    ],
    "events": [
      {
        "name": "onAccept",
        "type": "function",
        "parameters": [
          {
            "$ref": "AcceptInfo",
            "optional": false,
            "name": "info"
          }
        ]
      },
      {
        "name": "onAcceptError",
        "type": "function",
        "parameters": [
          {
            "$ref": "AcceptErrorInfo",
            "optional": false,
            "name": "info"
          }
        ]
      },
      {
        "name": "onReceive",
        "type": "function",
        "parameters": [
          {
            "$ref": "ReceiveInfo",
            "optional": false,
            "name": "info"
          }
        ]
      },
      {
        "name": "onReceiveError",
        "type": "function",
        "parameters": [
          {
            "$ref": "ReceiveErrorInfo",
            "optional": false,
            "name": "info"
          }
        ]
      }
    ],
    "namespace": "bluetoothSocket",
    "dependencies": [
      "manifest:bluetooth"
    ]
  },
  {
    "types": [
      {
        "id": "OpenTabOptions",
        "type": "object",
        "properties": {
          "url": {
            "type": "string"
          }
        }
      }
    ],
    "functions": [
      {
        "name": "openTab",
        "type": "function",
        "parameters": [
          {
            "$ref": "OpenTabOptions",
            "optional": false,
            "name": "options"
          },
          {
            "optional": true,
            "name": "callback",
            "type": "function",
            "parameters": []
          }
        ],
        "static": true
      }
    ],
    "namespace": "browser",
    "dependencies": [
      "permission:browser"
    ]
  },
  {
    "namespace": "commands",
    "description": "Use the commands API to add keyboard shortcuts that trigger actions in your extension, for example, an action to open the browser action or send a command to the extension.",
    "types": [
      {
        "id": "Command",
        "type": "object",
        "properties": {
          "name": {
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
    ],
    "dependencies": [
      "manifest:commands"
    ]
  },
  {
    "namespace": "contextMenus",
    "description": "Use the <code>chrome.contextMenus</code> API to add items to Google Chrome's context menu. You can choose what types of objects your context menu additions apply to, such as images, hyperlinks, and pages.",
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
        "enum": [
          "all",
          "page",
          "frame",
          "selection",
          "link",
          "editable",
          "image",
          "video",
          "audio",
          "launcher",
          "browser_action",
          "page_action"
        ],
        "description": "The different contexts a menu can appear in. Specifying 'all' is equivalent to the combination of all other contexts except for 'launcher'. The 'launcher' context is only supported by apps and is used to add menu items to the context menu that appears when clicking on the app icon in the launcher/taskbar/dock/etc. Different platforms might put limitations on what is actually supported in a launcher context menu."
      },
      {
        "id": "ItemType",
        "type": "string",
        "enum": [
          "normal",
          "checkbox",
          "radio",
          "separator"
        ],
        "description": "The type of menu item."
      }
    ],
    "functions": [
      {
        "name": "create",
        "type": "function",
        "description": "Creates a new context menu item. Note that if an error occurs during creation, you may not find out until the creation callback fires (the details will be in chrome.runtime.lastError).",
        "returns": {
          "choices": [
            {
              "type": "integer"
            },
            {
              "type": "string"
            }
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
                "description": "A function that will be called back when the menu item is clicked. Event pages cannot use this; instead, they should register a listener for chrome.contextMenus.onClicked.",
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
                  {
                    "type": "integer"
                  },
                  {
                    "type": "string"
                  }
                ],
                "optional": true,
                "description": "The ID of a parent menu item; this makes the item a child of a previously added item."
              },
              "documentUrlPatterns": {
                "type": "array",
                "items": {
                  "type": "string"
                },
                "optional": true,
                "description": "Lets you restrict the item to apply only to documents whose URL matches one of the given patterns. (This applies to frames as well.) For details on the format of a pattern, see <a href='match_patterns'>Match Patterns</a>."
              },
              "targetUrlPatterns": {
                "type": "array",
                "items": {
                  "type": "string"
                },
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
            "description": "Called when the item has been created in the browser. If there were any problems creating the item, details will be available in chrome.runtime.lastError.",
            "parameters": []
          }
        ]
      },
      {
        "name": "update",
        "type": "function",
        "description": "Updates a previously created context menu item.",
        "parameters": [
          {
            "choices": [
              {
                "type": "integer"
              },
              {
                "type": "string"
              }
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
                  {
                    "type": "integer"
                  },
                  {
                    "type": "string"
                  }
                ],
                "optional": true,
                "description": "Note: You cannot change an item to be a child of one of its own descendants."
              },
              "documentUrlPatterns": {
                "type": "array",
                "items": {
                  "type": "string"
                },
                "optional": true
              },
              "targetUrlPatterns": {
                "type": "array",
                "items": {
                  "type": "string"
                },
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
        "parameters": [
          {
            "choices": [
              {
                "type": "integer"
              },
              {
                "type": "string"
              }
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
        "$ref": "contextMenusInternal.onClicked"
      }
    ],
    "dependencies": [
      "permission:contextMenus"
    ]
  },
  {
    "namespace": "events",
    "description": "The <code>chrome.events</code> namespace contains common types used by APIs dispatching events to notify you when something interesting happens.",
    "compiler_options": {
      "implemented_in": "extensions/browser/api/declarative/declarative_api.h"
    },
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
            "items": {
              "type": "string"
            },
            "optional": true,
            "description": "Tags can be used to annotate rules and perform operations on sets of rules."
          },
          "conditions": {
            "type": "array",
            "items": {
              "type": "any"
            },
            "description": "List of conditions that can trigger the actions."
          },
          "actions": {
            "type": "array",
            "items": {
              "type": "any"
            },
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
        "additionalProperties": {
          "type": "any"
        },
        "functions": [
          {
            "name": "addListener",
            "nocompile": true,
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
            "nocompile": true,
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
            "nocompile": true,
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
            "nocompile": true,
            "type": "function",
            "parameters": [],
            "returns": {
              "type": "boolean",
              "description": "True if any event listeners are registered to the event."
            }
          },
          {
            "name": "addRules",
            "type": "function",
            "description": "Registers rules to handle events.",
            "parameters": [
              {
                "nodoc": "true",
                "name": "eventName",
                "type": "string",
                "description": "Name of the event this function affects."
              },
              {
                "name": "webViewInstanceId",
                "type": "integer",
                "nodoc": true,
                "description": "If provided, this is an integer that uniquely identfies the <webview> associated with this function call."
              },
              {
                "name": "rules",
                "type": "array",
                "items": {
                  "$ref": "Rule"
                },
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
                    "items": {
                      "$ref": "Rule"
                    },
                    "description": "Rules that were registered, the optional parameters are filled with values."
                  }
                ],
                "description": "Called with registered rules."
              }
            ]
          },
          {
            "name": "getRules",
            "type": "function",
            "description": "Returns currently registered rules.",
            "parameters": [
              {
                "nodoc": "true",
                "name": "eventName",
                "type": "string",
                "description": "Name of the event this function affects."
              },
              {
                "name": "webViewInstanceId",
                "type": "integer",
                "nodoc": true,
                "description": "If provided, this is an integer that uniquely identfies the <webview> associated with this function call."
              },
              {
                "name": "ruleIdentifiers",
                "optional": true,
                "type": "array",
                "items": {
                  "type": "string"
                },
                "description": "If an array is passed, only rules with identifiers contained in this array are returned."
              },
              {
                "name": "callback",
                "type": "function",
                "parameters": [
                  {
                    "name": "rules",
                    "type": "array",
                    "items": {
                      "$ref": "Rule"
                    },
                    "description": "Rules that were registered, the optional parameters are filled with values."
                  }
                ],
                "description": "Called with registered rules."
              }
            ]
          },
          {
            "name": "removeRules",
            "type": "function",
            "description": "Unregisters currently registered rules.",
            "parameters": [
              {
                "nodoc": "true",
                "name": "eventName",
                "type": "string",
                "description": "Name of the event this function affects."
              },
              {
                "name": "webViewInstanceId",
                "type": "integer",
                "nodoc": true,
                "description": "If provided, this is an integer that uniquely identfies the <webview> associated with this function call."
              },
              {
                "name": "ruleIdentifiers",
                "optional": true,
                "type": "array",
                "items": {
                  "type": "string"
                },
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
        "nocompile": true,
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
            "items": {
              "type": "string"
            }
          },
          "ports": {
            "type": "array",
            "description": "Matches if the port of the URL is contained in any of the specified port lists. For example <code>[80, 443, [1000, 1200]]</code> matches all requests on port 80, 443 and in the range 1000-1200.",
            "optional": true,
            "items": {
              "choices": [
                {
                  "type": "integer",
                  "description": "A specific port."
                },
                {
                  "type": "array",
                  "items": {
                    "type": "integer"
                  },
                  "description": "A pair of integers identiying the start and end (both inclusive) of a port range."
                }
              ]
            }
          }
        }
      }
    ]
  },
  {
    "namespace": "extensionTypes",
    "description": "The <code>chrome.extensionTypes</code> API contains type declarations for Chrome extensions.",
    "types": [
      {
        "id": "ImageFormat",
        "type": "string",
        "enum": [
          "jpeg",
          "png"
        ],
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
        "enum": [
          "document_start",
          "document_end",
          "document_idle"
        ],
        "description": "The soonest that the JavaScript or CSS will be injected into the tab."
      },
      {
        "id": "InjectDetails",
        "type": "object",
        "description": "Details of the script or CSS to inject. Either the code or the file property must be set, but both may not be set at the same time.",
        "properties": {
          "code": {
            "type": "string",
            "optional": true,
            "description": "JavaScript or CSS code to inject.<br><br><b>Warning:</b><br>Be careful using the <code>code</code> parameter. Incorrect use of it may open your extension to <a href=\"https://en.wikipedia.org/wiki/Cross-site_scripting\">cross site scripting</a> attacks."
          },
          "file": {
            "type": "string",
            "optional": true,
            "description": "JavaScript or CSS file to inject."
          },
          "allFrames": {
            "type": "boolean",
            "optional": true,
            "description": "If allFrames is <code>true</code>, implies that the JavaScript or CSS should be injected into all frames of current page. By default, it's <code>false</code> and is only injected into the top frame. If <code>true</code> and <code>frameId</code> is set, then the code is inserted in the selected frame and all of its child frames."
          },
          "frameId": {
            "type": "integer",
            "optional": true,
            "minimum": 0,
            "description": "The <a href='webNavigation#frame_ids'>frame</a> where the script or CSS should be injected. Defaults to 0 (the top-level frame)."
          },
          "matchAboutBlank": {
            "type": "boolean",
            "optional": true,
            "description": "If matchAboutBlank is true, then the code is also injected in about:blank and about:srcdoc frames if your extension has access to its parent document. Code cannot be inserted in top-level about:-frames. By default it is <code>false</code>."
          },
          "runAt": {
            "$ref": "RunAt",
            "optional": true,
            "description": "The soonest that the JavaScript or CSS will be injected into the tab. Defaults to \"document_idle\"."
          }
        }
      }
    ]
  },
  {
    "types": [
      {
        "id": "AcceptOption",
        "type": "object",
        "properties": {
          "description": {
            "type": "string",
            "nullable": true
          },
          "mimeTypes": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "nullable": true
          },
          "extensions": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "nullable": true
          }
        }
      },
      {
        "id": "ChooseEntryType",
        "type": "string",
        "enum": [
          "openFile",
          "openWritableFile",
          "saveFile",
          "openDirectory"
        ]
      },
      {
        "id": "ChildChangeType",
        "type": "string",
        "enum": [
          "created",
          "removed",
          "changed"
        ]
      },
      {
        "id": "ChooseEntryOptions",
        "type": "object",
        "properties": {
          "type": {
            "$ref": "ChooseEntryType",
            "nullable": true
          },
          "suggestedName": {
            "type": "string",
            "nullable": true
          },
          "accepts": {
            "type": "array",
            "items": {
              "$ref": "AcceptOption"
            },
            "nullable": true
          },
          "acceptsAllTypes": {
            "type": "boolean",
            "nullable": true
          },
          "acceptsMultiple": {
            "type": "boolean",
            "nullable": true
          }
        }
      },
      {
        "id": "RequestFileSystemOptions",
        "type": "object",
        "properties": {
          "volumeId": {
            "type": "string"
          },
          "writable": {
            "type": "boolean",
            "nullable": true
          }
        }
      },
      {
        "id": "Volume",
        "type": "object",
        "properties": {
          "volumeId": {
            "type": "string"
          },
          "writable": {
            "type": "boolean"
          }
        }
      },
      {
        "id": "ChildChange",
        "type": "object",
        "properties": {
          "entry": {
            "type": "object"
          },
          "type": {
            "$ref": "ChildChangeType"
          }
        }
      },
      {
        "id": "VolumeListChangedEvent",
        "type": "object",
        "properties": {
          "volumes": {
            "type": "array",
            "items": {
              "$ref": "Volume"
            }
          }
        }
      },
      {
        "id": "EntryChangedEvent",
        "type": "object",
        "properties": {
          "target": {
            "type": "object"
          },
          "childChanges": {
            "type": "array",
            "items": {
              "$ref": "ChildChange"
            },
            "nullable": true
          }
        }
      },
      {
        "id": "EntryRemovedEvent",
        "type": "object",
        "properties": {
          "target": {
            "type": "object"
          }
        }
      }
    ],
    "functions": [
      {
        "name": "getDisplayPath",
        "type": "function",
        "parameters": [
          {
            "type": "object",
            "optional": false,
            "name": "entry"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "string",
                "optional": false,
                "name": "displayPath"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "getWritableEntry",
        "type": "function",
        "parameters": [
          {
            "type": "object",
            "optional": false,
            "name": "entry"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "object",
                "optional": false,
                "name": "entry"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "isWritableEntry",
        "type": "function",
        "parameters": [
          {
            "type": "object",
            "optional": false,
            "name": "entry"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "boolean",
                "optional": false,
                "name": "isWritable"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "chooseEntry",
        "type": "function",
        "parameters": [
          {
            "$ref": "ChooseEntryOptions",
            "optional": true,
            "name": "options"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "object",
                "optional": true,
                "name": "entry"
              },
              {
                "type": "array",
                "items": {
                  "type": "object"
                },
                "optional": true,
                "name": "fileEntries"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "restoreEntry",
        "type": "function",
        "parameters": [
          {
            "type": "string",
            "optional": false,
            "name": "id"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "object",
                "optional": false,
                "name": "entry"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "isRestorable",
        "type": "function",
        "parameters": [
          {
            "type": "string",
            "optional": false,
            "name": "id"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "boolean",
                "optional": false,
                "name": "isRestorable"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "retainEntry",
        "type": "function",
        "parameters": [
          {
            "type": "object",
            "optional": false,
            "name": "entry"
          }
        ],
        "static": true
      },
      {
        "name": "requestFileSystem",
        "type": "function",
        "parameters": [
          {
            "$ref": "RequestFileSystemOptions",
            "optional": false,
            "name": "options"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "object",
                "optional": true,
                "name": "fileSystem"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "getVolumeList",
        "type": "function",
        "parameters": [
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "array",
                "items": {
                  "$ref": "Volume"
                },
                "optional": true,
                "name": "volumes"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "observeDirectory",
        "type": "function",
        "parameters": [
          {
            "type": "object",
            "optional": false,
            "name": "entry"
          },
          {
            "type": "boolean",
            "optional": true,
            "name": "recursive"
          }
        ],
        "static": true
      },
      {
        "name": "unobserveEntry",
        "type": "function",
        "parameters": [
          {
            "type": "object",
            "optional": false,
            "name": "entry"
          }
        ],
        "static": true
      },
      {
        "name": "getObservedEntries",
        "type": "function",
        "parameters": [
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "array",
                "items": {
                  "type": "object"
                },
                "optional": false,
                "name": "entries"
              }
            ]
          }
        ],
        "static": true
      }
    ],
    "events": [
      {
        "name": "onVolumeListChanged",
        "type": "function",
        "parameters": [
          {
            "$ref": "VolumeListChangedEvent",
            "optional": false,
            "name": "event"
          }
        ]
      },
      {
        "name": "onEntryChanged",
        "type": "function",
        "parameters": [
          {
            "$ref": "EntryChangedEvent",
            "optional": false,
            "name": "event"
          }
        ]
      },
      {
        "name": "onEntryRemoved",
        "type": "function",
        "parameters": [
          {
            "$ref": "EntryRemovedEvent",
            "optional": false,
            "name": "event"
          }
        ]
      }
    ],
    "namespace": "fileSystem",
    "dependencies": [
      "permission:fileSystem"
    ]
  },
  {
    "namespace": "gcm",
    "description": "Use <code>chrome.gcm</code> to enable apps and extensions to send and receive messages through the <a href='http://developer.android.com/google/gcm/'>Google Cloud Messaging Service</a>.",
    "properties": {
      "MAX_MESSAGE_SIZE": {
        "value": 4096,
        "description": "The maximum size (in bytes) of all key/value pairs in a message."
      }
    },
    "functions": [
      {
        "name": "register",
        "type": "function",
        "description": "Registers the application with GCM. The registration ID will be returned by the <code>callback</code>. If <code>register</code> is called again with the same list of <code>senderIds</code>, the same registration ID will be returned.",
        "parameters": [
          {
            "name": "senderIds",
            "type": "array",
            "items": {
              "type": "string",
              "minLength": 1
            },
            "minItems": 1,
            "maxItems": 100,
            "description": "A list of server IDs that are allowed to send messages to the application. It should contain at least one and no more than 100 sender IDs."
          },
          {
            "name": "callback",
            "type": "function",
            "description": "Function called when registration completes. It should check $(ref:runtime.lastError) for error when <code>registrationId</code> is empty.",
            "parameters": [
              {
                "name": "registrationId",
                "type": "string",
                "description": "A registration ID assigned to the application by the GCM."
              }
            ]
          }
        ]
      },
      {
        "name": "unregister",
        "type": "function",
        "description": "Unregisters the application from GCM.",
        "parameters": [
          {
            "name": "callback",
            "type": "function",
            "description": "A function called after the unregistration completes. Unregistration was successful if $(ref:runtime.lastError) is not set.",
            "parameters": []
          }
        ]
      },
      {
        "name": "send",
        "type": "function",
        "description": "Sends a message according to its contents.",
        "parameters": [
          {
            "name": "message",
            "type": "object",
            "description": "A message to send to the other party via GCM.",
            "properties": {
              "destinationId": {
                "type": "string",
                "minLength": 1,
                "description": "The ID of the server to send the message to as assigned by <a href='https://code.google.com/apis/console'>Google API Console</a>."
              },
              "messageId": {
                "type": "string",
                "minLength": 1,
                "description": "The ID of the message. It must be unique for each message in scope of the applications. See the <a href='cloudMessaging#send_messages'>Cloud Messaging documentation</a> for advice for picking and handling an ID."
              },
              "timeToLive": {
                "type": "integer",
                "minimum": 0,
                "maximum": 86400,
                "optional": true,
                "description": "Time-to-live of the message in seconds. If it is not possible to send the message within that time, an onSendError event will be raised. A time-to-live of 0 indicates that the message should be sent immediately or fail if it's not possible. The maximum and a default value of time-to-live is 86400 seconds (1 day)."
              },
              "data": {
                "type": "object",
                "properties": {},
                "additionalProperties": {
                  "type": "string",
                  "minLength": 1
                },
                "description": "Message data to send to the server. Case-insensitive <code>goog.</code> and <code>google</code>, as well as case-sensitive <code>collapse_key</code> are disallowed as key prefixes. Sum of all key/value pairs should not exceed $(ref:gcm.MAX_MESSAGE_SIZE)."
              }
            }
          },
          {
            "name": "callback",
            "type": "function",
            "description": "A function called after the message is successfully queued for sending. $(ref:runtime.lastError) should be checked, to ensure a message was sent without problems.",
            "parameters": [
              {
                "name": "messageId",
                "type": "string",
                "description": "The ID of the message that the callback was issued for."
              }
            ]
          }
        ]
      }
    ],
    "events": [
      {
        "name": "onMessage",
        "type": "function",
        "description": "Fired when a message is received through GCM.",
        "parameters": [
          {
            "name": "message",
            "type": "object",
            "description": "A message received from another party via GCM.",
            "properties": {
              "data": {
                "type": "object",
                "properties": {},
                "additionalProperties": {
                  "type": "string"
                },
                "description": "The message data."
              },
              "from": {
                "type": "string",
                "optional": true,
                "description": "The sender who issued the message."
              },
              "collapseKey": {
                "type": "string",
                "optional": true,
                "description": "The collapse key of a message. See <a href='cloudMessaging#collapsible_messages'>Collapsible Messages</a> section of Cloud Messaging documentation for details."
              }
            }
          }
        ]
      },
      {
        "name": "onMessagesDeleted",
        "type": "function",
        "description": "Fired when a GCM server had to delete messages sent by an app server to the application. See <a href='cloudMessaging#messages_deleted_event'>Messages deleted event</a> section of Cloud Messaging documentation for details on handling this event."
      },
      {
        "name": "onSendError",
        "type": "function",
        "description": "Fired when it was not possible to send a message to the GCM server.",
        "parameters": [
          {
            "name": "error",
            "type": "object",
            "description": "An error that occured while trying to send the message either in Chrome or on the GCM server. Application can retry sending the message with a reasonable backoff and possibly longer time-to-live.",
            "properties": {
              "errorMessage": {
                "type": "string",
                "description": "The error message describing the problem."
              },
              "messageId": {
                "type": "string",
                "optional": true,
                "description": "The ID of the message with this error, if error is related to a specific message."
              },
              "details": {
                "type": "object",
                "properties": {},
                "additionalProperties": {
                  "type": "string"
                },
                "description": "Additional details related to the error, when available."
              }
            }
          }
        ]
      }
    ],
    "dependencies": [
      "permission:gcm"
    ]
  },
  {
    "types": [
      {
        "id": "HidCollectionInfo",
        "type": "object",
        "properties": {
          "usagePage": {
            "type": "integer"
          },
          "usage": {
            "type": "integer"
          },
          "reportIds": {
            "type": "array",
            "items": {
              "type": "integer"
            }
          }
        }
      },
      {
        "id": "HidDeviceInfo",
        "type": "object",
        "properties": {
          "deviceId": {
            "type": "integer"
          },
          "vendorId": {
            "type": "integer"
          },
          "productId": {
            "type": "integer"
          },
          "productName": {
            "type": "string"
          },
          "serialNumber": {
            "type": "string"
          },
          "collections": {
            "type": "array",
            "items": {
              "$ref": "HidCollectionInfo"
            }
          },
          "maxInputReportSize": {
            "type": "integer"
          },
          "maxOutputReportSize": {
            "type": "integer"
          },
          "maxFeatureReportSize": {
            "type": "integer"
          },
          "reportDescriptor": {
            "$ref": "ArrayBuffer"
          }
        }
      },
      {
        "id": "HidConnectInfo",
        "type": "object",
        "properties": {
          "connectionId": {
            "type": "integer"
          }
        }
      },
      {
        "id": "DeviceFilter",
        "type": "object",
        "properties": {
          "vendorId": {
            "type": "integer",
            "nullable": true
          },
          "productId": {
            "type": "integer",
            "nullable": true
          },
          "usagePage": {
            "type": "integer",
            "nullable": true
          },
          "usage": {
            "type": "integer",
            "nullable": true
          }
        }
      },
      {
        "id": "GetDevicesOptions",
        "type": "object",
        "properties": {
          "vendorId": {
            "type": "integer",
            "nullable": true
          },
          "productId": {
            "type": "integer",
            "nullable": true
          },
          "filters": {
            "type": "array",
            "items": {
              "$ref": "DeviceFilter"
            },
            "nullable": true
          }
        }
      },
      {
        "id": "DevicePromptOptions",
        "type": "object",
        "properties": {
          "multiple": {
            "type": "boolean",
            "nullable": true
          },
          "filters": {
            "type": "array",
            "items": {
              "$ref": "DeviceFilter"
            },
            "nullable": true
          }
        }
      }
    ],
    "functions": [
      {
        "name": "getDevices",
        "type": "function",
        "parameters": [
          {
            "$ref": "GetDevicesOptions",
            "optional": false,
            "name": "options"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "array",
                "items": {
                  "$ref": "HidDeviceInfo"
                },
                "optional": false,
                "name": "devices"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "getUserSelectedDevices",
        "type": "function",
        "parameters": [
          {
            "$ref": "DevicePromptOptions",
            "optional": true,
            "name": "options"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "array",
                "items": {
                  "$ref": "HidDeviceInfo"
                },
                "optional": false,
                "name": "devices"
              }
            ]
          }
        ],
        "static": true,
        "dependencies": [
          "permission:hid"
        ]
      },
      {
        "name": "connect",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "deviceId"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "$ref": "HidConnectInfo",
                "optional": false,
                "name": "connection"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "disconnect",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "connectionId"
          },
          {
            "optional": true,
            "name": "callback",
            "type": "function",
            "parameters": []
          }
        ],
        "static": true
      },
      {
        "name": "receive",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "connectionId"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "integer",
                "optional": false,
                "name": "reportId"
              },
              {
                "$ref": "ArrayBuffer",
                "optional": false,
                "name": "data"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "send",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "connectionId"
          },
          {
            "type": "integer",
            "optional": false,
            "name": "reportId"
          },
          {
            "$ref": "ArrayBuffer",
            "optional": false,
            "name": "data"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": []
          }
        ],
        "static": true
      },
      {
        "name": "receiveFeatureReport",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "connectionId"
          },
          {
            "type": "integer",
            "optional": false,
            "name": "reportId"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "$ref": "ArrayBuffer",
                "optional": false,
                "name": "data"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "sendFeatureReport",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "connectionId"
          },
          {
            "type": "integer",
            "optional": false,
            "name": "reportId"
          },
          {
            "$ref": "ArrayBuffer",
            "optional": false,
            "name": "data"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": []
          }
        ],
        "static": true
      }
    ],
    "events": [
      {
        "name": "onDeviceAdded",
        "type": "function",
        "parameters": [
          {
            "$ref": "HidDeviceInfo",
            "optional": false,
            "name": "device"
          }
        ]
      },
      {
        "name": "onDeviceRemoved",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "deviceId"
          }
        ]
      }
    ],
    "namespace": "hid",
    "dependencies": [
      "permission:hid"
    ]
  },
  {
    "namespace": "i18n",
    "description": "Use the <code>chrome.i18n</code> infrastructure to implement internationalization across your whole app or extension.",
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
        "parameters": [
          {
            "type": "function",
            "name": "callback",
            "parameters": [
              {
                "name": "languages",
                "type": "array",
                "items": {
                  "$ref": "LanguageCode"
                },
                "description": "Array of LanguageCode"
              }
            ]
          }
        ]
      },
      {
        "name": "getMessage",
        "nocompile": true,
        "type": "function",
        "description": "Gets the localized string for the specified message. If the message is missing, this method returns an empty string (''). If the format of the <code>getMessage()</code> call is wrong &mdash; for example, <em>messageName</em> is not a string or the <em>substitutions</em> array has more than 9 elements &mdash; this method returns <code>undefined</code>.",
        "parameters": [
          {
            "type": "string",
            "name": "messageName",
            "description": "The name of the message, as specified in the <a href='i18n-messages'><code>messages.json</code></a> file."
          },
          {
            "type": "any",
            "name": "substitutions",
            "optional": true,
            "description": "Up to 9 substitution strings, if the message requires any."
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
        "nocompile": true,
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
        "nocompile": true,
        "description": "Detects the language of the provided text using CLD.",
        "parameters": [
          {
            "type": "string",
            "name": "text",
            "minimum": 0,
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
                  "isReliable": {
                    "type": "boolean",
                    "description": "CLD detected language reliability"
                  },
                  "languages": {
                    "type": "array",
                    "description": "array of detectedLanguage",
                    "items": {
                      "type": "object",
                      "description": "DetectedLanguage object that holds detected ISO language code and its percentage in the input string",
                      "properties": {
                        "language": {
                          "$ref": "LanguageCode"
                        },
                        "percentage": {
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
    "events": [],
    "content_script": true
  },
  {
    "types": [
      {
        "id": "AccountInfo",
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          }
        }
      },
      {
        "id": "ProfileUserInfo",
        "type": "object",
        "properties": {
          "email": {
            "type": "string"
          },
          "id": {
            "type": "string"
          }
        }
      },
      {
        "id": "TokenDetails",
        "type": "object",
        "properties": {
          "interactive": {
            "type": "boolean",
            "nullable": true
          },
          "account": {
            "$ref": "AccountInfo",
            "nullable": true
          },
          "scopes": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "nullable": true
          }
        }
      },
      {
        "id": "InvalidTokenDetails",
        "type": "object",
        "properties": {
          "token": {
            "type": "string"
          }
        }
      },
      {
        "id": "WebAuthFlowDetails",
        "type": "object",
        "properties": {
          "url": {
            "type": "string"
          },
          "interactive": {
            "type": "boolean",
            "nullable": true
          }
        }
      }
    ],
    "functions": [
      {
        "name": "getAccounts",
        "type": "function",
        "parameters": [
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "array",
                "items": {
                  "$ref": "AccountInfo"
                },
                "optional": false,
                "name": "accounts"
              }
            ]
          }
        ],
        "static": true,
        "dependencies": [
          "permission:identity"
        ]
      },
      {
        "name": "getAuthToken",
        "type": "function",
        "parameters": [
          {
            "$ref": "TokenDetails",
            "optional": true,
            "name": "details"
          },
          {
            "optional": true,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "string",
                "optional": true,
                "name": "token"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "getProfileUserInfo",
        "type": "function",
        "parameters": [
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "$ref": "ProfileUserInfo",
                "optional": false,
                "name": "userInfo"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "removeCachedAuthToken",
        "type": "function",
        "parameters": [
          {
            "$ref": "InvalidTokenDetails",
            "optional": false,
            "name": "details"
          },
          {
            "optional": true,
            "name": "callback",
            "type": "function",
            "parameters": []
          }
        ],
        "static": true
      },
      {
        "name": "launchWebAuthFlow",
        "type": "function",
        "parameters": [
          {
            "$ref": "WebAuthFlowDetails",
            "optional": false,
            "name": "details"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "string",
                "optional": true,
                "name": "responseUrl"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "getRedirectURL",
        "type": "function",
        "parameters": [
          {
            "type": "string",
            "optional": true,
            "name": "path"
          }
        ],
        "static": true
      }
    ],
    "events": [
      {
        "name": "onSignInChanged",
        "type": "function",
        "parameters": [
          {
            "$ref": "AccountInfo",
            "optional": false,
            "name": "account"
          },
          {
            "type": "boolean",
            "optional": false,
            "name": "signedIn"
          }
        ]
      }
    ],
    "namespace": "identity",
    "dependencies": [
      "permission:identity"
    ]
  },
  {
    "namespace": "idle",
    "description": "Use the <code>chrome.idle</code> API to detect when the machine's idle state changes.",
    "types": [
      {
        "id": "IdleState",
        "type": "string",
        "enum": [
          "active",
          "idle",
          "locked"
        ]
      }
    ],
    "functions": [
      {
        "name": "queryState",
        "type": "function",
        "description": "Returns \"locked\" if the system is locked, \"idle\" if the user has not generated any input for a specified number of seconds, or \"active\" otherwise.",
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
        "description": "Fired when the system changes to an active, idle or locked state. The event fires with \"locked\" if the screen is locked or the screensaver activates, \"idle\" if the system is unlocked and the user has not generated any input for a specified number of seconds, and \"active\" when the user generates input on an idle system.",
        "parameters": [
          {
            "name": "newState",
            "$ref": "IdleState"
          }
        ]
      }
    ],
    "dependencies": [
      "permission:idle"
    ]
  },
  {
    "namespace": "instanceID",
    "description": "Use <code>chrome.instanceID</code> to access the Instance ID service.",
    "functions": [
      {
        "name": "getID",
        "type": "function",
        "description": "Retrieves an identifier for the app instance. The instance ID will be returned by the <code>callback</code>. The same ID will be returned as long as the application identity has not been revoked or expired.",
        "parameters": [
          {
            "name": "callback",
            "type": "function",
            "description": "Function called when the retrieval completes. It should check $(ref:runtime.lastError) for error when instanceID is empty.",
            "parameters": [
              {
                "name": "instanceID",
                "type": "string",
                "description": "An Instance ID assigned to the app instance."
              }
            ]
          }
        ]
      },
      {
        "name": "getCreationTime",
        "type": "function",
        "description": "Retrieves the time when the InstanceID has been generated. The creation time will be returned by the <code>callback</code>.",
        "parameters": [
          {
            "name": "callback",
            "type": "function",
            "description": "Function called when the retrieval completes. It should check $(ref:runtime.lastError) for error when creationTime is zero.",
            "parameters": [
              {
                "name": "creationTime",
                "type": "number",
                "description": "The time when the Instance ID has been generated, represented in milliseconds since the epoch."
              }
            ]
          }
        ]
      },
      {
        "name": "getToken",
        "type": "function",
        "description": "Return a token that allows the authorized entity to access the service defined by scope.",
        "parameters": [
          {
            "name": "getTokenParams",
            "type": "object",
            "description": "Parameters for getToken.",
            "properties": {
              "authorizedEntity": {
                "type": "string",
                "minLength": 1,
                "description": "Identifies the entity that is authorized to access resources associated with this Instance ID. It can be a project ID from <a href='https://code.google.com/apis/console'>Google developer console</a>."
              },
              "scope": {
                "type": "string",
                "minLength": 1,
                "description": "Identifies authorized actions that the authorized entity can take. E.g. for sending GCM messages, <code>GCM</code> scope should be used."
              },
              "options": {
                "type": "object",
                "properties": {},
                "additionalProperties": {
                  "type": "string",
                  "minLength": 1
                },
                "optional": true,
                "description": "Allows including a small number of string key/value pairs that will be associated with the token and may be used in processing the request."
              }
            }
          },
          {
            "name": "callback",
            "type": "function",
            "description": "Function called when the retrieval completes. It should check $(ref:runtime.lastError) for error when token is empty.",
            "parameters": [
              {
                "name": "token",
                "type": "string",
                "description": "A token assigned by the requested service."
              }
            ]
          }
        ]
      },
      {
        "name": "deleteToken",
        "type": "function",
        "description": "Revokes a granted token.",
        "parameters": [
          {
            "name": "deleteTokenParams",
            "type": "object",
            "description": "Parameters for deleteToken.",
            "properties": {
              "authorizedEntity": {
                "type": "string",
                "minLength": 1,
                "description": "The authorized entity that is used to obtain the token."
              },
              "scope": {
                "type": "string",
                "minLength": 1,
                "description": "The scope that is used to obtain the token."
              }
            }
          },
          {
            "name": "callback",
            "type": "function",
            "description": "Function called when the token deletion completes. The token was revoked successfully if $(ref:runtime.lastError) is not set.",
            "parameters": []
          }
        ]
      },
      {
        "name": "deleteID",
        "type": "function",
        "description": "Resets the app instance identifier and revokes all tokens associated with it.",
        "parameters": [
          {
            "name": "callback",
            "type": "function",
            "description": "Function called when the deletion completes. The instance identifier was revoked successfully if $(ref:runtime.lastError) is not set.",
            "parameters": []
          }
        ]
      }
    ],
    "events": [
      {
        "name": "onTokenRefresh",
        "type": "function",
        "description": "Fired when all the granted tokens need to be refreshed."
      }
    ],
    "dependencies": [
      "permission:gcm"
    ]
  },
  {
    "types": [
      {
        "id": "MDnsService",
        "type": "object",
        "properties": {
          "serviceName": {
            "type": "string"
          },
          "serviceHostPort": {
            "type": "string"
          },
          "ipAddress": {
            "type": "string"
          },
          "serviceData": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        }
      }
    ],
    "functions": [
      {
        "name": "forceDiscovery",
        "type": "function",
        "parameters": [
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": []
          }
        ],
        "static": true
      }
    ],
    "events": [
      {
        "name": "onServiceList",
        "type": "function",
        "parameters": [
          {
            "type": "array",
            "items": {
              "$ref": "MDnsService"
            },
            "optional": false,
            "name": "services"
          }
        ]
      }
    ],
    "namespace": "mdns",
    "dependencies": [
      "permission:mdns"
    ]
  },
  {
    "types": [
      {
        "id": "GalleryChangeType",
        "type": "string",
        "enum": [
          "contents_changed",
          "watch_dropped"
        ]
      },
      {
        "id": "GetMediaFileSystemsInteractivity",
        "type": "string",
        "enum": [
          "no",
          "yes",
          "if_needed"
        ]
      },
      {
        "id": "GetMetadataType",
        "type": "string",
        "enum": [
          "all",
          "mimeTypeAndTags",
          "mimeTypeOnly"
        ]
      },
      {
        "id": "ScanProgressType",
        "type": "string",
        "enum": [
          "start",
          "cancel",
          "finish",
          "error"
        ]
      },
      {
        "id": "GalleryChangeDetails",
        "type": "object",
        "properties": {
          "type": {
            "$ref": "GalleryChangeType"
          },
          "galleryId": {
            "type": "string"
          }
        }
      },
      {
        "id": "MediaFileSystemsDetails",
        "type": "object",
        "properties": {
          "interactive": {
            "$ref": "GetMediaFileSystemsInteractivity",
            "nullable": true
          }
        }
      },
      {
        "id": "MediaMetadataOptions",
        "type": "object",
        "properties": {
          "metadataType": {
            "$ref": "GetMetadataType",
            "nullable": true
          }
        }
      },
      {
        "id": "MediaFileSystemMetadata",
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "galleryId": {
            "type": "string"
          },
          "deviceId": {
            "type": "string",
            "nullable": true
          },
          "isRemovable": {
            "type": "boolean"
          },
          "isMediaDevice": {
            "type": "boolean"
          },
          "isAvailable": {
            "type": "boolean"
          }
        }
      },
      {
        "id": "ScanProgressDetails",
        "type": "object",
        "properties": {
          "type": {
            "$ref": "ScanProgressType"
          },
          "galleryCount": {
            "type": "integer",
            "nullable": true
          },
          "audioCount": {
            "type": "integer",
            "nullable": true
          },
          "imageCount": {
            "type": "integer",
            "nullable": true
          },
          "videoCount": {
            "type": "integer",
            "nullable": true
          }
        }
      },
      {
        "id": "StreamInfo",
        "type": "object",
        "properties": {
          "type": {
            "type": "string"
          },
          "tags": {
            "type": "object"
          }
        }
      },
      {
        "id": "MediaMetadata",
        "type": "object",
        "properties": {
          "mimeType": {
            "type": "string"
          },
          "height": {
            "type": "integer",
            "nullable": true
          },
          "width": {
            "type": "integer",
            "nullable": true
          },
          "duration": {
            "type": "number",
            "nullable": true
          },
          "rotation": {
            "type": "integer",
            "nullable": true
          },
          "album": {
            "type": "string",
            "nullable": true
          },
          "artist": {
            "type": "string",
            "nullable": true
          },
          "comment": {
            "type": "string",
            "nullable": true
          },
          "copyright": {
            "type": "string",
            "nullable": true
          },
          "disc": {
            "type": "integer",
            "nullable": true
          },
          "genre": {
            "type": "string",
            "nullable": true
          },
          "language": {
            "type": "string",
            "nullable": true
          },
          "title": {
            "type": "string",
            "nullable": true
          },
          "track": {
            "type": "integer",
            "nullable": true
          },
          "rawTags": {
            "type": "array",
            "items": {
              "$ref": "StreamInfo"
            }
          },
          "attachedImages": {
            "type": "array",
            "items": {
              "type": "object"
            }
          }
        }
      },
      {
        "id": "AddGalleryWatchResult",
        "type": "object",
        "properties": {
          "galleryId": {
            "type": "string"
          },
          "success": {
            "type": "boolean"
          }
        }
      }
    ],
    "functions": [
      {
        "name": "getMediaFileSystems",
        "type": "function",
        "parameters": [
          {
            "$ref": "MediaFileSystemsDetails",
            "optional": true,
            "name": "details"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "array",
                "items": {
                  "type": "object"
                },
                "optional": false,
                "name": "mediaFileSystems"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "addUserSelectedFolder",
        "type": "function",
        "parameters": [
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "array",
                "items": {
                  "type": "object"
                },
                "optional": false,
                "name": "mediaFileSystems"
              },
              {
                "type": "string",
                "optional": false,
                "name": "selectedFileSystemName"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "dropPermissionForMediaFileSystem",
        "type": "function",
        "parameters": [
          {
            "type": "string",
            "optional": false,
            "name": "galleryId"
          },
          {
            "optional": true,
            "name": "callback",
            "type": "function",
            "parameters": []
          }
        ],
        "static": true
      },
      {
        "name": "startMediaScan",
        "type": "function",
        "static": true
      },
      {
        "name": "cancelMediaScan",
        "type": "function",
        "static": true
      },
      {
        "name": "addScanResults",
        "type": "function",
        "parameters": [
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "array",
                "items": {
                  "type": "object"
                },
                "optional": false,
                "name": "mediaFileSystems"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "getMediaFileSystemMetadata",
        "type": "function",
        "parameters": [
          {
            "type": "object",
            "optional": false,
            "name": "mediaFileSystem"
          }
        ],
        "static": true
      },
      {
        "name": "getAllMediaFileSystemMetadata",
        "type": "function",
        "parameters": [
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "array",
                "items": {
                  "$ref": "MediaFileSystemMetadata"
                },
                "optional": false,
                "name": "metadata"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "getMetadata",
        "type": "function",
        "parameters": [
          {
            "type": "object",
            "optional": false,
            "name": "mediaFile"
          },
          {
            "$ref": "MediaMetadataOptions",
            "optional": true,
            "name": "options"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "$ref": "MediaMetadata",
                "optional": false,
                "name": "metadata"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "addGalleryWatch",
        "type": "function",
        "parameters": [
          {
            "type": "string",
            "optional": false,
            "name": "galleryId"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "$ref": "AddGalleryWatchResult",
                "optional": false,
                "name": "result"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "removeGalleryWatch",
        "type": "function",
        "parameters": [
          {
            "type": "string",
            "optional": false,
            "name": "galleryId"
          }
        ],
        "static": true
      },
      {
        "name": "getAllGalleryWatch",
        "type": "function",
        "parameters": [
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "array",
                "items": {
                  "type": "string"
                },
                "optional": false,
                "name": "galleryIds"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "removeAllGalleryWatch",
        "type": "function",
        "static": true
      }
    ],
    "events": [
      {
        "name": "onGalleryChanged",
        "type": "function",
        "parameters": [
          {
            "$ref": "GalleryChangeDetails",
            "optional": false,
            "name": "details"
          }
        ]
      },
      {
        "name": "onScanProgress",
        "type": "function",
        "parameters": [
          {
            "$ref": "ScanProgressDetails",
            "optional": false,
            "name": "details"
          }
        ]
      }
    ],
    "namespace": "mediaGalleries",
    "dependencies": [
      "permission:mediaGalleries"
    ]
  },
  {
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
            "type": "string"
          },
          "message": {
            "type": "string"
          }
        }
      },
      {
        "id": "NotificationBitmap",
        "type": "object",
        "properties": {
          "width": {
            "type": "integer"
          },
          "height": {
            "type": "integer"
          },
          "data": {
            "$ref": "ArrayBuffer",
            "nullable": true
          }
        }
      },
      {
        "id": "NotificationButton",
        "type": "object",
        "properties": {
          "title": {
            "type": "string"
          },
          "iconUrl": {
            "type": "string",
            "nullable": true
          },
          "iconBitmap": {
            "$ref": "NotificationBitmap",
            "nullable": true
          }
        }
      },
      {
        "id": "NotificationOptions",
        "type": "object",
        "properties": {
          "type": {
            "$ref": "TemplateType",
            "nullable": true
          },
          "iconUrl": {
            "type": "string",
            "nullable": true
          },
          "iconBitmap": {
            "$ref": "NotificationBitmap",
            "nullable": true
          },
          "appIconMaskUrl": {
            "type": "string",
            "nullable": true
          },
          "appIconMaskBitmap": {
            "$ref": "NotificationBitmap",
            "nullable": true
          },
          "title": {
            "type": "string",
            "nullable": true
          },
          "message": {
            "type": "string",
            "nullable": true
          },
          "contextMessage": {
            "type": "string",
            "nullable": true
          },
          "priority": {
            "type": "integer",
            "nullable": true
          },
          "eventTime": {
            "type": "number",
            "nullable": true
          },
          "buttons": {
            "type": "array",
            "items": {
              "$ref": "NotificationButton"
            },
            "nullable": true
          },
          "expandedMessage": {
            "type": "string",
            "nullable": true
          },
          "imageUrl": {
            "type": "string",
            "nullable": true
          },
          "imageBitmap": {
            "$ref": "NotificationBitmap",
            "nullable": true
          },
          "items": {
            "type": "array",
            "items": {
              "$ref": "NotificationItem"
            },
            "nullable": true
          },
          "progress": {
            "type": "integer",
            "nullable": true
          },
          "isClickable": {
            "type": "boolean",
            "nullable": true
          },
          "requireInteraction": {
            "type": "boolean",
            "nullable": true
          }
        }
      }
    ],
    "functions": [
      {
        "name": "create",
        "type": "function",
        "parameters": [
          {
            "type": "string",
            "optional": true,
            "name": "notificationId"
          },
          {
            "$ref": "NotificationOptions",
            "optional": false,
            "name": "options"
          },
          {
            "optional": true,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "string",
                "optional": false,
                "name": "notificationId"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "update",
        "type": "function",
        "parameters": [
          {
            "type": "string",
            "optional": false,
            "name": "notificationId"
          },
          {
            "$ref": "NotificationOptions",
            "optional": false,
            "name": "options"
          },
          {
            "optional": true,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "boolean",
                "optional": false,
                "name": "wasUpdated"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "clear",
        "type": "function",
        "parameters": [
          {
            "type": "string",
            "optional": false,
            "name": "notificationId"
          },
          {
            "optional": true,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "boolean",
                "optional": false,
                "name": "wasCleared"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "getAll",
        "type": "function",
        "parameters": [
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "object",
                "optional": false,
                "name": "notifications"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "getPermissionLevel",
        "type": "function",
        "parameters": [
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "$ref": "PermissionLevel",
                "optional": false,
                "name": "level"
              }
            ]
          }
        ],
        "static": true
      }
    ],
    "events": [
      {
        "name": "onClosed",
        "type": "function",
        "parameters": [
          {
            "type": "string",
            "optional": false,
            "name": "notificationId"
          },
          {
            "type": "boolean",
            "optional": false,
            "name": "byUser"
          }
        ]
      },
      {
        "name": "onClicked",
        "type": "function",
        "parameters": [
          {
            "type": "string",
            "optional": false,
            "name": "notificationId"
          }
        ]
      },
      {
        "name": "onButtonClicked",
        "type": "function",
        "parameters": [
          {
            "type": "string",
            "optional": false,
            "name": "notificationId"
          },
          {
            "type": "integer",
            "optional": false,
            "name": "buttonIndex"
          }
        ]
      },
      {
        "name": "onPermissionLevelChanged",
        "type": "function",
        "parameters": [
          {
            "$ref": "PermissionLevel",
            "optional": false,
            "name": "level"
          }
        ]
      },
      {
        "name": "onShowSettings",
        "type": "function"
      }
    ],
    "namespace": "notifications",
    "dependencies": [
      "permission:notifications"
    ]
  },
  {
    "namespace": "permissions",
    "description": "Use the <code>chrome.permissions</code> API to request <a href='permissions#manifest'>declared optional permissions</a> at run time rather than install time, so users understand why the permissions are needed and grant only those that are necessary.",
    "types": [
      {
        "id": "Permissions",
        "type": "object",
        "properties": {
          "permissions": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "optional": true,
            "description": "List of named permissions (does not include hosts or origins).  Anything listed here must appear in the <code>optional_permissions</code> list in the manifest."
          },
          "origins": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "optional": true,
            "description": "List of origin permissions. Anything listed here must be a subset of a host that appears in the <code>optional_permissions</code> list in the manifest. For example, if <code>http://*.example.com/</code> or <code>http://*/</code> appears in <code>optional_permissions</code>, you can request an origin of <code>http://help.example.com/</code>. Any path is ignored."
          }
        }
      }
    ],
    "events": [
      {
        "name": "onAdded",
        "type": "function",
        "description": "Fired when the extension acquires new permissions.",
        "parameters": [
          {
            "$ref": "Permissions",
            "name": "permissions",
            "description": "The newly acquired permissions."
          }
        ]
      },
      {
        "name": "onRemoved",
        "type": "function",
        "description": "Fired when access to permissions has been removed from the extension.",
        "parameters": [
          {
            "$ref": "Permissions",
            "name": "permissions",
            "description": "The permissions that have been removed."
          }
        ]
      }
    ],
    "functions": [
      {
        "name": "getAll",
        "type": "function",
        "description": "Gets the extension's current set of permissions.",
        "parameters": [
          {
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "name": "permissions",
                "$ref": "Permissions",
                "description": "The extension's active permissions."
              }
            ]
          }
        ]
      },
      {
        "name": "contains",
        "type": "function",
        "description": "Checks if the extension has the specified permissions.",
        "parameters": [
          {
            "name": "permissions",
            "$ref": "Permissions"
          },
          {
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "name": "result",
                "type": "boolean",
                "description": "True if the extension has the specified permissions."
              }
            ]
          }
        ]
      },
      {
        "name": "request",
        "type": "function",
        "description": "Requests access to the specified permissions. These permissions must be defined in the optional_permissions field of the manifest. If there are any problems requesting the permissions, $(ref:runtime.lastError) will be set.",
        "parameters": [
          {
            "name": "permissions",
            "$ref": "Permissions"
          },
          {
            "name": "callback",
            "type": "function",
            "optional": true,
            "parameters": [
              {
                "name": "granted",
                "type": "boolean",
                "description": "True if the user granted the specified permissions."
              }
            ]
          }
        ]
      },
      {
        "name": "remove",
        "type": "function",
        "description": "Removes access to the specified permissions. If there are any problems removing the permissions, $(ref:runtime.lastError) will be set.",
        "parameters": [
          {
            "name": "permissions",
            "$ref": "Permissions"
          },
          {
            "name": "callback",
            "type": "function",
            "optional": true,
            "parameters": [
              {
                "name": "removed",
                "type": "boolean",
                "description": "True if the permissions were removed."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "types": [
      {
        "id": "Level",
        "type": "string",
        "enum": [
          "system",
          "display"
        ]
      }
    ],
    "functions": [
      {
        "name": "requestKeepAwake",
        "type": "function",
        "parameters": [
          {
            "$ref": "Level",
            "optional": false,
            "name": "level"
          }
        ],
        "static": true
      },
      {
        "name": "releaseKeepAwake",
        "type": "function",
        "static": true
      }
    ],
    "namespace": "power",
    "dependencies": [
      "permission:power"
    ]
  },
  {
    "types": [
      {
        "id": "PrintError",
        "type": "string",
        "enum": [
          "OK",
          "FAILED",
          "INVALID_TICKET",
          "INVALID_DATA"
        ]
      },
      {
        "id": "PrinterInfo",
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "description": {
            "type": "string",
            "nullable": true
          }
        }
      },
      {
        "id": "PrintJob",
        "type": "object",
        "properties": {
          "printerId": {
            "type": "string"
          },
          "title": {
            "type": "string"
          },
          "ticket": {
            "type": "object"
          },
          "contentType": {
            "type": "string"
          },
          "document": {
            "type": "object"
          }
        }
      }
    ],
    "events": [
      {
        "name": "onGetPrintersRequested",
        "type": "function",
        "parameters": [
          {
            "optional": false,
            "name": "resultCallback",
            "type": "function",
            "parameters": [
              {
                "type": "array",
                "items": {
                  "$ref": "PrinterInfo"
                },
                "optional": false,
                "name": "printerInfo"
              }
            ]
          }
        ]
      },
      {
        "name": "onGetUsbPrinterInfoRequested",
        "type": "function",
        "parameters": [
          {
            "$ref": "Device",
            "optional": false,
            "name": "device"
          },
          {
            "optional": false,
            "name": "resultCallback",
            "type": "function",
            "parameters": [
              {
                "$ref": "PrinterInfo",
                "optional": true,
                "name": "printerInfo"
              }
            ]
          }
        ]
      },
      {
        "name": "onGetCapabilityRequested",
        "type": "function",
        "parameters": [
          {
            "type": "string",
            "optional": false,
            "name": "printerId"
          },
          {
            "optional": false,
            "name": "resultCallback",
            "type": "function",
            "parameters": [
              {
                "type": "object",
                "optional": false,
                "name": "capabilities"
              }
            ]
          }
        ]
      },
      {
        "name": "onPrintRequested",
        "type": "function",
        "parameters": [
          {
            "$ref": "PrintJob",
            "optional": false,
            "name": "printJob"
          },
          {
            "optional": false,
            "name": "resultCallback",
            "type": "function",
            "parameters": [
              {
                "$ref": "PrintError",
                "optional": false,
                "name": "result"
              }
            ]
          }
        ]
      }
    ],
    "namespace": "printerProvider",
    "dependencies": [
      "permission:printerProvider"
    ]
  },
  {
    "namespace": "runtime",
    "description": "Use the <code>chrome.runtime</code> API to retrieve the background page, return details about the manifest, and listen for and respond to events in the app or extension lifecycle. You can also use this API to convert the relative path of URLs to fully-qualified URLs.",
    "types": [
      {
        "id": "Port",
        "type": "object",
        "nocompile": true,
        "description": "An object which allows two way communication with other pages. See <a href=\"messaging#connect\">Long-lived connections</a> for more information.",
        "properties": {
          "name": {
            "type": "string",
            "description": "The name of the port, as specified in the call to $(ref:runtime.connect)."
          },
          "disconnect": {
            "type": "function",
            "description": "Immediately disconnect the port. Calling <code>disconnect()</code> on an already-disconnected port has no effect. When a port is disconnected, no new events will be dispatched to this port."
          },
          "onDisconnect": {
            "$ref": "events.Event",
            "description": "Fired when the port is disconnected from the other end(s). $(ref:runtime.lastError) may be set if the port was disconnected by an error. If the port is closed via $(ref:Port.disconnect disconnect), then this event is <em>only</em> fired on the other end. This event is fired at most once (see also <a href=\"messaging#port-lifetime\">Port lifetime</a>). The first and only parameter to the event handler is this disconnected port."
          },
          "onMessage": {
            "$ref": "events.Event",
            "description": "This event is fired when $(ref:Port.postMessage postMessage) is called by the other end of the port. The first parameter is the message, the second parameter is the port that received the message."
          },
          "postMessage": {
            "type": "function",
            "description": "Send a message to the other end of the port. If the port is disconnected, an error is thrown.",
            "parameters": [
              {
                "name": "message",
                "type": "any",
                "description": "The message to send. This object should be JSON-ifiable."
              }
            ]
          },
          "sender": {
            "$ref": "MessageSender",
            "optional": true,
            "description": "This property will <b>only</b> be present on ports passed to $(ref:runtime.onConnect onConnect) / $(ref:runtime.onConnectExternal onConnectExternal) listeners."
          }
        },
        "additionalProperties": {
          "type": "any"
        }
      },
      {
        "id": "MessageSender",
        "type": "object",
        "nocompile": true,
        "description": "An object containing information about the script context that sent a message or request.",
        "properties": {
          "tab": {
            "$ref": "tabs.Tab",
            "optional": true,
            "description": "The $(ref:tabs.Tab) which opened the connection, if any. This property will <strong>only</strong> be present when the connection was opened from a tab (including content scripts), and <strong>only</strong> if the receiver is an extension, not an app.",
            "extension_types": [
              "extension",
              "legacy_packaged_app"
            ]
          },
          "frameId": {
            "type": "integer",
            "optional": true,
            "description": "The <a href='webNavigation#frame_ids'>frame</a> that opened the connection. 0 for top-level frames, positive for child frames. This will only be set when <code>tab</code> is set.",
            "extension_types": [
              "extension",
              "legacy_packaged_app"
            ]
          },
          "guestProcessId": {
            "type": "integer",
            "optional": true,
            "nodoc": true,
            "description": "The guest process id of the requesting webview, if available. Only available for component extensions.",
            "extension_types": [
              "extension"
            ]
          },
          "guestRenderFrameRoutingId": {
            "type": "integer",
            "optional": true,
            "nodoc": true,
            "description": "The guest render frame routing id of the requesting webview, if available. Only available for component extensions.",
            "extension_types": [
              "extension"
            ]
          },
          "id": {
            "type": "string",
            "optional": true,
            "description": "The ID of the extension or app that opened the connection, if any."
          },
          "url": {
            "type": "string",
            "optional": true,
            "description": "The URL of the page or frame that opened the connection. If the sender is in an iframe, it will be iframe's URL not the URL of the page which hosts it."
          },
          "tlsChannelId": {
            "type": "string",
            "optional": true,
            "description": "The TLS channel ID of the page or frame that opened the connection, if requested by the extension or app, and if available."
          }
        }
      },
      {
        "id": "PlatformOs",
        "type": "string",
        "description": "The operating system chrome is running on.",
        "enum": [
          "mac",
          "win",
          "android",
          "cros",
          "linux",
          "openbsd"
        ]
      },
      {
        "id": "PlatformArch",
        "type": "string",
        "enum": [
          "arm",
          "x86-32",
          "x86-64"
        ],
        "description": "The machine's processor architecture."
      },
      {
        "id": "PlatformNaclArch",
        "description": "The native client architecture. This may be different from arch on some platforms.",
        "type": "string",
        "enum": [
          "arm",
          "x86-32",
          "x86-64"
        ]
      },
      {
        "id": "PlatformInfo",
        "type": "object",
        "description": "An object containing information about the current platform.",
        "properties": {
          "os": {
            "$ref": "PlatformOs",
            "description": "The operating system chrome is running on."
          },
          "arch": {
            "$ref": "PlatformArch",
            "description": "The machine's processor architecture."
          },
          "nacl_arch": {
            "description": "The native client architecture. This may be different from arch on some platforms.",
            "$ref": "PlatformNaclArch"
          }
        }
      },
      {
        "id": "RequestUpdateCheckStatus",
        "type": "string",
        "enum": [
          "throttled",
          "no_update",
          "update_available"
        ],
        "description": "Result of the update check."
      },
      {
        "id": "OnInstalledReason",
        "type": "string",
        "enum": [
          "install",
          "update",
          "chrome_update",
          "shared_module_update"
        ],
        "description": "The reason that this event is being dispatched."
      },
      {
        "id": "OnRestartRequiredReason",
        "type": "string",
        "description": "The reason that the event is being dispatched. 'app_update' is used when the restart is needed because the application is updated to a newer version. 'os_update' is used when the restart is needed because the browser/OS is updated to a newer version. 'periodic' is used when the system runs for more than the permitted uptime set in the enterprise policy.",
        "enum": [
          "app_update",
          "os_update",
          "periodic"
        ]
      }
    ],
    "properties": {
      "lastError": {
        "type": "object",
        "optional": true,
        "description": "This will be defined during an API method callback if there was an error",
        "properties": {
          "message": {
            "optional": true,
            "type": "string",
            "description": "Details about the error which occurred."
          }
        }
      },
      "id": {
        "type": "string",
        "description": "The ID of the extension/app."
      }
    },
    "functions": [
      {
        "name": "getBackgroundPage",
        "type": "function",
        "description": "Retrieves the JavaScript 'window' object for the background page running inside the current extension/app. If the background page is an event page, the system will ensure it is loaded before calling the callback. If there is no background page, an error is set.",
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
                "additionalProperties": {
                  "type": "any"
                },
                "description": "The JavaScript 'window' object for the background page."
              }
            ]
          }
        ]
      },
      {
        "name": "openOptionsPage",
        "type": "function",
        "description": "<p>Open your Extension's options page, if possible.</p><p>The precise behavior may depend on your manifest's <code><a href=\"optionsV2\">options_ui</a></code> or <code><a href=\"options\">options_page</a></code> key, or what Chrome happens to support at the time. For example, the page may be opened in a new tab, within chrome://extensions, within an App, or it may just focus an open options page. It will never cause the caller page to reload.</p><p>If your Extension does not declare an options page, or Chrome failed to create one for some other reason, the callback will set $(ref:lastError).</p>",
        "parameters": [
          {
            "type": "function",
            "name": "callback",
            "parameters": [],
            "optional": true
          }
        ]
      },
      {
        "name": "getManifest",
        "description": "Returns details about the app or extension from the manifest. The object returned is a serialization of the full <a href=\"manifest.html\">manifest file</a>.",
        "type": "function",
        "nocompile": true,
        "parameters": [],
        "returns": {
          "type": "object",
          "properties": {},
          "additionalProperties": {
            "type": "any"
          },
          "description": "The manifest details."
        },
        "content_script": true
      },
      {
        "name": "getURL",
        "type": "function",
        "nocompile": true,
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
        },
        "content_script": true
      },
      {
        "name": "setUninstallURL",
        "type": "function",
        "description": "Sets the URL to be visited upon uninstallation. This may be used to clean up server-side data, do analytics, and implement surveys. Maximum 255 characters.",
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
        "description": "Reloads the app or extension. This method is not supported in kiosk mode. For kiosk mode, use chrome.runtime.restart() method.",
        "type": "function",
        "parameters": []
      },
      {
        "name": "requestUpdateCheck",
        "type": "function",
        "description": "<p>Requests an immediate update check be done for this app/extension.</p> <p><b>Important</b>: Most extensions/apps should <b>not</b> use this method, since chrome already does automatic checks every few hours, and you can listen for the $(ref:runtime.onUpdateAvailable) event without needing to call requestUpdateCheck.</p><p>This method is only appropriate to call in very limited circumstances, such as if your extension/app talks to a backend service, and the backend service has determined that the client extension/app version is very far out of date and you'd like to prompt a user to update. Most other uses of requestUpdateCheck, such as calling it unconditionally based on a repeating timer, probably only serve to waste client, network, and server resources.</p>",
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
        "description": "Restart the ChromeOS device when the app runs in kiosk mode. Otherwise, it's no-op.",
        "type": "function",
        "parameters": []
      },
      {
        "name": "restartAfterDelay",
        "description": "Restart the ChromeOS device when the app runs in kiosk mode after the given seconds. If called again before the time ends, the reboot will be delayed. If called with a value of -1, the reboot will be cancelled. It's a no-op in non-kiosk mode. It's only allowed to be called repeatedly by the first extension to invoke this API.",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "name": "seconds",
            "description": "Time to wait in seconds before rebooting the device, or -1 to cancel a scheduled reboot."
          },
          {
            "type": "function",
            "name": "callback",
            "description": "A callback to be invoked when a restart request was successfully rescheduled.",
            "optional": true
          }
        ]
      },
      {
        "name": "connect",
        "type": "function",
        "nocompile": true,
        "description": "Attempts to connect to connect listeners within an extension/app (such as the background page), or other extensions/apps. This is useful for content scripts connecting to their extension processes, inter-app/extension communication, and <a href=\"manifest/externally_connectable.html\">web messaging</a>. Note that this does not connect to any listeners in a content script. Extensions may connect to content scripts embedded in tabs via $(ref:tabs.connect).",
        "parameters": [
          {
            "type": "string",
            "name": "extensionId",
            "optional": true,
            "description": "The ID of the extension or app to connect to. If omitted, a connection will be attempted with your own extension. Required if sending messages from a web page for <a href=\"manifest/externally_connectable.html\">web messaging</a>."
          },
          {
            "type": "object",
            "name": "connectInfo",
            "properties": {
              "name": {
                "type": "string",
                "optional": true,
                "description": "Will be passed into onConnect for processes that are listening for the connection event."
              },
              "includeTlsChannelId": {
                "type": "boolean",
                "optional": true,
                "description": "Whether the TLS channel ID will be passed into onConnectExternal for processes that are listening for the connection event."
              }
            },
            "optional": true
          }
        ],
        "returns": {
          "$ref": "Port",
          "description": "Port through which messages can be sent and received. The port's $(ref:Port onDisconnect) event is fired if the extension/app does not exist. "
        },
        "content_script": true
      },
      {
        "name": "connectNative",
        "type": "function",
        "nocompile": true,
        "description": "Connects to a native application in the host machine. See <a href=\"nativeMessaging\">Native Messaging</a> for more information.",
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
        },
        "dependencies": [
          "permission:nativeMessaging"
        ]
      },
      {
        "name": "sendMessage",
        "type": "function",
        "nocompile": true,
        "allowAmbiguousOptionalArguments": true,
        "description": "Sends a single message to event listeners within your extension/app or a different extension/app. Similar to $(ref:runtime.connect) but only sends a single message, with an optional response. If sending to your extension, the $(ref:runtime.onMessage) event will be fired in every frame of your extension (except for the sender's frame), or $(ref:runtime.onMessageExternal), if a different extension. Note that extensions cannot send messages to content scripts using this method. To send messages to content scripts, use $(ref:tabs.sendMessage).",
        "parameters": [
          {
            "type": "string",
            "name": "extensionId",
            "optional": true,
            "description": "The ID of the extension/app to send the message to. If omitted, the message will be sent to your own extension/app. Required if sending messages from a web page for <a href=\"manifest/externally_connectable.html\">web messaging</a>."
          },
          {
            "type": "any",
            "name": "message",
            "description": "The message to send. This message should be a JSON-ifiable object."
          },
          {
            "type": "object",
            "name": "options",
            "properties": {
              "includeTlsChannelId": {
                "type": "boolean",
                "optional": true,
                "description": "Whether the TLS channel ID will be passed into onMessageExternal for processes that are listening for the connection event."
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
                "description": "The JSON response object sent by the handler of the message. If an error occurs while connecting to the extension, the callback will be called with no arguments and $(ref:runtime.lastError) will be set to the error message."
              }
            ]
          }
        ],
        "content_script": true
      },
      {
        "name": "sendNativeMessage",
        "type": "function",
        "nocompile": true,
        "description": "Send a single message to a native application.",
        "parameters": [
          {
            "name": "application",
            "description": "The name of the native messaging host.",
            "type": "string"
          },
          {
            "name": "message",
            "description": "The message that will be passed to the native messaging host.",
            "type": "object",
            "additionalProperties": {
              "type": "any"
            }
          },
          {
            "type": "function",
            "name": "responseCallback",
            "optional": true,
            "parameters": [
              {
                "name": "response",
                "type": "any",
                "description": "The response message sent by the native messaging host. If an error occurs while connecting to the native messaging host, the callback will be called with no arguments and $(ref:runtime.lastError) will be set to the error message.",
                "additionalProperties": {
                  "type": "any"
                }
              }
            ]
          }
        ],
        "dependencies": [
          "permission:nativeMessaging"
        ]
      },
      {
        "name": "getPlatformInfo",
        "type": "function",
        "description": "Returns information about the current platform.",
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
        "type": "function",
        "description": "Returns a DirectoryEntry for the package directory.",
        "parameters": [
          {
            "type": "function",
            "name": "callback",
            "parameters": [
              {
                "name": "directoryEntry",
                "type": "object",
                "additionalProperties": {
                  "type": "any"
                },
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
        "type": "function",
        "description": "Fired when a profile that has this extension installed first starts up. This event is not fired when an incognito profile is started, even if this extension is operating in 'split' incognito mode."
      },
      {
        "name": "onInstalled",
        "type": "function",
        "description": "Fired when the extension is first installed, when the extension is updated to a new version, and when Chrome is updated to a new version.",
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
        "type": "function",
        "description": "Sent to the event page just before it is unloaded. This gives the extension opportunity to do some clean up. Note that since the page is unloading, any asynchronous operations started while handling this event are not guaranteed to complete. If more activity for the event page occurs before it gets unloaded the onSuspendCanceled event will be sent and the page won't be unloaded. "
      },
      {
        "name": "onSuspendCanceled",
        "type": "function",
        "description": "Sent after onSuspend to indicate that the app won't be unloaded after all."
      },
      {
        "name": "onUpdateAvailable",
        "type": "function",
        "description": "Fired when an update is available, but isn't installed immediately because the app is currently running. If you do nothing, the update will be installed the next time the background page gets unloaded, if you want it to be installed sooner you can explicitly call chrome.runtime.reload(). If your extension is using a persistent background page, the background page of course never gets unloaded, so unless you call chrome.runtime.reload() manually in response to this event the update will not get installed until the next time chrome itself restarts. If no handlers are listening for this event, and your extension has a persistent background page, it behaves as if chrome.runtime.reload() is called in response to this event.",
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
            "additionalProperties": {
              "type": "any"
            },
            "description": "The manifest details of the available update."
          }
        ]
      },
      {
        "name": "onBrowserUpdateAvailable",
        "type": "function",
        "description": "Fired when a Chrome update is available, but isn't installed immediately because a browser restart is required.",
        "deprecated": "Please use $(ref:runtime.onRestartRequired).",
        "parameters": []
      },
      {
        "name": "onConnect",
        "type": "function",
        "nocompile": true,
        "options": {
          "unmanaged": true
        },
        "description": "Fired when a connection is made from either an extension process or a content script (by $(ref:runtime.connect)).",
        "parameters": [
          {
            "$ref": "Port",
            "name": "port"
          }
        ]
      },
      {
        "name": "onConnectExternal",
        "type": "function",
        "nocompile": true,
        "description": "Fired when a connection is made from another extension (by $(ref:runtime.connect)).",
        "parameters": [
          {
            "$ref": "Port",
            "name": "port"
          }
        ]
      },
      {
        "name": "onMessage",
        "type": "function",
        "nocompile": true,
        "options": {
          "unmanaged": true
        },
        "description": "Fired when a message is sent from either an extension process (by $(ref:runtime.sendMessage)) or a content script (by $(ref:tabs.sendMessage)).",
        "parameters": [
          {
            "name": "message",
            "type": "any",
            "optional": true,
            "description": "The message sent by the calling script."
          },
          {
            "name": "sender",
            "$ref": "MessageSender"
          },
          {
            "name": "sendResponse",
            "type": "function",
            "description": "Function to call (at most once) when you have a response. The argument should be any JSON-ifiable object. If you have more than one <code>onMessage</code> listener in the same document, then only one may send a response. This function becomes invalid when the event listener returns, <strong>unless you return true</strong> from the event listener to indicate you wish to send a response asynchronously (this will keep the message channel open to the other end until <code>sendResponse</code> is called)."
          }
        ],
        "returns": {
          "type": "boolean",
          "optional": true,
          "description": "Return true from the event listener if you wish to call <code>sendResponse</code> after the event listener returns."
        }
      },
      {
        "name": "onMessageExternal",
        "type": "function",
        "nocompile": true,
        "description": "Fired when a message is sent from another extension/app (by $(ref:runtime.sendMessage)). Cannot be used in a content script.",
        "parameters": [
          {
            "name": "message",
            "type": "any",
            "optional": true,
            "description": "The message sent by the calling script."
          },
          {
            "name": "sender",
            "$ref": "MessageSender"
          },
          {
            "name": "sendResponse",
            "type": "function",
            "description": "Function to call (at most once) when you have a response. The argument should be any JSON-ifiable object. If you have more than one <code>onMessage</code> listener in the same document, then only one may send a response. This function becomes invalid when the event listener returns, <strong>unless you return true</strong> from the event listener to indicate you wish to send a response asynchronously (this will keep the message channel open to the other end until <code>sendResponse</code> is called)."
          }
        ],
        "returns": {
          "type": "boolean",
          "optional": true,
          "description": "Return true from the event listener if you wish to call <code>sendResponse</code> after the event listener returns."
        }
      },
      {
        "name": "onRestartRequired",
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
    "types": [
      {
        "id": "DeviceInfo",
        "type": "object",
        "properties": {
          "path": {
            "type": "string"
          },
          "vendorId": {
            "type": "integer",
            "nullable": true
          },
          "productId": {
            "type": "integer",
            "nullable": true
          },
          "displayName": {
            "type": "string",
            "nullable": true
          }
        }
      },
      {
        "id": "DataBits",
        "type": "string",
        "enum": [
          "seven",
          "eight"
        ]
      },
      {
        "id": "ParityBit",
        "type": "string",
        "enum": [
          "no",
          "odd",
          "even"
        ]
      },
      {
        "id": "StopBits",
        "type": "string",
        "enum": [
          "one",
          "two"
        ]
      },
      {
        "id": "ConnectionOptions",
        "type": "object",
        "properties": {
          "persistent": {
            "type": "boolean",
            "nullable": true
          },
          "name": {
            "type": "string",
            "nullable": true
          },
          "bufferSize": {
            "type": "integer",
            "nullable": true
          },
          "bitrate": {
            "type": "integer",
            "nullable": true
          },
          "dataBits": {
            "$ref": "DataBits",
            "nullable": true
          },
          "parityBit": {
            "$ref": "ParityBit",
            "nullable": true
          },
          "stopBits": {
            "$ref": "StopBits",
            "nullable": true
          },
          "ctsFlowControl": {
            "type": "boolean",
            "nullable": true
          },
          "receiveTimeout": {
            "type": "integer",
            "nullable": true
          },
          "sendTimeout": {
            "type": "integer",
            "nullable": true
          }
        }
      },
      {
        "id": "ConnectionInfo",
        "type": "object",
        "properties": {
          "connectionId": {
            "type": "integer"
          },
          "paused": {
            "type": "boolean"
          },
          "persistent": {
            "type": "boolean"
          },
          "name": {
            "type": "string"
          },
          "bufferSize": {
            "type": "integer"
          },
          "receiveTimeout": {
            "type": "integer"
          },
          "sendTimeout": {
            "type": "integer"
          },
          "bitrate": {
            "type": "integer",
            "nullable": true
          },
          "dataBits": {
            "$ref": "DataBits",
            "nullable": true
          },
          "parityBit": {
            "$ref": "ParityBit",
            "nullable": true
          },
          "stopBits": {
            "$ref": "StopBits",
            "nullable": true
          },
          "ctsFlowControl": {
            "type": "boolean",
            "nullable": true
          }
        }
      },
      {
        "id": "SendError",
        "type": "string",
        "enum": [
          "disconnected",
          "pending",
          "timeout",
          "system_error"
        ]
      },
      {
        "id": "SendInfo",
        "type": "object",
        "properties": {
          "bytesSent": {
            "type": "integer"
          },
          "error": {
            "$ref": "SendError",
            "nullable": true
          }
        }
      },
      {
        "id": "HostControlSignals",
        "type": "object",
        "properties": {
          "dtr": {
            "type": "boolean",
            "nullable": true
          },
          "rts": {
            "type": "boolean",
            "nullable": true
          }
        }
      },
      {
        "id": "DeviceControlSignals",
        "type": "object",
        "properties": {
          "dcd": {
            "type": "boolean"
          },
          "cts": {
            "type": "boolean"
          },
          "ri": {
            "type": "boolean"
          },
          "dsr": {
            "type": "boolean"
          }
        }
      },
      {
        "id": "ReceiveInfo",
        "type": "object",
        "properties": {
          "connectionId": {
            "type": "integer"
          },
          "data": {
            "$ref": "ArrayBuffer"
          }
        }
      },
      {
        "id": "ReceiveError",
        "type": "string",
        "enum": [
          "disconnected",
          "timeout",
          "device_lost",
          "break",
          "frame_error",
          "overrun",
          "buffer_overflow",
          "parity_error",
          "system_error"
        ]
      },
      {
        "id": "ReceiveErrorInfo",
        "type": "object",
        "properties": {
          "connectionId": {
            "type": "integer"
          },
          "error": {
            "$ref": "ReceiveError"
          }
        }
      }
    ],
    "functions": [
      {
        "name": "getDevices",
        "type": "function",
        "parameters": [
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "array",
                "items": {
                  "$ref": "DeviceInfo"
                },
                "optional": false,
                "name": "ports"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "connect",
        "type": "function",
        "parameters": [
          {
            "type": "string",
            "optional": false,
            "name": "path"
          },
          {
            "$ref": "ConnectionOptions",
            "optional": true,
            "name": "options"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "$ref": "ConnectionInfo",
                "optional": false,
                "name": "connectionInfo"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "update",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "connectionId"
          },
          {
            "$ref": "ConnectionOptions",
            "optional": false,
            "name": "options"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "boolean",
                "optional": false,
                "name": "result"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "disconnect",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "connectionId"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "boolean",
                "optional": false,
                "name": "result"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "setPaused",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "connectionId"
          },
          {
            "type": "boolean",
            "optional": false,
            "name": "paused"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": []
          }
        ],
        "static": true
      },
      {
        "name": "getInfo",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "connectionId"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "$ref": "ConnectionInfo",
                "optional": false,
                "name": "connectionInfo"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "getConnections",
        "type": "function",
        "parameters": [
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "array",
                "items": {
                  "$ref": "ConnectionInfo"
                },
                "optional": false,
                "name": "connectionInfos"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "send",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "connectionId"
          },
          {
            "$ref": "ArrayBuffer",
            "optional": false,
            "name": "data"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "$ref": "SendInfo",
                "optional": false,
                "name": "sendInfo"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "flush",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "connectionId"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "boolean",
                "optional": false,
                "name": "result"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "getControlSignals",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "connectionId"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "$ref": "DeviceControlSignals",
                "optional": false,
                "name": "signals"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "setControlSignals",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "connectionId"
          },
          {
            "$ref": "HostControlSignals",
            "optional": false,
            "name": "signals"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "boolean",
                "optional": false,
                "name": "result"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "setBreak",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "connectionId"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "boolean",
                "optional": false,
                "name": "result"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "clearBreak",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "connectionId"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "boolean",
                "optional": false,
                "name": "result"
              }
            ]
          }
        ],
        "static": true
      }
    ],
    "events": [
      {
        "name": "onReceive",
        "type": "function",
        "parameters": [
          {
            "$ref": "ReceiveInfo",
            "optional": false,
            "name": "info"
          }
        ]
      },
      {
        "name": "onReceiveError",
        "type": "function",
        "parameters": [
          {
            "$ref": "ReceiveErrorInfo",
            "optional": false,
            "name": "info"
          }
        ]
      }
    ],
    "namespace": "serial",
    "dependencies": [
      "permission:serial"
    ]
  },
  {
    "types": [
      {
        "id": "SocketType",
        "type": "string",
        "enum": [
          "tcp",
          "udp"
        ]
      },
      {
        "id": "CreateOptions",
        "type": "object",
        "properties": {}
      },
      {
        "id": "CreateInfo",
        "type": "object",
        "properties": {
          "socketId": {
            "type": "integer"
          }
        }
      },
      {
        "id": "AcceptInfo",
        "type": "object",
        "properties": {
          "resultCode": {
            "type": "integer"
          },
          "socketId": {
            "type": "integer",
            "nullable": true
          }
        }
      },
      {
        "id": "ReadInfo",
        "type": "object",
        "properties": {
          "resultCode": {
            "type": "integer"
          },
          "data": {
            "$ref": "ArrayBuffer"
          }
        }
      },
      {
        "id": "WriteInfo",
        "type": "object",
        "properties": {
          "bytesWritten": {
            "type": "integer"
          }
        }
      },
      {
        "id": "RecvFromInfo",
        "type": "object",
        "properties": {
          "resultCode": {
            "type": "integer"
          },
          "data": {
            "$ref": "ArrayBuffer"
          },
          "address": {
            "type": "string"
          },
          "port": {
            "type": "integer"
          }
        }
      },
      {
        "id": "SocketInfo",
        "type": "object",
        "properties": {
          "socketType": {
            "$ref": "SocketType"
          },
          "connected": {
            "type": "boolean"
          },
          "peerAddress": {
            "type": "string",
            "nullable": true
          },
          "peerPort": {
            "type": "integer",
            "nullable": true
          },
          "localAddress": {
            "type": "string",
            "nullable": true
          },
          "localPort": {
            "type": "integer",
            "nullable": true
          }
        }
      },
      {
        "id": "NetworkInterface",
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "address": {
            "type": "string"
          },
          "prefixLength": {
            "type": "integer"
          }
        }
      },
      {
        "id": "TLSVersionConstraints",
        "type": "object",
        "properties": {
          "min": {
            "type": "string",
            "nullable": true
          },
          "max": {
            "type": "string",
            "nullable": true
          }
        }
      },
      {
        "id": "SecureOptions",
        "type": "object",
        "properties": {
          "tlsVersion": {
            "$ref": "TLSVersionConstraints",
            "nullable": true
          }
        }
      }
    ],
    "functions": [
      {
        "name": "create",
        "type": "function",
        "parameters": [
          {
            "$ref": "SocketType",
            "optional": false,
            "name": "type"
          },
          {
            "$ref": "CreateOptions",
            "optional": true,
            "name": "options"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "$ref": "CreateInfo",
                "optional": false,
                "name": "createInfo"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "destroy",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "socketId"
          }
        ],
        "static": true
      },
      {
        "name": "connect",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "socketId"
          },
          {
            "type": "string",
            "optional": false,
            "name": "hostname"
          },
          {
            "type": "integer",
            "optional": false,
            "name": "port"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "integer",
                "optional": false,
                "name": "result"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "bind",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "socketId"
          },
          {
            "type": "string",
            "optional": false,
            "name": "address"
          },
          {
            "type": "integer",
            "optional": false,
            "name": "port"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "integer",
                "optional": false,
                "name": "result"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "disconnect",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "socketId"
          }
        ],
        "static": true
      },
      {
        "name": "read",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "socketId"
          },
          {
            "type": "integer",
            "optional": true,
            "name": "bufferSize"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "$ref": "ReadInfo",
                "optional": false,
                "name": "readInfo"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "write",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "socketId"
          },
          {
            "$ref": "ArrayBuffer",
            "optional": false,
            "name": "data"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "$ref": "WriteInfo",
                "optional": false,
                "name": "writeInfo"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "recvFrom",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "socketId"
          },
          {
            "type": "integer",
            "optional": true,
            "name": "bufferSize"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "$ref": "RecvFromInfo",
                "optional": false,
                "name": "recvFromInfo"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "sendTo",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "socketId"
          },
          {
            "$ref": "ArrayBuffer",
            "optional": false,
            "name": "data"
          },
          {
            "type": "string",
            "optional": false,
            "name": "address"
          },
          {
            "type": "integer",
            "optional": false,
            "name": "port"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "$ref": "WriteInfo",
                "optional": false,
                "name": "writeInfo"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "listen",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "socketId"
          },
          {
            "type": "string",
            "optional": false,
            "name": "address"
          },
          {
            "type": "integer",
            "optional": false,
            "name": "port"
          },
          {
            "type": "integer",
            "optional": true,
            "name": "backlog"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "integer",
                "optional": false,
                "name": "result"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "accept",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "socketId"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "$ref": "AcceptInfo",
                "optional": false,
                "name": "acceptInfo"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "setKeepAlive",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "socketId"
          },
          {
            "type": "boolean",
            "optional": false,
            "name": "enable"
          },
          {
            "type": "integer",
            "optional": true,
            "name": "delay"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "boolean",
                "optional": false,
                "name": "result"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "setNoDelay",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "socketId"
          },
          {
            "type": "boolean",
            "optional": false,
            "name": "noDelay"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "boolean",
                "optional": false,
                "name": "result"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "getInfo",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "socketId"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "$ref": "SocketInfo",
                "optional": false,
                "name": "result"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "getNetworkList",
        "type": "function",
        "parameters": [
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "array",
                "items": {
                  "$ref": "NetworkInterface"
                },
                "optional": false,
                "name": "result"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "joinGroup",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "socketId"
          },
          {
            "type": "string",
            "optional": false,
            "name": "address"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "integer",
                "optional": false,
                "name": "result"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "leaveGroup",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "socketId"
          },
          {
            "type": "string",
            "optional": false,
            "name": "address"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "integer",
                "optional": false,
                "name": "result"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "setMulticastTimeToLive",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "socketId"
          },
          {
            "type": "integer",
            "optional": false,
            "name": "ttl"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "integer",
                "optional": false,
                "name": "result"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "setMulticastLoopbackMode",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "socketId"
          },
          {
            "type": "boolean",
            "optional": false,
            "name": "enabled"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "integer",
                "optional": false,
                "name": "result"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "getJoinedGroups",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "socketId"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "array",
                "items": {
                  "type": "string"
                },
                "optional": false,
                "name": "groups"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "secure",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "socketId"
          },
          {
            "$ref": "SecureOptions",
            "optional": true,
            "name": "options"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "integer",
                "optional": false,
                "name": "result"
              }
            ]
          }
        ],
        "static": true
      }
    ],
    "namespace": "socket",
    "dependencies": [
      "permission:socket"
    ]
  },
  {
    "types": [
      {
        "id": "SocketProperties",
        "type": "object",
        "properties": {
          "persistent": {
            "type": "boolean",
            "nullable": true
          },
          "name": {
            "type": "string",
            "nullable": true
          },
          "bufferSize": {
            "type": "integer",
            "nullable": true
          }
        }
      },
      {
        "id": "CreateInfo",
        "type": "object",
        "properties": {
          "socketId": {
            "type": "integer"
          }
        }
      },
      {
        "id": "SendInfo",
        "type": "object",
        "properties": {
          "resultCode": {
            "type": "integer"
          },
          "bytesSent": {
            "type": "integer",
            "nullable": true
          }
        }
      },
      {
        "id": "TLSVersionConstraints",
        "type": "object",
        "properties": {
          "min": {
            "type": "string",
            "nullable": true
          },
          "max": {
            "type": "string",
            "nullable": true
          }
        }
      },
      {
        "id": "SecureOptions",
        "type": "object",
        "properties": {
          "tlsVersion": {
            "$ref": "TLSVersionConstraints",
            "nullable": true
          }
        }
      },
      {
        "id": "SocketInfo",
        "type": "object",
        "properties": {
          "socketId": {
            "type": "integer"
          },
          "persistent": {
            "type": "boolean"
          },
          "name": {
            "type": "string",
            "nullable": true
          },
          "bufferSize": {
            "type": "integer",
            "nullable": true
          },
          "paused": {
            "type": "boolean"
          },
          "connected": {
            "type": "boolean"
          },
          "localAddress": {
            "type": "string",
            "nullable": true
          },
          "localPort": {
            "type": "integer",
            "nullable": true
          },
          "peerAddress": {
            "type": "string",
            "nullable": true
          },
          "peerPort": {
            "type": "integer",
            "nullable": true
          }
        }
      },
      {
        "id": "ReceiveInfo",
        "type": "object",
        "properties": {
          "socketId": {
            "type": "integer"
          },
          "data": {
            "$ref": "ArrayBuffer"
          }
        }
      },
      {
        "id": "ReceiveErrorInfo",
        "type": "object",
        "properties": {
          "socketId": {
            "type": "integer"
          },
          "resultCode": {
            "type": "integer"
          }
        }
      }
    ],
    "functions": [
      {
        "name": "create",
        "type": "function",
        "parameters": [
          {
            "$ref": "SocketProperties",
            "optional": true,
            "name": "properties"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "$ref": "CreateInfo",
                "optional": false,
                "name": "createInfo"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "update",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "socketId"
          },
          {
            "$ref": "SocketProperties",
            "optional": false,
            "name": "properties"
          },
          {
            "optional": true,
            "name": "callback",
            "type": "function",
            "parameters": []
          }
        ],
        "static": true
      },
      {
        "name": "setPaused",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "socketId"
          },
          {
            "type": "boolean",
            "optional": false,
            "name": "paused"
          },
          {
            "optional": true,
            "name": "callback",
            "type": "function",
            "parameters": []
          }
        ],
        "static": true
      },
      {
        "name": "setKeepAlive",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "socketId"
          },
          {
            "type": "boolean",
            "optional": false,
            "name": "enable"
          },
          {
            "type": "integer",
            "optional": true,
            "name": "delay"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "integer",
                "optional": false,
                "name": "result"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "setNoDelay",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "socketId"
          },
          {
            "type": "boolean",
            "optional": false,
            "name": "noDelay"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "integer",
                "optional": false,
                "name": "result"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "connect",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "socketId"
          },
          {
            "type": "string",
            "optional": false,
            "name": "peerAddress"
          },
          {
            "type": "integer",
            "optional": false,
            "name": "peerPort"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "integer",
                "optional": false,
                "name": "result"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "disconnect",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "socketId"
          },
          {
            "optional": true,
            "name": "callback",
            "type": "function",
            "parameters": []
          }
        ],
        "static": true
      },
      {
        "name": "secure",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "socketId"
          },
          {
            "$ref": "SecureOptions",
            "optional": true,
            "name": "options"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "integer",
                "optional": false,
                "name": "result"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "send",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "socketId"
          },
          {
            "$ref": "ArrayBuffer",
            "optional": false,
            "name": "data"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "$ref": "SendInfo",
                "optional": false,
                "name": "sendInfo"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "close",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "socketId"
          },
          {
            "optional": true,
            "name": "callback",
            "type": "function",
            "parameters": []
          }
        ],
        "static": true
      },
      {
        "name": "getInfo",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "socketId"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "$ref": "SocketInfo",
                "optional": false,
                "name": "socketInfo"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "getSockets",
        "type": "function",
        "parameters": [
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "array",
                "items": {
                  "$ref": "SocketInfo"
                },
                "optional": false,
                "name": "socketInfos"
              }
            ]
          }
        ],
        "static": true
      }
    ],
    "events": [
      {
        "name": "onReceive",
        "type": "function",
        "parameters": [
          {
            "$ref": "ReceiveInfo",
            "optional": false,
            "name": "info"
          }
        ]
      },
      {
        "name": "onReceiveError",
        "type": "function",
        "parameters": [
          {
            "$ref": "ReceiveErrorInfo",
            "optional": false,
            "name": "info"
          }
        ]
      }
    ],
    "namespace": "sockets.tcp",
    "dependencies": [
      "manifest:sockets"
    ]
  },
  {
    "types": [
      {
        "id": "SocketProperties",
        "type": "object",
        "properties": {
          "persistent": {
            "type": "boolean",
            "nullable": true
          },
          "name": {
            "type": "string",
            "nullable": true
          }
        }
      },
      {
        "id": "CreateInfo",
        "type": "object",
        "properties": {
          "socketId": {
            "type": "integer"
          }
        }
      },
      {
        "id": "SocketInfo",
        "type": "object",
        "properties": {
          "socketId": {
            "type": "integer"
          },
          "persistent": {
            "type": "boolean"
          },
          "name": {
            "type": "string",
            "nullable": true
          },
          "paused": {
            "type": "boolean"
          },
          "localAddress": {
            "type": "string",
            "nullable": true
          },
          "localPort": {
            "type": "integer",
            "nullable": true
          }
        }
      },
      {
        "id": "AcceptInfo",
        "type": "object",
        "properties": {
          "socketId": {
            "type": "integer"
          },
          "clientSocketId": {
            "type": "integer"
          }
        }
      },
      {
        "id": "AcceptErrorInfo",
        "type": "object",
        "properties": {
          "socketId": {
            "type": "integer"
          },
          "resultCode": {
            "type": "integer"
          }
        }
      }
    ],
    "functions": [
      {
        "name": "create",
        "type": "function",
        "parameters": [
          {
            "$ref": "SocketProperties",
            "optional": true,
            "name": "properties"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "$ref": "CreateInfo",
                "optional": false,
                "name": "createInfo"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "update",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "socketId"
          },
          {
            "$ref": "SocketProperties",
            "optional": false,
            "name": "properties"
          },
          {
            "optional": true,
            "name": "callback",
            "type": "function",
            "parameters": []
          }
        ],
        "static": true
      },
      {
        "name": "setPaused",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "socketId"
          },
          {
            "type": "boolean",
            "optional": false,
            "name": "paused"
          },
          {
            "optional": true,
            "name": "callback",
            "type": "function",
            "parameters": []
          }
        ],
        "static": true
      },
      {
        "name": "listen",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "socketId"
          },
          {
            "type": "string",
            "optional": false,
            "name": "address"
          },
          {
            "type": "integer",
            "optional": false,
            "name": "port"
          },
          {
            "type": "integer",
            "optional": true,
            "name": "backlog"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "integer",
                "optional": false,
                "name": "result"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "disconnect",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "socketId"
          },
          {
            "optional": true,
            "name": "callback",
            "type": "function",
            "parameters": []
          }
        ],
        "static": true
      },
      {
        "name": "close",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "socketId"
          },
          {
            "optional": true,
            "name": "callback",
            "type": "function",
            "parameters": []
          }
        ],
        "static": true
      },
      {
        "name": "getInfo",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "socketId"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "$ref": "SocketInfo",
                "optional": false,
                "name": "socketInfo"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "getSockets",
        "type": "function",
        "parameters": [
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "array",
                "items": {
                  "$ref": "SocketInfo"
                },
                "optional": false,
                "name": "socketInfos"
              }
            ]
          }
        ],
        "static": true
      }
    ],
    "events": [
      {
        "name": "onAccept",
        "type": "function",
        "parameters": [
          {
            "$ref": "AcceptInfo",
            "optional": false,
            "name": "info"
          }
        ]
      },
      {
        "name": "onAcceptError",
        "type": "function",
        "parameters": [
          {
            "$ref": "AcceptErrorInfo",
            "optional": false,
            "name": "info"
          }
        ]
      }
    ],
    "namespace": "sockets.tcpServer",
    "dependencies": [
      "manifest:sockets"
    ]
  },
  {
    "types": [
      {
        "id": "SocketProperties",
        "type": "object",
        "properties": {
          "persistent": {
            "type": "boolean",
            "nullable": true
          },
          "name": {
            "type": "string",
            "nullable": true
          },
          "bufferSize": {
            "type": "integer",
            "nullable": true
          }
        }
      },
      {
        "id": "CreateInfo",
        "type": "object",
        "properties": {
          "socketId": {
            "type": "integer"
          }
        }
      },
      {
        "id": "SendInfo",
        "type": "object",
        "properties": {
          "resultCode": {
            "type": "integer"
          },
          "bytesSent": {
            "type": "integer",
            "nullable": true
          }
        }
      },
      {
        "id": "SocketInfo",
        "type": "object",
        "properties": {
          "socketId": {
            "type": "integer"
          },
          "persistent": {
            "type": "boolean"
          },
          "name": {
            "type": "string",
            "nullable": true
          },
          "bufferSize": {
            "type": "integer",
            "nullable": true
          },
          "paused": {
            "type": "boolean"
          },
          "localAddress": {
            "type": "string",
            "nullable": true
          },
          "localPort": {
            "type": "integer",
            "nullable": true
          }
        }
      },
      {
        "id": "ReceiveInfo",
        "type": "object",
        "properties": {
          "socketId": {
            "type": "integer"
          },
          "data": {
            "$ref": "ArrayBuffer"
          },
          "remoteAddress": {
            "type": "string"
          },
          "remotePort": {
            "type": "integer"
          }
        }
      },
      {
        "id": "ReceiveErrorInfo",
        "type": "object",
        "properties": {
          "socketId": {
            "type": "integer"
          },
          "resultCode": {
            "type": "integer"
          }
        }
      }
    ],
    "functions": [
      {
        "name": "create",
        "type": "function",
        "parameters": [
          {
            "$ref": "SocketProperties",
            "optional": true,
            "name": "properties"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "$ref": "CreateInfo",
                "optional": false,
                "name": "createInfo"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "update",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "socketId"
          },
          {
            "$ref": "SocketProperties",
            "optional": false,
            "name": "properties"
          },
          {
            "optional": true,
            "name": "callback",
            "type": "function",
            "parameters": []
          }
        ],
        "static": true
      },
      {
        "name": "setPaused",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "socketId"
          },
          {
            "type": "boolean",
            "optional": false,
            "name": "paused"
          },
          {
            "optional": true,
            "name": "callback",
            "type": "function",
            "parameters": []
          }
        ],
        "static": true
      },
      {
        "name": "bind",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "socketId"
          },
          {
            "type": "string",
            "optional": false,
            "name": "address"
          },
          {
            "type": "integer",
            "optional": false,
            "name": "port"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "integer",
                "optional": false,
                "name": "result"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "send",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "socketId"
          },
          {
            "$ref": "ArrayBuffer",
            "optional": false,
            "name": "data"
          },
          {
            "type": "string",
            "optional": false,
            "name": "address"
          },
          {
            "type": "integer",
            "optional": false,
            "name": "port"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "$ref": "SendInfo",
                "optional": false,
                "name": "sendInfo"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "close",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "socketId"
          },
          {
            "optional": true,
            "name": "callback",
            "type": "function",
            "parameters": []
          }
        ],
        "static": true
      },
      {
        "name": "getInfo",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "socketId"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "$ref": "SocketInfo",
                "optional": false,
                "name": "socketInfo"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "getSockets",
        "type": "function",
        "parameters": [
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "array",
                "items": {
                  "$ref": "SocketInfo"
                },
                "optional": false,
                "name": "socketInfos"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "joinGroup",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "socketId"
          },
          {
            "type": "string",
            "optional": false,
            "name": "address"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "integer",
                "optional": false,
                "name": "result"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "leaveGroup",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "socketId"
          },
          {
            "type": "string",
            "optional": false,
            "name": "address"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "integer",
                "optional": false,
                "name": "result"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "setMulticastTimeToLive",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "socketId"
          },
          {
            "type": "integer",
            "optional": false,
            "name": "ttl"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "integer",
                "optional": false,
                "name": "result"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "setMulticastLoopbackMode",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "socketId"
          },
          {
            "type": "boolean",
            "optional": false,
            "name": "enabled"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "integer",
                "optional": false,
                "name": "result"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "getJoinedGroups",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "socketId"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "array",
                "items": {
                  "type": "string"
                },
                "optional": false,
                "name": "groups"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "setBroadcast",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "socketId"
          },
          {
            "type": "boolean",
            "optional": false,
            "name": "enabled"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "integer",
                "optional": false,
                "name": "result"
              }
            ]
          }
        ],
        "static": true
      }
    ],
    "events": [
      {
        "name": "onReceive",
        "type": "function",
        "parameters": [
          {
            "$ref": "ReceiveInfo",
            "optional": false,
            "name": "info"
          }
        ]
      },
      {
        "name": "onReceiveError",
        "type": "function",
        "parameters": [
          {
            "$ref": "ReceiveErrorInfo",
            "optional": false,
            "name": "info"
          }
        ]
      }
    ],
    "namespace": "sockets.udp",
    "dependencies": [
      "manifest:sockets"
    ]
  },
  {
    "namespace": "storage",
    "description": "Use the <code>chrome.storage</code> API to store, retrieve, and track changes to user data.",
    "unprivileged": true,
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
        "js_module": "StorageArea",
        "functions": [
          {
            "name": "get",
            "type": "function",
            "description": "Gets one or more items from storage.",
            "parameters": [
              {
                "name": "keys",
                "choices": [
                  {
                    "type": "string"
                  },
                  {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  },
                  {
                    "type": "object",
                    "description": "Storage items to return in the callback, where the values are replaced with those from storage if they exist.",
                    "additionalProperties": {
                      "type": "any"
                    }
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
                    "additionalProperties": {
                      "type": "any"
                    },
                    "description": "Object with items in their key-value mappings."
                  }
                ]
              }
            ]
          },
          {
            "name": "getBytesInUse",
            "type": "function",
            "description": "Gets the amount of space (in bytes) being used by one or more items.",
            "parameters": [
              {
                "name": "keys",
                "choices": [
                  {
                    "type": "string"
                  },
                  {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  }
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
            "parameters": [
              {
                "name": "items",
                "type": "object",
                "additionalProperties": {
                  "type": "any"
                },
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
            "parameters": [
              {
                "name": "keys",
                "choices": [
                  {
                    "type": "string"
                  },
                  {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  }
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
            "additionalProperties": {
              "$ref": "StorageChange"
            },
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
        "$ref": "StorageArea",
        "description": "Items in the <code>sync</code> storage area are synced using Chrome Sync.",
        "value": [
          "sync"
        ],
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
        "value": [
          "local"
        ],
        "properties": {
          "QUOTA_BYTES": {
            "value": 5242880,
            "description": "The maximum amount (in bytes) of data that can be stored in local storage, as measured by the JSON stringification of every value plus every key's length. This value will be ignored if the extension has the <code>unlimitedStorage</code> permission. Updates that would cause this limit to be exceeded fail immediately and set $(ref:runtime.lastError)."
          }
        }
      },
      "managed": {
        "$ref": "StorageArea",
        "description": "Items in the <code>managed</code> storage area are set by the domain administrator, and are read-only for the extension; trying to modify this namespace results in an error.",
        "value": [
          "managed"
        ]
      }
    },
    "content_script": true,
    "dependencies": [
      "permission:storage"
    ]
  },
  {
    "types": [
      {
        "id": "SyncAction",
        "type": "string",
        "enum": [
          "added",
          "updated",
          "deleted"
        ]
      },
      {
        "id": "ServiceStatus",
        "type": "string",
        "enum": [
          "initializing",
          "running",
          "authentication_required",
          "temporary_unavailable",
          "disabled"
        ]
      },
      {
        "id": "FileStatus",
        "type": "string",
        "enum": [
          "synced",
          "pending",
          "conflicting"
        ]
      },
      {
        "id": "SyncDirection",
        "type": "string",
        "enum": [
          "local_to_remote",
          "remote_to_local"
        ]
      },
      {
        "id": "ConflictResolutionPolicy",
        "type": "string",
        "enum": [
          "last_write_win",
          "manual"
        ]
      },
      {
        "id": "FileInfo",
        "type": "object",
        "properties": {
          "fileEntry": {
            "type": "object"
          },
          "status": {
            "$ref": "FileStatus"
          },
          "action": {
            "$ref": "SyncAction",
            "nullable": true
          },
          "direction": {
            "$ref": "SyncDirection",
            "nullable": true
          }
        }
      },
      {
        "id": "FileStatusInfo",
        "type": "object",
        "properties": {
          "fileEntry": {
            "type": "object"
          },
          "status": {
            "$ref": "FileStatus"
          },
          "error": {
            "type": "string",
            "nullable": true
          }
        }
      },
      {
        "id": "StorageInfo",
        "type": "object",
        "properties": {
          "usageBytes": {
            "type": "integer"
          },
          "quotaBytes": {
            "type": "integer"
          }
        }
      },
      {
        "id": "ServiceInfo",
        "type": "object",
        "properties": {
          "state": {
            "$ref": "ServiceStatus"
          },
          "description": {
            "type": "string"
          }
        }
      }
    ],
    "functions": [
      {
        "name": "requestFileSystem",
        "type": "function",
        "parameters": [
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "object",
                "optional": false,
                "name": "fileSystem"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "setConflictResolutionPolicy",
        "type": "function",
        "parameters": [
          {
            "$ref": "ConflictResolutionPolicy",
            "optional": false,
            "name": "policy"
          },
          {
            "optional": true,
            "name": "callback",
            "type": "function",
            "parameters": []
          }
        ],
        "static": true
      },
      {
        "name": "getConflictResolutionPolicy",
        "type": "function",
        "parameters": [
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "$ref": "ConflictResolutionPolicy",
                "optional": false,
                "name": "policy"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "getUsageAndQuota",
        "type": "function",
        "parameters": [
          {
            "type": "object",
            "optional": false,
            "name": "fileSystem"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "$ref": "StorageInfo",
                "optional": false,
                "name": "info"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "getFileStatus",
        "type": "function",
        "parameters": [
          {
            "type": "object",
            "optional": false,
            "name": "fileEntry"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "$ref": "FileStatus",
                "optional": false,
                "name": "status"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "getFileStatuses",
        "type": "function",
        "parameters": [
          {
            "type": "array",
            "items": {
              "type": "object"
            },
            "optional": false,
            "name": "fileEntries"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "array",
                "items": {
                  "$ref": "FileStatusInfo"
                },
                "optional": false,
                "name": "status"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "getServiceStatus",
        "type": "function",
        "parameters": [
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "$ref": "ServiceStatus",
                "optional": false,
                "name": "status"
              }
            ]
          }
        ],
        "static": true
      }
    ],
    "events": [
      {
        "name": "onServiceStatusChanged",
        "type": "function",
        "parameters": [
          {
            "$ref": "ServiceInfo",
            "optional": false,
            "name": "detail"
          }
        ]
      },
      {
        "name": "onFileStatusChanged",
        "type": "function",
        "parameters": [
          {
            "$ref": "FileInfo",
            "optional": false,
            "name": "detail"
          }
        ]
      }
    ],
    "namespace": "syncFileSystem",
    "dependencies": [
      "permission:syncFileSystem"
    ]
  },
  {
    "types": [
      {
        "id": "CpuTime",
        "type": "object",
        "properties": {
          "user": {
            "type": "number"
          },
          "kernel": {
            "type": "number"
          },
          "idle": {
            "type": "number"
          },
          "total": {
            "type": "number"
          }
        }
      },
      {
        "id": "ProcessorInfo",
        "type": "object",
        "properties": {
          "usage": {
            "$ref": "CpuTime"
          }
        }
      },
      {
        "id": "CpuInfo",
        "type": "object",
        "properties": {
          "numOfProcessors": {
            "type": "integer"
          },
          "archName": {
            "type": "string"
          },
          "modelName": {
            "type": "string"
          },
          "features": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "processors": {
            "type": "array",
            "items": {
              "$ref": "ProcessorInfo"
            }
          }
        }
      }
    ],
    "functions": [
      {
        "name": "getInfo",
        "type": "function",
        "parameters": [
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "$ref": "CpuInfo",
                "optional": false,
                "name": "info"
              }
            ]
          }
        ],
        "static": true
      }
    ],
    "namespace": "system.cpu",
    "dependencies": [
      "permission:system.cpu"
    ]
  },
  {
    "types": [
      {
        "id": "Bounds",
        "type": "object",
        "properties": {
          "left": {
            "type": "integer"
          },
          "top": {
            "type": "integer"
          },
          "width": {
            "type": "integer"
          },
          "height": {
            "type": "integer"
          }
        }
      },
      {
        "id": "Insets",
        "type": "object",
        "properties": {
          "left": {
            "type": "integer"
          },
          "top": {
            "type": "integer"
          },
          "right": {
            "type": "integer"
          },
          "bottom": {
            "type": "integer"
          }
        }
      },
      {
        "id": "DisplayMode",
        "type": "object",
        "properties": {
          "width": {
            "type": "integer"
          },
          "height": {
            "type": "integer"
          },
          "widthInNativePixels": {
            "type": "integer"
          },
          "heightInNativePixels": {
            "type": "integer"
          },
          "uiScale": {
            "type": "number"
          },
          "deviceScaleFactor": {
            "type": "number"
          },
          "isNative": {
            "type": "boolean"
          },
          "isSelected": {
            "type": "boolean"
          }
        }
      },
      {
        "id": "LayoutPosition",
        "type": "string",
        "enum": [
          "top",
          "right",
          "bottom",
          "left"
        ]
      },
      {
        "id": "DisplayLayout",
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "parentId": {
            "type": "string"
          },
          "position": {
            "$ref": "LayoutPosition"
          },
          "offset": {
            "type": "integer"
          }
        }
      },
      {
        "id": "DisplayUnitInfo",
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "mirroringSourceId": {
            "type": "string"
          },
          "isPrimary": {
            "type": "boolean"
          },
          "isInternal": {
            "type": "boolean"
          },
          "isEnabled": {
            "type": "boolean"
          },
          "dpiX": {
            "type": "number"
          },
          "dpiY": {
            "type": "number"
          },
          "rotation": {
            "type": "integer"
          },
          "bounds": {
            "$ref": "Bounds"
          },
          "overscan": {
            "$ref": "Insets"
          },
          "workArea": {
            "$ref": "Bounds"
          },
          "modes": {
            "type": "array",
            "items": {
              "$ref": "DisplayMode"
            }
          }
        }
      },
      {
        "id": "DisplayProperties",
        "type": "object",
        "properties": {
          "mirroringSourceId": {
            "type": "string",
            "nullable": true
          },
          "isPrimary": {
            "type": "boolean",
            "nullable": true
          },
          "overscan": {
            "$ref": "Insets",
            "nullable": true
          },
          "rotation": {
            "type": "integer",
            "nullable": true
          },
          "boundsOriginX": {
            "type": "integer",
            "nullable": true
          },
          "boundsOriginY": {
            "type": "integer",
            "nullable": true
          },
          "displayMode": {
            "$ref": "DisplayMode",
            "nullable": true
          }
        }
      }
    ],
    "functions": [
      {
        "name": "getInfo",
        "type": "function",
        "parameters": [
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "array",
                "items": {
                  "$ref": "DisplayUnitInfo"
                },
                "optional": false,
                "name": "displayInfo"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "getDisplayLayout",
        "type": "function",
        "parameters": [
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "array",
                "items": {
                  "$ref": "DisplayLayout"
                },
                "optional": false,
                "name": "layouts"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "setDisplayProperties",
        "type": "function",
        "parameters": [
          {
            "type": "string",
            "optional": false,
            "name": "id"
          },
          {
            "$ref": "DisplayProperties",
            "optional": false,
            "name": "info"
          },
          {
            "optional": true,
            "name": "callback",
            "type": "function",
            "parameters": []
          }
        ],
        "static": true
      },
      {
        "name": "setDisplayLayout",
        "type": "function",
        "parameters": [
          {
            "type": "array",
            "items": {
              "$ref": "DisplayLayout"
            },
            "optional": false,
            "name": "layouts"
          },
          {
            "optional": true,
            "name": "callback",
            "type": "function",
            "parameters": []
          }
        ],
        "static": true
      },
      {
        "name": "enableUnifiedDesktop",
        "type": "function",
        "parameters": [
          {
            "type": "boolean",
            "optional": false,
            "name": "enabled"
          }
        ],
        "static": true
      },
      {
        "name": "overscanCalibrationStart",
        "type": "function",
        "parameters": [
          {
            "type": "string",
            "optional": false,
            "name": "id"
          }
        ],
        "static": true
      },
      {
        "name": "overscanCalibrationAdjust",
        "type": "function",
        "parameters": [
          {
            "type": "string",
            "optional": false,
            "name": "id"
          },
          {
            "$ref": "Insets",
            "optional": false,
            "name": "delta"
          }
        ],
        "static": true
      },
      {
        "name": "overscanCalibrationReset",
        "type": "function",
        "parameters": [
          {
            "type": "string",
            "optional": false,
            "name": "id"
          }
        ],
        "static": true
      },
      {
        "name": "overscanCalibrationComplete",
        "type": "function",
        "parameters": [
          {
            "type": "string",
            "optional": false,
            "name": "id"
          }
        ],
        "static": true
      }
    ],
    "events": [
      {
        "name": "onDisplayChanged",
        "type": "function"
      }
    ],
    "namespace": "system.display"
  },
  {
    "types": [
      {
        "id": "MemoryInfo",
        "type": "object",
        "properties": {
          "capacity": {
            "type": "number"
          },
          "availableCapacity": {
            "type": "number"
          }
        }
      }
    ],
    "functions": [
      {
        "name": "getInfo",
        "type": "function",
        "parameters": [
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "$ref": "MemoryInfo",
                "optional": false,
                "name": "info"
              }
            ]
          }
        ],
        "static": true
      }
    ],
    "namespace": "system.memory",
    "dependencies": [
      "permission:system.memory"
    ]
  },
  {
    "types": [
      {
        "id": "NetworkInterface",
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "address": {
            "type": "string"
          },
          "prefixLength": {
            "type": "integer"
          }
        }
      }
    ],
    "functions": [
      {
        "name": "getNetworkInterfaces",
        "type": "function",
        "parameters": [
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "array",
                "items": {
                  "$ref": "NetworkInterface"
                },
                "optional": false,
                "name": "networkInterfaces"
              }
            ]
          }
        ],
        "static": true
      }
    ],
    "namespace": "system.network",
    "dependencies": [
      "permission:system.network"
    ]
  },
  {
    "types": [
      {
        "id": "StorageUnitType",
        "type": "string",
        "enum": [
          "fixed",
          "removable",
          "unknown"
        ]
      },
      {
        "id": "StorageUnitInfo",
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "type": {
            "$ref": "StorageUnitType"
          },
          "capacity": {
            "type": "number"
          }
        }
      },
      {
        "id": "StorageAvailableCapacityInfo",
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "availableCapacity": {
            "type": "number"
          }
        }
      },
      {
        "id": "EjectDeviceResultCode",
        "type": "string",
        "enum": [
          "success",
          "in_use",
          "no_such_device",
          "failure"
        ]
      }
    ],
    "functions": [
      {
        "name": "getInfo",
        "type": "function",
        "parameters": [
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "array",
                "items": {
                  "$ref": "StorageUnitInfo"
                },
                "optional": false,
                "name": "info"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "ejectDevice",
        "type": "function",
        "parameters": [
          {
            "type": "string",
            "optional": false,
            "name": "id"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "$ref": "EjectDeviceResultCode",
                "optional": false,
                "name": "result"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "getAvailableCapacity",
        "type": "function",
        "parameters": [
          {
            "type": "string",
            "optional": false,
            "name": "id"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "$ref": "StorageAvailableCapacityInfo",
                "optional": false,
                "name": "info"
              }
            ]
          }
        ],
        "static": true
      }
    ],
    "events": [
      {
        "name": "onAttached",
        "type": "function",
        "parameters": [
          {
            "$ref": "StorageUnitInfo",
            "optional": false,
            "name": "info"
          }
        ]
      },
      {
        "name": "onDetached",
        "type": "function",
        "parameters": [
          {
            "type": "string",
            "optional": false,
            "name": "id"
          }
        ]
      }
    ],
    "namespace": "system.storage",
    "dependencies": [
      "permission:system.storage"
    ]
  },
  {
    "namespace": "tts",
    "description": "Use the <code>chrome.tts</code> API to play synthesized text-to-speech (TTS). See also the related <a href='http://developer.chrome.com/extensions/ttsEngine'>ttsEngine</a> API, which allows an extension to implement a speech engine.",
    "types": [
      {
        "id": "EventType",
        "type": "string",
        "enum": [
          "start",
          "end",
          "word",
          "sentence",
          "marker",
          "interrupted",
          "cancelled",
          "error",
          "pause",
          "resume"
        ]
      },
      {
        "id": "VoiceGender",
        "type": "string",
        "enum": [
          "male",
          "female"
        ]
      },
      {
        "id": "TtsEvent",
        "type": "object",
        "description": "An event from the TTS engine to communicate the status of an utterance.",
        "properties": {
          "type": {
            "$ref": "EventType",
            "description": "The type can be 'start' as soon as speech has started, 'word' when a word boundary is reached, 'sentence' when a sentence boundary is reached, 'marker' when an SSML mark element is reached, 'end' when the end of the utterance is reached, 'interrupted' when the utterance is stopped or interrupted before reaching the end, 'cancelled' when it's removed from the queue before ever being synthesized, or 'error' when any other error occurs. When pausing speech, a 'pause' event is fired if a particular utterance is paused in the middle, and 'resume' if an utterance resumes speech. Note that pause and resume events may not fire if speech is paused in-between utterances."
          },
          "charIndex": {
            "type": "number",
            "optional": true,
            "description": "The index of the current character in the utterance."
          },
          "errorMessage": {
            "type": "string",
            "description": "The error description, if the event type is 'error'.",
            "optional": true
          },
          "srcId": {
            "type": "number",
            "description": "An ID unique to the calling function's context so that events can get routed back to the correct tts.speak call.",
            "nodoc": true,
            "optional": true
          },
          "isFinalEvent": {
            "type": "boolean",
            "description": "True if this is the final event that will be sent to this handler.",
            "nodoc": true,
            "optional": true
          }
        }
      },
      {
        "id": "TtsVoice",
        "type": "object",
        "description": "A description of a voice available for speech synthesis.",
        "properties": {
          "voiceName": {
            "type": "string",
            "optional": true,
            "description": "The name of the voice."
          },
          "lang": {
            "type": "string",
            "optional": true,
            "description": "The language that this voice supports, in the form <em>language</em>-<em>region</em>. Examples: 'en', 'en-US', 'en-GB', 'zh-CN'."
          },
          "gender": {
            "$ref": "VoiceGender",
            "optional": true,
            "description": "This voice's gender."
          },
          "remote": {
            "type": "boolean",
            "optional": true,
            "description": "If true, the synthesis engine is a remote network resource. It may be higher latency and may incur bandwidth costs."
          },
          "extensionId": {
            "type": "string",
            "optional": true,
            "description": "The ID of the extension providing this voice."
          },
          "eventTypes": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "optional": true,
            "description": "All of the callback event types that this voice is capable of sending."
          }
        }
      }
    ],
    "functions": [
      {
        "name": "speak",
        "type": "function",
        "description": "Speaks text using a text-to-speech engine.",
        "parameters": [
          {
            "type": "string",
            "name": "utterance",
            "description": "The text to speak, either plain text or a complete, well-formed SSML document. Speech engines that do not support SSML will strip away the tags and speak the text. The maximum length of the text is 32,768 characters."
          },
          {
            "type": "object",
            "name": "options",
            "optional": true,
            "description": "The speech options.",
            "properties": {
              "enqueue": {
                "type": "boolean",
                "optional": true,
                "description": "If true, enqueues this utterance if TTS is already in progress. If false (the default), interrupts any current speech and flushes the speech queue before speaking this new utterance."
              },
              "voiceName": {
                "type": "string",
                "optional": true,
                "description": "The name of the voice to use for synthesis. If empty, uses any available voice."
              },
              "extensionId": {
                "type": "string",
                "optional": true,
                "description": "The extension ID of the speech engine to use, if known."
              },
              "lang": {
                "type": "string",
                "optional": true,
                "description": "The language to be used for synthesis, in the form <em>language</em>-<em>region</em>. Examples: 'en', 'en-US', 'en-GB', 'zh-CN'."
              },
              "gender": {
                "$ref": "VoiceGender",
                "optional": true,
                "description": "Gender of voice for synthesized speech."
              },
              "rate": {
                "type": "number",
                "optional": true,
                "minimum": 0.1,
                "maximum": 10,
                "description": "Speaking rate relative to the default rate for this voice. 1.0 is the default rate, normally around 180 to 220 words per minute. 2.0 is twice as fast, and 0.5 is half as fast. Values below 0.1 or above 10.0 are strictly disallowed, but many voices will constrain the minimum and maximum rates further&mdash;for example a particular voice may not actually speak faster than 3 times normal even if you specify a value larger than 3.0."
              },
              "pitch": {
                "type": "number",
                "optional": true,
                "minimum": 0,
                "maximum": 2,
                "description": "Speaking pitch between 0 and 2 inclusive, with 0 being lowest and 2 being highest. 1.0 corresponds to a voice's default pitch."
              },
              "volume": {
                "type": "number",
                "optional": true,
                "minimum": 0,
                "maximum": 1,
                "description": "Speaking volume between 0 and 1 inclusive, with 0 being lowest and 1 being highest, with a default of 1.0."
              },
              "requiredEventTypes": {
                "type": "array",
                "items": {
                  "type": "string"
                },
                "optional": true,
                "description": "The TTS event types the voice must support."
              },
              "desiredEventTypes": {
                "type": "array",
                "items": {
                  "type": "string"
                },
                "optional": true,
                "description": "The TTS event types that you are interested in listening to. If missing, all event types may be sent."
              },
              "onEvent": {
                "type": "function",
                "optional": true,
                "description": "This function is called with events that occur in the process of speaking the utterance.",
                "parameters": [
                  {
                    "name": "event",
                    "$ref": "TtsEvent",
                    "description": "The update event from the text-to-speech engine indicating the status of this utterance."
                  }
                ]
              }
            }
          },
          {
            "type": "function",
            "name": "callback",
            "optional": true,
            "description": "Called right away, before speech finishes. Check chrome.runtime.lastError to make sure there were no errors. Use options.onEvent to get more detailed feedback.",
            "parameters": []
          }
        ]
      },
      {
        "name": "stop",
        "type": "function",
        "description": "Stops any current speech and flushes the queue of any pending utterances. In addition, if speech was paused, it will now be un-paused for the next call to speak.",
        "parameters": []
      },
      {
        "name": "pause",
        "type": "function",
        "description": "Pauses speech synthesis, potentially in the middle of an utterance. A call to resume or stop will un-pause speech.",
        "parameters": []
      },
      {
        "name": "resume",
        "type": "function",
        "description": "If speech was paused, resumes speaking where it left off.",
        "parameters": []
      },
      {
        "name": "isSpeaking",
        "type": "function",
        "description": "Checks whether the engine is currently speaking. On Mac OS X, the result is true whenever the system speech engine is speaking, even if the speech wasn't initiated by Chrome.",
        "parameters": [
          {
            "type": "function",
            "name": "callback",
            "optional": true,
            "parameters": [
              {
                "name": "speaking",
                "type": "boolean",
                "description": "True if speaking, false otherwise."
              }
            ]
          }
        ]
      },
      {
        "name": "getVoices",
        "type": "function",
        "description": "Gets an array of all available voices.",
        "parameters": [
          {
            "type": "function",
            "name": "callback",
            "optional": true,
            "parameters": [
              {
                "type": "array",
                "name": "voices",
                "items": {
                  "$ref": "TtsVoice"
                },
                "description": "Array of $(ref:tts.TtsVoice) objects representing the available voices for speech synthesis."
              }
            ]
          }
        ]
      }
    ],
    "events": [
      {
        "name": "onEvent",
        "type": "function",
        "nodoc": true,
        "parameters": [
          {
            "name": "event",
            "$ref": "TtsEvent",
            "description": "The event from the text-to-speech engine indicating the status of this utterance."
          }
        ],
        "description": "Used to pass events back to the function calling speak()."
      }
    ],
    "dependencies": [
      "permission:tts"
    ]
  },
  {
    "namespace": "types",
    "description": "The <code>chrome.types</code> API contains type declarations for Chrome.",
    "types": [
      {
        "id": "ChromeSettingScope",
        "type": "string",
        "enum": [
          "regular",
          "regular_only",
          "incognito_persistent",
          "incognito_session_only"
        ],
        "description": "The scope of the ChromeSetting. One of<ul><li><var>regular</var>: setting for the regular profile (which is inherited by the incognito profile if not overridden elsewhere),</li><li><var>regular_only</var>: setting for the regular profile only (not inherited by the incognito profile),</li><li><var>incognito_persistent</var>: setting for the incognito profile that survives browser restarts (overrides regular preferences),</li><li><var>incognito_session_only</var>: setting for the incognito profile that can only be set during an incognito session and is deleted when the incognito session ends (overrides regular and incognito_persistent preferences).</li></ul>"
      },
      {
        "id": "LevelOfControl",
        "type": "string",
        "enum": [
          "not_controllable",
          "controlled_by_other_extensions",
          "controllable_by_this_extension",
          "controlled_by_this_extension"
        ],
        "description": "One of<ul><li><var>not_controllable</var>: cannot be controlled by any extension</li><li><var>controlled_by_other_extensions</var>: controlled by extensions with higher precedence</li><li><var>controllable_by_this_extension</var>: can be controlled by this extension</li><li><var>controlled_by_this_extension</var>: controlled by this extension</li></ul>"
      },
      {
        "id": "ChromeSetting",
        "type": "object",
        "js_module": "ChromeSetting",
        "customBindings": "ChromeSetting",
        "description": "An interface that allows access to a Chrome browser setting. See $(ref:accessibilityFeatures) for an example.",
        "functions": [
          {
            "name": "get",
            "type": "function",
            "nocompile": true,
            "description": "Gets the value of a setting.",
            "parameters": [
              {
                "name": "details",
                "type": "object",
                "description": "Which setting to consider.",
                "properties": {
                  "incognito": {
                    "type": "boolean",
                    "optional": true,
                    "description": "Whether to return the value that applies to the incognito session (default false)."
                  }
                }
              },
              {
                "name": "callback",
                "type": "function",
                "parameters": [
                  {
                    "name": "details",
                    "type": "object",
                    "description": "Details of the currently effective value.",
                    "properties": {
                      "value": {
                        "description": "The value of the setting.",
                        "type": "any"
                      },
                      "levelOfControl": {
                        "$ref": "LevelOfControl",
                        "description": "The level of control of the setting."
                      },
                      "incognitoSpecific": {
                        "description": "Whether the effective value is specific to the incognito session.<br/>This property will <em>only</em> be present if the <var>incognito</var> property in the <var>details</var> parameter of <code>get()</code> was true.",
                        "type": "boolean",
                        "optional": true
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "set",
            "type": "function",
            "nocompile": true,
            "description": "Sets the value of a setting.",
            "parameters": [
              {
                "name": "details",
                "type": "object",
                "description": "Which setting to change.",
                "properties": {
                  "value": {
                    "description": "The value of the setting. <br/>Note that every setting has a specific value type, which is described together with the setting. An extension should <em>not</em> set a value of a different type.",
                    "type": "any"
                  },
                  "scope": {
                    "$ref": "ChromeSettingScope",
                    "optional": true,
                    "description": "Where to set the setting (default: regular)."
                  }
                }
              },
              {
                "name": "callback",
                "type": "function",
                "description": "Called at the completion of the set operation.",
                "optional": true,
                "parameters": []
              }
            ]
          },
          {
            "name": "clear",
            "type": "function",
            "nocompile": true,
            "description": "Clears the setting, restoring any default value.",
            "parameters": [
              {
                "name": "details",
                "type": "object",
                "description": "Which setting to clear.",
                "properties": {
                  "scope": {
                    "$ref": "ChromeSettingScope",
                    "optional": true,
                    "description": "Where to clear the setting (default: regular)."
                  }
                }
              },
              {
                "name": "callback",
                "type": "function",
                "description": "Called at the completion of the clear operation.",
                "optional": true,
                "parameters": []
              }
            ]
          }
        ],
        "events": [
          {
            "name": "onChange",
            "description": "Fired after the setting changes.",
            "parameters": [
              {
                "type": "object",
                "name": "details",
                "properties": {
                  "value": {
                    "description": "The value of the setting after the change.",
                    "type": "any"
                  },
                  "levelOfControl": {
                    "$ref": "LevelOfControl",
                    "description": "The level of control of the setting."
                  },
                  "incognitoSpecific": {
                    "description": "Whether the value that has changed is specific to the incognito session.<br/>This property will <em>only</em> be present if the user has enabled the extension in incognito mode.",
                    "type": "boolean",
                    "optional": true
                  }
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "types": [
      {
        "id": "Direction",
        "type": "string",
        "enum": [
          "in",
          "out"
        ]
      },
      {
        "id": "Recipient",
        "type": "string",
        "enum": [
          "device",
          "_interface",
          "endpoint",
          "other"
        ]
      },
      {
        "id": "RequestType",
        "type": "string",
        "enum": [
          "standard",
          "class",
          "vendor",
          "reserved"
        ]
      },
      {
        "id": "TransferType",
        "type": "string",
        "enum": [
          "control",
          "interrupt",
          "isochronous",
          "bulk"
        ]
      },
      {
        "id": "SynchronizationType",
        "type": "string",
        "enum": [
          "asynchronous",
          "adaptive",
          "synchronous"
        ]
      },
      {
        "id": "UsageType",
        "type": "string",
        "enum": [
          "data",
          "feedback",
          "explicitFeedback",
          "periodic",
          "notification"
        ]
      },
      {
        "id": "Device",
        "type": "object",
        "properties": {
          "device": {
            "type": "integer"
          },
          "vendorId": {
            "type": "integer"
          },
          "productId": {
            "type": "integer"
          },
          "version": {
            "type": "integer"
          },
          "productName": {
            "type": "string"
          },
          "manufacturerName": {
            "type": "string"
          },
          "serialNumber": {
            "type": "string"
          }
        }
      },
      {
        "id": "ConnectionHandle",
        "type": "object",
        "properties": {
          "handle": {
            "type": "integer"
          },
          "vendorId": {
            "type": "integer"
          },
          "productId": {
            "type": "integer"
          }
        }
      },
      {
        "id": "EndpointDescriptor",
        "type": "object",
        "properties": {
          "address": {
            "type": "integer"
          },
          "type": {
            "$ref": "TransferType"
          },
          "direction": {
            "$ref": "Direction"
          },
          "maximumPacketSize": {
            "type": "integer"
          },
          "synchronization": {
            "$ref": "SynchronizationType",
            "nullable": true
          },
          "usage": {
            "$ref": "UsageType",
            "nullable": true
          },
          "pollingInterval": {
            "type": "integer",
            "nullable": true
          },
          "extra_data": {
            "$ref": "ArrayBuffer"
          }
        }
      },
      {
        "id": "InterfaceDescriptor",
        "type": "object",
        "properties": {
          "interfaceNumber": {
            "type": "integer"
          },
          "alternateSetting": {
            "type": "integer"
          },
          "interfaceClass": {
            "type": "integer"
          },
          "interfaceSubclass": {
            "type": "integer"
          },
          "interfaceProtocol": {
            "type": "integer"
          },
          "description": {
            "type": "string",
            "nullable": true
          },
          "endpoints": {
            "type": "array",
            "items": {
              "$ref": "EndpointDescriptor"
            }
          },
          "extra_data": {
            "$ref": "ArrayBuffer"
          }
        }
      },
      {
        "id": "ConfigDescriptor",
        "type": "object",
        "properties": {
          "active": {
            "type": "boolean"
          },
          "configurationValue": {
            "type": "integer"
          },
          "description": {
            "type": "string",
            "nullable": true
          },
          "selfPowered": {
            "type": "boolean"
          },
          "remoteWakeup": {
            "type": "boolean"
          },
          "maxPower": {
            "type": "integer"
          },
          "interfaces": {
            "type": "array",
            "items": {
              "$ref": "InterfaceDescriptor"
            }
          },
          "extra_data": {
            "$ref": "ArrayBuffer"
          }
        }
      },
      {
        "id": "ControlTransferInfo",
        "type": "object",
        "properties": {
          "direction": {
            "$ref": "Direction"
          },
          "recipient": {
            "$ref": "Recipient"
          },
          "requestType": {
            "$ref": "RequestType"
          },
          "request": {
            "type": "integer"
          },
          "value": {
            "type": "integer"
          },
          "index": {
            "type": "integer"
          },
          "length": {
            "type": "integer",
            "nullable": true
          },
          "data": {
            "$ref": "ArrayBuffer",
            "nullable": true
          },
          "timeout": {
            "type": "integer",
            "nullable": true
          }
        }
      },
      {
        "id": "GenericTransferInfo",
        "type": "object",
        "properties": {
          "direction": {
            "$ref": "Direction"
          },
          "endpoint": {
            "type": "integer"
          },
          "length": {
            "type": "integer",
            "nullable": true
          },
          "data": {
            "$ref": "ArrayBuffer",
            "nullable": true
          },
          "timeout": {
            "type": "integer",
            "nullable": true
          }
        }
      },
      {
        "id": "IsochronousTransferInfo",
        "type": "object",
        "properties": {
          "transferInfo": {
            "$ref": "GenericTransferInfo"
          },
          "packets": {
            "type": "integer"
          },
          "packetLength": {
            "type": "integer"
          }
        }
      },
      {
        "id": "TransferResultInfo",
        "type": "object",
        "properties": {
          "resultCode": {
            "type": "integer",
            "nullable": true
          },
          "data": {
            "$ref": "ArrayBuffer",
            "nullable": true
          }
        }
      },
      {
        "id": "DeviceFilter",
        "type": "object",
        "properties": {
          "vendorId": {
            "type": "integer",
            "nullable": true
          },
          "productId": {
            "type": "integer",
            "nullable": true
          },
          "interfaceClass": {
            "type": "integer",
            "nullable": true
          },
          "interfaceSubclass": {
            "type": "integer",
            "nullable": true
          },
          "interfaceProtocol": {
            "type": "integer",
            "nullable": true
          }
        }
      },
      {
        "id": "EnumerateDevicesOptions",
        "type": "object",
        "properties": {
          "vendorId": {
            "type": "integer",
            "nullable": true
          },
          "productId": {
            "type": "integer",
            "nullable": true
          },
          "filters": {
            "type": "array",
            "items": {
              "$ref": "DeviceFilter"
            },
            "nullable": true
          }
        }
      },
      {
        "id": "EnumerateDevicesAndRequestAccessOptions",
        "type": "object",
        "properties": {
          "vendorId": {
            "type": "integer"
          },
          "productId": {
            "type": "integer"
          },
          "interfaceId": {
            "type": "integer",
            "nullable": true
          }
        }
      },
      {
        "id": "DevicePromptOptions",
        "type": "object",
        "properties": {
          "multiple": {
            "type": "boolean",
            "nullable": true
          },
          "filters": {
            "type": "array",
            "items": {
              "$ref": "DeviceFilter"
            },
            "nullable": true
          }
        }
      }
    ],
    "functions": [
      {
        "name": "getDevices",
        "type": "function",
        "parameters": [
          {
            "$ref": "EnumerateDevicesOptions",
            "optional": false,
            "name": "options"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "array",
                "items": {
                  "$ref": "Device"
                },
                "optional": false,
                "name": "devices"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "getUserSelectedDevices",
        "type": "function",
        "parameters": [
          {
            "$ref": "DevicePromptOptions",
            "optional": false,
            "name": "options"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "array",
                "items": {
                  "$ref": "Device"
                },
                "optional": false,
                "name": "devices"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "getConfigurations",
        "type": "function",
        "parameters": [
          {
            "$ref": "Device",
            "optional": false,
            "name": "device"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "array",
                "items": {
                  "$ref": "ConfigDescriptor"
                },
                "optional": false,
                "name": "configs"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "requestAccess",
        "type": "function",
        "parameters": [
          {
            "$ref": "Device",
            "optional": false,
            "name": "device"
          },
          {
            "type": "integer",
            "optional": false,
            "name": "interfaceId"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "boolean",
                "optional": false,
                "name": "success"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "openDevice",
        "type": "function",
        "parameters": [
          {
            "$ref": "Device",
            "optional": false,
            "name": "device"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "$ref": "ConnectionHandle",
                "optional": false,
                "name": "handle"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "findDevices",
        "type": "function",
        "parameters": [
          {
            "$ref": "EnumerateDevicesAndRequestAccessOptions",
            "optional": false,
            "name": "options"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "array",
                "items": {
                  "$ref": "ConnectionHandle"
                },
                "optional": false,
                "name": "handles"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "closeDevice",
        "type": "function",
        "parameters": [
          {
            "$ref": "ConnectionHandle",
            "optional": false,
            "name": "handle"
          },
          {
            "optional": true,
            "name": "callback",
            "type": "function",
            "parameters": []
          }
        ],
        "static": true
      },
      {
        "name": "setConfiguration",
        "type": "function",
        "parameters": [
          {
            "$ref": "ConnectionHandle",
            "optional": false,
            "name": "handle"
          },
          {
            "type": "integer",
            "optional": false,
            "name": "configurationValue"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": []
          }
        ],
        "static": true
      },
      {
        "name": "getConfiguration",
        "type": "function",
        "parameters": [
          {
            "$ref": "ConnectionHandle",
            "optional": false,
            "name": "handle"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "$ref": "ConfigDescriptor",
                "optional": false,
                "name": "config"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "listInterfaces",
        "type": "function",
        "parameters": [
          {
            "$ref": "ConnectionHandle",
            "optional": false,
            "name": "handle"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "array",
                "items": {
                  "$ref": "InterfaceDescriptor"
                },
                "optional": false,
                "name": "descriptors"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "claimInterface",
        "type": "function",
        "parameters": [
          {
            "$ref": "ConnectionHandle",
            "optional": false,
            "name": "handle"
          },
          {
            "type": "integer",
            "optional": false,
            "name": "interfaceNumber"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": []
          }
        ],
        "static": true
      },
      {
        "name": "releaseInterface",
        "type": "function",
        "parameters": [
          {
            "$ref": "ConnectionHandle",
            "optional": false,
            "name": "handle"
          },
          {
            "type": "integer",
            "optional": false,
            "name": "interfaceNumber"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": []
          }
        ],
        "static": true
      },
      {
        "name": "setInterfaceAlternateSetting",
        "type": "function",
        "parameters": [
          {
            "$ref": "ConnectionHandle",
            "optional": false,
            "name": "handle"
          },
          {
            "type": "integer",
            "optional": false,
            "name": "interfaceNumber"
          },
          {
            "type": "integer",
            "optional": false,
            "name": "alternateSetting"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": []
          }
        ],
        "static": true
      },
      {
        "name": "controlTransfer",
        "type": "function",
        "parameters": [
          {
            "$ref": "ConnectionHandle",
            "optional": false,
            "name": "handle"
          },
          {
            "$ref": "ControlTransferInfo",
            "optional": false,
            "name": "transferInfo"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "$ref": "TransferResultInfo",
                "optional": false,
                "name": "info"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "bulkTransfer",
        "type": "function",
        "parameters": [
          {
            "$ref": "ConnectionHandle",
            "optional": false,
            "name": "handle"
          },
          {
            "$ref": "GenericTransferInfo",
            "optional": false,
            "name": "transferInfo"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "$ref": "TransferResultInfo",
                "optional": false,
                "name": "info"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "interruptTransfer",
        "type": "function",
        "parameters": [
          {
            "$ref": "ConnectionHandle",
            "optional": false,
            "name": "handle"
          },
          {
            "$ref": "GenericTransferInfo",
            "optional": false,
            "name": "transferInfo"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "$ref": "TransferResultInfo",
                "optional": false,
                "name": "info"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "isochronousTransfer",
        "type": "function",
        "parameters": [
          {
            "$ref": "ConnectionHandle",
            "optional": false,
            "name": "handle"
          },
          {
            "$ref": "IsochronousTransferInfo",
            "optional": false,
            "name": "transferInfo"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "$ref": "TransferResultInfo",
                "optional": false,
                "name": "info"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "resetDevice",
        "type": "function",
        "parameters": [
          {
            "$ref": "ConnectionHandle",
            "optional": false,
            "name": "handle"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "boolean",
                "optional": false,
                "name": "success"
              }
            ]
          }
        ],
        "static": true
      }
    ],
    "events": [
      {
        "name": "onDeviceAdded",
        "type": "function",
        "parameters": [
          {
            "$ref": "Device",
            "optional": false,
            "name": "device"
          }
        ]
      },
      {
        "name": "onDeviceRemoved",
        "type": "function",
        "parameters": [
          {
            "$ref": "Device",
            "optional": false,
            "name": "device"
          }
        ]
      }
    ],
    "namespace": "usb",
    "dependencies": [
      "permission:usb"
    ]
  },
  {
    "namespace": "accessibilityFeatures",
    "description": "Use the <code>chrome.accessibilityFeatures</code> API to manage Chrome's accessibility features. This API relies on the <a href='types#ChromeSetting'>ChromeSetting prototype of the type API</a> for getting and setting individual accessibility features. In order to get feature states the extension must request <code>accessibilityFeatures.read</code> permission. For modifying feature state, the extension needs <code>accessibilityFeatures.modify</code> permission. Note that <code>accessibilityFeatures.modify</code> does not imply <code>accessibilityFeatures.read</code> permission.",
    "properties": {
      "spokenFeedback": {
        "$ref": "types.ChromeSetting",
        "description": "<p><strong>ChromeOS only.</strong></p><p>Spoken feedback (text-to-speech). The value indicates whether the feature is enabled or not. <code>get()</code> requires <code>accessibilityFeatures.read</code> permission. <code>set()</code> and <code>clear()</code> require <code>accessibilityFeatures.modify</code> permission.</p>",
        "value": [
          "spokenFeedback",
          {
            "type": "boolean"
          }
        ],
        "platforms": [
          "chromeos"
        ]
      },
      "largeCursor": {
        "$ref": "types.ChromeSetting",
        "description": "<p><strong>ChromeOS only.</strong></p><p>Enlarged cursor. The value indicates whether the feature is enabled or not. <code>get()</code> requires <code>accessibilityFeatures.read</code> permission. <code>set()</code> and <code>clear()</code> require <code>accessibilityFeatures.modify</code> permission.</p>",
        "value": [
          "largeCursor",
          {
            "type": "boolean"
          }
        ],
        "platforms": [
          "chromeos"
        ]
      },
      "stickyKeys": {
        "$ref": "types.ChromeSetting",
        "description": "<p><strong>ChromeOS only.</strong></p><p>Sticky modifier keys (like shift or alt). The value indicates whether the feature is enabled or not. <code>get()</code> requires <code>accessibilityFeatures.read</code> permission. <code>set()</code> and <code>clear()</code> require <code>accessibilityFeatures.modify</code> permission.</p>",
        "value": [
          "stickyKeys",
          {
            "type": "boolean"
          }
        ],
        "platforms": [
          "chromeos"
        ]
      },
      "highContrast": {
        "$ref": "types.ChromeSetting",
        "description": "<p><strong>ChromeOS only.</strong></p><p>High contrast rendering mode. The value indicates whether the feature is enabled or not. <code>get()</code> requires <code>accessibilityFeatures.read</code> permission. <code>set()</code> and <code>clear()</code> require <code>accessibilityFeatures.modify</code> permission.</p>",
        "value": [
          "highContrast",
          {
            "type": "boolean"
          }
        ],
        "platforms": [
          "chromeos"
        ]
      },
      "screenMagnifier": {
        "$ref": "types.ChromeSetting",
        "description": "<p><strong>ChromeOS only.</strong></p><p>Full screen magnification. The value indicates whether the feature is enabled or not. <code>get()</code> requires <code>accessibilityFeatures.read</code> permission. <code>set()</code> and <code>clear()</code> require <code>accessibilityFeatures.modify</code> permission.</p>",
        "value": [
          "screenMagnifier",
          {
            "type": "boolean"
          }
        ],
        "platforms": [
          "chromeos"
        ]
      },
      "autoclick": {
        "$ref": "types.ChromeSetting",
        "description": "<p><strong>ChromeOS only.</strong></p><p>Auto mouse click after mouse stops moving. The value indicates whether the feature is enabled or not. <code>get()</code> requires <code>accessibilityFeatures.read</code> permission. <code>set()</code> and <code>clear()</code> require <code>accessibilityFeatures.modify</code> permission.</p>",
        "value": [
          "autoclick",
          {
            "type": "boolean"
          }
        ],
        "platforms": [
          "chromeos"
        ]
      },
      "virtualKeyboard": {
        "$ref": "types.ChromeSetting",
        "description": "<p><strong>ChromeOS only.</strong></p><p>Virtual on-screen keyboard. The value indicates whether the feature is enabled or not. <code>get()</code> requires <code>accessibilityFeatures.read</code> permission. <code>set()</code> and <code>clear()</code> require <code>accessibilityFeatures.modify</code> permission.</p>",
        "value": [
          "virtualKeyboard",
          {
            "type": "boolean"
          }
        ],
        "platforms": [
          "chromeos"
        ]
      },
      "caretHighlight": {
        "$ref": "types.ChromeSetting",
        "description": "<p><strong>ChromeOS only.</strong></p><p>Caret highlighting. The value indicates whether the feature is enabled or not. <code>get()</code> requires <code>accessibilityFeatures.read</code> permission. <code>set()</code> and <code>clear()</code> require <code>accessibilityFeatures.modify</code> permission.</p>",
        "value": [
          "caretHighlight",
          {
            "type": "boolean"
          }
        ],
        "platforms": [
          "chromeos"
        ]
      },
      "cursorHighlight": {
        "$ref": "types.ChromeSetting",
        "description": "<p><strong>ChromeOS only.</strong></p><p>Cursor highlighting. The value indicates whether the feature is enabled or not. <code>get()</code> requires <code>accessibilityFeatures.read</code> permission. <code>set()</code> and <code>clear()</code> require <code>accessibilityFeatures.modify</code> permission.</p>",
        "value": [
          "cursorHighlight",
          {
            "type": "boolean"
          }
        ],
        "platforms": [
          "chromeos"
        ]
      },
      "focusHighlight": {
        "$ref": "types.ChromeSetting",
        "description": "<p><strong>ChromeOS only.</strong></p><p>Focus highlighting. The value indicates whether the feature is enabled or not. <code>get()</code> requires <code>accessibilityFeatures.read</code> permission. <code>set()</code> and <code>clear()</code> require <code>accessibilityFeatures.modify</code> permission.</p>",
        "value": [
          "focusHighlight",
          {
            "type": "boolean"
          }
        ],
        "platforms": [
          "chromeos"
        ]
      },
      "selectToSpeak": {
        "$ref": "types.ChromeSetting",
        "description": "<p><strong>ChromeOS only.</strong></p><p>Select-to-speak. The value indicates whether the feature is enabled or not. <code>get()</code> requires <code>accessibilityFeatures.read</code> permission. <code>set()</code> and <code>clear()</code> require <code>accessibilityFeatures.modify</code> permission.</p>",
        "value": [
          "selectToSpeak",
          {
            "type": "boolean"
          }
        ],
        "platforms": [
          "chromeos"
        ]
      },
      "switchAccess": {
        "$ref": "types.ChromeSetting",
        "description": "<p><strong>ChromeOS only.</strong></p><p>Switch access. The value indicates whether the feature is enabled or not. <code>get()</code> requires <code>accessibilityFeatures.read</code> permission. <code>set()</code> and <code>clear()</code> require <code>accessibilityFeatures.modify</code> permission.</p>",
        "value": [
          "switchAccess",
          {
            "type": "boolean"
          }
        ],
        "platforms": [
          "chromeos"
        ]
      },
      "animationPolicy": {
        "$ref": "types.ChromeSetting",
        "description": "<code>get()</code> requires <code>accessibilityFeatures.read</code> permission. <code>set()</code> and <code>clear()</code> require <code>accessibilityFeatures.modify</code> permission.",
        "value": [
          "animationPolicy",
          {
            "type": "string",
            "enum": [
              {
                "description": "Images are allowed to animate.",
                "name": "allowed"
              },
              {
                "description": "Images are animated once.",
                "name": "once"
              },
              {
                "description": "Images are not animated.",
                "name": "none"
              }
            ]
          }
        ]
      }
    }
  },
  {
    "types": [
      {
        "id": "CharacteristicProperty",
        "type": "string",
        "enum": [
          "broadcast",
          "read",
          "writeWithoutResponse",
          "write",
          "notify",
          "indicate",
          "authenticatedSignedWrites",
          "extendedProperties",
          "reliableWrite",
          "writableAuxiliaries",
          "encryptRead",
          "encryptWrite",
          "encryptAuthenticatedRead",
          "encryptAuthenticatedWrite"
        ]
      },
      {
        "id": "DescriptorPermission",
        "type": "string",
        "enum": [
          "read",
          "write",
          "encryptedRead",
          "encryptedWrite",
          "encryptedAuthenticatedRead",
          "encryptedAuthenticatedWrite"
        ]
      },
      {
        "id": "AdvertisementType",
        "type": "string",
        "enum": [
          "broadcast",
          "peripheral"
        ]
      },
      {
        "id": "Device",
        "type": "object",
        "properties": {
          "address": {
            "type": "string"
          },
          "name": {
            "type": "string",
            "nullable": true
          },
          "deviceClass": {
            "type": "integer",
            "nullable": true
          }
        }
      },
      {
        "id": "Service",
        "type": "object",
        "properties": {
          "uuid": {
            "type": "string"
          },
          "isPrimary": {
            "type": "boolean"
          },
          "instanceId": {
            "type": "string",
            "nullable": true
          },
          "deviceAddress": {
            "type": "string",
            "nullable": true
          }
        }
      },
      {
        "id": "Characteristic",
        "type": "object",
        "properties": {
          "uuid": {
            "type": "string"
          },
          "service": {
            "$ref": "Service",
            "nullable": true
          },
          "properties": {
            "type": "array",
            "items": {
              "$ref": "CharacteristicProperty"
            }
          },
          "instanceId": {
            "type": "string",
            "nullable": true
          },
          "value": {
            "$ref": "ArrayBuffer",
            "nullable": true
          }
        }
      },
      {
        "id": "Descriptor",
        "type": "object",
        "properties": {
          "uuid": {
            "type": "string"
          },
          "characteristic": {
            "$ref": "Characteristic",
            "nullable": true
          },
          "permissions": {
            "type": "array",
            "items": {
              "$ref": "DescriptorPermission"
            }
          },
          "instanceId": {
            "type": "string",
            "nullable": true
          },
          "value": {
            "$ref": "ArrayBuffer",
            "nullable": true
          }
        }
      },
      {
        "id": "ConnectProperties",
        "type": "object",
        "properties": {
          "persistent": {
            "type": "boolean"
          }
        }
      },
      {
        "id": "NotificationProperties",
        "type": "object",
        "properties": {
          "persistent": {
            "type": "boolean"
          }
        }
      },
      {
        "id": "ManufacturerData",
        "type": "object",
        "properties": {
          "id": {
            "type": "integer"
          },
          "data": {
            "type": "array",
            "items": {
              "type": "integer"
            }
          }
        }
      },
      {
        "id": "ServiceData",
        "type": "object",
        "properties": {
          "uuid": {
            "type": "string"
          },
          "data": {
            "type": "array",
            "items": {
              "type": "integer"
            }
          }
        }
      },
      {
        "id": "Advertisement",
        "type": "object",
        "properties": {
          "type": {
            "$ref": "AdvertisementType"
          },
          "serviceUuids": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "nullable": true
          },
          "manufacturerData": {
            "type": "array",
            "items": {
              "$ref": "ManufacturerData"
            },
            "nullable": true
          },
          "solicitUuids": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "nullable": true
          },
          "serviceData": {
            "type": "array",
            "items": {
              "$ref": "ServiceData"
            },
            "nullable": true
          }
        }
      },
      {
        "id": "Request",
        "type": "object",
        "properties": {
          "requestId": {
            "type": "integer"
          },
          "device": {
            "$ref": "Device"
          },
          "value": {
            "$ref": "ArrayBuffer",
            "nullable": true
          }
        }
      },
      {
        "id": "Response",
        "type": "object",
        "properties": {
          "requestId": {
            "type": "integer"
          },
          "isError": {
            "type": "boolean"
          },
          "value": {
            "$ref": "ArrayBuffer",
            "nullable": true
          }
        }
      },
      {
        "id": "Notification",
        "type": "object",
        "properties": {
          "value": {
            "$ref": "ArrayBuffer"
          },
          "shouldIndicate": {
            "type": "boolean",
            "nullable": true
          }
        }
      }
    ],
    "functions": [
      {
        "name": "connect",
        "type": "function",
        "parameters": [
          {
            "type": "string",
            "optional": false,
            "name": "deviceAddress"
          },
          {
            "$ref": "ConnectProperties",
            "optional": true,
            "name": "properties"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": []
          }
        ],
        "static": true
      },
      {
        "name": "disconnect",
        "type": "function",
        "parameters": [
          {
            "type": "string",
            "optional": false,
            "name": "deviceAddress"
          },
          {
            "optional": true,
            "name": "callback",
            "type": "function",
            "parameters": []
          }
        ],
        "static": true
      },
      {
        "name": "getService",
        "type": "function",
        "parameters": [
          {
            "type": "string",
            "optional": false,
            "name": "serviceId"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "$ref": "Service",
                "optional": false,
                "name": "result"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "createService",
        "type": "function",
        "parameters": [
          {
            "$ref": "Service",
            "optional": false,
            "name": "service"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "string",
                "optional": false,
                "name": "serviceId"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "getServices",
        "type": "function",
        "parameters": [
          {
            "type": "string",
            "optional": false,
            "name": "deviceAddress"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "array",
                "items": {
                  "$ref": "Service"
                },
                "optional": false,
                "name": "result"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "getCharacteristic",
        "type": "function",
        "parameters": [
          {
            "type": "string",
            "optional": false,
            "name": "characteristicId"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "$ref": "Characteristic",
                "optional": false,
                "name": "result"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "createCharacteristic",
        "type": "function",
        "parameters": [
          {
            "$ref": "Characteristic",
            "optional": false,
            "name": "characteristic"
          },
          {
            "type": "string",
            "optional": false,
            "name": "serviceId"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "string",
                "optional": false,
                "name": "characteristicId"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "getCharacteristics",
        "type": "function",
        "parameters": [
          {
            "type": "string",
            "optional": false,
            "name": "serviceId"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "array",
                "items": {
                  "$ref": "Characteristic"
                },
                "optional": false,
                "name": "result"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "getIncludedServices",
        "type": "function",
        "parameters": [
          {
            "type": "string",
            "optional": false,
            "name": "serviceId"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "array",
                "items": {
                  "$ref": "Service"
                },
                "optional": false,
                "name": "result"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "getDescriptor",
        "type": "function",
        "parameters": [
          {
            "type": "string",
            "optional": false,
            "name": "descriptorId"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "$ref": "Descriptor",
                "optional": false,
                "name": "result"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "createDescriptor",
        "type": "function",
        "parameters": [
          {
            "$ref": "Descriptor",
            "optional": false,
            "name": "descriptor"
          },
          {
            "type": "string",
            "optional": false,
            "name": "characteristicId"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "string",
                "optional": false,
                "name": "descriptorId"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "getDescriptors",
        "type": "function",
        "parameters": [
          {
            "type": "string",
            "optional": false,
            "name": "characteristicId"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "array",
                "items": {
                  "$ref": "Descriptor"
                },
                "optional": false,
                "name": "result"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "readCharacteristicValue",
        "type": "function",
        "parameters": [
          {
            "type": "string",
            "optional": false,
            "name": "characteristicId"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "$ref": "Characteristic",
                "optional": false,
                "name": "result"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "writeCharacteristicValue",
        "type": "function",
        "parameters": [
          {
            "type": "string",
            "optional": false,
            "name": "characteristicId"
          },
          {
            "$ref": "ArrayBuffer",
            "optional": false,
            "name": "value"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": []
          }
        ],
        "static": true
      },
      {
        "name": "startCharacteristicNotifications",
        "type": "function",
        "parameters": [
          {
            "type": "string",
            "optional": false,
            "name": "characteristicId"
          },
          {
            "$ref": "NotificationProperties",
            "optional": true,
            "name": "properties"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": []
          }
        ],
        "static": true
      },
      {
        "name": "stopCharacteristicNotifications",
        "type": "function",
        "parameters": [
          {
            "type": "string",
            "optional": false,
            "name": "characteristicId"
          },
          {
            "optional": true,
            "name": "callback",
            "type": "function",
            "parameters": []
          }
        ],
        "static": true
      },
      {
        "name": "notifyCharacteristicValueChanged",
        "type": "function",
        "parameters": [
          {
            "type": "string",
            "optional": false,
            "name": "characteristicId"
          },
          {
            "$ref": "Notification",
            "optional": false,
            "name": "notification"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": []
          }
        ],
        "static": true
      },
      {
        "name": "readDescriptorValue",
        "type": "function",
        "parameters": [
          {
            "type": "string",
            "optional": false,
            "name": "descriptorId"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "$ref": "Descriptor",
                "optional": false,
                "name": "result"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "writeDescriptorValue",
        "type": "function",
        "parameters": [
          {
            "type": "string",
            "optional": false,
            "name": "descriptorId"
          },
          {
            "$ref": "ArrayBuffer",
            "optional": false,
            "name": "value"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": []
          }
        ],
        "static": true
      },
      {
        "name": "registerService",
        "type": "function",
        "parameters": [
          {
            "type": "string",
            "optional": false,
            "name": "serviceId"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": []
          }
        ],
        "static": true
      },
      {
        "name": "unregisterService",
        "type": "function",
        "parameters": [
          {
            "type": "string",
            "optional": false,
            "name": "serviceId"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": []
          }
        ],
        "static": true
      },
      {
        "name": "removeService",
        "type": "function",
        "parameters": [
          {
            "type": "string",
            "optional": false,
            "name": "serviceId"
          },
          {
            "optional": true,
            "name": "callback",
            "type": "function",
            "parameters": []
          }
        ],
        "static": true
      },
      {
        "name": "registerAdvertisement",
        "type": "function",
        "parameters": [
          {
            "$ref": "Advertisement",
            "optional": false,
            "name": "advertisement"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "integer",
                "optional": false,
                "name": "advertisementId"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "unregisterAdvertisement",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "advertisementId"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": []
          }
        ],
        "static": true
      },
      {
        "name": "setAdvertisingInterval",
        "type": "function",
        "parameters": [
          {
            "type": "integer",
            "optional": false,
            "name": "minInterval"
          },
          {
            "type": "integer",
            "optional": false,
            "name": "maxInterval"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": []
          }
        ],
        "static": true
      },
      {
        "name": "sendRequestResponse",
        "type": "function",
        "parameters": [
          {
            "$ref": "Response",
            "optional": false,
            "name": "response"
          }
        ],
        "static": true
      }
    ],
    "events": [
      {
        "name": "onServiceAdded",
        "type": "function",
        "parameters": [
          {
            "$ref": "Service",
            "optional": false,
            "name": "service"
          }
        ]
      },
      {
        "name": "onServiceChanged",
        "type": "function",
        "parameters": [
          {
            "$ref": "Service",
            "optional": false,
            "name": "service"
          }
        ]
      },
      {
        "name": "onServiceRemoved",
        "type": "function",
        "parameters": [
          {
            "$ref": "Service",
            "optional": false,
            "name": "service"
          }
        ]
      },
      {
        "name": "onCharacteristicValueChanged",
        "type": "function",
        "parameters": [
          {
            "$ref": "Characteristic",
            "optional": false,
            "name": "characteristic"
          }
        ]
      },
      {
        "name": "onDescriptorValueChanged",
        "type": "function",
        "parameters": [
          {
            "$ref": "Descriptor",
            "optional": false,
            "name": "descriptor"
          }
        ]
      },
      {
        "name": "onCharacteristicReadRequest",
        "type": "function",
        "parameters": [
          {
            "$ref": "Request",
            "optional": false,
            "name": "request"
          },
          {
            "type": "string",
            "optional": false,
            "name": "characteristicId"
          }
        ]
      },
      {
        "name": "onCharacteristicWriteRequest",
        "type": "function",
        "parameters": [
          {
            "$ref": "Request",
            "optional": false,
            "name": "request"
          },
          {
            "type": "string",
            "optional": false,
            "name": "characteristicId"
          }
        ]
      },
      {
        "name": "onDescriptorReadRequest",
        "type": "function",
        "parameters": [
          {
            "$ref": "Request",
            "optional": false,
            "name": "request"
          },
          {
            "type": "string",
            "optional": false,
            "name": "descriptorId"
          }
        ]
      },
      {
        "name": "onDescriptorWriteRequest",
        "type": "function",
        "parameters": [
          {
            "$ref": "Request",
            "optional": false,
            "name": "request"
          },
          {
            "type": "string",
            "optional": false,
            "name": "descriptorId"
          }
        ]
      }
    ],
    "namespace": "bluetoothLowEnergy",
    "dependencies": [
      "manifest:bluetooth"
    ]
  },
  {
    "types": [
      {
        "id": "ScanOptions",
        "type": "object",
        "properties": {
          "mimeTypes": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "nullable": true
          },
          "maxImages": {
            "type": "integer",
            "nullable": true
          }
        }
      },
      {
        "id": "ScanResults",
        "type": "object",
        "properties": {
          "dataUrls": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "mimeType": {
            "type": "string"
          }
        }
      }
    ],
    "functions": [
      {
        "name": "scan",
        "type": "function",
        "parameters": [
          {
            "$ref": "ScanOptions",
            "optional": false,
            "name": "options"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "$ref": "ScanResults",
                "optional": false,
                "name": "result"
              }
            ]
          }
        ],
        "static": true
      }
    ],
    "namespace": "documentScan",
    "dependencies": [
      "permission:documentScan"
    ]
  },
  {
    "types": [
      {
        "id": "ProviderError",
        "type": "string",
        "enum": [
          "OK",
          "FAILED",
          "IN_USE",
          "EXISTS",
          "NOT_FOUND",
          "ACCESS_DENIED",
          "TOO_MANY_OPENED",
          "NO_MEMORY",
          "NO_SPACE",
          "NOT_A_DIRECTORY",
          "INVALID_OPERATION",
          "SECURITY",
          "ABORT",
          "NOT_A_FILE",
          "NOT_EMPTY",
          "INVALID_URL",
          "IO"
        ]
      },
      {
        "id": "OpenFileMode",
        "type": "string",
        "enum": [
          "READ",
          "WRITE"
        ]
      },
      {
        "id": "ChangeType",
        "type": "string",
        "enum": [
          "CHANGED",
          "DELETED"
        ]
      },
      {
        "id": "CommonActionId",
        "type": "string",
        "enum": [
          "SAVE_FOR_OFFLINE",
          "OFFLINE_NOT_NECESSARY",
          "SHARE"
        ]
      },
      {
        "id": "EntryMetadata",
        "type": "object",
        "properties": {
          "isDirectory": {
            "type": "boolean",
            "nullable": true
          },
          "name": {
            "type": "string",
            "nullable": true
          },
          "size": {
            "type": "number",
            "nullable": true
          },
          "modificationTime": {
            "type": "object",
            "nullable": true
          },
          "mimeType": {
            "type": "string",
            "nullable": true
          },
          "thumbnail": {
            "type": "string",
            "nullable": true
          }
        }
      },
      {
        "id": "Watcher",
        "type": "object",
        "properties": {
          "entryPath": {
            "type": "string"
          },
          "recursive": {
            "type": "boolean"
          },
          "lastTag": {
            "type": "string",
            "nullable": true
          }
        }
      },
      {
        "id": "OpenedFile",
        "type": "object",
        "properties": {
          "openRequestId": {
            "type": "integer"
          },
          "filePath": {
            "type": "string"
          },
          "mode": {
            "$ref": "OpenFileMode"
          }
        }
      },
      {
        "id": "FileSystemInfo",
        "type": "object",
        "properties": {
          "fileSystemId": {
            "type": "string"
          },
          "displayName": {
            "type": "string"
          },
          "writable": {
            "type": "boolean"
          },
          "openedFilesLimit": {
            "type": "integer"
          },
          "openedFiles": {
            "type": "array",
            "items": {
              "$ref": "OpenedFile"
            }
          },
          "supportsNotifyTag": {
            "type": "boolean",
            "nullable": true
          },
          "watchers": {
            "type": "array",
            "items": {
              "$ref": "Watcher"
            }
          }
        }
      },
      {
        "id": "MountOptions",
        "type": "object",
        "properties": {
          "fileSystemId": {
            "type": "string"
          },
          "displayName": {
            "type": "string"
          },
          "writable": {
            "type": "boolean",
            "nullable": true
          },
          "openedFilesLimit": {
            "type": "integer",
            "nullable": true
          },
          "supportsNotifyTag": {
            "type": "boolean",
            "nullable": true
          }
        }
      },
      {
        "id": "UnmountOptions",
        "type": "object",
        "properties": {
          "fileSystemId": {
            "type": "string"
          }
        }
      },
      {
        "id": "UnmountRequestedOptions",
        "type": "object",
        "properties": {
          "fileSystemId": {
            "type": "string"
          },
          "requestId": {
            "type": "integer"
          }
        }
      },
      {
        "id": "GetMetadataRequestedOptions",
        "type": "object",
        "properties": {
          "fileSystemId": {
            "type": "string"
          },
          "requestId": {
            "type": "integer"
          },
          "entryPath": {
            "type": "string"
          },
          "isDirectory": {
            "type": "boolean"
          },
          "name": {
            "type": "boolean"
          },
          "size": {
            "type": "boolean"
          },
          "modificationTime": {
            "type": "boolean"
          },
          "mimeType": {
            "type": "boolean"
          },
          "thumbnail": {
            "type": "boolean"
          }
        }
      },
      {
        "id": "GetActionsRequestedOptions",
        "type": "object",
        "properties": {
          "fileSystemId": {
            "type": "string"
          },
          "requestId": {
            "type": "integer"
          },
          "entryPaths": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        }
      },
      {
        "id": "ReadDirectoryRequestedOptions",
        "type": "object",
        "properties": {
          "fileSystemId": {
            "type": "string"
          },
          "requestId": {
            "type": "integer"
          },
          "directoryPath": {
            "type": "string"
          },
          "isDirectory": {
            "type": "boolean"
          },
          "name": {
            "type": "boolean"
          },
          "size": {
            "type": "boolean"
          },
          "modificationTime": {
            "type": "boolean"
          },
          "mimeType": {
            "type": "boolean"
          },
          "thumbnail": {
            "type": "boolean"
          }
        }
      },
      {
        "id": "OpenFileRequestedOptions",
        "type": "object",
        "properties": {
          "fileSystemId": {
            "type": "string"
          },
          "requestId": {
            "type": "integer"
          },
          "filePath": {
            "type": "string"
          },
          "mode": {
            "$ref": "OpenFileMode"
          }
        }
      },
      {
        "id": "CloseFileRequestedOptions",
        "type": "object",
        "properties": {
          "fileSystemId": {
            "type": "string"
          },
          "requestId": {
            "type": "integer"
          },
          "openRequestId": {
            "type": "integer"
          }
        }
      },
      {
        "id": "ReadFileRequestedOptions",
        "type": "object",
        "properties": {
          "fileSystemId": {
            "type": "string"
          },
          "requestId": {
            "type": "integer"
          },
          "openRequestId": {
            "type": "integer"
          },
          "offset": {
            "type": "number"
          },
          "length": {
            "type": "number"
          }
        }
      },
      {
        "id": "CreateDirectoryRequestedOptions",
        "type": "object",
        "properties": {
          "fileSystemId": {
            "type": "string"
          },
          "requestId": {
            "type": "integer"
          },
          "directoryPath": {
            "type": "string"
          },
          "recursive": {
            "type": "boolean"
          }
        }
      },
      {
        "id": "DeleteEntryRequestedOptions",
        "type": "object",
        "properties": {
          "fileSystemId": {
            "type": "string"
          },
          "requestId": {
            "type": "integer"
          },
          "entryPath": {
            "type": "string"
          },
          "recursive": {
            "type": "boolean"
          }
        }
      },
      {
        "id": "CreateFileRequestedOptions",
        "type": "object",
        "properties": {
          "fileSystemId": {
            "type": "string"
          },
          "requestId": {
            "type": "integer"
          },
          "filePath": {
            "type": "string"
          }
        }
      },
      {
        "id": "CopyEntryRequestedOptions",
        "type": "object",
        "properties": {
          "fileSystemId": {
            "type": "string"
          },
          "requestId": {
            "type": "integer"
          },
          "sourcePath": {
            "type": "string"
          },
          "targetPath": {
            "type": "string"
          }
        }
      },
      {
        "id": "MoveEntryRequestedOptions",
        "type": "object",
        "properties": {
          "fileSystemId": {
            "type": "string"
          },
          "requestId": {
            "type": "integer"
          },
          "sourcePath": {
            "type": "string"
          },
          "targetPath": {
            "type": "string"
          }
        }
      },
      {
        "id": "TruncateRequestedOptions",
        "type": "object",
        "properties": {
          "fileSystemId": {
            "type": "string"
          },
          "requestId": {
            "type": "integer"
          },
          "filePath": {
            "type": "string"
          },
          "length": {
            "type": "number"
          }
        }
      },
      {
        "id": "WriteFileRequestedOptions",
        "type": "object",
        "properties": {
          "fileSystemId": {
            "type": "string"
          },
          "requestId": {
            "type": "integer"
          },
          "openRequestId": {
            "type": "integer"
          },
          "offset": {
            "type": "number"
          },
          "data": {
            "$ref": "ArrayBuffer"
          }
        }
      },
      {
        "id": "AbortRequestedOptions",
        "type": "object",
        "properties": {
          "fileSystemId": {
            "type": "string"
          },
          "requestId": {
            "type": "integer"
          },
          "operationRequestId": {
            "type": "integer"
          }
        }
      },
      {
        "id": "AddWatcherRequestedOptions",
        "type": "object",
        "properties": {
          "fileSystemId": {
            "type": "string"
          },
          "requestId": {
            "type": "integer"
          },
          "entryPath": {
            "type": "string"
          },
          "recursive": {
            "type": "boolean"
          }
        }
      },
      {
        "id": "RemoveWatcherRequestedOptions",
        "type": "object",
        "properties": {
          "fileSystemId": {
            "type": "string"
          },
          "requestId": {
            "type": "integer"
          },
          "entryPath": {
            "type": "string"
          },
          "recursive": {
            "type": "boolean"
          }
        }
      },
      {
        "id": "Action",
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "title": {
            "type": "string",
            "nullable": true
          }
        }
      },
      {
        "id": "ExecuteActionRequestedOptions",
        "type": "object",
        "properties": {
          "fileSystemId": {
            "type": "string"
          },
          "requestId": {
            "type": "integer"
          },
          "entryPaths": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "actionId": {
            "type": "string"
          }
        }
      },
      {
        "id": "Change",
        "type": "object",
        "properties": {
          "entryPath": {
            "type": "string"
          },
          "changeType": {
            "$ref": "ChangeType"
          }
        }
      },
      {
        "id": "NotifyOptions",
        "type": "object",
        "properties": {
          "fileSystemId": {
            "type": "string"
          },
          "observedPath": {
            "type": "string"
          },
          "recursive": {
            "type": "boolean"
          },
          "changeType": {
            "$ref": "ChangeType"
          },
          "changes": {
            "type": "array",
            "items": {
              "$ref": "Change"
            },
            "nullable": true
          },
          "tag": {
            "type": "string",
            "nullable": true
          }
        }
      },
      {
        "id": "ConfigureRequestedOptions",
        "type": "object",
        "properties": {
          "fileSystemId": {
            "type": "string"
          },
          "requestId": {
            "type": "integer"
          }
        }
      }
    ],
    "functions": [
      {
        "name": "mount",
        "type": "function",
        "parameters": [
          {
            "$ref": "MountOptions",
            "optional": false,
            "name": "options"
          },
          {
            "optional": true,
            "name": "callback",
            "type": "function",
            "parameters": []
          }
        ],
        "static": true
      },
      {
        "name": "unmount",
        "type": "function",
        "parameters": [
          {
            "$ref": "UnmountOptions",
            "optional": false,
            "name": "options"
          },
          {
            "optional": true,
            "name": "callback",
            "type": "function",
            "parameters": []
          }
        ],
        "static": true
      },
      {
        "name": "getAll",
        "type": "function",
        "parameters": [
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "array",
                "items": {
                  "$ref": "FileSystemInfo"
                },
                "optional": false,
                "name": "fileSystems"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "get",
        "type": "function",
        "parameters": [
          {
            "type": "string",
            "optional": false,
            "name": "fileSystemId"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "$ref": "FileSystemInfo",
                "optional": false,
                "name": "fileSystem"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "notify",
        "type": "function",
        "parameters": [
          {
            "$ref": "NotifyOptions",
            "optional": false,
            "name": "options"
          },
          {
            "optional": true,
            "name": "callback",
            "type": "function",
            "parameters": []
          }
        ],
        "static": true
      }
    ],
    "events": [
      {
        "name": "onUnmountRequested",
        "type": "function",
        "parameters": [
          {
            "$ref": "UnmountRequestedOptions",
            "optional": false,
            "name": "options"
          },
          {
            "optional": false,
            "name": "successCallback",
            "type": "function",
            "parameters": []
          },
          {
            "optional": false,
            "name": "errorCallback",
            "type": "function",
            "parameters": [
              {
                "$ref": "ProviderError",
                "optional": false,
                "name": "error"
              }
            ]
          }
        ]
      },
      {
        "name": "onGetMetadataRequested",
        "type": "function",
        "parameters": [
          {
            "$ref": "GetMetadataRequestedOptions",
            "optional": false,
            "name": "options"
          },
          {
            "optional": false,
            "name": "successCallback",
            "type": "function",
            "parameters": [
              {
                "$ref": "EntryMetadata",
                "optional": false,
                "name": "metadata"
              }
            ]
          },
          {
            "optional": false,
            "name": "errorCallback",
            "type": "function",
            "parameters": [
              {
                "$ref": "ProviderError",
                "optional": false,
                "name": "error"
              }
            ]
          }
        ]
      },
      {
        "name": "onGetActionsRequested",
        "type": "function",
        "parameters": [
          {
            "$ref": "GetActionsRequestedOptions",
            "optional": false,
            "name": "options"
          },
          {
            "optional": false,
            "name": "successCallback",
            "type": "function",
            "parameters": [
              {
                "type": "array",
                "items": {
                  "$ref": "Action"
                },
                "optional": false,
                "name": "actions"
              }
            ]
          },
          {
            "optional": false,
            "name": "errorCallback",
            "type": "function",
            "parameters": [
              {
                "$ref": "ProviderError",
                "optional": false,
                "name": "error"
              }
            ]
          }
        ]
      },
      {
        "name": "onReadDirectoryRequested",
        "type": "function",
        "parameters": [
          {
            "$ref": "ReadDirectoryRequestedOptions",
            "optional": false,
            "name": "options"
          },
          {
            "optional": false,
            "name": "successCallback",
            "type": "function",
            "parameters": [
              {
                "type": "array",
                "items": {
                  "$ref": "EntryMetadata"
                },
                "optional": false,
                "name": "entries"
              },
              {
                "type": "boolean",
                "optional": false,
                "name": "hasMore"
              }
            ]
          },
          {
            "optional": false,
            "name": "errorCallback",
            "type": "function",
            "parameters": [
              {
                "$ref": "ProviderError",
                "optional": false,
                "name": "error"
              }
            ]
          }
        ]
      },
      {
        "name": "onOpenFileRequested",
        "type": "function",
        "parameters": [
          {
            "$ref": "OpenFileRequestedOptions",
            "optional": false,
            "name": "options"
          },
          {
            "optional": false,
            "name": "successCallback",
            "type": "function",
            "parameters": []
          },
          {
            "optional": false,
            "name": "errorCallback",
            "type": "function",
            "parameters": [
              {
                "$ref": "ProviderError",
                "optional": false,
                "name": "error"
              }
            ]
          }
        ]
      },
      {
        "name": "onCloseFileRequested",
        "type": "function",
        "parameters": [
          {
            "$ref": "CloseFileRequestedOptions",
            "optional": false,
            "name": "options"
          },
          {
            "optional": false,
            "name": "successCallback",
            "type": "function",
            "parameters": []
          },
          {
            "optional": false,
            "name": "errorCallback",
            "type": "function",
            "parameters": [
              {
                "$ref": "ProviderError",
                "optional": false,
                "name": "error"
              }
            ]
          }
        ]
      },
      {
        "name": "onReadFileRequested",
        "type": "function",
        "parameters": [
          {
            "$ref": "ReadFileRequestedOptions",
            "optional": false,
            "name": "options"
          },
          {
            "optional": false,
            "name": "successCallback",
            "type": "function",
            "parameters": [
              {
                "$ref": "ArrayBuffer",
                "optional": false,
                "name": "data"
              },
              {
                "type": "boolean",
                "optional": false,
                "name": "hasMore"
              }
            ]
          },
          {
            "optional": false,
            "name": "errorCallback",
            "type": "function",
            "parameters": [
              {
                "$ref": "ProviderError",
                "optional": false,
                "name": "error"
              }
            ]
          }
        ]
      },
      {
        "name": "onCreateDirectoryRequested",
        "type": "function",
        "parameters": [
          {
            "$ref": "CreateDirectoryRequestedOptions",
            "optional": false,
            "name": "options"
          },
          {
            "optional": false,
            "name": "successCallback",
            "type": "function",
            "parameters": []
          },
          {
            "optional": false,
            "name": "errorCallback",
            "type": "function",
            "parameters": [
              {
                "$ref": "ProviderError",
                "optional": false,
                "name": "error"
              }
            ]
          }
        ]
      },
      {
        "name": "onDeleteEntryRequested",
        "type": "function",
        "parameters": [
          {
            "$ref": "DeleteEntryRequestedOptions",
            "optional": false,
            "name": "options"
          },
          {
            "optional": false,
            "name": "successCallback",
            "type": "function",
            "parameters": []
          },
          {
            "optional": false,
            "name": "errorCallback",
            "type": "function",
            "parameters": [
              {
                "$ref": "ProviderError",
                "optional": false,
                "name": "error"
              }
            ]
          }
        ]
      },
      {
        "name": "onCreateFileRequested",
        "type": "function",
        "parameters": [
          {
            "$ref": "CreateFileRequestedOptions",
            "optional": false,
            "name": "options"
          },
          {
            "optional": false,
            "name": "successCallback",
            "type": "function",
            "parameters": []
          },
          {
            "optional": false,
            "name": "errorCallback",
            "type": "function",
            "parameters": [
              {
                "$ref": "ProviderError",
                "optional": false,
                "name": "error"
              }
            ]
          }
        ]
      },
      {
        "name": "onCopyEntryRequested",
        "type": "function",
        "parameters": [
          {
            "$ref": "CopyEntryRequestedOptions",
            "optional": false,
            "name": "options"
          },
          {
            "optional": false,
            "name": "successCallback",
            "type": "function",
            "parameters": []
          },
          {
            "optional": false,
            "name": "errorCallback",
            "type": "function",
            "parameters": [
              {
                "$ref": "ProviderError",
                "optional": false,
                "name": "error"
              }
            ]
          }
        ]
      },
      {
        "name": "onMoveEntryRequested",
        "type": "function",
        "parameters": [
          {
            "$ref": "MoveEntryRequestedOptions",
            "optional": false,
            "name": "options"
          },
          {
            "optional": false,
            "name": "successCallback",
            "type": "function",
            "parameters": []
          },
          {
            "optional": false,
            "name": "errorCallback",
            "type": "function",
            "parameters": [
              {
                "$ref": "ProviderError",
                "optional": false,
                "name": "error"
              }
            ]
          }
        ]
      },
      {
        "name": "onTruncateRequested",
        "type": "function",
        "parameters": [
          {
            "$ref": "TruncateRequestedOptions",
            "optional": false,
            "name": "options"
          },
          {
            "optional": false,
            "name": "successCallback",
            "type": "function",
            "parameters": []
          },
          {
            "optional": false,
            "name": "errorCallback",
            "type": "function",
            "parameters": [
              {
                "$ref": "ProviderError",
                "optional": false,
                "name": "error"
              }
            ]
          }
        ]
      },
      {
        "name": "onWriteFileRequested",
        "type": "function",
        "parameters": [
          {
            "$ref": "WriteFileRequestedOptions",
            "optional": false,
            "name": "options"
          },
          {
            "optional": false,
            "name": "successCallback",
            "type": "function",
            "parameters": []
          },
          {
            "optional": false,
            "name": "errorCallback",
            "type": "function",
            "parameters": [
              {
                "$ref": "ProviderError",
                "optional": false,
                "name": "error"
              }
            ]
          }
        ]
      },
      {
        "name": "onAbortRequested",
        "type": "function",
        "parameters": [
          {
            "$ref": "AbortRequestedOptions",
            "optional": false,
            "name": "options"
          },
          {
            "optional": false,
            "name": "successCallback",
            "type": "function",
            "parameters": []
          },
          {
            "optional": false,
            "name": "errorCallback",
            "type": "function",
            "parameters": [
              {
                "$ref": "ProviderError",
                "optional": false,
                "name": "error"
              }
            ]
          }
        ]
      },
      {
        "name": "onConfigureRequested",
        "type": "function",
        "parameters": [
          {
            "$ref": "ConfigureRequestedOptions",
            "optional": false,
            "name": "options"
          },
          {
            "optional": false,
            "name": "successCallback",
            "type": "function",
            "parameters": []
          },
          {
            "optional": false,
            "name": "errorCallback",
            "type": "function",
            "parameters": [
              {
                "$ref": "ProviderError",
                "optional": false,
                "name": "error"
              }
            ]
          }
        ]
      },
      {
        "name": "onMountRequested",
        "type": "function",
        "parameters": [
          {
            "optional": false,
            "name": "successCallback",
            "type": "function",
            "parameters": []
          },
          {
            "optional": false,
            "name": "errorCallback",
            "type": "function",
            "parameters": [
              {
                "$ref": "ProviderError",
                "optional": false,
                "name": "error"
              }
            ]
          }
        ]
      },
      {
        "name": "onAddWatcherRequested",
        "type": "function",
        "parameters": [
          {
            "$ref": "AddWatcherRequestedOptions",
            "optional": false,
            "name": "options"
          },
          {
            "optional": false,
            "name": "successCallback",
            "type": "function",
            "parameters": []
          },
          {
            "optional": false,
            "name": "errorCallback",
            "type": "function",
            "parameters": [
              {
                "$ref": "ProviderError",
                "optional": false,
                "name": "error"
              }
            ]
          }
        ]
      },
      {
        "name": "onRemoveWatcherRequested",
        "type": "function",
        "parameters": [
          {
            "$ref": "RemoveWatcherRequestedOptions",
            "optional": false,
            "name": "options"
          },
          {
            "optional": false,
            "name": "successCallback",
            "type": "function",
            "parameters": []
          },
          {
            "optional": false,
            "name": "errorCallback",
            "type": "function",
            "parameters": [
              {
                "$ref": "ProviderError",
                "optional": false,
                "name": "error"
              }
            ]
          }
        ]
      },
      {
        "name": "onExecuteActionRequested",
        "type": "function",
        "parameters": [
          {
            "$ref": "ExecuteActionRequestedOptions",
            "optional": false,
            "name": "options"
          },
          {
            "optional": false,
            "name": "successCallback",
            "type": "function",
            "parameters": []
          },
          {
            "optional": false,
            "name": "errorCallback",
            "type": "function",
            "parameters": [
              {
                "$ref": "ProviderError",
                "optional": false,
                "name": "error"
              }
            ]
          }
        ]
      }
    ],
    "namespace": "fileSystemProvider",
    "dependencies": [
      "permission:fileSystemProvider"
    ]
  },
  {
    "types": [
      {
        "id": "Parameters",
        "type": "object",
        "properties": {
          "address": {
            "type": "string"
          },
          "broadcastAddress": {
            "type": "string",
            "nullable": true
          },
          "mtu": {
            "type": "string",
            "nullable": true
          },
          "exclusionList": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "inclusionList": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "domainSearch": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "nullable": true
          },
          "dnsServers": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "reconnect": {
            "type": "string",
            "nullable": true
          }
        }
      },
      {
        "id": "PlatformMessage",
        "type": "string",
        "enum": [
          "connected",
          "disconnected",
          "error",
          "linkDown",
          "linkUp",
          "linkChanged",
          "suspend",
          "resume"
        ]
      },
      {
        "id": "VpnConnectionState",
        "type": "string",
        "enum": [
          "connected",
          "failure"
        ]
      },
      {
        "id": "UIEvent",
        "type": "string",
        "enum": [
          "showAddDialog",
          "showConfigureDialog"
        ]
      }
    ],
    "functions": [
      {
        "name": "createConfig",
        "type": "function",
        "parameters": [
          {
            "type": "string",
            "optional": false,
            "name": "name"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": [
              {
                "type": "string",
                "optional": false,
                "name": "id"
              }
            ]
          }
        ],
        "static": true
      },
      {
        "name": "destroyConfig",
        "type": "function",
        "parameters": [
          {
            "type": "string",
            "optional": false,
            "name": "id"
          },
          {
            "optional": true,
            "name": "callback",
            "type": "function",
            "parameters": []
          }
        ],
        "static": true
      },
      {
        "name": "setParameters",
        "type": "function",
        "parameters": [
          {
            "$ref": "Parameters",
            "optional": false,
            "name": "parameters"
          },
          {
            "optional": false,
            "name": "callback",
            "type": "function",
            "parameters": []
          }
        ],
        "static": true
      },
      {
        "name": "sendPacket",
        "type": "function",
        "parameters": [
          {
            "$ref": "ArrayBuffer",
            "optional": false,
            "name": "data"
          },
          {
            "optional": true,
            "name": "callback",
            "type": "function",
            "parameters": []
          }
        ],
        "static": true
      },
      {
        "name": "notifyConnectionStateChanged",
        "type": "function",
        "parameters": [
          {
            "$ref": "VpnConnectionState",
            "optional": false,
            "name": "state"
          },
          {
            "optional": true,
            "name": "callback",
            "type": "function",
            "parameters": []
          }
        ],
        "static": true
      }
    ],
    "events": [
      {
        "name": "onPlatformMessage",
        "type": "function",
        "parameters": [
          {
            "type": "string",
            "optional": false,
            "name": "id"
          },
          {
            "$ref": "PlatformMessage",
            "optional": false,
            "name": "message"
          },
          {
            "type": "string",
            "optional": false,
            "name": "error"
          }
        ]
      },
      {
        "name": "onPacketReceived",
        "type": "function",
        "parameters": [
          {
            "$ref": "ArrayBuffer",
            "optional": false,
            "name": "data"
          }
        ]
      },
      {
        "name": "onConfigRemoved",
        "type": "function",
        "parameters": [
          {
            "type": "string",
            "optional": false,
            "name": "id"
          }
        ]
      },
      {
        "name": "onConfigCreated",
        "type": "function",
        "parameters": [
          {
            "type": "string",
            "optional": false,
            "name": "id"
          },
          {
            "type": "string",
            "optional": false,
            "name": "name"
          },
          {
            "type": "object",
            "optional": false,
            "name": "data"
          }
        ]
      },
      {
        "name": "onUIEvent",
        "type": "function",
        "parameters": [
          {
            "$ref": "UIEvent",
            "optional": false,
            "name": "event"
          },
          {
            "type": "string",
            "optional": true,
            "name": "id"
          }
        ]
      }
    ],
    "namespace": "vpnProvider",
    "dependencies": [
      "permission:vpnProvider"
    ]
  },
  {
    "namespace": "wallpaper",
    "compiler_options": {
      "implemented_in": "chrome/browser/chromeos/extensions/wallpaper_api.h"
    },
    "description": "Use the <code>chrome.wallpaper</code> API to change the ChromeOS wallpaper.",
    "types": [
      {
        "id": "WallpaperLayout",
        "type": "string",
        "enum": [
          "STRETCH",
          "CENTER",
          "CENTER_CROPPED"
        ],
        "description": "The supported wallpaper layouts."
      }
    ],
    "functions": [
      {
        "name": "setWallpaper",
        "type": "function",
        "description": "Sets wallpaper to the image at <em>url</em> or <em>wallpaperData</em> with the specified <em>layout</em>",
        "parameters": [
          {
            "name": "details",
            "type": "object",
            "properties": {
              "data": {
                "type": "binary",
                "optional": true,
                "description": "The jpeg or png encoded wallpaper image as an ArrayBuffer."
              },
              "url": {
                "type": "string",
                "optional": true,
                "description": "The URL of the wallpaper to be set (can be relative)."
              },
              "layout": {
                "$ref": "WallpaperLayout",
                "description": "The supported wallpaper layouts."
              },
              "filename": {
                "type": "string",
                "description": "The file name of the saved wallpaper."
              },
              "thumbnail": {
                "type": "boolean",
                "optional": true,
                "description": "True if a 128x60 thumbnail should be generated. Layout and ratio are not supported yet."
              }
            }
          },
          {
            "type": "function",
            "name": "callback",
            "parameters": [
              {
                "type": "binary",
                "optional": true,
                "name": "thumbnail",
                "description": "The jpeg encoded wallpaper thumbnail. It is generated by resizing the wallpaper to 128x60."
              }
            ]
          }
        ]
      }
    ],
    "dependencies": [
      "permission:wallpaper"
    ]
  }
]