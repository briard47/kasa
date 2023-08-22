
import starActive from "../../assets/images/star-active 1.png"
import starInactive from "../../assets/images/star-inactive 1.png"
import LogementParam from "../LogementParam/LogementParam"

const LocationTitle = () => {
    const logement = LogementParam();
    const rating = logement.rating;
    const maxRating = 5;
    const stars = [];
    for (let i = 1; i <= maxRating; i++) {
        stars.push(
            <img
                key={i}
                src={i <= rating ? starActive : starInactive}
                alt={i <= rating ? "Active star" : "Inactive Star "}
            />
        )
    }
    return (
        <section className="title" >
            <div className='title__info'>
                <h1> {logement.title}</h1>
                <p> {logement.location}</p>
            </div>
            <div className='title__name'>
                <p> {logement.host.name} </p>
                <img src={logement.host.picture} alt={logement.host.name}></img>
            </div>
            <div className="retail">
                <div className='retail__tagline'>
                    {logement.tags.map((tag, index) => (
                        <p key={index}>{tag}</p>
                    ))}
                </div >
            </div>
            <div className="star"> {stars}</div>
        </section>
    )
}
export default LocationTitle; 