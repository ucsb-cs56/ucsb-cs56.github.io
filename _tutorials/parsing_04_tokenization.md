---
topic: "Parsing: (04) Tokenization"
desc: "Context Free Grammars, EBNF, and Abstract Syntax Trees"
category_prefix: "Parsing: "
topic_index_top: true
indent: true
---

<div style="display:none;">https://ucsb-cs56-pconrad.github.io/tutorials/parsing_04_tokenization</div>

<p style="font-size:80%;">
Acknowledgments: this series or articles is joint work, a collaboration between Kyle Dewey and Phill Conrad.
</p>

## Tokenization ##

Tokenization involves converting larger sequences of characters into meaningful units (integers, operators, variables, keywords, etc.).
Each of these units is called a "token".
To illustrate what tokens are, consider again the aforementioned Java code snippet, repeated below for convenience:

```java
if (x > 7) { // magic number
  foo = 10;
} else {
  /* TODO: this needs a better solution
     right now this is broken */
  System.err.println( "FIX THIS CODE" );
}
```

This code snippet contains over 100 characters.
However, it contains only 24 tokens, namely (put into a table to save space):

|                 |     |      |         |        |
|-----------------|-----|------|---------|--------|
|`if`             |`(`  |`x`   |`>`      |`7`     |
|`)`              |`{`  |`foo` |`=`      |`10`    |
|`;`              |`}`  |`else`|`{`      |`System`|
|`.`              |`err`| `.`  |`println`|`(`     |
|`"FIX THIS CODE"`|`)`  | `;`  |`}`      |        |

As shown, tokens separate semantically meaningful groupings of characters into individual units.
For example, `if`, `else`, `10`, `"FIX THIS CODE"`, and others are considered individual, distinct tokens.
Additionally, components extraneous to the code, such as unnecessary whitespace and comments, are completely stripped out.
That said, there are still some "extra" components in here, such as the braces (`{` and `}`).
This is left for the next phase to handle, namely parsing.

