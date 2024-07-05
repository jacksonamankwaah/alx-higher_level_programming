#!/usr/bin/node
/* a script that print a message depending on the argument passed */

const args = process.argv;

if (args.length <= 2) {
  console.log('No argument');
} else if (args.lenght === 3) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
