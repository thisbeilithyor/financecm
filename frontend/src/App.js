import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login.js';
import Home from './Home.js';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="admin" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
