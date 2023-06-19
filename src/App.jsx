import React, { useEffect, useState } from 'react';

// Components
import {
  CFooter, CHeader, CNavegation
} from './components/index';

// Mock
import productsMock from './mock';

export default function App() {

  const [products, setProducts] = useState([]);
  const [selectedType, setType] = useState('');

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
      <CNavegation
        selectedType={selectedType}
        setType={setType}
      />
      <main>
        {selectedType === 'Pressão' ? (
          productsMock
            .filter((p) => p.type === 'Pressão')
            .map((p, index) => (
              <article key={index}>
                <span>{p.name}</span>
                <img src={p.image} alt={p.name} width="50px" />
                <span>{`R$ ${p.price.toFixed(2).toString().replace('.', ',')}`}</span>
              </article>
            ))
        ) : selectedType === 'Equipo' ? (
          productsMock
            .filter((p) => p.type === 'Equipo')
            .map((p, index) => (
              <article key={index}>
                <span>{p.name}</span>
                <img src={p.image} alt={p.name} width="50px" />
                <span>{`R$ ${p.price.toFixed(2).toString().replace('.', ',')}`}</span>
              </article>
            ))
        ) : selectedType === 'Luvas' ? (
          productsMock
            .filter((p) => p.type === 'Luvas')
            .map((p, index) => (
              <article key={index}>
                <span>{p.name}</span>
                <img src={p.image} alt={p.name} width="50px" />
                <span>{`R$ ${p.price.toFixed(2).toString().replace('.', ',')}`}</span>
              </article>
            ))
        ) : selectedType === 'Seringa' ? (
          productsMock
            .filter((p) => p.type === 'Seringa')
            .map((p, index) => (
              <article key={index}>
                <span>{p.name}</span>
                <img src={p.image} alt={p.name} width="50px" />
                <span>{`R$ ${p.price.toFixed(2).toString().replace('.', ',')}`}</span>
              </article>
            ))
        ) : products.map((p, index) => (
          <article key={index}>
            <span>{p.name}</span>
            <img src={p.image} alt={p.name} width="50px" />
            <span>{`R$ ${p.price.toFixed(2).toString().replace('.', ',')}`}</span>
          </article>
        ))}
      </main>
      <CFooter />
    </div>
  );
}