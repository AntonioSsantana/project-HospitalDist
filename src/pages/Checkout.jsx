import React, { useEffect, useState } from 'react';

export default function Checkout() {

  const [checkoutProducts, setCheckoutProducts] = useState([]);

  useEffect(() => {
    try {
      const products = JSON.parse(localStorage.getItem('cart'));
      setCheckoutProducts(products.map((product) => ({ ...product, quantity: 1 })));
    } catch (error) {
      console.error(error);
    }
  }, []);

  const onClickFunction = ({ target }) => {
    const { parentNode, name } = target;
    const grandParent = parentNode.parentNode;
    const productName = grandParent.querySelector('span').textContent;

    const updatedProducts = checkoutProducts.map((product) => {
      if (product.name === productName) {
        switch (name) {
        case 'add':
          return { ...product, quantity: product.quantity + 1 };
        case 'remove':
          if (product.quantity > 1) {
            return { ...product, quantity: product.quantity - 1 };
          }
          break;
        default:
          break;
        }
      }
      return product;
    });

    setCheckoutProducts(updatedProducts);
  };

  return (
    <div>
      <header>
        <div>
          <a
            href="/"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2966/2966327.png"
              alt="logo"
              width="50px" />
            <p>Bem Estar Distribuidora</p>
          </a>
        </div>
      </header>
      <main>
        <div>
          <h3>Carrinho</h3>
          <table>
            <thead>
              <tr>
                <th>Produto</th>
                <th>Preço</th>
                <th>Quantidade</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {
                checkoutProducts.map((p, index) => {
                  return (
                    <tr
                      key={index}
                    >
                      <td>
                        <img
                          src={p.image}
                          alt={`${p.name} image`}
                          width='50px'
                        />
                        <span>{p.name}</span>
                      </td>
                      <td>
                        {p.price}
                      </td>
                      <td>
                        <button
                          name='remove'
                          onClick={onClickFunction}
                        >
                          -
                        </button>
                        <p>{p.quantity}</p>
                        <button
                          name='add'
                          onClick={onClickFunction}
                        >
                          +
                        </button>
                      </td>
                      <td>
                        {
                          p.quantity > 1 ? (
                            `R$ ${(p.price.replace('R$', '').replace(',', '.') * p.quantity).toFixed(2).replace('.', ',')}`
                          ) : (p.price)
                        }
                      </td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </main >
    </div >
  );
}