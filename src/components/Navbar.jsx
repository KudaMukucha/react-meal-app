import React from 'react'
import { Link } from 'react-router-dom'
import { GiKnifeFork} from 'react-icons/gi'
export default function Navbar() {
  return (
    <div className='header'>
        <GiKnifeFork/>
        <Link to={'/'} className='header-link'>Yummy Meals</Link>
    </div>
  )
}
