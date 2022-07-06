import React, { useState } from 'react'
import './section8.css'


function Section8() {

  // Leia Mais / Leia Menos
  const ReadMore = ({ limit, children }) => {

    const text = children;

    const [isReadMoreShown, setReadMoreShown] = useState(false)

    const toggleBtn = () => {
      setReadMoreShown(prevState => !prevState)
    }

    return (
      <div className='section8-readmore'>
        {isReadMoreShown ? text : text.substr(0, limit)}
        <button className='section8-readbtn' onClick={toggleBtn}>
            {isReadMoreShown ? 'VER MENOS -' :'VER MAIS +'}
        </button>
      </div>
    )
  }


  return (
    <div className='Section8'>
      <div className='section8-title'>
        <p>GERAÇÃO CENTRALIZADA VS. GERAÇÃO DISTRIBUÍDA</p>

        <h1>
          Já hoje em intensa atividade, a geração <br/>
          fotovoltaica se divide basicamente <br/>
          dois subgrupos
        </h1>
      </div>

      <div className='section8-groups'>
        <div>
          <h1>GERAÇAO DISTRIBUÍDA</h1>

          <ReadMore limit={396}>
            Geração distribuída (GD) pode ser definida como a produção de energia elétrica através de uma fonte (normalmente renovável) conectada diretamente ao consumidor. Como consequência da proximidade entre o gerador e o consumidor, as usinas de GD tendem a ser de pequeno porte e, face ao panorama energético mundial, são essencialmente de fonte solar, eólica ou de outra fonte de energia sustentável. Por efeito de se conectar ao sistema elétrico de distribuição do consumidor a GD, onde os melhores exemplos são os sistemas fotovoltaicos instalados nos telhados residenciais ou comerciais e industriais, tem 2 grandes efeitos econômicos e sociais: economiza investimentos em linhas de transmissão e reduz as perdas de energia bem como a estabilidade do sistema elétrico, pois evita o transporte a longas distâncias; expande a matriz energética levando, em teoria e com baixo custo, a disponibilidade de energia elétrica a todo o país.
          </ReadMore>

          <div className='section8-separator' />
        </div>

        <div>
          <h1>GERAÇAO CENTRALIZADA</h1>

          <ReadMore limit={326}>
            A geração centralizada se caracteriza por grandes centrais de produção de energia elétrica, sendo no Brasil as usinas hidrelétricas e termelétricas a grande maioria. Situando-se longe dos grandes centros urbanos e de consumo, são necessários enormes investimentos para conduzir a energia gerada das usinas ao consumidor final. Grandes usinas, postos de transformação, linhas de transmissão, sub-estações, mais postos de distribuição, são o longo caminho que a energia percorre desde a geração até chegar ao consumidor final. Com mais de 150 mil quilômetros de linhas de transmissão, ou cerca de 4 voltas à Terra, o processo de condução da corrente elétrica é complexo e, essencialmente, muito custoso. 
          </ReadMore>

          <div className='section8-separator' />
        </div>
      </div>
    </div>
  )
}

export default Section8