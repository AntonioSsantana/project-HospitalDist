import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// Mock
import productsMock from '../mock';

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
    case 'Pressão':
      setType(outerText);
      break;
    case 'Equipo':
      setType(outerText);
      break;
    case 'Luvas':
      setType(outerText);
      break;
    case 'Seringa':
      setType(outerText);
      break;
    default:
      break;
    }
  };

  return (
    <nav
      data-testid="navegation-container"
    >
      <div>
        {productTypes.map((t, index) => {
          return (
            <li
              key={index}
              onClick={onClickFunction}
              data-testid={`type-product-${t}`}
            >
              {t}
            </li>
          );
        })}
      </div>
    </nav>
  );
}

CNavegation.propTypes = {
  setType: PropTypes.func,
};