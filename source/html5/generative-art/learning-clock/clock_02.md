---
layout: page
title: "Clock example 2"
date: 2011-12-10 18:40
comments: true
sharing: true
footer: true
---

<h2> Simple processing.js via JavaScript</h2>

Clock

<p><canvas id="canvas1" width="200" height="200">No canvas support!</canvas></p>

We can create several private local variables inside `sketchProc()`, so that the `function draw()` doesn't need to reference `processing`. We do this by using `Function.prototype.apply(processing, arguments)`.

The lines where `processing` has been deleted are commented with a `// #P`.

{% include_code generative-art/learning-clock/clock_02.js %}

Trying to re-create the private local Processing API one by one function is not fun. Is there a way to be more generic so that we don't have to go over the larger Processing API?

See next [Clock 3](clock_03.html)

<script type="text/javascript" src="clock_02.js"></script>

