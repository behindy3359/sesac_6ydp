import { Posts } from "../types/types";
interface Props{
  post : Posts;
}

// PostItem 컴포넌트입니다.
const PostItem = ({post}:Props) => {
  const  postEach  = post;

  return (
    <div className='PostItem'>
      <div>
        <span className='id'>No. {postEach.id}</span>
        <span className='title'> - {postEach.title}</span>
      </div>
      <p className='body'>{postEach.body.slice(0, 120)}...</p>
    </div>
  );
};

export default PostItem;