import './App.css';
import EventCard from './components/EventCard';
import Navbar from './components/Navbar';


function App() {
    const mockEvents = [
        {
            title: '周杰倫-嘉年華 世界巡迴演唱會',
            date: '2025/06/27-7/29',
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

    const handleBuy = (eventTitle: string) => {
        alert(`你已購買：${eventTitle}`);
    };
    return (
        <>
            <div style={{ backgroundColor: '#e6f0ff', minHeight: '100vh' }}>
            <Navbar /> {/* 導覽列放最上面 */}
            <div style={{ padding: '100px 28px 28px 28px' }}>
                <h1>🔏 EventKey - Web3 去中心化售票平台</h1>
                <p>探索正在售票的演唱會...</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap:'wrap' }}>
                    {mockEvents.map((e, i) => (
                        <EventCard
                            key={i}
                            title={e.title}
                            date={e.date}
                            location={e.location}
                            image={e.image}
                            onBuy={() => handleBuy(e.title)}
                        />
                    ))}
                </div>
            </div>
        </div>
      </>
    );
}

export default App;