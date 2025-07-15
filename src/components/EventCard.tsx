import React from 'react';
import { FaTicketAlt } from 'react-icons/fa'; // ✅ 新增這行來使用票卷圖示


interface EventCardProps {
    title: string;
    date: string;
    location: string;
    image: string;
    onBuy: () => void;
}

const EventCard: React.FC<EventCardProps> = ({ title, date, location, image, onBuy }) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: 16, borderRadius: 10, width: 300 }}>
            <img src={image} alt={title} style={{ width: '100%', borderRadius: 8 }} />
            <h3>{title}</h3>
            <p>{date}</p>
            <p>{location}</p>
            <button
                onClick={onBuy}
                style={{
                    backgroundColor: '	#1e1e2f',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '10px 20px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'transform 0.2s, backgroundColor 0.2s',
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#2563eb')}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#1e40af')}
            >
                <FaTicketAlt />
                購票
            </button>

        </div>
    );
};

export default EventCard;
