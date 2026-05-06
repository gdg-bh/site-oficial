import devfestBg from '../../assets/pages/home/bg.png';
import { HeroEvent } from '../../components/Common/HeroEvent';
import AboutBuildWithAI2026 from '../../components/pages/BuildWithAI/AboutBuildWithAI2026';
import SpeakersBuildWithAI2026 from '../../components/pages/BuildWithAI/SpeakersBuildWithAI2026';
import { BuildWithAI2026HeroCard } from '../../components/pages/BuildWithAI/BuildWithAI2026HeroCard';

export function BuildWithAI2026() {
    return (
        <>
            <HeroEvent title="Build With AI 2026" location="Belo Horizonte" bgImage={devfestBg}>
                <BuildWithAI2026HeroCard />
            </HeroEvent>
            <AboutBuildWithAI2026 />
            <SpeakersBuildWithAI2026 />
        </>
    );
}
