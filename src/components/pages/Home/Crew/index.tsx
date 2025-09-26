import { Carousel } from '../../../Common/Carousel';
import ProfileCard from '../../DevFest/ProfileCard';

import diegoBorges from '../../../../assets/palestrantes/Diego_Borges_Ferreira.png';
import douglasAugusto from '../../../../assets/palestrantes/Douglas_Augusto_Ferreira_Araujo.png';
import elianaLima from '../../../../assets/palestrantes/Eliana_Lima_da_Fonseca.png';
import jorgeMauro from '../../../../assets/palestrantes/Jorge_Mauro_Gonçalves.png';
import { SectionTitle } from '../../../Common/SectionTitle';

export default function Crew() {
    //links: { linkedin: '#', instagram: '#', github: '#' },

    const speakers = [
        {
            photoUrl: diegoBorges,
            name: 'Diego Borges',
            role: 'Cargo',
            description: 'Empresa',
            links: { linkedin: 'aaaaa' },
        },
        {
            photoUrl: douglasAugusto,
            name: 'Douglas Augusto',
            role: 'Cargo',
            description: 'Empresa',
            links: { linkedin: '#' },
        },
        {
            photoUrl: elianaLima,
            name: 'Eliana Lima',
            role: 'Cargo',
            description: 'Empresa',
            links: { linkedin: '#' },
        },
        {
            photoUrl: jorgeMauro,
            name: 'Jorge Mauro',
            role: 'Cargo',
            description: 'Empresa',
            links: { linkedin: '#' },
        },
    ];

    return (
        <section className="mb-24 overflow-hidden">
            <SectionTitle text="Time de" highlight="Organizadores" />
            <p className="mx-auto w-10/12 lg:w-6/12 mb-10 mt-4 md:mt-3 text-center text-subtitle-color font-normal text-base">
                Desenvolvedores apaixonados e construtores de comunidades dedicados a promover o
                crescimento e o compartilhamento de conhecimento
            </p>
            <img
                className="h-[226px] mx-auto lg:w-10/12 mb-20 rounded rounded-xl"
                src="https://picsum.photos/1000/300"
            ></img>
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
