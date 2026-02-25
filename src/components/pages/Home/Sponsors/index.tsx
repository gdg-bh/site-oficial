import ContinuousSlider from '../../../Common/ContinuousSlider';

import pucminas from '../../../../assets/logos/puc-minas.png';
import framework from '../../../../assets/logos/framework.png';
import fiap from '../../../../assets/logos/Fiap.png';
import alura from '../../../../assets/logos/alura.png';
import sydle from '../../../../assets/logos/sydle.png';
import lucralize from '../../../../assets/logos/lucralize.png';
import localiza from '../../../../assets/logos/Localiza.png';
import strider from '../../../../assets/logos/strider.png';
import squadra from '../../../../assets/logos/squadra.png';
import levty from '../../../../assets/logos/LEVTY.png';
import hotmart from '../../../../assets/logos/Hotmart.png';
import onfly from '../../../../assets/logos/Onfly.png';
import luza from '../../../../assets/logos/luza.png';

import { SectionTitle } from '../../../Common/SectionTitle';

export default function Sponsors() {
    const images = [pucminas, framework, fiap, alura, sydle, lucralize, localiza, strider, squadra, levty, hotmart, onfly, luza];

    return (
        <>
            <section className="bg-[#FFF] py-20 overflow-hidden">
                <SectionTitle text="Marcas que já" highlight="nos apoiaram" />
                <p className="mx-auto w-10/12 lg:w-6/12 mb-16 mt-4 md:mt-3 text-center text-subtitle-color font-normal text-base">
                    {/*
                Temos orgulho de fazer parceria com líderes do setor que compartilham nossa
                visão de promover o crescimento dos desenvolvedores
                */}
                </p>
                <ContinuousSlider>
                    {images.map((src, idx) => (
                        <img
                            key={idx}
                            src={src}
                            alt={`Slide ${idx}`}
                            className="w-48 h-32 object-contain mx-6 flex-shrink-0"
                        />
                    ))}
                </ContinuousSlider>
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
