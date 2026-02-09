import ProfileCard from '../../DevFest/ProfileCard';
import { SectionTitle } from '../../../Common/SectionTitle';

export default function SpeakersIWD2026() {
    const speakers: any[] = [
        {
            photoUrl: new URL('/src/assets/palestrantes/Luciana_RH_Sincero.jpeg', import.meta.url).href,
            name: 'Luciana Azevedo',
            role: '',
            description: 'RH Sincero',
            links: { linkedin: 'https://www.linkedin.com/in/lucianarhsincero/', instagram: 'https://www.instagram.com/lucianarhsincero' },
            speakerInfo: 'Com mais de 10 anos de experiência em RH em grandes empresas nacionais e multinacionais — como Souza Cruz, Midea Carrier, Exxon Mobil, Disys, Arezzo e SouCloud —, Luciana é hoje Consultora de RH e influenciadora digital, conhecida como o “RH mais Sincero do Brasil”. Ela é também criadora do polêmico Manual de Sobrevivência Corporativo: Curso de Puxa Saco, que traz uma visão crítica e bem-humorada sobre o mundo corporativo.',
            talkTitle: 'Entrevista de Emprego sem Frescura',
            talkInfo: 'Nesta palestra, Luciana vai abordar os principais pilares de uma entrevista de emprego:\n✔️ Preparação e análise da vaga\n✔️ Como responder às principais perguntas\n✔️ Os erros mais comuns cometidos pelos candidatos\n\nTudo de forma descontraída, direta e real, mostrando como as coisas realmente funcionam no mercado de trabalho.'
        }
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
