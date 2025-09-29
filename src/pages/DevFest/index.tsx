import devfestBg from '../../assets/pages/devfest/bg.png';
import { CountdownTimer } from '../../components/pages/DevFest/CountdownTimer';
import Speakers from '../../components/pages/DevFest/Speakers';
import Schedule from '../../components/pages/DevFest/Schedule';
import Sponsors from '../../components/pages/DevFest/Sponsors';
import { HeroEvent } from '../../components/Common/HeroEvent';
import AboutDevfest from '../../components/pages/DevFest/AboutDevfest';

export function DevFest() {
    return (
        <>
            <HeroEvent title="DevFest 2025" location="Belo Horizonte" bgImage={devfestBg} />
            <CountdownTimer />
            <AboutDevfest />
            <Speakers />
            <Schedule />
            <Sponsors />
        </>
    );
}
