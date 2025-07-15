import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import MyTicketsPage from './pages/MyTicketsPage.tsx'; // 等下會新增這個頁面

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/my-tickets" element={<MyTicketsPage />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
