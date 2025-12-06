import { useTranslation } from "react-i18next";

const UntereInfos = ({ immo }) => {
    const { t, i18n } = useTranslation();
    //Aufbau: Bild, Abhängigkeit, Text

    let sources = [
        ['/house.webp', immo.price, t("immobilien.specific_item.untereInfos.facts.0.label")+immo.price+" £"],
        ['/square.webp', immo.squareMeters, immo.squareMeters+t("immobilien.specific_item.untereInfos.facts.1.label")],
        ['/bath.webp', immo.bathroom, t("immobilien.specific_item.untereInfos.facts.2.label")],
        ['/supermarket.webp', immo.supermarket, t("immobilien.specific_item.untereInfos.facts.3.label")],
        ['/electricity.webp', immo.electricity, t("immobilien.specific_item.untereInfos.facts.4.label")],
        ['/water.webp', immo.water, t("immobilien.specific_item.untereInfos.facts.5.label")],
        ['/pool.webp', immo.pool, t("immobilien.specific_item.untereInfos.facts.6.label")],
        ['/garden.webp', immo.garden, t("immobilien.specific_item.untereInfos.facts.7.label")],
        ['/ocean.webp', immo.atOcean, t("immobilien.specific_item.untereInfos.facts.8.label")],
        ['/payment.webp', immo.paymentDuration, t("immobilien.specific_item.untereInfos.facts.9.zahlung") + immo.paymentDuration+t("immobilien.specific_item.untereInfos.facts.9.monate")],
        ['/finished.webp', immo.buildingFinished, t("immobilien.specific_item.untereInfos.facts.10.label")+immo.buildingFinished]
    ]

    return(
        <>
            <div className="w-[60vw]">
            <h2 className="bg-[#f1f1f1] text-4xl text-center text-[#093B3F] font-bold md:pb-10 md:pt-10">{t("immobilien.specific_item.untereInfos.heading")}</h2>
            <div className="flex gap-8 flex-wrap justify-center">
            {sources.map((item) => {
                return (
                    <>
                    {item[1] && (
                        <div className="w-[10%]">
                            <img className="infoImg" src={item[0]}></img>
                            <p className="infoTxt" style={{ color: "black", display: "inline"}}>{item[2]}</p>
                        </div>
                    )}
                    </>
                    
                )
            })}
            </div>
            </div>
        </>
    )
}

export default UntereInfos;