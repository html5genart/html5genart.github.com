---
layout: post
title: "Without Title by Lia"
date: 2011-12-19 21:30
comments: true
categories: 
---

This is a Javascript port of Lia's [WithoutTitle](http://www.liaworks.com/theprojects/withouttitle/). The original can be seen in her [Java applet](http://liaworks.com/projects/withouttitle/). You should check some of Lia's really
[amazing projects](http://www.liaworks.com/category/theprojects/).

Although this is subjective, the visual quality didn't equal to the original.
It's my impression that the `smooth()` function is not working as expected.

The drawing performance in the Javascript version is very notorious. It feels very responsive.
Personally, I find the slower Java/Processing version more pleasant and smoothing.
I don't like to slow things down but it may improve the experience in this case.

You can click/move the mouse to interact with the drawing and press any key to pause.
<p><canvas id="canvas-without-title" width="600" height="600"></canvas></p>

Due to the way Javascript code works, there's quite a bit of noise because of 'this'.
And the code is not as readable as the Java/Processing counterpart which is more succinct.

You can look at the source code in [here](/html5/generative-art/without-title/without-title.html)

<script src="/html5/js/processing-1.3.6-api.js"></script>
<script src="/html5/generative-art/without-title/wo-title.js"></script>


