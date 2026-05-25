import { Container } from '../../../Common/Container';
import { Mail, FileText } from 'lucide-react';
import starImage from '../../../../assets/pages/devfest2026/Vector (2).png';

export default function SponsorCTA() {
    return (
        <section className="relative w-full bg-[#f8fbff] py-32 overflow-visible">
            <Container className="relative z-10 flex justify-center">
                <div className="bg-white rounded-3xl shadow-xl p-10 md:p-16 max-w-4xl w-full text-center border border-gray-100 relative">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
                        Seja um Patrocinador do DevFest BH 2026!
                    </h2>
                    <p className="text-gray-500 text-lg mb-10">
                        O GDG DevFest 2026 está chegando. Não perca o nosso maior evento do ano!
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a 
                            href="#"
                            className="inline-flex items-center gap-3 border-2 border-google-blue text-google-blue hover:bg-blue-50 px-8 py-4 rounded-xl font-medium transition-colors"
                        >
                            Solicitar plano de patrocínio
                            <FileText className="w-5 h-5" />
                        </a>
                        <a 
                            href="mailto:gdgbhz@gmail.com"
                            className="inline-flex items-center gap-3 text-gray-700 hover:text-gray-900 font-medium"
                        >
                            <Mail className="w-5 h-5" />
                            gdgbhz@gmail.com
                        </a>
                    </div>
                </div>
            </Container>

            {/* Green start at bottom right */}
            <div className="absolute -bottom-10 -right-10 md:-bottom-24 md:-right-16 w-48 h-48 md:w-[450px] md:h-[450px] z-20 pointer-events-none">
                <img src={starImage} alt="Estrela decorativa" className="w-full h-full object-contain" />
            </div>
        </section>
    );
}