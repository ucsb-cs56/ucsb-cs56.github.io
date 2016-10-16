---
topic: "Java: Garbage Collection: Under the Hood"
desc: "Can we peek under the hood at how garbage collection is done"
indent: true
---

# Peeking under the hood of Java GC is tricky, and NOT 100% reliable

First, it should be stressed, and stressed again: the techniques noted below are HACKS, and are not 100% reliable.

Having said that, for simple cases, they've sometimes worked pretty well.

As the saying goes, [your mileage may vary!](https://en.wiktionary.org/wiki/your_mileage_may_vary)

# Seeing when an object becomes eligible for garbage collection

The code in this repo shows how we can peek under the hood a bit and see when objects become eligible for garbage collection.

This shows how we can try to verify the answers for exam questions such as:

* [Question 6 on Midterm Exam CS56-M16-E01](https://ucsb-cs56-f16.github.io/exam/e01/cs56_m16_e01/)

