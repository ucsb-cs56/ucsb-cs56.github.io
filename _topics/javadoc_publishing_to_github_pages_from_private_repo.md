---
topic: "javadoc: publishing to github pages from a private repo"
desc: "step-by-step instructions"
---


Github offers convenient free web hosting via a service called "github pages" for sites that are
* open source, and 
* contain only static html, css and javascript.   

All you have to do is create a separate branch called `gh-pages`, and push to it.  You can even change the default branch from `master` 
to `gh-pages`, so that you really don't have to think about branches much, except during the initial setup of the repo.

All of that that works perfectly for javadoc, at least for public repos

However, if our main repo is private, there's a problem: you can't publish to github pages from a private repo.

So, our solution will be to create a separate public repo, side-by-side, with our private one.  

For example, if our private repo is `lab00_jgaucho`, we'll create a public repo `lab00_javadoc_jgaucho`

To simplify the steps of publishing, we'll put the two repos *side-by-side* in the same parent directory. 
This *side-by-side* part is *crucial*, so read these instructions carefully 

* You need to clone them both in the same parent directory (e.g. `~/cs56`, or `/Users/JoGaucho/github`, or whatever)
* You should see the two directories/folders side by side in the same parent directory/folder
* That way, we can use a relative path from with the private repo's directory  to access the public repo's files, for example, `../lab00_javadoc_jgaucho`

Once you have your private repo (e.g. `lab00_jgaucho`) and your public repo (e.g. `lab00_javadoc_jgaucho`) side-by-side, you are
ready to modify your `build.xml` file to publish the javadoc.  Here's how:

# Step 1: Set up public repo with gh-pages branch

TODO: FILL IN THESE INSTRUCTIONS.   Put a test.html file in the directory, set the default branch, etc.

# Step 2: Add a property `javadoc_dest`

In this step, we add a `property` definiton to your `build.xml` that defines a property called `javadoc_dest`.   

Properties in ant `build.xml` files are similar to the assignments statements we see in Makefiles (e.g. `CXX=g++` or `CXX=clang`)

Traditinonally, property definitions are put at the top of the build.xml, indented just after the opening `<project>` tag.  However, in the cs56-rational-example, at [ex08/build.xml line 51](https://github.com/UCSB-CS56-M16/cs56-rational-example/blob/master/ex08/build.xml#L51), we see that we've added a property that is only used in the `javadoc` target immediately before the target.   We'll add our second property there.  It will look like this. Note that you *will have to replace `yourgithubid* with your own*.  I'm showing both the property you should already have, plus the new one.

```xml
  <property name="javadoc_absolute_path" location="javadoc"/>
  <property name="public_javadoc_absolute_path" location="../lab00_javadoc_yourgithubid/javadoc"/>
```

Now that we have this, we can modify our javadoc target as follows:

Before:

```xml
<target name="javadoc" depends="compile" description="generate javadoc">
    <delete>
      <fileset dir="javadoc" />
    </delete>
    <javadoc destdir="javadoc">
      <fileset dir="src" >
	<include name="*.java"/>
      </fileset>
      <classpath refid="project.class.path" />
      <link href="http://docs.oracle.com/javase/8/docs/api/" />          
    </javadoc>
    <echo>
      javadoc written to file://${javadoc_absolute_path}/index.html
    </echo> 
  </target>
```

We'll add one line to the `echo` task, and then some additional lines after it.  The rest remains the same.

After: 

``` xml
<target name="javadoc" depends="compile" description="generate javadoc">
    <delete>
      <fileset dir="javadoc" />
    </delete>
    <javadoc destdir="javadoc">
      <fileset dir="src" >
	      <include name="*.java"/>
      </fileset>
      <classpath refid="project.class.path" />
      <link href="http://docs.oracle.com/javase/8/docs/api/" />          
    </javadoc>
    <echo>
      javadoc written to file://${javadoc_absolute_path}/index.html
      copying to ${public_javadoc_absolute_path}/index.html
    </echo> 
    <delete>
      <fileset dir="public_javadoc_absolute_path" />
    </delete>
    <copy todir="${public_javadoc_absolute_path}">
       <fileset dir="javadoc" />
     </copy>
    <echo>
      javadoc copied to ${public_javadoc_absolute_path}/index.html
      TO PUBLISH: cd into that repo, then git commit -am "update javadoc"; git push origin gh-pages
    </echo> 
  </target>
```
