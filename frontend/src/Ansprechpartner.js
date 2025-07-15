const Ansprechpartner = () => {
    return (
        <>
            <div className="containerAP">
                <div className="description">
                <h2>Ihr Ansprechpartner</h2>
                <p>Alexander Meier und sein Team sind seit Jahren im Immobilienhandel in Zypern 
                    tätig und bieten umfassende Expertise und lokales Wissen. Sie sind Ihr idealer 
                    Ansprechpartner für den Kauf und Verkauf von Immobilien, bieten maßgeschneiderte 
                    Beratung und begleiten Sie professionell durch den gesamten Prozess. Vertrauen Sie auf ihre Erfahrung.</p>
                </div>
                <div className="profile">
                    <div className="imageContainer">
                        <img className="image" src='/geschaeftsfuehrer.webp'></img>
                    </div>
                    <div className="textContent">
                        <h3>Alexander Meier</h3>
                        <span>Geschäftsführer</span>
                        <p>Als Geschäftsführer von Finance Center Meier, 
                            ist er ein erfahrener Finanzexperte und Ihr verlässlicher 
                            Partner in Finanzangelegenheiten.</p>
                        <p>E-Mail: meier-finanz@gmx.de</p>
                        <p>Tel.: +49 (0) 841 - 98 17 858</p>
                        <p>Tel.: +49 (0) 172 - 77 45 656</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ansprechpartner;