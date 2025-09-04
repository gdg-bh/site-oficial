import devfestBg from '../../assets/pages/devfest/bg.png';
import { Hero } from '../../components/common/Hero';
import { SectionTitle } from '../../components/common/SectionTitle';
import { CountdownTimer } from '../../components/pages/DevFest/CountdownTimer';

export function DevFest() {
    return (
        <>
            <Hero title="DevFest 2025" location="Belo Horizonte" bgImage={devfestBg} />
            <CountdownTimer />
            <div className="bg-white py-20">
                <SectionTitle text="O que é o" highlight="DevFest" />
                <p className="mx-auto w-8/12 mt-4 md:mt-3 text-center text-[#6A7181] font-normal text-base">
                    O DevFest é uma conferência anual organizada por comunidades do Google Developer
                    Groups (GDG) ao redor do mundo. Cada edição é única, criada por organizadores
                    locais para atender às necessidades de suas comunidades, mas todas compartilham
                    o mesmo propósito: oferecer aprendizado, conexão e inspiração. O DevFest reúne
                    desenvolvedores, profissionais de tecnologia e estudantes em um ambiente
                    inclusivo, com palestras, workshops e momentos de networking, explorando desde
                    as tecnologias mais recentes do Google até tendências globais do mercado de
                    tecnologia.
                </p>
            </div>
        </>
    );
}
