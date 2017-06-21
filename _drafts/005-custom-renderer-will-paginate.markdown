---
layout:			post
title:			"How To Create a Custom will_paginate renderer with Tachyons"
date:		 	   2017-06-15
description:	"How To Create a Custom will_paginate renderer with Tachyons"
meta-title:		"How To Create a Custom will_paginate renderer with Tachyons"
author:	blair
---

Pagination is super helpful on dynamic sites. This article will walk through how to create a custom renderer for will_paginate rails gem.

### Getting Started

1. Make sure you have already gone through the [installation instructions](https://github.com/mislav/will_paginate/wiki/Installation).

2. Get your page running with defaults:

{% highlight ruby %}
## perform a paginated query:
@posts = Post.paginate(:page => params[:page])

# or, use an explicit "per page" limit:
Post.paginate(:page => params[:page], :per_page => 30)

## render page links in the view:
<%= will_paginate @posts %>

{% endhighlight  %}
