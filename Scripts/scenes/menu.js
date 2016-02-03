var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// MENU STATE
var scenes;
(function (scenes) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        //CONSTRUCTOR
        function Menu() {
            _super.call(this);
            this._name = "startgame";
        }
        //PUBLIC METHODS++++++++++++++++
        //Start Method
        Menu.prototype.start = function () {
            console.log("Game Started...");
            //this._helloLabel = new createjs.Text("Gurpreet Benipal","50px Consolas", "#C0F050");
            //this._helloLabel.regX = this._helloLabel.getMeasuredWidth() * 0.5;
            //this._helloLabel.regY = this._helloLabel.getMeasuredHeight() * 0.5;
            //this._helloLabel.x = config.Screen.CENTER_X;
            //this._helloLabel.y = config.Screen.CENTER_Y;
            //this.addChild(this._helloLabel);
            this._bgImage = new createjs.Bitmap("Assets/images/gamestart.png");
            this.addChild(this._bgImage);
            this._textLabel = new createjs.Text("Travel through the time to find 'TREASURE'", "bold 25px Monotype Corsiva", "#FF7700");
            this.addChild(this._textLabel);
            this._textLabel.x = config.Screen.CENTER_X - 150;
            this._textLabel.y = config.Screen.CENTER_Y + 270;
            this._startButton = new objects.Button("startgame", config.Screen.CENTER_X + 30, config.Screen.CENTER_Y + 220);
            //Start Button Event Listener
            //this._startButton.on("click",this._startButtonClick,this);
            this.addChild(this._startButton);
            stage.addChild(this);
        };
        //MENU scene updates here
        Menu.prototype.update = function () {
        };
        //EVENT HANDLERS
        /*private _startButtonClick(event:createjs.MouseEvent):void{
            //this._helloLabel.text = "Game Started";
            this.update();
        }*/
        Menu.prototype._createObjects = function (imageName, leftButton, rightButton) {
        };
        return Menu;
    })(objects.Scene);
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
//# sourceMappingURL=menu.js.map