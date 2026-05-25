import foto from '../../../../assets/pages/devfest2026/Comunidade.png';
import starImage from '../../../../assets/pages/devfest2026/Vector (1).png';
import { Container } from '../../../Common/Container';

export default function CommunityPhoto() {
    return (
        <section className="relative w-full overflow-hidden md:overflow-visible bg-white pt-16">
            <div className="relative w-full max-w-[1400px] mx-auto flex justify-center px-4 md:px-8">
                {/* Star on the left */}
                <div className="absolute -left-10 md:-left-24 -bottom-10 md:-bottom-24 z-0 w-48 h-48 md:w-[450px] md:h-[450px] pointer-events-none">
                    <img src={starImage} alt="Estrela decorativa" className="w-full h-full object-contain" />
                </div>

                <div className="w-full relative z-10">
                    <img 
                        src={foto} 
                        alt="GDG Community" 
                        className="w-full h-auto object-contain mx-auto" 
                    />
                </div>
            </div>
            
            {/* Divider line */}
            <div className="w-full border-t-2 border-dashed border-google-blue mt-12 md:mt-24" />
        </section>
    );
}