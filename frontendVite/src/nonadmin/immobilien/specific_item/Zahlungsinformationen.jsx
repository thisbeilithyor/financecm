import { useTranslation } from "react-i18next";

const Zahlungsinformationen = ({ price=1000 }) => {
    const { t, i18n } = useTranslation();

    const mwst = Math.round(price * 0.05);
    const stSt = Math.round(price * 0.005);
    const urkunde = Math.round(price * 0.12);

    return (
        <>
            <div className="bg-[#093B3F] rounded-4xl w-[80vw] m-auto mb-10">
            <h2 className="text-4xl text-center text-white font-bold md:pb-10 md:pt-10">{t("immobilien.specific_item.zahlungsinformationen.heading")}</h2>
                <div className="flex flex-col m-auto w-[30vw] gap-y-3 text-white text-lg">
                    <p>{ price }£ {t("immobilien.specific_item.zahlungsinformationen.paymentDetails.0.label")}</p>
                    <p>{ mwst }£ {t("immobilien.specific_item.zahlungsinformationen.paymentDetails.1.label")}</p>
                    <p>{ stSt }£ {t("immobilien.specific_item.zahlungsinformationen.paymentDetails.2.label")}</p>
                    <p>{ urkunde }£ {t("immobilien.specific_item.zahlungsinformationen.paymentDetails.3.label")}</p>
                    <p>1500£ {t("immobilien.specific_item.zahlungsinformationen.paymentDetails.4.label")}</p>

                    <p className="text-white text-2xl font-bold mt-5 pb-10">{ price + mwst + stSt }£ {t("immobilien.specific_item.zahlungsinformationen.paymentDetails.5.total")}</p>
                </div>
            </div>
        </>
    )
}

export default Zahlungsinformationen;