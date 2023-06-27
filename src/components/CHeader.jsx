import React from 'react';

export default function CHeader() {
  return (
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
      <div>
        <a
          href="/u/account"
        >
          <img
            src="https://www.pngmart.com/files/21/Account-User-PNG-Photo.png"
            alt="minha conta"
            width="35px"
          />
          <p>Minha Conta</p>
        </a>
      </div>
      <div>
        <a
          href="checkout/cart"
        >
          <img
            src="https://www.freeiconspng.com/uploads/shopping-cart-icon-30.png"
            alt="carrinho"
            width="35px"
          />
        </a>
      </div>
    </header>
  );
}