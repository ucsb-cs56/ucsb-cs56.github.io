---
title: Head First Java, 2nd Edition
chapter: 9
sort_key: "09"
textbook: HFJ
desc:  "Life and Death of an Object"
---



# The big picture (p. 235) 

This chapter is where we discuss not only constructors, but also how memory management works in Java.

Some important concepts that you are supposed to get from this chapter are:
* heap vs. stack
* what garbage collection is
* some idea of how garbage collection works
* how and when constructors are called
* how constructors interact with inheritance


# Chapter 9, page-by-page 

## page 236-238: Stack vs. Heap, how the Stack Works, local vs. instance variables 

These three pages should be studied together.

On page 236, we see the division between stack and heap in Java, in terms of where things are stored, which is similar, though subtly different from how things happen in C/C++ (as I'll explain in the notes below.)

On page 237 we see the idea of "stack frames" (also known as "activation records" or "call frames"), which I'm hoping you've seen before in CS8, CS16, CS24 and/or CS32&mdash;but if not, here's your chance to get caught up.

Page 238 focuses on the distinction between the reference variable and the object it points to&mdash;the case of a variable on the *stack* "referring to" (or "pointing to") an object on the *heap*.


I will definitely put questions on the exam about the material on these two pages.  Understanding what is on the *stack* and what is on the *heap* is crucial for understanding how to write efficient code, not only in Java, but in just about every modern programming language.

I am hopeful that you've encountered these ideas before in CS16, CS24 and possibly CS32&mdash;so that what is new here is just the Java portion of this material.    So let's compare this with what we know about C++:

One big difference between C++ and Java: it is possible, in C++ to create an object on the stack.  For example, in the following C++ function, the Dog object d is on the stack.  And, the destructor function for Dog will get invoked as soon as we return from function foo:

```cpp
#include "dog.h"

void foo() 
{
     Dog d;
     cout << "Dog's name is " << d.getName() << endl
}
```

If we wanted a Dog on the heap in C++, we'd use a pointer:

```cpp
#include "dog.h"

void bar() 
{
     Dog *p;
     p = new Dog;
     cout << "Dog's name is " << p->getName() << endl;
}
```

Note that:
* the pointer `p` is on the stack
* the pointee `Dog` object `(*p)` is on the heap
* we use the arrow now `->` instead of the dot because `p` is a pointer
* the function `bar` has a memory leak&mdash;we allocated a new `Dog` object on the heap, but since we didn't return a pointer to that object from the function, the Dog object is no longer reachable from any pointer after the bar function returns.    It nevertheless is still taking up memory.

In Java, by contrast, ALL objects are on the heap, because there is no concept of a variable for an object that isn't a reference (i.e. a pointer.) 

Note also that we can have:
* primitive variables on the stack (local variables, and method parameters)
* object reference variables on the stack (though not the objects themselves&mdash;again, these are local variable and method parameters)
* primitive variables on the heap (if the the primitive variable is an instance variable inside an object)
* object reference variables on the heap (if the reference is an instance variable inside an object)


Finally, note that:
* For any given instance variable, there can be either 0, 1 or many instances of it on the heap at any given time.
  * That's pretty self-explanatory.  If `name` is an instance variable for a Dog object, I can have zero, one, or many Dog objects, each with its own name  (e.g.  "Fido", "Rover" and "Spot").
* There can also be 0, 1, or many instances of a local variable or parameter on the stack at any point in time.
  * This one may be trickier to see.    Clearly, if a given function is not active at the moment, its local variables are not on the stack.  And if only one copy is active, then one copy of each of its local variables is on the stack.   What is the situation where there can be many copies of the same local variable or parameter on the stack at once? 
  * The answer I'm looking for does NOT have to do with multiple people running the same program, or the same person invoking multiple copies of the the same program, or even with multiple processes or threads.    Each process or thread will have its own stack, so that doesn't count.   I'm looking for a situation where multiple copies of the same variable are on the same stack at the same time.   
  * A hint&mdash;this is possible with some methods in Java (or functions in C/C++), but not others.


Note that the picture on p. 237 shows the local variables and parameters "inside" the call frame, whereas in some other pictures, you may have seen them "on top of" the call frame.      If you were actually writing a Java compiler or a JVM, those kind of details would matter&mdash;and later on, in courses such as CMPSC160 and CMPSC162, you'll discuss those concepts, perhaps&mdash;but for our purposes of CMPSC56, it doesn't really matter.  The important thing is to know that they are:
* on the stack
* connected or associated in some way with a specific method(function) call.


# Methods vs. Functions

Note that I will sometimes "slip up" and use the word "function" rather than method when describing those things in Java that you "call".   

In fact, Java has no functions other than methods, so it is "proper" to only use the word "method" in describing that things in Java that in any other language might be called functions.   If I do use the word "function" when referring to Java, I really mean "method".     

I use the words interchangeably for two reasons:
* a good reason: because I want to remind you that a good bit of what you learned about function in Python/C/C++ transfers over to Java methods
* a bad reason: because sometimes I just forget




# Some potential exam questions


1. Write a Java class that will compile and run (i.e. it needs a main() method)  that has (at least) the following four   variables: a, b, c, and d, each instance of which will have the properties indicated.  
   * a should be a primitive variable that will be stored on the stack
   * b should be an object reference that will be stored on the stack
      * note: the references is on the stack, even though the object it refers to will always be on the Heap in Java.)
   * c should be a primitive variable that will always be stored on the heap.
   * d should be an object reference that will always be stored on the heap 
      * note: here I want the reference variable itself to be on the heap, not just the object it refers to.)

   It does not matter if the class is useful in practice&mdash;the purpose of this question is to test your understanding of how Java works.



2. Write a Java class with a main method that illustrates that it is possible for there to be two or more occurrences of a given instance variable (say <code>title</code> in class <code>Book</code>)  on the heap at the same time.

   You should have a line of code <code>System.out.println("now");</code> that will be printed at a moment when there are two instances of the instance variable <code>title</code> in memory.

   It does not matter if the class is useful in practice&mdash;the purpose of this question is to test your understanding of how Java works.


3. Write a Java class with a main method that illustrates that it is possible for there to be two or more instances of a given local variable or parameter (say <code>n</code>)  on the stack at the same time.

   You should have a line of code <code>System.out.println("now");</code> that will be printed at the precise moment when there are two instances of the local variable or parameter <code>n</code> in memory.

   It does not matter if the class is useful in practice&mdash;the purpose of this question is to test your understanding of how Java works.

## page 239-245: Constructors in Java 

### page 246: a specific note about no-arg constructors  



### page 247-249: more on constructors 

### page 250-257: inheritance and constructors 

### page 258-263: lifetime and scope 

### page 264-265: fireside chat 

### page 266-271: exercises 



