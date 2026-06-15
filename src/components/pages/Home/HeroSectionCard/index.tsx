import { Calendar, MapPin } from 'lucide-react';

export function HeroSectionCard() {
    return (
        <div className="mt-8 bg-white rounded-2xl drop-shadow-title px-6 py-6 md:px-10 md:py-8 flex flex-col items-center w-[100%] max-w-[480px] z-[1]">
            <span>Próximo evento</span>
            <h3 className="text-google-blue text-xl font-bold mb-4">DevFest BH 2026</h3>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-6 w-full text-google-gray text-sm md:text-base mb-4">
                <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-google-blue" />
                    <span>31 de outubro</span>
                </div>
                <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-google-blue" />
                    <span>Belo Horizonte</span>
                </div>
            </div>

            <div className="flex flex-col md:flex-row w-[100%] gap-4">
                <a
                    href="/devfest-2026"
                    className="w-full bg-google-blue hover:bg-blue-600 outline-none text-white text-center px-3 py-3 border border-black/20 rounded-lg font-normal transition-colors duration-200 shadow-soft"
                >
                    Saiba mais
                </a>
            </div>
        </div>
    );
}