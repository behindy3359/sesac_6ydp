function changeBodyColor (color) {
  return new Promise((res,rej)=>{
    setTimeout(()=>{
      if (color){
        document.body.style.backgroundColor= color;
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
    await changeBodyColor('');
    await changeBodyColor('red');
  }catch(err){
    console.log(err + '색상이 선택되지 않았습니다.');
  }
}
exec();

// changeBodyColor('blue')
//   .then(() => changeBodyColor('green'))
//   .then(() => changeBodyColor('yellow'))
//   .then(() => changeBodyColor('orange'))
//   .then(() => changeBodyColor('red'))
//   .catch(err => {
//   console.log(err + ' 색상이 선택되지 않았습니다.');
//   });

