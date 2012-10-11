define(['ocanvas/ocanvas'],function(oCanvas){

    // Define the class
    // Define the class
    var shipshape = function (settings, thecore) {

        // Return an object when instantiated
        return oCanvas.extend({
            core: thecore,

            shapeType: "rectangular",

            draw: function () {
                var canvas = this.core.canvas,
                    origin = this.getOrigin(),
                    x = this.abs_x - origin.x,
                    y = this.abs_y - origin.y;

                canvas.beginPath();

//                    // Set styles
                    canvas.lineWidth = this.strokeWidth;
                    canvas.strokeStyle = this.strokeColor;



                var length = 173*this.scale;
                var beam = 23.8*this.scale;

                var hl = length/2;
                var hb = beam/2;

                canvas.lineWidth = this.strokeWidth;
                canvas.strokeStyle = this.strokeColor;
                canvas.beginPath();
                canvas.moveTo(0,hl);
                canvas.lineTo(hb / 6 * 5, hl);
                canvas.bezierCurveTo(hb, hl/4, hb, hl/4 * -3, 0, hl * -1);
                canvas.bezierCurveTo(hb*-1, hl/4 * -3, -1*hb, hl/4, hb / 6 * -5, hl);
                canvas.lineTo(hb / 6 * 5, hl);
                canvas.stroke();
                canvas.closePath();

                canvas.closePath();

                return this;
            }

        }, settings);
    };

    // Register the display object
    oCanvas.registerDisplayObject("shipshape", shipshape);

});