---
topic: "CSIL: remote host id changed"
desc: "The scary REMOTE HOST ID CHANGED message with mention of SOMETHING NASTY"
indent: true
---

From time to time, you might get a message such as this one when you try to ssh to one of the csil-xx.cs.ucsb.edu machines (where xx is 01 through 48), or to
csil.cs.ucsb.edu:

```
Phills-MacBook-Pro$ ssh pconrad@csil.cs.ucsb.edu
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
Someone could be eavesdropping on you right now (man-in-the-middle attack)!
It is also possible that a host key has just been changed.
The fingerprint for the RSA key sent by the remote host is
SHA256:LhU2YFNoHSaeYv4wEfOsWEfDAPvXnjmP1ToHzX6OQkk.
Please contact your system administrator.
Add correct host key in /Users/pconrad/.ssh/known_hosts to get rid of this message.
Offending RSA key in /Users/pconrad/.ssh/known_hosts:1
RSA host key for csil.cs.ucsb.edu has changed and you have requested strict checking.
Host key verification failed.
Phills-MacBook-Pro$ 
```

This <em>might</em> mean that evildoers are eavesdropping on your connection.  But it probably doesn't.

The more likely explanation is that someone swapped out a motherboard, or a hard drive, or rebuilt the OS, or did some other
thing that cause the randomly generated SHA256 hash for the target machine to be different that it was before, when you
were presented with this message at some time in the distant past and answered `yes`:

```
Phills-MacBook-Pro:$ ssh pconrad@csil.cs.ucsb.edu
The authenticity of host 'csil.cs.ucsb.edu (128.111.43.14)' can't be established.
ECDSA key fingerprint is SHA256:nTdjGeDyiy4RZyUT+BGzFF2Mq5koJtREiHXQVZAzENs.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added 'csil.cs.ucsb.edu,128.111.43.14' (ECDSA) to the list of known hosts.
-bash-4.3$ 
```

The fix is to do what the error message says.  Just go into the file ~/.ssh/known_hosts with 
a text editor (e.g. vim, emacs, notepad, wordpad, textedit) and remove the line in the file for `csil.cs.ucsb.edu`.

Then try connecting again.  You'll get asked whether you trust the key, and if you do, say yes. 

(If you don't trust the key, i.e if you really do beleive someone might be spying on you, you'll need to get the key by some non-electronic
means to verify it, such as armed guard or carrier pigeon.   In a highly secure application, 
such as banking or military secrets, one might actually take measures to check this.   For ordinary ssh sessions into CSIL, we
normally just "trust".)

