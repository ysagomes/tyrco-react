import React from 'react'
import './Menu.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
  <>
    <div className='header-container'>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link to={'/'}><img  class="logo" src="images/logo.jpg" alt='logo'></img></Link>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to={'/contact'} class="nav-link">Contacto</Link>
              </li>
              <li class="nav-item">
                <Link to={'/products'} class="nav-link">Productos</Link>
              </li>
            </ul>
          </div>
        </div>
      <CartWidget />
      </nav>
  </div>
</>
  )
}

export default Menu