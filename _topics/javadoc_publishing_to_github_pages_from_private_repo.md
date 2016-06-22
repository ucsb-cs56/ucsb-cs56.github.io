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

