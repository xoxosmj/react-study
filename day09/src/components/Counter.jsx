import React, { useContext } from 'react';
// ========================================================
// 사용자가 만든 Hooks 사용하기
// import { CounterContext, useCounter } from '../contexts/CounterContext';
// import { ToggleContext, useToggle } from '../contexts/ToggleContext';
// ========================================================
import { useCounter } from '../contexts/CounterContext';
import { useToggle } from '../contexts/ToggleContext';

const Counter = () => {
  // ========================================================
  // 사용자가 만든 Hooks 사용하기
  // const { state, dispatch } = useContext(CounterContext);
  // const { state2, dispatch2 } = useContext(ToggleContext);
  // ========================================================
  // Counter Context에서 state, state2와 dispatch, 가져오기

  const { state, dispatch } = useCounter();
  const { state2, dispatch2 } = useToggle();

  return (
    <div>
      <h1> 카운터 : {state.counter}</h1>
      <h1 style={{ color: state2.isChk ? 'red' : '#000' }}>
        토글 : {`${state2.isChk}`}
      </h1>
      <p>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>증가</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>감소</button>
        <button onClick={() => dispatch({ type: 'RESET' })}>초기화</button>
      </p>
      <p>
        <button onClick={() => dispatch2({ type: 'TOGGLE' })}>Toggle</button>
        <button onClick={() => dispatch2({ type: 'TRUE' })}>True</button>
        <button onClick={() => dispatch2({ type: 'FALSE' })}>False</button>
      </p>
    </div>
  );
};

export default Counter;