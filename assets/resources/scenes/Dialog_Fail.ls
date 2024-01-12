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
      "_$type": "4a68a738-f5e8-459c-b47f-47ca8b677fe1",
      "scriptPath": "../src/DialogCloseScript.ts",
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
              "_$id": "s4sf4ytd",
              "_$type": "Label",
              "name": "Label",
              "y": 85,
              "width": 450,
              "height": 52,
              "left": 0,
              "right": 0,
              "centerY": -35,
              "text": "Time is up!",
              "font": "Bahnschrift",
              "fontSize": 40,
              "color": "rgba(255, 0, 0, 1)",
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
          "name": "btnClose",
          "x": 901,
          "y": 500,
          "width": 120,
          "height": 40,
          "_mouseState": 2,
          "top": 500,
          "centerX": 1,
          "skin": "res://b3995d80-70be-4f67-9c1e-bce8aac7f167",
          "label": "Tryagain",
          "labelFont": "Bahnschrift",
          "labelSize": 20,
          "labelBold": true
        }
      ]
    }
  ]
}