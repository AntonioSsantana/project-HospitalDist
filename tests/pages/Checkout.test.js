import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import 'jest-localstorage-mock';

// Helpers
import renderWithRouter from '../helpers/renderWithRouter';

// Pages
import App from '../../src/App';

describe('Testa a página do carrinho ( Checkout.jsx )', () => {
  it('Verifica se ao adicionar um produto no carrinho, na página de checkout o produto correspondente é renderizado corretamente', async () => {
    const { history } = renderWithRouter(<App />);

    const product = {
      image: 'https://cdn.vnda.com.br/1200x/pedeapoio/2019/07/09/25903-aparelho-de-pressao-gamma-gp-adulto-2405.jpg',
      name: 'Aparelho de Pressão Gamma GP Adulto Heine',
      price: 'R$ 1690,00',
      quantity: 1,
    };

    localStorage.setItem('cart', JSON.stringify(product));

    const toCheckoutPageLink = screen.getByTestId('header-container-cart-link');
    await userEvent.click(toCheckoutPageLink);

    const findProduct = screen.getByText('Aparelho de Pressão Gamma GP Adulto Heine');

    expect(history.location.pathname).toBe('/checkout/cart');
    expect(product).toEqual(JSON.parse(localStorage.getItem('cart')));
    expect(findProduct).toBeInTheDocument();
  });
});