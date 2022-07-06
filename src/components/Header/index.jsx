import React from 'react'
import './header.css'

import Logo from '../../assets/SVG/logo.svg'

function Header() {
  return (
    <div className='Header'>

      <div className='top'>
        <div className='header-logo'>
          <img src={Logo} alt="Ampel" />
        </div>
      </div>
      
      <div className='bottom'>
        <div className='header-menu'>
          <ul>
            <li>SOBRE NÓS</li>
            <li>SOLUÇÕES</li>
            <li>ENERGIA LIMPA</li>
            <li>CONTATO</li>
          </ul>
        </div>

        <div className='header-title'>
          <h1>SOLUÇÕES<br/> E NEGÓCIOS<br/> EM ENERGIA</h1>
        </div>
      </div>
      
    </div>
  )
}

export default Header