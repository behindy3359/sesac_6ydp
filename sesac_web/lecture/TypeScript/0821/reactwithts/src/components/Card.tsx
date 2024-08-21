import React from 'react'

interface CardProps{
  title :string;
  children: React.ReactNode;
}

export default function Card ({title, children}:CardProps){
  return (
    <>
      <div>
        <h1>{title}</h1>
        <div>{children}</div>
      </div>
    </>
  )
}

// const Card:React.FC<React.PropsWithChildren<CardProps>>=({
//   title ,
//   children
// })=>{
//   return(
//         <>
//           <div>
//             <h1>{title}</h1>
//             <div>{children}</div>
//           </div>
//         </>
//     )
// }