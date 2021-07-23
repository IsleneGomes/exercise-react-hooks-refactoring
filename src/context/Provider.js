// src/context/Provider.js

import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({ children }) {
  const [cars, setCars] = useState({red: false, blue: false, yellow: false});

  const moveCar = (car, side) => {
    setCars({
        ...cars,
        [car]: side,
    });
  };

    return (
      <CarsContext.Provider value={ { cars, moveCar } } >
        {children}
      </CarsContext.Provider>
    );
};

export default Provider;
