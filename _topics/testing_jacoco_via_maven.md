---
topic: "Testing: Jacoco via Maven"
desc: "Setting up Jacoco test coverage, using Maven"
indent: true
---

First: read about using Maven at these pages:

* Maven intro: <https://ucsb-cs56-pconrad.github.io/topics/maven/>
* Apache 5 minute guide to Maven: <https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html>
* Converting an Ant Project to Maven: <https://ucsb-cs56-pconrad.github.io/topics/maven_convert_ant_to_maven/>

Then, here's what you need to do to get Jacoco Test Coverage working for your project.

# You need to have your Maven Project set up for JUnit

As a reminder, in a Maven project:

* Regular application code goes under `/src/main/java`
* JUnit test code goes under `/src/test/java`

To use JUnit in a Maven project, you need the JUnit dependency in your `pom.xml` file:

```
<project>
  <dependencies>
    <dependency>
      <groupId>junit</groupId>
      <artifactId>junit</artifactId>
      <version>4.12</version>
      <scope>test</scope>
    </dependency>
  </dependencies>
</project>
```

# Next, add in a plug-in for Jacoco:

There are many examples online of various ways to get Jacoco support in your pom.xml.  The one that worked best for me came from [this page](TBD), and is adapted below (I updated the version to the latest one I found for jacoco [here at Maven Central](TBD)):

```
TBD
```
