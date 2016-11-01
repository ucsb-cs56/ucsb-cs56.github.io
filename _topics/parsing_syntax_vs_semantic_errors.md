---
topic: "Parsing: Syntax vs. Semantic Errors"
desc: "The formal definition of the difference"
indent: true
---


In Java, there is a rule final variables cannot be changed after initial assignment.   For example:

<style>
table.code-table { border-collapse: collapse; border: 1px solid grey; }
table.code-table * td, table.code-table * th { border-collapse: collapse; border: 1px solid grey; }
</style>

<table class="code-table">
<tr><th>Bad Code</th><th>Compile error<br>(not a syntax error though)</th></tr>
<tr>
<td markdown="1">
```java
public class Bad {
    private final int foo=3;
    public void makeFooFive() {
	foo=5;
    }
}
```
</td>
<td markdown="1">
```
$ javac Bad.java
Bad.java:4: error: cannot assign a value to final variable foo
	foo=5;
	^
1 error
$ 
```
</td>
</tr>
</table>

Even though this error is reported by the compiler, strictly speaking, it isn't a *syntax error*.    Leaving off the return type of a method, leaving out a semicolon, or parentheses/braces that aren't properly balanced are all syntax errors&mdash;but things that require subtle analysis of the relationships between remote parts of the code generally are *not*, stricty speaking, syntax errors.  

This distinction between what *is* and *is not*, strictly speaking, a syntax error may be hard to *fully* understand without exploring more about *grammars*, *productions*, and *ASTs*.

So if you aren't prepared to divide into those topics yet, it may sufficient for the time being to understand that there *is* a difference between the two.

# Formal explanation of the difference 

The formal difference between a syntax and semantic error is specified in terms of the context-free grammar and the AST.

It has to do with when and how the error is detected.

* Any error that can be detected *during* the process of applying the rules of a context-free grammar and constructing the resulting AST is considered a *syntax error*

* *Semantic errors* are violations of the language specification that can only be discovered *after* the AST is created, either as the AST is checked, evaluated, or at a later stage when the resulting code is executed.  These are violations of rules that *cannot* be captured in a context-free grammar.
