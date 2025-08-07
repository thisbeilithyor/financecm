

const IslandGraphic = ({ isWhite=false }) => {
    return (
        <>            
            <div className={`${isWhite ? "bg-[#093B3F]" : "bg-[#f1f1f1]"} !border-none flex items-center justify-center`}>

            <div className="w-[20vw]">
                <hr className={`${isWhite ? "border-white" : "border-[#093B3F]"}`}></hr>
            </div>

            {!isWhite ? 
                <img className="!border-none w-[20vw]" src='island.svg'></img>
                :
                <img className="!border-none w-[20vw]" src='island-white.svg'></img>
            }

            <div className="w-[20vw]">
                <hr className={`${isWhite ? "border-white" : "border-[#093B3F]"}`}></hr>
            </div>
            </div>
        </>
    )
}

export default IslandGraphic;