import ProfileCard from '../../DevFest/ProfileCard';
import { SectionTitle } from '../../../Common/SectionTitle';

export default function SpeakersIWD2026() {
    const speakers: any[] = [
        // Array vazio - palestrantes serão anunciados em breve
    ];

    return (
        <section className="bg-[#F7F9FB] py-20 overflow-hidden">
            <SectionTitle highlight="Palestrantes" />
            <div className="mb-16"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {speakers.length > 0 ? (
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
                ) : (
                    <div className="text-center text-gray-600">
                        <p className="text-xl font-medium">Em breve divulgaremos as palestrantes desta edição especial!</p>
                        <p className="text-base mt-4 text-gray-500">
                            Estamos preparando uma programação incrível com mulheres inspiradoras da tecnologia.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}
