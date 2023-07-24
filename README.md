## Projeto HospitalDist

HospitalDist é uma aplicação web que permite aos usuários visualizarem materiais hospitalares, filtrarem produtos por tipo e adicionar itens ao carrinho.

⚠️ O projeto ainda está em **desenvolvimento**, testes e estilização ainda incompletos.

### Dependências

Para executar o projeto, você precisará ter as seguintes dependências instaladas:

```json
  "dependencies": {
    "components": "^0.1.0",
    "dotenv": "^16.3.1",
    "history": "^5.3.0",
    "prop-types": "^15.8.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.13.0",
    "react-testing-library": "^8.0.1",
    "styled-components": "^6.0.3"
  },
  "devDependencies": {
    "@babel/core": "^7.22.5",
    "@babel/preset-env": "^7.22.5",
    "@babel/preset-react": "^7.22.5",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^14.0.0",
    "@testing-library/user-event": "^14.4.3",
    "@types/react": "^18.0.37",
    "@types/react-dom": "^18.0.11",
    "@vitejs/plugin-react": "^4.0.0",
    "babel-jest": "^29.5.0",
    "eslint": "^8.38.0",
    "eslint-plugin-react": "^7.32.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.3.4",
    "jest": "^29.5.0",
    "jest-environment-jsdom": "^29.5.0",
    "jest-localstorage-mock": "^2.4.26",
    "vite": "^4.3.9"
  }
}
```

### Funcionalidades

- Visualização de Materiais Hospitalares: Os usuários podem visualizar uma variedade de materiais hospitalares com seus respectivos preços.
- Filtragem por Tipo de Produto: A aplicação permite filtrar produtos por tipo, facilitando a busca por itens específicos.
- Adicionar ao Carrinho: Os usuários têm a opção de adicionar produtos ao carrinho para compras futuras.
- Validação de Credenciais: O usuário pode adicionar suas credenciais em "Minha Conta" e verificar se os dados estão corretos e válidos após o botão ficar habilitado.

### Instalação

Para executar a aplicação localmente, siga os passos abaixo:

1. Clone o repositório para o seu ambiente local:

```
git clone <url_do_repositorio>
```

2. Instale as dependências do projeto:

```
npm install
```

3. Inicie o servidor de desenvolvimento:

```
npm run dev
```

### Testes

O projeto conta com testes implementados utilizando a biblioteca react-testing-library. Para executar os testes, utilize o seguinte comando:

```
npm run test
```