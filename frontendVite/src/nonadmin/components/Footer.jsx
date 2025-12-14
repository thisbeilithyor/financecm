import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  let { t, i18n } = useTranslation();

  return (
  <footer className="bg-[#093B3F] py-6 md:py-10">
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
      <div className="hidden md:flex justify-center">
        <img className="w-32" src="/logo-hell.webp" alt="Logo" />
      </div>

      {/* Socials */}
      <div className="flex space-x-8 justify-center h-12">
        <img src="/insta.png" alt="Instagram" />
        <img src="/youtube.png" alt="YouTube" />
        <img src="/whatsapp.svg" alt="WhatsApp" />
        <img src="/tiktok.svg" alt="TikTok" />
      </div>


      <div className="text-white text-md">
        © {new Date().getFullYear()} {t("components.footer.rights")}
      </div>
    </div>
    </footer>
    );
}


export default Footer;