# async-react-list
## What it is
It's the basic Meteor Prototype project, listing links. I rewrote it to use useTracker().
I also added a second collection and used both collection within useTracker to check if changes to both of them trigger a rerendering of the list. To check if the list is rerendered I added a timestamp.

To change the collection I used Studio 3T.

Tbh I don't know it works as intended, my head is fried.

Further reading:

https://blog.meteor.com/making-promises-suspendable-a769bfebc1bc
https://blog.meteor.com/new-suspense-hooks-for-meteor-5391570b3007

and of course the docs:
https://github.com/meteor/react-packages/tree/master/packages/react-meteor-data#suspenseusetracker
