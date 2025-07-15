import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTicketAlt } from 'react-icons/fa';

interface EventCardProps {
    title: string;
    date: string;
    location: string;
    image: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, date, location, image }) => {
    const navigate = useNavigate();

    const handleBuyClick = () => {
        navigate('/purchase', {
            state: { title, date, location, image } // 傳送資料到購票頁
        });
    };

    return (
        <div
            style={{
                border: '1px solid #ccc',
                padding: 16,
                borderRadius: 10,
                width: 300,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundColor: 'white',
            }}
        >
            <div>
                <img src={image} alt={title} style={{ width: '100%', borderRadius: 8, height: 180, objectFit: 'cover' }} />
                <h3 style={{ marginTop: 12 }}>{title}</h3>
                <p>{date}</p>
                <p>{location}</p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
                <button
                    onClick={handleBuyClick}
                    style={{
                        backgroundColor: '#1e1e2f',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '10px 20px',
                        fontSize: '16px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        transition: '0.2s',
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#2563eb')}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#1e1e2f')}
                >
                    <FaTicketAlt />
                    前往購票
                </button>
            </div>
        </div>
    );
};

export default EventCard;
