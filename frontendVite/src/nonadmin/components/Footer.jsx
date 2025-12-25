import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  let { t, i18n } = useTranslation();

  return (
  <footer className="bg-[#093B3F] py-6 md:pb-12">
    <div className="mx-auto flex flex-col md:flex-row items-center justify-between w-[85vw] gap-6">

      {/* Links */}
      <div className="flex space-x-4 text-center">
        <Link className="text-md md:text-lg text-white" to="/kontakt">
          {t("components.footer.contact")}
        </Link>
        <Link className="text-md md:text-lg text-white" to="/impressum">
          {t("components.footer.impressum")}
        </Link>
        <Link className="text-md md:text-lg text-white" to="/datenschutzerklarung">
          {t("components.footer.datenschutz")}
        </Link>
      </div>

      {/* Logo */}
      <div className="hidden lg:flex justify-center">
        <img className="w-32" src="/logo-hell.webp" alt="Logo" />
      </div>

      {/* Socials */}
      <div className="flex space-x-1 md:space-x-8 md:justify-center h-12">
        <img src="/insta.png" alt="Instagram" />
        <img src="/youtube.png" alt="YouTube" />
        <img src="/whatsapp.svg" alt="WhatsApp" />
        <img src="/tiktok.svg" alt="TikTok" />
      </div>


      
    </div>
    <div className="mb-3 pt-3 w-[85vw] m-auto text-white text-md">
        © {new Date().getFullYear()} {t("components.footer.rights")}
      </div>
    </footer>
    );
}


export default Footer;