import { Carousel } from '../../../Common/Carousel';
import { SectionTitle } from '../../../Common/SectionTitle';
import PastEventCard from '../PastEventCard';

export default function PastEvents() {
    //links: { linkedin: '#', instagram: '#', github: '#' },

    const events = [
        {
            name: 'Lorem ipsum',
            description: 'Lorem ipsum dolor sit amet',
            date: 'Nov 2022',
            participants: '800+',
            highlights: ['lorem ipsum', 'lorem ipsum', 'lorem ipsum', 'lorem ipsum'],
            link: '#',
        },
        {
            name: 'Lorem ipsum',
            description: 'Lorem ipsum dolor sit amet',
            date: 'Fev 2023',
            participants: '800+',
            highlights: ['lorem ipsum', 'lorem ipsum', 'lorem ipsum'],
            link: '#',
        },
        {
            name: 'Lorem ipsum',
            description: 'Lorem ipsum dolor sit amet',
            date: 'Mar 2023',
            participants: '800+',
            highlights: ['lorem ipsum', 'lorem ipsum', 'lorem ipsum'],
            link: '#',
        },
        {
            name: 'Lorem ipsum',
            description: 'Lorem ipsum dolor sit amet',
            date: 'Abr 2024',
            participants: '800+',
            highlights: ['lorem ipsum', 'lorem ipsum', 'lorem ipsum', 'lorem ipsum'],
            link: '#',
        },
        {
            name: 'Lorem ipsum',
            description: 'Lorem ipsum dolor sit amet',
            date: 'Mai 2025',
            participants: '800+',
            highlights: ['lorem ipsum', 'lorem ipsum'],
            link: '#',
        },
    ];

    return (
        <section className="bg-[#FFF] py-20 overflow-hidden">
            <SectionTitle text="Eventos" highlight="Passados" />
            <p className="mx-auto w-10/12 lg:w-6/12 mb-28 mt-4 md:mt-3 text-center text-subtitle-color font-normal text-base">
                Explore nossos eventos anteriores e veja as experiências incríveis que criamos para
                nossa comunidade
            </p>

            <Carousel count={events.length} viewCount={3}>
                {events.map((card, index) => (
                    <PastEventCard key={index} card={card} />
                ))}
            </Carousel>
        </section>
    );
}
