import WalletButton from './WalletButton';

const Navbar = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '12px 24px',
            backgroundColor: '#1e3a8a',
            color: 'white',
            position: 'sticky',
            top: 0,
            zIndex: 999,
        }}>
            <h2 style={{ fontWeight: 600 }}>🎫 EventKey</h2>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <a href="#" style={{ color: 'white', textDecoration: 'none' }}>我的票券</a>
                <a href="#" style={{ color: 'white', textDecoration: 'none' }}>讓票轉售</a>
                <WalletButton />
            </div>
        </div>
    );
};

export default Navbar;
