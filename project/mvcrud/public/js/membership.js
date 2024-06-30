const checkbutton = document.querySelector('#exist-button');

/** 
 * 회원가입 요청! - from public/membership.js : signUpFunc() 함수
 * html button 태그에 onclick 함수를 적용, axios 활용해서 데이터를 서버에 전달,
 * method : 'post'
 * url : '/member'
 * data : { name , comment }
 * 
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

/**
 * 아이디 존재 확인 체크요청!! 중복확인..?
 * 버튼 클릭시, axios 신호를 변경, 현재 폼의 값을 확인해 결과를 받아옴!
 * 방법 에 따라서 버튼을 클릭할 때가 아닌, 텍스트 입력값의 변화에 따라서 결과를 보여줄 수 도 있을것같음
 * ====>요소.addEventListener('input', callback() )
 */
function checkDuplicateUserId(){
  // console.log('click 등록 btn')
  const form = document.forms[ 'signup-form' ];
  axios({
    method: 'POST',
    url: '/membor',
    // 회원가입 정보를 req.body에 실어서 요청을 보냄
    // 폼, DB를 다시 구성하면 이름, 이메일도 가능할걸?
    data: {
    uid: form.userId.value,
  }
}).then(( res ) => {
  // console.log(res.data);
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


/**
 * 로그인 요청? 시도? 유사한 방식으로 처리.
 * 기존에 만들었던 녀석이 get 요청을 보내 url에 정보가 노출되고 로그인 없이 회원정보 페이지에 접근하게되는 바람에 다시 만드는중
 * 
 * 
 * res.data.result >>> 1 :성공 , 2: 실패(아이디 없음), 3: 실패 (비밀번호 틀림)
 * 
 */
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
      // 로그인 성공 시 POST 요청으로 userinfo 페이지 로드
      axios({
        method: 'post',
        url: '/userinfo',
        data: {
          uid: res.data.uid
        }
      }).then(response => {
        // 받은 HTML로 현재 페이지 내용을 교체
        // 왜 중간에 렌더되지않고 html 정보를 넘기는거야?
        document.open();
        document.write(response.data);
        document.close();
        // URL 변경 (옵션)
        history.pushState(null, '', '/userinfo');
      }).catch(err => {
        //로그인에는 성공했지만 로그인정보가 존재하지 않는 이상한경우?
        console.error('사용자 정보 로딩 중 오류 발생:', err);
        alert('사용자 정보를 불러오는 데 실패했습니다.');
      });
    } else {
      // 로그인시도 결과의 종류를 3종류로 분화 
      if(res.data.result==2){
        alert('로그인 실패, 존재하지 않는 아이디입니다.');
        document.querySelector('#userId').value='';
        document.querySelector('#userPw').value='';
      }else{
        alert('로그인 실패, 비밀번호가 틀렸습니다.');
        document.querySelector('#userPw').value='';
      }
    }
  }).catch((error) => {
    console.error('로그인 요청 중 오류 발생:', error);
    alert('로그인 처리 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
  });
}
/**
 * 정보 업데이트
 */
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
/**
 * 회원탈퇴? 
 */
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
