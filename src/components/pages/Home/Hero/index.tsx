import { HeroSectionCard } from '../HeroSectionCard';

interface HeroProps {
    title: string;
    location: string;
    text: string;
    bgImage: string;
}

export function Hero({ title, location, bgImage, text }: HeroProps) {
    return (
        <section
            className="relative w-full xl:h-[550px] flex flex-col items-center justify-center bg-cover bg-center px-4"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <h1 className="font-medium text-5xl md:text-7xl text-center text-title-color drop-shadow-title mt-10 mt-xl-0">
                {title}
            </h1>
            <p className="font-normal text-2xl md:text-3xl text-center text-title-color drop-shadow-title mt-3 mb-6">
                {location}
            </p>
            <p className="font-normal text-xl text-center text-title-color lg:w-6/12">{text}</p>

            <HeroSectionCard />
        </section>
    );
}
