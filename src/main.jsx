import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientDashboard from "./pages/Client/ClientDashboard";
import RestaurantDashboard from "./pages/Restaurant/RestaurantDashboard";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import LivreurDashboard from "./pages/Livreur/LivreurDashboard";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/client" element={<ClientDashboard />} />
                <Route path="/restaurant" element={<RestaurantDashboard />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/livreur" element={<LivreurDashboard />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
