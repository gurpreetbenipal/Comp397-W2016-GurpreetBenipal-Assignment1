var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Button = (function (_super) {
        __extends(Button, _super);
        //CONSTRUCTOR
        function Button(pathString, x, y) {
            //super("Assets/images/" + pathString + ".png");
            _super.call(this, assets.getResult(pathString));
            this.name = pathString;
            this.x = x;
            this.y = y;
            this.width = 150;
            this.height = 50;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this.on("mouseover", this.overButton, this);
            this.on("mouseout", this.outButton, this);
            this.on("click", this.onClick, this);
        }
        // PRIVATE METHODS
        // Event Handler for mouse over
        Button.prototype.overButton = function (event) {
            this.cursor = "pointer";
            event.currentTarget.alpha = 0.7;
        };
        // Event Handler for mouse out
        Button.prototype.outButton = function (event) {
            event.currentTarget.alpha = 1.0;
        };
        //Event Handler for mouse click
        Button.prototype.onClick = function (event) {
            menu.update();
        };
        return Button;
    })(createjs.Bitmap);
    objects.Button = Button;
})(objects || (objects = {}));
//# sourceMappingURL=button.js.map