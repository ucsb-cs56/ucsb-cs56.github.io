---
topic: "Rational"
desc: "A class for rational numbers, and starting point for learning Java, and the Java toolchain"
---

<div class="github-preview-only">On website: https://ucsb-cs56-pconrad.github.io/tutorials/rational/</div>


Based on <https://github.com/UCSB-CS56-M16/cs56-rational-example>



This is a set of tutorial examples of a class for Rational Numbers.  

It illustrates various concepts/techinques of Java Coding (a list of these appears below.)

These examples are intended as support for a course in which there are also reading assignments and lectures; this tutorial is not intended to be a stand-alone curriculum for learning Java.  

Having said that, if you follow the code examples in order, and look up the concepts that are new to you at each step, that will probably go a long way towards learning some important basic concepts of Java programming.

Link to javadocs: <http://ucsb-cs56-m16.github.io/cs56-rational-example>

<style>
div.tutorial-table * table { border-collapse: collapse; }
div.tutorial-table * table * th { border: 1px solid black; padding: 4px; }
div.tutorial-table * table * td { border: 1px solid black; padding: 4px; }
</style>

<div class="tutorial-table" data-role="collapsible" data-collapsed="false">
  <h2 markdown="1">`Rational` tutorials: table of contents</h2>
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



# Java Language Concepts 

This is a work in progress; not all may be covered yet.  Will update this list with reference to the first example where each concept is introduced as work on this repo progresses.

1. private data members  (ex01)
1. public constructors (ex01)
1. toString method (ex02)
1. public getters (ex02)
1. JUnit testing (ex03)
1. immutable objects (throughout, but discussed in ex04)
1. static methods (class level) (ex05)
1. exceptions (IllegalArgumentException) (ex07)
1. proper way to override equals and hashcode (ex09)
1. equals vs. == (ex09)
1. comparable interface (ex11 and beyond)
1. creating an arraylist of rationals (ex11 and beyond)
1. sorting an arraylist of rationals (ex11 and beyond)
1. reading/writing rationals from/to a text file (ex11 and beyond)
1. incorporating rationals into other objects (ex11 and beyond)

Java Language Toolset Skills

1. Compiling/Running by hand with `javac` and `java` (ex01)
1. Ant (ex02)
1. Running from a jar file (ex03)
1. JUnit jars (ex03)
1. Javadoc (ex04)
1. Adding line numbers to stack traces (ex05)
1. Adding links to Java Standard Libraries in our javdoc (ex06)
1. Packages (ex10)
1. Maven (ex11 and beyond)

# Guide to the companion github repository.

The code to support this tutorial is in the following github repository:

<https://github.com/UCSB-CS56-M16/cs56-rational-example>

* Top level directory contains 
    * this `README.md` file
    * subdirectories `ex01`, `ex02`, etc. one per example
    * support files for continuous integration (.travis.yml)
    
* To follow these examples, consult each README.md in each subdirectory (ex01/README.md) etc. in order, for further information.


<div class="github-preview-only">On website: https://ucsb-cs56-pconrad.github.io/tutorials/rational/</div>
