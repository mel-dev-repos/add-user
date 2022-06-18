import React from "react";
import { Routes, Route } from "react-router-dom";
import BasicTable from "../components/table/table";
import Dashboard from "../components/dashboard/dashboard";

const RouteFunc = () => {
  return (
    <Routes>
      <Route path="/" element={<BasicTable />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default RouteFunc;
