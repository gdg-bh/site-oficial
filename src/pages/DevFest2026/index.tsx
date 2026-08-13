import { Calendar, MapPin } from 'lucide-react';
import devfestBg from '../../assets/pages/devfest2026/Img Header.png';
import { HeroEvent } from '../../components/Common/HeroEvent';
import AboutDevfest2026 from '../../components/pages/DevFest2026/AboutDevfest2026';
import ContestWidget from '../../components/pages/DevFest2026/ContestWidget';
import Speakers2026 from '../../components/pages/DevFest2026/Speakers2026';
import Schedule2026 from '../../components/pages/DevFest2026/Schedule2026';
import Sponsors2026 from '../../components/pages/DevFest2026/Sponsors2026';

export function DevFest2026() {
    return (
        <>
            <HeroEvent title="DevFest 2026" location="Belo Horizonte" bgImage={devfestBg}>
                <div className="mt-8 bg-white rounded-2xl drop-shadow-title px-6 py-6 md:px-10 md:py-8 flex flex-col items-center gap-4 max-w-4xl z-[1] w-full md:w-auto mx-4 md:mx-0">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 w-full text-google-gray text-sm md:text-base">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-google-blue" />
                            <span>
                                31 de Outubro de 2026 <br /> de 08:00 às 18:00
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-google-blue" />
                            <span>
                                BeFly MinasCentro <br />
                                Belo Horizonte
                            </span>
                        </div>
                    </div>

                    <div className="grid w-full grid-cols-2 gap-3 md:grid-cols-4">
                        {[
                            { label: '1º lote', date: '08/09' },
                            { label: '2º lote', date: '21/09' },
                            { label: '3º lote', date: '05/10' },
                            { label: '4º lote', date: '19/10' },
                        ].map((lot) => (
                            <div
                                key={lot.label}
                                className="rounded-xl border border-google-blue/20 bg-blue-50 px-3 py-4 text-center shadow-sm"
                            >
                                <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-google-blue">
                                    {lot.label}
                                </p>
                                <p className="mt-2 text-lg font-bold text-google-gray">{lot.date}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </HeroEvent>
            <ContestWidget />
            <AboutDevfest2026 />
            <Speakers2026 />
            {/* <Schedule2026 /> */}
            <Sponsors2026 />
        </>
    );
}