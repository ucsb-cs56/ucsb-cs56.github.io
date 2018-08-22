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



# A table of Rationals

We are going to implement a method

```java
  String tableOfRationalsMarkdown(int rows, int cols) { ...
```

This method will produce a table such as this one for the call:

Rational.tableOfRationalsMarkdown(3,4)

Numerators

```
| |1|2|3|4|
|-|-|-|-|-|
|1|1|2|3|4|
|2|1/2|1|3/2|2|
|3|1/3|2/3|1|4/3|
```
When rendered as Markdown, that looks like this:

But what we'd really like to be able to do, is select how the numbers are formatted in a flexible way.

For example, I'd also like to get a table like this one:



| |1|2|3|4|
|-|-|-|-|-|
|1|1.000|2.000|3.000|4.000|
|2|0.500|1.000|1.500|2.000|
|3|0.333|0.667|1.000|1.333|

```java
Rational.tableOfRationalsMarkdown(int rows,int cols,Rational2String r2s)
```
 
   
