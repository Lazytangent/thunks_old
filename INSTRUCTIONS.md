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

### Steps

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

## 1. Install `redux-thunk`

It can't get easier than this!

```sh
npm install redux-thunk
```

## 2. Import `redux-thunk`

This is pretty easy, too.

```js
// src/store/index.js
// ... other imports
import thunk from 'redux-thunk';

// ... other code
```

## 3. Add it to our store as a middleware function

```js
// ... imports and reducer code

let enhancer;

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}
```

## 4. Take a look of the Thunk Creator in `store/card.js`

Currently, the Thunk Creator in question looks like this:
```js
export const getRandomCard = () => (dispatch) => {
    // Can use params from first and second function
    // First is any params you need when you call the Thunk Creator
    // The second is always dispatch
    // Usually this is async if you want to fetch
    /* A Thunk Creator is a function that returns another function that 
    will eventually/hopefully dispatch an action. */
};
```

## 5. Let's change the import in `App.js`

First, the import. Right now, we have the following in `App.js`:
```js
import { setRandomCard } from './store/card';
```

We want:
```js
import { getRandomCard } from './store/card';
```

## 6. Change the dispatch to match our import

Right now, the dispatch is still dispatching the Action Creator.
```js
<button onClick={() => dispatch(setRandomCard(cards[randInt]))}>
    Get Random Card
</button>
```

Let's change it so we dispatch our Thunk Creator on the button click instead.
```js
<button onClick={() => dispatch(getRandomCard())}>
    Get Random Card
</button>
```

## 7. Move all the logic to the Thunk Creator

Now, we'll move all the things that were handling the logic of our random card
generator into our Thunk Creator to simulate the extraction of the business
logic from the rendering logic.

So these two lines will be moved into `store/card.js`:
```js
import { cards } from './cards.json';

// ... some code

const randInt = () => Math.floor(Math.random() * cards.length);
```

And in `store/card.js`, we'll have the import at the very top of the file and
the `randInt` function in our Thunk.

```js
import { cards } from './cards.json';

// ... skip some code

export const getRandomCard = () => (dispatch) => {
    const randInt = () => Math.floor(Math.random() * cards.length);
    // Also, we'll add the dispatch that we had in App.js
    dispatch(setRandomCard(cards[randInt()]));
};
```

## 8. Test it. Does it still work as intended?

Do the stuff in the browser. Is the functionality still the same?

## 9. Rewrite the Thunk Creator with `fetch`

Now, we'll integrate a `fetch` call to our Thunk.

```js
export const getRandomCard = () => async (dispatch) => {
    const res = await fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1');
    const data = await res.json();
    // const { cards: [card] } = await res.json();
    dispatch(setRandomCard(data.cards[0]));
    // dispatch(setRandomCard(card));
};
```

## 10. Good time to check if it still works

Seriously. Check it.
