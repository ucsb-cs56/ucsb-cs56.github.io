---
topic: "Java: Sorting"
desc: "Comparable, Comparators, and sorting ArrayLists and such"
indent: true
---

For code examples in this lesson, see: <https://github.com/UCSB-CS56-pconrad/java-sorting-and-comparators>


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

# Sorting `ArrayList<Dog>`: First Attempt

What if we try the same thing with one of our own classes?  Here's a simple Dog class:

```java
public class Dog {
    private String name;
    private double weight;
    public String getName() { return name; }
    public double getWeight() { return weight; }
    public Dog(String name, double weight) {
        this.name = name;
        this.weight = weight;
    }
    public String toString () {
        return "[" + name + "," + weight + "]";
    }
}
```

And here's some code that tries to sort it:

```
import java.util.ArrayList;
public class SortDogs {
    
    public static void main(String [] args) {
        ArrayList<Dog> kennel = new ArrayList<Dog>();
        
        kennel.add(new Dog("Fido",15));
        kennel.add(new Dog("Spot",20));
        kennel.add(new Dog("Puddles",8));
        kennel.add(new Dog("Doge",45));
        kennel.add(new Dog("Catepillar",90));
        
        System.out.println("Not sorted: " + kennel);
        java.util.Collections.sort(kennel);
        System.out.println("Sorted by name " + kennel); 
    }   
}
```

But it doesn't compile.  We get this terrible looking error.  What's gone wrong?

```
$ javac SortDogs.java 
SortDogs.java:14: error: no suitable method found for sort(ArrayList<Dog>)
	java.util.Collections.sort(kennel);
	                     ^
    method Collections.<T#1>sort(List<T#1>) is not applicable
      (inference variable T#1 has incompatible bounds
        equality constraints: Dog
        upper bounds: Comparable<? super T#1>)
    method Collections.<T#2>sort(List<T#2>,Comparator<? super T#2>) is not applicable
      (cannot infer type-variable(s) T#2
        (actual and formal argument lists differ in length))
  where T#1,T#2 are type-variables:
    T#1 extends Comparable<? super T#1> declared in method <T#1>sort(List<T#1>)
    T#2 extends Object declared in method <T#2>sort(List<T#2>,Comparator<? super T#2>)
1 error
$ 
```

The problem is that Dog doesn't implement `java.lang.Comparable<Dog>`.   Here's a fixed version.

Note that:
* We declare on line 1 that `Dog implements Comparable<Dog>`.   
* We can leave off the `java.lang.` on `java.lang.Comparable`; you can always leave off `java.lang.`  
* Implementing `Comparable<Dog>` involves writing the `compareTo` method that appears on lines 15-29

{% highlight java linenos %}
public class Dog implements Comparable<Dog>  {

        private String name;
        private double weight;
        public String getName() { return name; }
        public double getWeight() { return weight; }
        public Dog(String name, double weight) {
                this.name = name;
                this.weight = weight;
        }
        public String toString () {
                return "[" + name + "," + weight + "]";
        }
                                                  
        public int      compareTo(Dog otherDog) {
                // return negative number if this < otherDog, according to my "order"
                // return 0 if this == otherDog, according to my "order"
                // return positive if this > otherDog, according to my "order"
                
                // return this.name.compareTo(otherDog.name);

                if (this.name.compareTo(otherDog.name) < 0) {
                        return -1;
                } else if (this.name.equals(otherDog.name)) {
                        return 0; 
                } else {
                        return 1;
                }                       
        }
}
{% endhighlight  %}



