import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from '../src/App';

describe('Teste da página principal (App.jsx)', () => {
  beforeEach(() => {
    render(<App />);
  });

  describe('Verifica o componente Header', () => {
    it('Verifica se o Header é renderizado na página principal', () => {
      const headerComponent = screen.getByTestId('header-container');
      expect(headerComponent).toBeInTheDocument();
    });

    it('Verifica se o elemento <img /> renderiza a logo corretamente', () => {
      const imgElement = screen.getByTestId('header-container-logo');
      expect(imgElement).toHaveAttribute('src', 
        expect.stringContaining('https://cdn-icons-png.flaticon.com/512/2966/2966327.png')
      );
    });

    it('Verifica se o nome da distribuidora fictícia é renderizada corretamente', () => {
      const textContent = screen.getByTestId('header-container-hospital-name').textContent;
      expect(textContent).toEqual('A+ Distribuidora');
    });
  });
});
