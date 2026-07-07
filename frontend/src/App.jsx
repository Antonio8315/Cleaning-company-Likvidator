import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/MainPage.jsx';
import { ReviewsPage } from './pages/ReviewsPage.jsx';
import { ServicesPage } from './pages/ServicesPage.jsx';
import { ScrollToTop } from './components/ScrollToTop';
// import { CartPage } from './pages/CartPage.jsx';
import './App.css'

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        {/* {/* Головна сторінка */}
        <Route path="/" element={<MainPage />} />

        {/* {Послуги} */}
        <Route path="/services" element={<ServicesPage />} />

        {/* Нова сторінка відгуків */}
        <Route path="/reviews" element={<ReviewsPage />} />

        {/* Кошик */}
        {/* <Route path ="/cart" element={<CartPage />} /> */}
      </Routes>
    </>
  );
}

