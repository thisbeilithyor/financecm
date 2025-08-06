import { Link } from "react-router-dom";

const SocialMediaAnbindung = () => {
    return ( 
        <>
            <div className="socialmedia">
                <Link to="mailto:meier-finanz@gmx.de">
                    <img src="floating_mail.svg" alt="Send Email" />
                </Link>
                
                <Link to="https://www.instagram.com/fina_ncecenterl/"><img src="floating_instagram.svg"></img></Link>
                <Link to="https://www.youtube.com/@InvestmentZypernmitFinan-fq2xo"><img src="floating_youtube.svg"></img></Link>
                <Link to="https://www.tiktok.com/@finanz.center?_t=8nTRPfE3ejp&_r=%201"><img src="tiktok.svg"></img></Link>
            </div>
        </>
    )
}

export default SocialMediaAnbindung;