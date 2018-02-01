---
layout:			post
title:			"Simple and Elegant CountDown Timer"
date:		 	   2018-01-31
description:	"Tachyons Count Down Timer "
meta-title:		"Tachyons Countdown Timer"
author:	blair
---

In this example, we will be creating a simple timer with CSS and Javascript

## 1. Make sure you've included Tachyons into your file

add a stylesheet link to your file head

{% highlight html %}

<html>
<head>
  <link rel="stylesheet" href="https://unpkg.com/tachyons@4.9.1/css/tachyons.min.css"/>
</head>
<body>
... awesome stuff here
,/body>
</html>
{% endhighlight  %}

Here you can see its easy!

## 2. Add the Base HTML

Wherever you want the countdown timer to show up... Add this HTML

{% highlight html %}

<div class="mt4 tc fw1 f2 near-white sans-serif center" id="clockdiv">
  <div class="pa2 br3 bg-blue dib">
    <span class="pa3 br3 bg-dark-blue dib days"></span>
    <div class="pt1 f5 fw1">Days</div>
  </div>
  <div class="pa2 br3 bg-blue dib">
    <span class="pa3 br3 bg-dark-blue dib hours"></span>
    <div class="pt1 f5 fw1">Hours</div>
  </div>
  <div class="pa2 br3 bg-blue dib">
    <span class="pa3 br3 bg-dark-blue dib minutes"></span>
    <div class="pt1 f5 fw1">Minutes</div>
  </div>
  <div class="pa2 br3 bg-blue dib">
    <span class="pa3 br3 bg-dark-blue dib seconds"></span>
    <div class="pt1 f5 fw1">Seconds</div>
  </div>
</div>
{% endhighlight  %}

## 3. Add the Javascript!

{% highlight javascript %}
function getTimeRemaining(endtime) {
var t = Date.parse(endtime) - Date.parse(new Date());
var seconds = Math.floor(t / 1000 % 60);
var minutes = Math.floor(t / 1000 / 60 % 60);
var hours = Math.floor(t / (1000 _ 60 _ 60) % 24);
var days = Math.floor(t / (1000 _ 60 _ 60 \* 24));
return {
total: t,
days: days,
hours: hours,
minutes: minutes,
seconds: seconds
};
}

function initializeClock(id, endtime) {
var clock = document.getElementById(id);
var daysSpan = clock.querySelector('.days');
var hoursSpan = clock.querySelector('.hours');
var minutesSpan = clock.querySelector('.minutes');
var secondsSpan = clock.querySelector('.seconds');

function updateClock() {
var t = getTimeRemaining(endtime);
daysSpan.innerHTML = t.days;
hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }

}

updateClock();
var timeinterval = setInterval(updateClock, 1000);
}

// example 15 days out
var deadline = new Date(Date.parse(new Date()) + 15 _ 24 _ 60 _ 60 _ 1000);
// example 1 day out = new Date(Date.parse(new Date()) + 1 _ 24 _ 60 _ 60 _ 1000);

if (new Date() > deadline) {
alert('COUNTDOWN COMPLETE! \n Some Call to Action!!!');
}

initializeClock('clockdiv', deadline);
{% endhighlight %}

To see a working example, checkout the [Countdown Theme](https://www.tachyonstemplates.com/template-overviews/tachyons-countdown/) we created!
