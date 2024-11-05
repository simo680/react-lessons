import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import NotFoundPage from "./pages/NotFoundPage";
import "./App.css";

function App() {
  return (
    <Router basename="/RECTLESS-CP-4">
      <Routes>
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
