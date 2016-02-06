
/// <reference path="_reference.ts"/>

//import CScreen = config.Screen;     (Alias)

//global variables
var assets:createjs.LoadQueue;

var canvas:HTMLElement;             //Container
var stage:createjs.Stage;           // Stage is an array of objects

var menu:scenes.Menu;

var assetData =[
     {id: "alone", src:"../../Assets/images/alone.png"},
     {id: "bg", src:"../../Assets/images/bg.png"},
     {id: "black", src:"../../Assets/images/black.png"},
     {id: "boxorroom", src:"../../Assets/images/boxorroom.png"},
     {id: "crossriver", src:"../../Assets/images/crossriver.png"},
     {id: "enterhouse", src:"../../Assets/images/enterhouse.png"},
     {id: "enterhousepic", src:"../../Assets/images/enterhousepic.png"},
     {id: "eyeretina", src:"../../Assets/images/eyeretina.png"},
     {id: "fingerprints", src:"../../Assets/images/fingerprints.png"},
     {id: "future", src:"../../Assets/images/future.png"},
     
     {id: "gamestart", src:"../../Assets/images/gamestart.png"},
     {id: "ghostinroom", src:"../../Assets/images/ghostinroom.png"},
     {id: "girlghost", src:"../../Assets/images/girlghost.png"},
     {id: "glassbreaks", src:"../../Assets/images/glassbreaks.png"},
     {id: "glassorstrong", src:"../../Assets/images/glassorstrong.png"},
     {id: "glassroom", src:"../../Assets/images/glassroom.png"},
     {id: "holeinboat", src:"../../Assets/images/holeinboat.png"},
     {id: "openbox", src:"../../Assets/images/openbox.png"},
     {id: "openroom", src:"../../Assets/images/openroom.png"},
     {id: "past", src:"../../Assets/images/past.png"},
     
     {id: "radiations", src:"../../Assets/images/radiations.png"},
     {id: "red", src:"../../Assets/images/red.png"},
     {id: "redorblack", src:"../../Assets/images/redorblack.png"},
     {id: "river", src:"../../Assets/images/river.png"},
     {id: "shock", src:"../../Assets/images/shock.png"},
     {id: "startgame", src:"../../Assets/images/startgame.png"},
     {id: "startover", src:"../../Assets/images/startover.png"},
     {id: "strongroom", src:"../../Assets/images/strongroom.png"},
     {id: "strongroompic", src:"../../Assets/images/strongroompic.png"},
     {id: "timemachine", src:"../../Assets/images/timemachine.png"},
     {id: "winthegame", src:"../../Assets/images/winthegame.png"},
     {id: "withboatwoman", src:"../../Assets/images/withboatwoman.png"},
     {id: "woodenbox", src:"../../Assets/images/woodenbox.png"}
     
]
function preload(){
    assets= new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    assets.on("complete",init,this); 
    assets.loadManifest(assetData);   
    
    //var image = queue.getResult("myImage");
}
 

function init():void{
    //create a reference to the HTML canvas element
    canvas  = document.getElementById("canvas");
    
    //create our main display list container
    stage = new createjs.Stage(canvas);
    
    //Enable mouse events
    stage.enableMouseOver(20);
    
    // set the frame rate to 60 frames per second. Try to keep it 60 or lower
    createjs.Ticker.setFPS(config.Game.FPS);  
    
    //create an event listener to count off frames   
    createjs.Ticker.on("tick", gameLoop,this);
    main();
}


//Main Game Loop function that handles what happens each "tick" or frame
function gameLoop(event:createjs.Event):void{           // All animations will do in gameLoop
    //menu.update();
    stage.update();             // Refresh or redraw everything on stage
}

//This function is executed one time
function main(){
    menu = new scenes.Menu();
}




/*
// GLOBAL GAME FRAMEWORK VARIABLES
var canvas: HTMLElement;
var stage: createjs.Stage;
var stats: Stats;
var state: number;
var scene: createjs.Container;
var stateFunction: any; // alias for our current state

// Game Variables
var helloLabel: objects.Label;
var startButton: objects.Button;


function init():void {
    canvas = document.getElementById("canvas"); // reference to canvas element
    stage = new createjs.Stage(canvas); // passing canvas to stage
    stage.enableMouseOver(20); // enable mouse events
    createjs.Ticker.setFPS(60); // set frame rate to 60 fps
    createjs.Ticker.on("tick", gameLoop); // update gameLoop every frame
    setupStats(); // sets up our stats counting

    state = config.MENU_STATE;
    changeState();
}

// Main Game Loop
function gameLoop(event: createjs.Event): void {
    stats.begin(); // start counting

    stage.update(); // redraw/refresh stage every frame

    stats.end(); // stop counting
}

// Setup Game Stats
function setupStats():void {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}

// Callback function / Event Handler for Start Button Click
function clickStartButton(event: createjs.MouseEvent): void {
    helloLabel.text = "Clicked";
}



// state machine prep
function changeState(): void {
    // Launch various scenes

    switch (state) {
        case config.MENU_STATE:
            // show the menu scene
            stateFunction = states.menu;

            break;
        case config.PLAY_STATE:
            // show the play scene
            break;
        case config.OVER_STATE:
            // show the game over scene
            break;
    }

    stateFunction();
}
 */