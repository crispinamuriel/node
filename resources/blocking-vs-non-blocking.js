//blocking I/O

const getUserSync = require('./src/getUserSync'); //require function from node.js is a way to get functionality from another file.

const userOne = getUserSync(1); //pass number 1 to f(n) function will call database, get user profile for user whos id is (1)
//What is happening? An Input/Output operation, (async) Initiating the request, waiting for database to fetch data and send it back to our node app.
console.log(userOne);

const userTwo = getUserSync(2);
console.log(userTwo);
//while these i/o operations are happening our event loop is clogged. Nothing can go through our single thread. We're waiting!
const sum = 1 + 33;
console.log(sum);


//non-blockin I/O //non blocking example is twice as fast because we can overlap the part of the app that takes the longest, while we are waiting for an i/o non blocking we will be working with non-blocking models. Allows our node app to process multiple requests at the exact same time for different users. (ex: fetching data for user1, while processing a request for user2 at the exact sametime);

const getUser = require('./src/getUser');

getUser(1, (user) => {   //callback pattern, sending a callback to the function as a second argument.
  console.log(user);
});

getUser(2, (user) => {
  console.log(user);
});

const sum = 1 + 33; // no need to wait for a response before calculating and printing the sum
console.log(sum);
