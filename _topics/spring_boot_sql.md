---
topic: "Spring Boot: SQL"
desc: "Working with SQL and Databases in Spring Boot"
category_prefix: "Spring Boot: "
indent: true
---

# Debugging Help

When working with SQL-based databases in Spring Boot, it is helpful to put the following line in your `application.properties`:

```
logging.level.org.hibernate.SQL=debug
```

This will output the SQL statements to the log so that you can see what is going on.  This is particularly useful when the 
various middleware layers are doing the SQL statements for you, and for example, you aren't even entirely sure what the names of the 
SQL tables are.


