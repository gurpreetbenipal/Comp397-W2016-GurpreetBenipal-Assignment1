/// <reference path="_reference.ts"/>
//import CScreen = config.Screen;     (Alias)
//global variables
var assets;
var canvas; //Container
var stage; // Stage is an array of objects
var menu;
var assetData = [
    { id: "alone", src: "../../Assets/images/alone.png" },
    { id: "bg", src: "../../Assets/images/bg.png" },
    { id: "black", src: "../../Assets/images/black.png" },
    { id: "boxorroom", src: "../../Assets/images/boxorroom.png" },
    { id: "crossriver", src: "../../Assets/images/crossriver.png" },
    { id: "enterhouse", src: "../../Assets/images/enterhouse.png" },
    { id: "enterhousepic", src: "../../Assets/images/enterhousepic.png" },
    { id: "eyeretina", src: "../../Assets/images/eyeretina.png" },
    { id: "fingerprints", src: "../../Assets/images/fingerprints.png" },
    { id: "future", src: "../../Assets/images/future.png" },
    { id: "gamestart", src: "../../Assets/images/gamestart.png" },
    { id: "ghostinroom", src: "../../Assets/images/ghostinroom.png" },
    { id: "girlghost", src: "../../Assets/images/girlghost.png" },
    { id: "glassbreaks", src: "../../Assets/images/glassbreaks.png" },
    { id: "glassorstrong", src: "../../Assets/images/glassorstrong.png" },
    { id: "glassroom", src: "../../Assets/images/glassroom.png" },
    { id: "holeinboat", src: "../../Assets/images/holeinboat.png" },
    { id: "openbox", src: "../../Assets/images/openbox.png" },
    { id: "openroom", src: "../../Assets/images/openroom.png" },
    { id: "past", src: "../../Assets/images/past.png" },
    { id: "radiations", src: "../../Assets/images/radiations.png" },
    { id: "red", src: "../../Assets/images/red.png" },
    { id: "redorblack", src: "../../Assets/images/redorblack.png" },
    { id: "river", src: "../../Assets/images/river.png" },
    { id: "shock", src: "../../Assets/images/shock.png" },
    { id: "startgame", src: "../../Assets/images/startgame.png" },
    { id: "startover", src: "../../Assets/images/startover.png" },
    { id: "strongroom", src: "../../Assets/images/strongroom.png" },
    { id: "strongroompic", src: "../../Assets/images/strongroompic.png" },
    { id: "timemachine", src: "../../Assets/images/timemachine.png" },
    { id: "winthegame", src: "../../Assets/images/winthegame.png" },
    { id: "withboatwoman", src: "../../Assets/images/withboatwoman.png" },
    { id: "woodenbox", src: "../../Assets/images/woodenbox.png" }
];
function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}
function init() {
    //create a reference to the HTML canvas element
    canvas = document.getElementById("canvas");
    //create our main display list container
    stage = new createjs.Stage(canvas);
    //Enable mouse events
    stage.enableMouseOver(20);
    // set the frame rate to 60 frames per second. Try to keep it 60 or lower
    createjs.Ticker.setFPS(config.Game.FPS);
    //create an event listener to count off frames   
    createjs.Ticker.on("tick", gameLoop, this);
    main();
}
//Main Game Loop function that handles what happens each "tick" or frame
function gameLoop(event) {
    //menu.update();
    stage.update(); // Refresh or redraw everything on stage
}
//This function is executed one time
function main() {
    menu = new scenes.Menu();
}
//# sourceMappingURL=game.js.map