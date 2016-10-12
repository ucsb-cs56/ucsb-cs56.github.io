---
topic: "javadoc: publishing to github pages from a public repo"
desc: "step-by-step instructions"
indent: true
---

This workflow is used when you want to publish JavaDoc from a public repository. This will be the case when you are working on your legacy code projects, but it is NOT the case when working on your labs because those repositories are PRIVATE.

If you have already been through the steps of [publishing to github pages from a private repo](https://ucsb-cs56-pconrad.github.io/topics/javadoc_publishing_to_github_pages_from_private_repo/), these instructions should seem familiar and, hopefully, simpler. If not, don't worry! You aren't missing anything.

# Before Beginning

Move to the top directory of your repository, and make sure you are on the correct branch. This is likely `master`, but if you are working on a legacy project, you may have your own development branch. In any case, you should NOT be on the `gh-pages` branch. To check which branch you are currently working on, you can run
```
git branch
```
This will pop up a list of branches, with the one you are currently on highlighted. To switch branches, run
```
git checkout <branch name>
```

# Step 1: Modify or Create the Ant JavaDoc Target

Open the `build.xml` file in your favorite text editor. Then find the javadoc target, which should start with something like:
```
<target name="javadoc"  depends="compile"
```
If there is no javadoc target, you will be creating it now! If there is, we need to make sure that it is ONLY compiling the javadoc into a the `javadoc` folder and not trying to copy it somewhere else (as in [publishing to github pages from a private repo](https://ucsb-cs56-pconrad.github.io/topics/javadoc_publishing_to_github_pages_from_private_repo/)).

Since we no longer want to copy the javadoc files to another directory, we can remove all references to creating and copying the javadoc directory, including the XML property `public_javadoc_absolute_path`. However, we want to keep the property called `javadoc_absolute_path`. Once you are finished, the javadoc target should look like this:

```xml
<property name="javadoc_absolute_path" location="javadoc"/>

<target name="javadoc" depends="compile" description="generate javadoc">
  <delete>
    <fileset dir="javadoc" />
  </delete>
  <javadoc destdir="javadoc">
    <fileset dir="src" >
      <include name="*.java"/>
    </fileset>
    <classpath refid="project.class.path" />
    <link href="https://docs.oracle.com/javase/8/docs/api/" />          
  </javadoc>
  <echo>
    javadoc written to file://${javadoc_absolute_path}/index.html
  </echo> 
</target>
```

# Step 2: Modify .gitignore to Ignore the JavaDoc Directory
