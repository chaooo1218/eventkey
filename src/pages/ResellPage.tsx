import { useState } from 'react';
import QRCode from 'react-qr-code';
import { useAccount } from 'wagmi';

const ResellPage = () => {
    const { address } = useAccount();
    const [code, setCode] = useState('');
    const [tokenId, setTokenId] = useState('');

    const generateCode = () => {
        const random = Math.floor(100000 + Math.random() * 900000).toString();
        setCode(random);
    };

    const qrValue = JSON.stringify({
        tokenId,
        owner: address,
        code
    });

    return (
        <div style={{ backgroundColor: '#f4f4f4', minHeight: '100vh', padding: 32 }}>
            <h1>🔄 讓票轉讓（驗證碼 + 掃碼模式）</h1>
            <p>按一下產生 6 位驗證碼，並讓掃描對方的 QR code 轉讓票券</p>

            <input
                value={tokenId}
                onChange={(e) => setTokenId(e.target.value)}
                placeholder="輸入票券 ID"
                style={{ width: '100%', padding: 8, marginTop: 8 }}
            />

            <button
                onClick={generateCode}
                style={{
                    marginTop: 24,
                    padding: '10px 20px',
                    backgroundColor: '#6f439c',
                    color: 'white',
                    border: 'none',
                    borderRadius: 6,
                    cursor: 'pointer'
                }}
            >
                產生驗證碼與 QR Code
            </button>

            {code && (
                <div style={{ marginTop: 32 }}>
                    <h3>✅ 驗證碼：{code}</h3>
                    <QRCode value={qrValue} size={200} />
                    <p style={{ fontSize: 12, color: '#888' }}>請讓接收者掃描此 QR code</p>
                </div>
            )}
        </div>
    );
};

export default ResellPage;
