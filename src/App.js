import React from "react";
// Global Styles
import "./styles/App.scss";
// Pages
import Home from "./Pages/Home/Home";
import Main from "./Pages/Main/Main";
import Server from "./Pages/Server/Server";
import Members from "./Pages/Members/Members";
import PersonPage from "./Pages/PersonPage/Personpage";
// Router
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/server" element={<Server />} />
        <Route path="/members" element={<Members />} />
        <Route path="/personpage" element={<PersonPage />} />
      </Routes>
    </div>
  );
}

export default App;
