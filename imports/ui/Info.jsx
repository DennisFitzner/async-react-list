import React from 'react';
import { useFind, useSubscribe,useTracker } from 'meteor/react-meteor-data/suspense';
import { LinksCollection } from '../api/links';
import { DepsCollection } from '../api/anotherDep';

export const Info = () => {
  // this line I don't get:
  useSubscribe('links');
  const linklist = useTracker("linklist", async (c) => {
    //next to lines are just copied out of the documentation, they are not needed for this example
    const placeholders = await fetch('https://jsonplaceholder.typicode.com/todos').then(x => x.json());
    console.log(placeholders);
    //another reactive var
    await Tracker.withComputation(c, () =>DepsCollection.find({}).fetchAsync())
    return await Tracker.withComputation(c, () => LinksCollection.find({}).fetchAsync())
  })
  // I add the date for simple reactivity check
  const now = new Date().toTimeString()

  return (
    <div>
      <h2>Learn Meteor!</h2>
      <ul>{linklist.map(
        link => <li key={link._id}>
          <a href={link.url} target="_blank">{link.title}, {now}</a>
        </li>
      )}</ul>
    </div>
  );
};
