---
layout:			post
title:			"Create-React-App in Jekyll on Github Pages"
date:		 	   2017-06-15
description:	"Deploy little apps on github pages with Jekyll"
tags:			update
meta-title:		"Create-React-App in Jekyll on Github Pages"
author:			"Blair Anderson"
author-slug:	blair-anderson
author-desc:	"Blair Anderson is the creator of Tachyons Templates and owner of Tachyons Templates."
author-url:		http://www.tachyonstemplates.com
author-twitter:	blairanderson
author-github:	blairanderson
---

I love using jekyll and OSS to build badass web projects.

Lets say you want to add a route that is a react app
`cd your-jekyll-repo`

`create-react-app tachyons-components`

`mv tachyons-components/ _tachyons-components`

`mkdir tachyons-components`

```json
"scripts": {
  ... add to your scripts
  "predeploy": "npm run build",
  "deploy": "rm -rf ../tachyons-components/static && cp -fR ./build/* ../tachyons-components && echo \"---\nlayout: null\n---\n$(cat ../tachyons-components/index.html)\" > ../tachyons-components/index.html"
},

```

`"homepage": "/tachyons-components/"`

```
