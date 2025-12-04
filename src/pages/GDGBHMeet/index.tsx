import devfestBg from '../../assets/pages/home/bg.png';
import { HeroEvent } from '../../components/Common/HeroEvent';
import AboutGDGBHMeet from '../../components/pages/GDGBHMeet/AboutGDGBHMeet';
import SpeakersGDGBHMeet from '../../components/pages/GDGBHMeet/SpeakersGDGBHMeet';

export function GDGBHMeet() {
    return (
        <>
            <HeroEvent title="GDG BH Meet" subtitle="1ª Edição" location="Belo Horizonte" bgImage={devfestBg} />
            <AboutGDGBHMeet />
            <SpeakersGDGBHMeet />
        </>
    );
}
