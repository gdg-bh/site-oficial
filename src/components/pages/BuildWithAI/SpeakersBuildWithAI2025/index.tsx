import ProfileCard from '../../DevFest/ProfileCard';
import { SectionTitle } from '../../../Common/SectionTitle';

import GabrielCassimiro from '../../../../assets/palestrantes/Gabriel_Cassimiro.jpeg';
import TiagoTemporin from '../../../../assets/palestrantes/Tiago_Temporin.jpg';

export default function SpeakersBuildWithAI2025() {
    const speakers = [
        {
            photoUrl: GabrielCassimiro,
            name: 'Gabriel Cassimiro',
            role: 'Lead AI Engineer',
            description: 'Sierra Studio',
            links: { linkedin: 'https://www.linkedin.com/in/gabriel-cassimiro/' },
            speakerInfo: '',
            talkTitle: '',
            talkInfo: 'Gabriel conduziu um treinamento hands-on em Python no Build With AI, ensinando os participantes a desenvolverem aplicações de IA Generativa utilizando as tecnologias mais recentes do Google. O workshop explorou conceitos práticos de implementação, frameworks e ferramentas essenciais para quem deseja construir soluções inovadoras com Inteligência Artificial usando Python.',
        },
        {
            photoUrl: TiagoTemporin,
            name: 'Tiago Temporin',
            role: 'Staff Site Reliability Engineer',
            description: 'Unico IDtech',
            links: { linkedin: 'https://www.linkedin.com/in/tiago-temporin/' },
            speakerInfo: '',
            talkTitle: '',
            talkInfo: 'Tiago liderou um treinamento prático em Go no Build With AI, apresentando como desenvolver aplicações de IA Generativa utilizando a linguagem Go combinada com as mais recentes tecnologias do Google. Os participantes aprenderam a criar soluções performáticas e escaláveis, aproveitando a eficiência e velocidade da linguagem Go para implementar sistemas de Inteligência Artificial robustos.',
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
