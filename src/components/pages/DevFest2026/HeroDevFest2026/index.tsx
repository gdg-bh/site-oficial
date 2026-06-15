import { Container } from '../../../Common/Container';
import devfestBg from '../../../../assets/pages/devfest2026/Img Header.png';
import starImage from '../../../../assets/pages/devfest2026/Vector.png';
import { PlayCircle } from 'lucide-react';

export default function HeroDevFest2026() {
    return (
        <section className="relative w-full overflow-visible bg-[#2c3245] border-b-8 border-transparent">
            {/* Wrapper da imagem com altura fixada e overflow hidden para cortar excesso sem esticar */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <img 
                    src={devfestBg} 
                    alt="DevFest BH 2026 BG" 
                    className="w-full h-full object-cover object-bottom"
                />
            </div>
            
            {/* Content Overlay */}
            <div className="relative z-10 flex flex-col justify-center w-full min-h-[50vh] md:min-h-[65vh] pt-32 pb-20 md:pt-40 md:pb-28">
                <Container className="w-full">
                    <div className="max-w-4xl">
                            <div className="inline-flex items-center gap-2 border border-white/50 bg-black/30 backdrop-blur-sm rounded-full px-5 py-2 text-white font-medium text-sm md:text-base mb-6">
                                Save the date <span className="mx-1">•</span> 31 . Outubro . 2026
                            </div>
                            
                            <h1 className="text-white font-bold text-4xl md:text-7xl lg:text-[5.5rem] leading-[1.1] mb-2 drop-shadow-lg relative inline-block">
                                Vem aí<br />
                                DevFest BH 2026
                                {/* Custom Brackets SVG overlay to mimic the GDG Logo */}
                                <div className="absolute right-[-40px] top-[-10px] md:right-[-120px] md:top-[10px] w-16 h-16 md:w-32 md:h-32 opacity-90 hidden sm:block">
                                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M43.7 21.3L15.3 49.7C14.4 50.6 14.4 52.1 15.3 53L43.7 81.4C46.2 83.9 50.4 82.2 50.4 78.6V24.1C50.4 20.5 46.2 18.8 43.7 21.3Z" fill="#4285F4"/>
                                        <path d="M57.6 21.3L86 49.7C86.9 50.6 86.9 52.1 86 53L57.6 81.4C55.1 83.9 50.9 82.2 50.9 78.6V24.1C50.9 20.5 55.1 18.8 57.6 21.3Z" fill="#FBBC04"/>
                                        <path d="M50.9 24.1V51.3L78.2 24.1H50.9Z" fill="#EA4335"/>
                                        <path d="M50.9 78.6V51.3L78.2 78.6H50.9Z" fill="#34A853"/>
                                    </svg>
                                </div>
                            </h1>
                            
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 mt-8 md:mt-12">
                                <button className="flex items-center gap-3 bg-google-blue hover:bg-blue-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold transition-all">
                                    Quero patrocinar
                                    <PlayCircle className="w-5 h-5" />
                                </button>
                                <button className="text-white hover:text-gray-200 font-semibold px-4 py-2 border-b-2 border-transparent hover:border-white transition-all">
                                    Conheça o evento
                                </button>
                            </div>
                        </div>
                    </Container>
                </div>

            {/* Blue Star Graphic at bottom right */}
            <div className="absolute -bottom-32 md:-bottom-80 -right-24 md:-right-48 w-64 h-64 md:w-[700px] md:h-[700px] z-30 pointer-events-none hidden sm:block">
                <img src={starImage} alt="Estrela decorativa" className="w-full h-full object-contain" />
            </div>
        </section>
    );
}