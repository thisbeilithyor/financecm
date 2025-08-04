import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login.js';
import Home from './nonadmin/homepage/Home.js';
import AdminPanel from "./admin/AdminPanel.js";
import ProtectedRoutes from "./ProtectedRoutes.js";
import Immobiliencenter from "./admin/immobiliencenter/Immobiliencenter.js"; //errors otherwise, but this is how it works
import KPI from "./admin/KPI.js";
import AdminNavBar from "./admin/AdminNavBar.js";
import EditImmo from "./admin/immobiliencenter/EditImmo.js";
import Immobilien from "./nonadmin/immobilien/Immobilien.js";
import ImmoElement from "./nonadmin/immobilien/specific_item/ImmoElement.js";
import Kontakt from "./nonadmin/kontakt/Kontakt.js";
import Impressum from "./nonadmin/impressum/Impressum.js";
import UeberZypern from "./nonadmin/ueberzypern/UeberZypern.js";
import Vermittlung from "./nonadmin/vermittlung/Vermittlung.js";
import Mediathek from "./nonadmin/mediathek/mediathek.js"

import useWebsiteVisitTracker from "./util/useWebsiteVisitTracker.js";
import Datenschutzerklarung from "./nonadmin/datenschutzerklarung/Datenschutzerklarung.js";
import Checklist from "./nonadmin/checklist/Checklist.js";

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




export default App;
