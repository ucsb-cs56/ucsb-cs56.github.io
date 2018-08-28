---
topic: "SparkJava: 01"
desc: "Deploying an example app on Heroku"
indent: true
code_repo: https://github.com/ucsb-cs56-pconrad/spark-basic-structure
---

<style>
div.niceTable table {
   border-collapse: collapse;
}


div.niceTable table * td {
   border: 1px solid black;
   border-collapse: collapse;
}
  
div.niceTable table * td:first-child {
   font-family: monospace;
   white-space: pre;
}
  
  
div.niceTable table * th {
   border: 1px solid black;
   border-collapse: collapse;
}
  
</style>

# sparkjava-02

{% include sparkjava_example_header.html %}

# A (more or less) full web app example

The repo linked to is a clone of the repo <https://github.com/tipsy/spark-basic-structure>.   

* I cloned this to <{{page.code_repo}}>
* I then added:
   * Code to set the port number from the PORT environment variable (this is needed to run on Heroku)
   * Code to the Maven `pom.xml` to make a jar with dependencies
   * A `Procfile` that tells to run that jar on startup
   * Code to deploy to Heroku using the Heroku CLI

This application is described in detail at [this page]<http://sparkjava.com/tutorials/application-structure> which you 
are encouraged to read through, while also reading through the code. 

As the introduction to that tutorial says (emphasis and bulletting added):

* You will learn how to create a basic Spark application with 
   * filters, controllers, views
   * authentication, localization, error handling, and more, 
* **[But] this is not really a full blown tutorial**
* It’s more a description of a basic structure, with certain points of the code highlighted. 
* To get the full benefit of this tutorial, please:
   * **clone the example on GitHub**, 
   * **run it**, 
   * and **play around**.

That is what I recommend that you do next.   Then, we'll start with our basic `sparkjava-01` app and add each of those things to
it, one at a time, so that you get a sense of how each of those works.

<div class="github-preview-only">On website: https://ucsb-cs56-pconrad.github.io/tutorials/sparkjava_02</div>
