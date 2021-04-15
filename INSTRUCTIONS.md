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
