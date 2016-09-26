---
topic: "Java"
desc: "The language we are studying in CS56"
---

<div data-role="collapsible" data-collapsed="false">
  <h2>More on Java</h2>
  <ul>
   {% for topic in site.topics %}
       {% if topic.topic contains "Java: " %} 
           <li><a href="{{topic.url}}">{{ topic.topic }}</a>&mdash;{{topic.desc}}</li>
       {% endif %}
   {% endfor %}
  </ul>
</div>
