---
topic: "Heroku: Troubleshooting"
desc: "Solutions to common problems and errors"
category_prefix: "Heroku:"
indent: true
---

# When using `mvn heroku:deploy`: `Could not find app name: No 'heroku' remote found.` 

Symptom: You use `mvn heroku:deploy` and see:

```
[ERROR] Failed to execute goal com.heroku.sdk:heroku-maven-plugin:2.0.3:deploy 
(default-cli) on project spring-boot-github-oauth-demo01: 
Failed to deploy application: Could not find app name: No 'heroku' remote found. -> [Help 1]
```

Possible Causes, and Solutions:

* Make sure you are logged into the heroku cli
   * Solution: `heroku login`
* Make sure that the correct heroku app is defined in your `pom.xml`
   * Solution: list your apps with `heroku apps` then check the value of `<appName>` in the `heroku-maven-plugin`
         
