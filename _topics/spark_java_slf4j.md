---
topic: "SparkJava: SLF4J"
desc: "What is the Simple Logging Framework For Java, and how to configure it"
category_prefix: "SparkJava: "
indent: True
---

If you work with SparkJava, one of the things you'll encounter is that 
it has a dependency on the Simple Logging Framework for Java, also known by
its acronym, *SLF4J*.

This logging framework requires a bit of configuration if:

* you *don't* want to see annoying error messages
* you *do* want to see helpful log messages

At the bottom of this article are some pointers to more details.  But for now, here is the minimum that you need to know
to get SLF4J working for you in the context of a SparkJava project.

# Add this to your pom.xml

Near the top:

```xml
<properties>
    <slf4jVersion>1.6.1</slf4jVersion>
</properties>
```

Then, in the dependencies, add this.   Swap out `slf4j-simple` or `slf4j-nop` depending on which one you want.

```xml
  <dependency>
      <groupId>org.slf4j</groupId>
      <artifactId>slf4j-api</artifactId>
      <version>${slf4jVersion}</version>
    </dependency>
    <dependency>
      <groupId>org.slf4j</groupId>
      <!-- use slf4j-simple for System.out, use slfj-nop for no log output -->
      <artifactId>slf4j-simple</artifactId>
      <version>${slf4jVersion}</version>
    </dependency>
```

A repo that has this code in it, working, is here: <https://github.com/pconrad-webapps/sparkjava-hello-improved>

# References

* [DZone Article: Adding SLF4J to your Maven Project](https://dzone.com/articles/adding-slf4j-your-maven)
