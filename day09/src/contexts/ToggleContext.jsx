import React, { createContext, useContext, useReducer } from 'react';

// ========================================================
// 사용자가 만든 Hooks 사용하기
//1. Toggle용 Context 생성
// export const ToggleContext = createContext();
// ========================================================
// //1. Context 생성
const ToggleContext = createContext();
//커스텀 훅에서 state2, dispatch2로 이름 변경하여 반환
export const useToggle = () => useContext(ToggleContext);

//2. 초기값 설정 - isChk는 체크 여부를 나타내는 불리언 값
const initialState = {
    isChk: false
};

//3. Toggle용 reducer 함수
const reducer = (state2, action) =>{
    switch (action.type) {
        case 'TOGGLE':
            return {isChk: !state2.isChk };  //현재 상태의 반대값
        case 'TRUE':
            return {isChk: true };          //강제로 true
        case 'FALSE' :
            return {isChk: false};         //강제로 false
        default:
            return state2;
    }
};

// 4. Toggle Provider 컴포넌트
const ToggleProvider = ({ children }) => {
    const [state2, dispatch2] = useReducer(reducer, initialState);
    return (
        <div>
            <ToggleContext.Provider value={{state2, dispatch2}}>
                {children}
            </ToggleContext.Provider>
            
        </div>
    );
};

export default ToggleProvider;