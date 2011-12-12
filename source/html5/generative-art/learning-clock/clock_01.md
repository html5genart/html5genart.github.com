---
layout: page
title: "Clock example 1"
date: 2011-12-10 18:40
comments: true
sharing: true
footer: true
---

<h2> Simple processing.js via JavaScript</h2>

This is the clock example from [processingjs](http://processingjs.org/learning) using method 2.

<p><canvas id="canvas1" width="200" height="200">No canvas support!</canvas></p>

{% include_code generative-art/learning-clock/clock_01.js %}

{% codeblock HTML code lang:javascript %}
<p><canvas id="canvas1" width="200" height="200">No canvas support!</canvas></p>
<script src="../processing-1.3.6-api.js"></script>
<script type="text/javascript" src="clock_01.js"></script>
{% endcodeblock %}

If you look inside `function drawArm()`, there are many references to `processing`, which is not the case in the Processing language.


How can we transform the following code:

{% codeblock lang:javascript %}
function drawArm(position, lengthScale, weight) {
  processing.strokeWeight(weight);
  processing.line(centerX, centerY,
    centerX + Math.sin(position * 2 * Math.PI) * lengthScale * maxArmLength,
    centerY - Math.cos(position * 2 * Math.PI) * lengthScale * maxArmLength);
}
{% endcodeblock %}

Into this (no references to `processing`)?

{% codeblock lang:javascript %}
function drawArm(position, lengthScale, weight) {
  strokeWeight(weight);
  line(centerX, centerY,
    centerX + Math.sin(position * 2 * Math.PI) * lengthScale * maxArmLength,
    centerY - Math.cos(position * 2 * Math.PI) * lengthScale * maxArmLength);
}
{% endcodeblock %}

See next [Clock 2](clock_02.html)

<script src="../processing-1.3.6-api.js"></script>
<script type="text/javascript" src="clock_01.js"></script>

