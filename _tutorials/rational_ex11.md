---
topic: "Rational: ex11"
desc: "Using java arrays and java.util.ArrayList with Rational; running main() programs from a jar file; reading from file, constructing from string"
indent: true
code_repo: https://github.com/UCSB-CS56-pconrad/cs56-rational-ex11
---


{% include rational_example_header.html %}

# Plain Java Arrays of our Rational object

We can create plain old Java Arrays of Rational objects with code such as this:

```java
Rational [] terms = new Rational[5];
```

at which point we have an array of 10 null references, each of which could be initialized to a Rational number.  For example,
we can get the first five terms of this sequence:

$$ 1 + \frac{1}{2} + \frac{1}{3} + \frac{1}{4} + \frac{1}{5} $$

With this code:

```java
   Rational [] terms = new Rational[5];
  
   int denom = 1;
   for (int i=0; i<terms.length; i++) {
      terms[i] = new Rational(1, denom);
      denom++;
   }
```
      
The file [PlainArrayDemo.java](https://github.com/UCSB-CS56-pconrad/cs56-rational-ex11/blob/master/src/edu/ucsb/cs56/pconrad/rational/PlainArrayDemo.java) in ex11 demonstrates this.

# Running from a jar

To run the example, we can create a jar file with `ant jar`

```
cs56-rational-ex11 pconrad$ ant jar
Buildfile: /Users/pconrad/github/UCSB-CS56-pconrad/cs56-rational-ex11/build.xml

compile:

jar:
      [jar] Building jar: /Users/pconrad/github/UCSB-CS56-pconrad/cs56-rational-ex11/build/rational.jar

BUILD SUCCESSFUL
Total time: 0 seconds
cs56-rational-ex11 pconrad$ 
```

Then we can use that jar in our classpath (the `-cp` argument of the `java` command) and specify the full
name of the class we want to run:

```
cs56-rational-ex11 pconrad$ java -cp build/rational.jar edu.ucsb.cs56.pconrad.rational.PlainArrayDemo
Traditional for loop:
terms[0]=1
terms[1]=1/2
terms[2]=1/3
terms[3]=1/4
terms[4]=1/5
For-each style loop:
r=1
r=1/2
r=1/3
r=1/4
r=1/5
Phillips-Mac-mini:cs56-rational-ex11 pconrad$ 
```
# Using `ArrayList<Rational>`

We can also do the same with an ArrayList.  The file  [ArrayListDemo.java](https://github.com/UCSB-CS56-pconrad/cs56-rational-ex11/blob/master/src/edu/ucsb/cs56/pconrad/rational/ArrayListDemo.java) in ex11 demonstrates this.

```
 ArrayList<Rational> terms = new ArrayList<Rational>();
                
 int denom = 1;
 for (int i=0; i<5; i++) {
   terms.add(new Rational(1, denom));
   denom++;
 }
```

We can traverse an ArrayList with either a traditional for loop, or the for-each style loop:

```
 System.out.println("Traditional for loop:");
        for (int i=0; i<terms.size(); i++) {
            System.out.println("terms[" + i + "]=" + terms.get(i));
        }

        System.out.println("For-each style loop:");
        for (Rational r: terms) {
            System.out.println("r=" + r);
        }
```

# Reading lines from a file to initialize an ArrayList 

The "best way" to read from a file, line-by-line, in Java has changed signficantly over the years.   Both Java 7 and Java 8 introduced
significant improvements in the I/O routines.  The old ways still work, but the new ways offer signficant advantages in terms of simplicity.

Two small digressions before the main presentation about reading from a file:

1. try with resources
2. constructing from a string

## "try with resources"

The technique I'm showing here is not the "bleeding edge" of new Java functionality, but is more of a blend of some older approaches with one new innovation from Java 8: the "try with resources" construct.    

Basically, the idea is that there are some kinds of resources that we should "close" when we are finished with them, including files.   (Files get automatically closed when a program exits, but in the meantime, if the file is kept open, there are certain performance penalties.)

You can read more about this here:

* <https://docs.oracle.com/javase/tutorial/essential/exceptions/tryResourceClose.html>

## A constructor for Rational objects that takes a String

A useful constructor to implement is one that is the inverse of the toString method; that is one that takes the String representation of 
an object as input, parses it, and then initializes an equivalent object.

In this version, I've introduced tests cases in RationalTest and an implementation in Rational for a constructor that takes a String that is more or less of the same form at the output of toString.  In fact, it is a bit less restrictive in that is allows for whitespace around the numerator and denominator, though no other characters are permitted.    Also, it requires the numerator and denominator to present, which may differ from our toString output when denominator is 1; this is something we might address in a later version or as an exercise for the student.

Look for these test cases and for the new constructor in RationalTest.java and Rational.java.

Also note that we have factored out a helper method rationalize() where we've also introduced some missing functionality to move signs from denominator to numerator when needed (this was deliberately left out of some earlier examples, because it was left as an exercise for the student.)

## The loop that reads

Our program, [ReadFileOfRationals](https://github.com/UCSB-CS56-pconrad/cs56-rational-ex11/blob/master/src/edu/ucsb/cs56/pconrad/rational/ReadFileOfRationals.java), contains this main.  Note how we've tried to factor out
code and details (such as the `USAGE` message, and the details of `readArray`) into constants and methods to keep the code short.

Short methods are good.  They are easier to understand and maintain.  Strive for short methods.


```java
public static void main(String args[]) {

	if (args.length != 1) {
	    System.err.println("Error: Missing filename parameter");
	    System.err.println(USAGE);
	    System.exit(1);
	}
	
	String filename = args[0];

	ArrayList<Rational> numbers = readArrayListFromFile(filename);

	System.out.println("numbers = " + numbers);
   }
```

Here is our `readArrayFromList` method.  I've taken out this comment to make the lines easier to follow

```
public static ArrayList<Rational> readArrayListFromFile(String fileName) {

	ArrayList<Rational> items = new ArrayList<Rational>();
	
	try (BufferedReader br =
	     new BufferedReader(new FileReader(fileName))) {

	    String line;
	    while ((line = br.readLine()) != null) {
		   // process "line" as input
		   try {
		      Rational r = new Rational(line);
		      items.add(r);
		   } catch (IllegalArgumentException iae) {
		       System.err.println("Warning: ignored bad input line: " +
				       line);
		   }
	    } // while

	} catch (IOException e) {
	    e.printStackTrace();
	} // try with resources
	
	return items;
```

Look at the two lines of code from the above example:

```java
try (BufferedReader br =
	     new BufferedReader(new FileReader(fileName))) {
```

These two lines are an example of the start of a "try with resources" block.  The short explanation is that 
objects that implement "java.lang.AutoCloseable" are "automatically closed" at the end of a "try with resources construct".

This allows the programmer to not have to worry about making sure that the appropriate `close()` method is called on every conceivable
path through the code, which is a great simplification.   It makes it more likely that the programmer will "get it right".

 
# More on advanced I/O techniques in Java

This is only one of several ways to read from a file in Java.  The following web page has some nice examples of how to read a file line-by-line, using various techniques.   You are encouraged to explore all of them.

<https://www.mkyong.com/java8/java-8-stream-read-a-file-line-by-line/>
