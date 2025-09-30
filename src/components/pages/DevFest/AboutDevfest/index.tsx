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
