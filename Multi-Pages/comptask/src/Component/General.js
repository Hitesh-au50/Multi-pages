import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const General = () => {

  const [general, setGeneral] = useState({
    title: undefined,
    Description: undefined
  })


  const handleChange = e => {
    setGeneral(prev => ({ ...prev, [e.target.id]: e.target.value }))
  }
  console.log(general)

  const handleClick = async e => {
    e.preventDefault()
    console.log(general)
    try {
      const res = await fetch(`http://localhost:4000/general`, {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(general)
      })
      console.log(res)
      const result = await res.json()
      if (!res.ok) {
        return alert(result.message)
      }
    } catch (err) {
      alert(err.message)
    }


  }


  return (
    <div onClick={handleClick}>
      <h1>General</h1>
      <h4>Title</h4>
      <input type='text' placeholder='write title...' id='title' onChange={handleChange}></input>
      <h4>Description</h4>
      <input type='textarea' placeholder='write description..' id='Description' onChange={handleChange}></input>
      <div className='links'>
        <Link className='next' to='/galleryImage' type='submit'>next</Link>
      </div>
    </div>
  )
}

export default General