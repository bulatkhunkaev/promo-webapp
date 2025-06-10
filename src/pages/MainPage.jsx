import React, { useEffect, useState } from 'react';

const API = 'https://promo-backend-lwis.onrender.com';

export default function MainPage() {
  const [brands, setBrands] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    console.log('⚡ MainPage загрузился');

    // Получаем user_id из Telegram WebApp
    const tg = window.Telegram?.WebApp;
    if (tg?.initDataUnsafe?.user?.id) {
      setUserId(tg.initDataUnsafe.user.id);
      console.log('✅ user_id получен:', tg.initDataUnsafe.user.id);
    } else {
      console.warn('❌ user_id не найден в Telegram WebApp');
    }

    // Загружаем бренды
    fetch(`${API}/brands`)
      .then(res => res.json())
      .then(data => {
        console.log('✅ Получены бренды:', data);
        setBrands(data);
      })
      .catch(err => console.error('❌ Ошибка загрузки брендов:', err));
  }, []);

  const handleGetPromo = async (brandId, channel) => {
    if (!userId) {
      alert('Ошибка: user_id не найден');
      return;
    }

    window.open(channel, '_blank');

    const confirmed = window.confirm('Вы подписались на канал?');
    if (!confirmed) return;

    try {
      const res = await fetch(`${API}/check_subscription`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user_id: userId, brand_id: brandId })
      });

      const data = await res.json();
      if (res.ok) {
        alert(`🎉 Ваш промокод: ${data.code}`);
      } else {
        alert(`Ошибка: ${data.error || 'Не удалось получить промокод'}`);
      }
    } catch (err) {
      console.error('❌ Ошибка при проверке подписки:', err);
      alert('Сервер недоступен');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Бренды</h2>
      {brands.length === 0 && <p>Загрузка...</p>}
      {brands.map(brand => (
        <div key={brand.id} style={{ border: '1px solid #ccc', padding: 10, marginBottom: 10 }}>
          <img src={brand.avatar} alt={brand.name} width="100" />
          <h3>{brand.name}</h3>
          <p>Тематика: {brand.topic}</p>
          <button onClick={() => handleGetPromo(brand.id, brand.channel)}>Получить</button>
        </div>
      ))}
    </div>
  );
}
