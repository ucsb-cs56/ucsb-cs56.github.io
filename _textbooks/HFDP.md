---
title: Head First Design Patterns
layout: default
desc: Main textbook for learning Object-Oriented Programming
custom_sort_order: 2
---

<div>&nbsp;</div>

{% include read_hfdp_online.html %}

<div id="chapters" data-role="collapsible" data-collapsed="false">
  <h2>Reading Notes, by Chapter</h2>
    <ul>
      {% assign hfdp_chapters = site.hfdp | sort: "sort_key" %}
      {% for chapter in hfdp_chapters %}
         <li><a href="{{chapter.url}}">Chapter {{chapter.chapter}}</a>&mdash;{{chapter.title}}{%if chapter.desc %}&mdash;{{ chapter.desc }}{% endif %}</li>
      {% endfor %}
    </ul>
</div>


