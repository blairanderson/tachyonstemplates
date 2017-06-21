---
layout:			post
title:			"How To Create a Custom will_paginate renderer with Tachyons"
date:		 	   2017-06-20
description:	"How To Create a Custom will_paginate renderer with Tachyons"
meta-title:		"How To Create a Custom will_paginate renderer with Tachyons"
author:	blair
---

Pagination is super helpful on dynamic sites. This article will walk through how to create a custom renderer for will_paginate rails gem.

Our goal is to look like this [Tachyons Pagination Component](https://www.tachyonstemplates.com/components/?selectedKind=Pagination&selectedStory=Pagination%20with%20near-black%20borders&full=0&down=0&left=1&panelRight=0)

## Getting Started

# 1. Installation

Go through the [installation instructions](https://github.com/mislav/will_paginate/wiki/Installation).

If you already have done that, skip ahead!

# 2. Setup

### Get your page running with defaults:

in your controller:
{% highlight ruby %}
# perform a paginated query:
@posts = Post.where(awesome: true).paginate({
  page: params[:page],
  per_page: 10  
})
{% endhighlight  %}

in your view:
{% highlight erb %}
# render page links in the view:
<%= will_paginate @posts %>
{% endhighlight  %}

### This setup should give you some basic links that are working

**go ahead and commit right now :)**

# 3. Create your Custom Renderer!

Inside your controller create a custom renderer object:

{% highlight ruby %}
## update
@posts = Post.paginate(:page => params[:page])

## to:
@posts = Post.paginate(:page => params[:page])
@custom_renderer = Class.new(WillPaginate::ActionView::LinkRenderer) do
  def container_attributes
    {class: "tc cf mv2 bg-pink"}
  end
end
{% endhighlight  %}

And inside your view, use the new renderer:

{% highlight ruby %}
## update:
<%= will_paginate @posts %>
## to:
<%= will_paginate @posts, renderer: @custom_renderer %>
{% endhighlight  %}

At this point you should refresh the page and see a big pink pagination bar setup!

# 4. Customize the Renderer

If you're inclined to figure this problem out yourself, go ahead and [dig through the LinkRenderer class](https://github.com/mislav/will_paginate/blob/master/lib/will_paginate/view_helpers/link_renderer.rb). Its filled with all the important bits about this blog post.

**Update:**
{% highlight ruby %}
@custom_renderer = Class.new(WillPaginate::ActionView::LinkRenderer) do
  def container_attributes
    {class: "tc cf mv2 bg-pink"}
  end
end
{% endhighlight  %}

**To:**
{% highlight ruby %}
@renderer = Class.new(WillPaginate::ActionView::LinkRenderer) do
  def container_attributes
    {class: "tc cf mv2"}
  end

  def page_number(page)
    if page == current_page
      tag(:span, page, class: 'b bg-dark-blue near-white ba b--near-black pa2')
    else
      link(page, page, class: 'link ba b--near-black near-black pa2', rel: rel_value(page))
    end
  end

  def gap
    text = @template.will_paginate_translate(:page_gap) { '&hellip;' }
    %(<span class="mr2">#{text}</span>)
  end

  def previous_page
    num = @collection.current_page > 1 && @collection.current_page - 1
    previous_or_next_page(num, @options[:previous_label], 'link ba near-black b--near-black pa2')
  end

  def next_page
    num = @collection.current_page < total_pages && @collection.current_page + 1
    previous_or_next_page(num, @options[:next_label], 'link ba near-black b--near-black pa2')
  end

  def previous_or_next_page(page, text, classname)
    if page
      link(text, page, :class => classname)
    else
      tag(:span, text, :class => classname + ' bg-dark-blue near-white')
    end
  end
end
{% endhighlight  %}

**Refresh the page!**

Hopefully this will get you moving in the direction you're looking for.

If these methods stop working, go ahead and
