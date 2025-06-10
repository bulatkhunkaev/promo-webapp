import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const tg = window.Telegram?.WebApp;
if (tg) {
  tg.ready(); // 🔄 Сообщаем Telegram, что WebApp готов
  console.log('✅ Telegram WebApp инициализирован');
} else {
  console.warn('❌ Telegram WebApp не найден');
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
