import {Link} from 'react-router-dom'
import React from 'react'

function Nav() {
  return (
    <div>
  <section className="NAVBAR">
    <nav className="navbar">
        <ul>
            
            <li><a href="/">Home</a></li>
            <li><a href="#">About</a></li>
            <li><Link  to="/contact">Contact</Link></li>
            <li><Link  to="/services">Services</Link></li>
            <li><Link  to="/reviews">Reviews</Link></li>

        </ul>
    </nav>
</section>
        
    </div>
  )
}

export default Nav