// MENU STATE
module scenes {
    export class Menu extends objects.Scene{
        
        //PRIVATE INSTANCE VARIABLES
        private _name:string;                       //Name of buttons
        private _newScene:objects.Scene;
        private _image : createjs.Bitmap;           //Image for each scene
        
        //Left and Right Game Buttons 
        private _leftButton : objects.Button;
        private _rightButton : objects.Button;
        
        //Labels on each scene
        private _textLabel : objects.Label;
        
        //Background Image of game
        private _bgImage:createjs.Bitmap;
        
        //Start Game Button
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
            
            //Set the background image
            this._bgImage = new createjs.Bitmap("Assets/images/gamestart.png");
            //Add the background image on the screen
            this.addChild(this._bgImage);
            
            //Start Game Label
            this._textLabel = new createjs.Text("Travel through the time to find 'TREASURE'","bold 25px Monotype Corsiva","#FF7700");
            this.addChild(this._textLabel);
            this._textLabel.x = config.Screen.CENTER_X-150;
            this._textLabel.y = config.Screen.CENTER_Y+270;
            
            //Start Button
            this._startButton = new objects.Button("startgame",config.Screen.CENTER_X+30,config.Screen.CENTER_Y+220);
            this.addChild(this._startButton);
            
            //Add game objects to the Stage
            stage.addChild(this);
        }
        
        //MENU scene updates here
        public update():void{
             
        }
        
        //Game Objects are created and added on the scene here
        
        private _createObjects(imageName:String, leftButton:string, rightButton:string):void
        {
           //Create the different image for different scenes as per the selection
           this._image = new createjs.Bitmap("Assets/images/"+imageName+".png");
           this.addChild(this._image);
           
           
           if(this._name!="startover")          //If the name of the button is not 'startover', then put the text label at the top-left corner of the screen
           {
               this._textLabel.x = config.Screen.CENTER_X-300;
                this._textLabel.y = config.Screen.CENTER_Y-200;
               
           }
           else         //If the name of the button is 'startover', then put the text label at the bottom and center of the screen
           {
                this._textLabel.x = config.Screen.CENTER_X-150;
               this._textLabel.y = config.Screen.CENTER_Y+270;
           }
         
           this.addChild(this._textLabel);
           
           
            if(rightButton=="")             // If there is only one button displayed on the screen
            {
                this._leftButton = new objects.Button(leftButton,config.Screen.CENTER_X+30,config.Screen.CENTER_Y+220);
                this.addChild(this._leftButton);
                this._leftButton.on("click",function(){this._name=leftButton;this.update();},this);
            }
            else              // If there are two buttons displayed on the screen
            {
                this._leftButton = new objects.Button(leftButton,config.Screen.CENTER_X-200,config.Screen.CENTER_Y+250);
                this.addChild(this._leftButton);
                this._rightButton = new objects.Button(rightButton,config.Screen.CENTER_X+290,config.Screen.CENTER_Y+250);
                this.addChild(this._rightButton);
                this._leftButton.on("click",function(){this._name=leftButton;this.update();},this);
                this._rightButton.on("click",function(){this._name=rightButton;this.update();},this);
            }
            //Attach Button Event Listener
           
           
            //stage.addChild(this);
        }
    }
}