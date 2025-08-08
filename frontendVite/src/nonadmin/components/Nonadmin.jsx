import SocialMediaAnbindung from "../components/SocialMediaAnbindung.jsx";
import Checkliste from "../components/Checkliste.jsx";

import { Outlet } from "react-router-dom";

const Nonadmin = () => {
    return (
        <>
            <SocialMediaAnbindung />
            <Checkliste />
            <Outlet />
        </>
    )
}

export default Nonadmin;