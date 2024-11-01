import React from 'react';
import {CountContext} from '../contexts/CountContext';
import { useContext } from 'react';

const Count = () => {
  const { count, increment, decrement } = useContext(CountContext);

  return (
    <div>
      <h1>카운트 {count}</h1>
      <p>
        <button onClick={() => increment()}>증가</button>
        <button onClick={() => decrement()}>감소</button>
      </p>
    </div>
  );
};

export default Count;