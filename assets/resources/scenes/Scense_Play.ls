{
  "_$ver": 1,
  "_$id": "xqxft5me",
  "_$type": "Scene",
  "left": 0,
  "right": 0,
  "top": 0,
  "bottom": 0,
  "name": "Scene2D",
  "_$comp": [
    {
      "_$type": "f5fe7705-c6a2-48ae-8b0e-f05720cd225e",
      "scriptPath": "../src/ScenesPlay.ts"
    }
  ],
  "_$child": [
    {
      "_$id": "ojhy5isl",
      "_$type": "Box",
      "name": "Box",
      "width": 1920,
      "height": 1080,
      "_mouseState": 2,
      "left": 0,
      "right": 0,
      "top": 0,
      "bottom": 0,
      "_$child": [
        {
          "_$id": "nov7ajt9",
          "_$prefab": "26c60b6e-1dd2-47f0-bfaf-1242a77c9920",
          "name": "StopWatch",
          "active": true,
          "x": 1434,
          "y": 96,
          "visible": true,
          "right": 86,
          "top": 96,
          "width": 400,
          "height": 400
        },
        {
          "_$id": "ygrq1zw6",
          "_$var": true,
          "_$type": "Label",
          "name": "title",
          "x": 960,
          "y": 49,
          "width": 345,
          "height": 45,
          "anchorX": 0.5,
          "anchorY": 0.5,
          "rotation": 359.9266409680503,
          "right": 0,
          "top": 26,
          "centerX": 0,
          "text": "Level 1\n",
          "fontSize": 40,
          "color": "#FFFFFF",
          "align": "center",
          "valign": "top",
          "padding": "0,0,0,0",
          "_$comp": [
            {
              "_$type": "Animator2D",
              "controllerLayers": []
            }
          ]
        },
        {
          "_$id": "t7jr8a7i",
          "_$type": "Image",
          "name": "assembleBg",
          "x": 600,
          "y": 93,
          "width": 720,
          "height": 720,
          "_mouseState": 2,
          "top": 93,
          "centerX": 0,
          "skin": "res://c14cad4c-9c96-438c-ad22-22c6df737d51",
          "sizeGrid": "24,24,24,24,0",
          "color": "#ffffff",
          "_$child": [
            {
              "_$id": "4k13pa4t",
              "_$type": "Sprite",
              "name": "Sprite",
              "x": 15,
              "y": 15,
              "width": 690,
              "height": 690,
              "_gcmds": [
                {
                  "_$type": "DrawPolyCmd",
                  "x": 0,
                  "y": 0,
                  "points": [
                    230,
                    0,
                    230,
                    690
                  ],
                  "lineWidth": 1,
                  "lineColor": "#000000",
                  "fillColor": "#FFFFFF"
                },
                {
                  "_$type": "DrawPolyCmd",
                  "x": 0,
                  "y": 0,
                  "points": [
                    460,
                    0,
                    460,
                    690
                  ],
                  "lineWidth": 1,
                  "lineColor": "#000000",
                  "fillColor": "#FFFFFF"
                },
                {
                  "_$type": "DrawPolyCmd",
                  "x": 0,
                  "y": 0,
                  "points": [
                    0,
                    230,
                    690,
                    230
                  ],
                  "lineWidth": 1,
                  "lineColor": "#000000",
                  "fillColor": "#FFFFFF"
                },
                {
                  "_$type": "DrawPolyCmd",
                  "x": 0,
                  "y": 0,
                  "points": [
                    0,
                    460,
                    690,
                    460
                  ],
                  "lineWidth": 1,
                  "lineColor": "#000000",
                  "fillColor": "#FFFFFF"
                }
              ]
            },
            {
              "_$id": "7rqxjuyz",
              "_$type": "Image",
              "name": "leftPipe",
              "x": -228,
              "y": 16,
              "width": 230,
              "height": 230,
              "left": -228,
              "top": 16,
              "skin": "res://5df58b90-6b2e-41d3-81c4-2d670461ed26",
              "color": "#ffffff",
              "_$child": [
                {
                  "_$id": "49nk3y3u",
                  "_$type": "Image",
                  "name": "Image",
                  "x": 83,
                  "y": 83,
                  "width": 64,
                  "height": 64,
                  "centerX": 0,
                  "centerY": 0,
                  "skin": "res://34098c4e-acc8-4fc5-b05e-33a47dca6727",
                  "useSourceSize": true,
                  "color": "#ffffff"
                }
              ]
            },
            {
              "_$id": "pf5zlkq6",
              "_$type": "Image",
              "name": "rightPipe",
              "x": 716,
              "y": 475,
              "width": 230,
              "height": 230,
              "right": -226,
              "bottom": 15,
              "skin": "res://5df58b90-6b2e-41d3-81c4-2d670461ed26",
              "color": "#ffffff",
              "_$child": [
                {
                  "_$id": "6h12aq9n",
                  "_$type": "Image",
                  "name": "Image",
                  "x": 83,
                  "y": 83,
                  "width": 64,
                  "height": 64,
                  "right": 0,
                  "centerX": 0,
                  "centerY": 0,
                  "skin": "res://34098c4e-acc8-4fc5-b05e-33a47dca6727",
                  "useSourceSize": true,
                  "color": "#ffffff"
                }
              ]
            },
            {
              "_$id": "ebuhh62a",
              "_$var": true,
              "_$type": "List",
              "name": "assembleList",
              "x": 15,
              "y": 17,
              "width": 690,
              "height": 690,
              "_mouseState": 2,
              "top": 17,
              "centerX": 0,
              "itemTemplate": {
                "_$ref": "uqua4ql9",
                "_$tmpl": "itemRender"
              },
              "repeatX": 3,
              "repeatY": 3,
              "_$child": [
                {
                  "_$id": "uqua4ql9",
                  "_$type": "Box",
                  "name": "item",
                  "width": 230,
                  "height": 230,
                  "_$child": [
                    {
                      "_$id": "b4rh9e00",
                      "_$type": "Image",
                      "name": "pipeImg",
                      "width": 230,
                      "height": 230,
                      "left": 0,
                      "right": 0,
                      "top": 0,
                      "bottom": 0,
                      "color": "#ffffff"
                    },
                    {
                      "_$id": "it0q47yy",
                      "_$prefab": "04428d44-472c-4986-8f48-cd98effd5205",
                      "name": "aimPrefab",
                      "active": true,
                      "x": 0,
                      "y": 0,
                      "visible": true,
                      "left": 0,
                      "right": 0,
                      "top": 0,
                      "bottom": 0,
                      "_$child": [
                        {
                          "_$override": "r6hvpyrq",
                          "visible": true
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "_$id": "lz6x21la",
          "_$var": true,
          "_$type": "List",
          "name": "itemList",
          "x": 308,
          "y": 854,
          "width": 1304,
          "height": 199,
          "_mouseState": 2,
          "top": 854,
          "centerX": 0,
          "itemTemplate": {
            "_$ref": "2gvw1ic4",
            "_$tmpl": "itemRender"
          },
          "repeatX": 6,
          "repeatY": 1,
          "spaceX": 20,
          "_$child": [
            {
              "_$id": "2gvw1ic4",
              "_$type": "Box",
              "name": "Box",
              "x": 23.99999999999997,
              "width": 200,
              "height": 200,
              "_mouseState": 2,
              "_$child": [
                {
                  "_$id": "4xzfagww",
                  "_$type": "Image",
                  "name": "bg",
                  "width": 200,
                  "height": 200,
                  "_mouseState": 2,
                  "left": 0,
                  "right": 0,
                  "top": 0,
                  "bottom": 0,
                  "skin": "res://c14cad4c-9c96-438c-ad22-22c6df737d51",
                  "sizeGrid": "28,28,28,28,0",
                  "color": "#ffffff"
                },
                {
                  "_$id": "i8wn1rqf",
                  "_$type": "Image",
                  "name": "item",
                  "x": 24,
                  "y": 24,
                  "width": 152,
                  "height": 152,
                  "left": 24,
                  "right": 24,
                  "top": 24,
                  "bottom": 24,
                  "skin": "res://5df58b90-6b2e-41d3-81c4-2d670461ed26",
                  "color": "#ffffff"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "_$id": "xznt54hu",
      "_$var": true,
      "_$type": "Image",
      "name": "pipe",
      "width": 200,
      "height": 200,
      "anchorX": 0.5,
      "anchorY": 0.5,
      "visible": false,
      "skin": "res://e87c1c49-a680-4fb8-a4d7-d2e60c3ab10a",
      "color": "#ffffff"
    },
    {
      "_$id": "fznd7mbj",
      "_$type": "Button",
      "name": "testDialog",
      "x": 155,
      "y": 514,
      "width": 228,
      "height": 52,
      "_mouseState": 2,
      "left": 155,
      "centerY": 0,
      "skin": "res://b3995d80-70be-4f67-9c1e-bce8aac7f167",
      "label": "Open Dialog Test",
      "labelSize": 20
    }
  ]
}