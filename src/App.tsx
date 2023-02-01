import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import ProductDetails from "./components/ProductDetails";
import Products from "./components/Products";

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Products />} />
        <Route path="/:id" element={<ProductDetails />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
