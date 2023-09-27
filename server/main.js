import { Meteor } from 'meteor/meteor';
import { LinksCollection } from '/imports/api/links';
import { DepsCollection } from '/imports/api/anotherDep';

async function insertLink({ title, url }) {
  await LinksCollection.insertAsync({ title, url, createdAt: new Date() });
}

async function insertDeps({ title, number }) {
  await DepsCollection.insertAsync({ title, number});
}

Meteor.startup(async () => {
  // If the Links collection is empty, add some data.
  if (await LinksCollection.find().countAsync() === 0) {
    await insertLink({
      title: 'Do the Tutorial',
      url: 'https://www.meteor.com/tutorials/react/creating-an-app',
    });

    await insertLink({
      title: 'Follow the Guide',
      url: 'https://guide.meteor.com',
    });

    await insertLink({
      title: 'Read the Docs',
      url: 'https://docs.meteor.com',
    });

    await insertLink({
      title: 'Discussions',
      url: 'https://forums.meteor.com',
    });
  }
  if (await DepsCollection.find().countAsync() === 0) {
    await insertDeps({
      title: 'Hello world',
      number: 1,
    });
  }

  // We publish the entire Links collection to all clients.
  // In order to be fetched in real-time to the clients
  Meteor.publish("links", function () {
    return LinksCollection.find();
  });

  Meteor.publish("deps", function () {
    return DepsCollection.find();
  });
});
