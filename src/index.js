import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const tg = window.Telegram?.WebApp;
if (tg) {
  tg.ready(); // 🔄 Telegram WebApp готов к работе
  console.log('✅ Telegram WebApp инициализирован');
  console.log('initDataUnsafe:', tg.initDataUnsafe); // 🔍 посмотри в консоли
} else {
  console.warn('❌ Telegram WebApp не найден');
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
