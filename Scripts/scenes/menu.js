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
            this._newScene = new objects.Scene();
            //Set the background image
            this._bgImage = new createjs.Bitmap("Assets/images/gamestart.png");
            //Add the background image on the screen
            this.addChild(this._bgImage);
            //Start Game Label
            this._textLabel = new createjs.Text("Travel through the time to find 'TREASURE'", "bold 25px Monotype Corsiva", "#FF7700");
            this.addChild(this._textLabel);
            this._textLabel.x = config.Screen.CENTER_X - 150;
            this._textLabel.y = config.Screen.CENTER_Y + 270;
            //Start Button
            this._startButton = new objects.Button("startgame", config.Screen.CENTER_X + 30, config.Screen.CENTER_Y + 220);
            this.addChild(this._startButton);
            //Add game objects to the Stage
            stage.addChild(this);
        };
        //MENU scene updates here
        Menu.prototype.update = function () {
            this.removeAllChildren();
            switch (this._name) {
                case "startgame":
                    this._textLabel = new createjs.Text("You came to know that you would find a TREASURE by going into\n PAST or FUTURE. Now you are standing in the front of a \n'TIME MACHINE' that will take you into either past or future. \nThe time machine is having two buttons PAST and FUTURE. \nSo which one will you choose?", "bold 25px Cambria", "#e1db4e");
                    this._createObjects("timemachine", "past", "future"); // Provide the name of buttons and game background image
                    break;
                case "past":
                    this._textLabel = new createjs.Text("Now, you are entered into the Past and you find yourself in the front \nof an isolated house and there is a river besides it. Then you find a \nrock on which it has mentioned that you might get a treasure either \nby entering into a house or by crossing the river. Now, which option \nyou will choose?", "bold 25px Cambria", "#c1bb2e");
                    this._createObjects("enterhousepic", "enterhouse", "crossriver"); // Provide the name of buttons and game background image
                    break;
                case "enterhouse":
                    this._textLabel = new createjs.Text("You are standing in the hall of the house and there you see a \n wooden box and a suspicious room where you can get a \nTreasure. Now, which way you will go?", "bold 25px Cambria", "#00ff00");
                    this._createObjects("boxorroom", "openbox", "openroom");
                    break;
                case "openbox":
                    this._textLabel = new createjs.Text("You are trying to open the box and there is a snake hidden \nbesides the box who bites you and you died.", "bold 25px Cambria", "#e3d9ad");
                    this._createObjects("woodenbox", "startover", "");
                    break;
                case "openroom":
                    this._textLabel = new createjs.Text("You unlock the mysterious room that is possessed by a ghost. You \nenter into the room, which makes that ghost angry and more \npowerful.And she attacks you and kills you.", "bold 25px Cambria", "#f6ff66");
                    this._createObjects("ghostinroom", "startover", "");
                    break;
                case "crossriver":
                    this._textLabel = new createjs.Text("You have chosen to cross the river for which you have two ways to go \nto the other side of the river.You see two boats: one you need to \ndrive alone and the other one is driven by a boatwoman. \nWhich one you will select?", "bold 25px Cambria", "#062916");
                    this._createObjects("river", "alone", "withboatwoman");
                    break;
                case "alone":
                    this._textLabel = new createjs.Text("You are driving the boat by yourself and you noticed that there is a \nbig hole inside the boat through which water started coming inside \nthe boat. The boat sinked into the river and you died.", "bold 25px Cambria", "#f9ffc8");
                    this._createObjects("holeinboat", "startover", "");
                    break;
                case "withboatwoman":
                    this._textLabel = new createjs.Text("You choose to go with a boatwoman to cross the river. In the middle \nof the river, you look into the river, then you saw only your reflection \nin the water, but not the boatwoman's reflection. Then you realized \nthat the boatwoman is not an ordinary woman, she is actually a \nspirit. Suddenly, she attacked you and killed you.", "bold 25px Cambria", "#f9ffc8");
                    this._createObjects("girlghost", "startover", "");
                    break;
                case "future":
                    this._textLabel = new createjs.Text("Now you entered into the future. In future, with the help of \n technical instruments, you can find the treasure. You found \nyourself in front of two rooms in a building. One room is made \nup of Glass and the other one is made up of concrete. Only one \nroom contains the treasure. Which one you will select?", "bold 25px Cambria", "#fdff10");
                    this._createObjects("glassorstrong", "glassroom", "strongroom");
                    break;
                case "strongroom":
                    this._textLabel = new createjs.Text("You choose the Strong Room, but it is Locked. To open this room,\nyou have to either choose Finger Detection or Eye Retina Detection.\nOnly one of them will open the room. The wrong option may also \nkill you. So, what will you choose?", "bold 25px Cambria", "#ffffff");
                    this._createObjects("strongroompic", "fingerprints", "eyeretina");
                    break;
                case "fingerprints":
                    this._textLabel = new createjs.Text("You decided to use the Finger Print Detection to open the door.\n But it is a wrong option, when you touch the screen, you trapped\n into an Electric Shock and died.", "bold 25px Cambria", "#000000");
                    this._createObjects("shock", "startover", "");
                    break;
                case "eyeretina":
                    this._textLabel = new createjs.Text("The room screen detect your eye retina and afterwards the door \nopens. In front of you, there is a precious treasure and you won \nthe 'GAME'.", "bold 25px Cambria", "#ffffff");
                    this._createObjects("winthegame", "startover", "");
                    break;
                case "glassroom":
                    this._textLabel = new createjs.Text("You choose Glass room and there are two buttons at the door of \nGlass Room:  RED and BLACK. Which button will you choose to open \nthe door. Your wrong decision may put your life in danger. So be \ncareful to choose the button.", "bold 25px Cambria", "#FF7700");
                    this._createObjects("redorblack", "red", "black");
                    break;
                case "red":
                    this._textLabel = new createjs.Text("You choose RED button and this button activates the danger zone.\nThe door emits the dangerous radiations that burn your body \nand you died.", "bold 25px Cambria", "#FF7700");
                    this._createObjects("radiations", "startover", "");
                    break;
                case "black":
                    this._textLabel = new createjs.Text("You choose BLACK button and this button activates the danger zone.\n The glass of the room breaks into pieces and these pieces stucks \ninto your body and you died.", "bold 25px Cambria", "#FF7700");
                    this._createObjects("glassbreaks", "startover", "");
                    break;
                case "startover":
                    this._textLabel = new createjs.Text("Travel through the time to find 'TREASURE'", "bold 25px Monotype Corsiva", "#FF7700");
                    this._createObjects("gamestart", "startgame", "");
                    break;
            }
            this._newScene.update(); //The new scene updated here
        };
        //Game Objects are created and added on the scene here
        Menu.prototype._createObjects = function (imageName, leftButton, rightButton) {
            //Create the different image for different scenes as per the selection
            this._image = new createjs.Bitmap("Assets/images/" + imageName + ".png");
            this.addChild(this._image);
            if (this._name != "startover") {
                this._textLabel.x = config.Screen.CENTER_X - 300;
                this._textLabel.y = config.Screen.CENTER_Y - 200;
            }
            else {
                this._textLabel.x = config.Screen.CENTER_X - 150;
                this._textLabel.y = config.Screen.CENTER_Y + 270;
            }
            this.addChild(this._textLabel);
            if (rightButton == "") {
                this._leftButton = new objects.Button(leftButton, config.Screen.CENTER_X + 30, config.Screen.CENTER_Y + 220);
                this.addChild(this._leftButton);
                //Attach Button Event Listener
                this._leftButton.on("click", function () { this._name = leftButton; this.update(); }, this);
            }
            else {
                //Left button is created here
                this._leftButton = new objects.Button(leftButton, config.Screen.CENTER_X - 200, config.Screen.CENTER_Y + 250);
                this.addChild(this._leftButton);
                //Right button is created here
                this._rightButton = new objects.Button(rightButton, config.Screen.CENTER_X + 290, config.Screen.CENTER_Y + 250);
                this.addChild(this._rightButton);
                //Attach Button Event Listener
                this._leftButton.on("click", function () { this._name = leftButton; this.update(); }, this);
                this._rightButton.on("click", function () { this._name = rightButton; this.update(); }, this);
            }
        };
        return Menu;
    })(objects.Scene);
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
//# sourceMappingURL=menu.js.map