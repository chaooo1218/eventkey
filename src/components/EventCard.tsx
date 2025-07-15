import React from 'react';

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
            <button onClick={onBuy}>🎟️ 購票</button>
        </div>
    );
};

export default EventCard;
