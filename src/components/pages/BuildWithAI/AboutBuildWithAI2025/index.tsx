import { SectionTitle } from '../../../Common/SectionTitle';
import { EventInformationCard } from '../../DevFest/EventInformationCard';
import { Calendar, Clock, MapPin } from 'lucide-react';

// Fotos do evento
import foto1 from '../../../../assets/pages/buildwithai2025/foto1.jpg';
import foto2 from '../../../../assets/pages/buildwithai2025/foto2.jpg';
import foto3 from '../../../../assets/pages/buildwithai2025/foto3.jpg';
import foto4 from '../../../../assets/pages/buildwithai2025/foto4.jpg';
import foto5 from '../../../../assets/pages/buildwithai2025/foto5.jpg';
import foto6 from '../../../../assets/pages/buildwithai2025/foto6.jpg';
import foto7 from '../../../../assets/pages/buildwithai2025/foto7.jpg';
import foto8 from '../../../../assets/pages/buildwithai2025/foto8.jpg';

export default function AboutBuildWithAI2025() {
    // Arrays de fotos para os carrosséis
    const fotosCarrosselSuperior = [foto1, foto2, foto3, foto4];
    const fotosCarrosselInferior = [foto5, foto6, foto7, foto8];

    return (
        <>
            <section className="bg-white py-20">
                <SectionTitle text="O que é o" highlight="Build With AI" />
                <p className="mx-auto w-8/12 mt-4 md:mt-3 text-center text-subtitle-color font-normal text-base">
                    O <strong>Build With AI</strong> é um evento global promovido pelas comunidades Google Developer Groups (GDG), voltado para o aprendizado e a prática de Inteligência Artificial Generativa. Seu objetivo é reunir desenvolvedores de diferentes níveis de experiência para explorar as tecnologias mais recentes do Google, participar de atividades técnicas, aprender conceitos atuais de IA e desenvolver soluções inovadoras em um ambiente colaborativo e voltado ao compartilhamento de conhecimento.
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
                            <h3 className="text-4xl font-semibold text-google-blue mb-2">100+</h3>
                            <p className="text-gray-600 text-base font-medium">Participantes</p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                            <div className="flex items-center justify-center w-14 h-14 bg-blue-50 rounded-lg mb-4">
                                <svg className="w-7 h-7 text-google-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </div>
                            <h3 className="text-4xl font-semibold text-google-blue mb-2">2</h3>
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
                                O Build With AI 2025 Belo Horizonte foi dedicado ao aprendizado e à aplicação prática de Inteligência Artificial Generativa utilizando as mais recentes tecnologias do Google. Realizado em um formato de treinamentos simultâneos, o evento reuniu desenvolvedores de todos os níveis de experiência em um ambiente colaborativo voltado ao compartilhamento de conhecimento.
                            </p>
                            
                            <p>
                                Nesta edição, os participantes tiveram a oportunidade de escolher entre dois workshops: um focado em <strong>GO</strong> e outro em <strong>Python</strong>. Cada workshop ofereceu uma abordagem prática para a construção de soluções inovadoras com IA, permitindo que os participantes aplicassem conceitos aprendidos em projetos reais.
                            </p>
                            
                            <p>
                                Os workshops foram conduzidos por Gabriel Cassimiro e Tiago Temporin. Juntos, eles compartilharam conhecimentos técnicos, exemplos práticos e insights sobre como construir soluções inovadoras com Inteligência Artificial Generativa.
                            </p>
                             
                            <p>
                                Com uma programação voltada a participantes de nível iniciante a intermediário, o Build With AI BH 2025 proporcionou aprendizado prático, troca de experiências e oportunidades de networking, fortalecendo a comunidade local e incentivando o uso de tecnologias atuais para criação de projetos inovadores com IA!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Galeria de Fotos do Evento */}
            <section className="bg-white py-20 overflow-hidden">
                <SectionTitle text="Galeria de" highlight="Fotos" />
                <div className="mt-12 space-y-8">
                    {/* Carrossel Superior - Move para a Esquerda */}
                    <div className="relative w-full">
                        <style>{`
                            @keyframes scrollLeft {
                                0% { transform: translateX(0); }
                                100% { transform: translateX(-50%); }
                            }
                            .animate-scroll-left {
                                animation: scrollLeft 30s linear infinite;
                            }
                        `}</style>
                        
                        {/* Gradiente esquerdo */}
                        <div className="absolute left-0 top-0 bottom-0 w-64 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                        
                        {/* Gradiente direito */}
                        <div className="absolute right-0 top-0 bottom-0 w-64 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
                        
                        <div className="flex animate-scroll-left">
                            {/* Primeira sequência de fotos */}
                            {fotosCarrosselSuperior.map((foto, index) => (
                                <div key={`top-${index}`} className="flex-shrink-0 w-80 h-64 mx-2">
                                    <img 
                                        src={foto} 
                                        alt={`Foto do evento Build With AI 2025 - ${index + 1}`} 
                                        loading="lazy"
                                        className="w-full h-full object-cover rounded-2xl shadow-lg"
                                    />
                                </div>
                            ))}
                            {/* Duplicar as fotos para loop infinito */}
                            {fotosCarrosselSuperior.map((foto, index) => (
                                <div key={`top-dup-${index}`} className="flex-shrink-0 w-80 h-64 mx-2">
                                    <img 
                                        src={foto} 
                                        alt={`Foto do evento Build With AI 2025 - ${index + 1}`}
                                        loading="lazy"
                                        className="w-full h-full object-cover rounded-2xl shadow-lg"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Carrossel Inferior - Move para a Direita */}
                    <div className="relative w-full">
                        <style>{`
                            @keyframes scrollRight {
                                0% { transform: translateX(-50%); }
                                100% { transform: translateX(0); }
                            }
                            .animate-scroll-right {
                                animation: scrollRight 30s linear infinite;
                            }
                        `}</style>
                        
                        {/* Gradiente esquerdo */}
                        <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                        
                        {/* Gradiente direito */}
                        <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
                        
                        <div className="flex animate-scroll-right">
                            {/* Primeira sequência de fotos */}
                            {fotosCarrosselInferior.map((foto, index) => (
                                <div key={`bottom-${index}`} className="flex-shrink-0 w-80 h-64 mx-2">
                                    <img 
                                        src={foto} 
                                        alt={`Foto do evento Build With AI 2025 - ${index + 5}`}
                                        loading="lazy"
                                        className="w-full h-full object-cover rounded-2xl shadow-lg"
                                    />
                                </div>
                            ))}
                            {/* Duplicar as fotos para loop infinito */}
                            {fotosCarrosselInferior.map((foto, index) => (
                                <div key={`bottom-dup-${index}`} className="flex-shrink-0 w-80 h-64 mx-2">
                                    <img 
                                        src={foto} 
                                        alt={`Foto do evento Build With AI 2025 - ${index + 5}`}
                                        loading="lazy"
                                        className="w-full h-full object-cover rounded-2xl shadow-lg"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
                {/* Botão do Drive */}
                <div className="flex justify-center mt-12">
                    <a
                        href="https://drive.google.com/drive/u/2/folders/1QxZuROWknbIwesqqQ0iRw9VzjCroNlVw"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-google-blue hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
                    >
                        Ver todas as fotos no Drive
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </div>
            </section>

            <section className="flex flex-col xl:flex-row items-center py-24 xl:p-32 justify-center gap-12 bg-gradient-to-r from-[#EBF3FC] via-[#EAF7F4] to-[#E9F9EF]">`
                <div className="flex flex-col gap-6">
                    <EventInformationCard icon={MapPin}>
                        Faculdade COTEMIG <br />
                        Belo Horizonte, MG
                    </EventInformationCard>
                    <EventInformationCard icon={Calendar}>
                        26 de abril de 2025
                    </EventInformationCard>
                    <EventInformationCard icon={Clock}>8h30 às 12h</EventInformationCard>
                </div>
                <div className="w-80 h-48 md:w-[450px] md:h-[320px] xl:w-[672px] xl:h-[342px] bg-white border-[11px] border-white rounded-[32px]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3750.71550537853!2d-43.9662649!3d-19.93639!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa69774a6a27bcd%3A0x3209fa0ca096e531!2sFaculdade%20COTEMIG!5e0!3m2!1spt-BR!2sbr!4v1765721157253!5m2!1spt-BR!2sbr"
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
