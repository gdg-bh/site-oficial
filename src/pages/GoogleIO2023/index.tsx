import devfestBg from '../../assets/pages/home/bg.png';
import { HeroEvent } from '../../components/Common/HeroEvent';
import AboutGoogleIO2023 from '../../components/pages/GoogleIO/AboutGoogleIO2023';
import SpeakersGoogleIO2023 from '../../components/pages/GoogleIO/SpeakersGoogleIO2023';

export function GoogleIO2023() {
    return (
        <>
            <HeroEvent title="Google I/O Extended 2023" location="Belo Horizonte" bgImage={devfestBg} />
            <AboutGoogleIO2023 />
            <SpeakersGoogleIO2023 />
        </>
    );
}
