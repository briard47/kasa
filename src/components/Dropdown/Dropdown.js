import { useState } from "react";
import "../../styles/dropdown.css"

function Dropdown({ children, text }) {
    const [isOpen, setIsOpen] = useState(false)
  
    const handleClick = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className="dropdown" onClick={handleClick}>
            <div className="dropdown__config">
                <p className="dropdown__config--text">{text}</p>
            </div>
            <div className={`dropdown__config--content ${isOpen ? "open" : "close"}`}>
                {children}
            </div>
        </div >
    );
}

export default Dropdown; 