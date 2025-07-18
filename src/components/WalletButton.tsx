// src/components/WalletButton.tsx
import { ConnectButton } from '@rainbow-me/rainbowkit';

const WalletButton = () => {
    return (
        <ConnectButton
            showBalance={false}
            accountStatus="address"
            chainStatus="icon"
        />
    );
};

export default WalletButton;
