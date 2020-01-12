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
