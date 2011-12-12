// Simple way to attach js code to the canvas is by using a function
function sketchProc(processing) {
    
    var width = processing.width;
    var height = processing.height;
    
    var methods = ['background', 'line', 'strokeWeight'];
    
    var tmpl = 'var ${method} = function() { return ${ctx}.${method}.apply(${ctx}, arguments); }';

    var cmds = [];
    for (var i = 0; i < methods.length; i++) {
        var cmd =   tmpl.replace(/\${method}/g, methods[i])
                        .replace(/\${ctx}/g, 'processing');
        cmds.push(cmd);
    }
    var localFns = cmds.join(';');
    // alert(localFns);
    eval(localFns);
    
    function draw() {
        // determine center and max clock arm length
        var centerX = width / 2, centerY = height / 2; // #P
        var maxArmLength = Math.min(centerX, centerY);

        function drawArm(position, lengthScale, weight) {      
          strokeWeight(weight); // #P
          line(centerX, centerY, // #P
            centerX + Math.sin(position * 2 * Math.PI) * lengthScale * maxArmLength,
            centerY - Math.cos(position * 2 * Math.PI) * lengthScale * maxArmLength);
        }

        // erase background
        background(224); // #P

        var now = new Date();

        // Moving hours arm by small increments
        var hoursPosition = (now.getHours() % 12 + now.getMinutes() / 60) / 12;
        drawArm(hoursPosition, 0.5, 5);

        // Moving minutes arm by small increments
        var minutesPosition = (now.getMinutes() + now.getSeconds() / 60) / 60;
        drawArm(minutesPosition, 0.80, 3);

        // Moving hour arm by second increments
        var secondsPosition = now.getSeconds() / 60;
        drawArm(secondsPosition, 0.90, 1);
    };
    
    // Override draw function, by default it will be called 60 times per second
    processing.draw = draw;
}

var canvas = document.getElementById("canvas1");
// attaching the sketchProc function to the canvas
var p = new Processing(canvas, sketchProc);
// p.exit(); to detach it
