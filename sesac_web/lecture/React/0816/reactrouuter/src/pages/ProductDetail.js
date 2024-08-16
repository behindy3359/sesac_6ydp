import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { productInfos } from '../components/ProductsList';

const ProductDetail = () => {
  
  const { productId } = useParams();
  const navigate = useNavigate();

  const targetProduct = productInfos[Number(productId)-1];

  const {userId, id, title, body} = targetProduct;
  
  return (
    <>
      <h1>상품 설명 페이지 입니다!</h1>
      <button onClick={()=>{ navigate(-1)}}>뒤로가기</button>
      <button onClick={()=>{ navigate('/')}}>홈으로</button>
      <hr/>
      <ul>
        <li> 상품번호 : {id}</li>
        <li> 상품명 : {title}</li>
        <li> 판매자 :  {userId} </li>
        <li> 상세설명 : {body}</li>
      </ul>
    </>
  )
}

export default ProductDetail