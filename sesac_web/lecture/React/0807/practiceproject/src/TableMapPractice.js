import React, { useState } from 'react';

const TableMapPractice = () => {

  const [inputName , setInputName] =useState('');
  const [inputSearch , setInputSearch] =useState('');
  const [searchType , setSearchType] =useState('name');
  const [inputTitle , setInputTitle] =useState('');
  const [result, setResult] = useState([
  ]);
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

  const addComment =()=>{
    if (!inputName.trim()||!inputTitle.trim()) {
      return console.log('이름이나 제목을 확인해주세요');
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

  const searchComment = (typeSearch)=>{
    
    let newSearch;
    switch (typeSearch){
      case 'name':
        newSearch = comment.filter((comment)=>comment.name.includes(inputSearch));
        setResult(newSearch);
        break;
      case 'title':
        newSearch = comment.filter((comment)=>comment.title.includes(inputSearch));
        setResult(newSearch);
        break;
      case 'all':
        newSearch = comment;
        setResult(newSearch);
        break;
      default :
        break;
    }
  }

  return (
    <>
    <fieldset border={1}>
      <label>작성자 : </label>
      
      <input 
        type="text" placeholder='작성자' 
        value={inputName}
        onChange={(e) => {
          setInputName(e.target.value);
        }}></input>
      
      <label>제목 : </label>
      <input 
        type="text" placeholder='제목'
        value={inputTitle}
        onChange={(e) => {
          setInputTitle(e.target.value);
        }}></input>

      <button onClick={addComment}>작성 하기</button>
    </fieldset>
    
    <select type='select' id='selector' onChange={(e) => {
          setSearchType(e.target.value);
        }}>
      {/* {comment.map((value)=>{
        <option value={value.id}>{value.name} </option>
      })} */}
      <option value='name'>작성자</option>
      <option value='title'>제목</option>
    </select>
    <input 
      type='text' 
      placeholder='검색어' 
      value={inputSearch} 
      onChange={(e) => {
        setInputSearch(e.target.value);
      }}></input>
    <button onClick={()=>{searchComment(searchType)}}>검색</button>
    <button onClick={()=>{searchComment('all')}}>전체</button>
    
    <table border={1} align='center'>
      <tr>
      <td>번호</td>
      <td>작성자</td>
      <td>제목</td>
      </tr>
      {comment.map((value) => (
        <tr key={value.id}>
          <td>{value.id}</td>
          <td>{value.name}</td>
          <td>{value.title}</td>
        </tr>
      ))}
    </table>
    <hr/>
    { result.length ===0?'검색 결과가 없습니다.' :
    <table className='comment-table'>
      <tr>
      <td>번호</td>
      <td>작성자</td>
      <td>제목</td>
      </tr>
      {result.map((value) => (
        <tr key={value.id}>
          <td>{value.id}</td>
          <td>{value.name}</td>
          <td>{value.title}</td>
        </tr>
      ))}
    </table>
    }
    </>
  )
}

export default TableMapPractice