import React from 'react'
import { useParams } from 'react-router-dom'
import Demons from './demonlist.json'
import { useState } from 'react'
import { useEffect } from 'react'


export default function Demon() {
 
  const [demons, setDemons] = useState(Demons)
  console.log(Demons)
  const { id  } = useParams()
  return (
    <>
    <h2>
      {Demons[id].name}
    </h2>
    <p>{(Demons[id].description)}</p>
    </>
  )
}
