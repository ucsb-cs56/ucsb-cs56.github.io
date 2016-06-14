---
topic: Ant
desc: "Apache Ant, a build tool for Java (similar to Make/Makefiles)"
---

TODO: Migrate content from [56 wiki ant page](https://foo.cs.ucsb.edu/56wiki/index.php/Ant to this page)
at [this edit link](https://github.com/UCSB-CS56-pconrad/UCSB-CS56-pconrad.github.io/edit/master/_topics/ant.md)

In the meantime, consult that page as a reference as well.

# The short version:

* Ant is similar in purpose to Make/Makefiles for C/C++

# Differences between Ant and make

* XML syntax instead of ideosyncratic Makefile syntax (tabs? what?)
* Built in Java, so its ostensibly portable like Java (Makefiles are very Unix centric)
* You control your project with a file called `build.xml` instead of `Makefile`
* You type `ant` instead of `make`, or, for example: 
    * `ant compile` instead of `make executablename`
    * `ant clean` instead of `make clean`


# References:

* [Ant Users Manual](https://ant.apache.org/manual/)
* [Ant Tutorial (Hello World)](https://ant.apache.org/manual/tutorial-HelloWorldWithAnt.html)
* [Wikipedia page for Apache Ant](https://en.wikipedia.org/wiki/Apache_Ant)
