import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const About = () => {


  const [phone, setPhone] = useState({
    about: undefined,
  })


  const handleChange = e => {
    setPhone(prev => ({ ...prev, [e.target.id]: e.target.value }))
  }
  console.log(phone)

  const handleClick = async e => {
    e.preventDefault()
    console.log(phone)
    try {
      const res = await fetch(`http://localhost:4000/general`, {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(phone)
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
      <h1>About the listing</h1>
      <h4>Add phone number</h4>
      <input type="number" id='about' onChange={handleChange} />
      <div className='links'>
        <Link className='back' to='/galleryImage'>back</Link>

        <Link className='next' to='/category' type='submit'>next</Link>
      </div>
    </div>
  )
}

export default About