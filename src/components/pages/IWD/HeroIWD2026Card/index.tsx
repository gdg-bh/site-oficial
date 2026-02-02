import { Calendar, MapPin } from 'lucide-react';

export function HeroIWD2026Card() {
    return (
        <div className="mt-8 bg-white rounded-2xl drop-shadow-title px-6 py-6 md:px-10 md:py-8 flex flex-col items-center gap-4 max-w-3xl z-[1]">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 w-full text-google-gray text-sm md:text-base">
                <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-google-blue" />
                    <span>
                        14 de março de 2026 <br /> de 08:00 às 12:30
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-google-blue" />
                    <span>
                        PUC Minas - Coração Eucarístico <br />
                        Av. Dom José Gaspar, 500
                    </span>
                </div>
            </div>

            <a
                href="https://www.sympla.com.br/evento/international-women-s-day-belo-horizonte/3282582"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-google-blue text-white text-center px-6 py-3 rounded-lg font-normal transition-colors duration-200 shadow-soft hover:bg-blue-600 cursor-pointer"
            >
                Garantir ingresso
            </a>
        </div>
    );
}
