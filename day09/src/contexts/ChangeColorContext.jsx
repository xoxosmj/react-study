import React, { createContext, useState } from 'react';

export const ChangeColorContext = createContext();

const ChangeColorProvider = (props) => {

  const [color, setColor] = useState('cyan')

  const onColor = (text) => {
    setColor(text);
  }

  return (
    <ChangeColorContext.Provider value={{color,onColor}}>
      {props.children}

    </ChangeColorContext.Provider>
  );
};

export default ChangeColorProvider;