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
            Conhecer o ambiente <br/>
            energético é principal para o melhor e<br/>
            mais econômico uso e gestão da energia<br/>
            em seu negócio.
          </h1>
        </div>

        <div className='section1-text'>
          <p>A transição energética apresenta a você ou sua empresa uma economia expressiva de custos, oportunidades de negócios, colaboração indireta com o barateamento da energia, por meio da pulverização da matriz energética com fontes limpas de energia entre tantas outras possibilidades.</p>
          <p>Com permanente atualização e visão estratégica e de longo prazo, proporcionamos serviços no setor de energia com a expertise e responsabilidade necessárias. Nossas soluções de economia e de negócios promovem segurança jurídica e financeira à sua operação.</p>
        </div>
      </div>

      <div className='section1-image'>
        <img src={bg1} alt="" />
      </div>
      
    </div>
  )
}

export default Section1