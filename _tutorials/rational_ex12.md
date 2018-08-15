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

As a reminder, in Ant we work with targets and tasks.   Tasks are built-in to Ant, while targets are defined by the programmer.   A target called `compile` can be anything the programmer wants it to be.  By convention, it is a target
that includes the `javac` task, but it could include other things, or be something completely different.  (Note that if you
are doing something in the `compile` target that isn't related to compiling, that's a bit strange and might confuse people, so you shouldn't, but still: the point is that you could.)  Also, the `compile` target won't magically do the right thing: you have to tell it what to do, and tell it to do that thing in the correct way.

Maven is entirely different.  We don't tell the system "how" to do things; it already "knows". That's what the Project Object Model (POM) is all about.  The POM has built into it, most of the "usual stuff" that people want to do in a project.  All we have to do is:

* provide some minimal configuration for those things
* specify any other pieces of software that our project depends on (e.g. external JAR files, etc.)
* add-on any "extra pieces" (callled plugins) that are not part of the standard Project Object Model, and configure those.

So instead of defining targets consisting of tasks, we 

* provide "configuration" for the phases and goals that are already part of the POM
* we add on things that might be "extra bits" that we want, and configure those.

That's a very high level description and will probably leave you more confused than enlightened.  If so, that's ok.  It will make more sense after we look at some examples.

#  So how do I get things done? (`ant compile` → `mvn compile`, etc.)

So to get things done:

* instead of writing `ant clean`, `ant compile`, `ant test`, etc. 
* you'll write `mvn clean`, `mvn compile`, `mvn test`, etc.

For those three commands, it's a straight translation; replace `ant` with `mvn` and you are good to go.  For some other commands, it's a bit different.  I'll cover that in the next section with a quick table.

As a reminder, the target names in Ant, such as `ant compile`, `ant test`, etc. are programmer defined.  I'm showing the *usual* choices, the ones that most programmers use.   But when you write a build.xml you are free to use whatever target names you want. (Having said that, you should probably stick to the *usual* ones: `ant clean`, `ant compile`, `ant test`, `ant javadoc`, `jar`, etc.).

In Maven, though, all of the names of things that follow `mvn` such as `mvn clean`, `mvn compile`, etc. are *fixed*.  They are the names of either *phases* or *goals* that are part of the Maven *lifecycle*.  While new ones can be added, that involves an advanced technique called writing a "plugin", which we will *NOT* be doing in this course.

# Ant to Maven, a more complete look


| What | How, with Ant | How with Maven | Comments |
|-|-|-|-|
| The file that controls everything | `build.xml` | `pom.xml` | 
| tidy up for a fresh start | `ant clean` | `mvn clean` |
| compile the code | `ant compile` | `mvn compile` | 
| test the code | `ant test` | `mvn test` | 
| make javadoc | `ant javadoc` | `mvn site` or `mvn javadoc:javadoc` |
| run the code | `ant run` | `mvn exec:java` |
| make a jar file | `ant jar` | `mvn package` |

Now a bit more on each of those.
