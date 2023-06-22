import React, { useEffect, useState } from 'react';

// Components
import {
  CFooter, CHeader, CNavegation
} from './components/index';

// Mock
import productsMock from './mock';

export default function Ap() {

  const [products, setproducts] = useState([]);
  const [selectedType, setType] = useState('');

  useEffect(() => {
    try {
      if (productsMock) {
        setproducts(productsMock);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  const onClickFunction = ({ target }) => {
    const { parentNode } = target;
  
    try {
      const productName = parentNode.querySelector('p').textContent;
      const productPrice = parentNode.querySelector('span').textContent;
      const productImage = parentNode.querySelector('img').getAttribute('src');
  
      const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
      let foundProduct = false;
  
      const updatedCartItems = cartItems.map((item) => {
        if (item.name === productName) {
          foundProduct = true;
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
  
      if (!foundProduct) {
        updatedCartItems.push({
          name: productName,
          price: productPrice,
          image: productImage,
          quantity: 1
        });
      }
  
      localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    } catch (error) {
      console.error(error);
    }
  };  

  return (
    <div>
      <CHeader />
      <CNavegation
        selectedType={selectedType}
        setType={setType}
      />
      <main>
        {selectedType === 'pressão' ? (
          productsMock
            .filter((p) => p.type === 'pressão')
            .map((p, index) => (
              <article key={index}>
                <p>
                  {p.name}
                </p>
                <img src={p.image} alt={p.name} width="50px" />
                <span>
                  {`R$ ${p.price.toFixed(2).toString().replace('.', ',')}`}
                </span>
                <button
                  onClick={onClickFunction}
                >
                  Adicionar
                </button>
              </article>
            ))
        ) : selectedType === 'Equipo' ? (
          productsMock
            .filter((p) => p.type === 'Equipo')
            .map((p, index) => (
              <article key={index}>
                <p>
                  {p.name}
                </p>
                <img src={p.image} alt={p.name} width="50px" />
                <span>{`R$ ${p.price.toFixed(2).toString().replace('.', ',')}`}</span>
                <button
                  onClick={onClickFunction}
                >
                  Adicionar
                </button>
              </article>
            ))
        ) : selectedType === 'Luvas' ? (
          productsMock
            .filter((p) => p.type === 'Luvas')
            .map((p, index) => (
              <article key={index}>
                <p>
                  {p.name}
                </p>
                <img src={p.image} alt={p.name} width="50px" />
                <span>{`R$ ${p.price.toFixed(2).toString().replace('.', ',')}`}</span>
                <button
                  onClick={onClickFunction}
                >
                  Adicionar
                </button>
              </article>
            ))
        ) : selectedType === 'Seringa' ? (
          productsMock
            .filter((p) => p.type === 'Seringa')
            .map((p, index) => (
              <article key={index}>
                <p>
                  {p.name}
                </p>
                <img src={p.image} alt={p.name} width="50px" />
                <span>{`R$ ${p.price.toFixed(2).toString().replace('.', ',')}`}</span>
                <button
                  onClick={onClickFunction}
                >
                  Adicionar
                </button>
              </article>
            ))
        ) : products.map((p, index) => (
          <article key={index}>
            <p>
              {p.name}
            </p>
            <img src={p.image} alt={p.name} width="50px" />
            <span>{`R$ ${p.price.toFixed(2).toString().replace('.', ',')}`}</span>
            <button
              onClick={onClickFunction}
            >
              Adicionar
            </button>
          </article>
        ))}
      </main>
      <CFooter />
    </div>
  );
}