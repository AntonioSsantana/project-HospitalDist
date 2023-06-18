// Components
import { CNavegation } from './index';

export default function CHeader() {
  return (
    <header>
      <a
        href="/"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/2966/2966327.png"
          alt="logo"
          width="50px" />
        <p>Bem Estar Distribuidora</p>
      </a>
      <input
        placeholder="Pesquisa"
      />
      <a
        href="/i/service"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/2598/2598911.png"
          alt="atendimento"
          width="35px"
        />
        <p>Atendimento</p>
      </a>
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
      <a
        href="/u/cart"
      >
        <img
          src="https://www.freeiconspng.com/uploads/shopping-cart-icon-30.png"
          alt="carrinho"
          width="35px"
        />
      </a>
      <CNavegation />
    </header>
  );
}