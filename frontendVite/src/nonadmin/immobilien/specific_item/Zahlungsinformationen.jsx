import { useTranslation } from "react-i18next";

const Zahlungsinformationen = ({ price=1000 }) => {
    const { t, i18n } = useTranslation();

    const mwst = Math.round(price * 0.05);
    const stSt = Math.round(price * 0.005);
    const urkunde = Math.round(price * 0.12);

    return (
        <>
            <div className="bg-[#093B3F] rounded-4xl w-[85vw] md:w-[80vw] m-auto mt-3 pb-5">
            <h2 className="text-xl md:text-4xl text-center text-white font-bold md:pb-10 md:pt-10 pb-3 pt-3">{t("immobilien.specific_item.zahlungsinformationen.heading")}</h2>
                <div className="flex flex-col m-auto md:w-[30vw] gap-y-3 text-white text-md md:text-lg">
                    <center><p>{ price }£ {t("immobilien.specific_item.zahlungsinformationen.paymentDetails.0.label")}</p></center>
                    <center><p>{ mwst }£ {t("immobilien.specific_item.zahlungsinformationen.paymentDetails.1.label")}</p></center>
                    <center><p>{ stSt }£ {t("immobilien.specific_item.zahlungsinformationen.paymentDetails.2.label")}</p></center>
                    <center><p>{ urkunde }£ {t("immobilien.specific_item.zahlungsinformationen.paymentDetails.3.label")}</p></center>
                    <center><p>1500£ {t("immobilien.specific_item.zahlungsinformationen.paymentDetails.4.label")}</p></center>

                    <center><p className="text-white text-xl md:text-2xl font-bold mt-3">{ price + mwst + stSt + urkunde }£ {t("immobilien.specific_item.zahlungsinformationen.paymentDetails.5.total")}</p></center>
                </div>
            </div>
        </>
    )
}

export default Zahlungsinformationen;