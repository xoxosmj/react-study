import React, { createContext, useState } from 'react';

export const ChangeCountContext = createContext();

const ChangeCountProvider = (props) => {
  const [count, setCount] = useState(0);

  const increment = (step) => {
    setCount(count + step)
  }

  const decrement = (step) => {
    setCount(count - step)
  }


  return (

    // <ChangeCountContext.Provider value count, increment, decrement }}>
    <ChangeCountContext.Provider value={{ count, increment, decrement }}>

      {props.children}
      
    </ChangeCountContext.Provider>
  );
};

export default ChangeCountProvider;