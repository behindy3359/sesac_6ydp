const os = require('os');
// console.log(os);
console.log(os.totalmem());


let totalmemory = os.totalmem();
let freememory = os.freemem();

console.log(`totalmemory : ${totalmemory}`);
console.log(`freememory : ${freememory}`);