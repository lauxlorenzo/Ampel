import React from 'react'
import { useState } from 'react';
import './section11.css'


function Section11() {

  return (
    <div className='Section11' id='contato'>
      <div className='section11-content'>
        <div className='section11-contact'>
          <h1>Entre em contato</h1>
          <p>Juntos, encontraremos a melhor forma de potencializar sua economia de energia.</p>

          <form action="https://formsubmit.co/nelsongarcia@ampelenergia.com.br" method="POST">
            <input type="hidden" name="_next" value="http://ampelenergia.com"/>
            <input type="hidden" name="_subject" value="Novo contato!" />
            <input type="hidden" name="_template" value="box" />
            <input type="hidden" name="_captcha" value="false" />

            <input type="text" name="Nome" placeholder="Nome" required/>
            <input type="email" name="E-mail" placeholder="Email" required/>
            <textarea type="message" name="Mensagem" placeholder="Descrição (opcional)"/>
            <button type="submit">Submeter</button>
          </form>
        </div>

        <div className='section11-infos'>
          <div className='infos'>
            <div className='infos-content'>
              <h1>Endereço</h1>
              <p>Rua Gomes Carneiro, n. 137, sala 603, Ipanema, Rio de Janeiro. CEP: 22071-110</p>

              <h1>Telefone</h1>
              <p>+55 (21) 97599.4336</p>

              <h1>Email</h1>
              <p>nelsongarcia@ampelenergia.com.br</p>
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