const div1 = document.getElementById('firstDiv');
console.log('inner Text : ', div1.innerHTML);
console.log('text Content :', div1.textContent);
div1.innerHTML = '여기는 <b> 첫번째 </b>'

// # innerText vs textContent
// 유사점 - 둘 모두 텍스트를 추가한다.
// 차이점 - innerText : HTML 태그를 해석하지 않고 보여지는 텍스트만 그대로
//      - textContent : HTML 태그를 처리!


div1.innerHTML = '여기는 <b> 두번째 </b>태그!'
console.log(div1);
div1.textContent = '여기는 <b> 세번째 </b>태그!'
console.log(div1);

// 속성( attribute ) 변경
// setAttribute( 속성명, 변경할 속성 값 ) => 

const naverLink = document.getElementById('naver-link');
naverLink.setAttribute("href", "https://www.google.com");

const paori = document.getElementById('paori');
paori.setAttribute('src',"../../../image/pcm/PoNo0004.webp");
console.log(paori.src);

paori.href='#';// 내부 앵커 //현재 페이지의 상단으로 스크롤

const h1Selector = document.getElementsByTagName('h1')[0];
const listAll = document.querySelectorAll('ul > .item');

listAll[0].style.backgroundColor = 'orange';
listAll[1].style.color = 'orange';
listAll[2].style.fontWeight = 'bolder';
listAll[3].style.fontSize = '30px';

for( let i of listAll ){
    i.style.backgroundColor = 'purple';
}

// classList활용
// xxx.classList.add 
// xxx.classList.remove
// xxx.classList.contains : 있는지 없는지 확인 ( t/f 반환 )
// xxx.classList.toggle : 있으면 제거, 없으면 추가

h1Selector.classList.add('add-h1');
console.log(h1Selector.classList.contains('add-h1'));

// 요소 찾기
// 계층 구조 ( 형제, 자식, 조상, 부모등등 )

const friends = document.querySelector('.uList');
const kingOfFriends = document.querySelector('#king');

console.log(friends.children); // 유사배열 자식 모두 선택
console.log(friends.children[0]);
console.log(kingOfFriends.parentNode);
console.log(kingOfFriends.previousElementSibling); // 이전 형제 잡아옴
console.log(kingOfFriends.nextElementSibling);// 다음 형제 잡아옴