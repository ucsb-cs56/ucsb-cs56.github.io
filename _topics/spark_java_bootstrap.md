---
topic: "SparkJava: Bootstrap"
desc: "Adding a nicer looking UI, with common navigation, drop down menus, etc."
indent: true
category_prefix: "SparkJava: "
---

# Using Bootstrap with SparkJava

The links below provide an example of a minimal SparkJava webapp that incorporates Bootstrap for building a UI.

* Github repo: https://github.com/pconrad-webapps/sparkjava-bootstrap-demo
* Running on Heroku: https://sparkjava-bootstrap-demo.herokuapp.com/

The only parts that are particular to Bootstrap are in the mustache template files, and the CSS.  The java code is completely unaffected.

* [/src/main/resources/templates/head.mustache](https://github.com/pconrad-webapps/sparkjava-bootstrap-demo/blob/master/src/main/resources/templates/head.mustache) 
    which contains the code that goes in the header to load up hosted libraries for bootstrap and jquery from a content distribution network
* [/src/main/resources/templates/nav.mustache](https://github.com/pconrad-webapps/sparkjava-bootstrap-demo/blob/master/src/main/resources/templates/nav.mustache) which 
    contains the navigation bar
* [/src/main/resources/templates/footer.mustache](https://github.com/pconrad-webapps/sparkjava-bootstrap-demo/blob/master/src/main/resources/templates/footer.mustache)
    which contains HTML for a common page footer.
* [/src/main/resources/static/site.css](https://github.com/pconrad-webapps/sparkjava-bootstrap-demo/blob/master/src/main/resources/static/site.css) which contains some custom
    css that styles the footer so that it sticks to the bottom of the viewport (this part comes from [this bootstrap sticky-footer example](http://getbootstrap.com/examples/sticky-footer-navbar/).)

# Why do I care?

Bootstrap is a framework built in JavaScript and CSS that gives you an easy way to provide a nice looking user interface for your
web application.

Some advantages of using Bootstrap include:

* quickly getting a user interface up that looks reasonably attractive and professional
* responsiveness&mdash;Bootstrap contains features to enable your UI to scale properly between desktop, tablet, and phone-sized browsers
* libraries that implement common icons, symbols, and features that you see on various websites.

# The downside of bootstrap: ridicule by the hipster crowd.

Bootstrap gets a bad rap because it is a bit cliché.  The "cool kids" might make fun of you for using it.   And you might wonder why.

Bootstrap is, in part, a victim of its own success.   Because it is so easy to use, many web applications use it.  As a result, if you use Bootstrap, 
there is the risk that your web application looks exactly like every other web application out there.

That doesn't have to be the case.   You can use Bootstrap, and yet still customize the CSS to give your website a custom look.

But not everyone that uses Bootstrap uses it well.    Hence the bad rap.
