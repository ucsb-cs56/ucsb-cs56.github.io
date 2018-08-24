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

The benefit is that we can then just use the method `java.util.Collections.sort`, which can be called on any `ArrayList<T>` as long as `T` implements the `java.util.Comparable<T>` interface.

For example, if `Rational` were to implement `java.lang.Comparable<Rational>` in a way that compares them based on their place on the number line of real numbers (i.e. the set that in Math classes we call &#8477; or for that matter, the set of rationals &#8474;), then we could write:

```java
   ArrayList<Rational> nums = ReadFileOfRationals.readArrayListFromFile("rationals.txt");
   java.util.Collections.sort(nums);   
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

```
   @Test
    public void test_compareTo_1_3_lt_2_3() {
        assertTrue(new Rational(1,3).compareTo(new Rational(2,3)) < 0);
    }

    @Test
    public void test_compareTo_2_3_eq_2_3() {
        assertTrue(new Rational(2,3).compareTo(new Rational(2,3)) == 0);
    }

    @Test
    public void test_compareTo_2_3_gt_1_3() {
        assertTrue(new Rational(2,3).compareTo(new Rational(1,3)) > 0);
    }
```

We then write the code by first changing the first line of `Rational.java` thus:

```
public class Rational implements Comparable<Rational> {
```

Note: `Comparable<Rational>`, not `Comparable<T>`.  `<T> is just a placeholder.  If you want to be able to compare `Rational` objects, then you implement `Comparable<Rational>`.
   
We then add an implementation of the method, using our existing `.gt` and `.equals` methods:

```
 @Override
    public int compareTo(Rational o) {
        if (this.equals(o))
            return 0;
        if (this.gt(o))
            return 1;
        else
            return -1;
    }

```

What does this allow us to do?  It allows us to go into the main of `ReadFileOfRationals` and demonstrate how to
sort using the "natural ordering" provided by `compareTo`.   Here's what that code looks like:

```
TODO
```

And to run it, we can first do `mvn package` to create a jar file:

```
pconrad$ mvn package
...
(Lots of output from Maven not shown)
...
pconrad$ ls target/*.jar
target/rational11-1.0-SNAPSHOT.jar
pconrad$ 
```

Then, we can use a command of this form 

* <tt>java -cp </tt><i>jarfile name-of-class arguments</i>

Here, `-cp` stands for *classpath* and what follows is the name of a jar file that contains our classes.  If we have multiple such jar files, we can separate those files with colons, e.g. <tt>-cp file1.jar:file2.jar</tt>

Here's how we use a command of that form to run the main class from `edu.ucsb.cs56.pconrad.rational.ReadFileOfRationals` to read rational numbers from the file `resources/rational1.txt`:

```
pconrad$ java -cp target/rational11-1.0-SNAPSHOT.jar edu.ucsb.cs56.pconrad.rational.ReadFileOfRationals resources/rational1.txt 
numbers (before sorting) = [2/3, 5/8, 9/10, -1/4]
numbers (after sorting) = [-1/4, 5/8, 2/3, 9/10]
pconrad$ 
```

As you can see, we have sorted the array of Rationals!
