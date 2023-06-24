import React, { useEffect, useState } from 'react';

// Validations
import {
  cpfValidation,
  emailValidation
} from '../validations/index';

export default function AccountPage() {

  const [userObject, setUserObject] = useState({
    username: '',
    email: '',
    password: '',
    cpf: '',
    telephone: '',
  });

  const [isDisable, setDisableButton] = useState(true);

  useEffect(() => {
    const { cpf, email } = userObject;

    if (cpfValidation(cpf) && emailValidation(email)) {
      return setDisableButton(false);
    }

    setDisableButton(true);
  }, [userObject]);

  const onChangeFunction = ({ target }) => {
    const { name, value } = target;

    switch (name) {
    case 'username-input':
      setUserObject({ ...userObject, username: value });
      break;
    case 'email-input':
      setUserObject({ ...userObject, email: value });
      break;
    case 'password-input':
      setUserObject({ ...userObject, password: value });
      break;
    case 'cpf-input':
      setUserObject({ ...userObject, cpf: value });
      break;
    case 'telephone-input':
      setUserObject({ ...userObject, telephone: value });
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
          name='username-input'
          onChange={onChangeFunction}
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
          name='email-input'
          onChange={onChangeFunction}
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
          name='password-input'
          onChange={onChangeFunction}
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
          name='telephone-input'
          placeholder='(xx) xxxxx-xxxx'
          onChange={onChangeFunction}
        />
      </div>
      <button
        type='button'
        disabled={isDisable}
      >
        Confirmar
      </button>
    </form>
  );
}