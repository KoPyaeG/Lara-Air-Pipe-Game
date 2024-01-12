const { regClass, property } = Laya;

@regClass()
export class ScenceStartScript extends Laya.Script {
    private btnStart: Laya.Button;

    @property({type:Laya.Button})
    private play: Laya.Button;

    onEnable(): void {
        this.play.on(Laya.Event.CLICK,this,()=>{
            Laya.Scene.open('/resources/scenes/Dialog_start.ls',false)
        })
    }
}