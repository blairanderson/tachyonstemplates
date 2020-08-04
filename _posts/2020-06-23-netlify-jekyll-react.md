---
layout: post
title: "Netlify: Deploy Multiple React Repositories on a Single Site"
date: 2020-06-23
description: "A PROTIP for mapping repos and apps to different subdirectories on Netlify. "
author: blair
---

I build static sites with Jekyll because its simple and file-backed.

I build dynamic sites with React because its simple and deterministic.

Sometimes we find a need to deploy a [react application inside of jekyll](https://blairanderson.github.io/2020/create-react-jekyll/), and its main drawback is locally building/committing the build each time you want to deploy.

Just like if you were sprinkling jquery into a regular website, you have to deploy the assets.

Below we have a solution to use netlify redirects/rewrites, as a way to reverse proxy a subdirectory path onto the index of another netlify project.

That netlify project can be build from a separate repo, or from another folder in a mono-repo style.

### Root Repo App

Setup two redirects:

- one for the static assets `/subdir/static/* https://childrepo.netlify.app/static/:splat 200`
- one for shadowing the index.html file `/subdir* https://childrepo.netlify.app/index.html 200`

It is important the redirects are in this order, because proxies are processed in order.

# Child folder Repo App

add environment variable for `PUBLIC_URL=/subdir`

This tells Create-React-App that the target will be hosted on a sub-folder

> You can also use `process.env.PUBLIC_URL` as a basename for react-router!
