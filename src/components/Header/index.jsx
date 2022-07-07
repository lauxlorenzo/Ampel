import React from 'react'
import './header.css'
import AnchorLink from 'react-anchor-link-smooth-scroll-v2'

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
            <li><AnchorLink href='#sobre' className='header-menu-item'>SOBRE NÓS</AnchorLink></li>
            <li><AnchorLink href='#solucoes' className='header-menu-item'>SOLUÇÕES</AnchorLink></li>
            <li><AnchorLink href='#energia' className='header-menu-item'>ENERGIA LIMPA</AnchorLink></li>
            <li><AnchorLink href='#contato' className='header-menu-item'>CONTATO</AnchorLink></li>
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