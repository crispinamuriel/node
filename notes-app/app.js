const chalk = require('chalk');
const getNotes = require('./notes.js');
const yargs = require('yargs');

//Customize yargs version
yargs.version('1.1.0');

//add, remove, read, list  (our notes)  help options for each, I want options so i can pass in data.
//yargs.command has an options object that we pass into command function that will customize how the command should work.. command add? read? what?
//Create add command
yargs.command({
  command: 'add',
  description: 'Add a new note',
  handler: function() {
    console.log('Adding a new note');
  }
});
//

console.log(yargs.argv);


// const command = process.argv[2];
// const note = process.argv[3].slice(8);

// if (command === 'add') console.log(`Note added: ${note}`);
// if (command === 'remove') console.log(`Note removed: ${note}`);
// console.log(process.argv); //an array that contains all of the arugments provided via CLI.

//CLI API LOL XD
//node app.js add --title="This is my title"
//This command is not parsed we have to manually parse this string to get our parsed title.



