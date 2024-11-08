import React, { FormEvent } from 'react'

export default function NewWork() {

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        alert("yo")
    }

  return (
    <>
    <div>Lägg till ny erfarenhet</div>
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: "column" }} className=''>

        <label htmlFor="company">Företag:</label>
        <input id="company" name="company" type='text' />

        <label htmlFor='title'>Titel</label>
        <input id="title" name="title" type='text' />

        <label htmlFor='fromDate'>Start</label>
        <input id="fromDate" name="fromDate" type='month'  />

        <label htmlFor='toDate'>Slut</label>
        <input id="toDate" name="toDate" type='month'  />

        <label htmlFor='location'>Plats</label>
        <input id="location" name="location" type='text'  />

        <label htmlFor='description'>Beskrivning</label>
        <input id="description" name="description" type='textarea'  />
        
        <br></br>
        <button type='submit'>Lägg till</button>
    </form>

    </>
  )
}
