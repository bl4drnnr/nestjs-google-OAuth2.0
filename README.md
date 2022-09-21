## Nest.js Google OAuth2.0 API Description

**OAuth2.0** - is an authorization framework that enables applications to obtain limited access to user accounts on an HTTP service. It works by delegating user authentication to the service that hosts a user account and authorizing third-party applications to access that user account.

OAuth defines four roles:

- **Resource Owner**: The resource owner is the user who authorizes an application to access their account. The application’s access to the user’s account is limited to the scope of the authorization granted (e.g. read or write access)
- **Client**: The client is the application that wants to access the user’s account. Before it may do so, it must be authorized by the user, and the authorization must be validated by the API.
- **Resource Server**: The resource server hosts the protected user accounts.
- **Authorization Server**: The authorization server verifies the identity of the user then issues access tokens to the application.

Sources:

[Digital ocean](https://www.digitalocean.com/community/tutorials/an-introduction-to-oauth-2)
