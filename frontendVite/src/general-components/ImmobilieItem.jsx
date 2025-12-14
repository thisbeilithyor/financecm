const ImmobilieItem = ({immo, handleClick}) => {
    return (
        <>
        <div className="bg-[#093B3F] w-[90vw] md:w-[60vw] m-auto flex rounded-lg mt-3 border" onClick={(e) => handleClick(e, immo.objectnr)}>
            <img className="w-[50%] h-full object-cover rounded-lg mr-3" src={'/file/'+immo.titleImagePath}></img>
            <div className="flex flex-col justify-between md:pt-3 md:pb-3">
                <p className="text-lg font-bold text-white">{immo.city}</p>
                <p className="text-md text-white">{immo.squareMeters} m²</p>
                <p className="text-md text-white">{immo.price} £</p>
                <p className="text-xs text-white">Views: {immo.views}</p>
            </div>
        </div>
        </>
    )
}


export default ImmobilieItem;