import React from 'react'
import {Link}from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar-head'>
        <nav className='navbar'>
           <ul>
            <Link to='/'><li className='program'>Programiz</li></Link>
            <Link to='/tutorials'><li>Tutorials</li></Link>
            <Link to='/examples'><li>Examples</li></Link>
            <Link to='/courses'><li className='courses'><span className='pro-box'>PRO</span> Courses</li></Link>
           </ul>
            <form>
              <input type='text' placeholder='Search tutorials & examples'></input>
            </form>
            <button className='cls-button' >Login to PRO </button>
        </nav>
      
    </div>
  )
}

export default Navbar
