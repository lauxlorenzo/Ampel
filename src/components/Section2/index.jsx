import React from 'react'
import './section2.css'

import bg2 from '../../assets/Imagens/Desktop/Bg-2.png'

function Section2() {
  return (
    <div className='Section2' id='sobre'>

      <div className='section2-image'>
        <img src={bg2} alt="" />
      </div>
      
      <div className='section2-description'>
        <p>A AMPEL</p>

        <p className='description-title'>
          Somos uma empresa de consultoria
          e assessoria em energia elétrica nos
          ambientes livre e regulado,
          composta por profissionais com
          mais de duas décadas de 
          experiência no setor.
        </p>

        <div className='section2-separator'></div>

        <p>
          Os paradigmas enegéticos mudaram e a vocação 
          solar do Brasil tem sido explorada como forma de 
          aumentar a oferta de energia, pulverizar nossa 
          matriz energética e ter expressiva economia com 
          custos em energia.
        </p>
      </div>
    </div>
  )
}

export default Section2