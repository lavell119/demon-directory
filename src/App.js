import './App.css'
import DemonList from './DemonList.js'
import Demons from './demonlist.json'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Demon from './Demon.js'

function App() {
  const [demons, setDemons] = useState(Demons)
  console.log(demons)
  
  return (
  <Router>
    <div className="App">
      <Switch>
        <Route exact path="/">
          <DemonList />
        </Route>
        <Route path="/demon/:id">
          <Demon />
        </Route>
      </Switch>        
   </div>
  </Router>
  );
}

export default App;
