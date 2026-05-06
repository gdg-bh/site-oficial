import ProfileCard from '../../DevFest/ProfileCard';
import { SectionTitle } from '../../../Common/SectionTitle';

import GabrielCassimiro from '../../../../assets/palestrantes/Gabriel_Cassimiro.jpeg';

export default function SpeakersBuildWithAI2026() {
    const speakers = [
        {
            photoUrl: GabrielCassimiro,
            name: 'Gabriel Cassimiro',
            role: 'Lead AI Engineer',
            description: 'Sierra Studio',
            links: { linkedin: 'https://www.linkedin.com/in/gabriel-cassimiro/' },
            speakerInfo: '',
            talkTitle: '',
            talkInfo: 'Gabriel conduzirá um treinamento hands-on no Build With AI, ensinando os participantes a desenvolverem aplicações de IA Generativa utilizando as tecnologias mais recentes do Google. O workshop abordará conceitos práticos de implementação, frameworks e ferramentas essenciais para quem deseja construir soluções inovadoras com Inteligência Artificial.',
        },
    ];

    return (
        <section className="bg-[#F7F9FB] py-20 overflow-hidden">
            <SectionTitle highlight="Palestrantes" />
            <div className="mb-16"></div>

            <div className="flex justify-center gap-6 max-w-7xl mx-auto px-4">
                {speakers.map((speaker, idx) => (
                    <div key={idx} className="w-[280px]">
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
        </section>
    );
}