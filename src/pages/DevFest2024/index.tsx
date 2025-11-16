import devfestBg from '../../assets/pages/home/bg.png';
// import { CountdownTimer } from '../../components/pages/DevFest/CountdownTimer';
import Schedule2024 from '../../components/pages/DevFest/Schedule2024';
import Sponsors2024 from '../../components/pages/DevFest/Sponsors2024';
import { HeroEvent } from '../../components/Common/HeroEvent';
import AboutDevfest2024 from '../../components/pages/DevFest/AboutDevfest2024';

export function DevFest2024() {
    return (
        <>
            <HeroEvent title="DevFest 2024" location="Belo Horizonte" bgImage={devfestBg} />
            {/* <CountdownTimer /> */}
            <AboutDevfest2024 />
            <Schedule2024 />
            <Sponsors2024 />
        </>
    );
}
