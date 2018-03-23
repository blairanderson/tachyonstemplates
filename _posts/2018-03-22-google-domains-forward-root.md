---
layout:			post
title:			"Google Domains: How to Forward the Root to www"
date:		 	   2018-03-22
description:	"A short description of how to forward the ROOT domain to WWW. Also known as forwarding a naked domain."
author:	blair
---

In this example we will be forwarding the ROOT domain to `www` using Google Domains.

There is a little debate about whether using naked/root domains is better or worse than `www`, but I think the proof lies in seeing Amazon/Facebook/Google all utilize `www`.

I think there are a decent number of reasons why. but this article is specifically about HOW to forward the root/naked domain to www on your [domains.google.com](domains.google.com) account.

## 1. Visit your Account and click on "DNS Settings"

![configure-dns](/img/{{page.id}}/configure-dns.png)

## 2. Make sure you have the www.yourwebsite.com settings working correctly with a CNAME.

I mean that you should NOT setup forwarding until your www.website.com is working perfectly. otherwise you will not be able to know if its working properly or not.

## 3. Add the `Synthetic Records` and take note of all form options

It should look like this:

![synthetic-record](/img/{{page.id}}/synthetic-record.png)

Settings should be configured as such:

* Subdomain should be **`@`**
* Destination URL should be **www.yourwebsite.com**
* Activate **Permanant Redirect** - tells browsers to remember this setting.
* Change selection to **Forward Path** - this allows google to pass on any extra paths/params that the original user visited with.
