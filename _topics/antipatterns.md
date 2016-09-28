---
topic: "antipatterns"
desc: "Things to avoid in your code"
---

Definition
==========

An anti-pattern is something that lots of people write often in their
code, but that is BAD and should NOT BE DONE.

Sometimes the code might even "work" in the sense that it "computes the
correct result", but it is hard to read for other programmers, or
difficult to maintain, or might lead to later bugs or errors. Other
times it is just wasteful, in that it takes up space in the code for no
good reason.

And sometimes, it is just code that might "seem right", but is just
plain wrong&nbsp;or at best, a questionable design choice.

<div data-role="collapsible" data-collapsed="false">
  <h2>More on Antipatterns</h2>
  <ul>
   {% for topic in site.topics %}
       {% if topic.topic contains "Antipatterns: " or topic.topic contains "antipatterns: " %} 
           <li><a href="{{topic.url}}">{{ topic.topic }}</a>&mdash;{{topic.desc}}</li>
       {% endif %}
   {% endfor %}
  </ul>
</div>

