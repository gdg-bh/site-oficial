import devfestBg from '../../assets/pages/home/bg.png';
import { HeroEvent } from '../../components/Common/HeroEvent';
import AboutGoogleIO2025 from '../../components/pages/GoogleIO/AboutGoogleIO2025';
import SpeakersGoogleIO2025 from '../../components/pages/GoogleIO/SpeakersGoogleIO2025';

export function GoogleIO2025() {
    return (
        <>
            <HeroEvent title="Google I/O Extended 2025" location="Belo Horizonte" bgImage={devfestBg} />
            <AboutGoogleIO2025 />
            <SpeakersGoogleIO2025 />
        </>
    );
}
