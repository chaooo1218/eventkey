import EventCard from './components/EventCard';
import Navbar from './components/Navbar';

const mockEvents = [
    {
        title: '周杰倫-嘉年華 世界巡迴演唱會',
        date: '2025/06/27 - 2025/07/29',
        location: '台北小巨蛋',
        image: '/images/周杰倫演唱會.png',
    },
    {
        title: 'BLACKPINK Born Pink Encore',
        date: '2025/09/05',
        location: '高雄國家體育場',
        image: '/images/BLACKPINK.png',
    },
];

const App = () => {
    return (
        <div style={{ backgroundColor: '#e8edff', minHeight: '100vh' }}>
            <Navbar />
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '100px 28px 28px 28px' }}>
                <h1>🎫 EventKey - Web3 去中心化售票平台</h1>
                <p>探索正在售票的演唱會...</p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
                    {mockEvents.map((event, index) => (
                        <EventCard
                            key={index}
                            title={event.title}
                            date={event.date}
                            location={event.location}
                            image={event.image}

                        />
                    ))}
                </div>
            </div>

        </div>
    );
};

export default App;
