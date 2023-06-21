import React from 'react';

export default function Checkout() {
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
        </div>
        <div>
          <p>Total: R$</p>
        </div>
        <div>
          <button>ADICIONAR MAIS PRODUTOS</button>
          <button>FECHAR PEDIDO</button>
        </div>
      </main>
    </div>
  );
}