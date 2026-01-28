import ProfileCard from '../../DevFest/ProfileCard';
import { SectionTitle } from '../../../Common/SectionTitle';

import BetoMuniz from '../../../../assets/palestrantes/Beto_Muniz.jpeg';
import AhirtonLopes from '../../../../assets/palestrantes/Ahirton_Lopes.jpeg';

export default function SpeakersGoogleIO2025() {
    const speakers = [
        {
            photoUrl: BetoMuniz,
            name: 'Beto Muniz',
            role: 'Senior Software Engineer',
            description: 'Grafana Labs',
            links: { linkedin: 'https://www.linkedin.com/in/obetomuniz/' },
            speakerInfo: 'Beto Muniz é Google Developer Experts em Web Technologies e atualmente atua na Grafana Labs. Com uma carreira sólida em desenvolvimento web, já colaborou com empresas como Google e Riot Games.',
            talkTitle: 'Inteligência Artificial no Desenvolvimento Web: O paradigma está evoluindo. E você também deve.',
            talkInfo: 'A IA está mudando tudo — da forma como escrevemos código à maneira como idealizamos nossas aplicações. Nesta talk, Beto vai explorar os impactos reais das inovações apresentadas no Google I/O 2025, discutir conceitos modernos como MCP e A2A, e refletir sobre como esses avanços estão moldando o futuro da engenharia de software, especialmente no front-end.',
        },
        {
            photoUrl: AhirtonLopes,
            name: 'Ahirton Lopes',
            role: 'Senior Manager',
            description: 'Accenture',
            links: { linkedin: 'https://www.linkedin.com/in/ahirtonlopes/' },
            speakerInfo: 'Ahirton Lopes, Ph.D. é Senior Manager na Accenture, professor de MBA na FIAP e Google Developer Experts em IA e Microsoft MVP em AI Platform. Com doutorado em Engenharia Elétrica e Computação, Ahirton é referência em IA Generativa, Deep Learning, Visão Computacional e muito mais.',
            talkTitle: 'Deep Thinking: Keras, JAX e a Ascensão dos Agentes no I/O 2025',
            talkInfo: 'Vamos mergulhar nas inovações do Google I/O 2025:\n→ O avanço do Gemini 2.5 Pro e a inteligência dos novos Agentes de IA como o Projeto Astra\n→ O papel crucial de Keras e JAX na criação de modelos potentes\n→ A chegada do Gemma 3n, modelo multimodal otimizado para dispositivos\n→ E como tudo isso está moldando o futuro do desenvolvimento em IA',
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
