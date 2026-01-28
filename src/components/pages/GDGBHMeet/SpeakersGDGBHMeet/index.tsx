import ProfileCard from '../../DevFest/ProfileCard';
import { SectionTitle } from '../../../Common/SectionTitle';

import AlexiaKattah from '../../../../assets/palestrantes/Alexia_Kattah.jpg';
import AndreMagalhaes from '../../../../assets/palestrantes/Andre_Luiz_Magalhaes.jpg';
import MatheusPacheco from '../../../../assets/palestrantes/Matheus_Pacheco.jpg';

export default function SpeakersGDGBHMeet() {
    const speakers = [
        {
            photoUrl: AlexiaKattah,
            name: 'Alexia Kattah',
            role: 'Software Engineer',
            description: 'Atria Institute',
            links: { linkedin: 'https://www.linkedin.com/in/alexiakattah/' },
            speakerInfo: 'Engenheira da Computação e Senior Software Engineer certificada pela AWS, Alexia atua em uma empresa de tecnologia nos Estados Unidos, onde desenvolve sistemas backend escaláveis e de alta performance com Node.js. Desde 2015, lidera projetos técnicos complexos e já ocupou posições como CTO, além de ter liderado times de engenharia.',
            talkTitle: 'Concorrência e Threads no Node.js: além do Event Loop',
            talkInfo: 'Nessa talk, vamos mergulhar em como o Node.js lida com concorrência e paralelismo além do tradicional Event Loop. Alexia vai explorar a evolução das threads em JavaScript, o funcionamento dos Worker Threads, e quando usá-los para turbinar a performance das suas aplicações.',
        },
        {
            photoUrl: AndreMagalhaes,
            name: 'André Magalhães',
            role: 'Arquiteto de Soluções',
            description: 'Localiza',
            links: { linkedin: 'https://www.linkedin.com/in/andremagalhaes02/' },
            speakerInfo: 'André Luiz Magalhães — Arquiteto de Soluções na Localiza&Co com amplo histórico em aplicações .NET Core escaláveis, integrações (Redis, RabbitMQ, Azure), desenvolvimento mobile com Xamarin e experiência com Microsoft Dynamics CRM. Domínio em bancos de dados como SQL Server, Oracle e PostgreSQL.',
            talkTitle: 'Saga Pattern Descomplicado: Da teoria ao código',
        },
        {
            photoUrl: MatheusPacheco,
            name: 'Matheus Pacheco Spagiari',
            role: 'Arquiteto de Soluções',
            description: 'Localiza',
            links: { linkedin: 'https://www.linkedin.com/in/matheus-pacheco-spagiari/' },
            speakerInfo: 'Matheus Antunes Pacheco Spagiari — Engenheiro formado pela UFMG, atua como Arquiteto de Soluções na Localiza&Co, com mais de 10 anos de experiência em C#, mensageria (Kafka, RabbitMQ), cache distribuído (Redis) e ferramentas de observabilidade como Grafana, Kibana e Datadog. Hoje apoia a arquitetura de uma equipe que engloba 6 times.',
            talkTitle: 'Saga Pattern Descomplicado: Da teoria ao código',
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
