import GameManager from "./GameManager";
import { stopWatchScript } from "./stopWatchScript";

const { regClass, property } = Laya;

@regClass()
export class Play extends Laya.Script {
    assembleData: Array<any>;
    itemData:Array<any>;
    selectedData :any = {};
    isSelected:Boolean = false;
    assembleList: Laya.List;
    pipe: Laya.Image;
    itemList: Laya.List;
    checkIndex: number;
    inputPort: number;
    stopSwitchSp: stopWatchScript;

    onEnable(): void {
        this.intercom();
        this.initLevel();
        
        
        this.pipe = this.owner.getChildByName('pipe') as Laya.Image;

        let openDialogBtn = this.owner.getChildByName('testDialog');
        openDialogBtn.on(Laya.Event.CLICK,()=>{
            Laya.Dialog.open('resources/prefabs/DialogSuccess.lh')
        });
    }

    intercom():void{
        Laya.stage.on(Laya.Event.MESSAGE,this,(data:any)=>{
            switch (data.type){
                case 'missionFail': {
                    Laya.Scene.open('/resources/scenes/Dialog_Fail.ls',false)
                } break;
                case 'gameStart':{
                    this.stopSwitchSp.reset(20000)
                    this.stopSwitchSp.countDown();
                } break;
                case 'tryAgain':{
                    Laya.timer.once(1000,this,()=>{
                        this,this.stopSwitchSp.reset(20000)
                        this.initLevel();
                    })
                } break;
                case 'success':{
                    Laya.timer.once(1000,this,()=>{
                        GameManager.getInstance().level ++;
                        this.initLevel()
                    })
                } break;
            }
        })
    }
    initLevel():void{
        const level = GameManager.getInstance().level;
        let title = this.owner.getChildByName('Box').getChildByName('title') as Laya.Label;
        title.text = 'Level ' + level
        this.initUi();
        this.initAssemble();
        Laya.Scene.open('resources/scenes/Dialog_start.ls',false)
    }

    initUi(): void {
        this.itemData = [
            {
                id: 1, itemImg: 'atlas/img/pipe01.png', desc: 'Pipe1', port1: 1, port2: 3
            },
            {
                id: 2, itemImg: 'atlas/img/pipe02.png', desc: 'Pipe1', port1: 2, port2: 4
            },
            {
                id: 3, itemImg: 'atlas/img/pipe03.png', desc: 'Pipe1', port1: 1, port2: 4
            },
            {
                id: 4, itemImg: 'atlas/img/pipe04.png', desc: 'Pipe1', port1: 3, port2: 4
            },
            {
                id: 5, itemImg: 'atlas/img/pipe05.png', desc: 'Pipe1', port1: 2, port2: 3
            },
            {
                id: 6, itemImg: 'atlas/img/pipe06.png', desc: 'Pipe1', port1: 2, port2: 1
            }
        ];

        let stopSwitch = this.owner.getChildByName('Box').getChildByName('StopWatch');
        this.stopSwitchSp = stopSwitch.getComponent(stopWatchScript)
        

        this.itemList = this.owner.getChildByName('Box').getChildByName('itemList') as Laya.List;        
        this.itemList.array = this.itemData;
        this.itemList.renderHandler = new Laya.Handler(this, this.renderItemList);
        this.itemList.mouseHandler = new Laya.Handler(this,this.mouseOnItemList);
    }
    initAssemble(): void {
        this.assembleData = [
            { index: 0, id: null, itemImg: '', port1: 0, port2: 0 },
            { index: 1, id: null, itemImg: '', port1: 0, port2: 0 },
            { index: 2, id: null, itemImg: '', port1: 0, port2: 0 },
            { index: 3, id: null, itemImg: '', port1: 0, port2: 0 },
            { index: 4, id: null, itemImg: '', port1: 0, port2: 0 },
            { index: 5, id: null, itemImg: '', port1: 0, port2: 0 },
            { index: 6, id: null, itemImg: '', port1: 0, port2: 0 },
            { index: 7, id: null, itemImg: '', port1: 0, port2: 0 },
            { index: 8, id: null, itemImg: '', port1: 0, port2: 0 },
        ];

        let random = Math.random();
        if(random > 0.5){
             this.assembleData[0].id = this.itemData[0].id;
             this.assembleData[0].itemImg = this.itemData[0].itemImg;
             this.assembleData[0].port1 = this.itemData[0].port1;
             this.assembleData[0].port2 = this.itemData[0].port2;
        }else{
            this.assembleData[0].id = this.itemData[2].id;
             this.assembleData[0].itemImg = this.itemData[2].itemImg;
             this.assembleData[0].port1 = this.itemData[2].port1;
             this.assembleData[0].port2 = this.itemData[2].port2;
        }

        random = Math.random();
        if(random > 0.5){
            this.assembleData[8].id = this.itemData[0].id;
            this.assembleData[8].itemImg = this.itemData[0].itemImg;
            this.assembleData[8].port1 = this.itemData[0].port1;
            this.assembleData[8].port2 = this.itemData[0].port2;
       }else{
            this.assembleData[8].id = this.itemData[4].id;
            this.assembleData[8].itemImg = this.itemData[4].itemImg;
            this.assembleData[8].port1 = this.itemData[4].port1;
            this.assembleData[8].port2 = this.itemData[4].port2;
       }
       this.assembleList = this.owner.getChildByName('Box').getChildByName("assembleBg").getChildByName('assembleList') as Laya.List;
       
       this.assembleList.array = this.assembleData;
       
       this.assembleList.renderHandler = new Laya.Handler(this, this.renderAssembleList);
       this.assembleList.mouseHandler = new Laya.Handler(this,this.mouseOnEssembleList);
    }
    

    renderItemList(item: Laya.Box, index: number): void {
        let data = item.dataSource
        let pipeImg = item.getChildByName('item') as Laya.Image
        pipeImg.skin = data.itemImg
    }
    renderAssembleList(item: Laya.Box, index: number): void {
        let data = item.dataSource
        let pipeImg = item.getChildByName('pipeImg') as Laya.Image
        pipeImg.skin = data.itemImg;

        let aimPrefab = item.getChildByName('aimPrefab') as Laya.UIComponent;
        if(data.id == null){
            aimPrefab.visible = true
        }else{
            aimPrefab.visible = false;
        }
    }

   


    mouseOnItemList(e:Event,index:number):void{
        if(e.type == 'mousedown'){
            this.selectedData = this.itemList.array[index]
            this.isSelected = true;
            this.pipe.skin = this.selectedData.itemImg
            this.pipe.pos(Laya.InputManager.mouseX,Laya.InputManager.mouseY,true);
            this.pipe.visible = true;
        }
    }

    mouseOnEssembleList(e:Event,index:number):void{
        if(e.type == 'mouseup'){
            if(index == 0 || index == 8) return
            
           this.assembleData[index].id = this.selectedData.id;
           this.assembleData[index].itemImg = this.selectedData.itemImg;
           this.assembleData[index].port1 = this.selectedData.port1;
           this.assembleData[index].port2 = this.selectedData.port2;
           this.assembleList.refresh();

           this.checkConnect();
        }
    }

    onMouseDrag(e:Laya.Event):void{
        this.pipe.pos(Laya.InputManager.mouseX,Laya.InputManager.mouseY,true);
    }
    onMouseDragEnd(e:Laya.Event):void{
        this.selectedData = {}
        this.isSelected = false;
        this.pipe.skin = '';
    }

    checkConnect() {
        this.checkIndex = 0
        this.inputPort = 3
        this.checking(this.checkIndex, this.inputPort)
    }

    checking(checkIndex: number, inputPort: number) {
        let result = this.checkUnit(checkIndex, inputPort);
        if (result.connected === true) {
            console.log("connected...");
            this.stopSwitchSp.stopRound(true);
            Laya.Dialog.open('resources/prefabs/DialogSuccess.lh')
        } else {
            console.log("not connected...");
            if (result.nextIndex !== -1) {
                this.checking(result.nextIndex, result.nextInputPort);
            }
        }
    }
    
    checkUnit(checkIndex: number, inputPort: number) {
        let nextIndex = -1
        let nextInputPort = 0
        let connected = false
        let connectPort = 0

        switch (inputPort) {
            case 1: connectPort = 3; break;
            case 2: connectPort = 4; break;
            case 3: connectPort = 1; break;
            case 4: connectPort = 2; break;
        }

        let currentUnit = this.assembleData[checkIndex]
        
        let { port1, port2 } = currentUnit

        if (port1 === 0 && port2 === 0) {

            
            
        } else if (checkIndex === 8) {
            if (connectPort === port1 || connectPort === port2) {
                connected = true
            }
        } else {
            if (connectPort === port1) {
                nextInputPort = port2
            }

            if (connectPort === port2) {
                nextInputPort = port1
            }

            if (connectPort !== nextInputPort) {
                switch (nextInputPort) {
                    case 1:
                        if (checkIndex === 0 || checkIndex === 3 || checkIndex === 6) {
                            nextIndex = -1
                        } else {
                            nextIndex = checkIndex - 1
                        }
                        break;
                    case 2:
                        if (checkIndex === 0 || checkIndex === 1 || checkIndex === 2) {
                            nextIndex = -1
                        } else {
                            nextIndex = checkIndex - 3
                        }
                        break
                    case 3:
                        if (checkIndex === 2 || checkIndex === 5) {
                            nextIndex = -1
                        } else {
                            nextIndex = checkIndex + 1
                        }
                        break
                    case 4:
                        if (checkIndex === 6 || checkIndex === 7) {
                            nextIndex = -1
                        } else {
                            nextIndex = checkIndex + 3
                        }
                        break
                    default:
                        nextIndex = -1
                        break;
                }
            }
        }

        // console.log('current index --> ',checkIndex, 'enter',inputPort, 'connect port -->',connectPort, "nextInputport-->",nextInputPort);
        
        return {
            nextIndex, nextInputPort, connected
        }
    }
    

}