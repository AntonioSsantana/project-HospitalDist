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
          <p>{'(11) 94002-8922'}</p>
        </div>
      </article>
      <article>
        <div>
          <h4>SAIBA MAIS</h4>
          <h4>Redes Sociais</h4>
        </div>
      </article>
      <article>
        <p>COPYRIGHT © - A+ Distribuidora</p>
      </article>
    </Footer>
  );
}