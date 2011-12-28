---
layout: post
title: "First Steps with Quasicrystals"
date: 2011-12-27 18:04
comments: true
categories: 
---

This is a Javascript port of [QUASI1.java](http://wealoneonearth.blogspot.com/2011/10/animated-quasicrystals.html) by Michael Rule. I was playing with different values for K and switching between log-polar and cartesian coordinates. I settled down on K=3 and log-polar as the example for this post. I also cycled colors between blue and green.

<p><canvas id="canvas-polar" width="200" height="200"></canvas></p>
<script src="/html5/generative-art/quasicrystals/quasi1.js"></script>


The highlited source code can be found in [here](/html5/generative-art/quasicrystals/learning-quasicrystals.html)


The computations for the quasicrystals are very intensive and will consume a lot of CPU. Therefore, I had to reduce the size down to 200x200 pixels. I was surprised at the speed of the WebGL quasicrystal demos by [Jason Davies](http://www.jasondavies.com/animated-quasicrystals/) and [PhiloGL](http://senchalabs.github.com/philogl/PhiloGL/examples/quasicrystal/). The use of WebGL shaders takes the onus from the CPUs to the [GPUs](http://gpucomputing.net/).


In this particular Javascript port, I didn't use Processing.js.
Instead I used the [requestAnimationFrame shim](http://paulirish.com/2011/requestanimationframe-for-smart-animating/)  by Paul Irish and HTML5 [canvas pixel manipulation](http://beej.us/blog/2010/02/html5s-canvas-part-ii-pixel-manipulation/) as described by beej.


__Quasicrystal Resources__

[http://wealoneonearth.blogspot.com/search/label/quasicrystal](http://wealoneonearth.blogspot.com/search/label/quasicrystal)

[http://mainisusuallyafunction.blogspot.com/2011/10/quasicrystals-as-sums-of-waves-in-plane.html](http://mainisusuallyafunction.blogspot.com/2011/10/quasicrystals-as-sums-of-waves-in-plane.html)
