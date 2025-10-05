import ContinuousSlider from '../../../Common/ContinuousSlider';
import { SectionTitle } from '../../../Common/SectionTitle';
import { duplicatedImages, duplicatedUrls } from '../../../Common/SponsorURLs';

export default function Sponsors() {

    return (
        <>
            <section className="bg-[#F7F9FB] py-20 overflow-hidden">
                <SectionTitle highlight="Patrocinadores" />
                <p className="mx-auto w-10/12 lg:w-6/12 mb-16 mt-4 md:mt-3 text-center text-subtitle-color font-normal text-base">
                    {/*
                    Temos orgulho de fazer parceria com líderes do setor que compartilham nossa
                    visão de promover o crescimento dos desenvolvedores
                    */}
                </p>
                <ContinuousSlider>
                    {duplicatedImages.map((src, idx) => (
                        <a
                            key={idx}
                            href={duplicatedUrls[idx]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mx-6 flex-shrink-0 transition-transform duration-200 hover:scale-105"
                        >
                            <img
                                src={src}
                                alt={`Patrocinador ${idx + 1}`}
                                className="w-48 h-32 object-contain"
                            />
                        </a>
                    ))}
                </ContinuousSlider>
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
