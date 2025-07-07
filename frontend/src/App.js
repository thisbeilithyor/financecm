import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login.js';
import Home from './Home.js';
import AdminPanel from "./AdminPanel.js";
import ProtectedRoutes from "./ProtectedRoutes.js";
import Immobiliencenter from "./Immobiliencenter.js";
import KPI from "./KPI.js";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route element={<ProtectedRoutes/>}>
          <Route path="adminpanel" element={<AdminPanel />}></Route>
          <Route path="admin/immobiliencenter" element={<Immobiliencenter />}></Route>
          <Route path="admin/kpi" element={<KPI />}></Route>
        </Route>
        <Route path="admin" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
