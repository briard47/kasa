import logements from '../../assets/logements.json'
import React from 'react'
import { Link } from 'react-router-dom'

function Card() {
    return (
        <div className='card__style'>
            {logements.map((logement) => (
                <Link to={`/logements/${logement.id}`}>
                    <div className='card__div' key={logement.id}>
                        <img src={logement.cover} alt={logement.title}></img>
                        <p className='card__title'>{logement.title}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}
export default Card