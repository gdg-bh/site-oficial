import { Carousel } from '../../../Common/Carousel';
import ProfileCard from '../ProfileCard';

import diegoBorges from '../../../../assets/palestrantes/Diego_Borges_Ferreira.png';
import douglasAugusto from '../../../../assets/palestrantes/Douglas_Augusto_Ferreira_Araujo.png';
import elianaLima from '../../../../assets/palestrantes/Eliana_Lima_da_Fonseca.png';
import jorgeMauro from '../../../../assets/palestrantes/Jorge_Mauro_Gonçalves.png';
// import nicoleBarra from '../../../../assets/palestrantes/Nicole_Barra.png';
import rafaelRibeiro from '../../../../assets/palestrantes/Rafael_Ribeiro_Andrade.png';
import toshiOsada from '../../../../assets/palestrantes/Toshi_Osada.png';

export default function Speakers() {
    //links: { linkedin: '#', instagram: '#', github: '#' },

    const speakers = [
        {
            photoUrl: diegoBorges,
            name: 'Diego Borges',
            role: 'Cargo',
            description:
                'Empresa',
            links: { linkedin: '#' },
        },
        {
            photoUrl: douglasAugusto,
            name: 'Douglas Augusto',
            role: 'Cargo',
            description:
                'Empresa',
            links: { linkedin: '#' },
        },
        {
            photoUrl: elianaLima,
            name: 'Eliana Lima',
            role: 'Cargo',
            description:
                'Empresa',
            links: { linkedin: '#' },
        },
        {
            photoUrl: jorgeMauro,
            name: 'Jorge Mauro',
            role: 'Cargo',
            description:
                'Empresa',
            links: { linkedin: '#' },
        },
        {
            photoUrl: rafaelRibeiro,
            name: 'Rafael Ribeiro',
            role: 'Cargo',
            description:
                'Empresa',
            links: { linkedin: '#' },
        },
        {
            photoUrl: toshiOsada,
            name: 'Toshi Osada',
            role: 'Cargo',
            description:
                'Empresa',
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
