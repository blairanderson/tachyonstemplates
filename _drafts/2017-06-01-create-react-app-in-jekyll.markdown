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

I love using Jekyll and React to build on the web.

This site is built with Jekyll, and the [Component Playground](/components/) is built using React Storybook.

This article assumes you already have a jekyll site built with github pages, and that you want to add a little react app with a simple dev/build/deploy process!

# 1 install create-react-app and setup a new project

`create-react-app jekyll-react-commands`
`mv jekyll-react-commands/ _jekyll-react-commands`
`mkdir jekyll-react-commands`

These commands will create a react app inside a dev directory. 
```json
"scripts": {
  ... add to your scripts
  "predeploy": "npm run build",
  "deploy": "rm -rf ../tachyons-components/static && cp -fR ./build/* ../tachyons-components && echo \"---\nlayout: null\n---\n$(cat ../tachyons-components/index.html)\" > ../tachyons-components/index.html"
},

```

`"homepage": "/tachyons-components/"`

```
