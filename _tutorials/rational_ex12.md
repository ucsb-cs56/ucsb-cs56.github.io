---
topic: "Rational: ex12"
desc: "Converting from Ant to Maven, adding jacoco test case coverage"
indent: true
code_repo: https://github.com/UCSB-CS56-pconrad/cs56-rational-ex12
---


{% include rational_example_header.html %}

# Why are we converting from Ant to Maven?

In this tutorial lesson, we convert the code we've written so far from Ant to Maven.

We do so in order to easily use a tool called [Jacoco](https://ucsb-cs56-pconrad.github.io/topics/testing_jacoco_via_maven/) to measure the <i>[code coverage of our test suite](https://ucsb-cs56-pconrad.github.io/topics/testing/)</i>, that is to check what percentage of the code is covered by our JUnit test cases.    

While it is possible to do this with Ant, it is much easier to do if we switch our build manager to Maven.

