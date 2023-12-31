import logements from '../../assets/logements.json'
import React from 'react'
import { Link } from 'react-router-dom'

function Cards() {
    return (
        <div className='card__style'>
            {logements.map((logement) => (
                <Link to={`/logements/${logement.id}`} key={logement.id}>
                    <div className='card__div' >
                        <img  src={logement.cover} alt={logement.title} ></img>
                        <p className='card__title'>{logement.title}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}
export default Cards