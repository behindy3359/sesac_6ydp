import React from 'react'

interface StudentInfo{
  name : string;
  grade : number;
  part? : string;
  handleClick: (name: string , grade:number) => void ;
}
// export default function Student({
//   name, 
//   grade, 
//   part, 
//   handleClick
// } : StudentInfo ){
//   return (
//     <>
//       <ul onClick={()=>handleClick(name,grade)} className='student-card'>
//       <li>이름: {name}</li>
//       <li>학년: {grade}</li>
//       <li>전공: {part||'소속없음'}</li>
//       </ul>
//     </>
//   )
// }

const Student:React.FC<StudentInfo> = ({name, grade, part, handleClick}) => {
  return (
        <>
          <ul onClick={()=>handleClick(name,grade)} className='student-card'>
          <li>이름: {name}</li>
          <li>학년: {grade}</li>
          <li>전공: {part||'소속없음'}</li>
          </ul>
        </>
  )
}

export default Student
