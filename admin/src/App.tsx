import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./component/Sidebar/Sidebar";
import Dashboard from "./component/Dashboard/Dashboard";
import Random from "./component/Sidebar/Random";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="app w-5/6 mx-auto">
          <Sidebar />

          <Routes>
            <Route path="/random" element={<Random />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
