import Demons from './demonlist.json'
import { useState } from 'react';

export default function DemonList() {
  const [demons, setDemons] = useState(Demons)
  return (
    
    <div className="demon-list">
      <h1>Demon Directory</h1>

      {demons.map(demon=>
        <div className="demon-snippet">
          <h3>{demon.name}</h3>
          <p>{demon.description}</p>
        </div>
        )}
      </div>
  )
}
