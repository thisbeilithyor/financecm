

const IslandGraphic = ({ isWhite=false }) => {
    return (
        <>            
            <div className={`${isWhite ? "bg-[#093B3F]" : "bg-[#f1f1f1]"} !border-none`}>
            
            <div className="hrContainer">
            <hr></hr>
            </div>
            {!isWhite ? 
                <img className="!border-none" src='island.svg'></img>
                :
                <img className="!border-none" src='island-white.svg'></img>
            }
            <div className="hrContainer">
            <hr></hr>
            </div>
            </div>
        </>
    )
}

export default IslandGraphic;