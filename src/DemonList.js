import Demons from './finaldemonlist.json'
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
            <div className="snippet-right">
          <h3>
            <Link to={`/demon/${demons.indexOf(demon)}`}>{demon.name}</Link>
          </h3>
          <p>{demon.snippet}</p>
          <span></span>
          <Link to={`/demon/${demons.indexOf(demon)}`}>More</Link>

            </div>
        </div>
        )}
      </div>
  )
}
