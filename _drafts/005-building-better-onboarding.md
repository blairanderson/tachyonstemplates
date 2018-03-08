---
layout:			post
title:			"Onboarding your Users with Rails (Validations)"
date:		 	   2018-02-2
description:	"How to utilize rails validations for all types of fun situations"
tags:			    rails
author:	blair
---

I recently have been building a webapp for my internal business challenges and found myself wanting better onboarding so that I knew what actions to take next.

I was rather suprrised that there weren't many onbaording blog posts or plugins besides interface design.

My important than the interface, for me, was a consistent message, and as a developer, a consistent to implement new messages as I come and go to the project.

Enter Rails validations.

validations by default utilize a :create or :update context depending on whether the item is persisted or not.

The neat part about validations is that you can create any context you want, and they're completely isolated from your current normal validations.
