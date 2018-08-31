---
topic: "SparkJava: Templates"
desc: "The various template engines you can use with SparkJava"
indent: True
---

Almost every web framework has some kind of *templating engine* built into it.

A templating engine allows you to build a web page by iterating over a data structure.   A template is a mix of HTML, with stuff that looks
a little like code.

For example, here is a template written using the [Handlebars](https://handlebarsjs.com/) template engine.  The stuff inside `{{}}` are the pieces of code that 
generate HTML.  The `{{}} characters look like the handlebars of a bicycle if you look at them sideways; that's what gives Handlebars
it's name:

```
<h1>Comments</h1>

<div id="comments">
  {{#each comments}}
  <h2><a href="/posts/{{../permalink}}#{{id}}">{{title}}</a></h2>
  <div>{{body}}</div>
  {{/each}}
</div>
```

What is both wonderful and awful about SparkJava is that it gives you a wide variety of choices for your templating engine.

The list is shown on this page: <http://sparkjava.com/documentation#views-and-templates>.  The ones that are marked as "mature" 
are listed here.  I encourage you to choose one of these.

* Velocity (very mature, feature rich, great IDE support)
* Freemarker (very mature, feature rich, great IDE support)
* Mustache (mature, decent IDE support)
* Handlebars (mature, decent IDE support)
* Jade (mature, decent IDE support)
* Thymeleaf (mature, feature rich, decent IDE support)

There are five others marked as "we know very little about this"; I encourage you not to use those.

Each template engine has its particular pros and cons.  Eventually, we may settle on one.   For now, as you explore various SparkJava
tutorials, notice which of these template engines is being used.
