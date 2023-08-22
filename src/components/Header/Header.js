import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/images/logo-kasa.png'
import '../../styles/index.css'

function  Header() {
    return (
        <header className='header'>
             <img src={Logo} alt='Logo Kasa' className='header__logo'></img>
            <nav className= 'header__nav'>
            <Link to='/'> Acceuil</Link>
            <Link to='/a-propos'>A propos</Link>
            </nav>
        </header>
    )
};

 export default Header