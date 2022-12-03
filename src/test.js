import React from 'react'
import { useParams } from 'react-router-dom'
import Demons from './demonlist.json'
import { useState } from 'react'
import { useEffect } from 'react'
import abaddon from './images/Abaddon.webp'
import IMAGES from './images/index.js'


export default function Test(img="./images/Abaddon.webp") {
    console.log(IMAGES)
    const [image, setImage] = useState()
    const name="abaddon"
    const demonImg = abaddon
    const { id } = useParams()
    const [demon, setDemon] = useState(Demons[id])
    return(
      <>
            <h2>{demon.name}</h2>
            <img src={require("./images/Abaddon.webp")} />
=            <img src={`/${demon.image}`} />

      </>
    )
  
}