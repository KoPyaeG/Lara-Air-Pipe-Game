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
        Laya.SoundManager.playSound("resources/audio/ready_go.mp3", 1);
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
        Laya.Scene.open("/resources/scenes/Scense_Play.ls");
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

  // src/BallonScript.ts
  var { regClass: regClass5, property: property5 } = Laya;
  var BallonScript = class extends Laya.Script {
    constructor() {
      super(...arguments);
      this.speed = 800;
      this.auto = false;
    }
    onEnable() {
      this.owner.pos(this.x, this.y);
      Laya.Tween.to(this.owner, {
        x: this.x2,
        y: this.y2
      }, 1e3, Laya.Ease.linearNone, Laya.Handler.create(this, () => {
        this.owner.pos(this.x3, this.y3);
        this.auto = true;
      }), this.delay);
    }
    initBallon(x, y, x2, y2, x3, y3, delay) {
      this.x = x;
      this.y = y;
      this.x2 = x2;
      this.y2 = y2;
      this.x3 = x3;
      this.y3 = y3;
      this.delay = delay;
    }
    onUpdate() {
      if (!this.auto)
        return;
      console.log("speed", Laya.timer.delta / 1e3);
      this.owner.x += this.speed * Laya.timer.delta / 1e3;
      if (this.owner.x > 3e3)
        this.owner.destroy(true);
    }
  };
  __name(BallonScript, "BallonScript");
  BallonScript = __decorateClass([
    regClass5("1c1b4ce7-8de5-429d-94a0-684f595f28e1", "../src/BallonScript.ts")
  ], BallonScript);

  // src/stopWatchScript.ts
  var { regClass: regClass6, property: property6 } = Laya;
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
    regClass6("4acce89f-c095-41e0-aa87-fe5c53307069", "../src/stopWatchScript.ts")
  ], stopWatchScript);

  // src/ScenesPlay.ts
  var { regClass: regClass7, property: property7 } = Laya;
  var Play = class extends Laya.Script {
    constructor() {
      super(...arguments);
      this.selectedData = {};
      this.isSelected = false;
    }
    onEnable() {
      this.intercom();
      this.initLevel();
      this.soundManager();
      const path = "./resources/Prefabs/BallonPrefab.lh";
      Laya.loader.load(path).then((res) => {
        console.log("res", res);
        this.ballPrefab = res;
      });
      this.pipe = this.owner.getChildByName("pipe");
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
                localStorage.setItem("level", GameManager.getInstance().level.toString());
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
      this.itemData = GameManager.getInstance().toolInfo;
      let stopSwitch = this.owner.getChildByName("Box").getChildByName("StopWatch");
      this.stopSwitchSp = stopSwitch.getComponent(stopWatchScript);
      this.itemList = this.owner.getChildByName("Box").getChildByName("itemList");
      this.itemList.array = this.itemData;
      this.itemList.renderHandler = new Laya.Handler(this, this.renderItemList);
      this.itemList.mouseHandler = new Laya.Handler(this, this.mouseOnItemList);
      this.ballContainer = this.owner.getChildByName("Box").getChildByName("ballContainer");
      this.ballContainer.width = Laya.stage.width;
      this.ballContainer.height = Laya.stage.height;
      this.assembleContainer = this.owner.getChildByName("Box").getChildByName("assembleBg");
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
        for (let i = 0; i < 5; i++) {
          this.addBall(i * 200);
        }
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
    addBall(delay) {
      console.log("lllll", this.assembleContainer.width);
      console.log();
      let x2 = this.assembleContainer.x - 80;
      let y2 = this.assembleContainer.y + 104;
      let x3 = this.assembleContainer.x + this.assembleContainer.width;
      let y3 = this.assembleContainer.y + 562;
      let ball = Laya.Pool.getItemByCreateFun("ball", this.ballPrefab.create, this.ballPrefab);
      let ballSp = ball.getComponent(BallonScript);
      ballSp.initBallon(-100, y2, x2, y2, x3, y3, delay);
      this.ballContainer.addChild(ball);
    }
    soundManager() {
      Laya.SoundManager.playMusic("resources/audio/background.mp3", 0);
      let checkSound = this.owner.getChildByName("Box").getChildByName("checkSound");
      checkSound.selected = false;
      checkSound.on(Laya.Event.CHANGE, this, () => {
        if (checkSound.selected == false) {
          Laya.SoundManager.playMusic("resources/audio/background.mp3", 0);
        } else {
          Laya.SoundManager.stopAll();
        }
      });
    }
  };
  __name(Play, "Play");
  __decorateClass([
    property7(Laya.Prefab)
  ], Play.prototype, "ball", 2);
  Play = __decorateClass([
    regClass7("f5fe7705-c6a2-48ae-8b0e-f05720cd225e", "../src/ScenesPlay.ts")
  ], Play);

  // src/DialogSuccessScript.ts
  var { regClass: regClass8, property: property8 } = Laya;
  var DialogSuccessScript = class extends Laya.Script {
    onEnable() {
      Laya.SoundManager.playSound("resources/audio/congratulate.mp3", 1);
      let btnClose = this.owner.getChildByName("btnClose");
      btnClose.on(Laya.Event.CLICK, () => {
        Laya.stage.event(Laya.Event.MESSAGE, { type: "success" });
        this.owner.close();
      });
    }
  };
  __name(DialogSuccessScript, "DialogSuccessScript");
  DialogSuccessScript = __decorateClass([
    regClass8("72ee2b16-d143-4b77-902d-e0bbe738b155", "../src/DialogSuccessScript.ts")
  ], DialogSuccessScript);

  // src/Loading.generated.ts
  var _LoadingBase = class _LoadingBase extends Laya.Scene {
  };
  __name(_LoadingBase, "LoadingBase");
  var LoadingBase = _LoadingBase;

  // src/Loading.ts
  var { regClass: regClass9, property: property9 } = Laya;
  var Loading = class extends LoadingBase {
    onEnable() {
      this.loadingBar.value = 0.75;
      this.loaderToolInfoConfig();
      this.loadAudioConfig();
      this.getLoaclStorage();
    }
    loaderToolInfoConfig() {
      const jsonPath = "./resources/config/config_toolInfo.json";
      Laya.loader.load(jsonPath, Laya.loader.JSON).then((json) => {
        GameManager.getInstance().toolInfo = json.data;
        console.log("data", GameManager.getInstance().toolInfo);
      });
    }
    loadAudioConfig() {
      const jsonPath = "./resources/config/config_audio.json";
      Laya.loader.load(jsonPath, Laya.loader.JSON).then((json) => {
        let audioPath = json.data;
        console.log(audioPath);
        this.loadAudio(audioPath);
      });
    }
    loadAudio(path) {
      Laya.loader.load(path, null, Laya.Handler.create(this, this.onLoading, null, false)).then((res) => {
        if (res) {
          Laya.Scene.open("resources/scenes/Scence_start.ls");
        }
      });
    }
    onLoading(progress) {
      this.loadingBar.value = progress;
    }
    getLoaclStorage() {
      let level = localStorage.getItem("level");
      console.log(level);
      if (level == null) {
        localStorage.setItem("level", "1");
        GameManager.getInstance().level = 1;
      } else {
        GameManager.getInstance().level = parseInt(level);
      }
    }
  };
  __name(Loading, "Loading");
  Loading = __decorateClass([
    regClass9("89fd969b-f1c4-4854-957d-f9773c2e6aa4", "../src/Loading.ts")
  ], Loading);
})();
//# sourceMappingURL=bundle.js.map
