---
layout: post
title: "Netlify: Multiple Repos on a Single Domain"
date: 2020-06-23
description: "A PROTIP for mapping repos and apps to different subdirectories on Netlify. "
author: blair
---

### Root Repo App

Setup two redirects:

- one for the static assets `/subdir/static/* https://childrepo.netlify.app/static/:splat 200`
- one for shadowing the index.html file `/subdir* https://childrepo.netlify.app/index.html 200`

It is important the redirects are in this order, because proxies are processed in order.

# Child folder Repo App

add environment variable for `PUBLIC_URL=/subdir`

This tells Create-React-App that the target will be hosted on a sub-folder

> You can also use `process.env.PUBLIC_URL` as a basename for react-router!
