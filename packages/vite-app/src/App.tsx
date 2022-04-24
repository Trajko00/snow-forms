import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { MyPage } from './MyPage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <MyPage />
    </div>
  );
}

export default App;
