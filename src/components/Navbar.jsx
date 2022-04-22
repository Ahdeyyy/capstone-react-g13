import React from "react";
import { Link} from 'react-router-dom';
import './styles.css'


const Navbar = () => {
    return (
        <nav style={{ display: 'flex', margin: '5px', justifyContent:'space-between', }}>
            <span style={{}}>LOGO</span>
            <div className="links" style={{ width: '50%', display: 'flex',justifyContent:'space-between'}}>
                <Link to='/'><p>Home</p></Link>
                <Link to='/contact'><p>Contact</p></Link>
                <Link to='/about'><p>About</p></Link>
                <Link to='/products'><p>Products</p></Link>
            </div>
            
            
        </nav>
      );
}
 
export default Navbar;