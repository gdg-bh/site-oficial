import ProfileCard from '../../DevFest/ProfileCard';
import { SectionTitle } from '../../../Common/SectionTitle';

import RenatoPereira from '../../../../assets/palestrantes/Renato_Pereira.png';
import HugoZanini from '../../../../assets/palestrantes/Hugo_Zanini.png';

export default function SpeakersGoogleIO2023() {
    const speakers = [
        {
            photoUrl: RenatoPereira,
            name: 'Renato Pereira',
            role: 'Tech Manager',
            description: 'Inter',
            links: { linkedin: 'https://www.linkedin.com/in/renatopckz/' },
        },
        {
            photoUrl: HugoZanini,
            name: 'Hugo Zanini',
            role: 'Technical Product Lead',
            description: 'Nubank',
            links: { linkedin: 'https://www.linkedin.com/in/hugozanini/' },
        },
    ];

    return (
        <section className="bg-white py-20 overflow-hidden">
            <SectionTitle highlight="Palestrantes" />
            
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
