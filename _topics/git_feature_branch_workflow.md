---
topic: "git: feature branch workflow"
desc: "One branch per feature/issue/story"
indent: true
---

This article describes a more advanced workflow than the [Git: Basic Workflow](/topics/git_basic_workflow/) where all work is done on the master branch.

You should be completely comfortable with the [Git: Basic Workflow](/topics/git_basic_workflow/) before diving into this more advanced topic.

# A workflow based on feature branches

In most "real-world" uses of git/github (e.g. at software companies), rather than working on the `master` branch being the common case,
it is far more often the case that you *never, ever, ever work directly on master!!!*

Instead, each time you start a new story, issue, feature or bug fix, you start by creating a "feature branch".

That looks like this:

```
$ git checkout -b issue43
Switched to a new branch 'issue42'
$
```

This creates a new branch, as an alternative to the `master` branch.  You would, moving forward, use:

* `git push origin issue42` rather than `git push origin master`
* `git pull origin issue42` rather than `git pull origin master`

When you are finished with the story, feature, bug fix, etc. you would do a pull request from the feature branch (e.g. `issue42`)
to the `master` branch.  This could be a pull request within the same repository, or it could be a pull request from one fork of a repo to
another.

# How this workflow can be used for work on legacy code projects

TODO: Fill this in
