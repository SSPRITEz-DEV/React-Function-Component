import React from 'react';
import CatList from './components/CatList';
import NumbersBox from './components/NumbersBox';

function App() {
  return (
    <div className="App">
      <CatList />
      <NumbersBox admin_name='prite' version={1}/>
    </div>
  );
}

export default App;
