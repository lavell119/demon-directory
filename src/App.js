import './App.css';
import DemonList from './DemonList.js'
import Demons from './demonlist.json'
import { useState } from 'react';

function App() {
  const [demons, setDemons] = useState(Demons)
  console.log(demons)
  
  return (
    <div className="App">
        <DemonList />
    </div>
  );
}

export default App;
