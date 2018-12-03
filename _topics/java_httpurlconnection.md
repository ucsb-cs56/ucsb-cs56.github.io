---
topic: "Java: HttpURLConnection"
desc: "And HttpsURLConnection; a Java object for retrieving content from a URL"
indent: true
---

If you are trying to retrieve content via 
[`HttpURLConnection`](https://docs.oracle.com/javase/8/docs/api/java/net/HttpURLConnection.html) or 
[`HttpsURLConnection`](https://docs.oracle.com/javase/8/docs/api/java/net/HttpsURLConnection.html), there is
one problem you can run into that will cause you no end of trouble, unless you know the secret trick.

Some APIs, e.g. Reddit, DuckDuckGo, and others, may allow you to retreive from a URL in a regular browser, or
using `curl` or `postman` or just about anything EXCEPT raw access through a 
Java [`HttpURLConnection`](https://docs.oracle.com/javase/8/docs/api/java/net/HttpURLConnection.html).

Note that the same problem can afflict Python code that uses the `requests` library.

You can get a 500 error, or really any number of other errors, when it seems that every other way of accessing
the URL works fine--and that your code can access other URLs with no trouble.

The issue might be the `User-Agent` header.




