import React, { useEffect, useState } from 'react';

// Mock
import productsMock from '../mock';

export default function CNavegation() {
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

  return (
    <nav>
      <div>
        {productTypes.map((t, index) => {
          return (
            <span
              key={index}
            >
              {t}
            </span>
          );
        })}
      </div>
    </nav>
  );
}