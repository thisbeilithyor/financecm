import { Link, Outlet } from "react-router-dom";
import "./navbar.css";

const AdminNavBar = () => {
    return (
        <>
        <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/admin/immobiliencenter">Immo-Center</Link>
          </li>
          <li>
            <Link to="/admin/kpi">KPIs</Link>
          </li>
        </ul>
        </nav>

        <Outlet />
        </>
    )
}

export default AdminNavBar;