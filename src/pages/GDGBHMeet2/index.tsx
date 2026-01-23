import devfestBg from '../../assets/pages/home/bg.png';
import { HeroGDGBHMeet2 } from '../../components/pages/GDGBHMeet/HeroGDGBHMeet2';
import { CountdownTimerGDGBHMeet2 } from '../../components/pages/GDGBHMeet/CountdownTimerGDGBHMeet2';
import AboutGDGBHMeet2 from '../../components/pages/GDGBHMeet/AboutGDGBHMeet2';
import SpeakersGDGBHMeet2 from '../../components/pages/GDGBHMeet/SpeakersGDGBHMeet2';
import ScheduleGDGBHMeet2 from '../../components/pages/GDGBHMeet/ScheduleGDGBHMeet2';
import SponsorsGDGBHMeet2 from '../../components/pages/GDGBHMeet/SponsorsGDGBHMeet2';
import FAQGDGBHMeet2 from '../../components/pages/GDGBHMeet/FAQGDGBHMeet2';

export function GDGBHMeet2() {
    return (
        <>
            <HeroGDGBHMeet2 title="GDG BH Meet" subtitle="2ª Edição" location="Belo Horizonte" bgImage={devfestBg} />
            <CountdownTimerGDGBHMeet2 />
            <AboutGDGBHMeet2 />
            <SpeakersGDGBHMeet2 />
            <ScheduleGDGBHMeet2 />
            <SponsorsGDGBHMeet2 />
            <FAQGDGBHMeet2 />
        </>
    );
}
