const checkbutton = document.querySelector('#exist-button');

/** 게시글 등록시 발생할 일! - from static/visitor.js : createVisitor() 함수
 * html button 태그에 onclick 함수를 적용, axios 활용해서 데이터를 서버에 전달,
 * method : 'post'
 * url : '/member'
 * data : { name , comment }
 * 응답에 있어서 서버에 데이터가 입력되면 화면의 게시글 테이블의 끝에 요소를 삽입
 * 응답에 넘어온 data 객체를 활용 
*/
function signUpFunc() {
  // console.log('click 등록 btn')
  const form = document.forms[ 'signup-form' ];
  const now = new Date();
  const formattedTime = now.toISOString().slice(0, 19).replace('T', ' '); // ISO 형식을 MySQL datetime 형식으로 변환

  axios({
      method: 'POST',
      url: '/member',
      // 회원가입 정보를 req.body에 실어서 요청을 보냄
      data: {
      uid: form.userId.value,
      uname :form.userName.value,
      upw: form.userPw.value,
      time : formattedTime,  
    }
  }).then(( res ) => {
    if(res.data){
      alert('회원가입 성공!');
      document.location.href ='/';
    }else{
      alert('이미 존재하는 아이디 입니다.');
    }
})};

function checkDuplicateUserId(){
  // console.log('click 등록 btn')
  const form = document.forms[ 'signup-form' ];
  axios({
    method: 'POST',
    url: '/membor',
    // 회원가입 정보를 req.body에 실어서 요청을 보냄
    data: {
    uid: form.userId.value,
  }
}).then(( res ) => {
  console.log(res.data);
  if(res.data){
    checkbutton.style.backgroundColor = 'green';
    checkbutton.style.color = 'white';
    checkbutton.textContent = '사용가능';
  }else{
    checkbutton.style.backgroundColor = 'red';
    checkbutton.style.color = 'white';
    checkbutton.textContent = '불가능'; 
  }
})}

function signInFunc() {
  const form = document.forms['login-form'];
  axios({
    method: 'post',
    url: '/signin',
    data: {
      uid: form.userId.value,
      upw: form.userPw.value,
    }
  }).then((res) => {
    console.log(res.data);
    if (res.data.result === 1) {
      document.location.href =`/userinfo/${res.data.uid}`;
    } else {
      if(res.data.result==2){
        alert('로그인 실패, 존재하지 않는 아이디입니다.');
        document.querySelector('#userId').value='';
        document.querySelector('#userPw').value='';
      }else{
        alert('로그인 실패, 비밀번호가 틀렸습니다.');
        document.querySelector('#userPw').value='';
      }
    }
  })
}

function editinfo(){
  const form = document.forms['userinfo-form'];
  axios({
    method: 'put',
    url: '/member',
    data: {
      uid: form.userId.value,
      uname: form.userName.value,
      upw: form.userPassword.value,
    }
  }).then((res) => {
    if (res.data) {
      alert('수정되었습니다!');
    }else{
      alert('오류발생!');
    }
  })
}
function deleteinfo(){
  const form = document.forms['userinfo-form'];
  if(confirm('정말로 삭제하시겠습니까?')){
    axios({
      method: 'delete',
      url: '/member',
      data: {
        uid: form.userId.value,
      }
    }).then((res) => {
      if (res.data) {
        alert('삭제되었습니다!');
        document.location.href ='/';
      }else{
        alert('오류발생!');
      }
    })
  }
}
