import devfestBg from '../../assets/pages/home/bg.png';
import { HeroEvent } from '../../components/Common/HeroEvent';
import AboutBuildWithAI2025 from '../../components/pages/BuildWithAI/AboutBuildWithAI2025';
import SpeakersBuildWithAI2025 from '../../components/pages/BuildWithAI/SpeakersBuildWithAI2025';

export function BuildWithAI2025() {
    return (
        <>
            <HeroEvent title="Build With AI 2025" location="Belo Horizonte" bgImage={devfestBg} />
            <AboutBuildWithAI2025 />
            <SpeakersBuildWithAI2025 />
        </>
    );
}
