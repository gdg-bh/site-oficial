import { Calendar, MapPin } from 'lucide-react';

export function BuildWithAI2026HeroCard() {
    return (
        <div className="mt-8 bg-white rounded-2xl drop-shadow-title px-6 py-6 md:px-10 md:py-8 flex flex-col items-center gap-4 max-w-3xl z-[1] w-full md:w-auto mx-4 md:mx-0">
            <h3 className="text-google-blue text-xl font-bold mb-2">Build With AI 2026</h3>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 w-full text-google-gray text-sm md:text-base">
                <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-google-blue" />
                    <span>
                        30 de maio 
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-google-blue" />
                    <span>
                        Localiza Labs
                    </span>
                </div>
            </div>

            <a
                href="https://www.sympla.com.br/evento/build-with-ai-belo-horizonte/3407275"
                target="_blank"
                rel="noreferrer"
                className="w-full bg-google-blue text-white text-center px-6 py-3 rounded-lg font-normal transition-colors duration-200 shadow-soft hover:bg-blue-600 cursor-pointer mt-2"
            >
                Garanta seu ingresso
            </a>
        </div>
    );
}
