const tbody = document.querySelector( 'tbody' );
const buttonGroup = document.querySelector('#button-group');

/** 게시글 등록시 발생할 일! - from static/visitor.js : createVisitor() 함수
 * html button 태그에 onclick 함수를 적용, axios 활용해서 데이터를 서버에 전달,
 * method : 'post'
 * url : '/visitor'
 * data : { name , comment }
 * 응답에 있어서 서버에 데이터가 입력되면 화면의 게시글 테이블의 끝에 요소를 삽입
 * 응답에 넘어온 data 객체를 활용 
*/
function createVisitor() {
  // console.log('click 등록 btn')
  const form = document.forms[ 'visitor-form' ];
  axios({
      method: 'POST',
      url: '/visitor',
      // 추가하려는 정보를 req.body에 실어서 요청을 보냄
      data: {
      name: form.name.value,
      comment: form.comment.value,   
    }
  }).then(( res ) => {
    // console.log(res)
    const { data } = res; // {id: 7, name: 'lily', comment: 'hihi'}
    const html = // 지금 보여지고 있는 페이지에 삽입할 html 요소
    `
      <tr id="tr_${ data.id }">
        <td>${ data.id }</td>
        <td>${ data.name }</td>
        <td>${ data.comment }</td>
        <td><button type="button" onclick="editVisitor( this, ${ data.id } )">수정</button></td>
        <td><button type="button" onclick="deleteVisitor( this, ${ data.id } )">삭제</button></td>
      </tr>
    `;
    // insertAdjacentHTML: 특정 요소에 html 추가
    tbody.insertAdjacentHTML( 'beforeend', html );
})};

/** 
 * 삭제 버튼 클릭시 발생할 일! - from static/visitor.js : deleteVisitor() 함수
 * @param { object } obj - html 페이지에서 동적으로 삭제할 게시글 테이블의 칼럼
 * @param { number } id - html 페이지에서 동적으로 삭제할 게시글 테이블의 칼럼의 게시글 id 
 * html button 태그에 onclick 함수를 적용, axios 활용해서 데이터를 서버에 전달,
 * method : 'dellete'
 * url : '/visitor'
 * data : { id }
 * DB에서 삭제된 것을 응답받아서 true/false 에 대해서 반응
 * 데이터를 받은 후 반응 - obj html 페이지에서 동적으로 삭제
*/
function deleteVisitor( obj , id ) {
  // console.log(obj);
  // console.log(id);
  if( !confirm('진짜로 삭제할래?') ){
    return ; 
  }
  axios({
    method : 'Delete',
    url : '/visitor',
    data : {
      id
    }
  }).then(( res )=>{
    // console.log('함수만 실행됨!', res.data );
    if( res.data.result ){
      alert('삭제완료!');
      // obj.parentElement.parentElement.remove();
      obj.closet(`#tr_${res.data.id}`).remove();
    }
})};


/**
 * 수정 버튼 클릭시 발생할 일! - from static/visitor.js : updateVisitor() 함수
 * @param {} obj 
 * @param {*} id 
 * @param {*} data 
 * html button 태그에 onclick 함수를 적용, axios 활용해서 데이터를 서버에 전달, 응답받은 
 */
function editVisitor(id) {
  axios({
    method: 'get',
    url:`/visitor/${id}`
  }).then((res)=>{
    // { "id": 6, "name": "lily", "comment": "hello" }
    const { name, comment } = res.data;
    const form = document.forms['visitor-form'];
    form.name.value = name;
    form.comment.value = comment;
  })
  const html = `<button type='button' onclick='editDO(${id})'>변경</button><button type='button' onclick='inputClear()'>취소</button>`;
  buttonGroup.innerHTML = html;
};

/**
 * 수정 버튼 클릭시 발생할 일! - from static/visitor.js : deleteVisitor() 함수
 * 
 */
function editDO(id){
  const form = document.forms['visitor-form']
  axios({
    method : 'PATCH',
    url : '/visitor',
    data:{
      id,
      name: form.name.value,
      comment : form.comment.value,
    }
  }).then((res)=>{
    if(res.data){
      alert('수정완료!');
      const children = document.querySelector(`#tr_${id}`).children;
      children[1].textContent = form.name.value;
      children[2].textContent = form.comment.value;
      inputClear()
    }
})}

/**
 * 수정 완료, 수정 취소 시 input 클리어를 위한 함수 , 공통적 기능을 하기에 미리 만들어서 별도로 사용
 * 
 */
function inputClear() {
  const form = document.forms['visitor-form'];
  form.name.value = '';
  form.comment.value='';
  const html = '<button type="button" onclick="createVisitor();">등록</button>';
  buttonGroup.innerHTML = html;
}