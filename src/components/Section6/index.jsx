import React from 'react'
import './section6.css'

import Graph from '../../assets/SVG/gráfico-pizza-desktop.svg'

function Section6() {
  return (
    <div className='Section6'>
      <div className='section6-title'>
        <p>CENÁRIO ENERGÉTICO NO BRASIL</p>

        <h1>
          Segundo estudo de 2021 
          da Empre de Pesquisa Energética (EPE), 
          o consumo total de eletricidade deverá 
          ter um crescimento médio de 3,5% ao ano
          na próxima década.
        </h1>

        <img src={Graph} alt="" />

        <p>Fonte: ANEEL/ABSOLAR, 2022</p>
      </div>

      <div className='section6-description'>
        <p>
          Como a demanda energética deverá ser <br/>
          superior à oferta, assim como para <br/>
          baratear o custo da energia, o Brasil <br/>
          precisará incrementar e pulverizar a sua <br/>
          matriz energética.
        </p>
      </div>
      
    </div>
  )
}

export default Section6