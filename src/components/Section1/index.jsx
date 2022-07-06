import React from 'react'
import './section1.css'

import bg1 from '../../assets/Imagens/Desktop/Bg-1.jpg'

function Section1() {
  return (
    <div className='Section1'>
      <div className='description'>

        <div className='section1-title'>
          <p>OPORTUNUNIDADE</p>

          <h1>
            Conhecer o ambiente<br/> 
            energético é principal para o melhor e<br/>
            mais econômico uso e gestão da energia<br/>
            em seu negócio.
          </h1>
        </div>

        <div className='section1-text'>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
      </div>

      <div className='section1-image'>
        <img src={bg1} alt="" />
      </div>
      
    </div>
  )
}

export default Section1