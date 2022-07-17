import React from 'react'
import './section11.css'


function Section11() {

  return (
    <div className='Section11' id='contato'>
      <div className='section11-content'>
        <div className='section11-contact'>
          <h1>Entre em contato</h1>
          <p>Juntos, encontraremos a melhor forma de potencializar sua economia de energia.</p>

          <form action="https://formsubmit.co/lorenzolaux05@gmail.com" method="POST">
            <input type="hidden" name="_next" value="/#"/>
            <input type="text" name="name" placeholder="Nome" required/>
            <input type="email" name="email" placeholder="Email" required/>
            <textarea type="message" name="message" placeholder="Descrição (opcional)"/>
            <button type="submit">Submeter</button>
          </form>
        </div>

        <div className='section11-infos'>
          <div className='infos'>
            <div className='infos-content'>
              <h1>Endereço</h1>
              <p>R. Eng. Ezequiel de Campos, 200 4100-228 Porto, Portugal</p>

              <h1>Telefone</h1>
              <p>+55 (99) 99999-9999</p>

              <h1>Email</h1>
              <p>contato@exemplo.com.br</p>
            </div>
          </div>

          <div className='links'>
            <div className='terms'>
              <a href="#">Termos de Serviço</a>
              <a href="#">Política de Privacidade</a>
            </div>

            <div className='social'>
              <a href="#">Linkedin</a>
              <a href="#">Instagram</a>
            </div>
          </div>
        </div>
      </div>

      <div className='section11-direitos'>
        <p>© Ampel 2022</p>
      </div>
    </div>
  )
}

export default Section11