import React from 'react';
import Header from '../Header/Header.js';
import Banner from "../Banner/Banner.js";
import Dropdown from "../Dropdown/Dropdown.js";
import Footer from '../Footer/Footer.js';
import Image from '../../assets/images/Image source 2.png'
import "../../styles/about.css"

 function About() {
    return (
        <div>
            <Header />
            <main>
            <Banner banner={Image} alt="Photos de Montagne" className="banner--about" />
            <section className="drop dropAbout">
                    <div className="drop__about">
                        <Dropdown text="Fiabilité">
                            <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes
                                aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
                            </p>
                        </Dropdown>
                        <Dropdown text="Respect">
                            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire
                                ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                            </p>
                        </Dropdown>
                        <Dropdown text="Service">
                            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire
                                ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                            </p>
                        </Dropdown>
                        <Dropdown text="Sécurité">
                            <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
                                correspond aux crutères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte
                                qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous
                                organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                            </p>
                        </Dropdown>
                    </div>
                </section>
            </main>    
            <Footer />
        </div>
    )
};

 export default About