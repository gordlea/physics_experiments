//requirejs.config({
//    //By default load any module IDs from js/lib
//    baseUrl: 'js/'
//});

require(['domReady', 'ocanvas/ocanvas'], function (domReady, oCanvas) {
    domReady(function () {
        console.log("domReady");
    });
});