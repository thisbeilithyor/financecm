const Zahlungsinformationen = ({ price=1000 }) => {

    const mwst = Math.round(price * 0.05);
    const stSt = Math.round(price * 0.005);
    const urkunde = Math.round(price * 0.12);

    return (
        <>
            <div className="bg-[#093B3F] rounded-4xl w-[80vw] m-auto mb-10">
            <h2 className="text-4xl text-center text-white font-bold md:pb-10 md:pt-10">Zahlungsinformationen</h2>
                <div className="flex flex-col m-auto w-[30vw] gap-y-3 text-white text-lg">
                    <p>{ price }£ Immobilienpreis</p>
                    <p>{ mwst }£ MwSt (5%)</p>
                    <p>{ stSt }£ Stempelsteuer (0,5%)</p>
                    <p>{ urkunde }£ Übertragung der Eigentumsurkunde</p>
                    <p>1500£ Anwaltskosten (optional)</p>

                    <p className="text-white text-2xl font-bold mt-5 pb-10">{ price + mwst + stSt }£ Gesamtmenge</p>
                </div>
            </div>
        </>
    )
}

export default Zahlungsinformationen;