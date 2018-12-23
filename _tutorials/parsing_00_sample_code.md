---
topic: "Parsing: (00) Some sample code to refer to"
desc: "Some code you can run, compile, and consult as go through the tutorial"
indent: true
topic_index_top: true
---

<div style="display:none;">https://ucsb-cs56-pconrad.github.io/tutorials/parsing_00_sample_code</div>

<p style="font-size:80%;">
Acknowledgments: this series or articles is joint work, a collaboration between Kyle Dewey and Phill Conrad.
</p>

# Some code 

To ground all of the following discussion in some code, let's start with a github repository that provides an example of the type 
of code we are talking about in this tutorial.

The following github repo contains an example of a program that evaluates arithmetic expressions:

* <https://github.com/UCSB-CS56-pconrad/ucsb-cs56-parsing-arithmetic-expressions>

# Sample Output

Let's look at a sample run of this program, so that you understand what kind of code we are trying to be able to write.    You are encouraged to `git clone` this repo (or a fork of it) and experiment with it. As you read this tutorial, we may make reference to this code.

This program provides a "Read/Eval/Print Loop (REPL)" for evaluating integer expressions for the four main arithmetic operators: `+`,`-`,`*`,`/`, with `/` representing integer division as in C/C++/Java, the usual precedence and associativity rules, and parentheses `(`, `)` for grouping.

The program will either evaluate the expression and return a result, or print an error message if the expression is not well-formed.  Note that the usual precedence and associative rules are followed, so that:

* `2 + 3 * 5` is evaluated as `2 + (3 * 5)` which is `17` rather than `(2 + 3) * 5` which would be `25`
* `3 - 3 * 3 - 3` is evaluated as `(3 - (3 * 3)) - 3`, which is `-9` rather than `3 - ((3 * 3) - 3)` which would be `-3`

So, here's sample output.  

```
-bash-4.3$ ant run
Buildfile: /cs/faculty/pconrad/github/UCSB-CS56-pconrad/ucsb-cs56-parsing-arithmetic-expressions/build.xml

compile:
    [mkdir] Created dir: /cs/faculty/pconrad/github/UCSB-CS56-pconrad/ucsb-cs56-parsing-arithmetic-expressions/build/classes
    [javac] Compiling 41 source files to /cs/faculty/pconrad/github/UCSB-CS56-pconrad/ucsb-cs56-parsing-arithmetic-expressions/build/classes

jar:
    [mkdir] Created dir: /cs/faculty/pconrad/github/UCSB-CS56-pconrad/ucsb-cs56-parsing-arithmetic-expressions/build/jar
      [jar] Building jar: /cs/faculty/pconrad/github/UCSB-CS56-pconrad/ucsb-cs56-parsing-arithmetic-expressions/build/jar/CS56Parser.jar

run:
     [java] Enter expressions, or q to quit.
2+2
     [java] 4
2 + 3 * 5
     [java] 17
3 - 3 * 3 - 3
     [java] -9
5 ** 5
     [java] Failed to parse: Extra tokens at the end
3 == 4 
     [java] Failed to parse: Extra tokens at the end
4 4 +
     [java] Failed to parse: Extra tokens at the end
+ 4 4 
     [java] Failed to parse: Expected primary expression; got: PlusToken
123-456                  
     [java] -333
These are bad tokens
     [java] Failed to parse: Expected primary expression; got: ErrorToken(T)
4 + x
     [java] Failed to parse: Extra tokens at the end
x + 4
     [java] Failed to parse: Expected primary expression; got: ErrorToken(x)
foo + bar
     [java] Failed to parse: Expected primary expression; got: ErrorToken(f)
q

BUILD SUCCESSFUL
Total time: 1 minute 46 seconds
-bash-4.3$ 
```

# This repo is a "playground", not the starting point for your assignment.

One more thing: the <https://github.com/UCSB-CS56-pconrad/ucsb-cs56-parsing-arithmetic-expressions> repo is here to be a "reusable" repo that corresponds to the text of this tutorial, which is also intended to be "reusable", quarter-after-quarter.     Note that if you have a programming assignment based on this repo, it may have starter code that is similar to this repo, but in a different place, and possibly with subtle but important differences.

So be sure to check your specific assignment for the proper starting point code.  If you clone the <https://github.com/UCSB-CS56-pconrad/ucsb-cs56-parsing-arithmetic-expressions> repo and play with it, consider that a "playground" or a "sandbox" in which to try things out to learn about parsing, NOT as a place to work on code you are going to submit as part of your programming assignment.

<strong>For the proper starting point for your assignment, consult the lab instructions.</strong>
