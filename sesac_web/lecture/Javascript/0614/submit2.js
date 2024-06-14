function call(name, cb) {

    return new Promise ((res,rej)=>{
        setTimeout(function() {
            console.log(name);
            cb(name);
        }, 1000);
        res();
    })
}

function back(cb) {
    return new Promise((res,rej)=>{
        setTimeout(function() {
            console.log('back');
            cb('back');
            }, 1000)
        res();
    })
}

function hell(cb) {
    return new Promise ((res, rej)=>{
        setTimeout(function() {
            cb('callback hell');
        }, 1000);
        res();
    })
}

call('kim', function (name) {
    console.log(name + '반가워');
    back(function (txt) {
        console.log(txt + '을 실행했구나');
        hell(function (message) {
            console.log('여기는' + message);
        });
    });
});