import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { decrement, increment, reset } from '../store/modules/count';

const Count = () => {

  const count = useSelector(state=> state.count.count)
  const dispatch =  useDispatch();
  const color = useSelector(state=> state.color.color)

  return (
    <div>
      <h1 style={{color:color}}>카운트 : {count} </h1>
      <p>
        <button onClick={()=>dispatch(increment())}>INCREMENT</button>
        <button onClick={()=>dispatch(decrement())}>DECREMENT</button>
        <button onClick={()=>dispatch(reset())}>RESET</button>
      </p>
    </div>
  );
};

export default Count;