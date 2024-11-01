import React from 'react';

import Count from './components/Count'
import CountProvider from './contexts/CountContext';

import Color from './components/Color'
import ColorProvider from './contexts/ColorContext';

import ChangeColor from './components/ChangeColor';
import ChangeColorProvider from './contexts/ChangeColorContext';

import ChangeCount from './components/ChangCount';
import ChangeCountProvider from './contexts/ChangeCountContext';
import CounterProvider from './contexts/CounterContext';
import ToggleProvider from './contexts/ToggleContext';
import Counter from './components/Counter';


const App = () => {
  return (
    <div>

      {/* 
      Context를 사용 할 컴포넌트의 상위 컴포넌트에서 Provider로 감싸주어야 한다 
      Provider의 모든 하위 컴포넌트가 얼마나 깊이 위치해 있는지 상관없이 
      Context의 데이터를 읽을 수 있다
      */}
      {/* <ColorProvider>
        <CountProvider>
          <Color />
          <Count />
        </CountProvider>
      </ColorProvider>
    
      <ChangeColorProvider>
        <ChangeCountProvider>
          <ChangeColor />
          <hr />
          <ChangeCount />
        </ChangeCountProvider>
      </ChangeColorProvider> */}

      <CounterProvider>
        <ToggleProvider>
          <Counter />
        </ToggleProvider>
      </CounterProvider>

      {/* <TodosProvider>
        <ColorProvider>
          <CountProvider>
            <Todos />
            <hr />
            <Color />
            <hr />
            <Count />
          </CountProvider>
        </ColorProvider>
      </TodosProvider> */}

    </div>
  );
};

export default App;