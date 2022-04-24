import React from "react";
import { Link} from 'react-router-dom';
import './styles.css'


const Navbar = () => {
    return (
    
        <nav className='navbar'>
            <span>iZakaya</span>
            
            
            <div className="links" >
                <Link to='/'>Home</Link>
                <Link to='/products'>Products</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                
            </div>
            
            
            
        </nav>
        
        
      );
}
 
export default Navbar;