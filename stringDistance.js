let natural = require('natural');

let string1 = "Grace Hopper"
let string2 = "Grace Shopper"
let string3 = "Hummus"

console.log('string1 vs string2:', natural.JaroWinklerDistance(string1,string2));
console.log('string2 vs string3:', natural.JaroWinklerDistance(string2,string3));
