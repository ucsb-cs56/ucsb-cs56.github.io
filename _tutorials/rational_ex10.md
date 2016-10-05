---
topic: "Rational: ex10"
desc: "packages: edu.ucsb.cs56.pconrad.rational"
indent: true
code_repo: https://github.com/UCSB-CS56-pconrad/cs56-rational-ex10
p587: 17dot-package-jars-and-deployment-release-your-code/587
---

# Packages

Packages help prevent naming conflicts, and are an essential part of working with "real world" Java code.

# How to put your code in a package


1. Come up with a name for your package.  
    * A package name is a series of legal java identifiers, separated by dots.
    * Example: edu.ucsb.cs56.pconrad.rational
    * The idea is to ensure that your package name is unique
    * If you have your own domain name, you could use org.mydomainname.mypackage
    * In this course, you'll typically be told in the instructions for the assignment what package name to use.
2.  

# 1. Come up with a name for your package

* A package name is a series of legal java identifiers, separated by dots.
* Example: edu.ucsb.cs56.pconrad.rational
* The idea is to ensure that your package name is unique
* If you have your own domain name, you could use org.mydomainname.mypackage
* In this course, you'll typically be told in the instructions for the assignment what package name to use.

# 2. Put the package name at the top of every source file in your package.

If your package name is `edu.ucsb.cs56.pconrad.rational`, the first line (before any javadoc comments, and before any `import` statements), should be:

```java
package edu.ucsb.cs56.pconrad.rational;
```

# 3. Make the directory structure match the package.

This is the most annoying part of working with packages.  Instead of just having all of your `.java` source files under a `src` directory, and your `.class` files under a `build` directory, you have to have a directory hierarchy that matches the package name, e.g.

```
mkdir -p src/edu/ucsb/cs56/pconrad/rational
```

Here, the -p indicates that you are creating an entire directory path all at once.

# Dealing with the inconvenience of these directory structures

Working with a java project that uses packages can be annoying if you are constantly cd'ing between the top level directory (where you run the `ant compile` and `ant test` commands) and the directory where you edit.   

There are several strategies to make this less annoying:

1.  If you are using an old school editor such as vim or emacs in a single window: the [$T / $B]() trick works nicely.  (Follow the link for instructions.)


# Reading about Packages in the textbook

You can read about packages in HFJ, starting on p. 587 through p. 591. 

Here are links to look at that material:

* p. 587 in Chapter 17 of Head First Java, 2nd Edition
  [on-campus]({{site.on_campus}}/{{site.hfj_url}}/{{page.p587}})
  [off-campus]({{site.off_campus}}/{{site.hfj_url}}/{{page.p587}})	

Note:
* It may be better to start at the beginning of Chapter 17, on p. 581.  
* Don't worry that we are skipping so far ahead; for the most part, if you've already read Chapters 1-4, you will understand
    pretty much everything you encounter in Chapter 17.

