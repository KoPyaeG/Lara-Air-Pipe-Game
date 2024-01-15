const { regClass, property } = Laya;

@regClass()
export class BallonScript extends Laya.Script {
    declare owner: Laya.Sprite;

    x: number;
    y: number;
    x2: number;
    y2: number;
    x3: number;
    y3: number;
    delay: number;
    speed: number = 800;
    auto: boolean = false;

    onEnable(): void {
        // this.initBallon()
        this.owner.pos(this.x, this.y);
        Laya.Tween.to(this.owner, {
            x: this.x2,
            y: this.y2
        }, 1000,Laya.Ease.linearNone,Laya.Handler.create(this,()=>{
            this.owner.pos(this.x3,this.y3);
            this.auto = true
        }),this.delay);
    }

    initBallon(x: number, y: number, x2: number, y2: number, x3: number, y3: number, delay: number,): void {
        this.x = x;
        this.y = y;
        this.x2 = x2;
        this.y2 = y2;
        this.x3 = x3;
        this.y3 = y3;
        this.delay = delay;
    }

    onUpdate(): void {
        if(!this.auto) return
        console.log('speed', Laya.timer.delta / 1000);
        
        this.owner.x += this.speed * Laya.timer.delta / 1000;
        if(this.owner.x > 3000) this.owner.destroy(true)
    }

}