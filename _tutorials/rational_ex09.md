---
topic: "Rational: ex09"
desc: "Work In Progress"
indent: true
code_repo: https://github.com/UCSB-CS56-pconrad/cs56-rational-ex09
---

Work in progress...

<div class="github-preview-only">On website: https://ucsb-cs56-pconrad.github.io/tutorials/rational_ex09/</div>

<em>Part of a [series of tutorial articles about a Rational class](/tutorials/rational/).</em>

{% include code_examples.md %}

# == vs .equals, and hashCode()

The next part of this tutorial concerns the difference between `==` and `.equals` and the implementation of the hashCode() function.

Please first, read through the following:

* [== vs .equals, and hashCode()](/topics/java_double_equals_vs_dot_equals/)
* p. 86 in Chapter 4 of Head First Java, 2nd Edition
  [on-campus]({{site.on_campus}}/{{site.hfj_url}}/{{page.p86}})
  [off-campus]({{site.off_campus}}/{{site.hfj_url}}/{{page.p86}})	

The big picture take away is that we need to implement `.equals()` and `.hashCode()` properly for each class
we implement.

Here's a way to do it.

# First, we write tests

That's the essence of test-driven development.  Always start with your tests

Here are some tests for the .equals() method from the file `RationalTest.java`.

In coming up with these tests, we mostly make tests that we expect to be true
(and which fail when the `.equals()` method is still implementing `==`).

However, it is helpful to add *at least one test* where we expect
.equals() to return false.  Otherwise, simply writing a version of
`.equals()` that would return `true`, *always*, would satisfy the
tests.  That would be bad.

```java
    @Test
    public void test_equals_1() {
	Rational a = new Rational(2,3);
	Rational b = new Rational(2,3);
	assertTrue(a.equals(b));
    }
 
    @Test
    public void test_equals_2() {
	Rational a = new Rational(2,3);
	Rational b = new Rational(-2,-3);
	assertTrue(a.equals(b));
    }


    @Test
    public void test_equals_3() {
	Rational a = new Rational(1,3);
	Rational b = new Rational(3,9);
	assertTrue(a.equals(b));
    }


    @Test
    public void test_equals_4() {
	Rational a = new Rational(-1,3);
	Rational b = new Rational(1,-3);
	assertTrue(a.equals(b));
    }

    @Test
    public void test_equals_5() {
	Rational a = new Rational(2,3);
	Rational b = new Rational(4,5);
	assertFalse(a.equals(b));
    }


```


Here are some tests for the .hashCode() method from the file `RationalTest.java`.

Here, you might notice that we only wrote tests where we expect the hashCode values returned to be equal.

It is a bit tougher to write a test where we should guarantee that the hashCode values should *not* be equal.  In fact, arguably, we cannot do that without knowing details about how the hashCode should be implemented, since there is no guarantee in the contract of `hashCode()` that unequal values will have unequal `hashCode()` values.

It is important to keep in mind that the extent of our testing is an "engineering design decision", a "tradeoff", not something where we aim for "perfection".  Don't get so bogged down in the quest for test perfection that you burn out on testing and fail to do any testing at all.

```java
    @Test
    public void test_hashCode_1() {
	Rational a = new Rational(2,3);
	Rational b = new Rational(2,3);
	assertTrue(a.hashCode()==b.hashCode());
    }
 
    @Test
    public void test_hashCode_2() {
	Rational a = new Rational(2,3);
	Rational b = new Rational(-2,-3);
	assertTrue(a.hashCode()==b.hashCode());
    }


    @Test
    public void test_hashCode_3() {
	Rational a = new Rational(1,3);
	Rational b = new Rational(3,9);
	assertTrue(a.hashCode()==b.hashCode());
    }

    @Test
    public void test_hashCode_4() {
	Rational a = new Rational(-1,3);
	Rational b = new Rational(1,-3);
	assertTrue(a.hashCode()==b.hashCode());
    }
```

With these tests in place, we run, initially *without* adding an overridden `equals()` and `hashCode()` method, and we see that we have only eight test failures.  That's to be expected, since `test_equals_5()` is likely to "pass", though for the "wrong reason" .

```
UCSB-CS56-pconrad/UCSB-CS56-pconrad.github.io/_tutorials/rational_ex09.md
Phillips-Mac-mini:cs56-rational-ex09 pconrad$ ant test
Buildfile: /Users/pconrad/github/UCSB-CS56-pconrad/cs56-rational-ex09/build.xml

compile:

test:
    [junit] Testsuite: RationalTest
        [junit] Tests run: 34, Failures: 8, Errors: 0, Skipped: 0, Time elapsed: 0.043 sec
	    [junit]
	        [junit] Testcase: test_equals_1(RationalTest):	FAILED
		    [junit]
		        [junit] junit.framework.AssertionFailedError:
			    [junit]	at RationalTest.test_equals_1(RationalTest.java:170)
			        [junit]
				    [junit]
				        [junit] Testcase: test_equals_2(RationalTest):	FAILED
					    [junit]
					        [junit] junit.framework.AssertionFailedError:
						    [junit]	at RationalTest.test_equals_2(RationalTest.java:177)
						        [junit]
							    [junit]
							        [junit] Testcase: test_equals_3(RationalTest):	FAILED
								    [junit]
								        [junit] junit.framework.AssertionFailedError:
									    [junit]	at RationalTest.test_equals_3(RationalTest.java:185)
									        [junit]
										    [junit]
										        [junit] Testcase: test_equals_4(RationalTest):	FAILED
											    [junit]
											        [junit] junit.framework.AssertionFailedError:
												    [junit]	at RationalTest.test_equals_4(RationalTest.java:193)
												        [junit]
													    [junit]
													        [junit] Testcase: test_hashCode_1(RationalTest):	FAILED
														    [junit]
														        [junit] junit.framework.AssertionFailedError:
															    [junit]	at RationalTest.test_hashCode_1(RationalTest.java:208)
															        [junit]
																    [junit]
																        [junit] Testcase: test_hashCode_2(RationalTest):	FAILED
																	    [junit]
																	        [junit] junit.framework.AssertionFailedError:
																		    [junit]	at RationalTest.test_hashCode_2(RationalTest.java:215)
																		        [junit]
																			    [junit]
																			        [junit] Testcase: test_hashCode_3(RationalTest):	FAILED
																				    [junit]
																				        [junit] junit.framework.AssertionFailedError:
																					    [junit]	at RationalTest.test_hashCode_3(RationalTest.java:223)
																					        [junit]
																						    [junit]
																						        [junit] Testcase: test_hashCode_4(RationalTest):	FAILED
																							    [junit]
																							        [junit] junit.framework.AssertionFailedError:
																								    [junit]	at RationalTest.test_hashCode_4(RationalTest.java:231)
																								        [junit]
																									    [junit]
																									        [junit] Test RationalTest FAILED

BUILD SUCCESSFUL
Total time: 0 seconds
Phillips-Mac-mini:cs56-rational-ex09 pconrad$
```

So, now let's try to write some code so that our tests pass.

First an implementation of .equals().  This is the easy part.

For the most part, checking whether `this` instance of `Rational`
is equal to some other object is a matter of checking whether this numerators
are equal and the denominators are equal.    This, of course, depends
on two assumptions, namely that:

* (a) our constructor is taking care of reducing fractions, and normalizing where the minus sign goes (always in the numerator), and
* (b) that our Rational object is immutable

Also, there is a bit of "boiler plate code" that we always need for a
.equals method to take care of the fact that:

* (a) the parameter is of type Object, meaning we can pass in literally *any* kind of java reference, even one to some other class.
* (b) the parameter could be null, and we need to make sure we don't end up throwing a `NullPointerException` in that case.

So, here's the final method, boilerplate and all:

```java
    /** 
	return true if and only if numerators and denominators are equal
     */
    @Override
    public boolean equals(Object o) {

	// Start: boilerplate code for .equals
	
	if (this == o) return true;
	if (o == null) return false;
	if (getClass() != o.getClass()) return false;
	Rational r = (Rational) o;

	// End boilerplate
	
	return this.num == r.num && this.denom == r.denom;
    }
```

Note that the line of boilerplate code that reads

```java
  if (getClass() != o.getClass()) return false;
```

Used to be written this way prior to Java 7:

```
  if (! o instanceof Rational) return false;
```

The new syntax is supposedly more efficient, and also avoids having to
mention the class by name, making it easier to copy and paste the boilerplate
from one function to another.    The class name still appears on the next line
of boilerplate code though, where we have a typecast to convert the parameter
`o` to a Rational.

```
   Rational r = (Rational) o;
```

# Implementing `hashCode`

We have a bit of a dilemma here.  The space of hashCodes is the space of the
type `int`.   The number of values we have is twice as big.

If we use either numerator alone, or denonminator alone, we are likely to
get quite a few hash collisions.

* One might expect that when working with rationals, we might be working with a set of numbers that contains 1/7, 3/7, 22/7, etc, so hashing based on denominator alone is probably not a good idea.

* Similarly, if we are working with a set of numbers 1/2, 1/3, 1/4, 1/5, etc. we would not want to use numerator alone to hash.

It might be tempting to simply use a bitwise xor to combine the values together.  This ignores the fact, though, that might expect, for many applications, that the numerator and denominator would be more likely to be small integers than large integers.   To use the bits wisely, we might do better to take the least significant bits from both numerator and denominator, and combine them together.

So, here is a function that does that.

```java
    /**
       hashCode for Rational class.  Concatenate least significant 
       16 bits of the 32 bit int values for num and denom.

       Can you think of cases where this might be a poor choice?
       Can you think of a better choice?
     */

    @Override
    public int hashCode() {	
	int numLowerBitsOnly   = this.num   & 0x0000FFFF;
	int denomLowerBitsOnly = this.denom & 0x0000FFFF;
	return (numLowerBitsOnly << 16) | denomLowerBitsOnly;
    }
    
```



We've also added some code into our main to illustrate what is happening.

```java
    /** 
	For testing getters.  
	@param args unused
     */

    public static void main (String [] args) {
	Rational r = new Rational(5,7);
	System.out.println("r.getNumerator()=" + r.getNumerator());
	System.out.println("r.getDenominator()=" + r.getDenominator());
	System.out.println("Integer.toHexString(r.hashCode())=" +
			   Integer.toHexString(r.hashCode()));
	Rational r2 = new Rational(0x01234567,0x89ABCDEF);
	System.out.println("Integer.toHexString(r2.getNumerator())=" +
			   Integer.toHexString(r2.getNumerator()));
	System.out.println("Integer.toHexString(r2.getDenominator())=" +
			   Integer.toHexString(r2.getDenominator()));
	System.out.println("Integer.toHexString(r2.hashCode())=" +
			   Integer.toHexString(r2.hashCode()));

	Rational r3 = new Rational(0x89ABCDEF,0x01234567);
	System.out.println("Integer.toHexString(r3.getNumerator())=" +
			   Integer.toHexString(r3.getNumerator()));
	System.out.println("Integer.toHexString(r3.getDenominator())=" +
			   Integer.toHexString(r3.getDenominator()));
	System.out.println("Integer.toHexString(r3.hashCode())=" +
			   Integer.toHexString(r3.hashCode()));
    }


```


Here's a run of that code:

```
Phillips-Mac-mini:cs56-rational-ex09 pconrad$ ant run
Buildfile: /Users/pconrad/github/UCSB-CS56-pconrad/cs56-rational-ex09/build.xml

run:
     [java] r.getNumerator()=5
     [java] r.getDenominator()=7
     [java] Integer.toHexString(r.hashCode())=50007
     [java] Integer.toHexString(r2.getNumerator())=1234567
     [java] Integer.toHexString(r2.getDenominator())=89abcdef
     [java] Integer.toHexString(r2.hashCode())=4567cdef
     [java] Integer.toHexString(r3.getNumerator())=89abcdef
     [java] Integer.toHexString(r3.getDenominator())=1234567
     [java] Integer.toHexString(r3.hashCode())=cdef4567

BUILD SUCCESSFUL
Total time: 0 seconds
Phillips-Mac-mini:cs56-rational-ex09 pconrad$
```