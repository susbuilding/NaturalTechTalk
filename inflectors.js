let natural = require('natural');

var nounInflector = new natural.NounInflector();

console.log(nounInflector.pluralize("goose"));
console.log(nounInflector.singularize("radii"));
console.log(nounInflector.pluralize("octopus"));
console.log(nounInflector.pluralize("fish"));
