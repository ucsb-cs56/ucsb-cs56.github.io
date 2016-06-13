---
topic: ANT
desc: A build tool for Java (similar to Make/Makefiles)
---

The short version:

* Ant is similar in purpose to Make/Makefiles for C/C++

Differences:

* XML syntax instead of ideosyncratic Makefile syntax (tabs? what?)
* Built in Java, so its ostensibly portable like Java (Makefiles are very Unix centric)
* You control your project with a file called `build.xml` instead of `Makefile`
* You type `ant` instead of `make`, or, for example: 
    * `ant compile` instead of `make executablename`
    * `ant clean` instead of `make clean`


# References:

* [Ant Users Manual](https://ant.apache.org/manual/)
* [Ant Tutorial (Hello World)](https://ant.apache.org/manual/tutorial-HelloWorldWithAnt.html)
