---
layout:			post
title:			"Rails: Save and Query JSON using PostgreSQL (Examples)"
date:		 	   2018-04-14
description:	"How to utilize JSON columns with POSTGRESQL using Ruby on Rails and ActiveRecord"
author:	blair
---

### JSON is a native data type in PostgreSQL since 9.2 and now also a first class citizen in Rails!

In this article we will learn how to persist and save object data more easily.

## 1. Create your Migration

{% highlight ruby %}
class Migration0001
  def change
    add_column :users, :settings, :json, default: {}
  end
end
{% endhighlight  %}

I can confirm that PostgreSQL has native support, check your database documentation for other support questions!

## 2. Saving JSON data in your database

**Top Secret Tip:** Its *EXACTLY*  the same as saving regular attributes!

{% highlight ruby %}
settings = {
  email_newsletter: 'confirmed',
  cheese: {favorite: 'blue', worst: 'cheddar'}
}

user.update({settings: settings})

user.settings["email_newsletter"] == 'confirmed'
#=> true

{% endhighlight  %}

REMEMBER that symbols in your hashes will be converted to strings!

JSON does not have knowledge of  ruby symbols!



## 3. Can we Query JSON attributes!?!

**HECK YEAAAA**

Lets find all users that have confirmed the newsletter and their favorite cheese is `blue`...

The query will look like this:

{% highlight sql %}
SELECT * FROM "users"
WHERE settings::json ->> 'email_newsletter' = 'confirmed'
AND settings::json #>> '{cheese,favorite}' = 'blue'
{% endhighlight  %}

Lets look at the first `WHERE` clause:

{% highlight sql %}
WHERE settings::json ->> 'email_newsletter' = 'confirmed'
{% endhighlight  %}

typing `::json` will make sure your data is a JSON type.

`->>` is used for top level `text` and `integers`.

**Now lets query against the NESTED JSON data:**

{% highlight sql %}
AND settings::json #>> '{cheese,favorite}' = 'blue'
{% endhighlight  %}

the `#>>` is used to Get JSON objects at a specified path!

## YOU DID IT!

Now you can query against your JSON Data is Rails with PostgreSQL!

---

[Official PostgreSQL Documentation](https://www.postgresql.org/docs/9.3/static/functions-json.html#FUNCTIONS-JSON-OP-TABLE)
