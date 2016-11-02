---
topic: "Parsing: (02) Formal Language Specifications"
desc: "How do we write the rules of a language? (FSAs, CFGs, etc.)"
category_prefix: "Parsing: "
topic_index_top: true
indent: true
---

<div style="display:none;">https://ucsb-cs56-pconrad.github.io/tutorials/parsing_02_formal_spec</div>

<p style="font-size:80%;">
Acknowledgments: this series or articles is joint work, a collaboration between Kyle Dewey and Phill Conrad.
</p>

# Formal Language Specifications

Before you can write code to tokenize, parse, and interpret, we need a set of rules for the language.  Here's how those rules are typically provided to you:
 

1. *Tokenization*: The legal tokens of the language are typically expressed as
    * A set of legal input characters (the *alphabet* of the language)
    * A *finite state automaton* (or equivalent formalism) the specifies the legal tokens
2. *Parsing*: The syntax rules for parsing the language are typically expressed using a *context-free grammar*.
    * A context free grammar, abbeviated *CFG* is often just called the *grammar* for the language (the "context-free" part being implied).
    * We'll cover CFG in more detail later, but as a summary: A CFG consists of a set of terminal symbols (corresponding to tokens), *non-terminal symbols*, and *productions*.
    * There are various ways of expressing a CFG, one of which is Extended Backus Naur Form (EBNF), which we'll also cover in more detail later.
3. *Evaluation/Translation*: the semantic rules of the language cover how to produce this thing called an Abstract Syntax Tree, and what to do with it.
    * Sometimes they are specified entirely informally in natural human language (usually English).  This can be dangerous, since human languages are notorious for their ambiguity.  Indeed, this ambiguity is where many real world compiler bugs and inconsistencies arise. *These occasionally lead to [security vulnerabilities](http://www.theregister.co.uk/2016/07/19/asn_objective_systems_asn_compiler_memory_bug/).)
    * Another option is full-on, rigorous formal specification using the language of discrete math: set notation, logic, etc. i.e. ,  the toolsyou learn about in courses such as [CMPSC 40](http://www.cs.ucsb.edu/education/courses/cmpsc-138), and [CMPSC 138](http://www.cs.ucsb.edu/education/courses/cmpsc-138)  (ah, *now* you know what those courses are *for*. :-) ).   The advantage is that this method typically means that the language so specified has a formal, precise, unambiguous meaning about which theorem's can be proved.  A few disadvantages are that relatively few people are comfortable enough with this notation to accurately translate it into code, and that often, it can be quite complicated to express even the simplest of concepts with total rigor.
    * The common case is usually a middle ground, in which formal notation is used for some aspects of the language, and informal specification for others.   Of course, like most compromises, this incorporates both the best and worst features of the two extereme options above.
    
# Example Formal Rules for Tokenization: A Finite State Automaton

The rules for tokens are typically expressed as a finite state automaton.

* *Other names*: finite state machine, finite automaton (the "state" is implied)
* Finite state *automata* is the *plural form* (the "a" at the end is the plural form in Greek, automaton being a word borrowed into English from Greek.)

Here is a finite automaton that corresponds to the tokens in our language:

![fsa.png](fsa.png)


# How do the finite automata we are looking at related to Mealy and Moore Machines?

If you've never heard of Mealy and Moore machines, don't worry about this section.  If you have, here's how to relate what we are doing to what you already have learned, or are learning.

* *Moore Machines* are finite state automata that generate output based on the state they are in.   The finite automata we are considering are not exactly equivalent to Moore Machines, even though we are labelling states (accepting states) with output tokens.  The reason is that in our case, we are not output the token associated with the state *unless* we have run out of acceptable transitions to make (i.e. when we find that there is no "legal" transition based on the current input.)

* *Mealy Machines* are finite state automata that optionally "emit" output with each transition.   The finite automata we are considering can be considered Mealy Machines, in that they "emit" tokens on the transition from an accepting state back to the start state.

# Formal Rules for Parsing

TODO: Discussion of CFGs and the way in which those translate into code.

# Formal Rules for ASTs

TODO: Discussion of ASTs and the way in which those translate into code.
