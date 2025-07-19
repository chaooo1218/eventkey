// src/pages/ReceivePage.tsx
import { useEffect } from 'react';
import { Html5Qrcode } from 'html5-qrcode';

const ReceivePage = () => {
    useEffect(() => {
        const scanner = new Html5Qrcode("reader");

        Html5Qrcode.getCameras().then(devices => {
            if (devices && devices.length) {
                const cameraId = devices[0].id;

                scanner.start(
                    cameraId,
                    {
                        fps: 10,
                        qrbox: { width: 250, height: 250 }
                    },
                    (decodedText) => {
                        console.log("✅ 掃描結果:", decodedText);

                        try {
                            const data = JSON.parse(decodedText);
                            alert(`🎫 掃描成功！票券 ID: ${data.tokenId}\n驗證碼: ${data.code}`);
                        } catch {
                            alert("⚠️ 無法解析 QRCode 內容");
                        }

                        scanner.stop();
                    },
                    (errorMessage) => {
                        console.warn("掃描中…", errorMessage);
                    }
                );
            }
        });

        // 清除掃描器
        return () => {
            scanner.stop().catch(() => { });
        };
    }, []);

    return (
        <div style={{ padding: 32 }}>
            <h1>📷 掃描票券 QR Code</h1>
            <p>請使用手機鏡頭對準票券 QR Code</p>
            <div id="reader" style={{ width: '100%', maxWidth: 400 }} />
        </div>
    );
};

export default ReceivePage;
