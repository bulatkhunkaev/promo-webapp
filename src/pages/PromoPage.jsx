import React, { useEffect, useState } from 'react';

const API = 'https://promo-backend-lwis.onrender.com';

export default function PromoPage() {
  const [promos, setPromos] = useState([]);
  const [userId] = useState('123456'); // временный user_id, позже будет Telegram.WebApp

  useEffect(() => {
    fetch(`${API}/promos/${userId}`)
      .then(res => res.json())
      .then(data => setPromos(data))
      .catch(err => console.error('Ошибка загрузки промокодов:', err));
  }, [userId]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Мои промокоды</h2>
      {promos.length === 0 ? (
        <p>Промокоды не найдены</p>
      ) : (
        promos.map(p => (
          <div key={p.id} style={{ border: '1px solid #ccc', padding: 10, marginBottom: 10 }}>
            <strong>{p.code}</strong>
            <p>{p.description}</p>
          </div>
        ))
      )}
    </div>
  );
}
