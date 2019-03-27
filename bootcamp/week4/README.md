# React & JWTs

Time to refresh your memory of JWTs! We're not going to spend time on the server-side implementation of them (since you've already done that in the Node & APIs section), but do need to discuss how to handle them once the server gives our client a token.

## Where should we store it?

We can't just store the token in the JavaScript runtime's memory. What if the page is refreshed? We'd lose the token and need to go back to the server, tail between our legs, and ask for another.

Luckily, the browser gives us a more robust container to persist data that we don't want to lose following a refresh:

* `[localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Local_storage)`

Hopefully after reading through the documentation, you'll agree that local storage makes sense as a container for our JWT. Assuming we can convince our server to give us one, storing it is as simple as:

```
localStorage.setItem('token', someTokenFromServer);
```

Setting your token in `localStorage` is akin to `logging in`, since we can always reach into that container and send the token as part of another request to the server. Logging out, then, is pretty simple:

```
localStorage.removeItem('token');
```

## How should we use it?

Remember, tokens need to be sent along with any HTTP request in order for us to retrieve server-side resources that are otherwise protected. That means we need to send the token along whenever we make a `fetch` request.

You can send it as part of a query string, in the HTTP body, or as part of the requests header, which is pretty common:

```
const headers = { 'Authorization': `Bearer ${token}` }
```

That `Bearer` keyword is required when you're pinning the token to your `Authorization` header.

