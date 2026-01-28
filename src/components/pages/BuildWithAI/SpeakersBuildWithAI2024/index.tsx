import ProfileCard from '../../DevFest/ProfileCard';
import { SectionTitle } from '../../../Common/SectionTitle';

import GabrielCassimiro from '../../../../assets/palestrantes/Gabriel_Cassimiro.jpeg';
import Gabul from '../../../../assets/palestrantes/Gabul.jpg';

export default function SpeakersBuildWithAI2024() {
    const speakers = [
        {
            photoUrl: GabrielCassimiro,
            name: 'Gabriel Cassimiro',
            role: 'Lead AI Engineer',
            description: 'Sierra Studio',
            links: { linkedin: 'https://www.linkedin.com/in/gabriel-cassimiro/' },
            speakerInfo: '',
            talkTitle: '',
            talkInfo: 'Gabriel ministrou um treinamento hands-on em Python no Build With AI 2024, ensinando os participantes a desenvolverem aplicações de IA Generativa utilizando as tecnologias do Google. O workshop abordou conceitos práticos de implementação, frameworks e ferramentas essenciais para construir soluções inovadoras com Inteligência Artificial.',
        },
        {
            photoUrl: Gabul,
            name: 'Gabul Dev',
            role: 'Senior Software Engineer',
            description: 'Will Bank',
            links: { linkedin: 'https://www.linkedin.com/in/gabuldev/' },
            speakerInfo: '',
            talkTitle: '',
            talkInfo: 'Gabul Dev conduziu um treinamento prático em Flutter no Build With AI 2024, mostrando como criar aplicações mobile inteligentes utilizando IA Generativa e as tecnologias do Google. Os participantes aprenderam a integrar recursos de IA em apps Flutter, criando experiências mobile inovadoras e interativas com Inteligência Artificial.',
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
