import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="fc-footer">

      <div className="fc-container">
        <div id="links">
            <Link className="linkComp" to="/impressum">Impressum</Link>          
            <Link className="linkComp" to="/kontakt">Kontakt</Link>
            <Link className="linkComp" to="/datenschutz">Datenschutz</Link>
        </div>
        <img id="logo" src='/logo-hell.webp'></img>
        <div id="socialmedia">
        <img src='/insta.png'></img>
        <img src='/youtube.png'></img>
        <img src='/whatsapp.svg'></img>
        <img src='/tiktok.svg'></img>
        </div>
      </div>
      <div className="fc-copy">
        © {new Date().getFullYear()} Finance Center Meier – Alle Rechte vorbehalten.
      </div>
    </footer>
    );
}


export default Footer;