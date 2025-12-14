import ProfileCard from '../../DevFest/ProfileCard';
import { SectionTitle } from '../../../Common/SectionTitle';

import GabrielCassimiro from '../../../../assets/palestrantes/Gabriel_Cassimiro.jpeg';
import TiagoTemporin from '../../../../assets/palestrantes/Tiago_Temporin.jpg';

export default function SpeakersBuildWithAI2025() {
    const speakers = [
        {
            photoUrl: GabrielCassimiro,
            name: 'Gabriel Cassimiro',
            role: 'Lead AI Engineer',
            description: 'Sierra Studio',
            links: { linkedin: 'https://www.linkedin.com/in/gabriel-cassimiro/' },
        },
        {
            photoUrl: TiagoTemporin,
            name: 'Tiago Temporin',
            role: 'Staff Site Reliability Engineer',
            description: 'Unico IDtech',
            links: { linkedin: 'https://www.linkedin.com/in/tiago-temporin/' },
        },
    ];

    return (
        <section className="bg-[#F7F9FB] py-20 overflow-hidden">
            <SectionTitle highlight="Palestrantes" />
            <div className="mb-16"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-center gap-6">
                    {speakers.map((speaker, idx) => (
                        <div key={idx} className="w-full sm:w-[280px]">
                            <ProfileCard
                                photoUrl={speaker.photoUrl}
                                name={speaker.name}
                                role={speaker.role}
                                description={speaker.description}
                                links={speaker.links}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
