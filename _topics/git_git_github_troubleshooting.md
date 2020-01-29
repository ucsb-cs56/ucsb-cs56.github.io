---
topic: "git: git/github troubleshooting"
desc: "Various problems and their solution"
indent: true
---

# `X11 forwarding request failed on channel 0`

If you run into issues with `X11 Forwarding` while pushing/pulling from GitHub, you can try the following:

```
echo $'Host github.com\n    ForwardX11 no' >> ~/.ssh/config
```

This turns off X11 forwarding to `github.com` ssh connections.

(H/T to Scott Chow, F19 TA for this tip)


# Help! I committed changes to my local master when they should have been on a feature branch

Suppose you intended to create a feature branch called `cg-myFeature` and put three commits on it.

But you forgot!  You put those three commits on the `master` branch instead!  And you do NOT want to push those
directly to `master`&mdash;instead, you want to:

* put those commits on the `gc-myFeature` branch, and 
* get your local `master` branch back in sync with the `master` of the `origin`.  

Why? 

* Because you want to do a **pull request** for your new commits.  
* You do **not** want them to just go to `master` directy.

What can you do?

The important thing to rememebr is what a branch **is**.  

* A branch is nothing more, and nothing less, than a pointer to a commit.

How? 

First, do a  `git status` followed by a `git log` command at the shell prompt in your local repo.   


Suppose that looks like this:

```

$ git status
On branch master
Your branch and 'origin/master' have diverged,
and have 2 and 4 different commits each, respectively.
  (use "git pull" to merge the remote branch into yours)
nothing to commit, working tree clean
$ git log
Author: Chris Gaucho <cgaucho@umail.ucsb.edu>
Date:   Tue Jan 28 11:33:29 2020 -0800
    cg - added file for team questions
commit 0d066b54aacd684f11642c1881a5755e25fae037
Author: Chris Gaucho <cgaucho@umail.ucsb.edu>
Date:   Tue Jan 28 11:29:31 2020 -0800
    cg - added file for qa questions
commit fd91befce9897845d996ccdb17cebeb948529368 (origin/cg-myFeature)
Author: ldelplaya <59632440+ldelplaya@users.noreply.github.com>
Date:   Tue Jan 28 11:11:54 2020 -0800
    Initial commit
$
```

