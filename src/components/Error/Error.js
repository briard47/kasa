import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import '../../styles/error.css'

 function Error() {
    return (
        <div>
            <Header />
            <main className="error">
                <h1>404</h1>
                <p className="error__text">Oups! La page demandez n'existe pas.</p>
                <Link to="/">
                    <p className="error__link">Retourner sur la page d'accueil</p>
                </Link>
            </main>
            <Footer />
        </div>
    )
};

 export default Error