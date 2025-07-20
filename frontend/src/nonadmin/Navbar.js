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
                        <Link className="linkEl" to="/admin/immobiliencenter">IMMOBILIEN & PROJEKTE</Link>
                    </li>
                    <li>
                        <Link className="linkEl" to="/admin/kpi">ÜBER ZYPERN</Link>
                    </li>
                    <li>
                        <Link className="linkEl" to="/admin/kpi">MEDIATHEK</Link>
                    </li>
                    <li>
                        <Link className="linkEl" to="/admin/kpi">KONTAKT</Link>
                    </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar;