import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <div>
        <h1>NotFound</h1>
        <Link to="/">홈으로 이동하기</Link>
        <a href='http://localhost:3000'>홈으루 돌아가기 ( 새로고침 )</a>
      </div>
    </>
  )
}

export default NotFound