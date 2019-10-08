---
title: Head First Java, 2nd Edition
chapter: 3
sort_key: "03"
textbook: HFJ
desc: "Know Your Variables"
---

p. 49
-----

A good deal of what you already know from C/C++ programming will carry over directly into Java.

But one **new** thing that you **must understand** to be an effective
Java programer is the difference between **primitive vs. reference
variables**.

This chapter also talks about Java memory management, which is one of
the specific learning objectives in the official USCB course
description for CMPSC56, so it is one of the things that I **must put
on the exams** in this course in order to make the University
happy. And since they pay my salary, and these are times of budget
cuts, I definitely want to keep them happy. So if you want a good
grade in this course, you would be well advised to find and read all
the places in this chapter that the authors talk about
"garbage-collection" and "the heap".

p. 50
-----

As you progress in Computer Science, you'll learn more about the
nature of programming languages. In the upper division of the UCSB BS
CS degree, there are two courses: CMPSC160 and CMPSC162 that cover how
to write a compiler/interpreter and how to design a programming
language. One of the things we want to do in CMPSC56 is start to plant
the seeds that will blossom into full understanding in these later
courses.

So, we'll talk about some things in this course that may seem
obvious—like the idea that a variable has a **name** and a
**type**. Why is this important, when it's so bleeping obvious?
Because, as it turns out, "name" and "type" are just the first two
things on a much longer list of "stuff a variable has".

So, I love that this page is highlighting that variables have a
**name** and a **type**—because this lays the foundation for a much
longer list of things that a variable has (e.g. scope, lifetime, size,
address, storage class, just to name a few). The book also highlights
the important concept of **type-safety**, which is something we'll
come to appreciate about Java.

If you really want to learn this stuff deeply, do your own hunting
around on the web and see if you can find some explanations of these
other aspects of variables, and perhaps even some that I left out,
along with explanations of each.  

Post some of these to Piazza.   I'm not promising any extra-credit.
But stuff like this helps you stand out from the crowd when it comes time
for you to ask your professor to be a reference for that job interview.
And, these are the kinds of questions that you get asked in job interviews.
It's good to practice now.

Also see if you can find an explanation of *type-safety*
and include a similar explanation of that as well.

As you get into how to write the source code for a
compiler/interpreter for a given language, you have to begin to think
about all of those aspects of variables explicitly, where before you
may have taken them for granted.

And, as you get into the more fundamental science of designing new
programming languages, this becomes even more important.

The fact that the authors make reference to these important principles
of Computer Science is part of why I say that the Head First books are
not "for dummies" books, but rather "for very intelligent people that
want to learn deeply" books.

This section also mentions primitive vs. object references again—so I
hope you getting the message that this is a big deal.

p. 51
-----

We see here the eight primitive types. I'm not a bit one for
memorizing things (because you usually just forget them later), but
there is short list of things worth memorizing if you are going to be
working in Java, and that list includes the **eight primitive types**.

This page illustrates them very nicely, grouping them into three easy
groups for convenience. (Note: four integer types, two floating point
types, and two non-numeric types.)

(As an aside, for any programming language X, where X could be Java,
JavaScript, Python, or any number of other languages that distinguish
between primitive types and objects—memorizing the list of primitive
types is a good thing to do when first learning the language).

One other detail buried on this page is "how do you make a float
literal, as opposed to a double literal?". See if you can find
that. Maybe I should make that a homework question.

Write the following declarations/assignments. Be sure to pay attention
to the types of the literals on the right hand side.

-   If I write 3.4, is that of type double, or float?
-   Declare x as a double and assign it the value 3.4 (as a double)
-   Declare y as a float and assign it the value 3.4 (as a float)

p. 52
-----

Continuing from p. 51, here's more of the stuff you have to think
about when designing or learning a new programming language—what
happens when you write an assignment statement, and the right and left
sides have different types?

Something like the "Sharpen Your Pencil" exercise on p. 52 would make
a good exam question. Keep in mind that all of these would appear in a
single method, one right after the other.

p. 53
-----

Most programming languages have reserved words. It is interesting that
Java has const and goto as reserved words even though they have no
meaning in Java.

Its also interesting that variables in Java can start with the $, and
the $ can be a symbol inside a variable as well.

p. 54
-----

This page gets to the question "what is a reference"?

Another way to think of a reference is as a pointer, but one that you:

-   Can't print the literal value of
-   Can't do math on
-   You can only dereference it.

And the way you dereference it is just to use the dot operator.

In C/C++, we have an explicit dereference operator ('*'). The dot operator is used for fields in a struct, data members of an object, or member functions of an object (instance of a class). And, if you need to use the '*' and the '.'
together, we use the `->` operator.

But in Java, the ONLY thing you can do with a reference is dereference it, so there IS not dereference operator—the deference is always implied every time you use the reference variable. So to access things inside an object (instance variables, or member functions, which we call methods in Java), we always use the dot operator (.).

That's why you'll never see a (`*`) used as a dereference operator in
Java, and you'll never see `->` used as an operator either.

This page also talks about the heap, and the fact that ALL OBJECTS
LIVE ON THE HEAP. The reference variables that point to the objects
might live on the stack, but the objects themselves always live on the
heap.

This page also establishes an important distinction between what is
stored inside a primitive variable and what is stored inside an object
reference—and that makes a good exam question:

A variable representing a primitive type (e.g. boolean x; or int y;)
and a variable containing an object reference (String w; Student z;)
have this in common—they are both composed of bits in memory.

But they differ in what the bits represent:

-   What do the bits that represent int y; represent?
-   What do the bits that represent String w; represent?

p.55
----

There's a lot of great stuff on this page. Read it all.

And, there are two things I want to particularly highlight on this page:

(1) The three parts of `Dog myDog = new Dog();`

Make sure you understand what each part of that means.

(2) The footnote at the bottom of the first column, which contains a joke about "the phase of the moon". Clearly, the authors are making a funny here---the number of bits in a reference variables has nothing to do with the phase of the moon. What is the larger point that the authors are trying to make with this joke? (The rest of the text on pages 54--55, and the "there are no dumb questions" section on p. 56 may help you figure this out if the point is still lost on you.)

p. 56
-----

Make sure you read the 'There are no dumb questions' part of this page—it makes an important point about memory management in Java.

-   Does the amount of memory taken up by an 
    object reference differ for different kinds of objects (say `String` vs. `ArrayList<String>`?)
-   Does the amount of memory taken up by the object itself differ for different kinds of objects?
-   Can the amount of memory taking up for an object reference for a object particular type (say `String`) differ from one JVM to another?

Also read the interview with the object reference. Although this is
corny, it introduces the idea of "final" and the idea of "null", which
are both important concepts dealing with object references.

p. 57-58
--------

These pages should be read together. See if you can understand how the
one object ends up as "eligible for garbage collection".

TODO: Come up with a question where a bunch of objects are constructed
and when all is said and done, you ask "which one will be eligible now
for garbage collection?

p. 59
-----

A key idea here is that an array is always an object, even if it is an
array of primitives.

p. 60
-----

A key idea here is that when you have an array of object references,
creating the array and creating the objects that the elements of the
array point to are two separate steps.

There is more on this topic in the [reading notes for Chapter 4](/hfj/HFJ_Chapter_4)
