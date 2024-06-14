
function changeBodyColor (color) {
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            document.body.style.backgroundColor= color;
            if (color){
                res();
            }else{
                rej();
            }
        }, 1000)
    })
} 

async function exec(){
    try{
        await changeBodyColor('blue');
        await changeBodyColor('green');
        await changeBodyColor('yellow');
        await changeBodyColor('orange');
        await changeBodyColor('red');
    }catch(err){
        console.log(err + '색상이 선택되지 않았습니다.');
    }
}
exec();