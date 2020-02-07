---
topic: "Spring Boot: POST and CSRF"
desc: "If you get 403 forbidden messages when using POST"
category_prefix: "Spring Boot: "
indent: true
---

If you are trying to do a `@PostMapping` in your Spring Boot application and you are getting
the error

```
403 - Forbidden
```

The problem is likely that you didn't include this magic line in your form:

```
              <input type="hidden" th:name="${_csrf.parameterName}" th:value="${_csrf.token}" />
```

The solution is to include that magic line in your form.

The reason has to do with security.

# The explanation

TODO: Scott, put a breif explanation here
