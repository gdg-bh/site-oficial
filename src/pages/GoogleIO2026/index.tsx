import ioBg from '../../assets/pages/io2026/Fundo_io_2026.png';
import ioBgBig from '../../assets/pages/io2026/Fundo_io_2026_big.png';
import ioBgMobile from '../../assets/pages/io2026/Fundo_io_2026_mobile.png';
import AboutGoogleIO2026 from '../../components/pages/GoogleIO/AboutGoogleIO2026';
import SpeakersGoogleIO2026 from '../../components/pages/GoogleIO/SpeakersGoogleIO2026';
import ScheduleGoogleIO2026 from '../../components/pages/GoogleIO/ScheduleGoogleIO2026';
import SponsorsGoogleIO2026 from '../../components/pages/GoogleIO/SponsorsGoogleIO2026';
import { GoogleIO2026HeroCard } from '../../components/pages/GoogleIO/GoogleIO2026HeroCard';

export function GoogleIO2026() {
    return (
        <>
            <section className="relative w-full h-[550px] flex flex-col items-center justify-center bg-white px-4 overflow-hidden">
                <picture className="absolute inset-0 w-full h-full">
                    <source media="(max-width: 768px)" srcSet={ioBgMobile} />
                    <source media="(min-width: 1921px)" srcSet={ioBgBig} />
                    <img
                        src={ioBg}
                        alt="Google I/O Extended 2026"
                        className="w-full h-full object-cover object-[center_60%]"
                        loading="eager"
                        decoding="async"
                        fetchPriority="high"
                    />
                </picture>
                <div className="relative z-10 w-full flex justify-center">
                    <GoogleIO2026HeroCard />
                </div>
            </section>
            <AboutGoogleIO2026 />
            <ScheduleGoogleIO2026 />
            <SpeakersGoogleIO2026 />
            <SponsorsGoogleIO2026 />
        </>
    );
}