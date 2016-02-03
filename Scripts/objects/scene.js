var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    //Scene Class
    var Scene = (function (_super) {
        __extends(Scene, _super);
        //Private Instance Varibles
        /*private _image : createjs.Bitmap;
        private _leftButton : objects.Button;
        private _rightButton : objects.Button;*/
        //CONSTRUCTOR
        function Scene() {
            _super.call(this);
            this.start();
        }
        //Add game objects to my scene in this method
        Scene.prototype.start = function () {
            stage.addChild(this);
        };
        //Update game objects in my scene
        Scene.prototype.update = function () {
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
        };
        return Scene;
    })(createjs.Container);
    objects.Scene = Scene;
})(objects || (objects = {}));
//# sourceMappingURL=scene.js.map