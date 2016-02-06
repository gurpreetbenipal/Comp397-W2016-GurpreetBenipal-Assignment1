module objects {
    export class Button extends createjs.Bitmap {
        //PRIVATE INSTANCE VARIABLES
        name : string;
        width: number;
        height: number;
        //CONSTRUCTOR
        constructor(pathString:string, x:number, y: number) {
            //super("Assets/images/" + pathString + ".png");
            super(assets.getResult(pathString));
            this.name=pathString;
            this.x = x;
            this.y = y; 
            
            this.width = 150;
            this.height = 50;

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this.on("mouseover", this.overButton, this);
            this.on("mouseout", this.outButton, this);
            this.on("click",this.onClick,this);
        }
        // PRIVATE METHODS
        // Event Handler for mouse over
        overButton(event: createjs.MouseEvent): void {
            this.cursor="pointer";
            event.currentTarget.alpha = 0.7;
        }

        // Event Handler for mouse out
        outButton(event: createjs.MouseEvent): void {
            event.currentTarget.alpha = 1.0;
        }
        
        //Event Handler for mouse click
        onClick(event:createjs.MouseEvent):void{
            menu.update();
        }
    }
} 