console.log('!');

function dynamicSignIn(){

  const formData = new FormData();
  const fileInput = document.querySelector('#userImage');
  console.log(formData);
  formData.append('thumbnail', fileInput.files[0]);

  axios({
    method:'post',
    url: '/fileSend',
    data : formData,
    headers:{
      'content-type' : 'multipart/form-dat',
    }
  }).then(function(res){
    console.log(res);
    console.log(res.data);
    document.querySelector('#userInfo-image').src=`/static/uploads/${res.data.files}`;
    document.querySelector('#userInfo-pw').textContent=`비밀번호 : ${fileInput.userpw}`;
    document.querySelector('#userInfo-name').src=`이름 : ${res.data.name}`;
    document.querySelector('#userInfo-age').src=`나이 : ${res.data.age}`;
  })
}