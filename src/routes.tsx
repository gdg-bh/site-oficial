import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BasePage } from './pages/BasePage';
import { Home } from './pages/Home';
import { DevFest } from './pages/DevFest';
import { NotFoundPage } from './pages/NotFoundPage';

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BasePage />}>
                    <Route index element={<Home />} />
                    <Route path="/devfest" element={<DevFest />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
