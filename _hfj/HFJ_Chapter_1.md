---
title: Head First Java, 2nd Edition
chapter: 1
sort_key: "01"
textbook: HFJ
layout: chapter
desc: "Breaking The Surface"
---


The big picture
---------------

If you are brand new to Java, this Chapter is here to give you a
really quick introduction to what Java looks like, and how it works.

If you have worked with Java before, this Chapter is mainly just to
remind you of some things--but its still worth reading through just to
dust off the cobwebs of your knowledge.  Who knows, there might be
something that is new, or presented in a new light.

Chapter 1, page-by-page
-----------------------

### page 1

take-away: Java used to be slow, but its a lot faster today. Also
"write-once/run-anywhere" is a major Java mantra.

### pages 2-3

By the time you get to CS56, you should know what "source code" and a "compiler" are--but with Java there are a couple of new things in the picture. Those are:

-   bytecodes, which is what we have instead of machine language instructions
-   the Java Virtual Machine, or (JVM) for short.

These two pages introduces how those all fit together--you'll need to know that for the first midterm exam.

They also introduce the `javac` and `java` commands, and help you see the role of each--also something you'll need to know, not just for the first exam, but for the first lab assignment.

### page 4

This traces the development of Java through Java 1.5. You can figure out what version of Java you are running on any given system by typing these commands (this example comes from CSIL):

```
-bash-4.3$ java -version
openjdk version "1.8.0_91"
OpenJDK Runtime Environment (build 1.8.0_91-b14)
OpenJDK 64-Bit Server VM (build 25.91-b14, mixed mode)
-bash-4.3$ 
```

As you can see, we are running version 1.8 on CSIL.    There have been quite a few changes in Java from 1.5 to 1.8.  One of the most important changes
introduced in 1.8 was a feature called "lambda functions" that makes many common Java software patterns for Object Oriented programming much easier to write ith far less syntax.

The second textbook for this course, [Head First Design Patterns](/textbooks/HFDP/) has some examples of how to use Lambda functions.  We'll also discuss those in lecture, and practice with them in some labs.

### pages 5-6

Pages and provide an exercise that it is really worth doing with your pencil---not just in your head. Yes, the answer are there on the next page, so there is a temptation to just skip it. But that's not what the Head First approach is all about. 

### page 7

classes, methods, statements—I'm going to assume you already got this
from CS24 and CS32. This isn't that different from C++, except perhaps
for the fact that in Java there is a strict rule of one public class per
file (at least, that's the intention.)

When we get to ActionListeners, we'll see that there
can be something called inner classes:  "classes inside other classes", but there is still just one top level public class per file. 

Also, it turns out the real situation is a bit messier: see this [Stack Overflow Discussion](http://stackoverflow.com/questions/2336692/java-multiple-class-declarations-in-one-file).    But, at least for now, its best to stick to one class per file.

### page 8

This page shows what all that stuff on the standard Hello World
program is actually doing. Its worth taking a moment to get familiar
with each part of this---and to come back after a few chapters and
revisit this, when you know even more about Java.

### page 9

This page shows that everything always start in the main(). Later,
when we talk about servlets, which run under the control of a "web
container", we'll revisit this idea that "everything always starts in
the main".

### page 10

Ok, so page is just basic review of what programming is. I'm assuming
you have this down from CS8 and CS16.

But its worth looking at the details to pick up a few things about
basic Java syntax.

### page 11

This page gives a quick overview of loops and if/else in Java--and
that should be just about all you need. They work pretty much just
like in C/C++.

### page 12

The main content here is again nothing too surprising, but the Q and A
on this page is worth taking a little time with.

In particular, it is good to know about the way that in Java, unlike
C/C++, you CANNOT just treat ints as if they were booleans. Good to
know!

Will the following code print foo forever? Or is it a syntax error? Explain. (Assume it appears inside a main function)

    int x = 1;
    while (x) { 
      System.out.println("foo");
    } 

### page 13-14

Page 13 is still more just basic stuff about if tests---should be no big deal--and p. 14 shows an app for 99 Bottles of Beer on the Wall.

For practice, you might try copying pasting the code and running it to see if you can find the problem they talk about and how to fix it.

### page 15-17

These pages are just sort of silly, but they do show us a few solid points:

-   How to generate random numbers
-   How to find the length of an array
-   A hint at where we might find things like sin and cosine (google "Java Math" and look for the [Javadoc for the Math class](http://download.oracle.com/javase/6/docs/api/java/lang/Math.html))

### page 18-19

These pages are a silly dialog between the JVM and the Compiler. As you read see what you can pick up about how these two interact, and role each one plays.

### page 20-26

This set of pages has some exercises. Some of these are probably a little too easy to be a good use of your time, so unless you are feeling like your coding skills are sort of weak, you can probably safely skip most of these. There are later code magnet exercises that are a bit more challenging and useful.

A exception: I think page 21 is worth doing---and they suggest that p. 24 is "harder than it looks". I haven't tried it, so I don't know. Let me know on the "discussion page" what you think.

Once upon a time, I had some JavaScript code (separate language from Java entirely!) to make webpages for code magnets. Maybe I'll dust that off and offer choice points to folks who can use it to implement the code magnet exercises from the book.

