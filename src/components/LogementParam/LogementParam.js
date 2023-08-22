import { useParams } from "react-router-dom"
import logements from '../../assets/logements.json'

const LogementParam = () => {
    const { id } = useParams();
    const logement = logements.find((item) => item.id === id)
    return logement;
};

export default LogementParam;