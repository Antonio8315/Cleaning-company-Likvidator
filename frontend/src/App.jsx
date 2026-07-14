import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/MainPage.jsx';
import { ReviewsPage } from './pages/ReviewsPage.jsx';
import { ServicesPage } from './pages/ServicesPage.jsx';
import { ScrollToTop } from './components/ScrollToTop';

import './App.css'

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        {}
        <Route path="/" element={<MainPage />} />

        {}
        <Route path="/services" element={<ServicesPage />} />

        {}
        <Route path="/reviews" element={<ReviewsPage />} />

        {}
        {}
      </Routes>
    </>
  );
}

