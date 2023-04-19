import React from 'react'
import { Link } from 'react-router-dom'


const Category = () => {
  return (
    <div>
      <h1>Category</h1>
      <h3>greate for</h3>
      <input type="checkbox" /><span>every one</span>
      <input type="checkbox" /><span>family</span> 
      <input type="checkbox" /><span>group</span> 

      <h3>Region</h3>
      <input type="checkbox" /><span>paris</span> 
      <input type="checkbox" /><span>landon</span> 
      <input type="checkbox" /><span>america</span> 


      <div className='links'>
        <Link className='back' to='/about'>back</Link>
        <Link className='next' to='/pricing'>next</Link>
      </div>
    </div>
  )
}

export default Category