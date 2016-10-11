---
topic: "Rational: ex11"
desc: "Using java.util.ArrayList with Rational"
indent: true
code_repo: https://github.com/UCSB-CS56-pconrad/cs56-rational-ex11
---


{% include rational_example_header.html %}



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
      
We'll add a file PlainArrayDemo.java to ex11 that demonstrates this:


And perhaps also read from a file, using code such as one of these examples:

<https://www.mkyong.com/java8/java-8-stream-read-a-file-line-by-line/>
