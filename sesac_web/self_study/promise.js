function iAmPromise(flag){
    return new Promise( function(resolve, reject){
        if(flag){
            resolve('then에 연결됨'); // flag - true
        }else{
            reject('catch에 연결됨'); // flag - false
        }
    })
}
iAmPromise(false)
    .then((result)=>{
        console.log(result);
    })
    .catch((result)=>{
        console.log(result);
    });