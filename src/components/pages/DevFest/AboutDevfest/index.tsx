import { SectionTitle } from '../../../Common/SectionTitle';
import { EventInformationCard } from '../EventInformationCard';
import { Calendar, Clock, MapPin } from 'lucide-react';

export default function AboutDevfest() {
    return (
        <>
            <section className="bg-white py-20">
                <SectionTitle text="O que é o" highlight="DevFest" />
                <p className="mx-auto w-8/12 mt-4 md:mt-3 text-center text-subtitle-color font-normal text-base">
                    O <strong>DevFest</strong> é uma conferência anual organizada por comunidades do
                    Google Developer Groups (GDG) ao redor do mundo. Cada edição é única, criada por
                    organizadores locais para atender às necessidades de suas comunidades, mas todas
                    compartilham o mesmo propósito: oferecer aprendizado, conexão e inspiração. O
                    DevFest reúne desenvolvedores, profissionais de tecnologia e estudantes em um
                    ambiente inclusivo, com palestras, workshops e momentos de networking,
                    explorando desde as tecnologias mais recentes do Google até tendências globais
                    do mercado de tecnologia.
                </p>
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
                            <h3 className="text-4xl font-semibold text-google-blue mb-2">500</h3>
                            <p className="text-gray-600 text-base font-medium">Participantes</p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                            <div className="flex items-center justify-center w-14 h-14 bg-blue-50 rounded-lg mb-4">
                                <svg className="w-7 h-7 text-google-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </div>
                            <h3 className="text-4xl font-semibold text-google-blue mb-2">33</h3>
                            <p className="text-gray-600 text-base font-medium">Palestrantes</p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                            <div className="flex items-center justify-center w-14 h-14 bg-blue-50 rounded-lg mb-4">
                                <svg className="w-7 h-7 text-google-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-4xl font-semibold text-google-blue mb-2">30</h3>
                            <p className="text-gray-600 text-base font-medium">Horas de conteúdo</p>
                        </div>
                    </div>

                    {/* Sobre o Evento */}
                    <div className="bg-blue-50 rounded-2xl p-8 md:p-12">
                        <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 flex items-center justify-center gap-3">
                            Sobre o Evento
                            
                        </h3>
                        <p className="text-gray-700 text-center leading-relaxed max-w-3xl mx-auto">
                        O maior DevFest BH que já realizamos! A última edição reuniu quase 500 pessoas em um dia repleto de conteúdo, trazendo as principais tendências do mercado. Foram workshops, palestras inspiradoras e muitas oportunidades de networking, conectando a comunidade tech de Belo Horizonte em uma experiência intensa de aprendizado e troca.
                                                </p>
                        <div className="flex justify-center mt-8">
                            <a
                                href="#"
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
                    <EventInformationCard icon={Calendar}>
                        Puc Minas - Lourdes <br />
                        Av. Brasil, 2023
                    </EventInformationCard>
                    <EventInformationCard icon={MapPin}>
                        08 de Novembro de 2025
                    </EventInformationCard>
                    <EventInformationCard icon={Clock}>8:30 às 17:30</EventInformationCard>
                </div>
                <div className="w-80 h-48 md:w-[450px] md:h-[320px] xl:w-[672px] xl:h-[342px] bg-white border-[11px] border-white rounded-[32px]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.788846822649!2d-43.93968002432465!3d-19.933300938412227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6991939c3dc67%3A0x1bcc33e162314675!2sPUC%20Minas%20Lourdes%20-%20Pr%C3%A9dio%201%20%E2%80%93%20Edif%C3%ADcio%20Dom%20Cabral!5e0!3m2!1spt-BR!2sbr!4v1757131665987!5m2!1spt-BR!2sbr"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </section>
        </>
    );
}
