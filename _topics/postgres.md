---
topic: "Postgres"
desc: "An implementation of an SQL relational database, available on Heroku"
---

Postgres is a particular implementation of an SQL-based relational database.

It is available on the free tier of Heroku, which is why we tend to use it for our database applications in this course.

This article isn't (yet) a complete introduction to Postgres; instead it's a collection of tips and notes that we've found useful in dealing
with Postgres databases on Heroku, and with Spring Boot Java webapps.

# Postgres Heroku tips

On the free tier of Heroku, you are permitted only up to 10,000 rows total across *all tables* in your database.

You can monitor how close you are getting with:

```
heroku pg:info --app APP
```

# Dumping a backup of the database to a file

The postgres command to dump a database is documented here: <https://www.postgresql.org/docs/9.1/backup-dump.html>

