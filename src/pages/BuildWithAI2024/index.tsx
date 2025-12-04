import devfestBg from '../../assets/pages/home/bg.png';
import { HeroEvent } from '../../components/Common/HeroEvent';
import AboutBuildWithAI2024 from '../../components/pages/BuildWithAI/AboutBuildWithAI2024';
import SpeakersBuildWithAI2024 from '../../components/pages/BuildWithAI/SpeakersBuildWithAI2024';

export function BuildWithAI2024() {
    return (
        <>
            <HeroEvent title="Build With AI 2024" location="Belo Horizonte" bgImage={devfestBg} />
            <AboutBuildWithAI2024 />
            <SpeakersBuildWithAI2024 />
        </>
    );
}
