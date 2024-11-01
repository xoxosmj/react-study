import React, { createContext, useContext, useReducer } from 'react';
/* 
[ Context 필요한 이유 ]
 - props drilling 문제 해결 : 중간 컴포넌트 거치지 않고 직접 데이터 전달 가능
 - 전역 상태 관리 : 여러 컴포넌트에서 공유해야 하는데 데이터 관리 용이
[ useReducer 필요한 이유 ] 
 - 복잡한 상태 로직을 한 곳에서 관리
 - 관련된 상태 변화들을 그룹화
 - 상태 변화의 패턴화, 예측 가능성 증가
==============================================
 - Counter와 Toggle 두 가지 기능이 필요함
 1. 카운터 기능: 증가, 감소, 초기화
 2. 토글 기능 : true/false 전환, 강제 true, 강제 false
*/

// ========================================================
// //1. Context 생성
// export const CounterContext = createContext();
// ========================================================
// 사용자가 만든 Hooks 사용하기

const CounterContext = createContext();
export const useCounter = () => useContext(CounterContext);


//2. 초기값 설정
const initialState = { counter: 0 };

// 4 - 새로 reducer 함수를 추가함 
// (두개의 매개변수 받음 - state 현재 상태, action 어떤 동작을 할지 지정하는 객체)
// action.type에 따라 다른 동작을 수행함 
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { counter: state.counter + 1 };
    case 'DECREMENT':
      return { counter: state.counter - 1 };
    case 'RESET':
      return { counter: 0 };
    default:
      return state;
  }
};

  // 3. Provider 컴포넌트 기본 구조 생성하기
  const CounterProvider = ({ children }) => {
  //  5- Provider에 useReducer 추가하기
  // Provider에서 useReducer를 사용해 state와 dispatch를 생성
  // (state 현재 상태값, dispatch 상태를 변경하는 함수)
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
   
      <CounterContext.Provider value={{ state, dispatch }}>
        {children}
      </CounterContext.Provider>
    
  );
};

export default CounterProvider;