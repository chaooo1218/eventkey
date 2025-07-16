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
            <footer style={{
                backgroundColor: '#1e1e2f',
                color: '#fff',
                padding: '32px 24px',
                fontSize: '14px',
                lineHeight: '1.6',
            }}>
                <h3 style={{ color: '#ffd700' }}>🏆 亞太資通訊科技聯盟大賽（APICTA Awards 2025）</h3>
                <p>
                    Asia Pacific ICT Alliance（APICTA）為印太區最具影響力的 ICT 組織，包含臺灣、澳洲、中國大陸、
                    香港、日本、新加坡等 17 個會員經濟體，每年舉辦超過 200 組隊伍參賽的資通訊科技競賽，
                    被譽為「印太資通訊科技奧斯卡獎」。
                </p>
                <p>
                    本屆賽事將於 <strong>2025年12月4日 至 8日</strong> 在臺灣高雄舉行。APICTA 競賽旨在促進區域 ICT 合作與發展，
                    並協助臺灣團隊拓展國際能見度。/n
                    隊伍成員:
                    輔仁大學:蔡櫂宇
                    台北大學:蕭智敏
                    輔仁大學:鄭伊岑
                </p>
                <p>
                    📄 詳細報名資訊請參閱：
                    <a
                        href="https://apicta.tw/pdf/2025_APICTA_Awards_Guideline_Final.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#4fc3f7', marginLeft: 6, textDecoration: 'underline' }}
                    >
                        2025 APICTA Awards PDF 指南
                    </a>
                </p>

                <hr style={{ margin: '16px 0', borderColor: '#444' }} />

                <div>
                    指導單位：行政院智慧國家推動小組 ｜ 主辦單位：數位發展部 數位產業署
                </div>
            </footer>
        </div>
    );
};
export default App;
