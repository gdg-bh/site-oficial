import { SectionTitle } from '../../../Common/SectionTitle';
import InfoCard from '../../../Common/InfoCard';

import chatCircle from '../../../../assets/icons/ChatCircleTextBlue.svg';
import sparkles from '../../../../assets/icons/SparkleBLue.svg';
import light from '../../../../assets/icons/LightbulbBlue.svg';

export default function Impact() {
    const cards = [
        {
            icon: chatCircle,
            number: 88,
            title: 'Feedback do evento',
            text: 'Compartilhe sua experiência e ajude-nos a melhorar eventos futuros',
        },
        {
            icon: sparkles,
            number: 88,
            title: 'Feedback do evento',
            text: 'Compartilhe sua experiência e ajude-nos a melhorar eventos futuros',
        },
        {
            icon: light,
            number: 88,
            title: 'Feedback do evento',
            text: 'Compartilhe sua experiência e ajude-nos a melhorar eventos futuros',
        },
        {
            icon: light,
            number: 88,
            title: 'Feedback do evento',
            text: 'Compartilhe sua experiência e ajude-nos a melhorar eventos futuros',
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
                        bigNumber={card.number.toString()}
                        icon={card.icon}
                    />
                ))}
            </div>
        </section>
    );
}
