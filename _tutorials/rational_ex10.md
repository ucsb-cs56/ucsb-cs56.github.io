---
topic: "Rational: ex10"
desc: "packages: edu.ucsb.cs56.pconrad.rational"
indent: true
code_repo: https://github.com/UCSB-CS56-pconrad/cs56-rational-ex10
p587: 17dot-package-jars-and-deployment-release-your-code/587
---


{% include rational_example_header.html %}



# Packages

Packages help prevent naming conflicts, and are an essential part of working with "real world" Java code.

# How to put your code in a package


1. Come up with a name for your package.  
2. Put the package name at the top of every file
3. Change the directory structure to match the package
4. Adjust the build.xml file if needed.

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

We would then need to move our source fies into the package, e.g. with `mv`, or better yet `git mv` if we are working in a
git repository:

```
git mv src/*.java src/edu/ucsb/cs56/pconrad/rational
```

After this, we'd do the commands to commit this change (though probably not until after the changes to the build.xml and testing our code.)

```
git status
git commit -m "put code into a package"
git push origin master
```

# 4. Adjust our build.xml

There are several adjustments to the build.xml.  This commit shows each of them:

<https://github.com/UCSB-CS56-pconrad/cs56-rational-ex10/commit/a75a2f0951463e1f17c22e6cc246f2aa90e77925>

Let's discuss each in turn:


## Adjustments to the `clean` target:

We changed:

```xml
  <target name="clean" description="clean up the project">
    <delete>
      <fileset dir="build" includes="*.class"/>
      <fileset dir="build" includes="*.jar"/>	
    </delete>
  </target>
```

to:

```xml
 <target name="clean" description="clean up the project">
    <delete>
      <fileset dir="build" includes="**/*.class"/>
      <fileset dir="build" includes="**/*.jar"/>	
    </delete>
    <delete dir="build" />
  </target>
```

The changes are: 
1.  Using the syntax `**/*.class` and `**.jar` to make sure we delete the entire hierarchy of class and jar files from the whole directory tree.
2.  Adding a line ` <delete dir="build" />` to get rid of the build directory altogether.

## Changes to the `jar` target

We changed the `jar` target from this:


```xml
 <target name="jar" depends="compile" description="create a jar file">
    <jar destfile="build/rational.jar">
      <fileset dir="build" includes="*.class"/>
      <manifest>
	<attribute name="Main-Class" value="Rational"/>
      </manifest>
    </jar>
  </target>
```

to this:

```xml
 <target name="jar" depends="compile" description="create a jar file">
    <jar destfile="build/rational.jar">
      <fileset dir="build" includes="**/*.class"/>
      <manifest>
	<attribute name="Main-Class" value="edu.ucsb.cs56.pconrad.rational.Rational"/>
      </manifest>
    </jar>
  </target>
```

The changes are:

1.   We used the `**/*.class` syntax to refer to all the classes in the entire directory tree.
2.   We used the full name of the class `edu.ucsb.cs56.pconrad.rational.Rational` in the `Main-Class` attribute of the manifest, so that when we run the jar with `java -jar build/rational.jar`, it runs the correct main.

## Changes to the `test` target and `javadoc` targets

Here, the changes are simple:

1. In the `test` target, we changed `*Test.java` to `**/*Test.java` in the place where we specify which source files to look for tests in.
1. In the `javadoc` target, we changed `*.java` to `**/*.java` in the place where we specify which source files to generate our javadoc from.

With those changes, our move to packages is complete.

# Dealing with the inconvenience of these directory structures

Working with a java project that uses packages can be annoying if you are constantly cd'ing between the top level directory (where you run the `ant compile` and `ant test` commands) and the directory where you edit.   

There are several strategies to make this less annoying:

1.   If you are using an old school editor such as vim or emacs in a single window:

    *    The [$T / $B](/topics/t_and_b_env_vars/) trick works nicely.  (Follow the link for instructions.)
    *    Or, just type the full filenames once (using tab completion), and then use the up arrow to recall those commands.
         That is, instead of typing:
         ```
         cd src/edu/ucsb/cs56/pconrad/rational
         emacs Rational.java
         cd ../../../../../..
         ant test
         ```
    
         You would type:
         ```
         emacs src/edu/ucsb/cs56/pconrad/rational/Rational.java
         ant test
         ```
         
2.   Or, keep two terminal windows open.  In one, cd into the directory where your source code is.  In the other, stay in the directory where the build.xml file is.    Edit in the first window, and run ant in the second window.

3.  Use editor features, editors, or IDEs that handles directory trees nicely:
    * vim has [add-ons for directory trees](http://vim.wikia.com/wiki/Use_Vim_like_an_IDE)
    * emacs has something called [dired mode](http://ergoemacs.org/emacs/file_management.html)
    * [Sublime Text](https://www.sublimetext.com/) handles directory trees nicely out of the box.
    * And there are also IDEs just as JBuilder if you are ready to take that plunge.

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

