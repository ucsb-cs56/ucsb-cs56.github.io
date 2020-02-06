# How to set up Google OAuth

1. Navigate to <https://developers.google.com/identity/sign-in/web/sign-in> to create a Google OAuth Application.
    - Set the *Authorized Redirect URI* to: `http://localhost:8080/login/oauth2/code/google`
2. Add the following items to your `localhost.json` file, filling out the `client-id` and `client-secret` with the values from 
your Google OAuth application:
```
"spring.security.oauth2.client.registration.google.client-id":"ENTER-GOOGLE-ID",
"spring.security.oauth2.client.registration.google.client-secret":"ENTER-GOOGLE-SECRET"
```
3. Run `source env.sh` to update your environment.
4. Run `mvn -P localhost spring-boot:run` and see that your application is now configured to support Google OAuth!.
