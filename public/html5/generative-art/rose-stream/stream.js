
function sketchProc(processing) {
    
    var localFns = getLocalApi('processing'); eval(localFns); // Magic: private mixin

    var width           = 600;
    var height          = 400;
    var NoiseScale      = 0.0005;
    var NoiseOffsetX    = 0;
    var NoiseOffsetY    = 0;

    var maxStreams  = 3000;			// At least 1000, no more than 5000
    var streams     = 0;

    function setup() {
        size(width, height, processing.P2D);
        background(255);
        smooth();
        noFill();
        stroke(216, 32, 127, 32);
    }

    function draw() {
        NoiseOffsetX += 5;
        NoiseOffsetY += 7.1;

        if (streams < maxStreams) {
            drawOneStream();
        }
        else {
            exit();
        }
    }

    function drawOneStream() {
        streams = streams + 1;

        var px = 0;
        var py = height/2.0;
        var vx = 1;
        var vy = 0;
        var pcnt = 0;

        while ((px>=0) && (px<width) && (py<height) && (py>=0)) {
            point(px, py);

            var x = (pcnt+NoiseOffsetX) * NoiseScale;
            var y = (pcnt+NoiseOffsetY) * NoiseScale;

            var xNoise = noise(x);
            var yNoise = noise(y);

            vx = ((2*vx) + 1 + map(xNoise, 0, 1, -1, 1))/4.0;
            vy = ((3*vy) +  map(yNoise, 0, 1, -1, 1))/4.0;

            px += vx;
            py += vy;
            pcnt++;
        }
    }

    processing.setup = setup;
    processing.draw = draw;
}


var canvas = document.getElementById("canvas1");
// attaching the sketchProc function to the canvas
var p = new Processing(canvas, sketchProc);
// p.exit(); to detach it


/*
 *  Bring a subset of the Processing API to the local scope of sketchProc()
 */
function getLocalApi(processingVarName) {
    var api = ['size', 'background', 'fill', 'noStroke', 'noFill', 
                'stroke', 'smooth', 'point', 'noise', 'map', 'exit'];
    
    var tmpl = 'var ${method} = function() ' +
					'{ return ${ctx}.${method}.apply(${ctx}, arguments); }';

    var cmds = [];
    for (var i = 0; i < api.length; i++) {
        var cmd =   tmpl.replace(/\${method}/g, api[i])
                        .replace(/\${ctx}/g, processingVarName);
        cmds.push(cmd);
    }
    var localApi = cmds.join(';');
    // alert(localApi);
    return localApi;
}
