---
title: Resources
permalink: "/resource_list/"
---

## Resources

<ul>
{%- for t in site.resources -%}
   {%- if t.skipIndex -%}
   {%- else -%}
     <li {% if t.indent %} class="indent" {% endif %} >
        <a href="{{t.url}}">{{ t.topic }}</a>&mdash;{{t.desc}}
     </li>
   {%- endif -%}
{%- endfor -%}
</ul>


