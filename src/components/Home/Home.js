import React from 'react';
import Header from '../Header/Header.js';
import Banner from "../Banner/Banner.js";
import Cards from "../Cards/Cards.js";
import Footer from '../Footer/Footer.js';
import '../../styles/index.css'
import '../../styles/home.css'
import Image from '../../assets/images/Image source 1.png'

 function Home() {
    return (
         <div>
            <Header />
            <main>
                <Banner banner={Image} alt="Photos de montagne" className="banner--home" title="Chez vous, partout et ailleurs" />
                <Cards />
            </main>
            <Footer />
        </div>
    )
};

 export default Home