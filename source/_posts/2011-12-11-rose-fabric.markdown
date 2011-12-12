---
layout: post
title: "Rose Fabric"
date: 2011-12-11 18:04
comments: true
categories: 
---

This is a modification of the first example in chapter four of [**Processing for Visual Artists**](http://www.glassner.com/andrew/writing/books/processing.htm) by [Andrew Glassner](http://www.glassner.com/) which consists of an algorithm to simulate the texture of a fabric. I used a vivid pink color and changed the algorithm to be able to visualize the thread creation process one thread at a time.

<p><canvas id="canvas1" width="600" height="400"></canvas></p>

Comments: Not sure if this is a bug, but I have to modify the original PDE's NoiseScale from 0.005 to 0.0005 to achieve similar visual effects as the PDE (Processing file). The NoiseScale is the factor used for the [Perlin noise](http://en.wikipedia.org/wiki/Perlin_noise) function.

I'm also using a technique to bring a subset of the Processing API into the local scope of `sketchProc()` by calling `eval()` on `getLocalApi()`. (If this sounds too mysterious, check out [First Steps with Processing](/blog/2011/12/10/first-steps-with-processing-js/))

{% include_code generative-art/rose-fabric/stream.js %}

<script src="/html5/js/processing-1.3.6-api.js"></script>
<script src="/html5/generative-art/rose-fabric/stream.js"></script>

