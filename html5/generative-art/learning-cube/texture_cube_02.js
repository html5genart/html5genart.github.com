var treeTexture = "x-tree.jpg"; // By vector.net

var sketch = new Processing.Sketch();
// define 3D context
sketch.use3DContext = true;
// preload the images
sketch.imageCache.add(treeTexture);
// attach function (also, can be specified as the single parameter 
// in the Processing.Sketch object constructor)


sketch.attachFunction = function(processing) {
	var localApi = getLocalApi(); eval(localApi);

	var tex;
	var rotx = Math.PI/4;
	var roty = Math.PI/4;

    function setup() {
        size(640, 360, processing.P3D);
        tex = loadImage(treeTexture);
        textureMode(processing.NORMALIZED);
        fill(255);
        stroke(color(44,48,32));
    }
    
    function draw() {
        background(0);
        noStroke();
        translate(processing.width/2.0, 
                  processing.height/2.0, -100);
        rotateX(rotx);
        rotateY(roty);
        scale(90);
        texturedCube(tex);
    }
    
    // mouse event
    function mouseDragged() {
	  var p = processing;
      var rate = 0.01;
      rotx += (p.pmouseY-p.mouseY) * rate;
      roty += (p.mouseX-p.pmouseX) * rate;
    };


  function texturedCube(tex) {
    beginShape(processing.QUADS);
    texture(tex);

    // Given one texture and six faces, we can easily set up the uv coordinates
    // such that four of the faces tile "perfectly" along either u or v, but the other
    // two faces cannot be so aligned.  This code tiles "along" u, "around" the X/Z faces
    // and fudges the Y faces - the Y faces are arbitrarily aligned such that a
    // rotation along the X axis will put the "top" of either texture at the "top"
    // of the screen, but is not otherwised aligned with the X/Z faces. (This
    // just affects what type of symmetry is required if you need seamless
    // tiling all the way around the cube)
    
    // +Z "front" face
    vertex(-1, -1,  1, 0, 0);
    vertex( 1, -1,  1, 1, 0);
    vertex( 1,  1,  1, 1, 1);
    vertex(-1,  1,  1, 0, 1);

    // -Z "back" face
    vertex( 1, -1, -1, 0, 0);
    vertex(-1, -1, -1, 1, 0);
    vertex(-1,  1, -1, 1, 1);
    vertex( 1,  1, -1, 0, 1);

    // +Y "bottom" face
    vertex(-1,  1,  1, 0, 0);
    vertex( 1,  1,  1, 1, 0);
    vertex( 1,  1, -1, 1, 1);
    vertex(-1,  1, -1, 0, 1);

    // -Y "top" face
    vertex(-1, -1, -1, 0, 0);
    vertex( 1, -1, -1, 1, 0);
    vertex( 1, -1,  1, 1, 1);
    vertex(-1, -1,  1, 0, 1);

    // +X "right" face
    vertex( 1, -1,  1, 0, 0);
    vertex( 1, -1, -1, 1, 0);
    vertex( 1,  1, -1, 1, 1);
    vertex( 1,  1,  1, 0, 1);

    // -X "left" face
    vertex(-1, -1, -1, 0, 0);
    vertex(-1, -1,  1, 1, 0);
    vertex(-1,  1,  1, 1, 1);
    vertex(-1,  1, -1, 0, 1);

    endShape();
  }

  processing.setup = setup;
  processing.draw = draw;
  processing.mouseDragged = mouseDragged;

};

var canvas = document.getElementById("canvas1");
// attaching the sketch to the canvas
var p = new Processing(canvas, sketch);


function getLocalApi() {
    var api = ['texture', 'size', 'loadImage', 'fill', 'stroke', 'color', 'background', 'noStroke', 'translate', 
               'textureMode', 'rotateX', 'rotateY', 'scale', 'beginShape', 'vertex', 'endShape'];

    var tmpl = 'var ${method} = function() { return ${ctx}.${method}.apply(${ctx}, arguments); }';

    var cmds = [];
    for (var i = 0; i < api.length; i++) {
        var cmd =   tmpl.replace(/\${method}/g, api[i])
                        .replace(/\${ctx}/g, 'processing');
        cmds.push(cmd);
    }
    var localApi = cmds.join(';');
//    alert(localApi);
    return localApi;
}
