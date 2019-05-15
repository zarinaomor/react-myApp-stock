import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'


const Header = () => {
   return (
       <header>
           <ul>
               <li><Link to="/home" className='active'>Home</Link></li>
               <li><Link to="/login" className='active'>Login</Link></li>
               <li><Link to="/register" className='active'>Sign Up</Link></li>
           </ul>
       </header>
   )
}


export default Header;