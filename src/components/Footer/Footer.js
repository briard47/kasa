import React from 'react';
import Logo from '../../assets/images/logo-kasa.png'
import '../../styles/index.css'

function  Footer() {
    return (
        <footer>
        <img src={Logo} alt='Logo Kasa'></img>
        <p>©2020 Kasa. All rights reserved</p>
    </footer>
    )
};

 export default Footer