import ProfileCard from '../../DevFest/ProfileCard';
import { SectionTitle } from '../../../Common/SectionTitle';
import { Carousel } from '../../../Common/Carousel';
import AlexandreBedeschi from '../../../../assets/palestrantes/Alexandre_Bedeschi.jpeg';

export default function SpeakersGoogleIO2026() {
    const speakers = [
        {
            photoUrl: AlexandreBedeschi,
            name: 'Alexandre Cabral Bedeschi',
            role: 'Senior Software Engineer',
            description: 'Stone',
            links: { linkedin: 'https://www.linkedin.com/in/alexandre-cabral-bedeschi/' },
            speakerInfo: 'Senior Software Engineer na Stone, GDE em Go, palestrante internacional, mentor e organizador do Tech Hub JF. Mineiro, botafoguense, pai de uma gata laranja',
            talkTitle: 'Criando Seu Primeiro Agente de IA com Go',
            talkInfo: 'Vamos construir um agente de IA conversacional inteligente utilizando o ADK e a CLI do Gemini, desenvolvendo toda a lógica do agente com a linguagem Go. O agente terá uma personalidade única, a capacidade de realizar buscas na web e um avatar exclusivo gerado por IA através de uma integração com o nano banana via MCP.',
        }
    ];

    return (
        <section className="bg-[#F7F9FB] py-20 overflow-hidden">
            <SectionTitle highlight="Palestrantes" />
            <div className="mb-16"></div>

            {speakers.length > 0 ? (
                <>
                    <div className="hidden xl:flex justify-center gap-6 max-w-7xl mx-auto px-4">
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

                    <div className="xl:hidden">
                        <Carousel count={speakers.length} viewCount={4}>
                            {speakers.map((speaker, idx) => (
                                <ProfileCard
                                    key={idx}
                                    photoUrl={speaker.photoUrl}
                                    name={speaker.name}
                                    role={speaker.role}
                                    description={speaker.description}
                                    links={speaker.links}
                                    speakerInfo={speaker.speakerInfo}
                                    talkTitle={speaker.talkTitle}
                                    talkInfo={speaker.talkInfo}
                                />
                            ))}
                        </Carousel>
                    </div>
                </>
            ) : (
                <div className="text-center text-gray-500 font-medium pb-8">
                    Em breve divulgaremos a programação completa de palestrantes.
                </div>
            )}
        </section>
    );
}