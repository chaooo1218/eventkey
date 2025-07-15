import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const PurchasePage = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const { title, date, location, image } = state || {};

    const [ticketCount, setTicketCount] = useState(1);

    if (!state) {
        return <p>⚠️ 請從首頁點擊「購票」按鈕進入此頁</p>;
    }

    const totalAmount = ticketCount * 1800;

    const handleNext = () => {
        // 將資料傳遞到下一步的付款頁面（未來要實作）
        navigate('/payment', {
            state: {
                title,
                date,
                location,
                image,
                ticketCount,
                totalAmount
            }
        });
    };

    return (
        <div style={{ padding: 32 }}>
            <h2>🎟️ 購票 - {title}</h2>
            <img src={image} alt={title} style={{ width: 300, borderRadius: 8 }} />
            <p>{date} | {location}</p>

            <label style={{ marginTop: 16, display: 'block', fontSize: 16 }}>
                選擇張數：
                <select
                    value={ticketCount}
                    onChange={e => setTicketCount(Number(e.target.value))}
                    style={{ marginLeft: 8, fontSize: 16 }}
                >
                    {[...Array(10)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                            {i + 1} 張
                        </option>
                    ))}
                </select>
            </label>

            <p style={{ marginTop: 16, fontSize: 18 }}>💰 總金額：NT$ {totalAmount}</p>

            <button
                onClick={handleNext}
                style={{
                    marginTop: 24,
                    padding: '10px 20px',
                    fontSize: 16,
                    backgroundColor: '#6f439c',
                    color: 'white',
                    border: 'none',
                    borderRadius: 8,
                    cursor: 'pointer'
                }}
            >
                下一步：付款
            </button>
        </div>
    );
};

export default PurchasePage;
