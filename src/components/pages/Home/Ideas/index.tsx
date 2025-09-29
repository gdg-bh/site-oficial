import { SectionTitle } from '../../../Common/SectionTitle';
import InfoCard from '../../../Common/InfoCard';

import chatCircle from '../../../../assets/icons/ChatCircleTextBlue.svg';
import sparkles from '../../../../assets/icons/SparkleBLue.svg';
import light from '../../../../assets/icons/LightbulbBlue.svg';

export default function Ideas() {
    const cards = [
        {
            icon: chatCircle,
            title: 'Feedback do evento',
            text: 'Compartilhe sua experiência e ajude-nos a melhorar eventos futuros',
        },
        {
            icon: sparkles,
            title: 'Sugestões de Tópicos',
            text: 'Sugira tópicos e tecnologias que você gostaria de aprender',
        },
        {
            icon: light,
            title: 'Ideias da Comunidade',
            text: 'Compartilhe ideias para iniciativas e colaboração com a comunidade',
        },
    ];
    return (
        <section className="py-20 overflow-hidden">
            <SectionTitle text="Compartilhe" highlight="suas Ideias" />
            <p className="mx-auto w-10/12 lg:w-7/12 mb-16 mt-4 md:mt-3 text-center text-subtitle-color font-normal text-base">
                Ajude-nos a melhorar nossa comunidade compartilhando seus pensamentos, sugestões e
                ideias para eventos futuros.
            </p>
            <div className="flex flex-col md:flex-row mx-auto w-10/12 lg:w-8/12 gap-6">
                {cards.map((card, idx) => (
                    <InfoCard key={idx} title={card.title} text={card.text} icon={card.icon} />
                ))}
            </div>
            <div className="text-center mt-20">
                <a
                    href="mailto:gdgbhz@gmail.com"
                    target="_blank"
                    className="bg-google-blue hover:bg-blue-600 outline-none text-white px-6 py-3 rounded-lg font-normal transition-colors duration-200 shadow-soft cursor-pointer"
                >
                    Entre em contato
                </a>
            </div>
        </section>
    );
}
