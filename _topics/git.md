---
topic: "git"
desc: "git and github"
category_prefix: "git: "
category_prefix_alt: "github: "
---

The software package known as *git* is an open source version control system.  

A *git repository* is a collection of files (a directory tree) for a software project, along with the entire version history of those files over time.

The commerical company *github* provides web-based software and cloud-based hosting for git repositories.
* [github.com](https://github.com) is the main site for github services
* [github.ucsb.edu](https://github.ucsb.edu) is a private instance of *Github Enterprise* for UCSB.

The article [git: overview](/topics/git_overview/) explains more.  In addition there are several other articles about git/github listed below.

<div data-role="collapsible" data-collapsed="false">
  <h2>More on git/github</h2>
  <ul>
   {% for topic in site.topics %}
       {% if topic.topic contains "git: " or topic.topic contains "github: "%} 
           <li><a href="{{topic.url}}">{{ topic.topic }}</a>&mdash;{{topic.desc}}</li>
       {% endif %}
   {% endfor %}
  </ul>
</div>

{% if page.category_prefix %}
   <h2> More on {{page.topic}}</h2>
   {% include category_index.html %}
{% endif %}
