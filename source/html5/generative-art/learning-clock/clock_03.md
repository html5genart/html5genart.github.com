---
layout: page
title: "Clock example 3"
date: 2011-12-10 18:40
comments: true
sharing: true
footer: true
---
<h2> Simple processing.js via JavaScript</h2>

Clock

<p><canvas id="canvas1" width="200" height="200">No canvas support!</canvas></p>

Here, we replaced the local function declarations with a more generic way to iterate through the Processing API and use `eval()` which has local scope.

{% include_code generative-art/learning-clock/clock_03.js %}

However, `function sketchProc()` looks more intimidating. How can we hide this complexity?

See next [Clock 4](clock_04.html)

<script src="../processing-1.3.6-api.js"></script>
<script type="text/javascript" src="clock_03.js"></script>

