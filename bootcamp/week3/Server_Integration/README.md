Often times we'll want to interact with a server, especially if we want our data to persist via a database.

You should be fairly comfortable setting up a simple `Express` server to deliver JSON data. However, since we're using `create-react-app`, which gives us a separate development server, how are we supposed to integrate the two?

We'll take advantage of the tool's built-in `proxy` configuration, in which our React app will have API calls redirected to the right server.
