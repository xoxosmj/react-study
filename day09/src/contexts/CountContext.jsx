import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';

export const CountContext = createContext();


const CountProvider = (props) => {
  //state,함수등 모든 처리
  //provider에는 value라는 props가 있으며,  이것이 데이터 하위컴포넌트에게 전달한다.
  const [count, setCount] = useState(0); //카운트변수를 잡는다.

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  return (
      <CountContext.Provider value={{ count, increment, decrement }}>
        {/* children은 부모 컴포넌트에서 자식 엘레먼트나 컴포넌트  포함할때 자동으로 전달된다 */}
        {props.children}

      </CountContext.Provider>

  );
};

export default CountProvider;