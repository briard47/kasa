import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import Footer from '../Footer/Footer.js';
import  Header from '../Header/Header.js';
import LogementParam from "../../assets/LogementParam/LogementParam.js"
import Carrousel from "../Carrousel/Carrousel.js";
import LocationTitle from "../LocationTitle/LocationTitle.js";
import Dropdown from '../Dropdown/Dropdown.js';
import "../../styles/locations.css"
import '../../styles/index.css'


function Locations() {
    const logement = LogementParam();
    const navigate = useNavigate();
    useEffect(() => {
          if (typeof(logement) == 'undefined') {
        navigate ("/erreur404")
     };
      }, [logement, navigate]);
      if (typeof(logement) == 'undefined'){
      return null}

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