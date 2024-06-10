//
//  path.join() : 여러 인자를 넣으면 하나의 경로로 합쳐준다.
//  path.resolve() : path, join() 비슷하지만 약간의 차이
//  path.parse() : 파일 경로를 root,dir, base,ext, name 구분
//  path.format() : path. parse()힌 객체를 파일 경로로 합친다.
// 
const path = require( 'path' );

// console.log( abc );
console.log( path.basename( __dirname ));
console.log( path.basename( __filename ));


console.log( path.join('a','b', 'index.html' ));
let dir = '/home/user/dir/file.txt';
let pathname = path.parse(dir);

console.log("--------------------------------------");
console.log(pathname);
console.log("--------------------------------------");
console.log(path.extname(dir));
console.log(path.basename(dir));