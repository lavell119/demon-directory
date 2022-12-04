import React from 'react'
import Demons from './demonlist.json'
import { useState } from 'react'

export default function Test() {
    const [demons, setDemons] = useState(Demons)
    const selectedDemon = demons[0].description
    console.log(selectedDemon)
    console.log(Demons)
    const string="test <i>string</i>"
  return (
    <>
        <div dangerouslySetInnerHTML={{__html: selectedDemon}} />
    <div>{string}</div>
    </>
  )
}
