---
topic: "SparkJava: Image Files"
desc: "and any other static files your application needs"
indent: true
category_prefix: "SparkJava: "
---

If:

* you want to includes background images (e.g. `.jpg`, `.png`, `.gif`, etc) files on the pages
of your web app, and 
* those are static files (i.e. you have files like `cat1.jpg` and `goldenGate.png` rather
than images you are uploading to the app (that you might, for example, store in a MongoDB or other database)

then, this page describes a solution for you.  (Note: this solution 
is [partially documented on the SparkJava documentation](http://sparkjava.com/documentation#static-files) but that
version leaves out a few crucial details.)

1.  Make a directory `/src/main/resources/public`
2.  Put the image files in that directory.
3.  Add this line to your code:
   staticFiles.location("/public"); // Static files
4.  In your HTML code:
   * if the file is `/src/main/resources/public/cat1.jpg`, 
   * your `img` element should be: `<img src="/public/cat1.jpg">`
   Note: do not include the `/src/main/resources` part in your `src` attribute value.
5. You *must* do `mvn compile` each time you make changes to the contents of `/src/main/resources/public`,   
   or for that matter, *any* file or directory under `/src/main/resources` if you want those changes to 
   take effect, even if you make *no* changes to Java source code.
   
   The reason: the `mvn compile` step does *more* than just compile your java code; it also copies all of the
   contents of the `src/main/resources` directory into the `CLASSPATH`.
   
   
   `
