import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll-v2'
import './button.css'

function ContactButton() {
  return (
    <div className='Button'>
      <AnchorLink href='#contato' className='button-contact'>
        ENTRE EM CONTATO
      </AnchorLink>
    </div>
  )
}

export default ContactButton