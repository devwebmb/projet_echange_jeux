import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Connect from "./pages/Connect";
import AddAnnonce from "./pages/AddAnnonce";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/addannonce" element={<AddAnnonce />}></Route>
          <Route path="/account" element={<Account />}></Route>
          <Route path="/connect" element={<Connect />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
