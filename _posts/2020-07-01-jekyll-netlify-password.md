---
layout: post
title: "Password Protect your Jekyll site on Netlify for Free"
date: 2020-07-01
description: "A PROTIP for blocking a page an HTML page on Netlify"
author: blair
---

When i'm building new sites, I find it easier to keep iterating online opposed to keeping everything local for now.

Your current build command for a starter jekyll site is `jekyll build`

For whatever pages you want to encrypt, you're going to use the NODE plugin [staticrypt](https://www.npmjs.com/package/staticrypt). The best part is that you don't have to know how to use it!

### 1. Visit your Site Build Settings

current Build command: `jekyll build`

### 2. Update the Build command

new Build command: `jekyll build && npx staticrypt _site/index.html P@SSW0RD -o _site/index.html`

This will build your site normally and encrypt the index page.

the script to encrypt your page is `staticrypt _site/index.html P@SSW0RD -o _site/index.html` encrypts and overwrites the index.html page using the password `P@SSW0RD`

### Test it out!

[Here is an example password protected page](/example-password-page)

the password is `P@SSW0RD`

### Profit!

This is a super simple way to get free password protection.
