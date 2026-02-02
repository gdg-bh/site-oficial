import { SectionTitle } from '../../../Common/SectionTitle';
import { EventInformationCard } from '../../DevFest/EventInformationCard';
import { Calendar, Clock, MapPin } from 'lucide-react';

export default function AboutIWD2026() {
    return (
        <>
            <section className="bg-white py-20">
                <SectionTitle text="O que é o" highlight="International Women's Day" />
                <div className="mx-auto w-10/12 md:w-8/12 mt-4 md:mt-3 text-center text-subtitle-color font-normal text-base">
                    <p>
                        O <strong>International Women's Day (IWD)</strong> é um evento global promovido pela comunidade <strong>Women Techmakers</strong>, que celebra as conquistas das mulheres na tecnologia e fortalece a presença feminina na área. Realizado em diferentes cidades ao redor do mundo, o IWD é um espaço para conexão, aprendizado e troca de experiências, reunindo mulheres em diferentes fases da carreira para inspirar, apoiar e construir uma comunidade mais diversa e inclusiva.
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
                            <h3 className="text-4xl font-semibold text-google-blue mb-2">+400</h3>
                            <p className="text-gray-600 text-base font-medium">Participantes</p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                            <div className="flex items-center justify-center w-14 h-14 bg-blue-50 rounded-lg mb-4">
                                <svg className="w-7 h-7 text-google-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </div>
                            <h3 className="text-4xl font-semibold text-google-blue mb-2">6</h3>
                            <p className="text-gray-600 text-base font-medium">Palestrantes</p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                            <div className="flex items-center justify-center w-14 h-14 bg-blue-50 rounded-lg mb-4">
                                <svg className="w-7 h-7 text-google-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-4xl font-semibold text-google-blue mb-2">5</h3>
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
                                O International Women's Day 2026 será um evento <strong>exclusivo para o público feminino</strong>, com foco em desenvolvimento, aprendizado e crescimento na área de tecnologia. A programação foi pensada para promover conexões, troca de experiências e inspiração entre mulheres em diferentes momentos da carreira.
                            </p>
                            <p>
                                O evento acontecerá na <strong>PUC Minas – Coração Eucarístico</strong>, no dia 14 de março de 2026, das 08:00 às 12:30, e contará com palestras e um painel especial com mulheres líderes na tecnologia, que irão compartilhar suas trajetórias, desafios e aprendizados no mercado.
                            </p>
                            <p>
                                O evento é realizado em parceria com o programa <strong>Elas++</strong>, uma iniciativa de extensão do curso de Ciência da Computação da PUC Minas, que tem como objetivo aumentar a representatividade feminina na área de tecnologia e informática em Belo Horizonte.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col xl:flex-row items-center py-24 xl:p-32 justify-center gap-12 bg-gradient-to-r from-[#EBF3FC] via-[#EAF7F4] to-[#E9F9EF]">
                <div className="flex flex-col gap-6">
                    <EventInformationCard icon={MapPin}>
                        PUC Minas - Coração Eucarístico <br />
                        Av. Dom José Gaspar, 500
                    </EventInformationCard>
                    <EventInformationCard icon={Calendar}>
                        14 de março de 2026
                    </EventInformationCard>
                    <EventInformationCard icon={Clock}>
                        08:00 às 12:30
                    </EventInformationCard>
                </div>
                <div className="w-80 h-48 md:w-[450px] md:h-[320px] xl:w-[672px] xl:h-[342px] bg-white border-[11px] border-white rounded-[32px]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.358674849886!2d-43.99394852507123!3d-19.917750081694076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699fb1b026c5f%3A0xd12ddb4449db850d!2sPUC%20Minas%20-%20Cora%C3%A7%C3%A3o%20Eucar%C3%ADstico!5e0!3m2!1spt-BR!2sbr!4v1737651234567!5m2!1spt-BR!2sbr"
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
