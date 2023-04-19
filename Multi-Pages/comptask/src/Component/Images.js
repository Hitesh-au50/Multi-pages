import React from 'react'
import { Link } from 'react-router-dom'


const Images = () => {
  return (
    <>
      <h1>Gallery images</h1>
      <h5>maximum upload size is :100mb</h5>
      <input type='file' />submit images
      <div className='links'>
        <Link className='back' to='/general'>back</Link>

        <Link className='next' to='/about'>next</Link>
      </div>
    </>
  )
}

export default Images