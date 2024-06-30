let username=document.querySelector('#user_info_username');
let userpasword=document.querySelector('#user_info_userpassword');

function memberUpdate() {
  console.log('수정버튼 클릭됨!');
  console.log(username.value);
  axios({
    method: 'patch',
    url:'/member',
    data:{
      member_password : document.querySelector('#user_info_userpassword').value
    }
  }) .then((res) => {
    alert('비밀번호가 변경되었습니다.');
    if (res.data.redirect) {
      window.location.href = res.data.redirect;
    }
  })
  .catch(err => {
    console.error('Error:', err);
    alert('알 수 없는 오류가 발생했습니다.');
  });
}
function memberDelete() {
  console.log('삭제버튼 클릭됨!');
  console.log('id:',document.querySelector('#user_info_id').value);
  const id = document.querySelector('#user_info_id').value
  axios({
    method: 'delete',
    url:`/member/${id}`,
    data:{
      member_id : id,
   }
  }) .then((res) => {
    alert(res.data.message);
    if (res.data.redirect) {
      window.location.href = res.data.redirect;
    }
  })
  .catch(err => {
    console.error('Error:', err);
    alert('알 수 없는 오류가 발생했습니다.');
  });
}