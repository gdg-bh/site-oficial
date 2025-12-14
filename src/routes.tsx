import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { BasePage } from './pages/BasePage';
import { Home } from './pages/Home';
import { DevFest } from './pages/DevFest';
import { DevFest2024 } from './pages/DevFest2024';
import { BuildWithAI2024 } from './pages/BuildWithAI2024';
import { BuildWithAI2025 } from './pages/BuildWithAI2025';
import { GoogleIO2024 } from './pages/GoogleIO2024';
import { GoogleIO2023 } from './pages/GoogleIO2023';
import { GDGBHMeet } from './pages/GDGBHMeet';


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
                    <Route path="/build-with-ai-2024" element={<BuildWithAI2024 />} />
                    <Route path="/build-with-ai-2025" element={<BuildWithAI2025 />} />
                    <Route path="/google-io-extended-2024" element={<GoogleIO2024 />} />
                    <Route path="/google-io-extended-2023" element={<GoogleIO2023 />} />
                    <Route path="/gdg-bh-meet-1" element={<GDGBHMeet />} />
                    <Route path="*" element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
