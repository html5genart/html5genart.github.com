---
layout: post
title: "Black Waters"
date: 2012-01-22 20:05
comments: true
categories: 
---

Based on Jason Davie's [Quasicrystals](http://www.jasondavies.com/animated-quasicrystals/)

<div><canvas id="bwcanvas" width="500" height="500"></canvas></div>

** Modifications in the fragment shader code **

From

``` html HTML source
vec2 defpixel = (pixel - vec2(.5)) * 170.; // 170 -> 20

vec4 color = vec4(ans * .53, ans * .33, ans * .65, 1.);
```

To
``` html HTML source

vec2 defpixel = (pixel - vec2(.5)) * 20.; // 170 -> 20

vec4 color = vec4( 0.3*ans, ans, ans, 1.0 ); // black water color

```

<script id="shader-vs" type="x-shader/x-vertex"> 
  attribute vec3 position;
  attribute vec2 texCoord1;
  
  uniform mat4 worldMatrix;
  uniform mat4 projectionMatrix;
  
  varying   vec2 pixel;
  void main(void) {
     gl_Position = projectionMatrix * worldMatrix * vec4(position, 1.);
     pixel = texCoord1;
  }
</script>

<script id="shader-fs" type="x-shader/x-fragment"> 
  #ifdef GL_ES
  precision highp float;
  #endif

  #define PI 3.1415926535

  uniform sampler2D sampler1;
  uniform float t;

  varying vec2 pixel;
  uniform vec2 mouse;

  void main(void) {
    const float step = PI / 7.0;
    float angle = 0.;
    float s;
    float c;
    float ans;

    vec2 defpixel = (pixel - vec2(.5)) * 20.;

    for (int i = 0; i < 7; i++) {
      s = sin(angle);
      c = cos(angle);
      ans += (cos( c * defpixel.x + s * defpixel.y + t) + 1.) / 2.;
      angle += step;
    }

    ans = mod(floor(ans), 2.0) == 0. ? fract(ans) : 1. - fract(ans);
    //vec4 color = vec4(ans * .53, ans * .33, ans * .65, 1.);
    vec4 color = vec4( 0.3*ans, ans, ans, 1.0 ); // black waters
    color.w = 1.;

    gl_FragColor = color;
  }
</script>

<script src="/html5/js/PhiloGL.cls.js"></script>

<script>

var w = 500,
    h = 500,
    canvas = document.getElementById('c');

PhiloGL.unpack();

if (!PhiloGL.hasWebGL()) {
  alert("WebGL is not supported in this browser");
}
else {
  var programId = "black-waters";
  
  PhiloGL("bwcanvas", {
    program: [{
      id: programId,
      from: "ids",
      vs: "shader-vs",
      fs: "shader-fs"
    }],
    onError: function(e) {
      console.log(e);
    },
    onLoad: function(app) {
      time = Date.now();

      draw();

      function draw() {
        t = ((Date.now() - time) / 300) % (2 * Math.PI);

        Media.Image.postProcess({
          width: w,
          height: h,
          toScreen: true,
          program: programId,
          uniforms: {t: t}
        });

        Fx.requestAnimationFrame(draw);
      }
    }
  });
}
</script>