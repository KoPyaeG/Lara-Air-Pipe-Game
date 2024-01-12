const { regClass, property } = Laya;

@regClass()
export class DialogSuccessScript extends Laya.Script {
    
    onEnable(): void {

        // console.log(Laya.stage.width);
        
        // this.owner.width = Laya.stage.width;
        // this.owner.height = Laya.stage.height;

        // let background = this.owner.getChildByName('background') as Laya.Image;
        // console.log(background);
        
        // background.width =Laya.stage.width;
        // background.height = Laya.stage.height;

        // console.log(background.width);
        


        let btnClose = this.owner.getChildByName('btnClose');
        btnClose.on(Laya.Event.CLICK ,()=>{
            Laya.stage.event(Laya.Event.MESSAGE,{type:'success'});
            this.owner.close();
        })

    }
}