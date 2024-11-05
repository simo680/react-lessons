import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { Context } from './context/Context';

function App() {
  
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6])
  
  function deleteFirstValue() {
    setNumbers(numbers.slice(1))
  }
  
  return (
    <Context>
    <div>
    <h2>App</h2>
    <p>{numbers}</p>
    <Header deleteFirstValue={deleteFirstValue}/>
    <Main/>
    </div>
    </Context>
  );
}

export default App;
