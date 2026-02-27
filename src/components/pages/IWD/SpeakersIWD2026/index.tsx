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
        },
        {
            photoUrl: new URL('/src/assets/palestrantes/Manoela_Werneck.jpeg', import.meta.url).href,
            name: 'Manoela Werneck',
            role: 'Tech Lead',
            description: 'SYDLE',
            links: { linkedin: 'https://www.linkedin.com/in/manoela-werneck/' },
            speakerInfo: 'Manoela iniciou sua trajetória na SYDLE há cinco anos, atuando como desenvolvedora full stack em projetos estratégicos nas áreas de mercado livre de energia, billing e e-commerce. Ao longo da sua caminhada, também compartilhou sua experiência em palestras e eventos, com foco em resolução de problemas e liderança técnica.\nAtualmente, lidera um time de desenvolvimento de BPMS, sendo responsável desde a concepção da arquitetura até a implementação final das soluções.\nUma trajetória que une profundidade técnica, visão estratégica e liderança na prática.'
        },
        {
            photoUrl: new URL('/src/assets/palestrantes/Geisislaine_Lima_Martins.jpeg', import.meta.url).href,
            name: 'Geise Martins',
            role: 'Head de Travel',
            description: 'Onfly',
            links: { linkedin: 'https://www.linkedin.com/in/geisislaine-martins/' },
            speakerInfo: 'Em 2020, Geise deixou uma carreira consolidada como Técnica em Segurança do Trabalho para se aventurar na programação. Seis anos depois, é Head de Travel na Onfly, liderando uma equipe com mais de 50 pessoas e conectando grandes empresas dos setores aéreo e hoteleiro por meio de tecnologia de ponta.\n\nIniciou como desenvolvedora no time Travel da Onfly, participou da criação do Luna — Gateway de Integrações, foi promovida a Tech Lead e hoje lidera a evolução da solução. O que antes levava meses para integrar, agora acontece em semanas: são 52 parceiros integrados e mais de 3.000 empresas gerenciando viagens e despesas com a tecnologia construída por seu time.',
            talkTitle: 'De Aprendiz a Referencial: Construindo Espaço na Tecnologia com Propósito',
            talkInfo: 'Na palestra, Geise compartilha sua transição de carreira, os aprendizados sobre planejamento, estratégia e posicionamento profissional, além de reflexões sobre como se fortalecer como mulher em ambientes majoritariamente masculinos. Uma conversa sobre crescimento, propósito e construção de espaço na tecnologia.'
        }
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
