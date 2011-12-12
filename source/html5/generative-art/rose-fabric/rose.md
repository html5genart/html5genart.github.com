---
layout: page
title: "Rose Fabric"
date: 2011-12-11 18:40
comments: true
sharing: true
footer: true
---

<p><canvas id="canvas1" width="600" height="400"></canvas></p>

Processing and Processing.js `noise()` function is based on [Perlin noise](http://en.wikipedia.org/wiki/Perlin_noise). You can play with NoiseScale to alter the waving pattern (0.005 is an interesting value!).

I'm also using a technique to bring a subset of the Processing API into the local scope of `sketchProc()` by calling `eval()` on `getLocalApi()`. (If this sounds too mysterious, check out [First Steps with Processing](/blog/2011/12/10/first-steps-with-processing-js/))

{% include_code generative-art/rose-fabric/stream.js %}

{% jsfiddle hYgZR %}

<script src="../processing-1.3.6-api.js"></script>
<script src="stream.js"></script>

