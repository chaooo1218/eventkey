import React, { useState } from 'react';

const WalletButton: React.FC = () => {
    const [connected, setConnected] = useState(false);
    const [walletAddress, setWalletAddress] = useState('');

    const connectWallet = () => {
        // 模擬錢包地址
        const fakeAddress = '0x' + Math.random().toString(16).substring(2, 10).toUpperCase();
        setWalletAddress(fakeAddress);
        setConnected(true);
    };

    return (
        <div style={{ marginBottom: 24 }}>
            {connected ? (
                <button disabled style={{ background: '#eee', padding: '8px 16px', borderRadius: 6 }}>
                    ✅ 已連接：{walletAddress}
                </button>
            ) : (
                <button onClick={connectWallet} style={{ background: '#0070f3', color: 'white', padding: '8px 16px', borderRadius: 6 }}>
                    連接錢包
                </button>
            )}
        </div>
    );
};

export default WalletButton;
