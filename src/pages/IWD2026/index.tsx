import iwdBg from '../../assets/pages/home/IWD 2026 - background.png';
import { HeroIWD2026 } from '../../components/pages/IWD/HeroIWD2026';
import { CountdownTimerIWD2026 } from '../../components/pages/IWD/CountdownTimerIWD2026';
import AboutIWD2026 from '../../components/pages/IWD/AboutIWD2026';
import SpeakersIWD2026 from '../../components/pages/IWD/SpeakersIWD2026';
import ScheduleIWD2026 from '../../components/pages/IWD/ScheduleIWD2026';
import SponsorsIWD2026 from '../../components/pages/IWD/SponsorsIWD2026';
import FAQIWD2026 from '../../components/pages/IWD/FAQIWD2026';

export function IWD2026() {
    return (
        <>
            <HeroIWD2026 
                title="International Women's Day" 
                subtitle="2026" 
                location="Belo Horizonte" 
                bgImage={iwdBg} 
            />
            <CountdownTimerIWD2026 />
            <AboutIWD2026 />
            <SpeakersIWD2026 />
            <ScheduleIWD2026 />
            <SponsorsIWD2026 />
            <FAQIWD2026 />
        </>
    );
}
