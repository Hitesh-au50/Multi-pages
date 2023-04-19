import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Reservation = () => {



  const [reservation, setReservation] = useState({
    noOfGuest: undefined,
    Rprice: undefined,
    minHourReservation: undefined,
    maxHourReservation: undefined,
    appoinment: undefined,
    tBappoinment: undefined,
  })


  const handleChange = e => {
    setReservation(prev => ({ ...prev, [e.target.id]: e.target.value }))
  }
  console.log(reservation)

  const handleClick = async e => {
    e.preventDefault()
    console.log(reservation)
    try {
      const res = await fetch(`http://localhost:4000/general`, {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(reservation)
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
      <h1>Reservation</h1>
      <h3>No.  of guests</h3>
      <input type="number" id='noOfGuest' onChange={handleChange} />
      <h3>price per each Additional guest</h3>
      <input type="number" id='Rprice' onChange={handleChange} />
      <h3>Minimum number of hours per reservation</h3>
      <input type="number" id='minHourReservation' onChange={handleChange} />
      <h3>Maximum number of hours per reservation</h3>
      <input type="number" id='maxHourReservation' onChange={handleChange} />
      <h3 id='add'>Add availability</h3>
      <h4>Start time</h4>
      <input type="time" onChange={handleChange} />
      <h4>End time</h4>
      <input type="time" onChange={handleChange} />

      <h3> Appointment duration</h3>
      <input type="number" id='appoinment' onChange={handleChange} />
      <h3>Time between appointment</h3>
      <input type="number" id='tBappoinment' onChange={handleChange} />
      <h3>Recuring period</h3>
      <input type="checkbox" />

      <h3>Start date</h3>
      <input type="date" id='startDate' onChange={handleChange} />
      <h3>End date</h3>
      <input type="date" id='endDate' onChange={handleChange} />



      <div className='links'>

        <Link className='next' to='/submit' type='submit'>next</Link>
      </div>
    </div>
  )
}

export default Reservation