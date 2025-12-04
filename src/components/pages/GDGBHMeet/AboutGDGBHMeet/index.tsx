import { SectionTitle } from '../../../Common/SectionTitle';
import { EventInformationCard } from '../../DevFest/EventInformationCard';
import { Calendar, Clock, MapPin } from 'lucide-react';

export default function AboutGDGBHMeet() {
    return (
        <>
            <section className="bg-white py-20">
                <SectionTitle text="O que é o" highlight="GDG BH Meet" />
                <div className="mx-auto w-10/12 md:w-8/12 mt-4 md:mt-3 text-center text-subtitle-color font-normal text-base">
                    <p className="mb-4">
                        O <strong>GDG BH Meet</strong> é um encontro organizado pelo Google Developer Group Belo Horizonte com o objetivo de aproximar a comunidade de tecnologia da capital mineira. Ele foi criado para promover um espaço acolhedor onde profissionais, estudantes e entusiastas possam trocar experiências, aprender juntos e fortalecer suas redes de contato.
                    </p>
                    
                    <p className="mb-4">
                        Diferente dos grandes eventos anuais, o GDG BH Meet é mais dinâmico e frequente, permitindo discussões mais próximas e aprofundadas sobre temas atuais da área de tecnologia. A cada edição, o público tem acesso a palestras, painéis, demonstrações e momentos especiais de networking, sempre guiados por especialistas, parceiros e membros ativos da comunidade.
                    </p>
                    
                    <p className="mb-4">
                        O encontro também busca impulsionar a inovação local ao conectar pessoas que compartilham interesses comuns e que desejam crescer profissionalmente. Além disso, o GDG BH Meet reforça o papel do GDG Belo Horizonte como um catalisador de oportunidades, promovendo aprendizado contínuo e contribuindo para o desenvolvimento do ecossistema tech da região.
                    </p>
                    
                    <p>
                        Mais do que um evento, o GDG BH Meet é uma porta de entrada para quem deseja se conectar, aprender e fazer parte de uma comunidade colaborativa que acredita no poder das pessoas unidas pela tecnologia.
                    </p>
                </div>
            </section>

            {/* Seção de Estatísticas do Evento */}
            <section className="bg-[#F7F9FB] py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Grid de Cards - Ajustado para 3 colunas */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
                        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                            <div className="flex items-center justify-center w-14 h-14 bg-blue-50 rounded-lg mb-4">
                                <svg className="w-7 h-7 text-google-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <h3 className="text-4xl font-semibold text-google-blue mb-2">208</h3>
                            <p className="text-gray-600 text-base font-medium">Participantes</p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                            <div className="flex items-center justify-center w-14 h-14 bg-blue-50 rounded-lg mb-4">
                                <svg className="w-7 h-7 text-google-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </div>
                            <h3 className="text-4xl font-semibold text-google-blue mb-2">3</h3>
                            <p className="text-gray-600 text-base font-medium">Palestrantes</p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                            <div className="flex items-center justify-center w-14 h-14 bg-blue-50 rounded-lg mb-4">
                                <svg className="w-7 h-7 text-google-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-4xl font-semibold text-google-blue mb-2">4</h3>
                            <p className="text-gray-600 text-base font-medium">Horas de conteúdo</p>
                        </div>
                    </div>

                    {/* Sobre o Evento */}
                    <div className="bg-blue-50 rounded-2xl p-8 md:p-12">
                        <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 flex items-center justify-center gap-3">
                            Sobre o Evento
                        </h3>
                        <div className="text-gray-700 text-left leading-relaxed max-w-3xl mx-auto space-y-4">
                            <p>
                                Nesta primeira edição, realizada na Localiza Labs, reunimos nossa comunidade para uma manhã de palestras técnicas e muito networking.
                            </p>
                            
                            <p>
                                A programação contou com palestras de <strong>Alexia Kattah</strong>, engenheira da Computação que atua em uma empresa de tecnologia nos EUA desenvolvendo sistemas backend escaláveis e de alta performance com Node.js, além de <strong>André</strong>, Arquiteto de Software com ampla experiência em aplicações .NET Core escaláveis e RabbitMQ, e <strong>Matheus</strong>, Arquiteto de Soluções com mais de 10 anos de experiência em desenvolvimento, atuando com foco em arquiteturas resilientes e eficientes.
                            </p>
                        </div>
                        <div className="flex justify-center mt-8">
                            <a
                                href="https://drive.google.com/drive/u/2/folders/1iVU_zcFyy4Fczh7QcbiF0LHahwK0af_M"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-google-blue hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
                            >
                                Drive de fotos do evento
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col xl:flex-row items-center py-24 xl:p-32 justify-center gap-12 bg-gradient-to-r from-[#EBF3FC] via-[#EAF7F4] to-[#E9F9EF]">
                <div className="flex flex-col gap-6">
                    <EventInformationCard icon={MapPin}>
                        Localiza Labs <br />
                        R. Gurupá, 33 - Cachoeirinha
                    </EventInformationCard>
                    <EventInformationCard icon={Calendar}>
                        16 de agosto de 2025
                    </EventInformationCard>
                    <EventInformationCard icon={Clock}>08:30 às 12:00</EventInformationCard>
                </div>
                <div className="w-80 h-48 md:w-[450px] md:h-[320px] xl:w-[672px] xl:h-[342px] bg-white border-[11px] border-white rounded-[32px]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.006188270192!2d-43.9472679!3d-19.8819606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6916abc809c75%3A0xdb7c237a29f69080!2sLocaliza%20Labs!5e0!3m2!1spt-BR!2sbr!4v1763388165502!5m2!1spt-BR!2sbr"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-[24px]"
                    ></iframe>
                </div>
            </section>
        </>
    );
}
