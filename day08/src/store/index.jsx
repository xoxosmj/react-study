import { combineReducers } from "redux";
import color from './modules/color';
import count from './modules/count';
import animal from './modules/animal';
import coffee from './modules/coffee';

export default combineReducers({
  
  //이름 : 값
  // color : color  //똑같은 이름이면 하나로 퉁친다
  
  color,
  count : count,
  animal,
  coffee
});