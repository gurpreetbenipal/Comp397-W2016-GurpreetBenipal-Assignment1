// MENU STATE
module scenes {
    export class Menu extends objects.Scene{
        
        //PRIVATE INSTANCE VARIABLES
        //private _helloLabel:createjs.Text;  
        //private _leftButtonName:String;
        //private _rightButtonName:String;
        private _name:string;
        private _newScene:objects.Scene;
        private _image : createjs.Bitmap;
        private _leftButton : objects.Button;
        private _rightButton : objects.Button;
        private _textLabel : objects.Label;
        
        private _bgImage:createjs.Bitmap;
        private _startButton:objects.Button;
        //CONSTRUCTOR
        constructor(){
            super();
            this._name="startgame";
        }
        
        //PUBLIC METHODS++++++++++++++++
        //Start Method
        public start():void{
            console.log("Game Started...");
            //this._helloLabel = new createjs.Text("Gurpreet Benipal","50px Consolas", "#C0F050");
            //this._helloLabel.regX = this._helloLabel.getMeasuredWidth() * 0.5;
            //this._helloLabel.regY = this._helloLabel.getMeasuredHeight() * 0.5;
            
            //this._helloLabel.x = config.Screen.CENTER_X;
            //this._helloLabel.y = config.Screen.CENTER_Y;
            
            //this.addChild(this._helloLabel);
            
            this._bgImage = new createjs.Bitmap("Assets/images/gamestart.png");
            this.addChild(this._bgImage);
            
            this._textLabel = new createjs.Text("Travel through the time to find 'TREASURE'","bold 25px Monotype Corsiva","#FF7700");
            this.addChild(this._textLabel);
            this._textLabel.x = config.Screen.CENTER_X-150;
            this._textLabel.y = config.Screen.CENTER_Y+270;
            
            this._startButton = new objects.Button("startgame",config.Screen.CENTER_X+30,config.Screen.CENTER_Y+220);
           
            //Start Button Event Listener
            //this._startButton.on("click",this._startButtonClick,this);
            
            this.addChild(this._startButton);
            
            stage.addChild(this);
        }
        
        //MENU scene updates here
        public update():void{
             
        }
        
        //EVENT HANDLERS
        /*private _startButtonClick(event:createjs.MouseEvent):void{
            //this._helloLabel.text = "Game Started";
            this.update();
        }*/
        
        private _createObjects(imageName:String, leftButton:string, rightButton:string):void{
            
         
        }
        //EVENT HANDLERS
       /* private _buttonClick(event:createjs.MouseEvent):void{
            //this._helloLabel.text = "Game Started";
            menu.update();
        }*/
    }
}