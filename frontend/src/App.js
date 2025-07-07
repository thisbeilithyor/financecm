import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login.js';
import Home from './Home.js';
import AdminPanel from "./admin/AdminPanel.js";
import ProtectedRoutes from "./ProtectedRoutes.js";
import Immobiliencenter from "./.\/admin/Immobiliencenter.js"; //errors otherwise, but this is how it works
import KPI from "./admin/KPI.js";
import AdminNavBar from "./admin/AdminNavBar.js";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route element={<ProtectedRoutes/>}>
          <Route element={<AdminNavBar />}>
            <Route path="admin/panel" element={<AdminPanel />}></Route>
            <Route path="admin/immobiliencenter" element={<Immobiliencenter />}></Route>
            <Route path="admin/kpi" element={<KPI />}></Route>
          </Route>
        </Route>
        <Route path="admin" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
