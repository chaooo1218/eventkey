import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import MyTicketsPage from './pages/MyTicketsPage';
import ResellPage from './pages/ResellPage';
import PurchasePage from './pages/PurchasePage';

import '@rainbow-me/rainbowkit/styles.css';
import {
    getDefaultConfig,
    RainbowKitProvider,
    darkTheme
} from '@rainbow-me/rainbowkit';

import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { sepolia } from 'wagmi/chains';

const config = getDefaultConfig({
    appName: 'EventKey Web3 售票平台',
    projectId: 'd0e69c2c1fc62d5d94a69cef8cafc5db',
    chains: [sepolia],
    ssr: false
});

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider theme={darkTheme()}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<App />} />
                            <Route path="/my-tickets" element={<MyTicketsPage />} />
                            <Route path="/resell" element={<ResellPage />} />
                            <Route path="/purchase" element={<PurchasePage />} />
                        </Routes>
                    </BrowserRouter>
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    </React.StrictMode>
);
