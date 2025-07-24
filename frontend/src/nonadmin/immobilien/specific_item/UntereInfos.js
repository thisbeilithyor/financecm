const UntereInfos = ({ immo }) => {
    
    //Aufbau: Bild, Abhängigkeit, Text

    const frontendDev = false;
    let sources = [];
    if (frontendDev){
        sources = [
            ['/house.webp', immo.price, "ab "+immo.price+" £"],
            ['/square.webp', immo.squareMeters, immo.squareMeters+" m2"],
            ['/bath.webp', immo.bathroom, "Badezimmer"],
            ['/supermarket.webp', immo.supermarket, "Supermarkt"],
            ['/electricity.webp', immo.electricity, "Strom"],
            ['/water.webp', immo.water, "Wasser"],
            ['/pool.webp', immo.pool, "Pool"],
            ['/garden.webp', immo.garden, "Garten"],
            ['/ocean.webp', immo.atOcean, "Am Meer"],
            ['/payment.webp', immo.paymentDuration, "Zahlung: " + immo.paymentDuration+" Monate"],
            ['/finished.webp', immo.buildingFinished, "Fertig: "+immo.buildingFinished]
        ]
    }
    else{
        sources = [
            ['/house.webp', 55, "ab "+immo.price+" £"],
            ['/square.webp', 33, immo.squareMeters+" m2"],
            ['/bath.webp', 1, "Badezimmer"],
            ['/supermarket.webp', 3, "Supermarkt"],
            ['/electricity.webp', 3, "Strom"],
            ['/water.webp', 3, "Wasser"],
            ['/pool.webp', 3, "Pool"],
            ['/garden.webp', 1, "Garten"],
            ['/ocean.webp', 1, "Am Meer"],
            ['/payment.webp', 44, "Zahlung: " + immo.paymentDuration+" Monate"],
            ['/finished.webp', 3, "Fertig: "+immo.buildingFinished]
        ]
    }
    return(
        <>
            <div class="allInfosWrapper">
            {sources.map((item) => {
                return (
                    <>
                    {item[1] && (
                        <div className="infoContainer">
                            <img className="infoImg" src={item[0]}></img>
                            <p className="infoTxt" style={{ color: "black", display: "inline"}}>{item[2]}</p>
                        </div>
                    )}
                    </>
                    
                )
            })}
            </div>
        </>
    )
}

export default UntereInfos;