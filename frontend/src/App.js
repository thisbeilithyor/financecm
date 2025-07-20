import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login.js';
import Home from './nonadmin/homepage/Home.js';
import AdminPanel from "./admin/AdminPanel.js";
import ProtectedRoutes from "./ProtectedRoutes.js";
import Immobiliencenter from "./.\/admin/Immobiliencenter.js"; //errors otherwise, but this is how it works
import KPI from "./admin/KPI.js";
import AdminNavBar from "./admin/AdminNavBar.js";
import EditImmo from "./admin/EditImmo.js";

import useWebsiteVisitTracker from "./util/useWebsiteVisitTracker.js";


function App() {
  useWebsiteVisitTracker();

  return(
      <Routes>
        <Route path="/" element={<Home />}></Route>
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
