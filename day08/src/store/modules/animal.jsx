//1. 액션 생성
//모듈 이름을 앞에 붙여주어서 액션명 중복을 방지한다.
const TIGER = 'animal/tiger';
const DOG = 'animal/dog';
const CAT = 'animal/cat';
const CHICK = 'animal/chick';

//2. 액션 보내기
export const tiger = () => ({ type: TIGER });
export const dog = () => ({ type: DOG });
export const cat = () => ({ type: CAT });
export const chick = () => ({ type: CHICK });

//3. 초기값 설정
const initialState = {
  name: '', // 초기 울음소리
  crying: '',
};

//4. 리듀서 만들기 - 파라메터를 참조하여, 새로운 상태 객체를 만든다.
//state - 현재상태(초기값), action - 액션 객체
//state는 반드시 초기값(initialState)을 주어야 한다.
const reducer = (state = initialState, action) => {
  switch (action.type) {
      case TIGER:
          return { ...state, name: "호랑이", crying: '어흥' };
      case DOG:
          return { ...state, name: "강아지", crying: '멍멍' };
      case CAT:
          return { ...state, name: "고양이", crying: '야옹' };
      case CHICK:
          return { ...state, name: "병아리", crying: '짹짹' };
      default:
          return state;
  }
};

//컴포넌트가 아닌 순수 js파일이다.
export default reducer;