const steveAsObject = require('./libs/exportAsObject');

console.log(steveAsObject);

const person = require('./libs/exportAsProperty');

const { steve, alon } = person;
console.log(person, steve, alon)