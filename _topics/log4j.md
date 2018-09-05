---
topic: "Log4J"
desc: "A logging framework for java"
---

Log4J is short for  [Apache Logging For Java](https://logging.apache.org/log4j)

If you get this message when starting up a [Sparkjava](/topics/spark_java/) web application, the reason is that
are missing the dependency on Log4J:

```
SLF4J: Failed to load class "org.slf4j.impl.StaticLoggerBinder".
SLF4J: Defaulting to no-operation (NOP) logger implementation
SLF4J: See http://www.slf4j.org/codes.html#StaticLoggerBinder for further details.
```

To fix this, include this in your `pom.xml`:

```xml
 <dependency>
       <groupId>org.slf4j</groupId>
       <artifactId>slf4j-api</artifactId>
       <version>1.7.5</version>
   </dependency>
   <dependency>
       <groupId>org.slf4j</groupId>
       <artifactId>slf4j-log4j12</artifactId>
       <version>1.7.5</version>
  </dependency>       
```

That is only the start.  You'll then get this error message instead:

```
log4j:WARN No appenders could be found for logger (spark.route.Routes).
log4j:WARN Please initialize the log4j system properly.
log4j:WARN See http://logging.apache.org/log4j/1.2/faq.html#noconfig for more info.
```
