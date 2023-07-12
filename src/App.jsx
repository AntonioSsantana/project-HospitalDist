import React, { useEffect, useState } from 'react';

// Components
import {
  CFooter, CHeader, CNavegation
} from './components/index';

// Mock
import productsMock from './mock';

// Css
import { Div } from './styles/pages/App.style';

export default function Ap() {

  const [products, setproducts] = useState([]);
  const [productsBySearch, setProductsBySearch] = useState([]);

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

  const onChangeFunction = ({ target }) => {
    const { value, name } = target;
    let productsSearch;

    switch (name) {
    case 'search-bar':
      productsSearch = products.filter((i) => {
        const valueLowerCase = value.toLowerCase().substring(0, 2);
        const productNameLowerCase = i.name.toLowerCase();

        return productNameLowerCase.substring(0, 2).includes(valueLowerCase);
      });

      setProductsBySearch(productsSearch);
      break;
    default:
      break;
    }
  };

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
    <Div>
      <CHeader />
      <CNavegation
        selectedType={selectedType}
        setType={setType}
      />
      <div>
        <input
          type="text"
          placeholder="Pesquisa"
          name="search-bar"
          data-testid="search-input"
          onChange={onChangeFunction}
        />
      </div>
      <main>
        {selectedType === 'PRESSÃO' ? (
          products
            .filter((p) => p.type === 'Pressão')
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
        ) : selectedType === 'EQUIPO' ? (
          products
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
        ) : selectedType === 'LUVAS' ? (
          products
            .filter((p) => p.type === 'Luvas')
            .map((p, index) => (
              <article
                key={index}>
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
        ) : selectedType === 'SERINGA' ? (
          products
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
        ) : Array.isArray(productsBySearch) &&
          productsBySearch.length > 0 ? (productsBySearch.map((p, index) => (
            <article
              data-testid={`product-${p.id}-by-search`}
              key={index}
            >
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
          ))) : (products.map((p, index) => (
            <article key={index}>
              <p>
                {p.name}
              </p>
              <img src={p.image} alt={p.name} width="50px" />
              <span>{`R$ ${p.price.toFixed(2).toString().replace('.', ',')}`}</span>
              <button
                data-testid={`add-${p.id}-product`}
                onClick={onClickFunction}
              >
                Adicionar
              </button>
            </article>
          )))}
      </main>
      <CFooter />
    </Div>
  );
}