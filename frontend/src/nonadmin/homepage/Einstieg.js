

const Einstieg = () => {
    //no muted in prod build!
    return (
        <>
            <video className="backgroundvideo" autoPlay muted loop playsInline> 
                <source src='/backgroundvideo.mp4' type='video/mp4'></source>
            </video>

            <div className="entraceWrapper">
                <div className="itemWrapper">
                    <div className="h1Wrapper">
                        <h1>IHRE EXPERTEN FÜR IMMOBILIEN UND INVESTITIONEN</h1>
                    </div>
                    <div class="h2Wrapper">
                        <h2>Immobilien auf Zypern</h2>
                    </div>
                    <div className="buttonWrapper">
                        <button className="myButton">ALLE IMMOBILIEN</button>
                        <button className="myButton">WOHNUNGEN</button>
                        <button className="myButton">HÄUSER</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Einstieg;