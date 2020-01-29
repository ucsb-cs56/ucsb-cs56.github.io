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

Suppose you intended to create a feature branch called `gc-myFeature` and put three commits on it.

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

First, do a `git log` command.  That will show you a list of all the commits.

