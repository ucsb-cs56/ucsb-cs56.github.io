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


#  Ant: `build.xml` → Maven: `pom.xml`

Instead of a `build.xml` we use a file called `pom.xml`.  

POM stands for Project Object Model.   That's not important right now, but I thought you'd be wondering.  We'll discuss
what the Project Object Model is and why it's important later.   

What's in these files is in the XML syntax in both cases, but the way they are structured is entirely different.  That brings us to *phases* and *goals*.

#  Ant: targets and tasks → Maven: phases and goals

In Ant we work with targets and tasks, and the

In Maven we work with Phases and goals.


#  `ant compile` → `mvn compile`, etc.

Instead of writing `ant clean`, `ant compile`, `ant test`, etc. you'll write `mvn clean`, `mvn compile`, `mvn test`, etc.

For those three commands, it's a straight translation; replace `ant` with `mvn` and you are good to go.  For some other commands, it's a bit different.  I'll cover that in the next section with a quick table.

Note that the target names in Ant, such as `ant compile`, `ant test`, etc. are programmer defined.  I'm showing the *usual* choices, the ones that most programmers use.   But when you write a build.xml you are free to use whatever target names you want. (Having said that, you should probably stick to the *usual* ones: `ant clean`, `ant compile`, `ant test`, `ant javadoc`, `jar`, etc.).

In Maven, though, all of the names of things that follow `mvn` such as `mvn clean`, `mvn compile`, etc. are *fixed*.  They are the names of either *phases* or *goals* that are part of the Maven *lifecycle*.  While new ones can be added, that involves an advanced technique called writing a "plugin", which we will *NOT* be doing in this course.

We'll discuss Maven lifecycle including phases, goals, etc. and the Project Object Model 

# Ant to Maven, quickstart


| What | How, with Ant | How with Maven | Comments |
|-|-|-|-|
| The file that controls everything | `build.xml` | `pom.xml` | 
| tidy up for a fresh start | `ant clean` | `mvn clean` |
| compile the code | `ant compile` | `mvn compile` | In Ant, the target name `compile` is just a convention; we could actually call it anything we want (`kompiler`,`makemystuff`,`potato`).  In Maven, we have no choice: `compile` is the goal name, and it's baked into the system.
| test the code | `ant test` | `mvn test` | 
