import React, { useState } from 'react'
import bootstrap from 'bootstrap'
function Form({addContact}) {
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name.trim()&&number.trim()){
            addContact(name, number);
        }
        setName("")
        setNumber("")
    }
  return (
    <form onSubmit={handleSubmit}>
        <input onChange={(e)=>setName(e.target.value)} type="text" placeholder='| Name' value={name}/>
        <input onChange={(e)=>setNumber(e.target.value)} type="number" placeholder='| Phone Number' value={number}/>
        <button type='submit'>Add</button>
    </form>
  )
}

export default Form