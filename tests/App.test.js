import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import 'jest-localstorage-mock';

// Helpers
import renderWithRouter from './helpers/renderWithRouter';

// Pages
import App from '../src/App';

// Mocks
import productsMock from '../src/mock';

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
        expect.stringContaining('https://cdn-icons-png.flaticon.com/512/4320/4320350.png')
      );
    });

    it('Verifica se o nome da distribuidora fictícia é renderizada corretamente', () => {
      renderWithRouter(<App />);
      const textContent = screen.getByTestId('header-container-hospital-name').textContent;
      expect(textContent).toEqual('A+ Distribuidora');
    });

    it('Verifica se o usuário é redirecionado para a página de conta do usuário ao clicar em "Minha Conta"', async () => {
      const { history } = renderWithRouter(<App />);

      const toAccountPageLink = screen.getByTestId('header-container-account-link');
      await userEvent.click(toAccountPageLink);

      expect(history.location.pathname).toBe('/u/account');
    });

    it('Verifica se o usuário é redirecionado para a página de checkout ao clicar no carrinho', async () => {
      const { history } = renderWithRouter(<App />);

      const toCheckoutPageLink = screen.getByTestId('header-container-cart-link');
      await userEvent.click(toCheckoutPageLink);

      expect(history.location.pathname).toBe('/checkout/cart');
    });
  });

  describe('Verifica o componente Navegation', () => {
    it('Verifica se o componente Navegation é renderizado corretamente', () => {
      renderWithRouter(<App />);
      const navegationElement = screen.getByTestId('navegation-container');
      expect(navegationElement).toBeInTheDocument();
    });

    it('Verifica se os tipos de produto são renderizados corretamente', () => {
      renderWithRouter(<App />);
      const typeElements = screen.getAllByTestId(/type-product-/i);

      const uniqueTypes = [...new Set(productsMock.map((p) => p.type))];

      expect(typeElements).toHaveLength(uniqueTypes.length);
    });
  });

  describe('Verifica elementos renderizados por ação do usuário', () => {
    it('Verifica se ao digitar um nome na barra de pesquisa o resultado aparece corretamente', async () => {
      renderWithRouter(<App />);
      const searchInputElement = screen.getByTestId('search-input');

      await userEvent.type(searchInputElement, 'Aparelho');

      const findProduct = screen.getByTestId('product-12-by-search');

      expect(findProduct).toBeInTheDocument();
    });

    it('Verifica se ao escolher um tipo de produto na barra de navegação é renderizado um produto do tipo correto', async () => {
      renderWithRouter(<App />);
      const glovesTypeElement = screen.getByTestId('type-product-Luvas');

      await userEvent.click(glovesTypeElement);
      
      const findProduct = screen.queryByText('Luva Cirúrgica Estéril Látex Sensitex');
      
      expect(findProduct).toBeInTheDocument();
    });

    it('Verifica se ao clicar no botão "Adicionar", o produto correspondente é armazenado no localStorage', async () => {
      renderWithRouter(<App />);
      const product = {
        image: 'https://cdn.vnda.com.br/1200x/pedeapoio/2019/07/09/25903-aparelho-de-pressao-gamma-gp-adulto-2405.jpg',
        name: 'Aparelho de Pressão Gamma GP Adulto Heine',
        price: 'R$ 1690,00',
        quantity: 1,
      };
    
      const addButtonElement = screen.getAllByRole('button')[0];
    
      await userEvent.click(addButtonElement);
      localStorage.setItem('cart', JSON.stringify(product));

      expect(product).toEqual(JSON.parse(localStorage.getItem('cart')));
    });
  });
});
