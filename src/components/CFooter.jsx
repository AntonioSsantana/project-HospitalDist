import React from 'react';

// Css
import { Footer } from '../styles/components/Footer.style';

export default function CFooter() {
  return (
    <Footer>
      <article>
        <div>
          <h4>Horário de atendimento</h4>
          <p>Seg à Sex das 9h às 19h</p>
          <p>Sab das 8h às 12h</p>
        </div>
        <div>
          <h4>TELEFONE DE CONTATO</h4>
          <p>{'(xx) xxxxx-xxxx'}</p>
        </div>
      </article>
      <article>
        <div>
          <h4>Redes Sociais</h4>
          <img src="https://cdn-icons-png.flaticon.com/512/20/20673.png" alt="facebook" />
          <img src="https://cdn-icons-png.flaticon.com/512/1400/1400829.png" alt="instagram" />
        </div>
      </article>
      <article>
        <p>COPYRIGHT © - A+ Distribuidora</p>
      </article>
    </Footer>
  );
}