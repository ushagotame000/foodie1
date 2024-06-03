import React from "react";
import Navbar from "./component/Navbar.jsx/Navbar";
import Sidebar from "./component/Sidebar/Sidebar";
import Add from "./component/Orders/Add";
import Orders from "./component/Orders/Orders";
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
            <Route path="/Add" element={<Add />} />
            <Route path="/Sidebar" element={<Sidebar />} />
            <Route path="/Orders" element={<Orders />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
