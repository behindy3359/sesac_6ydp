import { Link } from 'react-router-dom'
import React from 'react'

const Header = () => {
  return (
    <>
      <header>
        <span></span>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Product</Link>
          </li>
        </ul>
      </header>
    </>
  )
}

export default Header