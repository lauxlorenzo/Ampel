import React from 'react'
import { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll-v2'
import './button.css'

function ContactButton() {

  //Chance opacity on scroll
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor);

  return (
    <div className={color ? 'Button button-opacity' : 'Button'}>
      <AnchorLink href='#contato' className='button-contact'>
        ENTRE EM CONTATO
      </AnchorLink>
    </div>
  )
}

export default ContactButton