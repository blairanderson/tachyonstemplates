---
layout:			post
title:			"Rails: Debouncing Background Tasks (Kinda, But Not Really...)"
date:		 	   2018-05-18
description:	"A PROTIP for debouncing rails background jobs to send the appropriate number of messages."
author:	blair
---

Background jobs help us **delay** expensive tasks so that _USERS_ feel a more responsive application.

When user clicks `Send Emails`, I'm positively certain they should NOT wait for the server to literally send the emails before receiving an HTTP response that _"We've sent the emails"_.

**Why?** Because it sucks to wait for servers. Most users think something went wrong if they have to wait for a website response.

The solution is to do tasks like this in the background!

Instead send the user a notice _"We're sending the emails in the background"_

This article is a bit more nuanced, because its about debouncing or delaying a SINGLE task.

**Here's my Use-Case**

My application has `tickets` (think trello cards). These `tickets` have columns `content, priority, assignee, status, is_read`, with associated `comments` child table.
