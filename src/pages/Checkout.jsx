import React, { useEffect, useState } from 'react';

export default function Checkout() {

  const [checkoutProducts, setCheckoutProducts] = useState([]);

  useEffect(() => {
    try {
      const products = JSON.parse(localStorage.getItem('cart'));
      setCheckoutProducts(products);
    } catch (error) {
      console.error(error);
    }
  }, [checkoutProducts]);

  const onClickFunction = ({ target }) => {
    const { parentNode, name } = target;
    const grandParent = parentNode.parentNode;
    const productName = grandParent.querySelector('span').textContent;

    if (name === 'remove-checkout-product' && checkoutProducts) {
      const fetchProduct = checkoutProducts.filter((p) => p.name !== productName);
      localStorage.setItem('cart', JSON.stringify(fetchProduct));
      setCheckoutProducts(fetchProduct);
      return;
    }

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
            <p>A+ Distribuidora</p>
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
                checkoutProducts ? checkoutProducts.map((p, index) => {
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
                      <td>
                        <button
                          name='remove-checkout-product'
                          onClick={onClickFunction}
                        >
                          Remover
                        </button>
                      </td>
                    </tr>
                  );
                }) : null
              }
            </tbody>
          </table>
        </div>
      </main >
    </div >
  );
}