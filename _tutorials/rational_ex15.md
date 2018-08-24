---
topic: "Rational: ex15"
desc: "Sorting: Comparable, Comparators"
indent: true
code_repo: https://github.com/UCSB-CS56-pconrad/cs56-rational-ex15
---


{% include rational_example_header.html %}


   
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

# Now: `java.util.Comparator<T>`

The interface `java.util.Comparator<T>` is a `@FunctionalInterface`; i.e. an interface for a method with one and only one abstract method.  

We can implement that interface by implementing this method, which "compares its two arguments for order":

```
public int	compare(T o1, T o2)
```
A few points:

* The `int` value returned is very similar to that of the `compareTo` method of `Comparable<T>`
* But, this is not an instance method of T.  
* So instead of comparing `this` to `o`, we are comparing `o1` to `o2` as follows (strictly speaking, in each case, the objects "referred to by o1 and o2")
   * less than 0 if `o1` is less than `o2` 
   * equal to 0 if `o1.equals(o2)`
   * greater than 0 if `o1` is greater than `o2`

So, the simplest Comparator we might implement for `Rational` is this one:

```
public class SimpleRationalComparator implements java.util.Comparator<Rational> {
   @Override
   public int compareTo(Rational r1, Rational r2) {
      return r1.compareTo(r2);
   }
}
```

But note that since `java.util.Comparator<T>` is a functional interface, we can both declare the class an instantiate it
more easily using, you guessed it, lambda expressions:

```
   public static final java.util.Comparator<Rational> simpleComparator = (r1,r2) -> r1.compareTo(r2);
```

We can use `Comparators` to customize the sort order of various sorts.  The program [SortRationalsWithLambdas](https://github.com/ucsb-cs56-pconrad/cs56-rational-ex15/blob/master/src/main/java/edu/ucsb/cs56/pconrad/rational/SortRationalsWithLambdas.java) contains several examples of this.

When we compile the code to produce a jar with `mvn package`,
we can run this program as we did earlier, with `java -cp...` showing several ways of sorting.

```
java -cp target/rational11-1.0-SNAPSHOT.jar edu.ucsb.cs56.pconrad.rational.SortRationalsWithLambdas
Before sorting                             = 
[1/3, -2/3, 4/5, 7/2, 8/9, 2, 8, 1/9, -8/9, 3/7]
  as decimals                              = 
[0.333,-0.667,0.800,3.500,0.889,2.000,8.000,0.111,-0.889,0.429]
After sort with Collections.sort(nums)     = 
[-8/9, -2/3, 1/9, 1/3, 3/7, 4/5, 8/9, 2, 7/2, 8]
  as decimals                              = 
[-0.889,-0.667,0.111,0.333,0.429,0.800,0.889,2.000,3.500,8.000]
After nums.sort(denomThenNum)              = 
[2, 8, 7/2, -2/3, 1/3, 4/5, 3/7, -8/9, 1/9, 8/9]
  as decimals                              = 
[2.000,8.000,3.500,-0.667,0.333,0.800,0.429,-0.889,0.111,0.889]
After nums.sort((r1,r2)->r1.compareTo(r2)) = 
[-8/9, -2/3, 1/9, 1/3, 3/7, 4/5, 8/9, 2, 7/2, 8]
  as decimals                              = 
[-0.889,-0.667,0.111,0.333,0.429,0.800,0.889,2.000,3.500,8.000]
pconrad$ 
```

Here's the code for each way of sorting.  First we sort with  `Collections.sort(nums)` which does not use a `Comparator`, but rather uses the fact that `Rational` implements `Comparable`. 

But, if that way of sorting isn't what we want&mdash;or if we are sorting items from a class that doesn't implement `Comparable`, we can can create a `Comparator`, like this one:

```
/** 
		Comparator that orders first by denominator, then by numerator, e.g.
		<code>1, 2, 3, -5/2, 1/2, 3/2, 5/2, -7/3, 1/3, 2/3, 4/3</code>.
		
		The comparator is initialized with a Lambda Expression
	 */
	public static final Comparator<Rational> denomThenNum = (r1,r2) -> {
			int r1num = r1.getNumerator();
			int r2num = r2.getNumerator();
			int r1denom = r1.getDenominator();
			int r2denom = r2.getDenominator();
			if (r1denom==r2denom) {
				return r1num - r2num;
			} else {
				return r1denom - r2denom;
			}
		};
	
```

And then sort with it like this.  Here, we are using the `sort` method of `java.util.ArrayList` itself.

```
		nums.sort(denomThenNum); 
```

The method we are using here is this one, and instance method (i.e. non-static method) of `ArrayList<E>`, which "Sorts this list according to the order induced by the specified Comparator".   

```
void	sort(Comparator<? super E> c)
```

As you learned from the HFJ textbook, the syntax `<? super E>` simply means that the Comparator sorts things of type `E`, or some super class of type `E`.   Note that `E` is considered a superclass of itself.

Another example is this one, which shows declaring a trivial comparator "inline":

```
   nums.sort( (r1, r2)->r1.compareTo(r2)); 
```

Because of the way `Comparable<T>` and `Comparator<T>` work, you should be able to see that this does exactly the same thing as this:

```
   java.util.Collections.sort(nums);
```

If you can understand the reason that is true, you've got a pretty good grasp on this topic.  If you don't see why that's true, go back and read through this tutorial, plus the relevant sections in HFJ again, and/or ask your instructional staff some questions on Piazza or during office hours.

# For more examples:

* Some sample code (without explanations) <https://github.com/UCSB-CS56-pconrad/java-sorting-and-comparators>
