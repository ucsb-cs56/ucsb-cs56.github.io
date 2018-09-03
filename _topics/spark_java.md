---
topic: "SparkJava: "
desc: "A micro framework for creating web applications in Java 8 with minimal effort"
category_prefix: "SparkJava: "
---

Spark is, according to its website (quote retrieved on 6/20/2016):

> A micro framework for creating web applications in Java 8 with minimal effort

You can read more about SparkJava at:

* the [SparkJava pages on this site](/topics/spark-java/)
* [SparkJava's own website](http://sparkjava.com/)


# SparkJava != Apache Spark

Spark is sometimes called SparkJava to differentiate it from the [popular cluster computing platform called Apache Spark](https://spark.apache.org/docs/1.1.0/index.html), with which it has nothing in common except the name "Spark".


* [Apache Spark](https://spark.apache.org/docs/0.9.1/java-programming-guide.html) is a "fast and general-purpose cluster computing system" with libraries, for, among  other things, machine learning. 
* Apache Spark is much more widely known and used then SparkJava, but it is a whole other, unrelated subject.  



# References

* Main web page for SparkJava: <http://sparkjava.com/>
* Tutorials: <http://sparkjava.com/tutorials/>
* A complete application in SparkJava: <http://sparkjava.com/tutorials/application-structure>
* SparkJava API Documentation: <http://sparkjava.com/documentation.html>
* javadoc (unofficial, see note below) <https://ucsb-cs56-pconrad.github.io/spark/target/site/apidocs/index.html>
* github repo: <https://github.com/perwendel/spark>
* StackOverflow questions tagged with `spark-java`: <https://stackoverflow.com/questions/tagged/spark-java>

# Tutorials:

* <https://www.baeldung.com/spark-framework-rest-api>

# Note on the "unofficial" javadoc link above

Annoyingly, the Spark Java project doesn't maintain up-to-date javadoc online.  Instead, they invite the user to 
* fork their repo
* run `mvn javadoc:javadoc`
* view the generated javadoc in  `/target/site/apidocs`

To save you (and me) the trouble the next time we just want to look something up, I forked the repo <https://github.com/perwendel/spark> to <https://github.com/UCSB-CS56-pconrad/spark> on 06/20/2016, ran `mvn javadoc:javadoc`, updated
the .gitignore to not ignore /target/site/apidocs, and then commited the result to a gh-pages branch.  So now, you can
see the generated javadoc here:

<https://ucsb-cs56-pconrad.github.io/spark/target/site/apidocs/index.html>


# Reviews of SparkJava and comparisons with other frameworks

* [This article](http://www.javaworld.com/article/2995526/development-tools/jump-into-java-micro-frameworks-part-1.html) compares three Java microframeworks for webapps: Spark, Ninja, and Play. 

# Getting Started with SparkJava locally

The standard [tutorial for getting started with SparkJava](http://sparkjava.com/documentation.html#getting-started) assumes familiarity with a few things that you may not already
know about, including these:

* Maven details such as:
   * pom.xml files
   * dependencies
* Java Lambda Functions
* Web application development concepts, including:
    * routes
    * sessions
    * request/response objects
    * forms

So, I've created my own tutorial that starts from first principles and tries to explain these things along the way.

That tutorial can be found here: [SparkJava: Getting Started](/topics/spark_java_getting_started/)

# Getting Started with SparkJava on Heroku

The following repos are fairly minimal working webapps that run successfully on Heroku.

* <https://github.com/pconrad-webapps/sparkjava-mustache-minimal-demo>
* <https://github.com/pconrad-webapps/sparkjava-example>

The key elements that you need are:

* A `pom.xml` file that creates a jar file that bundles all dependencies (a so-called uberjar)
* A `Procfile` with the single line `web: java -jar target/name-of-your-app-here.jar` 
    (note that you will have to put in the correct value for `name-of-your-app-here`.)
* Some code to set the port number from the PORT environment variable.  
    * Here's a minimalist one-liner approach.  This may crash if PORT is not defined.
        ```java
        Spark.port(Integer.valueOf(System.getenv("PORT"))); // needed for Heroku
        ```
    * A more robust approach:
        ```java
        try {
	        Spark.port(Integer.valueOf(System.getenv("PORT"))); // needed for Heroku
	      } catch (Exception e) {
	          System.err.println("NOTICE: using default port.  Define PORT env variable to override");
	      }
        ```
 

# Why SparkJava, and not Servlets, JSP, Spring, etc.?

Java was the language of choice for some of the earliest enterprise level web applications.  The Java Servlet API, combined with Java Server Pages, was the basis of many large-scale web applications that are still in use today.

Writing web applications using Java Servlets can be a tedious undertaking with a steep learning curve.
The *very first* book in the O'Reilly *Head First* series was a book on this topic, with the unwieldy full title:

> Head First Servlets and JSP: Passing the Sun Certified Web Component Developer Exam

That book is now in its [2nd edition](http://shop.oreilly.com/product/9780596516680.do)

Various frameworks arose to try to simplify the process, including the popular [Spring](https://projects.spring.io/spring-framework/) framework
for *dependency injection*.

All of these frameworks, however, have a steep learning curve.  To get even the simplest application running, i.e. a "Hello World" that simply prints "Hello World" on the root page of the application, requires an elaborate set up of several files, including an XML deployment descriptor, a specific set of directories, configuring a *servlet container*, etc.

With SparkJava, by contrast, with a single source code file (and a proper Maven environment to download the dependencies), you are off and running.     The servlet container is built in to the framework, so there is no separate configuration.

# More Advanced SparkJava Tutorials

* SparkJava + AngularJS + MongoDB: [https://blog.openshift.com/developing-single-page-web-applications-using-java-8-spark-mongodb-and-angularjs/](https://blog.openshift.com/developing-single-page-web-applications-using-java-8-spark-mongodb-and-angularjs/)
