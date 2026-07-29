import devfestBg from '../../assets/pages/devfest2026/Img Header.png';
import { HeroEvent } from '../../components/Common/HeroEvent';
import AboutDevfest2026 from '../../components/pages/DevFest2026/AboutDevfest2026';
import ContestWidget from '../../components/pages/DevFest2026/ContestWidget';
import Speakers2026 from '../../components/pages/DevFest2026/Speakers2026';
import Schedule2026 from '../../components/pages/DevFest2026/Schedule2026';
import Sponsors2026 from '../../components/pages/DevFest2026/Sponsors2026';

export function DevFest2026() {
    return (
        <>
            <HeroEvent title="DevFest 2026" location="Belo Horizonte" bgImage={devfestBg} />
            <ContestWidget />
            <AboutDevfest2026 />
            <Speakers2026 />
            {/* <Schedule2026 /> */}
            <Sponsors2026 />
        </>
    );
}