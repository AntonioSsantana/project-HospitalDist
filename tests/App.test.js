import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

// Helpers
import renderWithRouter from './helpers/renderWithRouter';

// Pages
import App from '../src/App';


describe('Teste da página principal (App.jsx)', () => {
  describe('Verifica o componente Header', () => {
    it('Verifica se o Header é renderizado na página principal', () => {
      renderWithRouter(<App />);
      const headerComponent = screen.getByTestId('header-container');
      expect(headerComponent).toBeInTheDocument();
    });

    it('Verifica se o elemento <img /> renderiza a logo corretamente', () => {
      renderWithRouter(<App />);
      const imgElement = screen.getByTestId('header-container-logo');
      expect(imgElement).toHaveAttribute('src',
        expect.stringContaining('https://cdn-icons-png.flaticon.com/512/2966/2966327.png')
      );
    });

    it('Verifica se o nome da distribuidora fictícia é renderizada corretamente', () => {
      renderWithRouter(<App />);
      const textContent = screen.getByTestId('header-container-hospital-name').textContent;
      expect(textContent).toEqual('A+ Distribuidora');
    });

    it('Verifica se o usuário é redirecionado para a página de checkout ao clicar no carrinho', async () => {
      const { history } = renderWithRouter(<App />);

      const toCartLink = screen.getByTestId('header-container-cart-link');
      await userEvent.click(toCartLink);

      expect(history.location.pathname).toBe('/checkout/cart');
    });
  });
});
