// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// shim layer with setTimeout fallback

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       || 
          window.webkitRequestAnimationFrame || 
          window.mozRequestAnimationFrame    || 
          window.oRequestAnimationFrame      || 
          window.msRequestAnimationFrame     || 
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

var canvas = document.getElementById('canvas-polar');
var context = canvas.getContext('2d');
var width = canvas.width;
var height = canvas.height;

var stop = false;

function animate() {
    if (!stop) {
        requestAnimFrame( animate );
        draw();
    }
    else {
        // alert("Stopping");
    }
}

// Canvas pixel manipulation
// http://beej.us/blog/2010/02/html5s-canvas-part-ii-pixel-manipulation/
function setPixel(imageData, x, y, r, g, b, a) {
    var index = (x + y * imageData.width) * 4;
    imageData.data[index+0] = r;
    imageData.data[index+1] = g;
    imageData.data[index+2] = b;
    imageData.data[index+3] = a;
}

var PI = Math.PI;
var abs = Math.abs;
var sin = Math.sin;
var cos = Math.cos;
var atan2 = Math.atan2;
var log = Math.log;
var sqrt = Math.sqrt;    
var int = function(v) { return Math.floor(v); };

var phase = 0;
var count = 0;

var polar = true;
var forward = true;
var b = 0; // blue

function draw() {
    // create a new pixel array
    var imageData = context.createImageData(width, height);

    var k = 3;          // number of plane waves (try 4, 5, and up)
    var stripes = 14;   // number of stripes per wave
    var N = width;      // image size in pixels
    var N2 = N/2;
    
    for (var i = 0; i < N; i++) {
        for (var j = 0; j < N; j++) {
            var x = j - N2;
            var y = i - N2;
            
            if (polar) {
                var theta = atan2(y, x);
                var d = sqrt(x*x + y*y);
                var r = log(d);
            }
            
            var C = 0;  // accumulator (from multiple plane waves)
            for (var t = 0; t < PI; t += PI/k) {
                if (polar) {
                    // Log-polar crystals
                    C += cos( (theta*cos(t)-r*sin(t)) * stripes+phase);  
                }
                else{
                    // Cartesian crystals
                    C += cos(abs(x*cos(t)+y*sin(t))*2*PI*stripes/N+phase);             
                }
            }
            var g = int( (C+k) / (k*2) * 255 );                
            setPixel(imageData, j, i, 32+g, 64+g, 127+g-b, 0xff); // light blue
        }
    }

    // copy the image data back onto the canvas
    context.putImageData(imageData, 0, 0); // at coords 0,0
    
    phase += 2*PI / 30;
    count++;
    
    if (phase > 2*PI) {
        // stop = true;
        phase = 0; // reset phase
        
        // Blue color range step 16 from 0 to 120 back and forth
        b += (forward? 1 : -1) * 16;
        if (b < 0) { forward = true; }
        if (b > 120) { forward = false; }
    }
}

animate();    

