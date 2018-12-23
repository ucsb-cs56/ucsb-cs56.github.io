---
title: Head First Java, 2nd Edition
layout: default
desc: Main textbook for learning Java
custom_sort_order: 1
---

<div>&nbsp;</div>

{% include read_hfj_online.html %}

<div id="chapters" data-role="collapsible" data-collapsed="false">
  <h2>Reading Notes, by Chapter</h2>
    <ul>
      {% assign hfj_chapters = site.hfj | sort: 'sort_key' %}
      {% for chapter in hfj_chapters %}
         <li><a href="{{chapter.url}}">Chapter {{chapter.chapter}}</a>&mdash;{{chapter.desc}}</li>
      {% endfor %}
    </ul>
</div>


Other chapters may be available here:  <https://foo.cs.ucsb.edu/56wiki/index.php/HFJ>