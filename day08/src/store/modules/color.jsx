//컴포넌트가 아니여서 파일명 소문자로 시작
//1. 액션 생성
// 모듈이름을 앞에 붙여주어서 액션명 중복 방지
const RED = 'color/RED';
const GREEN = 'color/GREEN';
const BLUE = 'color/BLUE';
const MAGENTA= 'color/MAGENTA';

//2. 액션 보내기
export const red = () => ({type  : RED})
export const green = () => ({type  : GREEN})
export const blue = () => ({type  : BLUE})
export const magenta = () => ({type  : MAGENTA})

//3. 초기값 잡기
const initialState = {color : 'hotpink'}

//4. 리듀서 만들기 -state, action 파라메터를 참조하여, 새로운 상태객체를 만듬
// state - 현재상태, action - 액션 객체
// 반드시 state에는 초기값을 주어야 한다.
const reducer = (state=initialState,action) =>{
  switch(action.type){
    case RED: return{color:'red'}
    case GREEN: return{color:'green'}
    case BLUE: return{color:'blue'}
    case MAGENTA: return{color:'magenta'}
    default : return state //반드시 default는 작성해야 한다.
  }

}

export default reducer // component가 아니라 순수 JS 파일이다.