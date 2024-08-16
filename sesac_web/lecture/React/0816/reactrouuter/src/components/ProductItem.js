import React,{useState} from 'react';
import {Link} from 'react-router-dom';

function ProductItem(items) {
  // console.log(items);
  
  return (
    <> 
      <Link to={`/products/${items.item.id}`}>
        <ul>
          <li> 상품명 : {items.item.title}</li>
          <li> 상품설명 : {items.item.body}</li>
        </ul>
      </Link>
      <hr/>
    </>
  )
}

export default ProductItem