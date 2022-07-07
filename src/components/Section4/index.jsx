import React from 'react'
import './section4.css'

import icon1 from '../../assets/SVG/1.svg'
import icon2 from '../../assets/SVG/2.svg'
import icon3 from '../../assets/SVG/3.svg'
import icon4 from '../../assets/SVG/4.svg'
import icon5 from '../../assets/SVG/5.svg'
import icon6 from '../../assets/SVG/6.svg'
import icon7 from '../../assets/SVG/7.svg'

function Section4() {
  return (
    <div className='Section4' id='solucoes'>
      <div className='section4-title'>
        <p>SOLUÇÕES</p>

        <h1>
          Somos uma empresa multidisciplinar de consultoria e serviços 
          em energia elétrica nos ambientes livre e regulado. 
          Colaboramos com o desenvolvimento de projetos e negócios 
          em energia, assim como com a sua autonomia energética e 
          redução de custos com energia.
        </h1>
      </div>

      <div className='section4-linha1'>
        <div>
          <img src={icon1} alt="" />
          <p>Assessoria Jurídica e Ambiental</p>
        </div>
      </div>

      <div className='section4-linha2'>
          <div>
            <img src={icon1} alt="" />
            <p>Consultoria</p>
          </div>

          <div>
            <img src={icon1} alt="" />
            <p>Negociação</p>
          </div>

          <div>
            <img src={icon1} alt="" />
            <p>Estruturação</p>
          </div>

          <div>
            <img src={icon1} alt="" />
            <p>Contratualização</p>
          </div>

          <div>
            <img src={icon1} alt="" />
            <p>Desenvolvimento de projetos</p>
          </div>

          <div>
            <img src={icon1} alt="" />
            <p>EPC</p>
          </div>
      </div>

    </div>
  )
}

export default Section4