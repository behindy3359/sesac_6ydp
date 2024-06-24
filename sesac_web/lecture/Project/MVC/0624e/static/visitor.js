const tbody = document.querySelector('tbody');
// // 폼의 등록 버튼을 클륵했을때, post / visitor 요청을 보냄!
// function createVisitor() {
//   console.log('createVisitor() 실행함!');
//   const form = document.forms['visitor-form'];
//   axios({
//     method : 'POST',
//     url : '/visitor',
//     data:{
//       name : form.name.value,
//       comment : form.comment.value,
//     }.then((res)=>{
//       console.log(res);
//     })
//   })

// }
// 폼의 [등록] 버튼 클릭시 -> POST /visitor 요청 
function createVisitor() {
  console.log('click 등록 btn')

  const form = document.forms['visitor-form'];

  axios({
      method: 'POST',
      url: '/visitor',
      // 추가하려는 정보를 req.body에 실어서 요청을 보냄
      data: {
          name: form.name.value,
          comment: form.comment.value,   
      }
  }).then((res) => {
    console.log(res)

    const { data } = res; // {id: 7, name: 'lily', comment: 'hihi'}
    
    const html = `
        <tr id="tr_${data.id}">
            <td>${data.id}</td>
            <td>${data.name}</td>
            <td>${data.comment}</td>
            <td><button type="button">수정</button></td>
            <td><button type="button">삭제</button></td>
        </tr>
    `;

    // insertAdjacentHTML: 특정 요소에 html 추가
    tbody.insertAdjacentHTML('beforeend', html);
})
}