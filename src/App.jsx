import React from 'react';

// Components
import {
  CFooter, CHeader
} from './components/index';

// Mock
import productsMock from './mock';

export default function App() {
  return (
    <div>
      <CHeader />
      <main>
        {productsMock.map((m, index) => {
          return (<article
            key={index}
          >
            <span>{m.name}</span>
            <img src={m.image} alt={m.name} width="50px" />
            <span>{`R$ ${m.price.toFixed(2).toString().replace('.', ',')}`}</span>
          </article>
          );
        })}
      </main>
      <CFooter />
    </div>
  );
}