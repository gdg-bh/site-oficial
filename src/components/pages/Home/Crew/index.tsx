import { Carousel } from '../../../Common/Carousel';
import ProfileCard from '../../DevFest/ProfileCard';

import organizers from '../../../../assets/organizers/organizers.jpg';
import fernanda from '../../../../assets/organizers/Fernanda.jpeg';
import guilherme from '../../../../assets/organizers/Guilherme.jpg';
import juliana from '../../../../assets/organizers/Juliana.jpg';
import rayan from '../../../../assets/organizers/Rayan.jpeg';
import { SectionTitle } from '../../../Common/SectionTitle';

export default function Crew() {
    //links: { linkedin: '#', instagram: '#', github: '#' },

    const speakers = [
        {
            photoUrl: fernanda,
            name: 'Fernanda Rezende',
            role: 'Product Manager',
            description: 'Organizadora GDG BH | Embaixadora Women Techmakers',
            links: { linkedin: 'https://www.linkedin.com/in/ferezendee/' },
        },
        {
            photoUrl: guilherme,
            name: 'Guilherme Radicchi',
            role: 'Software Developer',
            description: 'Organizador GDG BH',
            links: { linkedin: 'https://www.linkedin.com/in/guilhermeradicchi/' },
        },
        {
            photoUrl: juliana,
            name: 'Juliana Ribeiro',
            role: 'Product Designer',
            description: 'Organizadora GDG BH',
            links: { linkedin: 'https://www.linkedin.com/in/julianarib/'},
        },
        {
            photoUrl: rayan,
            name: 'Rayan Costa',
            role: 'GRC Analyst',
            description: 'Organizador GDG BH',
            links: { linkedin: 'https://www.linkedin.com/in/rayancrodrigues/' },
        },
    ];

    return (
        <section className="mb-24 overflow-hidden">
            <SectionTitle text="Time de" highlight="Organizadores" />
            {/* <img
                className="max-h-[4000px] object-cover object-[50%_22%] mx-auto lg:w-10/12 mb-20 mt-10 rounded rounded-xl"
                src={organizers}
            ></img> */}
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
        </section>
    );
}
