import { useState } from "react";
import Arrow from '../../assets/images/arrow_up.png'
import "../../styles/dropdown.css"

function Dropdown({ children, text }) {
    const [isOpen, setIsOpen] = useState(false)
    const [Rotation, setRotation] = useState(false)
  
    const handleClick = () => {
        setIsOpen(!isOpen);
        setRotation(!Rotation);
    }
    return (
        <div className="dropdown" onClick={handleClick}>
            <div className="dropdown__config">
                <p className="dropdown__config--text">{text}</p>
                <img src={Arrow} alt="Fléche de la boite de description "   className={Rotation ? "rotated" : "arrow"}/>
            </div>
            <div className={`dropdown__config--content ${isOpen ? "open" : "close"}`}>
                {children}
            </div>
        </div >
    );
}

export default Dropdown; 