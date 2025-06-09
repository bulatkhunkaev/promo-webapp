import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useLocation, Link } from 'react-router-dom';
import MainPage from './pages/MainPage';
import PromoPage from './pages/PromoPage';

function RedirectUnknownToMain() {
  const location = useLocation();
  if (location.pathname !== '/' && location.pathname !== '/promo') {
    return <Navigate to="/" replace />;
  }
  return null;
}

function Navigation() {
  return (
    <nav style={{ padding: 10, textAlign: 'center' }}>
      <Link to="/" style={{ marginRight: 10 }}>Главная</Link>
      <Link to="/promo">Промо</Link>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <RedirectUnknownToMain />
      <Navigation />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/promo" element={<PromoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
