import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Pricing = () => {


  const [price, setPrice] = useState({
    price: undefined,
  })


  const handleChange = e => {
    setPrice(prev => ({ ...prev, [e.target.id]: e.target.value }))
  }
  console.log(price)

  const handleClick = async e => {
    e.preventDefault()
    console.log(price)
    try {
      const res = await fetch(`http://localhost:4000/general`, {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(price)
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
      <h1>Pricing</h1>
      <h3>Base Price</h3>
      <input type="number" id='price' onChange={handleChange} />


      <div className='links'>
        <Link className='back' to='/category'>back</Link>

        <Link className='next' to='/reservation' type='submit'>next</Link>
      </div>
    </div>
  )
}

export default Pricing