const { regClass, property } = Laya;

@regClass()
export class Dialog extends Laya.Script {
    @property(String)
    public text: string = "";

    onEnable(): void {
        let dialog = this.owner.getChildByName('Dialog') as Laya.Dialog;
        let play = dialog.getChildByName('btnClose') as Laya.Button;

        play.on(Laya.Event.CLICK,this,()=>{
            Laya.stage.event(Laya.Event.MESSAGE,{type:'tryAgain'})
            this.owner.destroy(true)
        })
    }
}