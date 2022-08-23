import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { HomePage } from '../../routes/homePage';
import { CartPage } from "../../routes/CartPage";
import { CategoryPage } from "../../routes/CategoryPage";
import { ProductPage } from "../../routes/ProductPage";
import { CheckOutPage } from "../../routes/CheckOutPage";
import { SignInPage } from "../../routes/SignInPage";
import { UserAccountPage } from "../../routes/UserAccountPage";
import { DeliveryPage } from "../../routes/DeliveryPage";
import { OrdersPage } from "../../routes/OrdersPage";
import { PaymentsPage } from "../../routes/PaymentsPage";
import { TermsConditionsPage } from "../../routes/TermsConditionsPage";

function App() {

  return (
      <BrowserRouter>
        <Header />
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="/" element={<HomePage />} exact/>
            <Route path="cart" element={<CartPage />} />
            <Route path="category" element={<CategoryPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="checkout" element={<CheckOutPage />} />
            <Route path="sign-in" element={<SignInPage />} />
            <Route path="account" element={<UserAccountPage />} />
            <Route path="delivery" element={<DeliveryPage />} />
            <Route path="orders" element={<OrdersPage />} />
            <Route path="payments" element={<PaymentsPage />} />
            <Route path="terms-conditions" element={<TermsConditionsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
