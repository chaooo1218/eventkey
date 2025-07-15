import WalletButton from './WalletButton';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{
            width: '100%',
            backgroundColor: '#6f439c',
            padding: '12px 24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'white',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 1000
        }}>
            <div style={{ fontWeight: 'bold', fontSize: 20 }}>
                🎫 web3去中心化模擬售票系統
            </div>

            <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                <Link to="/my-tickets" style={{ color: 'white', textDecoration: 'none' }}>
                    我的票券
                </Link>
                <Link to="/resell" style={{ color: 'white', textDecoration: 'none' }}>
                    讓票轉售
                </Link>
                <a href="#" style={{ color: 'white', textDecoration: 'none' }}>讓票轉售</a>
                <WalletButton />
            </div>
        </nav>
    );
};

export default Navbar;
