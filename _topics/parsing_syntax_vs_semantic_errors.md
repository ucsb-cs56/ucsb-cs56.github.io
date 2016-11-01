---
topic: "Parsing: Syntax vs. Semantic Errors"
desc: "The formal definition of the difference"
indent: true
---

Formally:

* Any error that can be detected *during* the process of applying the rules of a context-free grammar and constructing the resulting AST is considered a *syntax error*

* *Semantic errors* are violations of the language specification that can only be discovered *after* the AST is created, either as the AST is checked, evaluated, or at a later stage when the resulting code is executed.  These are violations of rules that *cannot* be captured in a context-free grammar.
