import Demons from './demonlist.json'
import { useState } from 'react';
import { Link } from 'react-router-dom'
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
            <div className="snippet-  right">
          <h3>
            <Link to="/demon/:id">{demon.name}</Link>
          </h3>
          <p>{demon.description.substr(0,300)}...<a href="google.com">more...</a></p>
            </div>
        </div>
        )}
      </div>
  )
}
