---
topic: "SparkJava: RESTful APIs"
desc: "Creating RESTful APIs with SparkJava"
indent: True
---

When we think of web apps, we normally think of a human end user interacting with the web app through a browser. 
* The pages are rendered in HTML/CSS/JavaScript in Chrome, Firefox or Safari
* The user a human on a smart phone or tablet, reading pages, and then clicking, selecting, and/or typing in data

But many web applications either instead of this, or in addition to this, provide RESTful APIS.

RESTful APIs are typically NOT designed for human end users; instead, 
you can think of them as web apps for other pieces of software.
* The "users" are programs that send web requests, these days, typically 
   formatted in JSON (JavaScript Object Notation) 
* The replies are also typically formatted in JSON 

(Note that in the past, it was more common for RESTful APIs to use XML instead of JSON, 
and [many still do](https://blogs.mulesoft.com/dev/howto/build-rest-api-with-xml-payload/).  However, we'll focus on
JSON in this course.

RESTful APIS provide:
* a way for programs written in any language with libraries for http and json (which is pretty much every language these days) 
   to access data from online sources (e.g. Google Maps, Google Places)
* an alternative way to build a web app for humans, where the "formatting" is done by a client side JavaScript 
   library such as [AngularJS](https://angularjs.org) or ReactJS(https://reactjs.org).

Here are some examples of building RESTful APIs using SparkJava

* <https://github.com/ucsb-cs56-pconrad/sparkjava-lombok-jackson-example>
