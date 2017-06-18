---
layout:			post
title:			"Minimum Viable Jekyll Setup for Marketing Sites"
date:			  2017-06-14
category:		News
description:	"Every marketing site should have these things in place to make your life easier."
tags:			  update

redirect_from:
  - /posts/test-jekyll-redirect-from/
meta-title:	"7 Must have Jekyll setup for your blog or marketing site"

author:			"Blair Anderson"
author-slug:	blair-anderson
author-desc:	"Blair Anderson is the creator of Tachyons Templates and owner of Tachyons Templates. He is a Full Stack web designer and developer from Seattle."
author-url:		http://blairanderson.co
author-twitter:	blairanderson
author-github:	blairanderson
---

I have been building a few jekyll sites recently and have built up a decent list of starters that I think should be built into the core of jekyll.

Below is a slowly built up list of necessary tools that I consider to be MVP - Minimum Viable Project

## jekyll-sitemap

Any blogger/marketer worth their weight knows that a sitemap is a basic requirement for getting your site indexed and knowing whats happening with your website.

Great thing is that this gem just works after you install it. Can also pretty easily remove files from the sitemap with `sitemap: false` in the frontmatter

## jekyll-redirect-from

Changing titles is a pretty common scenario and jekyll-redirect-from is the best tool for adding redirects to AND from different pages.

for example if you change your `/contact/` page to `/contact-us/` then you can very easily add to the frontmatter

{% highlight ruby %}
---
redirect_from:
  - /contact/
---
{% endhighlight %}

Your content will live at `contact-us` and a tertiary page will be constructed at `/contact/` with a meta redirect to `/contact-us/` It works perfectly.

You can [test Jekyll Redirect](/posts/test-jekyll-redirect-from/) and it should bring you back here!

## jekyll collections

Collections are the optimal way to organize your content!

Posts are obviously for blog/time-sensitive content, but collections allow you to add namespaced groups that are treated exactly like posts.

You can iterate through them:

{% highlight ruby %}
  {% for template in site.templates %}
    ...
  {% endfor %}
{% endhighlight %}

## Free SSL with google domains and cloudflare

As google lays down the hammer on non-ssl sites, its super important for forward thinking sites to get their content covered with SSL.

If you have a server, i'd recommend using [Let's Encrypt](https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-16-04).

If you're using Jekyll and GitHub pages then [Cloudflare](https://www.cloudflare.com/) is necessary.

Simply signup and add your domain, update the DNS(this is super easy with google domains.) and wait a few hours. Afer a while your page will be redirecting to SSL protection through cloudflare!

Now update google webmaster and make sure all your links are using the `https` version and you'll be good to go.

## imagemagik image tools for a great start on image compression and resizing

Do you know how heavy your pages are?

Most people (myself included) think their sites are incredibly fast with jekyll alone, but before optimizing our homepage, the [images made up +90% of page weight](https://pageweight.imgix.com/jobs/3abfa9b7-a9b0-445d-88b3-16aa7e5a4089)

Thats HUGE! One simple test was easy enough to see that our images needed to be resized and compressed.


## free email forwarding with google domains OR formspring
