---
topic: "Maven: Managing Versions"
desc: "How do you get the right version for dependencies, plugins, etc."
indent: true
category_prefix: "Maven: "
---

In a Maven `pom.xml`, the author specifies dependencies such as:

```
```

And plugins such as:

```
```

These typically have version numbers specified.  How do you know which version to use?

Here are two ways:

# Getting Versions from Maven Central

At this site, you can search for dependencies and plugins and find the various versions, along with the Maven xml element to copy past and
put into your `pom.xml`:

* <https://mvnrepository.com/repos/central>

# A plugin to help manage dependency versions

This plugin helps manage dependency versions:

* <https://www.mojohaus.org/versions-maven-plugin/usage.html>

This Stack Overflow answer offers one example of how to use it:

* <https://stackoverflow.com/a/19324681>
