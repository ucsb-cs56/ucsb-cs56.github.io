---
title: UCSB CS56 pconrad
---

# CS56&mdash;Advanced Applications Programming

<div id="about" data-role="collapsible" data-collapsed="false" markdown="1">
<h2>About this course</h2>

A course taught by [Phill Conrad](http://www.cs.ucsb.edu/~pconrad)
in the [Dept. of Computer Science](http://www.cs.ucsb.edu) at
[UC Santa Barbara](http://www.ucsb.edu)

Older materials can be found at the [56wiki](https://foo.cs.ucsb.edu/56wiki) site.

This site is maintained in this github repo: <https://github.com/UCSB-CS56-pconrad/UCSB-CS56-pconrad.github.io>

</div><!-- about -->

<div id="prev-offerings" data-role="collapsible" data-collapsed="true">
<h2>Previous Offerings of CS56</h2>
<div markdown="1">

[M18](https://ucsb-cs56-m18.github.io/)  [W18](https://ucsb-cs56-w18.github.io/) [F17](https://ucsb-cs56-f17.github.io/) [M16](https://ucsb-cs56-m16.github.io/) [W16](https://foo.cs.ucsb.edu/56wiki/index.php/Main_Page) [W15](https://foo.cs.ucsb.edu/56wiki/index.php/Main_Page) [S13](http://www.cs.ucsb.edu/~pconrad/cs56/) [S12](http://www.cs.ucsb.edu/~pconrad/cs56/) [W12](http://www.cs.ucsb.edu/~pconrad/cs56/) [W11](http://www.cs.ucsb.edu/~pconrad/cs56/) [S11](http://www.cs.ucsb.edu/~pconrad/cs56/)

</div><!-- markdown -->
</div><!-- collapsible -->


<div id="textbooks" data-role="collapsible" data-collapsed="false">
  <h2>Textbooks</h2>
  <p>Articles on individual chapters can be found on the pages for each textbook</p>
    <ul>
      {% assign textbooks = site.textbooks | sort: 'custom_sort_order' %}
      {% for textbook in textbooks %}
         <li><a href="{{textbook.url}}">{{ textbook.title }}</a>&mdash;{{textbook.desc}}</li>
      {% endfor %}
    </ul>
</div>

<div id="tutorials" data-role="collapsible" data-collapsed="false">
  <h2>Tutorials</h2>
  <ul>
   {% for t in site.tutorials %}
     <li {% if t.indent %} class="indent" {% endif %} ><a href="{{t.url}}">{{ t.topic }}</a>&mdash;{{t.desc}}</li>
   {% endfor %}
  </ul>
</div>


<div id="topics" data-role="collapsible" data-collapsed="false">
  <h2>Topics</h2>
  <ul>
   {% for t in site.topics %}
      {% if t.skipIndex %}{% else %}
        <li {% if t.indent %} class="indent" {% endif %} ><a href="{{t.url}}">{{ t.topic }}</a>&mdash;{{t.desc}}</li>
      {% endif %}
   {% endfor %}
  </ul>
</div>


<div id="resources" data-role="collapsible" data-collapsed="false">
  <h2>Resources</h2>
  <ul>
   {% for topic in site.resources %}
     <li {% if topic.indent %} class="indent" {% endif %} ><a href="{{topic.url}}">{{ topic.topic }}</a>&mdash;{{topic.desc}}</li>
   {% endfor %}
  </ul>
</div>

