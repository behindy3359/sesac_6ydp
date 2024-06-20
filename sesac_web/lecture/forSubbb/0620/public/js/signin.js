/** 회원가입? 을 위한 프로필사진, 회원정보를 받아옴 
 * 
 *  filedata 는 file 안에
 *  기타 폼데이터는 body 안에 담겨서 전송!
 * 
*/
function signInFunc(){
  //포장준비!
  const signInData = new FormData();
  const userForm = document.forms['register'];
  const fileInput = document.querySelector('#userImage');
  const ext = fileInput.files[0].name.slice(fileInput.files[0].name.lastIndexOf('.'));
  let newFileName = userForm.userId.value + ext;


  // 전송할 데이터 욱여넣기
  signInData.append('userImage', fileInput.files[0], newFileName);
  signInData.append('id', userForm.userId.value);
  signInData.append('name', userForm.userName.value);
  signInData.append('password', userForm.userPw.value);
  signInData.append('age', userForm.userAge.value);


  //주고받는건 여기에서!
  axios({
    method: 'post',
    url: '/signIn',
    data: signInData,
  }).then((res) => {
    console.log(res.data.file);
    document.querySelector('#result-userImage').src = `/skipUrl/${res.data.file.originalname}`;
    document.querySelector('#result-userId').innerText = `${res.data.user.id}님 환영합니다!`;
    document.querySelector('#result-userPw').innerText = `비밀번호 : ${res.data.user.password}`;
    document.querySelector('#result-userName').innerText = `이름 : ${res.data.user.name}`;
    document.querySelector('#result-userAge').innerText = `나이 : ${res.data.user.age}`;
  }).catch((error) => {
    console.error('Error:', error);
  });
}

