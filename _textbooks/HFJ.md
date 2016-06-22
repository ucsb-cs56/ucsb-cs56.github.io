---
title: Head First Java, 2nd Edition
layout: default
desc: Main textbook for learning Java
custom_sort_order: 1
---

<% include read_hfj_online.html %>

<div id="chapters" data-role="collapsible" data-collapsed="false">
  <h2>Reading Notes, by Chapter</h2>
    <ul>
      {% for chapter in site.chapters | where:"textbook","HFJ" %}
         <li><a href="{{chapter.url}}">{{ chapter.textbook }} {{chapter.chapter}}</a> &mdash;{{chapter.desc}}</li>
      {% endfor %}
    </ul>
</div>


Other chapters may be available here:  <https://foo.cs.ucsb.edu/56wiki/index.php/HFJ>