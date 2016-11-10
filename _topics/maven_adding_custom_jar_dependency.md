---
topic: "Maven: Adding custom jar dependency"
desc: "Including a jar file that isn't available as a standard Maven dependency"
indent: true
---

One of the main advantages of Maven is not having to deal with jar files directly.  

If you depend on JUnit, you just add it as a dependency in your `pom.xml`,  you just add the magic words to specify
`JUnit` as a dependency in your `pom.xml`, and the jar gets automatically downloaded and added to your classpath.

Same with SparkJava, Apache Commons, or whatever.   Pretty much anything that is a standard 3rd party java library.

But what is the thing you need is NOT standard?  Maybe its too new to have been put into Maven Central?

Examples:

* The Virginia Tech Corgis library
* One CS56 legacy code project using code from another

This is still not a problem for which I have a clear well-documented recipe.  I've working on curated a list of 
links to possible solutions, in the hope that out of that a solution will emerge.  Stay tuned&mdash;when I come up with one,
it will be explained on this page.

# Links to candidate solutions:

The problem with these candidate solutions is that many of them refer to Maven concepts that are not self-evident, and not fully explained within the sets of instructions below.

My hope is that by reading several, and perhaps also reading other sources on Maven, we will eventually decode one of these enough to construct a solution.   I would like that solution to incorporate one of the Corgis jar files as an example.

* <http://blog.valdaris.com/post/custom-jar/>
* <http://stackoverflow.com/questions/5692256/maven-best-way-of-linking-custom-external-jar-to-my-project>
* <https://www.mkyong.com/maven/how-to-include-library-manully-into-maven-local-repository/>
* <https://softwarecave.org/2014/06/14/adding-external-jars-into-maven-project/>
* <https://maven.apache.org/guides/mini/guide-3rd-party-jars-local.html>
* <https://maven.apache.org/guides/mini/guide-3rd-party-jars-local.html>
