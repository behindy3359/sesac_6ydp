import React, { useEffect ,useState , useCallback} from 'react';
import axios from 'axios';

const PostList = ({reqState}) => {
  const [posts, setPosts]=useState([]);
  const [count, setCount] =useState(0);

  const req = useCallback(()=>{
    axios({
      method : 'get',
      url : 'https://jsonplaceholder.typicode.com/posts',
    }).then((res)=>{
      setTimeout(()=>{
        setPosts(res.data);
      }, 2000);
    })
  },[]);

  const pressBtn =()=>{
    setCount(count +1);
  }

  useEffect(()=>{
    req();
  },[reqState]);

  return (
    <>
      <div className='header'> <p>🗒️ Post List : {count}</p> </div>
      <div className='post-list'>
        {posts.map((value)=>{ return (
          <div className='post-wrapper'>
              <p className='post-title'><span className='post-title-postno'>NO.{value.id}</span> - <span className='post-title-title'>{value.title}</span><button onClick={pressBtn}>버튼</button></p>
              <p className='post-body'>{count} {value.body}</p>
          </div>);
        })}
      </div>
    </>
  )
}

export default PostList