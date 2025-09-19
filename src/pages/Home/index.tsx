import { SectionTitle } from '../../components/Common/SectionTitle';
import Sponsors from '../../components/pages/DevFest/Sponsors';
import PastEvents from '../../components/pages/Home/PastEvents';

export function Home() {
    return (
        <>
            <section className="bg-[#FFF] py-20 overflow-hidden">
                <SectionTitle text="Eventos" highlight="Passados" />
                <p className="mx-auto w-10/12 lg:w-6/12 mb-28 mt-4 md:mt-3 text-center text-subtitle-color font-normal text-base">
                    Explore nossos eventos anteriores e veja as experiências incríveis que criamos
                    para nossa comunidade
                </p>
                <PastEvents />
            </section>

            <section className="bg-white pb-16">
                <div className="py-10 bg-gradient-to-r from-[#3B87EE] via-[#2FA1AE] to-[#22C261] text-center w-full max-w-7xl  mx-auto rounded-xl text-white">
                    <h1 className="font-semibold text-3xl text-center mb-5">Save the Date!</h1>
                    <p className="font-normal text-lg w-4/5 md:w-1/2 mx-auto mb-8">
                        O GDG DevFest 2025 está chegando. Não perca o nosso maior evento do ano!
                    </p>
                    <a
                        href="mailto:gdgbhz@gmail.com"
                        target="_blank"
                        className="bg-white hover:bg-grey outline-none text-black px-6 py-3 rounded-lg font-normal transition-colors duration-200 shadow-soft cursor-pointer"
                    >
                        Garantir ingresso
                    </a>
                </div>
            </section>

            <section className="bg-[#FFF] py-20 overflow-hidden">
                <SectionTitle text="Marcas que já" highlight="nos apoiaram" />
                <p className="mx-auto w-10/12 lg:w-6/12 mb-16 mt-4 md:mt-3 text-center text-subtitle-color font-normal text-base">
                    {/*
                        Temos orgulho de fazer parceria com líderes do setor que compartilham nossa
                        visão de promover o crescimento dos desenvolvedores
                        */}
                </p>
                <Sponsors />
            </section>
            <section className="bg-white pb-16">
                <div className="py-10 bg-gradient-to-r from-[#EBF3FC] via-[#EAF7F4] to-[#E9F9EF] text-center w-full max-w-7xl mx-auto rounded-xl">
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
