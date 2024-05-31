import React from "react";
import Navbar from "./component/Navbar/Navbar.jsx";
import Sidebar from "./component/Sidebar/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app w-5/6 mx-auto">
        <Navbar />
        <hr className="border-none h-1 bg-gray-300" />
        <div className="app-content flex">
          <Sidebar />
          <Routes>
            <Route path="/" element={<div>Home Content</div>} />
            <Route path="/Sidebar" element={<Sidebar />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
