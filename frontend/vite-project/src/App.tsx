import React from "react";
import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/navbars/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/shop";
import ShopCatagory from "./pages/shopCatagory";
import Product from "./pages/product";
import Cart from "./pages/cart";
import LoginSignup from "./pages/loginSignup";
import Checkout from "./pages/checkout";
import Footer from "./components/footer/footer";
import men_banner from "./components/assets/banner_mens.png";
import women_banner from "./components/assets/banner_women.png";
import kid_banner from "./components/assets/banner_kids.png";

function App() {
  document.title = "E-Commerce";

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/men"
            element={<ShopCatagory banner={men_banner} category="men" />}
          />
          <Route
            path="/women"
            element={<ShopCatagory banner={women_banner} category="women" />}
          />
          <Route
            path="/kid"
            element={<ShopCatagory banner={kid_banner} category="kid" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<LoginSignup />} />
          <Route path="checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
