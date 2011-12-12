---
layout: page
title: "Clock example 4"
date: 2011-12-10 18:40
comments: true
sharing: true
footer: true
---

<h2> Simple processing.js via JavaScript</h2>

Clock

<p><canvas id="canvas1" width="200" height="200">No canvas support!</canvas></p>

`function sketchProc()` looks less intimidating with `function draw()` making the most of the body. The complexity was pushed into `function getLocalApi()` which is declared at the bottom. The `eval()` is still at the very top of `function sketchProc()`

{% include_code generative-art/learning-clock/clock_04.js %}

Cheers!

<script src="../processing-1.3.6-api.js"></script>
<script type="text/javascript" src="clock_04.js"></script>

