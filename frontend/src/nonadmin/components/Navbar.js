import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="container">

                <img className="logo" src='/logo-dunkel.webp'></img>

                <nav>
                    <ul>
                    <li>
                        <Link className="linkEl" to="/">HOME</Link>
                    </li>
                    <li>
                        <Link className="linkEl" to="/immobilien">IMMOBILIEN & PROJEKTE</Link>
                    </li>
                    <li>
                        <Link className="linkEl" to="/uberzypern">ÜBER ZYPERN</Link>
                    </li>
                    <li>
                        <Link className="linkEl" to="/admin/kpi">MEDIATHEK</Link>
                    </li>
                    <li>
                        <Link className="linkEl" to="/kontakt">KONTAKT</Link>
                    </li>
                    <li>
                        <Link className="linkEl" to="/vermittlung">VERMITTLUNG</Link>
                    </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar;