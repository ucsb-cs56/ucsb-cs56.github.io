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

The benefit is that we can then just use the `sort` method of `java.util.ArrayList<T>`.  For example, if `Rational` were to implement `java.lang.Comparable<Rational>` in a way that compares them based on their place on the number line of real numbers (i.e. the set that in Math classes we call &#8477; or for that matter, the set of rationals &#8474;), then we could write:

```java
   ArrayList<Rational> nums = ReadFileOfRationals.readArrayListFromFile("rationals.txt");
   nums.sort();   
```

And the references in the `ArrayList<Rational>` referred to by `nums` would be sorted so that they point to `Rational` objects arranged in ascending order.

(As a reminder, if a class is in package `java.lang`, we can just drop the `java.lang`.  The compiler works with Java code as if there were an implied `import java.lang.*` at the top of every Java source file.  So we'll just call this `Comparable<T>` and drop the `java.lang` from here on out.  And you don't need to import anything to refer to `Comparable<T>.)


As with any interface, for a class `T` to implement `Comparable<T>`, it has to implement *each and every abstract method* of `Comparable<T>`.  
   
Fortunately, it is easy to get a class to implement `Comparable<T>`.  All you have to do is implement (i.e. `@Override` the method:


```
public int	compareTo(T o)
```

which "compares this object with the specified object for order."

The exact language of the Javadoc is:

> Compares this object with the specified object for order. 
> Returns a negative integer, zero, or a positive integer as this 
> object is less than, equal to, or greater than the specified object.

To put it another way: the contract of `compareTo` is that it returns an integer that is:
* less than 0 if the object referred to by `this` is less than the object referred to by `o`
* equal to 0 if `this.equals(o)`  (see note below)
* greater than 0 if the object referred to by `this` is greater than the object referred to by `o`

(Note: Strictly speaking, there is some flexibility in the contract around returning a value equal to 0 as compared to the behavior of `.equals`, but let's not get into that.   Making them inconsistent is not recommended anyway, and we shouldn't have any need for that.)

Since the Rational class already has methods `lt` and `gt`, we can implement the `public int compareTo(T o)` method quite easily.   But, first, of course, we should write some tests for it.

