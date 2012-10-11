

require(['domReady', 'ocanvas/ocanvas', 'ocanvas/shipshape', 'sim/sim', 'ship/ship'],
    function (domReady, oCanvas, shipshape, Sim, Ship) {
        var sim1 = new Sim({});
    domReady(function () {
        console.log("domReady");
        var canvas = oCanvas.create({
            canvas: "#canvas"
        });

        var text = canvas.display.text({
            x: 177,
            y: 196,
            origin: { x: "center", y: "center" },
            align: "center",
            font: "bold 25px/1.5 sans-serif",
            text: "Mouse Position\nX: 0\nY: 0",
            fill: "#000"
        });
        canvas.addChild(text);

        var screenSize = {
            x: 900,
            y: 500,
            worldDrawScale: 30
        };

        var sim = new Sim();

//        var _handleMouseWheel = function(e) {
//            var event=window.event || e; //equalize event object
//            var delta=event.detail? event.detail*(-120) : event.wheelDelta; //check for detail first so Opera uses that instead of wheelDelta
//            var canvas = document.getElementById(this.canvasElementId);
//            var x = event.layerX - canvas.offsetLeft;
//            var y = event.layerY - canvas.offsetTop;
//
////                this._handleMove(x, y);
//
//            if (delta > 0) {
//                this.trigger('zoomIn', new XY(x, y));
//            } else if (delta < 0) {
//                this.trigger('zoomOut', new XY(x, y));
//            }
//        }
//
//        var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel"; //FF doesn't recognize mousewheel as of FF3.x
//
//        if (document.attachEvent) {
//            //if IE (and Opera depending on user setting)
//            document.getElementById('canvas').attachEvent("on" + mousewheelevt, this._handleMouseWheel.bind(this));
//        } else if (document.addEventListener) {
//            //WC3 browsers
//            document.getElementById('canvas').addEventListener(mousewheelevt, this._handleMouseWheel.bind(this), false);
//        }





        var shipshape = canvas.display.shipshape({
            width: 23.8,
            height: 173,
            fill: "#0aa",
            scale: 1
        });

        var tico = new Ship({
            ocShape: shipshape,
            initialPosition: {
                x: screenSize.x/2/screenSize.worldDrawScale,
                y: screenSize.y/2/screenSize.worldDrawScale
            }
        });
        canvas.addChild(shipshape);
        sim.addObject(tico);

        canvas.setLoop(function () {
//            console.log("looping")
            text.text = "Mouse Position\n" +
                "X: " + canvas.mouse.x + "\n" +
                "Y: " + canvas.mouse.y;
            sim.update();
        });
        canvas.timeline.start();
    });
});