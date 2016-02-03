module objects {
    
    //Scene Class
    export class Scene extends createjs.Container{
        
        //Private Instance Varibles
        
        /*private _image : createjs.Bitmap;
        private _leftButton : objects.Button;
        private _rightButton : objects.Button;*/
        
        //CONSTRUCTOR
        constructor(){
            super();
            this.start();
        }
        //Add game objects to my scene in this method
        public start():void{
            stage.addChild(this);
        }
        
        //Update game objects in my scene
        public update():void{
            
          /*  this._image = new createjs.Bitmap("Assets/images/"+imageName+".png");
            this.addChild(this._image);
            
            if(rightButton=="")
            {
                this._leftButton = new objects.Button(leftButton,config.Screen.CENTER_X-50,config.Screen.CENTER_Y+250);
                this.addChild(this._leftButton);
            }
            else
            {
                this._leftButton = new objects.Button(leftButton,config.Screen.CENTER_X-200,config.Screen.CENTER_Y+250);
                this.addChild(this._leftButton);
                this._rightButton = new objects.Button(rightButton,config.Screen.CENTER_X+300,config.Screen.CENTER_Y+250);
                this.addChild(this._rightButton);
            }
            //Start Button Event Listener
           /* this._leftButton.on("click",this._buttonClick,this);
            this._rightButton.on("click",this._buttonClick,this);*/
     
            stage.addChild(this);
        }
        //EVENT HANDLERS
        /*private _buttonClick(event:createjs.MouseEvent):void{
            //this._helloLabel.text = "Game Started";
            menu.update();
        }*/
        
        
    }
}