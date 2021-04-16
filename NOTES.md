# Things of Note

Semi-important things to know.

## NODE_ENV

* What is it?

> There is also a built-in environment variable called `NODE_ENV`. You can read
> it from `process.env.NODE_ENV`. When you run `npm start`, it is always equal
> to `'development'`, when you run `npm test` it is always equal to `'test'`,
> and when you run `npm run build` to make a production bundle, it is always
> equal to `'production'`. **You cannot override `NODE_ENV` manually.** This
> prevents developers from accidentally deployed a slow development build to
> production.
>
> https://create-react-app.dev/docs/adding-custom-environment-variables
