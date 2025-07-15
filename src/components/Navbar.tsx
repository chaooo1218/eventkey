import WalletButton from './WalletButton';

const Navbar = () => {
    return (
        <nav style={{
            width: '100%',
            backgroundColor: '#1E3A8A',
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
                🎫 EventKey
            </div>

            <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                <a href="#" style={{ color: 'white', textDecoration: 'none' }}>我的票券</a>
                <a href="#" style={{ color: 'white', textDecoration: 'none' }}>讓票轉售</a>
                <WalletButton />
            </div>
        </nav>
    );
};

export default Navbar;
