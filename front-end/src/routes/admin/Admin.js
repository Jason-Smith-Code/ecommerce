import React from "react";
import { Routes, Route } from "react-router-dom";
import { AdminNav } from "../../components/navigation/AdminNav";
import { AdminPage } from "./AdminPage";
import { AdminProduct } from "./AdminProduct";
import "./Admin.css";

export const Admin = () => {
  return (
    <div id="admin-container">
      <AdminNav />
      <Routes>
        <Route index element={<AdminPage />} />
        <Route path="/" element={<AdminPage />} exact />
        <Route path="create-product" element={<AdminProduct />} />
      </Routes>
    </div>
  );
};
