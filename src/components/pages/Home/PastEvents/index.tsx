import { Carousel } from '../../../Common/Carousel';
import { SectionTitle } from '../../../Common/SectionTitle';
import PastEventCard from '../PastEventCard';

export default function PastEvents() {
    //links: { linkedin: '#', instagram: '#', github: '#' },

    const events = [
        {
            name: 'DevFest',
            description: 'O DevFest é uma conferência anual organizada por comunidades do Google Developer Groups (GDG) ao redor do mundo.',
            date: '08/11/2025',
            participants: '800+',
            highlights: ['6 trilhas', '30+ horas de conteúdo', 'lorem ipsum'],
            link: '/devfest',
        },
    ];

    return (
        <section className="bg-[#FFF] py-20 overflow-hidden">
            <SectionTitle text="Eventos" highlight="Passados" />
            <p className="mx-auto w-10/12 lg:w-6/12 mb-28 mt-4 md:mt-3 text-center text-subtitle-color font-normal text-base">
                Explore nossos eventos anteriores e veja as experiências incríveis que criamos para
                nossa comunidade.
            </p>

            <Carousel count={events.length} viewCount={3}>
                {events.map((card, index) => (
                    <PastEventCard key={index} card={card} />
                ))}
            </Carousel>
        </section>
    );
}
