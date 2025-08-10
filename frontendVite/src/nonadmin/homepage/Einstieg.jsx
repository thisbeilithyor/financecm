import { useNavigate } from "react-router-dom";

const Einstieg = () => {
    //no muted in prod build!
    const navigate = useNavigate();

    const handleClick = (e) => {
        console.log(e);
    }

    return (
        <>
            <div className="w-[100vw]">
                <video className="w-full fixed z-[-1] bg-center bg-cover" autoPlay muted loop playsInline> 
                    <source src='/backgroundvideo.mp4' type='video/mp4'></source>
                </video>
            </div>
            <div className="relative flex flex-col items-center justify-center h-150 row w-[100vw]">
                    <div className="text-white text-3xl md:text-4xl font-bold text-center drop-shadow-lg">
                        <h1>IHRE EXPERTEN FÜR IMMOBILIEN UND INVESTITIONEN</h1>
                    </div>
                    <div className="text-3xl text-center text-white font-bold mt-3">
                        <h2>Immobilien auf Zypern</h2>
                    </div>
                    <div className="flex justify-center gap-x-20 pt-15">
                        <button className="bg-[#093B3F] text-white w-55 h-10 rounded-full text-lg" onClick={() => navigate('/immobilien')}>ALLE IMMOBILIEN</button>
                        <button className="bg-[#093B3F] text-white w-55 h-10 rounded-full text-lg" onClick={() => navigate('/immobilien')}>WOHNUNGEN</button>
                        <button className="bg-[#093B3F] text-white w-55 h-10 rounded-full text-lg" onClick={() => navigate('/immobilien')}>HÄUSER</button>
                    </div>
            </div>
        </>
    )
}

export default Einstieg;