import { Calendar, MapPin } from 'lucide-react';

export function DevFestHeroSectionCard() {
    return (
        <div className="mt-8 bg-white rounded-2xl drop-shadow-title px-6 py-6 md:px-10 md:py-8 flex flex-col items-center gap-4 max-w-3xl">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 w-full text-google-gray text-sm md:text-base">
                <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-google-blue" />
                    <span>
                        08 de Novembro de 2025 <br /> de 08:30 às 17:30h
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-google-blue" />
                    <span>
                        Belo Horizonte - MG (PUC Minas) <br />
                        Lourdes Av. Brasil, 2023 - Funcionários
                    </span>
                </div>
            </div>

            <a
                href="#"
                target="_blank"
                className="w-full bg-google-blue hover:bg-blue-600 outline-none text-white px-6 py-3 rounded-lg font-normal transition-colors duration-200 shadow-soft"
            >
                Garantir ingresso
            </a>
        </div>
    );
}
