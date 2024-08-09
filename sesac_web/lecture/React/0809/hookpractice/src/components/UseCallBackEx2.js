import React ,{useCallback, useEffect, useState} from 'react';
import axios from 'axios';

function UseCallBackEx2({postId}) {
  const [post , setPost] = useState({});

  const getPost = useCallback(async ()=>{
    console.log('data fetching ....!!!!');
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    setPost(res.data);
  });

  useEffect(()=>{
    getPost();
  },[postId])

  return (
    <>
      <h1> useCallback </h1>
      {post.id ? post.title : '로딩중.....'}
    </>
  )
}

export default UseCallBackEx2