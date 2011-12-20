var showJustPoints = false; // Set to true for debugging.
// TODO: It looks like the smooth() function is not called at all? Rough.

function int(v) { return Math.floor(v); };

var sin = Math.sin;
var cos = Math.cos;
var abs = Math.abs;
var sqrt = Math.sqrt;


function sketchProc(processing) {
    
    var width = 600; //processing.width;
    var height = 600; //processing.height;

    var localFns = getLocalApi(); eval(localFns);
    
    // ------------------------------    
    var p = processing;
    
    var num = 50;
    var modsA = [];
    var modsB = [];
    var initialized = false;
    
    var MAX_COUNTER = 1000;
    var counter = 0; // reset every few

    var colors = [
        [ { r: 32, g: 127, b: 64}, 0],
        [ { r: 127, g: 0, b: 127 }, 127]
    ];
    var currentColor = 0;
    
    function setup() {
        size(width, height);
        colorMode(p.RGB, num);
        smooth(); // Does this work here? It doesn't look like.
        
        reset();
    }
    
    function reset() {
        counter = 0;
        
        currentColor = 1-currentColor; // flip colors
        
        background(num);
        
        for (var i = 0; i < num; i++) {
            var x = random(width);
            var y = random(height);
            var angle = random(360);
            var radius = random(10, 40);
            var dir = (random(1) > 0.5) ? 1 : -1;

            modsA[i] = new ModuleA(i, x, y, angle, radius, dir);
            modsB[i] = new ModuleB(i, x, y, angle, radius, dir);
        }
        // Need to randomize this too
        p.mouseX = random(width);
        p.mouseY = random(height);
    }

    function draw() {
        if (initialized) {
            counter++;
            if (counter >= MAX_COUNTER) {
                reset();
            }
            for (var i = 0; i < num; i++) {
                modsA[i].updateMe();
                for (var j = 0; j < num; j++) {
                    modsB[j].myAngle = modsA[j].myAngle;
                    modsB[j].myRadius = modsA[j].myRadius + i;
                }
                modsB[i].updateMe();
                
                if ( (modsA[i].x < 0) || (modsA[i].x > width) 
                  || (modsA[i].y < 0) || (modsA[i].y > height) ) {
                      var x = p.mouseX;
                      var y = p.mouseY;
                      var a = random(360);
                      var r = random(10, 40);
                      
                      modsA[i].x = x;
                      modsA[i].y = y;

                      modsB[i].x = x;
                      modsB[i].x = y;
                      
                      modsA[i].myAngle = a;
                      modsB[i].myAngle = a;
                      
                      modsA[i].myRadius = r;
                      modsB[i].myRadius = r + i*i;
                }
            }
        }
    };
    
    function keyPressed() {
        initialized = !initialized; // flip value
    }
    
    function mousePressed() {
        reset();
    }
    
    function mouseMoved() {
        initialized = true;
    }
    
    function Module(spriteNum, xx, yy, deg, radius, dir) {
        this.i = spriteNum;
        this.x = xx;
        this.y = yy;
        this.myAngle = deg;
        this.myRadius = radius;
        this.dir = dir;

        this.mx = width/2;
        this.my = height/2;
        this.delay = 40.0;
    }

    function ModuleA() {
        Module.apply(this, arguments);
    }

    function ModuleB() {
        Module.apply(this, arguments);
    }

    ModuleA.prototype.updateMe = function() {
        var i = this.i;
        var x = this.x;
        var y = this.y;
        var myAngle = this.myAngle;
        var myRadius = this.myRadius;
        var mx = this.mx;
        var my = this.my;
        
        var mh = x - p.mouseX;
        var mv = y - p.mouseY;
        var mdif = sqrt( mh*mh + mv*mv );

        var dh = width/2 - p.mouseX;
        var dv = height/2 - p.mouseY;        
        var ddif = sqrt( dh*dh + dv*dv );
        
        myAngle += (this.dir) * abs(ddif - mdif) / 50.0;
        
        myRadius += mdif/100.00;
        if (myRadius > width) {
            myRadius = random(10, 40);
        }
 
        mx += (p.mouseX - mx) / this.delay;
        my += (p.mouseY - my) / this.delay;
        x = int(mx + (myRadius * cos(radians(myAngle))));
        y = int(my + (myRadius * sin(radians(myAngle))));
        
        if (showJustPoints) {
            point(x, y);            
        }
        else {
            var t = num / (i+1);
            var color = colors[currentColor][0];
            stroke(color.r+t, color.g+t, color.b + t);
            //  point(x, y);            
        }

        this.x = x;
        this.y = y;
        this.mx = mx;
        this.my = my;
        this.myAngle = myAngle;
        this.myRadius = myRadius;
    }

    ModuleB.prototype.updateMe = function() {
        // I can see another "private var for all of 'this'" here. (push/pop)
        var i = this.i;
        var x = this.x;
        var y = this.y;
        var myAngle = this.myAngle;
        var myRadius = this.myRadius;
        var mx = this.mx;
        var my = this.my;
        var delay = this.delay;
        
        mx += (p.mouseX - mx) / delay;
        my += (p.mouseY - my) / delay;
        x = mx + (myRadius * cos(radians(myAngle)));
        y = my + (myRadius * sin(radians(myAngle)));
        
        var drawB = !showJustPoints;
        if (drawB) {
            var t = int(num/2);
            stroke(t, t, t);
            //point(x, y);

            // from connectMe2
            noStroke();
            var red = colors[currentColor][1];
            fill(red, num/7.0, num/(i+1) + num/4.0, 20);
            beginShape(p.QUADS);
            vertex(modsA[i].x, modsA[i].y);
            vertex(modsA[i].x+1, modsA[i].y+1);
            vertex(x, y);
            vertex(x+1, y+1);
            endShape();
        }
       
        // Keep my data
        this.x = x;
        this.y = y;
        this.mx = mx;
        this.my = my;
    }

    // Override draw function, by default it will be called 60 times per second
    processing.setup = setup;
    processing.draw = draw;
    
    processing.mouseMoved = mouseMoved;
    processing.mousePressed = mousePressed;
    
    processing.keyPressed = keyPressed;
}

var canvas = document.getElementById("canvas-without-title");
// attaching the sketchProc function to the canvas
var p = new Processing(canvas, sketchProc);
// p.exit(); to detach it

function getLocalApi() {
    var api = [
/*    'sin',
    'cos',
    'abs',
    'sqrt', */
    'color',
    'size',
    'colorMode',
    'background',
    'smooth',
    'random',
    'radians',
    'stroke',
    'point',
    'noStroke',
    'fill',
    'beginShape',
    'vertex',
    'endShape'
    ];
    
    var tmpl = 'var ${method} = function() { return ${ctx}.${method}.apply(${ctx}, arguments); }';

    var cmds = [];
    for (var i = 0; i < api.length; i++) {
        var cmd =   tmpl.replace(/\${method}/g, api[i])
                        .replace(/\${ctx}/g, 'processing');
        cmds.push(cmd);
    }
    var localApi = cmds.join(';');
    // alert(localFns);
    return localApi;
}
