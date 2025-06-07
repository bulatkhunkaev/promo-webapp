import React, { useEffect, useState } from 'react';

function MainPage() {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    if (window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready(); // Сообщаем Telegram, что всё готово
      const user = tg.initDataUnsafe?.user;
      if (user?.id) {
        setUserId(user.id);
      }
    }
  }, []);

  return (
    <div>
      <h2>Главная страница</h2>
      {userId ? (
        <p>Ваш Telegram user_id: <strong>{userId}</strong></p>
      ) : (
        <p>Загрузка данных пользователя...</p>
      )}
    </div>
  );
}

export default MainPage;
