---
layout: page
title: "Clock example"
date: 2011-12-10 18:40
comments: true
sharing: true
footer: true
---

<h2> Simple processing.js via JavaScript</h2>

Clock

<p><canvas id="canvas1" width="200" height="200">No canvas support!</canvas></p>

{% jsfiddle GYaX5 %}

{% include_code generative-art/learning-clock/clock_04.js %}

If you know Javascript and dare to know understand the idea behind `getLocalApi()`, you can check out [Clock 1](clock_01.html)

<script src="../processing-1.3.6-api.js"></script>
<script type="text/javascript" src="clock_04.js"></script>
