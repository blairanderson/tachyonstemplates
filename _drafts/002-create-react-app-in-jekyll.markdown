---
layout:			post
title:			"Add create-react-app to Jekyll and Github Pages"
date:		 	   2017-06-15
description:	"Deploy a marketing site with a react app, using jekyll and github pages"
meta-title:		"create-react-app  with Jekyll on Github Pages"
author:	blair
---

I love using Jekyll and React to build things.

For example, this site is built with Jekyll, and the [Component Playground](/components/) is built using React Storybook.

Our goal for this article is to create a simple list of commands to get a react app simply added to your dev/build/deploy process!

> This article assumes you already have a jekyll site built on github pages

## 1. install `create-react-app` and setup a new project in your jekyll repo

Lets say your Jekyll repo is `your-jekyll-app` and the react project you WANT to make is `jekyll-react-commands`

the below code will jump into your directory and create the correct react app.


{% highlight bash %}
```
$ cd your-jekyll-app
$ create-react-app jekyll-react-commands
$ mv jekyll-react-commands _jekyll-react-commands
$ mkdir jrc
```
{% endhighlight %}


These commands will create a react app inside a dev directory, and get a jekyll directory ready.

## 2. develop some awesome stuff.

Your new React source code will live inside `_jekyll-react-commands`

the non-underscore version `/jrc/` exists to serve your deployed react app!

`$ cd _jekyll-react-commands && npm run start`

If CRA was installed correctly then you should see an app running!

## 3. update the create-react-app homepage in package.json

Open the `package.json` file that was created inside `_jekyll-react-commands`.

Add a hompage section:

{% highlight javascript %}
"homepage": "/jrc/"
{% endhighlight %}

This is similar to jekyll config which confirms the lib is not running a the root.

## 4. Add build scripts to your package.json

The most important part is deploying. Since GitHub pages cannot build/deploy your react app, it just means you have to do it yourself.

For example, every time i'm ready to deploy i run:

{% highlight javascript %}
npm run deploy
git add .
git commit -m "deploying app version: XYZ"
git push origin master
{% endhighlight %}

And GH pages take care of serving assets properly. Importantly, the `npm run deploy` command needs to be updated to handle moving our app to play nicely with jekyll.

**Add These scripts to your `package.json`:**

> remember to replace `jrc` with your own react app folder

{% highlight javascript %}
"predeploy": "npm run build",
"remove-old-build": "rm -rf ../jrc/static",
"copy-new-build": "cp -fR ./build/* ../jrc",
"echo-layout": "echo \"---\nlayout: null\n---\n$(cat ../jrc/index.html)\" > ../jrc/index.html",
"deploy": "npm run remove-old-build && npm run copy-new-build && npm run echo-layout"
{% endhighlight %}

You can test that it works by ending your react process and starting your jekyll server

Run:
{% highlight javascript %}
bundle exec jekyll serve
{% endhighlight %}

Then visit `localhost:4000/jrc/`

## Should see your react app fired up in jekyll!
