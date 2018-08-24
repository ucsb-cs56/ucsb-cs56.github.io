---
topic: "Rational: ex15"
desc: "Sorting: Comparable, Comparators"
indent: true
code_repo: https://github.com/UCSB-CS56-pconrad/cs56-rational-ex15
---


{% include rational_example_header.html %}

TODO: Build a tutorial lesson about Sorting and Comparators based on the Rational Class.

TBD: For now, to learn about soring, reference <https://github.com/UCSB-CS56-pconrad/java-sorting-and-comparators>
   
# Review ex11 about reading from files

You may want to review the material in tutorial [rational_ex11](/tutorials/rational_ex11/) about reading from files before continuing, especially if you skipped over it previously.

In this exercise, we are going to read a number of Rationals from a file (just as we did in [rational_ex11](/tutorials/rational_ex11/), but then we are going to sort them a few different ways.

# What are the different ways we could sort rational numbers?

Suppose we have a set of rational numbers in no particular order:

TODO-INSERT-HERE

One way to sort them is simply to sort them their place on the number line, using the traditional less-than and greater-then operations.

TODO-INSERT-HERE

Another way might be to put them in order first by their denominator, then by their numerator, like this:

TODO-INSERT-HERE

The `java.util` package gives us several ways to sort things in very flexible ways *without having to write our own sorts*.

But to work with it, we'll need to understand the `java.lang.Comparable<T>` interface, and the notion of a `java.util.Comparator<T>`.

# First, `java.lang.Comparable<T>`

It want to be able to sort objects of class `T`, and there is some *normal*, *natural* way to sort those objects, i.e. a single "obvious* way that folks might want to sort those things, then it is helpful for class `T` to implement the `java.lang.Comparable<T>` interface.

The benefit is that we can then just use the `sort` method of `java.util.ArrayList<T>`.

(As a reminder, if a class is in package `java.lang`, we can just drop the `java.lang`.  The compiler works with Java code as if there were an implied `import java.lang.*` at the top of every Java source file.  So we'll just call this `Comparable<T>` and drop the `java.lang` from here on out.  And you don't need to import anything to refer to `Comparable<T>.)




If a class `T` 

As with any `interface` in Java, for you class to implement the `Comparable` interface, you simply have to be sure that your class 
