import React, { useEffect, useState } from 'react';

const API = 'https://promo-backend-lwis.onrender.com';

export default function PromoPage() {
  const [promos, setPromos] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    const uid = tg?.initDataUnsafe?.user?.id;
    if (!uid) {
      console.warn('❌ user_id не найден');
      return;
    }
    setUserId(uid);

    fetch(`${API}/promos/${uid}`)
      .then(res => res.json())
      .then(data => {
        console.log('✅ Промокоды получены:', data);
        setPromos(data);
      })
      .catch(err => console.error('❌ Ошибка загрузки промокодов:', err));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Мои промокоды</h2>
      {promos.length === 0 ? (
        <p>Промокоды не найдены</p>
      ) : (
        promos.map(p => (
          <div
            key={p.id}
            style={{
              border: '1px solid #ccc',
              padding: 10,
              marginBottom: 10,
              borderRadius: 8,
            }}
          >
            <strong>{p.code}</strong>
            {p.description && <p>{p.description}</p>}
          </div>
        ))
      )}
    </div>
  );
}
