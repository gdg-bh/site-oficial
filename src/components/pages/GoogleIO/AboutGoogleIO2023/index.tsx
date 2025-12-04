import { SectionTitle } from '../../../Common/SectionTitle';
import { EventInformationCard } from '../../DevFest/EventInformationCard';
import { Calendar, Clock, MapPin } from 'lucide-react';

export default function AboutGoogleIO2023() {
    return (
        <>
            <section className="bg-white py-20">
                <SectionTitle text="O que é o" highlight="Google I/O Extended" />
                <p className="mx-auto w-8/12 mt-4 md:mt-3 text-center text-subtitle-color font-normal text-base">
                   O <strong>Google I/O Extended</strong> é a versão comunitária do Google I/O, criada para levar a experiência do evento oficial para diferentes cidades ao redor do mundo. Enquanto o Google I/O acontece na Califórnia e é organizado diretamente pelo Google, o I/O Extended é promovido pelas comunidades <strong>Google Developer Groups (GDG)</strong>, reunindo desenvolvedores, estudantes e entusiastas para acompanhar, discutir e aprofundar as novidades apresentadas.
                </p>
                <p className="mx-auto w-8/12 mt-4 text-center text-subtitle-color font-normal text-base">
                   Com palestras, debates, atividades e muito networking, o Google I/O Extended conecta a comunidade local às tendências globais, tornando o conhecimento mais acessível e fortalecendo a troca entre pessoas apaixonadas por tecnologia.
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
                            <h3 className="text-4xl font-semibold text-google-blue mb-2">184</h3>
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
                                O Google I/O Extended Belo Horizonte 2023 reuniu a comunidade para uma noite de muito conhecimento, inovação e troca de experiências. Realizado no dia 25 de julho, das 18h às 21h, no WeWork da Rua Sergipe, o evento contou com 60 participantes presenciais e 125 online, fortalecendo ainda mais a conexão entre pessoas apaixonadas por tecnologia.
                            </p>

                            <p>
                                A programação trouxe dois convidados especiais: <strong>Renato Pereira</strong>, que apresentou em primeira mão os principais anúncios e tendências revelados no Google I/O, e <strong>Hugo Zanini</strong>, que demonstrou o potencial da nova ferramenta de programação gráfica do Google voltada para prototipagem rápida e experimentação em Machine Learning.
                            </p>

                            <p>
                                Foi uma oportunidade única de mergulhar nas inovações da Google, trocar ideias com outros profissionais e ampliar o networking em um ambiente acolhedor e inspirador.
                            </p>
                        </div>
                        <div className="flex justify-center mt-8">
                            <a
                                href="https://drive.google.com/drive/u/2/folders/1y808crUDWo5khqy-thKcvSVBQoclEFLW"
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
                        WeWork <br />
                        Rua Sergipe, 1440 - Savassi
                    </EventInformationCard>
                    <EventInformationCard icon={MapPin}>
                        25 de julho de 2023
                    </EventInformationCard>
                    <EventInformationCard icon={Clock}>18:00 às 22:00</EventInformationCard>
                </div>
                <div className="w-80 h-48 md:w-[450px] md:h-[320px] xl:w-[672px] xl:h-[342px] bg-white border-[11px] border-white rounded-[32px]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.648896392032!2d-43.938718300000005!3d-19.939195100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699756871b667%3A0x9f24282c6279320c!2sWeWork%20Sala%20Comercial%20%26%20Coworking!5e0!3m2!1spt-BR!2sbr!4v1764869655386!5m2!1spt-BR!2sbr"
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
