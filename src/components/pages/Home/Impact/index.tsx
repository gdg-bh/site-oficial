import { SectionTitle } from '../../../Common/SectionTitle';
import InfoCard from '../../../Common/InfoCard';

import people from '../../../../assets/icons/People.svg';
import rocket from '../../../../assets/icons/RocketLaunch.svg';
import building from '../../../../assets/icons/Building.svg';
import medal from '../../../../assets/icons/Medal.svg';

export default function Impact() {
    const cards = [
        {
            icon: people,
            number: '4.110',
            title: 'Pessoas Impactadas',
            text: 'Pelos nossos eventos e iniciativas',
        },
        {
            icon: rocket,
            number: '+20',
            title: 'Eventos Realizados',
            text: 'Workshops, palestras e eventos de networking',
        },
        {
            icon: building,
            number: '+20',
            title: 'Empresas Parceiras',
            text: 'Apoiando o crescimento da nossa comunidade',
        },
        {
            icon: medal,
            number: '3',
            title: 'Anos de impacto na comunidade',
            text: 'Construindo conexões desde 2022 com a organização atual',
        },
    ];
    return (
        <section className="py-20 overflow-hidden">
            <SectionTitle text="Nosso" highlight="impacto" />
            <p className="mx-auto w-10/12 lg:w-6/12 mb-2 mt-4 md:mt-3 text-center text-subtitle-color font-normal text-base">
                Construindo uma comunidade de desenvolvedores mais forte por meio do
                compartilhamento de conhecimento e colaboração.
            </p>
            <p className="mx-auto text-sm w-10/12 lg:w-7/12 text-center text-subtitle-color mb-16">
                *informações contabilizadas a partir de 2022
            </p>
            <div className="flex flex-col md:flex-row mx-auto w-10/12 lg:w-8/12 gap-6">
                {cards.map((card, idx) => (
                    <InfoCard
                        key={idx}
                        title={card.title}
                        text={card.text}
                        bigNumber={card.number}
                        icon={card.icon}
                    />
                ))}
            </div>
        </section>
    );
}
