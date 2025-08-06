import { useNavigate } from "react-router-dom";

const Einstieg = () => {
    //no muted in prod build!
    const navigate = useNavigate();

    const handleClick = (e) => {
        console.log(e);
    }

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
                        <button className="myButton" onClick={() => navigate('/immobilien')}>ALLE IMMOBILIEN</button>
                        <button className="myButton" onClick={() => navigate('/wohnungen')}>WOHNUNGEN</button>
                        <button className="myButton" onClick={() => navigate('/house')}>HÄUSER</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Einstieg;