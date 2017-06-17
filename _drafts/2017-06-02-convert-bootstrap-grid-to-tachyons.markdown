---
layout:			post
title:			"Free create-react-app hosting with Jekyll and Github Pages"
date:		 	   2017-06-15
description:	"Deploy a marketing site with a react app, using jekyll and github pages"
tags:			    update
meta-title:		"create-react-app  with Jekyll on Github Pages"
author:			"Blair Anderson"
author-slug:	blair-anderson
author-desc:	"Blair Anderson is the creator of Tachyons Templates and owner of Tachyons Templates."
author-url:		http://www.tachyonstemplates.com
author-twitter:	blairanderson
author-github:	blairanderson
---

I love using Jekyll and React to build things.

For example, this site is built with Jekyll, and the [Component Playground](/components/) is built using React Storybook.

Our goal for this article is to create a simple list of commands to get a react app simply added to your dev/build/deploy process!

> This article assumes you already have a jekyll site built on github pages

# 1 install `create-react-app` and setup a new project in your jekyll repo

`create-react-app jekyll-react-commands`
`mv jekyll-react-commands/ _jekyll-react-commands`
`mkdir jekyll-react-commands`

These commands will create a react app inside a dev directory, and get a jekyll directory ready.

# 2. update the create-react-app root homepage in `package.json`

`"homepage": "/jekyll-react-commands/"`

# 3. Add build scripts to your `package.json`

```json
"scripts": {
  ...
  "predeploy": "npm run build",
  "remove-old-build": "rm -rf ../jekyll-react-commands/static",
  "copy-new-build": "cp -fR ./build/* ../jekyll-react-commands",
  "echo-layout": "echo \"---\nlayout: null\n---\n$(cat ../jekyll-react-commands/index.html)\" > ../jekyll-react-commands/index.html",
  "deploy": "npm run remove-old-build && npm run copy-new-build && npm run echo-layout"
},

When you're ready to deploy you can run `$ npm run deploy`!

```


```
