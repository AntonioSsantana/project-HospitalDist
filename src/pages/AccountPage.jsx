import React, { useEffect, useState } from 'react';
import CPFvalidation from '../validations/CPFvalidation';

export default function AccountPage() {

  const [cpfValue, setCpfValue] = useState('');

  const [isDisable, setEnableButton] = useState(true);

  useEffect(() => {
    if (CPFvalidation(cpfValue)) {
      setEnableButton(false);
    } else {
      setEnableButton(true);
    }
  }, [cpfValue]);

  const onChangeFunction = ({ target }) => {
    const { name, value } = target;

    switch (name) {
    case 'cpf-input':
      setCpfValue(value);
      break;
    default:
      break;
    }
  };

  return (
    <form>
      <div>
        <label
          htmlFor='username'
        >
          Nome de usuário *
        </label>
        <input
          type='text'
          id='username'
        />
      </div>
      <div>
        <label
          htmlFor='email'
        >
          Email *
        </label>
        <input
          type='text'
          id='email'
        />
      </div>
      <div>
        <label
          htmlFor='password'
        >
          Senha *
        </label>
        <input
          type='password'
          id='password'
        />
      </div>
      <div>
        <label
          htmlFor='cpf-input'
        >
          CPF *
        </label>
        <input
          type='text'
          id='cpf-input'
          name="cpf-input"
          onChange={onChangeFunction}
        />
      </div>
      <div>
        <label
          htmlFor='number'
        >
          Número *
        </label>
        <input
          type='tel'
          id='number'
        />
      </div>
      <button
        disabled={isDisable}
      >
        Confirmar
      </button>
    </form>
  );
}