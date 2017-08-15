---
layout:			post
title:			"Simple Form Tachyons Config"
date:		 	   2017-08-15
description:	"How To Create a Tachyons Config for your Rails Simple Form Application "
meta-title:		"How To Create a Custom simple-form config with Tachyons"
author:	blair
---

SimpleForm is a great plugin to help reduce boilerplate markup for your forms.

Our goal is to create a [Tachyons Sign In Form](https://www.tachyonstemplates.com/components/?selectedKind=Forms&selectedStory=Signin) with a simple tachyons config.

## Getting Started

# 1. Installation

Go through the [installation instructions](https://github.com/plataformatec/simple_form).

# 2. Setup

### Get your page running with defaults:

in your view:
{% highlight erb %}
<%= simple_form_for @user do |f| %>
  <%= f.input :username %>
  <%= f.input :password %>
  <%= f.button :submit %>
<% end %>
{% endhighlight  %}

### This setup should give you some basic links that are working

**go ahead and commit right now :)**

# 3. Create your Custom Tachyons Simpleform Config!

Inside `config/initializers` create a file called `simple-form-tachyons.rb`

{% highlight ruby %}
SimpleForm.setup do |config|
  help_block = 'br0 ba pv1 ph2 mb2 white b--dark-red bg-light-pink'
  config.error_notification_class = help_block
  config.button_class = 'b mv3 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
  config.boolean_label_class = 'pa0 ma0 lh-copy f6 pointer'
  config.default_form_class = 'measure center'

  config.wrappers :vertical_form, tag: 'div', class: 'form-group', error_class: 'has-error' do |b|
    b.use :html5
    b.use :placeholder
    b.optional :maxlength
    b.optional :pattern
    b.optional :min_max
    b.optional :readonly
    b.use :label, class: 'db fw6 lh-copy f6'

    b.use :input, class: 'pa2 input-reset ba bg-transparent w-100 measure'
    b.use :error, wrap_with: { tag: 'div', class: help_block }
    b.use :hint,  wrap_with: { tag: 'div', class: help_block }
  end

  config.wrappers :vertical_file_input, tag: 'div', class: 'form-group', error_class: 'has-error' do |b|
    b.use :html5
    b.use :placeholder
    b.optional :maxlength
    b.optional :readonly
    b.use :label, class: 'db fw6 lh-copy f6'

    b.use :input
    b.use :error, wrap_with: { tag: 'div', class: help_block }
    b.use :hint,  wrap_with: { tag: 'div', class: help_block }
  end

  config.wrappers :vertical_boolean, tag: 'div', class: 'form-group', error_class: 'has-error' do |b|
    b.use :html5
    b.optional :readonly

    b.wrapper tag: 'div', class: 'pa0 ma0 lh-copy f6 pointer' do |ba|
      ba.use :label_input
    end

    b.use :error, wrap_with: { tag: 'div', class: help_block }
    b.use :hint,  wrap_with: { tag: 'p', class: help_block }
  end

  config.wrappers :vertical_radio_and_checkboxes, tag: 'div', class: '', :error_class => 'error' do |b|
    b.use :html5
    b.wrapper :tag => 'div', :class => '' do |ba|
      ba.wrapper :tag => 'label', :class => '' do |bb|
        bb.use :input
        bb.use :label_text, class: 'pa0 ma0 lh-copy f6 pointer'
      end
      ba.use :error, :wrap_with => { :tag => 'span', :class => 'help-inline' }
      ba.use :hint,  :wrap_with => { :tag => 'div', :class => help_block }
    end
  end

  config.default_wrapper = :vertical_form
  config.wrapper_mappings = {
    check_boxes: :vertical_radio_and_checkboxes,
    radio_buttons: :vertical_radio_and_checkboxes,
    file: :vertical_file_input,
    boolean: :vertical_boolean,
  }
end
{% endhighlight  %}

## And restart your server!

At this point you should refresh the page and see a big pink pagination bar setup!

# 4. Customize the Config

This should get your pretty darn close to the tachyons simpleform config that you're looking for.

I highly suggest tweaking the styles in this config and restarting your server to get it closer to your liking.

Hopefully this will get you moving in the direction you're looking for.

If these methods stop working, go ahead and let me know!
