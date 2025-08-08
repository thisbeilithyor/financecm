import { Link } from "react-router-dom";

const SocialMediaLeiste = () => {
  return (
    <>
      {/* Rechte vertikale Social-Leiste */}
      <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50">
        <div className="bg-white rounded-l-2xl py-4 px-2 flex flex-col items-center gap-4 shadow-md">
          <Link to="mailto:meier-finanz@gmx.de" target="_blank" rel="noopener noreferrer">
            <img src="/floating_mail.svg" alt="E-Mail" className="w-7 h-7 hover:scale-110 transition" />
          </Link>
          <Link to="https://www.instagram.com/fina_ncecenterl/" target="_blank" rel="noopener noreferrer">
            <img src="/floating_instagram.svg" alt="Instagram" className="w-7 h-7 hover:scale-110 transition" />
          </Link>
          <Link to="https://www.youtube.com/@InvestmentZypernmitFinan-fq2xo" target="_blank" rel="noopener noreferrer">
            <img src="/floating_youtube.svg" alt="YouTube" className="w-7 h-7 hover:scale-110 transition" />
          </Link>
          <Link to="https://www.tiktok.com/@finanz.center?_t=8nTRPfE3ejp&_r=%201" target="_blank" rel="noopener noreferrer">
            <img src="/tiktok_black.svg" alt="TikTok" className="w-7 h-7 hover:scale-110 transition" />
          </Link>
        </div>
      </div>

      {/* WhatsApp-Button unten rechts */}
      <div  className="fixed bottom-6 right-6 rounded-full flex items-center justify-center z-50">
        <Link to="https://wa.me/+491727745656" target="_blank" rel="noopener noreferrer">
            <img src="/whatsapp.png" alt="WhatsApp" className="w-[6vw] h-[6vw] max-w-[72px] max-h-[72px]" />
        </Link>
      </div>
    </>
  );
};

export default SocialMediaLeiste;