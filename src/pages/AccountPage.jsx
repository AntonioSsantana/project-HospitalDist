import React from 'react';

export default function AccountPage() {
  return (
    <form>
      <label
        htmlFor='username'
      >
        Nome de usuário
      </label>
      <input
        type='text'
        id='username'
      />
      <label
        htmlFor='email'
      >
        Email
      </label>
      <input
        type='text'
        id='email'
      />
      <label
        htmlFor='password'
      >
        Senha
      </label>
      <input
        type='password'
        id='password'
      />
      <label
        htmlFor='cpf-input'
      >
        CPF
      </label>
      <input
        type='text'
        id='cpf-input'
      />
      <label
        htmlFor='number'
      >
        Número
      </label>
      <input
        type='tel'
        id='number'
      />
    </form>
  );
}