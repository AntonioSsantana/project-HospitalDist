import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AccountPage from '../../src/pages/AccountPage';
require('dotenv').config();
import '@testing-library/jest-dom/extend-expect';

describe('AccountPage', () => {
  it('Verifica se os inputs estão sendo renderizados corretamente', () => {
    render(<AccountPage />);
    const findInputs = screen.getAllByLabelText(/.+\*$/);
    expect(findInputs).toHaveLength(5);
  });

  it('Verifica se ao inserir os dados corretamente nos inputs o botão de confirmar é habilitado', async () => {
    render(<AccountPage />);
    
    const nameInputElement = screen.getByTestId('account-username-input');
    const emailInputElement = screen.getByTestId('account-email-input');
    const passwordInputElement = screen.getByTestId('account-password-input');
    const cpfInputElement = screen.getByTestId('account-cpf-input');
    const telephoneInputElement = screen.getByTestId('account-telephone-input');

    expect(nameInputElement).toBeInTheDocument();
    expect(emailInputElement).toBeInTheDocument();
    expect(passwordInputElement).toBeInTheDocument();
    expect(cpfInputElement).toBeInTheDocument();
    expect(telephoneInputElement).toBeInTheDocument();

    await userEvent.type(nameInputElement, process.env.USERNAME_KEY);
    await userEvent.type(emailInputElement, process.env.EMAIL_KEY);
    await userEvent.type(passwordInputElement, process.env.PASSWORD_KEY);
    await userEvent.type(cpfInputElement, process.env.CPF_KEY);
    await userEvent.type(telephoneInputElement, process.env.TELEPHONE_KEY);

    const confirmButtonElement = screen.getByText(/confirmar/i);

    expect(confirmButtonElement).not.toHaveAttribute('disabled');
  });
});
