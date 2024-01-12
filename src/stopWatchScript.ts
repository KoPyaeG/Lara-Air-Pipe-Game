const { regClass, property } = Laya;


const GREEN = 1;
const YELLOW = 2;
const RED = 3

@regClass()
export class stopWatchScript extends Laya.Script {
    insideSp: Laya.Sprite;
    timeMask: Laya.Sprite;
    timeLabel: Laya.Label;
    cdUpdateTime: number;
    startRotation: number;
    CDTime: number;
    cdOffset: number;
    color:number;

    onEnable(): void {
        let baseSp = this.owner.getChildByName('BaseSp') as Laya.Sprite;
        this.insideSp = baseSp.getChildByName('insideSp') as Laya.Sprite;
        this.timeMask = baseSp.getChildByName('timeMask') as Laya.Sprite;
        this.timeLabel = this.owner.getChildByName('Label') as Laya.Label;
        
        this.reset(20000)
        // this.countDown();

    }

    reset(firstCD : number):void{
        this.timeLabel.text = '' + firstCD / 1000;
        this.cdUpdateTime = 10;
        this.startRotation = -90;
        this.drawBaseCircle('#2fc97f');
        this.color = GREEN

        this.CDTime = firstCD;
        this.cdOffset = 360 * this.cdUpdateTime / this.CDTime;
        this.timeMask.graphics.clear()
        this.timeMask.graphics.drawPie(200,200,200,this.startRotation,270,'#ff0000');
        
    }

    countDown(): void{
        this.drawBaseCircle('#2fc97f');
        Laya.timer.loop(this.cdUpdateTime,this,this.update)
    }

    drawBaseCircle(color:string) : void{
        this.insideSp.graphics.drawCircle(180,180,180,null,color,50)
        
    }

    update():void{
         this.startRotation += this.cdOffset;
         this.timeMask.graphics.clear();
         this.timeMask.graphics.drawPie(200,200,200,this.startRotation,270,'#ff0000');

         if(this.timeLabel !== null){
            this.timeLabel.text = '' + Math.ceil(this.CDTime / 1000 * (270 - this.startRotation) / 360)
         }

         if(this.startRotation >= 270){
            this.stopRound(false)            
         }

         if(this.startRotation > 30 && this.color === GREEN){
            this.drawBaseCircle('#fadd41');
            this.color = YELLOW;
         }

         if(this.startRotation > 150 && this.color === YELLOW){
            this.drawBaseCircle('#ff4d16');
            this.color = RED;
         }
    }

    stopRound(manual:boolean): void{
        Laya.timer.clear(this,this.update);

        if(manual === false){
            Laya.stage.event(Laya.Event.MESSAGE,{type:'missionFail'})
        }
    }
}