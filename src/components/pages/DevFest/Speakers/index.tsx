import { Carousel } from '../../../Common/Carousel';
import ProfileCard from '../ProfileCard';

export default function Speakers() {
    //links: { linkedin: '#', instagram: '#', github: '#' },

    const speakers = [
        {
            photoUrl: 'https://placehold.co/100x100',
            name: 'Diego Borges',
            role: 'Incididunt ut labore et dolore magna aliqua',
            description:
                'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.',
            links: { linkedin: '#' },
        },
        {
            photoUrl: 'https://placehold.co/100x100',
            name: 'Douglas Augusto',
            role: 'Incididunt ut labore et dolore magna aliqua',
            description:
                'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.',
            links: { linkedin: '#' },
        },
        {
            photoUrl: 'https://placehold.co/100x100',
            name: 'Eliana Lima',
            role: 'Incididunt ut labore et dolore magna aliqua',
            description:
                'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.',
            links: { linkedin: '#' },
        },
        {
            photoUrl: 'https://placehold.co/100x100',
            name: 'Jorge Mauro',
            role: 'Incididunt ut labore et dolore magna aliqua',
            description:
                'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.',
            links: { linkedin: '#' },
        },
        {
            photoUrl: 'https://placehold.co/100x100',
            name: 'Nicole Barra',
            role: 'Incididunt ut labore et dolore magna aliqua',
            description:
                'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.',
            links: { linkedin: '#' },
        },
        {
            photoUrl: 'https://placehold.co/100x100',
            name: 'Rafael Ribeiro',
            role: 'Incididunt ut labore et dolore magna aliqua',
            description:
                'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.',
            links: { linkedin: '#' },
        },
        {
            photoUrl: 'https://placehold.co/100x100',
            name: 'Toshi Osada',
            role: 'Incididunt ut labore et dolore magna aliqua',
            description:
                'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.',
            links: { linkedin: '#' },
        },
    ];

    return (
        <Carousel count={speakers.length}>
            {speakers.map((card, index) => (
                <ProfileCard
                    key={index}
                    photoUrl={card.photoUrl}
                    name={card.name}
                    role={card.role}
                    description={card.description}
                    links={card.links}
                />
            ))}
        </Carousel>
    );
}
