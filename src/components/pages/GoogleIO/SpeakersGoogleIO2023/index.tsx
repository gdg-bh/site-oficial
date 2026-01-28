import ProfileCard from '../../DevFest/ProfileCard';
import { SectionTitle } from '../../../Common/SectionTitle';

import RenatoPereira from '../../../../assets/palestrantes/Renato_Pereira.png';
import HugoZanini from '../../../../assets/palestrantes/Hugo_Zanini.png';

export default function SpeakersGoogleIO2023() {
    const speakers = [
        {
            photoUrl: RenatoPereira,
            name: 'Renato Pereira',
            role: 'Tech Manager',
            description: 'Inter',
            links: { linkedin: 'https://www.linkedin.com/in/renatopckz/' },
            speakerInfo: '',
            talkTitle: 'Google I/O 2023: Principais Novidades e Inovações',
            talkInfo: 'Renato trouxe em primeira mão todas as principais novidades do Google I/O! Uma jornada pelos avanços tecnológicos que estão moldando o futuro e uma visão aprofundada sobre as mais recentes inovações. Uma oportunidade única para estar à frente do cenário tecnológico e entender como as tendências atuais impactam o nosso dia a dia.',
        },
        {
            photoUrl: HugoZanini,
            name: 'Hugo Zanini',
            role: 'Technical Product Lead',
            description: 'Nubank',
            links: { linkedin: 'https://www.linkedin.com/in/hugozanini/' },
            speakerInfo: '',
            talkTitle: 'Programação Gráfica e ML: Prototipagem em Minutos',
            talkInfo: 'Hugo compartilhou uma experiência incrível e inovadora sobre as possibilidades e benefícios da mais recente ferramenta de programação gráfica do Google, que permite a prototipagem e experimentação de Machine Learning em questão de minutos.',
        },
    ];

    return (
        <section className="bg-[#F7F9FB] py-20 overflow-hidden">
            <SectionTitle highlight="Palestrantes" />
            <div className="mb-16"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-center gap-6">
                    {speakers.map((speaker, idx) => (
                        <div key={idx} className="w-full sm:w-[280px]">
                            <ProfileCard
                                photoUrl={speaker.photoUrl}
                                name={speaker.name}
                                role={speaker.role}
                                description={speaker.description}
                                links={speaker.links}
                                speakerInfo={speaker.speakerInfo}
                                talkTitle={speaker.talkTitle}
                                talkInfo={speaker.talkInfo}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
