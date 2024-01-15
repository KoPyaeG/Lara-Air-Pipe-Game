import GameManager from "./GameManager";
import { LoadingBase } from "./Loading.generated";

const { regClass, property } = Laya;

@regClass()
export class Loading extends LoadingBase {

    onEnable(): void {
        this.loadingBar.value = 0.75;
        this.loaderToolInfoConfig();
        this.loadAudioConfig();
        this.getLoaclStorage();
    }

    loaderToolInfoConfig():void{
        const jsonPath: string = './resources/config/config_toolInfo.json';
        Laya.loader.load(jsonPath,Laya.loader.JSON).then((json)=>{
            GameManager.getInstance().toolInfo = json.data;
            console.log('data',GameManager.getInstance().toolInfo);
            
        })
    }
    loadAudioConfig():void{
        const jsonPath: string = './resources/config/config_audio.json';
        Laya.loader.load(jsonPath,Laya.loader.JSON).then((json)=>{
            let audioPath = json.data

            console.log(audioPath);
            this.loadAudio(audioPath)
            
        })
    }

    loadAudio (path:string[]) : void{
        Laya.loader.load(path,null,Laya.Handler.create(this,this.onLoading,null,false)).then((res)=>{
            if(res){
                Laya.Scene.open('resources/scenes/Scence_start.ls')
            }
        })
    }

    onLoading(progress:number):void{
        this.loadingBar.value = progress;
    }

    getLoaclStorage():void{
        let level = localStorage.getItem('level')
        console.log(level);
        if(level == null){
            localStorage.setItem('level','1');
            GameManager.getInstance().level = 1
        }else{
            GameManager.getInstance().level = parseInt(level)
        }
    }
}