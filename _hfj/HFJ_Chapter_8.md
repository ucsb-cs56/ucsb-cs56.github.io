---
title: Head First Java, 2nd Edition
chapter: 8
sort_key: "08"
textbook: HFJ
desc:  "Interfaces and Abstract Classes: Serious Polymorphism"
---


# Chapter 8: Interfaces and Abstract Classes: Serious Polymorphism =



## The big picture (p. 198 )

One of the most important features of how OOP works in Java&mash;a feature that distinguishes it from C++&mdash;is the feature called <em>interfaces</em>.    

Chapter 8 is where we learn about <b>implementing an interface</b> in Java.

This is NOT a use of the word "interface" as in "graphical user interface" or "user interface", or even "application programming interface".  It's a very Java-specific, narrow, technical definition of a particular language feature of Java.

It is a feature, though, that is so important, that sometimes when we talk about language features and programming practices in Python, JavaScript or Ruby, programmers sometimes make reference to the <b>interface</b> feature of Java.  

For example, when describing "duck typing", a practice sometimes used in Python, JavaScript and Ruby, they might say, "Oh, I get it.  Duck typing is like an interface in Java, except that... blah blah blah".    So, even if you never program in Java again after this quarter&mdash;unlikely, but possible&mdash;it is still important enough a feature that it it worth learning and mastering as a "point of reference" for understanding other programming languages.

When you see how "interfaces" work in Java, and really understand them, you'll see how they were an improvement over C++.   They can be seen as a "solution" to problems that arose with "multiple inheritance" in C++: the benefits of multiple inheritance, without the drawbacks. (Note that C++ <em>has</em> multiple inheritance, but Java does <em>not.</em>)

Exam Question: Explain the difference between extending a class and implementing an interface.   Use a specific Java code example in your explanation.

To get you started, here are three facts to memorize.   If you memorize these facts, you'll have a good start.  It might even be enough to get a D on the exam.  To get an A or B, though, you'll need to thoroughly understand what the facts mean, and how to use them: 

* When we write that <code>class Foo implements Bar</code>, we know that <code>Foo</code> is a class, and <code>Bar</code> is an interface.
* An interface such as <code>Bar</code> has <em>only method signatures</em> (i.e. what in C/C++ we call function prototypes) NOT method implementations.
* <code>class Foo implements Bar</code> can be read as "Foo has the <em>obligation</em> to implement <em>each and every method</em> of interface Bar.

As an invitation, you might try this: memorize these "facts" by just repeating them out loud, even if you don't yet understand what they mean.  Then as you read the Chapter, as the meaning begins to be revealed, repeat the facts over again, and let your understanding get deeper each time.

Interfaces are not enough though.  We also have <b>abstract classes</b> to consider.  These are a feature that <em>is</em> present in C++, and in many other languages that have inheritance-based OOP as well.  Some other languages, such as Ruby, [specifcally omit them](http://yakhairsurplus.com/abstract-classes-ruby-losing-security-blanket/).     Whether they are a good thing, or a bad thing, clearly they are a thing that you need to know about.       

So another major learning goal for this chapter is to <b>understand the difference between an interface an an abstract class</b>.

Potential Exam Question:

> Explain the difference between an interface and an abstract class.   In your explanation, indicate:
> * At least one thing they have in common.
> * At least one difference between them&mdash;a substantive difference, not a superficial one.  
>  * Superficial means "trivial or unimportant".  
>  * An example of a superficial difference would be "for interfaces you use the keyword <code>implements</code>, but for abstract classes, you use the keyword <code>extends</code>."  
>  * While that's true, it only shows that you memorized a bit of syntax&mdash;it doesn't show that you understand the concept with any intellectual depth.  For full credit, I'm looking for something more meaningful.





