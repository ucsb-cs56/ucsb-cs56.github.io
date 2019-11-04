---
topic: "Spring Boot: Tutorials"
desc: "Online resources for learning Spring Boot"
---

# `Baeldung.com`

The site [Baeldung.com](https://baeldung.com) has many tutorials related to Spring and Spring Boot.

Many of these have their source code in one giant repo that can be found here:

* <https://github.com/eugenp/tutorials>

However, beware!   There are a few things you should know about that repo.

It may appear that each of the subdirectories has stand-alone code for a single tutorial.  That's not strictly true.
There are some things that the code in each of those subdirectories depends on that are in the giant mega-repo.
   
So, it isn't as simple as just copying that one directory into another and expecting the code to work.
   
So, what do you need?

In addition to the subdirectory, e.g. `spring-boot-crud` for example, you need these files:

* The `pom.xml` from the top level directory.  This contains a `<parent>` that is referred to by many of the other `pom.xml`
  files
  
* You may need a directory such as `parent-boot-2`, in its entirety, if that `pom.xml` of the subdirectory that you are using (e.g. `spring-boot-crud`)
  refers to a `<parent>` element in that directory.  
   
  For example, the `pom.xml` in `spring-boot-crud` has this `<parent>` element:
  
  ```xml
   <parent>
        <artifactId>parent-boot-2</artifactId>
        <groupId>com.baeldung</groupId>
        <version>0.0.1-SNAPSHOT</version>
        <relativePath>../parent-boot-2</relativePath>
    </parent>
  ```
  
  That refers to `../parent-boot-2`, so you need that entire subdirectory inside your repo, as a sibling of `spring-boot-crud`.
  
  But wait, there's more...
