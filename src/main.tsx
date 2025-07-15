import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import MyTicketsPage from './pages/MyTicketsPage.tsx'; // 等下會新增這個頁面
import ResellPage from './pages/ResellPage';
import PurchasePage from './pages/PurchasePage';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/my-tickets" element={<MyTicketsPage />} />
                <Route path="/resell" element={<ResellPage />} />
                <Route path="/purchase" element={<PurchasePage />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
