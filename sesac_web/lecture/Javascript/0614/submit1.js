function call(name) {

    return new Promise ((res,rej)=>{
        setTimeout(function() {
            console.log(name);
        }, 1000);
        res(name);
    })
}
function back() {
    return new Promise((res,rej)=>{
        setTimeout(function() {
            console.log('back');
            }, 1000)
        res('back');
    })
}

function hell() {
    return new Promise ((res, rej)=>{
        setTimeout(function() {
        }, 1000);
        res('callback hell');
    })
}

async function exec(){
    await call('kim');
    await back();
    await hell();
}