import React, { createContext, useState } from 'react';

export const ColorContext = createContext(); //관리자처럼 처리

const ColorProvider = (props) => {

  const [color, setColor] = useState('hotpink');

  const onRed = () => { setColor('red') }
  const onGreen = () => { setColor('green') }
  const onBlue = () => { setColor('blue') }
  const onMagenta = () => { setColor('magenta') }

  return (
    <ColorContext.Provider value={{ color, onRed, onGreen, onBlue, onMagenta }}>
      {props.children}
    </ColorContext.Provider>
  );
};

export default ColorProvider;