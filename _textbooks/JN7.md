---
title: "Java in a Nutshell, 7th Edition"
layout: default
desc: "Supplemental text for updates to Java 6 thru Java 11"
custom_sort_order: 2
used_this_quarter: true
---

<div>&nbsp;</div>

{% include read_jn7_online.html %}

<div id="chapters" data-role="collapsible" data-collapsed="false">
  <h2>Reading Notes, by Chapter</h2>
    <ul>
      {% assign jn7_chapters = site.jn7 | sort: 'sort_key' %}
      {% for chapter in jn7_chapters %}
         <li><a href="{{chapter.url}}">Chapter {{chapter.chapter}}</a>&mdash;{{chapter.desc}}</li>
      {% endfor %}
    </ul>
</div>


