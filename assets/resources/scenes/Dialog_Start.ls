{
  "_$ver": 1,
  "_$id": "qgdqdtt7",
  "_$type": "Scene",
  "left": 0,
  "right": 0,
  "top": 0,
  "bottom": 0,
  "name": "Scene2D",
  "_$comp": [
    {
      "_$type": "c02de4af-1535-40db-83e7-0b774a140446",
      "scriptPath": "../src/DialogStartScript.ts",
      "text": ""
    }
  ],
  "_$child": [
    {
      "_$id": "vfc9o6c7",
      "_$type": "Dialog",
      "name": "Dialog",
      "width": 1920,
      "height": 1080,
      "_mouseState": 2,
      "left": 0,
      "right": 0,
      "top": 0,
      "bottom": 0,
      "isModal": true,
      "_$child": [
        {
          "_$id": "uphsj0i2",
          "_$type": "Image",
          "name": "Image",
          "x": 736,
          "y": 340,
          "width": 450,
          "height": 260,
          "_mouseState": 2,
          "top": 340,
          "centerX": 1,
          "skin": "res://c14cad4c-9c96-438c-ad22-22c6df737d51",
          "sizeGrid": "30,30,30,30,0",
          "color": "#ffffff",
          "_$child": [
            {
              "_$id": "o2krfwdk",
              "_$type": "Label",
              "name": "levelLabel",
              "x": 165,
              "y": 53,
              "width": 120,
              "height": 28,
              "top": 53,
              "centerX": 0,
              "text": "Level 1",
              "fontSize": 25,
              "color": "rgba(0, 0, 0, 1)",
              "bold": true,
              "align": "center",
              "valign": "top",
              "padding": "0,0,0,0"
            },
            {
              "_$id": "s4sf4ytd",
              "_$type": "Label",
              "name": "Label",
              "y": 104,
              "width": 450,
              "height": 33,
              "left": 0,
              "right": 0,
              "top": 104,
              "text": "Start the Pipeline connecting",
              "font": "Bahnschrift",
              "fontSize": 24,
              "color": "rgba(0, 0, 0, 1)",
              "bold": true,
              "align": "center",
              "valign": "top",
              "padding": "0,0,0,0"
            }
          ]
        },
        {
          "_$id": "1f5bftfj",
          "_$type": "Button",
          "name": "btnStart",
          "x": 901,
          "y": 500,
          "width": 120,
          "height": 40,
          "_mouseState": 2,
          "top": 500,
          "centerX": 1,
          "skin": "res://b3995d80-70be-4f67-9c1e-bce8aac7f167",
          "label": "Play",
          "labelFont": "Bahnschrift",
          "labelSize": 20,
          "labelBold": true
        }
      ]
    }
  ]
}