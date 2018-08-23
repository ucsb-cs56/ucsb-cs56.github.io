---
topic: "Rational: ex14"
desc: "Java Lambdas"
indent: true
code_repo: https://github.com/UCSB-CS56-pconrad/cs56-rational-ex14
---


{% include rational_example_header.html %}

# Lambdas: An admittedly contrived example

My purpose here is to introduce lambdas in order to prepare us for 
* using Lambdas with the [SparkJava Web Framework]() 
* using Lambdas with the [Finite State Automaton Lexical Analizer](https://github.com/ucsb-cs56-pconrad/ucsb-cs56-parsing-arithmetic-expressions/blob/master/src/edu/ucsb/cs56/pconrad/parsing/tokenizer/Tokenizer.java#L33) that is part of the [Parsing Tutorial](https://ucsb-cs56-pconrad.github.io/tutorials/parsing/) 
* job interview questions about [Java Lambdas](https://ucsb-cs56-pconrad.github.io/topics/java_lambda_expressions/) and Functional Programming in Java, in general, for example [Streams](https://ucsb-cs56-pconrad.github.io/topics/java_streams/)

Having said that, the example shown here is admittedly a bit contrived.

# Imaginary Dialog with the Ideal Student about this Contrived Example

* Q: "But Professor, why would we do it that way?"
* A: "Yeah, you're right, this might be a bad idea in practice. Or not.  That's not the point."
* Q: "What is the point?"
* A: "To have a small, simple example of using Lambdas that is rooted in the Rational Tutorial.  Go with me on this."
* Q: "Ok, but I'm skeptical".
* A: "Good.  That's right where I want you to be.  Open, but with just the right amount of skepticism. Not so much that you reject everything I say, and not so little that you just accept it blindly."

# Our contrived purpose

What we want is:
* A Java interface for a generic function that takes a Rational as it's argument, and produces a string.
* We could have lots of different implementations of that:
   * The most obviously one produces just the number in the form "3/4"
   *  If that sounds like `toString`, you are almost right.   What we are talking about is more of a "generic" toString function, but NOT as a member function
   of Rational.  As something more like a "plugin".
   * An alternative implementation might produce the numerator and demoninator as a prime factorization of the number, e.g. `"(3)/(2 * 2)"` or
      even `"(3)/(2^2)"`.   The fraction "9/50" might be rendered as `"(3^2)/(2 * 5^2)"`.
   * Another might be to render it as a decimal approximation, e.g. "0.75" instead of "3/4" or "0.333" instead of "1/3", or "0.667" instead of "2/3"
   * Finally, we might render it in a way that it could be typeset with a Math typesetting system LaTeX.  
      For example if we want $$ \frac{3}{4} $$, we might produce the string `"\frac{3}{4}"`

# What would we use that for?

Suppose we wanted to make tables of rational numbers like this one.  Here, the column headings are the
numerators, and the row headings are the denominators.


| |1|2|3|4|
|-|-|-|-|-|
|1|1|2|3|4|
|2|1/2|1|3/2|2|
|3|1/3|2/3|1|4/3|

So we might add a method to the `Rational` class with this signature to produce such a table:

```java
  public static String tableOfRationalsMarkdown(int rows, int cols)
```

You can imagine that this method might have a couple of nested for loops, and go through
and for each of the entries, do something like this.  (This is just a portion of the code;
the part that generates everything except the first two lines.)

```java
  for (int denom=1; denom<=rows; denom++) {                                  
    result += "|" + denom;                                                 
    for (int num=1; num<=cols; num++) {                                    
      Rational r = new Rational(num,denom);                              
      result += "|" + r.toString();                                                                     
    }                                                                      
    result += "|" + System.lineSeparator();
  }
  return result;
```

But, what if we also wanted a table of decimal approximations to these Rational numbers, like this?

| |1|2|3|4|
|-|-|-|-|-|
|1|1.000|2.000|3.000|4.000|
|2|0.500|1.000|1.500|2.000|
|3|0.333|0.667|1.000|1.333|

Or HTML notation to give fractions, which when formatted, produces this:


And in raw HTML looks like this:

```html
```

Or LaTeX notation that, when formatted, produces this:

| |1|2|3|4|
|-|-|-|-|-|
|1|1|2|3|4|
|2|$$\frac{1}{2}$$|1|$$\frac{3}{2}$$|2|
|3|$$\frac{1}{3}$$|$$\frac{2}{3}$$|1|$$\frac{4}{3}$$|

In raw UTF-8 (ASCII) LaTeX code (text), that looks like this:

```
| |1|2|3|4|
|-|-|-|-|-|
|1|1|2|3|4|
|2|$$\frac{1}{2}$$|1|$$\frac{3}{2}$$|2|
|3|$$\frac{1}{3}$$|$$\frac{2}{3}$$|1|$$\frac{4}{3}$$|
```

Each time we want a different format,  we *could* go back into the Rational class each time, 
and copy/paste all of that for loop code, just to change the *one line* that produces the formatted
string.  

But that would be unpleasant, 
and wasteful.   What we want instead, is a way to "plug in" a custom way of printing the Rational.

So, imagine that in addition the method we defined before, we also define this one:

* `public static String tableOfRationalsMarkdown(int rows, int cols)`
* `public static String tableOfRationalsMarkdown(int rows, int cols, Rational2String r2s)`

The second version of the method takes an additional parameter of type `Rational2String`.  This is
an object that implements the Rational2String interface, and allows us to "customize" the way
that the Rational object is printed.  And it allows us to do that *without having to change the
code for the Rational class!*

# Then, what if we could define that new class inline?

There are at least four ways of defining a new class for that plugin:

1. Separate class in a separate file
2. Separate inner class (with a name) that we explicitly instantiate
3. Inline anonymous inner class
4. Lambda expression

Let's show what each of those looks like.

# Separate class in a separate file

We could define a class that implements the `Rational2String`
interface in separate file.  For example, see the file
`BasicRational2String.java`.   

Here's what that file looks like:

```java
package edu.ucsb.cs56.pconrad.rational;
public class BasicRational2String implements Rational2String {
    /**                                                                                            
        Return a string representation of a Rational number                                        
     */
    @Override
    public String r2s(Rational r) {
        return r.toString();
    }
}
```

Here is an example of using that:

```java
        BasicRational2String br2s = new BasicRational2String();
        String actual = Rational.markdownTable(3,4,br2s);
```

# Separate inner class (with a name) that we explicitly instantiate

# Inline anonymous inner class

# Lambda expression



   
