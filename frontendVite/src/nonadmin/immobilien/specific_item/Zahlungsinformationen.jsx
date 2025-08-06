const Zahlungsinformationen = ({ price }) => {

    const mwst = Math.round(price * 0.05);
    const stSt = Math.round(price * 0.005);
    const urkunde = Math.round(price * 0.12);

    return (
        <>
            <h2>Zahlungsinformationen</h2>
            <tabel>
                <tr>
                    <td>
                        { price }£ Immobilienpreis
                    </td>
                </tr>
                <tr>
                    <td>
                        { mwst }£ MwSt (5%)
                    </td>
                </tr>
                <tr>
                    <td>
                        { stSt }£ Stempelsteuer (0,5%)
                    </td>
                </tr>
                <tr>
                    <td>
                        { urkunde }£ Übertragung der Eigentumsurkunde
                    </td>
                </tr>
                <tr>
                    <td>
                        1500£ Anwaltskosten (optional)
                    </td>
                </tr>
            </tabel>

            <p>{ price + mwst + stSt }£ Gesamtmenge</p>
        </>
    )
}

export default Zahlungsinformationen;