# Instructions

This file is an extension of the [HOW](https://github.com/Lazytangent/thunks#how)
section found in the [README](https://github.com/Lazytangent/thunks#readme) of
this repo.

## Planning and Thoughts

### WHY THUNKS? 

In general, you could do `fetch` calls from your React components and just
render that data received from that call within your component. Straightforward
and to the point, right? Sure, but what if you need that same data somewhere
else? Or what if you need it again because your user comes back to this page in
a few seconds? And that list can go on.

To centralize the data and keep the flow of data moving only in one direction,
we utilize thunks to apply data we've received from outside our frontend React
application into our components in said application.

While we could do the data fetch in our component and then dispatch and action
creator from our component, we'd still end up repeating that fetch code in,
possibly, a number of places. With thunks, we can move that logic somewhere
else, and just dispatch the thunk creator from our component instead. This
allows for cleaner, DRY-er code while also separating our concerns, making it
easier to test and ensure our code, and in turn, our application works.

In this lecture, we will:

1. Install the `redux-thunk` middleware.
2. Import the `redux-thunk` middleware
3. Add it to our store as a middleware function
4. Take a look at the structure of a Thunk Creator in the `store/card.js` file
5. Change the import of the Action Creator to our Thunk Creator in `App.js`
6. Change all instances of the Action Creator in `App.js` to our Thunk Creator
7. Let's move all the logic that was in `App.js` with the action creator into
   the Thunk Creator
8. Test it. Did it break?
9. Let's now rewrite the Thunk Creator with `fetch` and have it actually do
   thunk things.
