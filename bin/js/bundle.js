"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if (decorator = decorators[i])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target, key, result);
    return result;
  };

  // src/DialogCloseScript.ts
  var { regClass, property } = Laya;
  var Dialog = class extends Laya.Script {
    constructor() {
      super(...arguments);
      this.text = "";
    }
    onEnable() {
      let dialog = this.owner.getChildByName("Dialog");
      let play = dialog.getChildByName("btnClose");
      play.on(Laya.Event.CLICK, this, () => {
        Laya.stage.event(Laya.Event.MESSAGE, { type: "tryAgain" });
        this.owner.destroy(true);
      });
    }
  };
  __name(Dialog, "Dialog");
  __decorateClass([
    property(String)
  ], Dialog.prototype, "text", 2);
  Dialog = __decorateClass([
    regClass("4a68a738-f5e8-459c-b47f-47ca8b677fe1", "../src/DialogCloseScript.ts")
  ], Dialog);

  // src/GameManager.ts
  var _GameManager = class _GameManager {
    constructor() {
      this.level = 1;
    }
    static getInstance() {
      return _GameManager.instance;
    }
  };
  __name(_GameManager, "GameManager");
  _GameManager.instance = new _GameManager();
  var GameManager = _GameManager;

  // src/DialogStartScript.ts
  var { regClass: regClass2, property: property2 } = Laya;
  var Dialog2 = class extends Laya.Script {
    constructor() {
      super(...arguments);
      this.text = "";
    }
    onEnable() {
      let dialog = this.owner.getChildByName("Dialog");
      let play = dialog.getChildByName("btnStart");
      let levelLabel = dialog.getChildByName("Image").getChildByName("levelLabel");
      levelLabel.text = "Level " + GameManager.getInstance().level;
      play.on(Laya.Event.CLICK, this, () => {
        Laya.stage.event(Laya.Event.MESSAGE, { type: "gameStart" });
        this.owner.destroy(true);
      });
    }
  };
  __name(Dialog2, "Dialog");
  __decorateClass([
    property2(String)
  ], Dialog2.prototype, "text", 2);
  Dialog2 = __decorateClass([
    regClass2("c02de4af-1535-40db-83e7-0b774a140446", "../src/DialogStartScript.ts")
  ], Dialog2);

  // src/Main.ts
  var { regClass: regClass3, property: property3 } = Laya;
  var Main = class extends Laya.Script {
    onStart() {
      console.log("Game start");
    }
  };
  __name(Main, "Main");
  Main = __decorateClass([
    regClass3("7bad1742-6eed-4d8d-81c0-501dc5bf03d6", "../src/Main.ts")
  ], Main);

  // src/ScenceStartScript.ts
  var { regClass: regClass4, property: property4 } = Laya;
  var ScenceStartScript = class extends Laya.Script {
    onEnable() {
      this.play.on(Laya.Event.CLICK, this, () => {
        Laya.Scene.open("/resources/scenes/Dialog_start.ls", false);
      });
    }
  };
  __name(ScenceStartScript, "ScenceStartScript");
  __decorateClass([
    property4({ type: Laya.Button })
  ], ScenceStartScript.prototype, "play", 2);
  ScenceStartScript = __decorateClass([
    regClass4("2733d589-8edb-4af3-9d24-2921163a6ec0", "../src/ScenceStartScript.ts")
  ], ScenceStartScript);

  // src/stopWatchScript.ts
  var { regClass: regClass5, property: property5 } = Laya;
  var GREEN = 1;
  var YELLOW = 2;
  var RED = 3;
  var stopWatchScript = class extends Laya.Script {
    onEnable() {
      let baseSp = this.owner.getChildByName("BaseSp");
      this.insideSp = baseSp.getChildByName("insideSp");
      this.timeMask = baseSp.getChildByName("timeMask");
      this.timeLabel = this.owner.getChildByName("Label");
      this.reset(2e4);
    }
    reset(firstCD) {
      this.timeLabel.text = "" + firstCD / 1e3;
      this.cdUpdateTime = 10;
      this.startRotation = -90;
      this.drawBaseCircle("#2fc97f");
      this.color = GREEN;
      this.CDTime = firstCD;
      this.cdOffset = 360 * this.cdUpdateTime / this.CDTime;
      this.timeMask.graphics.clear();
      this.timeMask.graphics.drawPie(200, 200, 200, this.startRotation, 270, "#ff0000");
    }
    countDown() {
      this.drawBaseCircle("#2fc97f");
      Laya.timer.loop(this.cdUpdateTime, this, this.update);
    }
    drawBaseCircle(color) {
      this.insideSp.graphics.drawCircle(180, 180, 180, null, color, 50);
    }
    update() {
      this.startRotation += this.cdOffset;
      this.timeMask.graphics.clear();
      this.timeMask.graphics.drawPie(200, 200, 200, this.startRotation, 270, "#ff0000");
      if (this.timeLabel !== null) {
        this.timeLabel.text = "" + Math.ceil(this.CDTime / 1e3 * (270 - this.startRotation) / 360);
      }
      if (this.startRotation >= 270) {
        this.stopRound(false);
      }
      if (this.startRotation > 30 && this.color === GREEN) {
        this.drawBaseCircle("#fadd41");
        this.color = YELLOW;
      }
      if (this.startRotation > 150 && this.color === YELLOW) {
        this.drawBaseCircle("#ff4d16");
        this.color = RED;
      }
    }
    stopRound(manual) {
      Laya.timer.clear(this, this.update);
      if (manual === false) {
        Laya.stage.event(Laya.Event.MESSAGE, { type: "missionFail" });
      }
    }
  };
  __name(stopWatchScript, "stopWatchScript");
  stopWatchScript = __decorateClass([
    regClass5("4acce89f-c095-41e0-aa87-fe5c53307069", "../src/stopWatchScript.ts")
  ], stopWatchScript);

  // src/ScenesPlay.ts
  var { regClass: regClass6, property: property6 } = Laya;
  var Play = class extends Laya.Script {
    constructor() {
      super(...arguments);
      this.selectedData = {};
      this.isSelected = false;
    }
    onEnable() {
      this.intercom();
      this.initLevel();
      this.pipe = this.owner.getChildByName("pipe");
      let openDialogBtn = this.owner.getChildByName("testDialog");
      openDialogBtn.on(Laya.Event.CLICK, () => {
        Laya.Dialog.open("resources/prefabs/DialogSuccess.lh");
      });
    }
    intercom() {
      Laya.stage.on(Laya.Event.MESSAGE, this, (data) => {
        switch (data.type) {
          case "missionFail":
            {
              Laya.Scene.open("/resources/scenes/Dialog_Fail.ls", false);
            }
            break;
          case "gameStart":
            {
              this.stopSwitchSp.reset(2e4);
              this.stopSwitchSp.countDown();
            }
            break;
          case "tryAgain":
            {
              Laya.timer.once(1e3, this, () => {
                this, this.stopSwitchSp.reset(2e4);
                this.initLevel();
              });
            }
            break;
          case "success":
            {
              Laya.timer.once(1e3, this, () => {
                GameManager.getInstance().level++;
                this.initLevel();
              });
            }
            break;
        }
      });
    }
    initLevel() {
      const level = GameManager.getInstance().level;
      let title = this.owner.getChildByName("Box").getChildByName("title");
      title.text = "Level " + level;
      this.initUi();
      this.initAssemble();
      Laya.Scene.open("resources/scenes/Dialog_start.ls", false);
    }
    initUi() {
      this.itemData = [
        {
          id: 1,
          itemImg: "atlas/img/pipe01.png",
          desc: "Pipe1",
          port1: 1,
          port2: 3
        },
        {
          id: 2,
          itemImg: "atlas/img/pipe02.png",
          desc: "Pipe1",
          port1: 2,
          port2: 4
        },
        {
          id: 3,
          itemImg: "atlas/img/pipe03.png",
          desc: "Pipe1",
          port1: 1,
          port2: 4
        },
        {
          id: 4,
          itemImg: "atlas/img/pipe04.png",
          desc: "Pipe1",
          port1: 3,
          port2: 4
        },
        {
          id: 5,
          itemImg: "atlas/img/pipe05.png",
          desc: "Pipe1",
          port1: 2,
          port2: 3
        },
        {
          id: 6,
          itemImg: "atlas/img/pipe06.png",
          desc: "Pipe1",
          port1: 2,
          port2: 1
        }
      ];
      let stopSwitch = this.owner.getChildByName("Box").getChildByName("StopWatch");
      this.stopSwitchSp = stopSwitch.getComponent(stopWatchScript);
      this.itemList = this.owner.getChildByName("Box").getChildByName("itemList");
      this.itemList.array = this.itemData;
      this.itemList.renderHandler = new Laya.Handler(this, this.renderItemList);
      this.itemList.mouseHandler = new Laya.Handler(this, this.mouseOnItemList);
    }
    initAssemble() {
      this.assembleData = [
        { index: 0, id: null, itemImg: "", port1: 0, port2: 0 },
        { index: 1, id: null, itemImg: "", port1: 0, port2: 0 },
        { index: 2, id: null, itemImg: "", port1: 0, port2: 0 },
        { index: 3, id: null, itemImg: "", port1: 0, port2: 0 },
        { index: 4, id: null, itemImg: "", port1: 0, port2: 0 },
        { index: 5, id: null, itemImg: "", port1: 0, port2: 0 },
        { index: 6, id: null, itemImg: "", port1: 0, port2: 0 },
        { index: 7, id: null, itemImg: "", port1: 0, port2: 0 },
        { index: 8, id: null, itemImg: "", port1: 0, port2: 0 }
      ];
      let random = Math.random();
      if (random > 0.5) {
        this.assembleData[0].id = this.itemData[0].id;
        this.assembleData[0].itemImg = this.itemData[0].itemImg;
        this.assembleData[0].port1 = this.itemData[0].port1;
        this.assembleData[0].port2 = this.itemData[0].port2;
      } else {
        this.assembleData[0].id = this.itemData[2].id;
        this.assembleData[0].itemImg = this.itemData[2].itemImg;
        this.assembleData[0].port1 = this.itemData[2].port1;
        this.assembleData[0].port2 = this.itemData[2].port2;
      }
      random = Math.random();
      if (random > 0.5) {
        this.assembleData[8].id = this.itemData[0].id;
        this.assembleData[8].itemImg = this.itemData[0].itemImg;
        this.assembleData[8].port1 = this.itemData[0].port1;
        this.assembleData[8].port2 = this.itemData[0].port2;
      } else {
        this.assembleData[8].id = this.itemData[4].id;
        this.assembleData[8].itemImg = this.itemData[4].itemImg;
        this.assembleData[8].port1 = this.itemData[4].port1;
        this.assembleData[8].port2 = this.itemData[4].port2;
      }
      this.assembleList = this.owner.getChildByName("Box").getChildByName("assembleBg").getChildByName("assembleList");
      this.assembleList.array = this.assembleData;
      this.assembleList.renderHandler = new Laya.Handler(this, this.renderAssembleList);
      this.assembleList.mouseHandler = new Laya.Handler(this, this.mouseOnEssembleList);
    }
    renderItemList(item, index) {
      let data = item.dataSource;
      let pipeImg = item.getChildByName("item");
      pipeImg.skin = data.itemImg;
    }
    renderAssembleList(item, index) {
      let data = item.dataSource;
      let pipeImg = item.getChildByName("pipeImg");
      pipeImg.skin = data.itemImg;
      let aimPrefab = item.getChildByName("aimPrefab");
      if (data.id == null) {
        aimPrefab.visible = true;
      } else {
        aimPrefab.visible = false;
      }
    }
    mouseOnItemList(e, index) {
      if (e.type == "mousedown") {
        this.selectedData = this.itemList.array[index];
        this.isSelected = true;
        this.pipe.skin = this.selectedData.itemImg;
        this.pipe.pos(Laya.InputManager.mouseX, Laya.InputManager.mouseY, true);
        this.pipe.visible = true;
      }
    }
    mouseOnEssembleList(e, index) {
      if (e.type == "mouseup") {
        if (index == 0 || index == 8)
          return;
        this.assembleData[index].id = this.selectedData.id;
        this.assembleData[index].itemImg = this.selectedData.itemImg;
        this.assembleData[index].port1 = this.selectedData.port1;
        this.assembleData[index].port2 = this.selectedData.port2;
        this.assembleList.refresh();
        this.checkConnect();
      }
    }
    onMouseDrag(e) {
      this.pipe.pos(Laya.InputManager.mouseX, Laya.InputManager.mouseY, true);
    }
    onMouseDragEnd(e) {
      this.selectedData = {};
      this.isSelected = false;
      this.pipe.skin = "";
    }
    checkConnect() {
      this.checkIndex = 0;
      this.inputPort = 3;
      this.checking(this.checkIndex, this.inputPort);
    }
    checking(checkIndex, inputPort) {
      let result = this.checkUnit(checkIndex, inputPort);
      if (result.connected === true) {
        console.log("connected...");
        this.stopSwitchSp.stopRound(true);
        Laya.Dialog.open("resources/prefabs/DialogSuccess.lh");
      } else {
        console.log("not connected...");
        if (result.nextIndex !== -1) {
          this.checking(result.nextIndex, result.nextInputPort);
        }
      }
    }
    checkUnit(checkIndex, inputPort) {
      let nextIndex = -1;
      let nextInputPort = 0;
      let connected = false;
      let connectPort = 0;
      switch (inputPort) {
        case 1:
          connectPort = 3;
          break;
        case 2:
          connectPort = 4;
          break;
        case 3:
          connectPort = 1;
          break;
        case 4:
          connectPort = 2;
          break;
      }
      let currentUnit = this.assembleData[checkIndex];
      let { port1, port2 } = currentUnit;
      if (port1 === 0 && port2 === 0) {
      } else if (checkIndex === 8) {
        if (connectPort === port1 || connectPort === port2) {
          connected = true;
        }
      } else {
        if (connectPort === port1) {
          nextInputPort = port2;
        }
        if (connectPort === port2) {
          nextInputPort = port1;
        }
        if (connectPort !== nextInputPort) {
          switch (nextInputPort) {
            case 1:
              if (checkIndex === 0 || checkIndex === 3 || checkIndex === 6) {
                nextIndex = -1;
              } else {
                nextIndex = checkIndex - 1;
              }
              break;
            case 2:
              if (checkIndex === 0 || checkIndex === 1 || checkIndex === 2) {
                nextIndex = -1;
              } else {
                nextIndex = checkIndex - 3;
              }
              break;
            case 3:
              if (checkIndex === 2 || checkIndex === 5) {
                nextIndex = -1;
              } else {
                nextIndex = checkIndex + 1;
              }
              break;
            case 4:
              if (checkIndex === 6 || checkIndex === 7) {
                nextIndex = -1;
              } else {
                nextIndex = checkIndex + 3;
              }
              break;
            default:
              nextIndex = -1;
              break;
          }
        }
      }
      return {
        nextIndex,
        nextInputPort,
        connected
      };
    }
  };
  __name(Play, "Play");
  Play = __decorateClass([
    regClass6("f5fe7705-c6a2-48ae-8b0e-f05720cd225e", "../src/ScenesPlay.ts")
  ], Play);

  // src/DialogSuccessScript.ts
  var { regClass: regClass7, property: property7 } = Laya;
  var DialogSuccessScript = class extends Laya.Script {
    onEnable() {
      let btnClose = this.owner.getChildByName("btnClose");
      btnClose.on(Laya.Event.CLICK, () => {
        Laya.stage.event(Laya.Event.MESSAGE, { type: "success" });
        this.owner.close();
      });
    }
  };
  __name(DialogSuccessScript, "DialogSuccessScript");
  DialogSuccessScript = __decorateClass([
    regClass7("72ee2b16-d143-4b77-902d-e0bbe738b155", "../src/DialogSuccessScript.ts")
  ], DialogSuccessScript);
})();
//# sourceMappingURL=bundle.js.map
