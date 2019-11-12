---
topic: "Spring Boot: Postgres"
desc: "Using Spring Boot with Postgres"
category_prefix: "Spring Boot: "
indent: true
---

# What is Postgres

There are many SQL based database systems.   *Postgres* is one particular implementation (MySQL, SQLite, and Oracle, being three others, with H2 being a commonly used
"in memory" only database.)

# Why use Postgres?

The main reason we prefer Postgres in CMPSC 56 is that it comes for free with the free tier of Heroku, and is automatically provisioned.

No other database system comes in the free tier and is so easy to provision.

# What are Hibernate, JPA, JDBC

Hibernate, JPA and JDBC are parts of the "middleware" that connect your Spring Boot application to 
a relational database.   A deeper discussion is beyond the scope of this short article, but is is helpful
to at least have that context, so that if/when you run into problems, you are aware that searches
that include these keywords may be relevant.

# Postgres Spring Boot Tutorials

* <https://dzone.com/articles/bounty-spring-boot-and-postgresql-database>
* <http://blog.michalszalkowski.com/java/spring-boot-switch-from-h2-to-postgresql/>




# Disabling contexutal LOB exception

The following error sometimes occurs when using relational databases with Hibernate.

```
Disabling contextual LOB creation as createClob() method threw error : 
java.lang.reflect.InvocationTargetException
```

The following article explains that this error is usually harmless, and how to supress the exception message by
a line of configuration in your `applicaion.properties`:

* <https://stackoverflow.com/questions/4588755/disabling-contextual-lob-creation-as-createclob-method-threw-error>
