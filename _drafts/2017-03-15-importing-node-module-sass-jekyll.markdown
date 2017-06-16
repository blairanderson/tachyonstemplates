---
layout:			post
title:			"Importing SCSS files from Node Modules using Jekyll"
date:			2017-03-15
category:		News
description:	"Stop copying files from github into your project and import them correctly. "
tags:			update
meta-title:		"Import SCSS files from node_modules using Jekyll"

author:			"Blair Anderson"
author-slug:	blair-anderson
author-desc:	"Blair Anderson is the creator of Tachyons Templates and owner of Tachyons Templates."
author-url:		http://blairanderson.co
author-twitter:	blairanderson
author-github:	blairanderson
---

I love using jekyll and OSS to build badass web projects.

This site obviously uses tachyons.io and is built with jekyll.


First, using NPM download tachyons.

`npm install tachyons-sass --save`


Make sure you have a main SCSS file.

`css/main.scss`

That scss file should have frontmatter.

```
---
# Only the main Sass file needs front matter (the dashes are enough)
---
@charset "utf-8";
... the rest of your styles here

```


Now since you have imported tachyons from node, you can add it from the import.

```
---
# Only the main Sass file needs front matter (the dashes are enough)
---
@charset "utf-8";

@import "../node_modules/tachyons-sass/tachyons.scss";

```