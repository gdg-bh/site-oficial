import devfestBg from '../../assets/pages/home/bg.png';
import { HeroEvent } from '../../components/Common/HeroEvent';
import AboutGoogleIO2024 from '../../components/pages/GoogleIO/AboutGoogleIO2024';

export function GoogleIO2024() {
    return (
        <>
            <HeroEvent title="Google I/O Extended 2024" location="Belo Horizonte" bgImage={devfestBg} />
            <AboutGoogleIO2024 />
        </>
    );
}
