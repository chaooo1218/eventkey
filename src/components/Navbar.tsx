import { Link } from 'react-router-dom';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Navbar = () => {
    return (
        <nav
            style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#6f439c',
                padding: '12px 24px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                color: 'white',
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 1000,
            }}
        >
            {/* Logo / Title */}
            <div style={{ fontWeight: 'bold', fontSize: 20 }}>
                🎫 EventKey 售票平台
            </div>

            {/* 導覽選單 + 錢包連接 */}
            <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                <Link to="/my-tickets" style={{ color: 'white', textDecoration: 'none' }}>
                    我的票券
                </Link>
                <Link to="/resell" style={{ color: 'white', textDecoration: 'none' }}>
                    讓票轉售
                </Link>
                <ConnectButton showBalance={false} accountStatus="address" chainStatus="icon" />
            </div>
        </nav>
    );
};

export default Navbar;
