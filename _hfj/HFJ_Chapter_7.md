---
title: Head First Java, 2nd Edition
chapter: 7
sort_key: "07"
textbook: HFJ
desc:  "Inheritance and Polymorphism: Better Living in Objectville"
---


# Chapter 7: Inheritance and Polymorphism: Better Living in Objectville


# The big picture (p. 165 )

This chapter covers inheritance and polymorphism, including all of the following and more:

* what inheritance is <em>for</em>, i.e. what are the benefits
* how polymorphism works when doing assignments and referencing methods
* IS-A vs. HAS-A
* overriding vs overloading
** overriding: keeping the contract, related to inheritance
** overloading: two methods with same name, unrelated to inheritance


# page 166-167

These pages continue the "Chair Wars" story from previous chapters.    We see how inheritance and polymorphism work together to reduce or eliminate duplicated code.

# page 168 

<b>Understanding Inheritance</b>: This is an important page to read and understand.

# page 169 

An exercise with an inheritance example.


Be prepared to do a similar exercise to the one on page 169 on your next exam.

NOTE: The question is asking about the methods that are directly implemented in the classes shown.   As we know, there are also methods inherited from Object, such as toString, hashCode, equals, and a few others (see here: http://download.java.net/java/jdk9/docs/api/java/lang/Object.html ).     DO NOT COUNT THOSE for purposes of this question, which is intended to be a simple question focusing on just the relationships between the code shown.


# page 170-175

An extended example involving a bunch of animals.  

These "animal examples" seems to be pretty common to textbook presentations of inheritance and polymorphism.   

They get on my nerves, because you very seldom have to represent animals in real world code, unless you are writing management software for zoos or pet stores.      

But, understanding the principles involved here is pretty important, so suspend your disbelief and try to go with it.  See if you can imagine a parallel example that might have to do with, say, people in a university:

* people
* students
* alumni
* faculty
* staff
* undergrads
* grad students
* people living on-campus
* off-campus
* extension students

Note that people can be in multiple roles here.  Some of these categories are strictly hierarchical, while others are not.  How could you build an integrated information system where each "person" is represented by a <em>single object</em> that can function properly in all of the necessary roles?

There are also various kinds of things that can be on a schedule:

* lecture classes
* lab classes
* one-time meetings and appointments
* meeting slots for clubs
* work shifts
* athletic events (games)

What do various events have in common?  How are they different?  How could events on a schedule be organized in a hierarchy?

Or,  think about some kind of game that simulates an adventure: think Lord of the Rings, or Harry Potter, or Chronicles of Narnia.   There might be a need for various kinds of objects:

* game characters might be:
**  human and non-human
** friends, neutral, and adversaries (enemies)
* various supplies 
** food, medicine, drinks, tools, weapons
** weapons might be defensive and offensive
* containers to carry things: bags, wagons
* ways to get around: horses, wagons, trains, cars, trucks

Whether modeling a real-world or an imaginary universe, there is a need to keep track of things.   And those things may well form some kind of inheritance hierarchy.  Start to think about how those might look in some piece of software you can imagine, whether a "real-world" scenario, or an imaginary universe, and how inheritance and polymorphism might be used.

# page 176 

A practice exercise.     Be aware that this kind of exercise could show up on your exams.

NOTE: The question is asking the superclasses shown in the code.   As we know,any class with no direct superclass shown in the code has Object as a superclass.   The book is glossing over that detail to keep the example simple.

# page 178-181

<b>Very important passage</b> about <b>IS-A vs. HAS-A</b>.   This is a VERY important distinction to understand.  It will come up during job interviews.  It will come up during real world code design.  And it is likely to be a subject of exam questions.


# page 182-183

What is inheritance for?   Big picture stuff.    This is kind of stuff I like to ask about on exams, and the stuff that employers like to ask you about in job interviews.

# page 184-189 

This passage illustrates polymorphism with an example.   <b>Definitely worth reading in some detail, and experimenting with the code.</b>

# page 190 

<b>Keeping the contract: overriding a method</b>.

This is <em>important</em>: potential employers* may give you a coding interview where you have to override a method, and <em>keep the contract</em>.  They may speak to you in that language, and expect you to know what it means.    So learn what "keeping the contract" means.

<nowiki>*</nowiki>(Google, Microsoft, Qualcomm, Apple, or local ones such as AppFolio, Procore, Invoca, or whoever...)

# page 191 

<b>Crucial distinction: overriding vs. overloading.</b>

# page 192-196

Chapter exercises.  Always a good thing to review before an exam.

