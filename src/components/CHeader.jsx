import React from 'react';
import { Link } from 'react-router-dom';

// Css
import { Header } from '../styles/components/Header.style';

export default function CHeader() {
  return (
    <Header
      data-testid="header-container"
    >
      <div>
        <Link
          to="/"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/4320/4320350.png"
            alt="logo"
            width="50px"
            data-testid="header-container-logo"
          />
          <span
            data-testid="header-container-hospital-name"
          >
            A+ Distribuidora
          </span>
        </Link>
      </div>
      <div>
        <Link
          to="/u/account"
        >
          <img
            src="https://www.pngmart.com/files/21/Account-User-PNG-Photo.png"
            alt="minha conta"
            width="35px"
            data-testid="header-container-account-link"
          />
          <span>Minha Conta</span>
        </Link>
      </div>
      <div>
        <Link
          to="checkout/cart"
          data-testid="header-container-cart-link"
        >
          <img
            src="https://www.freeiconspng.com/uploads/shopping-cart-icon-30.png"
            alt="carrinho"
            width="35px"
            data-testid="header-container-cart"
          />
        </Link>
      </div>
    </Header>
  );
}