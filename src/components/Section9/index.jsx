import React from 'react'
import './section9.css'


function Section9() {

  return (
    <div className='Section9' id='energia'>

      <div className='section9-title'>
        <h1>
          Benefícios socioambientais<br />
          da energia solar
        </h1>

        <p>
          A excelente irradiação solar presente na  
          grande maioria do território brasileiro faz 
          do país um dos mais privilegiados para o 
          crescimento e liderança na energia solar.
        </p>
      </div>

      <div className='section9-cards'>
          <div className='card1'>
            <div>
              <p>01</p>
              <h1>Limpa</h1>
            </div>

            <div>
              <p>
                Energia que não causa
                poluição em virtude da não 
                emissão de gases poluentes.
              </p>
            </div>
          </div>

          <div className='card2'>
            <div>
              <p>02</p>
              <h1>Sustentável</h1>
            </div>

            <div>
              <p>
                Tem um impacto ambiental 
                consideravelmente menor que
                outras fontes energéticas.
              </p>
            </div>
          </div>

          <div className='card3'>
            <div>
              <p>03</p>
              <h1>Inesgotável</h1>
            </div>

            <div>
              <p>
                Atendemos às necessidades
                do presente sem comprometer
                as gerações futuras.
              </p>
            </div>
          </div>

          <div className='card4'>
            <div>
              <p>04</p>
              <h1>Economica</h1>
            </div>

            <div>
              <p>
                É a energia renovável de
                instalação mais acessível.
              </p>
            </div>
          </div>

          <div className='card5'>
            <div>
              <p>05</p>
              <h1>Durável</h1>
            </div>

            <div>
              <p>
                Necessidades mínimas de
                manutenção e uma vida útil 
                estimada de 25 anos.
              </p>
            </div>
          </div>

          <div className='card6'>
            <div>
              <p>06</p>
              <h1>Segura</h1>
            </div>

            <div>
              <p>
                Independência e segurança 
                energética, particularmente útil
                em zonas remotas ou isoladas.
              </p>
            </div>
          </div>

      </div>
    </div>
  )
}

export default Section9