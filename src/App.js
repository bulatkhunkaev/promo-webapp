import React from 'react';
import { HashRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import MainPage from './pages/MainPage';
import PromoPage from './pages/PromoPage';

function App() {
  return (
    <Router>
      <nav style={{ padding: 10 }}>
        <Link to="/main">Главная</Link> | <Link to="/promo">Промо</Link>
      </nav>
      <Routes>
        {/* При заходе на корень — перенаправляем на /main */}
        <Route path="/" element={<Navigate to="/main" />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/promo" element={<PromoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
