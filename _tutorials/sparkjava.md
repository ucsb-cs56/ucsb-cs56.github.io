---
topic: "SparkJava"
desc: "Creating webapps with the Spark framework for java"
---

<div class="github-preview-only">
On website: https://ucsb-cs56-pconrad.github.io/tutorials/sparkjava
</div>

<style>
div.tutorial-table * table { border-collapse: collapse; }
div.tutorial-table * table * th { border: 1px solid black; padding: 4px; }
div.tutorial-table * table * td { border: 1px solid black; padding: 4px; }
</style>

<div class="tutorial-table" data-role="collapsible" data-collapsed="false">
  <h2 markdown="1">SparkJava tutorials: table of contents</h2>
  <table>
   <tr>
           <th>Section</th>
           <th>Code <br>(github repo)</th>
           <th>Topics Covered</th>
   </tr>
   {% for t in site.tutorials %}
       {% if t.topic contains "Rational: "%} 
           <tr>
           <td><a href="{{t.url}}">{{ t.topic }}</a></td>
           <td>{% if t.code_repo %} <a href="{{t.code_repo}}">code</a>  {% else %} &nbsp; {% endif %}</td>
           <td>{{t.desc}}</td>
           </tr>
       {% endif %}
   {% endfor %}
  </table>
</div>


