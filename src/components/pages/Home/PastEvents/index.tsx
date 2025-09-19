import { Carousel } from '../../../Common/Carousel';
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
        <Carousel count={events.length} viewCount={3}>
            {events.map((card, index) => (
                <PastEventCard key={index} card={card} />
            ))}
        </Carousel>
    );
}
