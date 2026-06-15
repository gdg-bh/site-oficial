import foto from '../../../../assets/pages/devfest2026/Comunidade.png';
import starImage from '../../../../assets/pages/devfest2026/Vector (1).png';
import { Container } from '../../../Common/Container';

export default function CommunityPhoto() {
    return (
        <section className="relative w-full overflow-hidden md:overflow-visible pt-16 mt-16">
            <div className="relative w-full max-w-[1920px] mx-auto flex justify-center">
                {/* Star on the left */}
                <div className="absolute -left-16 md:-left-40 top-1/2 -translate-y-1/2 z-0 w-64 h-64 md:w-[600px] md:h-[600px] pointer-events-none">
                    <img src={starImage} alt="Estrela decorativa" className="w-full h-full object-contain" />
                </div>

                <div className="w-full relative z-10 px-0">
                    <img 
                        src={foto} 
                        alt="GDG Community" 
                        className="w-full h-auto object-cover scale-110 md:scale-125 origin-bottom mx-auto" 
                    />
                </div>
            </div>
            
            {/* Divider line */}
            <div className="w-full border-t-2 border-dashed border-google-blue mt-12 md:mt-24" />
        </section>
    );
}