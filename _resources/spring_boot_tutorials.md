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

* You may find that the `pom.xml` in, for example, `../parent-boot-2`, refers to a `<parent>` element such as this one:

  ```
    <parent>
        <groupId>com.baeldung</groupId>
        <artifactId>parent-modules</artifactId>
        <version>1.0.0-SNAPSHOT</version>
    </parent>
   ```
    
   That one happens to be defined in the `pom.xml` at the top level of the repo.  So you need that pom.xml, plus the 
   two subdirectories: the tutorial you are interested in, and the one that defines it's parent.
   
   But there is still more!
   
* You may need some other files.  I found that I needed these for `spring-boot-crud`

  * The entire `custom-pmd` subdirectory
  * The file `custom-pmd-0.0.1.jar` (this one you may have to commit with `git add -f` since `.jar` is in the `.gitignore` or should be.)
  * `baeldung-pmd-rules.xml`.
  
  What is this `pmd` stuff?  Glad you asked.  It appears to be a source code analyzer, as explained in [this article on PMD](https://www.baeldung.com/pmd).  As explained there, "PMD is a source code analyzer to find common programming flaws like unused variables, empty catch blocks, unnecessary object creation, and so forth." My guess is that the `custom-pmd-0.0.1.jar` is enforcing some custom source control
  rules that Baeldung.com has for their organization's code.


# mkyong

There is another giant repo of spring boot tutorials here:

* <https://github.com/mkyong/spring-boot.git>

It has the same property as the baedlung.com tutorials, that all of them are in one giant repo.

I was successful at running the [spring-data-jpa-postgres tutorial](https://www.mkyong.com/spring-boot/spring-boot-spring-data-jpa-postgresql/) described here on a Mac running Postgres by making this change in `application.properties`:

Comment out:

```
#spring.datasource.url=jdbc:postgresql://192.168.1.4:5432/postgres
```

Add:

```
spring.datasource.url=jdbc:postgresql://localhost:5432/postgres
```
