import React, { useContext } from 'react';
import { ChangeCountContext } from '../contexts/ChangeCountContext';


const ChangCount = () => {
  const { count, increment, decrement } = useContext(ChangeCountContext);



  return (
    <div>
      <h1>카운트: {count}</h1>
      <button onClick={() => increment(1)}>증가 (+1)</button>
      <button onClick={() => decrement(1)}>감소 (-1)</button>
    </div>
  );
};

export default ChangCount;