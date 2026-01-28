import ProfileCard from '../../DevFest/ProfileCard';
import { SectionTitle } from '../../../Common/SectionTitle';

import LucasLemes from '../../../../assets/palestrantes/Lucas_Lemes.jpeg';
import JaimePinto from '../../../../assets/palestrantes/Jaime_Pinto.jpg';

export default function SpeakersGDGBHMeet2() {
    const speakers = [
        {
            photoUrl: LucasLemes,
            name: 'Lucas Lemes',
            role: 'Cyber Security Analyst',
            description: 'Banco do Brasil',
            links: { linkedin: 'https://www.linkedin.com/in/lucas-lemes-839359111/' },
            speakerInfo: 'Lucas Lemes atua como professor da Pós Tech Cybersecurity na FIAP e é Cyber Security Analyst no Banco do Brasil, na Unidade de Segurança Digital e da Informação. Em sua atuação acadêmica, ele leva a teoria para a prática, promovendo experiências reais como CTFs e War Games, conectando o conteúdo técnico aos desafios do mercado.',
            talkTitle: 'A Fábrica de Credenciais: do Stealer-as-a-Service à Exfiltração via Telegram/Discord',
            talkInfo: 'Uma talk que vai explorar, de forma prática e atual, como funcionam os modelos de ataque envolvendo roubo de credenciais e exfiltração de dados, trazendo uma visão realista do cenário de ameaças.',
        },
        {
            photoUrl: JaimePinto,
            name: 'Jaime Pinto',
            role: 'Head of IT',
            description: 'Jaguar Mining Inc.',
            links: { linkedin: 'https://www.linkedin.com/in/jaimeppinto/' },
            speakerInfo: 'Jaime Pinto é Gerente Executivo de TI, com sólida atuação em infraestrutura, cibersegurança, inovação e governança tecnológica. Atua como Professor de Cyber Segurança na PUC Minas e é Diretor de Educação do ISACA Belo Horizonte, contribuindo ativamente para o desenvolvimento da comunidade de auditoria, segurança e riscos no Brasil.\n\nEle também é membro oficial do Grupo Internacional de Certificação em Auditoria Avançada de IA (AAIA) da ISACA São Francisco, participando da evolução das práticas globais de auditoria em inteligência artificial. Possui certificações como CISM, C|CISO, CIA e AAIA, entre outras que reforçam sua trajetória técnica e executiva.',
            talkTitle: 'Hackeando AI: O que ainda não te contaram (e pode custar caro)',
            talkInfo: 'Uma talk que revela como falhas ocultas na IA podem gerar prejuízos reais para negócios, mostrando de forma prática como ataques e manipulações já impactam decisões, processos e resultados. Jaime também vai destacar riscos que muitas empresas ignoram e apresentar estratégias para transformar a IA em uma vantagem competitiva segura.',
        },
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
                        <p className="text-xl font-medium">Em breve divulgaremos os palestrantes desta edição!</p>
                    </div>
                )}
            </div>
        </section>
    );
}
