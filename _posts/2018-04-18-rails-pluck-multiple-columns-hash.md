---
layout:			post
title:			"Rails: Pluck Multiple Columns in a Single Query (Examples)"
date:		 	   2018-04-18
description:	"A PROTIP for fetching Data and building dashboards is knowing your way around getting data."
author:	blair
---

### Data runs most technology businesses these days.

Fortunately, rails and Active Record makes it pretty easy to organize our tables and postgres helps us make sure the tables stay consistent.

Recently I was looking for a more efficient way to query data, and I love how easy it is to `pluck` data when i need it.

Specifically loved that I could scope and group and pluck in a single query.

{% highlight ruby %}
OrderItems.where(account_id: current_account.id).group_by_month.pluck("SUM(price_amount_cents)")
{% endhighlight  %}

So we're looking to group by month, and scope this to  a certain account... this is pretty straight forward...

But then I needed to represent more data on the page.


{% highlight ruby %}
sales = OrderItems.where(account_id: current_account.id).group_by_month.pluck("SUM(price_amount_cents)")
refunds = OrderItems.where(account_id: current_account.id).group_by_month.pluck("SUM(refund_amount_cents)")
coupons = OrderItems.where(account_id: current_account.id).group_by_month.pluck("SUM(coupon_amount_cents)")
{% endhighlight  %}

All good and fine, as you can see pretty reasonable requests... "Show as much data as helpful"...

### Could it be more efficient?

How about something like this?

{% highlight ruby %}
data = OrderItems.where(account_id: current_account.id).group_by_month.pluckm({
  sales: "SUM(price_amount_cents)",
  refunds: "SUM(refund_amount_cents)",
  coupons: "SUM(coupon_amount_cents)"
})
{% endhighlight  %}

Seemed pretty reasonable and all good so I created **pluck_multi.rb** and started writing some code:

{% highlight ruby %}
module PluckMulti
  extend ActiveSupport::Concern

  class_methods do
    def pluckm(many={}, options={})
      raise(ArgumentError.new("Missing attributes! should look like Model.pluckm({some_name: 'SUM(some_column_integer)'})")) if many.empty?
      Hash[
        many.keys.zip(self.pluck(many.values.join(", ")).first)
      ]
    end
  end
end

# include the extension
ActiveRecord::Base.send(:include, PluckMulti)
{% endhighlight  %}


This little Gem ended up being super simple, and a super cool way for me to be like "wow, i actually improved my own life a tiny little bit"...

After including the file in app startup, all my Models got slightly more helpful for me, and thats how my love story with rails goes...
