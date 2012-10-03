
require(['domReady', 'ocanvas/ocanvas', 'ship/shipshape'], function (domReady, oCanvas, shipshape) {
    domReady(function () {
        console.log("domReady");
        var canvas = oCanvas.create({
            canvas: "#canvas"
        });

        var rectangle = canvas.display.shipshape({
            x: 100,
            y: 100,
            width: 200,
            height: 100,
            fill: "#0aa"
        });

        canvas.addChild(rectangle);
    });
});