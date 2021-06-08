import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu =() => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 5000){
            setButton(false)
        } else {
            setButton(true);
        }
    };

    useEffect(() =>{
        showButton()
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
        
        <nav className='navbar'>
            <div className='navbar-container'>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            About Me
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            My Projects
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            What I Know
                        </Link>
                    </li>
                </ul>
                
            {/* {button && <Button buttonStyle='btn--outline'>About Me</Button>}
            {button && <Button buttonStyle='btn--outline'>My Projects</Button>}
            {button && <Button buttonStyle='btn--outline'>What I Know</Button>} */}
            </div>
        </nav>
        </>
    );
}

export default Navbar;