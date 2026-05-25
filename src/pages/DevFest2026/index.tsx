import HeroDevFest2026 from '../../components/pages/DevFest2026/HeroDevFest2026';
import SponsorHighlights from '../../components/pages/DevFest2026/SponsorHighlights';
import SponsorRibbons from '../../components/pages/DevFest2026/SponsorRibbons';
import CommunityPhoto from '../../components/pages/DevFest2026/CommunityPhoto';
import SponsorCTA from '../../components/pages/DevFest2026/SponsorCTA';

export function DevFest2026() {
    return (
        <div className="flex flex-col bg-[#f8fbff] min-h-screen">
            <HeroDevFest2026 />
            <SponsorHighlights />
            <SponsorRibbons />
            <CommunityPhoto />
            <SponsorCTA />
        </div>
    );
}