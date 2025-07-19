// src/pages/ResellPage.tsx
import { useState } from 'react';

const ResellPage = () => {
    const [tokenId, setTokenId] = useState('');
    const [recipient, setRecipient] = useState('');

    const handleSubmit = () => {
        if (!tokenId || !recipient) {
            alert('請輸入票券 ID 與對方錢包地址');
            return;
        }

        // ✅ 這裡之後會改成呼叫 smart contract 轉移 NFT
        alert(`即將轉讓票券 #${tokenId} 給 ${recipient}`);
    };

    return (
        <div
            style={{
                backgroundColor: '#f4f4f4',
                minHeight: '100vh',
                padding: 32,
            }}
        >
            <h1>🔄 讓票轉售</h1>
            <p>你可以將票券轉讓給其他使用者（後續將接錢包與 NFT 驗證）</p>

            <div style={{ marginTop: 32 }}>
                <label>🎫 票券 ID：</label><br />
                <input
                    type="text"
                    value={tokenId}
                    onChange={(e) => setTokenId(e.target.value)}
                    style={{ width: '100%', padding: 8, marginTop: 8 }}
                    placeholder="請輸入你的票券編號"
                />
            </div>

            <div style={{ marginTop: 20 }}>
                <label>👤 接收者錢包地址：</label><br />
                <input
                    type="text"
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                    style={{ width: '100%', padding: 8, marginTop: 8 }}
                    placeholder="0x..."
                />
            </div>

            <button
                onClick={handleSubmit}
                style={{
                    marginTop: 24,
                    padding: '10px 20px',
                    backgroundColor: '#6f439c',
                    color: 'white',
                    border: 'none',
                    borderRadius: 6,
                    cursor: 'pointer',
                }}
            >
                確認轉讓
            </button>
        </div>
    );
};

export default ResellPage;
