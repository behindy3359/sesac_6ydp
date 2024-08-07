import React, { useState } from 'react';

const MapPractice = () => {

  const [inputName , setInputName] =useState('');
  const [inputEmail , setInputEmail] =useState('');
  const [account, setAccount] = useState([
      {
        id: 1,
        name: '오늘',
        email: 'test@test.tst'
      },
      {
        id: 2,
        name: '내일',
        email: 'tset@tset.tst'
      }
  ]);
  const deleteAccount = (targetId)=>{
    const newAccount = account.filter((acc) => acc.id !== targetId);

    setAccount(newAccount);
  }
  const handleKeyDown= (e)=>{
    if (!inputName.trim()||!inputEmail.trim()) {
        return console.log('이름이나 이메일을 확인해주세요');
    }
    if (e.key==='Enter') {
      const newAccount = account.concat({
        id: account.length + 1,
        name: inputName,
        email: inputEmail
      });
  
      setAccount(newAccount);
      setInputName('');
      setInputEmail('');
    }
  }
  const addAccount = ()=>{
    if (!inputName.trim()||!inputEmail.trim()) {
        return console.log('이름이나 이메일을 확인해주세요');
    }

    const newAccount = account.concat({
      id: account.length + 1,
      name: inputName,
      email: inputEmail
    });

    setAccount(newAccount);
    setInputName('');
    setInputEmail('');
  }  

  return (
    <>
    <ol>
      {account.map((value) => (
        <li key={value.id}
          onDoubleClick={() => deleteAccount(value.id)}
          >{value.name} : {value.email}</li>
      ))}
    </ol>
    <input
      type="text"
      placeholder="이름 입력"
      value={inputName}
      onChange={(e) => {
          setInputName(e.target.value);
      }}
      onKeyDown={(e) => handleKeyDown(e)}
    />
    <input
      type="text"
      placeholder="이메일 입력"
      value={inputEmail}
      onChange={(e) => {
          setInputEmail(e.target.value);
      }}
      onKeyDown={(e) => handleKeyDown(e)}
    />
    <button onClick={addAccount}>추가</button>
    </>
  )
}

export default MapPractice