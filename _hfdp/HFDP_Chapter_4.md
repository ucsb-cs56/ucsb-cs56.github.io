---
textbook: HFDP
chapter: 4
sort_key: 04
title: "The Factory Pattern: Baking with OO Goodness"
layout: chapter
---

<div style="display:none;"> https://ucsb-cs56-pconrad.github.io/hfdp/HFDP_Chapter_4/ </div>


TODO: Fill in HFDP_Chapter_4.md with notes for Chapter 4 of HFDP.

# Intro: pp.111-113.  What's wrong with `new` and with constructors?

These three pages introduce the chapter by pointing out that when you use `new` and a constructor, you are depending
on a concrete class, rather than an abstraction.  This means your code is now *dependent* on those concrete classes that 
you are instantiating.   This word *dependency* is important.  

One of the cross cutting themes in the whole study of design patterns in software is dealing with problems that arise from dependencies.  When one part of your code depends, strongly, on things that are true about another part of your code, that makes the code harder to change.   If the dependencies can be minimized, and isolated, they are easier to manage.

The phrase *coupling problems* used in this section also refers to this idea.  Informally, we can say that two software components are:

* *tightly coupled* if there are many intricate and complex dependencies between them.   
* loosely coupled* if the dependencies are few, and simple to understand.

As you read, look for more details about this idea, and for more specific and technical ways to describe these concepts of *dependencies*, *coupling problems*, and *tight or loose coupling*.

Another theme we see here is something called the *dependency-inversion princple*, which is the *D* in the *SOLID* principle's proposed by Bob Martin.     The dependency inversion principle states:

> "Depend on abstractions not on concretions"

So, that word *concretions* is a weird word, but it basically means: things that are concrete, rather than abstract.

As an example, if writing an interpreter/parser for arithmetic expressions, where possible, if you can avoid having some part of your code depend specifically on concrete classes such as `IntToken`, `PlusToken`, `MinusToken`, etc., it is better to avoid it.  Instead, have that part of your code depend only on the abstraction `Token`, which is either some `interface` that those concrete `Token` classes all implement, or an ancestor class that they all inherit from (i.e. in Java terminology, one that they `extend`).

As p. 112 points out:

> "You've learned that tying your code to a concrete class can make it more fragile and less flexible".

That's the *D* in the *SOLID* principles, right there.

On p. 113, we also see a reference to the  the *O* in *SOLID*, the Open-Closed principle, i.e. that classes should be "open for extension, and closed for modification", See if you can find that reference to the Open-Closed Principle, and how it relates to the problems that arise from using `new` with the constructors for concrete classes.

# Applying these ideas to a PizzaStore class (p. 114-118)

On pp.114-118, we see these ideas applies to a specific situation, one where we may have a lot of classes for a variety of
kinds of Pizza.  

Again, don't focus so much on whether this is a sensible way to implement software for a Pizza shop&mdash;spoiler alert: it's highly doubtful that this is a good design for that application.  Suspend your disbelief, and realize that this is a textbook example of a principle, and just "go with it".  

The things you should just accept without question are these:

* We are going to need (for some reason, that we'll just assume is valid), a large number of concrete classes for various kinds of Pizzas, i.e. `CheesePizza`, `GreekPizza`, `ClamPizza`, etc. 
* That list of concrete classes is going to change over time.  We'll be adding new ones, and getting rid of old ones.  And we want to minimize the impact of that change on our code base.

In the "There are no dumb questions" section on p. 117, there is an important point about the option of making a factory object, vs. making a static factory method.     Both of these are valid techniques that you may encounter in code, and that you may want to use yourself.  So, be sure to familiarize yourself with this discussion.

# The Simple Factory defined (p. 119)


# Franchising the pizza store&mdash;motivating the Factory Method pattern (pp. 120-132) 

# It’s finally time to meet the Factory Method Pattern (p. 133)

# Another perspective: parallel class hierarchies (pp. 134-135)

# Factory Method Pattern defined (p. 136-138)

# A very dependent PizzaStore (exercise, p. 139)

# Looking at object dependencies (p. 140)

This page really belongs with the one that follows&mdash;it is the motivation for the *Dependency Inversion Principle".

# The Dependency Inversion Principle (pp. 141-145)

# Meanwhile, back at the PizzaStore... (pp. 146-155)

# More pizza for Ethan and Joel... (motivating Abstract Factory pattern) (pp. 156-157)

# Abstract Factory Pattern defined (p. 158)

# Factory Method and Abstract Factory compared (p. 160-163)

Though the heading here appears on p. 162, the discussion starts on p. 160, so its best to read these pages as a group.

# Tools for your Design Toolbox (Summary, p. 164)

# Exercises (pp. 165-170)


<div style="display:none;"> https://ucsb-cs56-pconrad.github.io/hfdp/HFDP_Chapter_4/ </div>
