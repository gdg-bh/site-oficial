import { SectionTitle } from '../../../Common/SectionTitle';

import elasMaisMais from '../../../../assets/logos/elas++.png';
import pucMinas from '../../../../assets/logos/puc-minas.png';

export default function SponsorsIWD2026() {
    const sponsors = [
        { logo: elasMaisMais, url: 'https://www.instagram.com/elasmaismais/', name: 'Elas++' },
        { logo: pucMinas, url: 'https://www.pucminas.br/', name: 'PUC Minas' },
    ];

    return (
        <>
            <section className="bg-[#F7F9FB] py-20">
                <SectionTitle highlight="Patrocinadores e Apoiadores" />
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                    <div className="flex flex-wrap items-center justify-center gap-12">
                        {sponsors.map((sponsor, idx) => (
                            <a
                                key={idx}
                                href={sponsor.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-transform duration-200 hover:scale-105"
                            >
                                <img
                                    src={sponsor.logo}
                                    alt={sponsor.name}
                                    className="w-48 h-32 object-contain"
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </section>
            <section>
                <div className="mb-16 py-10 bg-gradient-to-r from-[#EBF3FC] via-[#EAF7F4] to-[#E9F9EF] text-center w-full max-w-7xl mx-auto rounded-xl">
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
