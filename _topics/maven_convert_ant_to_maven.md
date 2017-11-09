---
topic: "Maven: Convert Ant to Maven"
desc: "replacing ant build.xml with maven pom.xml"
indent: true
---

# Quick version

First, read the official Apache [Maven in 5 minutes](https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html) guide, and practice using Maven with a "Hello World" type scratch project so that you understand how Maven works BEFORE trying to convert your first pre-existing Ant based project to Maven. 

Now, assuming that your CS56 project is set up in the normal way with Ant:

1. You probably have a `src` directory has has under it, the packages, e.g. `src/edu/ucsb/cs56/package/Foo.java`.   

   To migrate this to the Maven way:
   
   * Create a directory `src/main/java` with `mkdir -p src/main/java`
   * Move everything in src to src/main/java:
      ```
      mv src/* src/main/java
      ```
      
      You'll get a message that src/main/java can't be moved into itself, which is normal.

2.  If you have a directory with resources, put those files in `src/main/resources`

3.  If you have tests, those go under `src/test/java/` then the full package name, e.g. `src/test/java/edu/ucsb/cs56/TestFoo.java`.    The Maven convention is to keep test code separate from regular code.
   Instead, you need to create a directory java sources to src/main/java,

4. Create a `pom.xml` following this convention:

```
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
  
  <modelVersion>4.0.0</modelVersion>
  
  <groupId>edu.ucsb.cs56.projects.YOUR_PROJECT_NAME_HERE</groupId>
  
  <artifactId>YOUR_PROJECT_NAME_HERE</artifactId>
  <packaging>jar</packaging>
  <version>1.0-SNAPSHOT</version>
  <name>YOUR_PROJECT_NAME_HERE</name>
  <url>http://maven.apache.org</url>
  
  <dependencies>
    
    <dependency>
      <groupId>junit</groupId>
      <artifactId>junit</artifactId>
      <version>3.8.1</version>
      <scope>test</scope>
    </dependency>
    
  </dependencies>
  
</project>
```

Then, you should be able to at least do:

# Resources:

* This [Stack Overflow Answer](https://stackoverflow.com/questions/4029501/how-to-convert-ant-project-to-maven-project) has at least some good information, though still leaves a lot out.
* The page [How to convert from "Ant to Maven in 5 minutes"](http://blog.sonatype.com/2009/04/how-to-convert-from-ant-to-maven-in-5-minutes/) from "Sonotype" comes up often in web searches, and is mentioned in Stack Overflow articles on the subject, but doesn't really have a lot of specifics, and in my view isn't particularly helpful to beginners.  YMMV.
