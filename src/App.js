import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";



const App = () => {

  return (
    <div >
      {/* declare route container */}
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App