import Card from "react";
import "./card.css";

const ImmobilieItem = ({immo, handleClick}) => {
    return (
        <>
        <div className="card" onClick={(e) => handleClick(e, immo.objectnr)}>
            <img src={'/api/images/'+immo.titleImagePath}></img>
            <div id="asdf">
                <h2>Objektnummer: {immo.objectnr}</h2>
                <p>Stadt: {immo.city}</p>
                <p>Preis: {immo.price}</p>
                <p>Views: </p>
            </div>
        </div>
        </>
    )
}


export default ImmobilieItem;