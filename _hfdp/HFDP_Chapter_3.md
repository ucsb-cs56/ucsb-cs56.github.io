---
textbook: HFDP
chapter: 3
sort_key: 03
title: "The Decorator Pattern: Decorating Objects"
layout: chapter
---

<div style="display:none;"> https://ucsb-cs56-pconrad.github.io/hfdp/HFDP_Chapter_3/ </div>


TODO: Fill in HFDP_Chapter_3.md with notes for Chapter 3 of HFDP.


# 3. The Decorator Pattern: Decorating Objects

# Intro p. 83-87 (Welcome to Starbuzz Coffee)

This material lays the foundation for understanding the chapter's presentation of the Decorator pattern.  The Decorator pattern has a funny name, and the idea of classes for different kinds of coffee is, like many of the examples in this chapter, a silly one.   However, it turns out that the Decorator pattern is one that comes up a lot in real world software.    

I encountered it frequently in a real-world Ruby-on-Rails app when we wanted to add different ways of "viewing" an object's properties.  As an example, consider a car object that has a fuel economy rating to present its fuel economy in either miles-per-gallon, or liters-per-100Km, which is the way that fuel economy is presented in some countries that use the metric system.

Rather than modifying the class, we can "decorate" the object by wrapping it, and putting on it the extra method that we need.   This keeps a method that may be very "special purpose" out of the main code for the class, and keeps the main class nice and small and compact.

[Sandi Metz](http://www.sandimetz.com/), a well-known author and speaker on Object-Oriented Programming, advocates for lots of smaller classes, rather than a small number of very large classes.   She notes that smaller classes with shorter methods are easier to understand, and that a programmer typically doesn't need to understand *everything* about an application in order to make a change.   Small classes and small methods help the programmer to focus on only the relevant details.

# The Open-Closed Principle


The Open-Closed Principle is sort of a big deal in Object-Oriented programming, and in Software Engineering.  It's worth taking the time to try to understand it, so that you can impress job interviewers with your knowledge, and even more importantly, so that you can build better software.

The Open Closed Principle was:

* identified by Bertrand Meyer in his 1988 book [Object Oriented Software Construction](https://en.wikipedia.org/wiki/Object-Oriented_Software_Construction)
* identified by Robert C. Martin as as one of the five "SOLID" principles identified by Bob Martin (it's the letter "O" in "SOLID").

Those details aren't important ones to memorize&mdash;I'm including them so that you understand that this principle has been around a long time.   Yet, regrettably, lots of software is still written without taking it into account.

This short article may help to shed some light on the Open-Closed principle from another perspective. (Note: the code in the article linked to here isn't Java code, but whatever language it is has syntax close enough to Java that you'll get the idea.)

* <http://joelabrahamsson.com/a-simple-example-of-the-openclosed-principle/>




# Meet the Decorator Pattern

# Constructing a drink order with Decorators

# The Decorator Pattern defined

# Decorating our Beverages

# Cubicle Conversation

# New barista training

# Writing the Starbuzz code

# Coding beverages

# Coding condiments

# Serving some coffees

# Real World Decorators: Java I/O

# Decorating the java.io classes

# Writing your own Java I/O Decorator

# Test out your new Java I/O Decorator

# Tools for your Design Toolbox


<div style="display:none;"> https://ucsb-cs56-pconrad.github.io/hfdp/HFDP_Chapter_3/ </div>
