import React from 'react'
import './section7.css'

import Graph from '../../assets/SVG/gráfico-desktop.png'
import Arrow from '../../assets/SVG/seta.svg'

function Section7() {
  return (
    <div className='Section7'>
      <div className='section7-title'>
        <p>EVOLUÇÃO DA FONTE SOLAR FOTOVOLTAICA</p>

        <h1>
          A geração fotovoltaica, 
          em franco crescimento, tem hoje e por muito tempo 
          seguirá tendo papel principal nessa meta, de caráter 
          econômico, social e ambiental.
        </h1>
      </div>

      <div className='swipe-right'>
        <p>ARRASTE PARA O LADO </p>
        <img src={Arrow} alt="" />
      </div>

      <div className='section7-graph'>
        <img src={Graph} alt="" />
      </div>

      <div className='section7-legend'>
        <div className='section-fonte'>
          <p>Fonte: ANEEL/ABSOLAR, 2022</p>
        </div>

        <div className='section-legends'>
          <div className='legend'>
            <div className='light-gray' />
            <p>GERAÇÃO DISTRIBUIDA</p>
          </div>

          <div className='legend'>
            <div className='gray' />
            <p>GERAÇÃO CENTRALIZADA</p>
          </div>

          <div className='legend'>
            <div className='orange' />
            <p>MÉDIA DE CRESCIMENTO</p>
          </div>

          <div className='legend'>
            <div className='light-orange' />
            <p>PREVISÃO DE CRESCIMENTO</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section7