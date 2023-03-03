import './navbar.css'
import './navbarResponsive.css'
import navLogo from '../../images/startLogo.png'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

import { Link } from 'react-router-dom'
function Navbar(){
    const [menu, openMenu] = useState(false)
    return(
        <div className='navbar'>
            <div className="navFixed">
                <div className="navHead container">
                    <div className="navLogo">
                        <img src={navLogo} />
                        <h1>Start</h1>
                    </div>
                    <div className="navLinks">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                                <Link to="/portfolio">Portfolio</Link>
                                <Link to="/services">Services</Link>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <button onClick={openMenu} className='burgerMenu'><Menu width={30} height={30}/></button>
                    
                </div>
                <div className={ "openMenu " + (menu ? 'open' : 'close') }>
                    <div className="burgerClose">
                        <button onClick={() => openMenu()} ><X color='black'/></button>
                    </div>
                    <div className="menuContainer">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                                <Link to="/portfolio">Portfolio</Link>
                                <Link to="/services">Services</Link>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar