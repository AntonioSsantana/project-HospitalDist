import React, { useEffect, useState } from 'react';

export default function Checkout() {

  const [checkoutProducts, setCheckoutProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    try {
      const products = JSON.parse(localStorage.getItem('cart'));
      setCheckoutProducts(products);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const onClickFunction = ({ target }) => {
    const { name } = target;

    switch (name) {
    case 'addiction-quantity':
      setQuantity(quantity + 1);
      break;
    case 'reduce-quantity':
      if (quantity === 1) {
        break;
      }
      setQuantity(quantity - 1);
      break;
    default:
      break;
    }
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
                        {p.name}
                      </td>
                      <td>
                        {p.price}
                      </td>
                      <td>
                        <button
                          name='reduce-quantity'
                          onClick={onClickFunction}
                        >
                          -
                        </button>
                        <p>{quantity}</p>
                        <button
                          name='addiction-quantity'
                          onClick={onClickFunction}
                        >
                          +
                        </button>
                      </td>
                      <td>
                        {
                          quantity > 1 ? (
                            `R$ ${(p.price.replace('R$', '').replace(',', '.') * quantity).toFixed(2).replace('.', ',')}`
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
      </main>
    </div>
  );
}