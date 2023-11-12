import React, { useState } from "react"
import ArrowRight from '../../assets/images/arrow_right.png'
import ArrowLeft from '../../assets/images/arrow_left.png'
import "../../styles/locations.css"
import LogementParam from "../../assets/LogementParam/LogementParam.js"

function Carrousel() {
    const logement = LogementParam();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const Counter = () => {
        return `${currentImageIndex + 1} / ${logement.pictures.length}`;
    };
    const nextImage = () => {
        setCurrentImageIndex((Index) => 
        Index===logement.pictures.length-1? 0 :(Index + 1) );
    };

    const previousImage = () => {
        setCurrentImageIndex((Index) =>
            Index === 0 ? logement.pictures.length - 1 : (Index - 1) 
        );
    };
    const currentImage = logement.pictures[currentImageIndex]
    if (logement.pictures.length === 1) {
        return (
            <section className="carrousel">
                <img src={currentImage} alt="logement" className="carrousel__img" />
            </section>
        );
    }
    return (
        <section className="carrousel" >
            <img src={currentImage} alt="logement" className="carrousel__img" />
            <img src={ArrowRight} alt="Fléche droite " onClick={nextImage} className="carrousel__arrow carrousel__arrow--right "></img>
            <img src={ArrowLeft} alt='Fléche gauche' onClick={previousImage} className="carrousel__arrow carrousel__arrow--left"></img>
            <div className="carrousel__counter"> {Counter()}</div>
        </section>
    )
}
export default Carrousel