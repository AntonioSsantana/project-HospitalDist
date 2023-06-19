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
    try {
      if (productsMock) {
        setProducts(productsMock);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div>
      <CHeader />
      <main>
        {products.map((p, index) => {
          return (<article
            key={index}
          >
            <span>{p.name}</span>
            <img src={p.image} alt={p.name} width="50px" />
            <span>{`R$ ${p.price.toFixed(2).toString().replace('.', ',')}`}</span>
          </article>
          );
        })}
      </main>
      <CFooter />
    </div>
  );
}