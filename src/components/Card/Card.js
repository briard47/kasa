import logements from '../../assets/logements.json'
import React from 'react'
import { Link } from 'react-router-dom'

function Card() {
    return (
        <div className='card__style'>
            {logements.map((logement) => (
                <div className='card__div' key={logement.id}>
                    <Link to={`/logements/${logement.id}`}>
                        <img src={logement.cover} alt={logement.title}></img>
                        <p className='card__title'>{logement.title}</p>
                    </Link>
                </div>

            ))}
        </div>
    )
}
export default Card