import React from 'react';
import Color from './components/Color';
import Count from './components/Count';
import Animal from './components/Animal';
import CoffeOrder from './components/CoffeeOrder';
import CoffeResult from './components/CoffeeResult';


const App = () => {
  return (
    <div>
      <Color />
      <hr/>
      <Count/>
      <hr/>
      <Animal/>
      <hr/>
      <CoffeOrder />
      <CoffeResult />
      <hr/>
      <CoffeOrder2 />
      <CoffeResult2 />
    </div>
  );
};

export default App;