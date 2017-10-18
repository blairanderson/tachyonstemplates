---
layout:			post
title:			"How to Use Cookies to Capture URL Parameters"
date:		 	   2017-10-15
description:	"How to Use Cookies to Capture URL Parameters without jQuery"
meta-title:		"How to Use Cookies to Capture URL Parameters without jQuery"
author:	blair
---

In this example, we will be setting 4 different cookies and we'll show you how to set many more.

1. `utm_source`
1. `utm_medium`
1. `utm_campaign`
1. `some_random_param`

## 1. Parse The URL

First create a function that will pull parameters from the URL

{% highlight javascript %}
function getParameterByName(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&amp;]' + name + '=([^&amp;#]*)'),
    results = regex.exec(location.search);
  return results === null
    ? ''
    : decodeURIComponent(results[1].replace(/\+/g, ' '));
}
{% endhighlight  %}

Here you can see that if you give the URL parameters, it will return the value

{% highlight javascript %}
var pValue = getParameterByName('utm_source');
{% endhighlight  %}

## 2. Add the Cookie Library

I would recommend using [js-cookie](https://github.com/js-cookie/js-cookie) because it is light-weight and does not require jQuery but IS compatible with jQuery.

Here I have included js-cookie from [https://rawgit.com/](https://rawgit.com/) CDN.

{% highlight html %}
  <script type="text/javascript" src="//cdn.rawgit.com/js-cookie/js-cookie/8b70250875f7e07445b6a457f9c2474ead4cba44/src/js.cookie.js"></script>
{% endhighlight  %}

## 3. Set the cookie values! (Bake those Cookies)

We will set the cookies if they exist.


{% highlight javascript %}
var all_the_params_to_track = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'some_random_param'
];

all_params_to_persist.forEach(function(param) {
  var pValue = getParameterByName(param);
  if (pValue != null || pValue != '') {
    Cookies.set(param, pValue);
  }

  var cValue = Cookies.set(param);
  var input = $('input[name='+ param +']')
  if (input && (cValue != null || cValue != '')) {
    input.val(cValue);  
  }
});
{% endhighlight %}

*what is this doing:*

- loop through ALL the params you want to track.
- if the parameter exists in the URL, store the cookie.
- if the parameter does not exist, then it will leave the cookie as-is.
- find an input by the name of the parameter, example: `$('input[name=utm_source]')`
- if the cookie value exists and the input for the same name exists, replace the value
