import React from 'react';
import { FaTicketAlt } from 'react-icons/fa';

interface EventCardProps {
    title: string;
    date: string;
    location: string;
    image: string;
    onBuy: () => void;
}

const EventCard: React.FC<EventCardProps> = ({ title, date, location, image, onBuy }) => {
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
            {/* 上半部：內容區塊 */}
            <div>
                <img src={image} alt={title} style={{ width: '100%', borderRadius: 8, height: 180, objectFit: 'cover' }} />
                <h3 style={{ marginTop: 12 }}>{title}</h3>
                <p>{date}</p>
                <p>{location}</p>
            </div>

            {/* 下半部：購票按鈕置中 */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
                <button
                    onClick={onBuy}
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
