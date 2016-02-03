
/// <reference path="_reference.ts"/>

//import CScreen = config.Screen;     (Alias)

//global variables
var canvas:HTMLElement;             //Container
var stage:createjs.Stage;           // Stage is an array of objects

var menu:scenes.Menu;

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