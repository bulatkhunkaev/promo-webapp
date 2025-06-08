import React, { useEffect, useState } from 'react';

const API = 'https://promo-backend-lwis.onrender.com';

export default function MainPage() {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch(`${API}/brands`)
      .then(res => res.json())
      .then(data => setBrands(data))
      .catch(err => console.error('Ошибка загрузки брендов:', err));
  }, []);

  const handleGetPromo = (brandId, channel) => {
    window.open(channel, '_blank');
    alert(`Проверка подписки на канал для бренда ID: ${brandId}`);
    // Позже здесь будет проверка подписки и получение промокода
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
