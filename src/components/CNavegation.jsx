import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// Mock
import productsMock from '../mock';

// Css
import { Nav } from '../styles/components/Navegation.style';

export default function CNavegation({ setType }) {
  const [productTypes, setProductsTypes] = useState([]);

  useEffect(() => {
    try {
      if (productsMock) {
        const uniqueTypes = [...new Set(productsMock.map((p) => p.type))];
        setProductsTypes(uniqueTypes);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  const onClickFunction = ({ target }) => {
    const { outerText } = target;

    switch (outerText) {
    case 'PRESSÃO':
      setType(outerText);
      break;
    case 'EQUIPO':
      setType(outerText);
      break;
    case 'LUVAS':
      setType(outerText);
      break;
    case 'SERINGA':
      setType(outerText);
      break;
    default:
      break;
    }
  };

  return (
    <Nav
      data-testid="navegation-container"
    >
      <div>
        {productTypes.map((t, index) => {
          return (
            <button
              type='button'
              key={index}
              onClick={onClickFunction}
              data-testid={`type-product-${t}`}
            >
              {t.toUpperCase()}
            </button>
          );
        })}
      </div>
    </Nav>
  );
}

CNavegation.propTypes = {
  setType: PropTypes.func,
};