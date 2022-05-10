
// $ node plainJSsamples/argsWithMinimist.js --name=Steve --age=30

const args = require('minimist')(process.argv);

console.log(args);