import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login.jsx';
import Home from './nonadmin/homepage/Home.jsx';
import AdminPanel from "./admin/AdminPanel.jsx";
import ProtectedRoutes from "./ProtectedRoutes.jsx";
import Immobiliencenter from "./admin/immobiliencenter/Immobiliencenter.jsx"; //errors otherwise, but this is how it works
import KPI from "./admin/KPI.jsx";
import AdminNavBar from "./admin/AdminNavBar.jsx";
import EditImmo from "./admin/immobiliencenter/EditImmo.jsx";
import Immobilien from "./nonadmin/immobilien/Immobilien.jsx";
import ImmoElement from "./nonadmin/immobilien/specific_item/ImmoElement.jsx";
import Kontakt from "./nonadmin/kontakt/Kontakt.jsx";
import Impressum from "./nonadmin/impressum/Impressum.jsx";
import UeberZypern from "./nonadmin/ueberzypern/UeberZypern.jsx";
import Vermittlung from "./nonadmin/vermittlung/Vermittlung.jsx";
import Mediathek from "./nonadmin/mediathek/Mediathek.jsx";


import useWebsiteVisitTracker from "./util/useWebsiteVisitTracker.js";
import Datenschutzerklarung from "./nonadmin/datenschutzerklarung/Datenschutzerklarung.jsx";
import Checklist from "./nonadmin/checklist/Checklist.jsx";


function App() {

  useWebsiteVisitTracker();

  return(
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/immobilien" element={<Immobilien />}></Route>
        <Route path="/immobilien/:objectnr" element={<ImmoElement />}></Route>
        <Route path="/kontakt" element={<Kontakt />}></Route>
        <Route path="/impressum" element={<Impressum />}></Route>
        <Route path="/uberzypern" element={<UeberZypern />}></Route>
        <Route path="/datenschutzerklarung" element={<Datenschutzerklarung />}></Route>
        <Route path="/checklist" element={<Checklist />}></Route>
        <Route path="/vermittlung" element={<Vermittlung />}></Route>
        <Route path="/mediathek" element={<Mediathek />}></Route>
        <Route element={<ProtectedRoutes/>}>
          <Route element={<AdminNavBar />}>
            <Route path="admin/panel" element={<AdminPanel />}></Route>
            <Route path="admin/immobiliencenter" element={<Immobiliencenter />}></Route>
            <Route path="admin/kpi" element={<KPI />}></Route>
            <Route path="admin/immobiliencenter/:objectnr" element={<EditImmo />}></Route>
          </Route>
        </Route>
        <Route path="admin" element={<Login />}></Route>
      </Routes>
  )
}

export default App
