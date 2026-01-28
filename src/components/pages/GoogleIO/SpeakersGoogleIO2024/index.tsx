import ProfileCard from '../../DevFest/ProfileCard';
import { SectionTitle } from '../../../Common/SectionTitle';

import MikaeriOhana from '../../../../assets/palestrantes/Mikaeri_Ohana.jpg';
import LuisLeao from '../../../../assets/palestrantes/Luis_Leao.jpg';

export default function SpeakersGoogleIO2024() {
    const speakers = [
        {
            photoUrl: MikaeriOhana,
            name: 'Mikaeri Ohana',
            role: 'Solutions Architect, Gen AI',
            description: 'Google',
            links: { linkedin: 'https://www.linkedin.com/in/mikaeriohana/' },
            speakerInfo: 'Mikaeri Ohana é líder em Inteligência Artificial e Machine Learning. Mestranda na Unicamp, é a primeira mulher brasileira indicada como Microsoft Most Valuable Professional em Inteligência Artificial e Google Developer Experts em Machine Learning. Trabalhando com tecnologia desde 2015, Mikaeri focou sua carreira em Ciência de Dados e Machine Learning.',
            talkTitle: 'Uma perspectiva sobre AI do Google I/O 2024',
            talkInfo: 'Nesta talk, Mikaeri apresentou as novidades em detalhes sobre o que aconteceu no Google I/O na perspectiva de Inteligência Artificial - Gemini, Gemma, modelos open-source e features de segurança que o Google está trabalhando. Além disso, mostrou um código implementando cada uma das possibilidades que você já possui em mãos para criar apps que entregam muito valor, de maneira simples e performática.',
        },
        {
            photoUrl: LuisLeao,
            name: 'Luís Leão',
            role: 'Staff Developer Evangelist',
            description: 'Twilio',
            links: { linkedin: 'https://www.linkedin.com/in/luisleao/' },
            speakerInfo: 'Luís Leão é desenvolvedor evangelista na Twilio, ajudando desenvolvedores a criarem aplicações e serviços para se conectar com pessoas e construir o futuro da comunicação através de APIs. Reconhecido como Google Developer Experts em Firebase, ele também foi professor de programação em escolas como Miami Ad School e EBAC, e co-organizou o Google Developer Group de São Paulo por 8 anos. Além disso, já trabalhou com projetos de IoT em agências digitais, construindo instalações interativas para empresas como Google, Vivo e Fiat.',
            talkTitle: 'Generative AI and Firebase: get up to date from Google I/O 2024',
            talkInfo: 'Nesta talk, Leão apresentou as últimas atualizações do Google I/O 2024, abordando como a Inteligência Artificial Generativa e o Firebase estão transformando o desenvolvimento de aplicações.',
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
