import { DevFestHeroSectionCard } from '../../pages/DevFest/DevFestHeroSectionCard';

interface HeroProps {
    title: string;
    location: string;
    bgImage: string;
}

export function Hero({ title, location, bgImage }: HeroProps) {
    return (
        <section
            className="relative w-full h-[550px] flex flex-col items-center justify-center bg-cover bg-center px-4"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <h1 className="font-medium text-5xl md:text-7xl text-center text-title-color drop-shadow-title">
                {title}
            </h1>
            <p className="font-normal text-2xl md:text-3xl text-center text-title-color drop-shadow-title mt-3">
                {location}
            </p>

            <DevFestHeroSectionCard />
        </section>
    );
}
