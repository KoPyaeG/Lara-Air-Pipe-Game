export default class GameManager{
    private static instance:GameManager = new GameManager();

    toolIngo:any;
    level:number = 1;

    public static getInstance() : GameManager{
        return GameManager.instance;
    }
}