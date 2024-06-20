
/** 회원가입? 을 위한 프로필사진, 회원정보를 받아옴 
 * 
 *  filedata 는 file 안에
 *  기타 폼데이터는 body 안에 담겨서 전송!
 * 
*/
function signInFunc(){
  const signInData = new FormData();
  const fileInput=document.querySelector('#userImage');
  signInData.append('userImage',fileInput.files[0]);
  const userForm = document.forms['register'];
  signInData.append('id', userForm.userId.value);
  signInData.append('name', userForm.userName.value);
  signInData.append('password', userForm.userPw.value);
  signInData.append('age', userForm.userAge.value);

  axios({
    method:'post',
    url:'/signIn',
    data: signInData,
  }).then((res)=>{
    document.querySelector('#result-userImage').src=`/skipUrl/${res.data.file.filename}`;
    document.querySelector('#result-userId').innerHTML=` ${res.data.user.id}님 환영합니다!`;
    document.querySelector('#result-userPw').innerHTML=`비밀번호 : ${res.data.user.password}`;
    document.querySelector('#result-userName').innerHTML=`이름 : ${res.data.user.name}`;
    document.querySelector('#result-userAge').innerHTML=`나이 : ${res.data.user.age}`;
  })
}
