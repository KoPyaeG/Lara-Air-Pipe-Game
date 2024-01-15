import GameManager from "./GameManager";

const { regClass, property } = Laya;

@regClass()
export class Dialog extends Laya.Script {
    @property(String)
    public text: string = "";

    onEnable(): void {
        let dialog = this.owner.getChildByName('Dialog') as Laya.Dialog;
        let play = dialog.getChildByName('btnStart') as Laya.Button;
        let levelLabel = dialog.getChildByName('Image').getChildByName('levelLabel') as Laya.Label;
        levelLabel.text = 'Level ' + GameManager.getInstance().level
        play.on(Laya.Event.CLICK,this,()=>{
            Laya.SoundManager.playSound('resources/audio/ready_go.mp3',1)
            Laya.stage.event(Laya.Event.MESSAGE,{type:'gameStart'})
            this.owner.destroy(true)
        })
    }
}