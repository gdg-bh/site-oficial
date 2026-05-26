import ProfileCard from '../../DevFest/ProfileCard';
import { SectionTitle } from '../../../Common/SectionTitle';
import { Carousel } from '../../../Common/Carousel';
import AlexandreBedeschi from '../../../../assets/palestrantes/Alexandre_Bedeschi.jpeg';
import MarioSouto from '../../../../assets/palestrantes/Mario_Souto.jpeg';
import EmersonRocco from '../../../../assets/palestrantes/Emerson_Rocco.jpeg';

export default function SpeakersGoogleIO2026() {
    const speakers = [
        {
            photoUrl: EmersonRocco,
            name: 'Emerson Rocco Bernardino',
            role: 'Diretor',
            description: 'Allogic Tecnologia',
            links: { linkedin: 'https://www.linkedin.com/in/erbernardino/' },
            speakerInfo: 'Emerson Rocco Bernardino é Solution Architect com mais de 22 anos de experiência em tecnologia e Diretor da Allogic Tecnologia. Google Developer Expert em Cloud desde 2019 — atualmente no 7º ano consecutivo — e Tech Mentor no Google for Startups Accelerator desde 2018, é convidado oficial do Google Cloud Next há 4 anos seguidos, foi no seu 11º Google I/O (desde 2011). Organizador do GDG ABC',
            talkTitle: 'Google I/O 2026 - Omnimercial',
            talkInfo: 'Como o Google criou um app para geração de comerciais em video de forma padronizada utilizando AIStudio e Omni gerando comerciais de produtos no estilo Anos 80',
        },
        {
            photoUrl: AlexandreBedeschi,
            name: 'Alexandre Cabral Bedeschi',
            role: 'Senior Software Engineer',
            description: 'Stone',
            links: { linkedin: 'https://www.linkedin.com/in/alexandre-cabral-bedeschi/' },
            speakerInfo: 'Senior Software Engineer na Stone, GDE em Go, palestrante internacional, mentor e organizador do Tech Hub JF. Mineiro, botafoguense, pai de uma gata laranja',
            talkTitle: 'Criando Seu Primeiro Agente de IA com Go',
            talkInfo: 'Vamos construir um agente de IA conversacional inteligente utilizando o ADK e a CLI do Gemini, desenvolvendo toda a lógica do agente com a linguagem Go. O agente terá uma personalidade única, a capacidade de realizar buscas na web e um avatar exclusivo gerado por IA através de uma integração com o nano banana via MCP.',
        },
        {
            photoUrl: MarioSouto,
            name: 'Mario Souto Silva',
            role: 'Staff Software Engineer',
            description: 'Nubank',
            links: { linkedin: 'https://br.linkedin.com/in/omariosouto' },
            speakerInfo: 'Especialista em desenvolvimento web, começou a programar com 11 anos e não parou mais! Atualmente é Staff Engineer Software no Nubank, Google Developer Expert, GitHub Start e criador e diretor do Canal DevSoutinho no YouTube, onde lança vídeos com foco no mundo da tecnologia e programação.',
            talkTitle: 'AI Para Web Developers',
            talkInfo: 'Pra quem vem do mundo web tradicional seja front com HTML, CSS e JavaScript e começa a ver os populares modelos como Gemini as APIs logo se depara com a pergunta: Ta mas como eu faço um projeto funcional com isso tudo? Pensando nisso eu resolvi mapear a minha jornada aprendendo tudo isso e explicando termos como RAG, Embeddings, quais libs usar? como entender os custos? e várias outra dúvidas que impedem você de colocar HOJE em produção soluções de AI na sua empresa.',
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