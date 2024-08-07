import React, { useRef, useState } from 'react';

const TableMapPractice = () => {

  const [inputName , setInputName] =useState('');
  const [inputTitle , setInputTitle] =useState('');
  const [comment, setComment] = useState([
      {
        id: 1,
        name: '오늘',
        title:  '오늘은 덥다!'
      },
      {
        id: 2,
        name: '내일',
        title: '내일도 덥다!'
      }
  ]);

  const refName = useRef();
  const refTitle = useRef();

  const addComment =()=>{
    

    if (!inputName.trim()) {
      return refName.current.focus();
    }
    if(!inputTitle.trim()){
      return refTitle.current.focus();
    }



    const newComment = comment.concat({
      id: comment.length + 1,
      name: inputName,
      title: inputTitle
    });

    setComment(newComment);
    setInputName('');
    setInputTitle('');

  }


  return (
    <>
    <fieldset border={1}>
      <label>작성자 : </label>
      
      <input 
        type="text" placeholder='작성자' 
        value={inputName}
        ref={refName}
        onChange={(e) => {
            setInputName(e.target.value);
        }}
        ></input>
      
      <label>제목 : </label>
      <input 
        type="text" placeholder='제목'
        value={inputTitle}
        ref={refTitle}
        onChange={(e) => {
            setInputTitle(e.target.value);
        }}
        ></input>

      <button onClick={addComment}>작성 하기</button>
    </fieldset>
    <table border={1} align='center'>
      <tr>
      <td>번호</td>
      <td>제목</td>
      <td>내용</td>
      </tr>
      {comment.map((value) => (
        <tr key={value.id}>
          <td>{value.id}</td>
          <td>{value.name}</td>
          <td>{value.title}</td>
        </tr>
      ))}
    </table>
    </>
  )
}

export default TableMapPractice