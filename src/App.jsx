import React, { useEffect, useState } from 'react';

// Components
import {
  CFooter, CHeader
} from './components/index';

// Mock
import productsMock from './mock';

export default function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsMock);
  });

  return (
    <div>
      <CHeader />
      <main>
        {products.map((m, index) => {
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