//Where your app starts
console.log("Starting app.");

//Import FileSystem module and store in const fs
const fs = require('fs');
const _ = require('lodash');
const yargs = require("yargs");

//Loading our custom notes module (relative path)
const notes = require('./notes.js');

const argv = yargs.argv;
//get CLI arguments passed in
//var command = process.argv[2];

var command = argv._[0];
console.log('Command: ', command);
console.log('Process', process.argv);
console.log('Yargs', argv);

if (command === 'add') {
    //console.log('Adding new Note');
    notes.addNote(argv.title, argv.body)
} else if (command === 'list') {
    //console.log('Listing all notes');
    notes.getAll();
} else if (command === 'read') {
    //console.log('reading note');
    notes.getNote(argv.title);
} else if (command === 'remove') {
    //console.log('Removing note');
    notes.removeNote(argv.title);
} else {
    console.log('COmmand not recognized');
}