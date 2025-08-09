import Card from "react";
import "./card.css";

const ImmobilieItem = ({immo, handleClick}) => {
    return (
        <>
        <div className="bg-[#093B3F] w-[60vw] m-auto flex rounded-lg mt-3 border" onClick={(e) => handleClick(e, immo.objectnr)}>
            <img className="w-[30%] rounded-lg mr-3" src={'/api/images/'+immo.titleImagePath}></img>
            <div className="flex flex-col justify-between pt-3 pb-3">
                <p className="text-xl font-bold text-white">{immo.city}</p>
                <p className="text-xl text-white">{immo.squareMeters} m²</p>
                <p className="text-2xl text-white">{immo.price} £</p>
                <p className="text-md text-white">Views: {immo.views}</p>
            </div>
        </div>
        </>
    )
}


export default ImmobilieItem;