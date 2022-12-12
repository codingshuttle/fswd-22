import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav>
        <ul>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/about" state={{from: 'navigation', luckyNumber: 12}} >About</Link></li>
            <li><Link to="/login"><button>Login Btn</button></Link></li>
            <li><Link to="/books"><button>Books Btn</button></Link></li>
        </ul>
    </nav>
  )
}

export default Navigation