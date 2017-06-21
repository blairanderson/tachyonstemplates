---
layout:			post
title:			"5 Minimum Viable Jekyll ProTips for launching a Site"
date:			  2017-06-14
description: "Every marketing site should have these things in place to make your life easier."
meta-title:	"5 Must-Have Jekyll setup for your blog or marketing site"
author:	blair
redirect_from:
  - /posts/test-jekyll-redirect-from/
---

I have always been a huge fan of jekyll because the Total Cost of Ownership is basically zero.  More recently, I have been building with a focus on marketing and analytics. Below is a built up list of starters and necessary setup that I consider to be part of launching your MVP site.

> to be real honest, MPV is LAUNCHING YOUR FFFFing SITE! consider these next on your feature list...

## jekyll-sitemap

Any blogger/marketer worth their weight knows that a sitemap is a basic requirement for getting your site indexed and knowing whats happening with your website.

Great thing is that this *gem just works* after you install it.

Add `gem "jekyll-sitemap"` to your gemfile and your `_config` file. Boom. It creates a page at `/sitemap.xml` with all your collections/static-html/posts.

> Note: It can also easily remove files from the sitemap with `sitemap: false` in the frontmatter

<hr/>
## jekyll-redirect-from

Changing titles is a pretty common scenario and `jekyll-redirect-from` is the best tool for adding redirects to AND from different pages.

for example if you change your `/contact/` page to `/contact-us/` then you can very easily add to the frontmatter:

{% highlight ruby %}
---
redirect_from:
  - /contact/
---
{% endhighlight %}

Your content will stay live at the new path `/contact-us/` and a **tertiary page** will be constructed at `/contact/` with a meta redirect to `/contact-us/` It works perfectly.

You can [test Jekyll Redirect](/posts/test-jekyll-redirect-from/) and it should bring you back here to this post!

<hr/>
## jekyll collections

Collections are new with jekyll3, they are the optimal way to organize your content!

Posts are obviously for blog/time-sensitive content, but collections allow you to add namespaced groups that are treated exactly like posts.

You can iterate through them:

{% highlight ruby %}
{% raw %}
{% for template in site.templates %}
...
{% endfor %}
{% endraw %}
{% endhighlight %}

<hr/>
## Free SSL with google domains and cloudflare

As google lays down the hammer on non-ssl sites, its super important for forward thinking sites to get their content covered with SSL.

If you're using GitHub pages then [Cloudflare](https://www.cloudflare.com/) is necessary but super easy.

- Simply signup and add your domain
- Update the DNS(this is super easy with google domains.)
- Wait a few hours...

After a while your page will forward to an SSL protected version through cloudflare!

> NOTE: remember to update google webmaster to the https version **AND** make sure all your internal links are using the `https` version.

<hr/>
## Fix Image Weight problems with imagemagik (or imgix for the super fancy)

Do you know how heavy your pages are?

Most people (myself included) think their sites are incredibly fast with jekyll alone, but before optimizing our homepage, the [images made up +90% of page weight](https://pageweight.imgix.com/jobs/3abfa9b7-a9b0-445d-88b3-16aa7e5a4089)

Thats HUGE! One simple test was easy enough to see that our images needed to be resized and compressed.

Simply resizing and compressing images had an 80% improvement! from red to green.

yolo: https://pageweight.imgix.com/jobs/1f61b712-b59f-44d4-a385-e52ae3593f6d/
