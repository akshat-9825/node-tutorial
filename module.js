const { items, singlePerson } = require("./names"); // This also prints the console.log() function inside names.js

console.log(__dirname);

// require("./names"); This prints the console.log() function inside the names.js

const sayHi = (name) => console.log(`hello ${name}`);

sayHi(items);
console.log(singlePerson);
