import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Public } from "../../routes/Public";
import { Admin } from "../../routes/admin/Admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Public />} />
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
