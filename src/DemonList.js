import Demons from './demonlist.json'
import { useState } from 'react';
// import IMAGES from '../public/images/index.js'

export default function DemonList() {
  const [demons, setDemons] = useState(Demons)

  return (
    
    <div className="demon-list">
      <h1>Demon Directory</h1>
      {demons.map(demon=>
        <div className="demon-snippet" key={demons.indexOf(demon)}>
            <div className="snippet-left">
                <img src={ demon.image } alt="" />
              {/* <img src={ IMAGES.abbadon } alt="" /> */}
            </div>
            <div className="snippet-right">
          <h3>{demon.name}</h3>
          <p>{demon.description}<a href="google.com">More...</a></p>
            </div>
        </div>
        )}
      </div>
  )
}
