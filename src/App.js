import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MainPage from './pages/MainPage';
import PromoPage from './pages/PromoPage';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Главная</Link> | <Link to="/promo">Промо</Link>
        </nav>

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/promo" element={<PromoPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
