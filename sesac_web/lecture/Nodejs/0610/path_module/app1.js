const path = require( 'path' );

// console.log(path.join( 'a', 'b', 'index.html' ));
// console.log(path.join( '/a', 'b', 'index.html' ));
// console.log(path.join( '/a', 'b', '../index.html') );
// console.log(path.join(__dirname, 'data.json'));

//join , resolve 의 차이점

console.log(path.join( 'a', 'b', 'c', 'd', 'e', 'index.html' ));
console.log(path.resolve( 'a', 'b', 'c', 'd', 'e', 'index.html' ));