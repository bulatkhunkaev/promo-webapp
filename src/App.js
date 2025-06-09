// src/App.js
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import MainPage from './pages/MainPage';
import PromoPage from './pages/PromoPage';

function RedirectToMain() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/main');
    }
  }, [location, navigate]);

  return null;
}

function App() {
  return (
    <Router>
      <RedirectToMain />
      <nav style={{ padding: 10 }}>
        <Link to="/main">Главная</Link> | <Link to="/promo">Промо</Link>
      </nav>
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/promo" element={<PromoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
