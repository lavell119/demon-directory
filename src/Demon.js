import React from 'react'
import { useParams } from 'react-router-dom'
import Demons from './finaldemonlist.json'
import { useState } from 'react'
import { Link } from 'react-router-dom'



export default function Demon() {
 
  const [demons, setDemons] = useState(Demons)
  console.log(Demons)
  const { id  } = useParams()
  const selectedDemon = demons[id].description
  return (
      <>
      <h3> <Link to={'../'}>Home</Link></h3>
      <div className='individual-demon'>
        <h2>{demons[id].name}</h2>
        <img src={`/${demons[id].image}`} className="demon-img" alt="lo"/>
        <p class="description"><div class="description-ele">Description:</div>
        <div dangerouslySetInnerHTML={{__html: selectedDemon}} />
        </p>
      </div>
      </>
  )
}
