import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './pages/MainPage';
import PromoPage from './pages/PromoPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/main" />} />  {/* перенаправляем на /main */}
        <Route path="/main" element={<MainPage />} />
        <Route path="/promo" element={<PromoPage />} />
      </Routes>
    </Router>
  );
}
