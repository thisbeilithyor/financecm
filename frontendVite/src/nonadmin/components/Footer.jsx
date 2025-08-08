import React from "react";
import { Link, Outlet } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#093B3F] pl-10 pr-10">

      <div className="md:flex h-30 justify-between items-center">
        <div className="flex md:w-[20%] space-x-4 max-md:justify-around max-md:mb-3">
            <Link className="text-white text-lg" to="/impressum">Impressum</Link>          
            <Link className="text-white text-lg" to="/kontakt">Kontakt</Link>
            <Link className="text-white text-lg" to="/datenschutzerklarung">Datenschutz</Link>
        </div>

        <div className="flex justify-around w-[20vw] max-md:hidden">
          <img className="w-[70%]" src='/logo-hell.webp'></img>
        </div>
        <div className="flex h-12 md:w-[20%] md:justify-between max-md:justify-around">
          <img src='/insta.png'></img>
          <img src='/youtube.png'></img>
          <img src='/whatsapp.svg'></img>
          <img src='/tiktok.svg'></img>
        </div>
      </div>
      <div className="text-white text-md">
        © {new Date().getFullYear()} Finance Center Meier – Alle Rechte vorbehalten.
      </div>
    </footer>
    );
}


export default Footer;