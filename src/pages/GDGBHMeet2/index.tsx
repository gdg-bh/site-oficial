import devfestBg from '../../assets/pages/home/bg.png';
import { HeroEvent } from '../../components/Common/HeroEvent';
import AboutGDGBHMeet2 from '../../components/pages/GDGBHMeet/AboutGDGBHMeet2';
import SpeakersGDGBHMeet2 from '../../components/pages/GDGBHMeet/SpeakersGDGBHMeet2';

export function GDGBHMeet2() {
    return (
        <>
            <HeroEvent title="GDG BH Meet" subtitle="2ª Edição" location="Belo Horizonte" bgImage={devfestBg} />
            <AboutGDGBHMeet2 />
            <SpeakersGDGBHMeet2 />
        </>
    );
}
