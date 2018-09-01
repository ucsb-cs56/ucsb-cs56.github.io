---
topic: "SparkJava: Templates"
desc: "The various template engines you can use with SparkJava"
indent: True
category_prefix: "SparkJava: "
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
  {% raw %}{{{% endraw %}#each comments{% raw %}}}{% endraw %}
  <h2><a href="/posts/{{../permalink}}#{{id}}">{{title}}</a></h2>
  <div>{% raw %}{{{% endraw %}body{% raw %}}}{% endraw %}</div>
  {% raw %}{{{% endraw %}/each{% raw %}}}{% endraw %}
</div>
```

What is both wonderful and awful about SparkJava is that it gives you a wide variety of choices for your templating engine.

The list is shown on this page: <http://sparkjava.com/documentation#views-and-templates>.  The ones that are marked as "mature" 
are listed here.  I encourage you to choose one of these.

| Templating Engine | Link to some documentation | 
|-|-|
| Velocity  | [Velocity User Guide](http://velocity.apache.org/engine/1.7/user-guide.html) | 
| Freemarker | [Freemarker Getting Started](https://freemarker.apache.org/docs/dgui_quickstart_basics.html)  |
| Mustache   |  [Baeldung tutorial for Mustache using Java](https://www.baeldung.com/mustache) |
| Handlebars | [Handlebars.java](https://jknack.github.io/handlebars.java/gettingStarted.html)  |
| Jade       |  [Jade Syntax](https://naltatis.github.io/jade-syntax-docs/) |
| Thymeleaf  | [Thymeleaf Tutorial](https://www.thymeleaf.org/doc/tutorials/2.1/usingthymeleaf.html)  |

There are five others marked as "we know very little about this"; I encourage you not to use those.

Each template engine has its particular pros and cons.  Eventually, we may settle on one.   For now, as you explore various SparkJava
tutorials, notice which of these template engines is being used.

Some examples of tutorials and full webapp examples that use various templating engines:

|Tutorial|Template Engine|Github Repo|
|-|-|-|
|[Library website](http://sparkjava.com/tutorials/application-structure)| Velocity | <https://github.com/tipsy/spark-basic-structure>|
