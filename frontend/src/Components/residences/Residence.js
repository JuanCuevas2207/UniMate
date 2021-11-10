import residenceStyles from './Residence.module.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ResidenceDetails from "../../Pages/ResidenceDetails"

const Residence = (props) => {

    const SeeDetails = () => {
        props.history.push('/details', { title: props.name, duration: props.time, rating: props.rating, imageURL: "url(assets/recipePics/" + props.image + ")" })
    }

    return (
        <div className={[residenceStyles.residence, 'p-4'].join(" ")}>
            {console.log(props)}
            <h5 className={residenceStyles.data}>Dirección: {props.address}</h5>
            {props.availability ?
                <div><h5 className={residenceStyles.data}>Disponibilidad: Sí</h5> <h5 className={residenceStyles.data}>Fecha de disponibilidad: {props.availabilityDate}</h5></div>
                : <h5 className={residenceStyles.data}>Disponibilidad: No</h5>
            }
            <h5 className={residenceStyles.data}>Costo: ${props.cost} COP</h5>
            <h5 className={residenceStyles.data}>Número de habitaciones: {props.roomsNumber}</h5>
            <h5 className={residenceStyles.rating}>
                {props.rating < 1 ? <span className={residenceStyles.star}>☆</span> : <span className={residenceStyles.fullStar}>★</span>}
                {props.rating < 2 ? <span className={residenceStyles.star}>☆</span> : <span className={residenceStyles.fullStar}>★</span>}
                {props.rating < 3 ? <span className={residenceStyles.star}>☆</span> : <span className={residenceStyles.fullStar}>★</span>}
                {props.rating < 4 ? <span className={residenceStyles.star}>☆</span> : <span className={residenceStyles.fullStar}>★</span>}
                {props.rating < 5 ? <span className={residenceStyles.star}>☆</span> : <span className={residenceStyles.fullStar}>★</span>}
            </h5>

        </div>
    )
};

export default Residence;