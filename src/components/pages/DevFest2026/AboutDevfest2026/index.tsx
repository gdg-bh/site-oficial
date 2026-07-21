import { SectionTitle } from '../../../Common/SectionTitle';
import { EventInformationCard } from '../../DevFest/EventInformationCard';
import { Calendar, Clock, MapPin } from 'lucide-react';
import callForPapersBanner from '../../../../assets/pages/devfest2026/Call4pappers.png';

export default function AboutDevfest2026() {
    return (
        <>
            <section className="bg-white py-20">
                <SectionTitle text="Seja um" highlight="Patrocinador" />
                <p className="mx-auto w-8/12 mt-4 md:mt-3 text-center text-subtitle-color font-normal text-base">
                    Conecte sua marca a 1.100 profissionais apaixonados por tecnologia. Seja patrocinador do maior DevFest que Belo Horizonte já viu e faça parte de uma experiência que une conhecimento, networking, inovação e oportunidades reais de negócio. Fale com a gente: gdgbhz@gmail.com.
                </p>
                <div className="flex justify-center mt-8">
                    <a
                        href="mailto:gdgbhz@gmail.com"
                        target="_blank"
                        className="inline-flex items-center gap-2 bg-google-blue hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
                    >
                        Entre em contato
                    </a>
                </div>
            </section>

            {/* SeÃ§Ã£o de EstatÃ­sticas do Evento */}
            <section className="bg-[#F7F9FB] py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Grid de Cards - Ajustado para 3 colunas */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
                        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                            <div className="flex items-center justify-center w-14 h-14 bg-blue-50 rounded-lg mb-4">
                                <svg className="w-7 h-7 text-google-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <h3 className="text-4xl font-semibold text-google-blue mb-2">1100</h3>
                            <p className="text-gray-600 text-base font-medium">Participantes</p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                            <div className="flex items-center justify-center w-14 h-14 bg-blue-50 rounded-lg mb-4">
                                <svg className="w-7 h-7 text-google-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </div>
                            <h3 className="text-4xl font-semibold text-google-blue mb-2">24</h3>
                            <p className="text-gray-600 text-base font-medium">Palestrantes</p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                            <div className="flex items-center justify-center w-14 h-14 bg-blue-50 rounded-lg mb-4">
                                <svg className="w-7 h-7 text-google-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-4xl font-semibold text-google-blue mb-2">32</h3>
                            <p className="text-gray-600 text-base font-medium">Horas de conteúdo</p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                            <div className="flex items-center justify-center w-14 h-14 bg-blue-50 rounded-lg mb-4">
                                <svg className="w-7 h-7 text-google-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                </svg>
                            </div>
                            <h3 className="text-4xl font-semibold text-google-blue mb-2">4</h3>
                            <p className="text-gray-600 text-base font-medium text-center">Trilhas Simultâneas</p>
                        </div>
                    </div>

                    

                    {/* Sobre o Evento */}
                    <div className="bg-blue-50 rounded-2xl p-8 md:p-12">
                        <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 flex items-center justify-center gap-3">
                            Sobre o Evento
                            
                        </h3>
                        <p className="text-gray-700 text-center leading-relaxed max-w-3xl mx-auto">
                        Prepare-se para viver o maior DevFest que Belo Horizonte já viu. Em 2026, reuniremos 1.100 participantes no Minas Centro para um dia inteiro de conteúdo, conexões e experiências. Serão quatro trilhas simultâneas, espaços dedicados ao networking e ativações que aproximam empresas, desenvolvedores, estudantes e profissionais de tecnologia. O DevFest BH é o lugar onde a comunidade se encontra para aprender, criar oportunidades e construir o futuro da tecnologia juntos.
                                                </p>
                    </div>
                </div>
            </section>

            <section className="flex flex-col xl:flex-row items-center py-24 xl:p-32 justify-center gap-12 bg-gradient-to-r from-[#EBF3FC] via-[#EAF7F4] to-[#E9F9EF]">
                <div className="flex flex-col gap-6">
                    <EventInformationCard icon={MapPin}>
                        BeFly MinasCentro <br />
                        
                    </EventInformationCard>
                    <EventInformationCard icon={Calendar}>31 de Outubro de 2026
                    </EventInformationCard>
                    <EventInformationCard icon={Clock}>08:00 às 18:00</EventInformationCard>
                </div>
                <div className="w-80 h-48 md:w-[450px] md:h-[320px] xl:w-[672px] xl:h-[342px] bg-white border-[11px] border-white rounded-[32px]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!3m2!1spt-BR!2sbr!4v1781559410516!5m2!1spt-BR!2sbr!6m8!1m7!1sCrXiYcZSURNd8XZ2UR-74A!2m2!1d-19.9244229365726!2d-43.94356912759199!3f22.812978786988566!4f3.756028882256672!5f0.7820865974627469!4v1757131665987!5m2!1spt-BR!2sbr"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
                
            </section>

            <section className="bg-[#F7F9FB] py-20 md:py-24">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <SectionTitle text="Call For" highlight="Papers" />
                    <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed">
                        Tem algo incrível pra compartilhar sobre tecnologia, IA, desenvolvimento ou comunidade? Esse é o seu momento. Queremos conteúdos que inspirem, ensinem e conectem pessoas da comunidade tech.
                    </p>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto justify-items-stretch">
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSddEHAc6HgXJjvtTOYVgcqWz_8EamzPSqMDxy7xAUp8s_Cn1g/viewform?usp=dialog"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Abrir formulário de Call For Papers para Palestrantes"
                            className="group min-h-32 rounded-[1.75rem] border border-gray-200 bg-white p-5 text-left shadow-[0_10px_24px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(15,23,42,0.12)]"
                        >
                            <div className="flex h-full flex-col justify-between gap-6">
                                <p className="max-w-[18rem] text-sm sm:text-base leading-tight text-gray-500">
                                    Leve sua ideia pro palco do DevFest e compartilhe com a comunidade!
                                </p>
                                <div className="flex items-center justify-end gap-3 text-google-blue font-medium text-sm sm:text-base">
                                    <span>Call for Papers</span>
                                    <svg className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7 7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </a>

                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLScAykNJeduIyS-Lt2bRXP7w9SJ-CZsLaUOON9Id5rO-cPrQYQ/viewform"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Abrir formulário de Call For Papers para Trilha Feminina"
                            className="group min-h-32 rounded-[1.75rem] border border-gray-200 bg-white p-5 text-left shadow-[0_10px_24px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(15,23,42,0.12)]"
                        >
                            <div className="flex h-full flex-col justify-between gap-6">
                                <p className="max-w-[18rem] text-sm sm:text-base leading-tight text-gray-500">
                                    Faça parte de um ambiente exclusivo de mulheres no evento, apoiando e fortalecendo a comunidade!
                                </p>
                                <div className="flex items-center justify-end gap-3 text-google-blue font-medium text-sm sm:text-base">
                                    <span>Call for Mentoras</span>
                                    <svg className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7 7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="mt-12 overflow-hidden rounded-[2rem] border border-white/70 shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
                        <img
                            src={callForPapersBanner}
                            alt="Call For Papers DevFest BH 2026"
                            className="h-auto w-full object-cover"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}






