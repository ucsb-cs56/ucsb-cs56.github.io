---
topic: Windows
desc: "Setting up an environment to do CS56 work on your own Windows machine (not ssh'ing into CSIL)"
---

For certain kinds of programs, i.e. graphics, and especially sound, 
it may be more convenient to work directly on your Window machine rather than 
ssh'ing into CSIL.

For audio or sound programs, this is especially true.

What do you need to install on your Windows to be able to do this?

# Install git for Windows

* Download link: <https://git-scm.com/download/win>

(Note: I recommend git for windows, not "github for windows".  "git for windows" provides the "Git Bash Shell" as well as the command line git tools that we use in CMPSC 56.)

# Install the JDK for Java 11

As of W20, we do not have current "tested" instructions for installing the Java 11 JDK on Windows. As/when that changes, we'll update this page.

We strongly encourage you not to install a later version than Java 11.  Java 11 is a "long-term support" version of Java, while versions such as 12, 13, etc. are considered more experimental.

# Install Apache Ant

As of W20, we do not have current "tested" instructions for installing Apache Ant on Windows. As/when that changes, we'll update this page.

# Install Apache Maven

As of W20, we do not have current "tested" instructions for installing Apache Maven on Windows. As/when that changes, we'll update this page.

# Windows Subsytem Linux (WSL)
Windows 10 comes with a new thing called Windows Subsystem Linux (WSL) which is a sorta Linux VM inside of windows. 

* To get started follow this guide by Microsoft: https://docs.microsoft.com/en-us/windows/wsl/install-win10

* To install the Java JDK <br />
`sudo apt-get update` <br />
`sudo apt-get install default-jdk` <br />
 To verify Java JDK has been installed <br />
 `java -version`

* To install Ant <br />
`sudo apt install ant` <br />
To check  <br />
`ant -version`

* To install Maven<br />
`sudo apt install maven`<br />
To check <br />
`mvn -version`

