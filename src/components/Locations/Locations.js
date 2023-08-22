import React from "react";
import {useParams} from "react-router-dom";
import Footer from '../Footer/Footer.js';
import  Header from '../Header/Header.js';
import Error from '../Error/Error.js';
import Carrousel from "../Carrousel/Carrousel.js";
import LocationTitle from "../LocationTitle/LocationTitle.js";
import Dropdown from '../Dropdown/Dropdown.js';
import logements from '../../assets/logements.json'
import "../../styles/locations.css"
import '../../styles/index.css'


const Locations = () => {
    const { id } = useParams()
    const logement = logements.find((item) => item.id === id)
    if (typeof(logement) == 'undefined') {
        return <Error />
    };
   
    return (
        <div>
            <Header />
            <main>
                <Carrousel />
                <LocationTitle />
                <section className="drop">
                    <Dropdown text="Description">
                        <p>{logement.description}</p>
                    </Dropdown>
                    <Dropdown text="Equipement">
                        {<ul>{logement.equipments.map((equipement) =>
                            <li key={equipement}>{equipement}</li>)}
                        </ul>}
                    </Dropdown>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Locations; 