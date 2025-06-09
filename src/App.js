import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import MainPage from './pages/MainPage';
import PromoPage from './pages/PromoPage';

function RedirectUnknownToMain() {
  const location = useLocation();

  // Если путь не / и не /promo, перенаправляем на /
  if (location.pathname !== '/' && location.pathname !== '/promo') {
    return <Navigate to="/" replace />;
  }
  return null;
}

function App() {
  return (
    <Router>
      <RedirectUnknownToMain />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/promo" element={<PromoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
