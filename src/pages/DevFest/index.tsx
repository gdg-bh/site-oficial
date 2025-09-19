import { Calendar, Clock, MapPin } from 'lucide-react';
import devfestBg from '../../assets/pages/devfest/bg.png';
import { CountdownTimer } from '../../components/pages/DevFest/CountdownTimer';
import { EventInformationCard } from '../../components/pages/DevFest/EventInformationCard';
import Speakers from '../../components/pages/DevFest/Speakers';
import Schedule from '../../components/pages/DevFest/Schedule';
import Sponsors from '../../components/pages/DevFest/Sponsors';
import { Hero } from '../../components/Common/Hero';
import { SectionTitle } from '../../components/Common/SectionTitle';

export function DevFest() {
    return (
        <>
            <Hero title="DevFest 2025" location="Belo Horizonte" bgImage={devfestBg} />
            <CountdownTimer />
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
            <section className="flex flex-col xl:flex-row items-center py-24 xl:p-32 justify-center gap-12 bg-gradient-to-r from-[#EBF3FC] via-[#EAF7F4] to-[#E9F9EF]">
                <div className="flex flex-col gap-6">
                    <EventInformationCard icon={Calendar}>
                        Belo Horizonte - MG <br />
                        PUC Minas <br />
                        Lourdes Av. Brasil, 2023 - Funcionários
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
            <section className="bg-[#F7F9FB] py-20 overflow-hidden">
                <SectionTitle highlight="Palestrantes" />
                <p className="mx-auto w-10/12 lg:w-6/12 mb-28 mt-4 md:mt-3 text-center text-subtitle-color font-normal text-base">
                    Desenvolvedores apaixonados e construtores de comunidades dedicados a promover o
                    crescimento e o compartilhamento de conhecimento
                </p>
                <Speakers />
            </section>
            <section className="bg-white py-20 overflow-hidden">
                <SectionTitle highlight="Agenda" />
                <p className="mx-auto w-10/12 lg:w-6/12 mb-16 mt-4 md:mt-3 text-center text-subtitle-color font-normal text-base">
                    Confira o cronograma completo do evento.
                </p>
                <Schedule />
            </section>
            <section className="bg-[#F7F9FB] py-20 overflow-hidden">
                <SectionTitle highlight="Patrocinadores" />
                <p className="mx-auto w-10/12 lg:w-6/12 mb-16 mt-4 md:mt-3 text-center text-subtitle-color font-normal text-base">
                    {/*
                    Temos orgulho de fazer parceria com líderes do setor que compartilham nossa
                    visão de promover o crescimento dos desenvolvedores
                    */}
                </p>
                <Sponsors />
            </section>
            <section>
                <div className="mb-16 py-10 bg-gradient-to-r from-[#EBF3FC] via-[#EAF7F4] to-[#E9F9EF] text-center w-full max-w-7xl  mx-auto rounded-xl">
                    <h1 className="text-google-blue font-semibold text-2xl text-center mb-5">
                        Seja um Patrocinador
                    </h1>
                    <p className="text-subtitle-color font-normal text-sm w-4/5 md:w-1/2 mx-auto mb-8">
                        Interessado em se tornar um patrocinador? Entre em contato conosco pelo
                        e-mail <strong>gdgbhz@gmail.com</strong> para saber mais sobre as
                        oportunidades de parceria e como sua empresa pode se envolver.
                    </p>
                    <a
                        href="mailto:gdgbhz@gmail.com"
                        target="_blank"
                        className="bg-google-blue hover:bg-blue-600 outline-none text-white px-6 py-3 rounded-lg font-normal transition-colors duration-200 shadow-soft cursor-pointer"
                    >
                        Entre em contato
                    </a>
                </div>
            </section>
        </>
    );
}
