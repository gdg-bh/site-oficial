import devfestBg from '../../assets/pages/home/bg.png';
import { HeroEvent } from '../../components/Common/HeroEvent';
import AboutGoogleIO2026 from '../../components/pages/GoogleIO/AboutGoogleIO2026';
import SpeakersGoogleIO2026 from '../../components/pages/GoogleIO/SpeakersGoogleIO2026';
import ScheduleGoogleIO2026 from '../../components/pages/GoogleIO/ScheduleGoogleIO2026';
import SponsorsGoogleIO2026 from '../../components/pages/GoogleIO/SponsorsGoogleIO2026';
import { GoogleIO2026HeroCard } from '../../components/pages/GoogleIO/GoogleIO2026HeroCard';

export function GoogleIO2026() {
    return (
        <>
            <HeroEvent title="Google I/O Extended 2026" location="Belo Horizonte" bgImage={devfestBg}>
                <GoogleIO2026HeroCard />
            </HeroEvent>
            <AboutGoogleIO2026 />
            <ScheduleGoogleIO2026 />
            <SpeakersGoogleIO2026 />
            <SponsorsGoogleIO2026 />
        </>
    );
}