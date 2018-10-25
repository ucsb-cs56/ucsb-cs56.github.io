---
topic: "Java: Sorting"
desc: "Comparable, Comparators, and sorting ArrayLists and such"
indent: true
---

# Don't write your own sort

If you are writing your own sorting algorithm in Java, *unless* you are doing so for the purpose of *learning* how to write a sorting algorithm (e.g. Insertion Sort, Quicksort, Mergesort, etc.), then you are probably doing something wrong.

To be honest, that's true in most languages.  For any given language and system, there is already, most likely, a built-in way of sorting things that need to be sorted. You just need to hook into that.

You write sorting algorithms in courses such as CMPSC 24 and CMPSC 130A so that you understand how sorting algorithms work, and how algorithms work in general    But you should hardly ever write your own sort after that, ever again---certainly not if the purpose is to put things in order.

# What you need to understand to do sorting in Java

To understanding sorting in Java, you need to understand these concepts:

* The interface `java.lang.Comparable`
* The interface `java.util.Comparator`

It is also super handy if you understand the concept called *lambda Expressions*, because it makes the code for using `java.lang.Comparable` and `java.util.Comparator` much cleaner, shorter, and more clear.

I'll walk you through what you need to know.

# `ArrayList` yes, but `Vector` and `LinkedList` too

All of my examples in this lesson use `ArrayList` since that's the class that is most familiar to students from the classes that implement the `java.util.List` interface.  However, everything we illustrate here works on `java.util.Vector` and `java.util.LinkedList` as well.   

# How to Sort an `ArrayList<String>`

Sorting an `ArrayList<String>` so that all of the strings appear in alphabetical order (or more correctly, *lexicographic order*) is super easy in Java.   

It's easy because `String` implements the `java.util.Comparable<String>` interface.

That is, it has a method: `int	compareTo(String o)` that allows us to compare one String to another and determine whether:
* `this` string should come before `o` in lexicographic order, i.e. `this` string is "less than" `o` 
* `this` string and `o` are equal
* `this` string should come after `o` in lexicographic, i.e. `this` string is "greater than" `o` 

Anytime you have an `ArrayList<T>` where `T` is a type that implements `Comparable`, you can just use the method `java.util.Collections.sort` to sort the list.  Here's some sample code:

```java
import java.util.ArrayList;
public class SortArrayListString {

        public static void main(String [] args) {
                ArrayList<String> things = new ArrayList<String>();

                things.add("Cup");
                things.add("Stapler");
                things.add("Pencil");
                things.add("Plate");
                things.add("Ball");

                System.out.println("Not sorted: " + things);

                java.util.Collections.sort(things);
                
                System.out.println("Sorted? " + things);
        }
}
```

Running it, we get:

```
$ java SortArrayListString
Not sorted: [Cup, Stapler, Pencil, Plate, Ball]
Sorted? [Ball, Cup, Pencil, Plate, Stapler]
$ 
```
```
  
  


See: <https://github.com/UCSB-CS56-pconrad/java-sorting-and-comparators>
