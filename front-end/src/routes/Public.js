import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { HomePage } from "./homePage";
import { CartPage } from "./CartPage";
import { CategoryPage } from "./CategoryPage";
import { ProductPage } from "./ProductPage";
import { CheckOutPage } from "./CheckOutPage";
import { SignInPage } from "./SignInPage";
import { UserAccountPage } from "./UserAccountPage";
import { DeliveryPage } from "./DeliveryPage";
import { OrdersPage } from "./OrdersPage";
import { PaymentsPage } from "./PaymentsPage";
import { Shop } from "./Shop";
import { TermsConditionsPage } from "./TermsConditionsPage";

export const Public = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/" element={<HomePage />} exact />
        <Route path="shop" element={<Shop />} />
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
    </>
  );
};
