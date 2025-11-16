import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { BasePage } from './pages/BasePage';
import { Home } from './pages/Home';
import { DevFest } from './pages/DevFest';
import { DevFest2024 } from './pages/DevFest2024';

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: 'instant' }); }, [pathname]);
    return null;
}

export function AppRoutes() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<BasePage />}>
                    <Route index element={<Home />} />
                    <Route path="/devfest" element={<DevFest />} />
                    <Route path="/devfest-2024" element={<DevFest2024 />} />
                    <Route path="*" element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
