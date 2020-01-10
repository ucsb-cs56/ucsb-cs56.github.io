---
topic: "MacOS"
desc: "Setting up an environment to do CS56 work on your own Mac (not ssh'ing into CSIL)"
category_prefix: "MacOS: "
---

For certain kinds of programs, i.e. graphics, and especially sound, 
it may be more convenient to work directly on your Mac rather than 
ssh'ing into CSIL.

For audio or sound programs, this is especially true.

What do you need to install on your Mac to be able to do this?

* The JDK
* `ant` and/or `mvn` (Maven)

Instructions follow below.   Note that installing [MacOS: Homebrew](/topics/macos_homebrew/) may make some of this easier.

# Install the JDK

To see whether you already have the JDK installed, do this in a terminal window:

```
169-231-88-206:~ pconrad$ javac -version
javac 1.8.0_31
169-231-88-206:~ pconrad$ 
```
If you see some version of Java 1.8.something... then you are good to go.

If not, download and install a version for Mac OS from here:

<http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html>

# Installing OpenJDK 11 on Mac

This article tells you how to deal with having multiple versions of Java on your Mac, and what to do with the "tarball" file that you might find when you download OpenJDK 11 for Mac, since there are no obvious installation instructions.  Unfortunately, the link to the tarball takes you to a page where the distribution is NO LONGER AVAILABLE.  More on that below.
* <https://dzone.com/articles/installing-openjdk-11-on-macos>

So if the link in that article does not have OpenJDK 11 for Mac, who does?

This worked for me.  Note that it requires [brew](https://ucsb-cs56.github.io/topics/macos_homewbrew/), a package manager for MacOS.
* <https://installvirtual.com/install-openjdk-11-mac-using-brew/>

Here's the short version:

```
brew update
brew tap AdoptOpenJDK/openjdk
brew cask install adoptopenjdk11
```

To check if you now have Java 11, open a new Terminal window and do:

```
java -version
```

If it worked, you should see something like this:

```
# java -version
openjdk version "11.0.2" 2019-01-15
OpenJDK Runtime Environment AdoptOpenJDK (build 11.0.2+9)
OpenJDK 64-Bit Server VM AdoptOpenJDK (build 11.0.2+9, mixed mode)
```

Note: after installing Java 11, you may want to do:

```
brew upgrade maven
```

And then do:

```
mvn --version
```

To make sure that Maven is using Java 11 and not still using Java 8 or earlier.

# Install Apache Ant

Next, see if you have Apache Ant installed:

```
169-231-88-206:~ pconrad$ ant -version
Apache Ant(TM) version 1.9.7 compiled on April 9 2016
169-231-88-206:~ pconrad$
```

If instead, you get `command not found`, then install Apache Ant in one of the following ways:

* `brew install ant`
   * This requires Homebrew, which is described here: [/topics/homebrew](/topics/homebrew)
* These instructions: <https://www.mkyong.com/ant/how-to-apache-ant-on-mac-os-x/>
   * A student in W20 reported that these didn't work well, and that `brew install ant` worked better.

