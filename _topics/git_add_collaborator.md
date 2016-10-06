---
topic: "git: adding collaborators"
desc: "giving individual users access to a private repo"
indent: true
---


The following instructions can be used to provide write access to a shared repo.  These instructions are
written using  a private repo as an example, but they work equally well on public repos.

Here's how, described as both a list of steps, and a list of images.  In this example:

* The first pair partner is Alex Triton, github id `atriton`
* The second pair partner is Chris La Jolla, github id `chrislajolla`
* Alex has create a repo called spis16-lab02-Alex-Chris under the github organization ucsd-cse-spis-2016 and wants to give Chris access to this repo as well.

These are the steps Alex should take to invite Chris as a collaborator:

1. Navigate to the repo page, and click on <b>Settings</b> for the repo

    ![spis16-lab02-Alex-Chris-repo-page-50.png](spis16-lab02-Alex-Chris-repo-page-click-Settings-50.png){: title="Click settings on repo page" }

1. Select <b>Collaborators &amp; Teams</b> from the menu at the left side of the page.

    ![spis16-lab02-Alex-Chris-repo-settings-50.png](spis16-lab02-Alex-Chris-repo-settings-click-collaborators-50.png){: title="click 'Collaborators &amp; teams' " }

1. On the lower half of the page, in the "Add Collaborator" section, start typing in the github id
    of the pair partner that you want to add as a collaborator.

    Click the github id when it appears.  BE SURE IT IS ACCURATE.    Otherwise, you'll be sharing your repo with
    some perfect stranger.  That would be very bad.  So don't do that please.

    Note: in some browsers, you have to *actually click* on the name that pops up&mdash;it is not
    sufficient to simply type in the full name.  Your experience may vary.

    ![start-typing-chrislajol-then-name-will-pop-up-click-on-it-50.png](start-typing-chrislajol-then-name-will-pop-up-click-on-it-50.png){: title="Start typing pair partners name then click on it" }


1.  When inviting a user to be a collaborator, the default permission
    level is <b>Write</b>.  If you are working with a pair partner,
    you should probably change that to <b>Admin</b>.  

    The following
    image indicates how to do that.  If you accidentally omit this
    step, then the user you are inviting will not have access to the
    <b>Settings<b> menu for the repo.  (If that happens, there is
    information later on this page about how to fix that.)

    ![change-permission-level-to-admin-50.png](change-permission-level-to-admin-50.png){: title="change-permission-level-to-admin-50.png" }


# Accepting the invitation to Collaborate

Suppose Alex has created the repo using the `atriton` account, and has invited `chrislajolla` as a collaborator.

This is not sufficient for Chris to immediately have access.   Chris must first *accept* the invitation.

Since the repo in question is a private repo, it will not automatically appear as a repo
that Chris has access to under Chris' github account.

Instead, when Alex invited Chris as a collaborator, an email similar to the following 
was generated and send to whatever email Chris verified for Chris' github account.
The email contains a link that Chris can click to review the invitation. 

![atriton-invites-chrislajolla-to-lab02-repo-50.png](atriton-invites-chrislajolla-to-lab02-repo-50.png){: title="atriton-invites-chrislajolla-to-lab02-repo-50.png" }

At that URL, Chris should see something like this, where Chris can click to accept the invitation.

![atriton-invited-you-to-collaborate-30.png](atriton-invited-you-to-collaborate-30.png){: title="atriton-invited-you-to-collaborate-30.png" }

Chris should be redirected to the repo page, with the level of access to the repo authorized
by Alex as shown in the image below.

Note that if Alex provided <b>Admin</b> access, Chris will have full privileges over
the repo.  If Alex only provided <b>Write</b> access (as in the example shown below), Chris's
repo page will not have the <b>Setting</b> page.    To fix that, see the section "Changing access levels for collaborators", later on this page.

![you-now-have-access-to-the-spis16-lab02-Alex-Chris-repo-50.png](you-now-have-access-to-the-spis16-lab02-Alex-Chris-repo-50.png){: title="you-now-have-access-to-the-spis16-lab02-Alex-Chris-repo-50.png" }

# What if Chris doesn't get an invitation email?

It isn't strictly necessary for Chris to find the invitation email.
Instead, Alex can simply provide Chris with invitation url.

There is a place to copy the invitation url on the repo's settings page, 
under <b>Collaborators and Teams<b>, as shown here:

![copy-invite-link-30.png](copy-invite-link-30.png){: title="Copy invitation link" }

# Changing Access Levels for Collaborators

Invitations can be issued for different levels of access.  

* <b>Read</b> access means "Read Only".  It signifies that the contents of a private repo can be read, but not changed.
   In SPIS, we use this for the FEEDBACK repos: Mentors and Instructors have write
   access to these repos, and we invite each student or pair with 

* <b>Write</b> access means that the user can write to the repo, but cannot change the 
   things on the settings page.  This means, among other things, that the user cannot:
    * Change the name of the repo
    * Complete delete the repo
    * Add other collaborators to the repo

* <b>Admin</b> access is the highest level of access with which a user can be invited.
    It gives the same kind of access as the original person that sent the invitation.
    You have to have Admin access in order to invite another user to be a collaborator.

If you've been invited to a repo, you can check your level of access:

* If you have a settings menu on the repo's page, you have admin access
* If you don't have a settings menu, you either have read, or write access.  You could try
    editing the README.md to see if you can add a single space.  

    If you can, then
    you have write access.  

    If instead, when you try to do that, it tries to create a 
    "fork" of the repo, then you have read only access.    

Here are some examples of what it looks like to invite a user with various kinds of access.
These examples are found
on the repository settings page under <b>Collaborators &amp; teams</b>.

Here, `atriton` has invited `chrislajolla` with admin access:

![atriton-has-invited-chrislajolla-with-admin-40.png](atriton-has-invited-chrislajolla-with-admin-40.png){: title="atriton-has-invited-chrislajolla-with-admin-40.png" }

By contrast, here, `atriton` has invited `chrislajolla` with write access:

![atriton-has-invited-chrislajolla-with-write-access-40.png](atriton-has-invited-chrislajolla-with-write-access-40.png){: title="atriton-has-invited-chrislajolla-with-write-access-40.png" }

Here, `atriton` has a settings menu, indicating that `atriton` has admin access.

![atriton-has-settings-menu-40.png](atriton-has-settings-menu-40.png){: title="atriton-has-settings-menu-40.png" }

If `chrislajolla` has already accepted an invitation from `atriton` and has only <b>Write</b> access, `atriton` can change that by simply selecting a different level of access on the <b>Collaborators &amp; teams</b> tab on the repo settings page as shown below:

![change-chrislajolla-to-have-admin-access-40.png](change-chrislajolla-to-have-admin-access-40.png){: title="change-chrislajolla-to-have-admin-access-40.png" }







