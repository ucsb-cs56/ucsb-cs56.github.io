---
topic: "Rational: ex09"
desc: "Work In Progress"
indent: true
code_repo: https://github.com/UCSB-CS56-pconrad/cs56-rational-ex09
---

Work in progress...

<div class="github-preview-only">On website: https://ucsb-cs56-pconrad.github.io/tutorials/rational_ex09/</div>

<em>Part of a [series of tutorial articles about a Rational class](/tutorials/rational/).</em>

{% include code_examples.md %}

# == vs .equals, and hashCode()

The next part of this tutorial concerns the difference between `==` and `.equals` and the implementation of the hashCode() function.

Please first, read through the following:

* [== vs .equals, and hashCode()](/topics/java_double_equals_vs_dot_equals/)
* p. 86 in Chapter 4 of Head First Java, 2nd Edition
  [on-campus]({{site.on_campus}}/{{site.hfj_url}}/{{page.p86}})
  [off-campus]({{site.off_campus}}/{{site.hfj_url}}/{{page.p86}})	

The big picture take away is that we need to implement `.equals()` and `.hashCode()` properly for each class
we implement.

Here's a way to do it.

# First, we write tests

That's the essence of test-driven development.  Always start with your tests

Here are some tests for the .equals() method from the file `RationalTest.java`:

```java

```


Here are some tests for the .hashCode() method from the file `RationalTest.java`:

```java

```
