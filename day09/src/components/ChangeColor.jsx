import React, { useContext } from 'react';
import { ChangeColorContext } from '../contexts/ChangeColorContext';

const ChangeColor = () => {
  const { color, onColor } = useContext(ChangeColorContext);
  return (
    <div>
      <h1 style={{ color: color }}>글자의 색깔 변경{color}</h1>
      <p>
        <button>
          <button onClick={() => onColor('red')}>빨간색으로 변경</button>
          <button onClick={() => onColor('blue')}>파란색으로 변경</button>
          <button onClick={() => onColor('green')}>초록색으로 변경</button>
        </button>
      </p>
    </div>
  );
};

export default ChangeColor;