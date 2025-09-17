import { Outlet } from 'react-router-dom';
import { Container } from '../../components/common/Container';
import { Footer } from '../../components/common/Footer';
import { Header } from '../../components/common/Header';

export function BasePage() {
    return (
        <main>
            <Header />
            <Container>
                <Outlet />
            </Container>
            <Footer />
        </main>
    );
}
