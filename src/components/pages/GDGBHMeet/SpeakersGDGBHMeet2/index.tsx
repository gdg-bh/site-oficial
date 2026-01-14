import ProfileCard from '../../DevFest/ProfileCard';
import { SectionTitle } from '../../../Common/SectionTitle';

import LucasLemes from '../../../../assets/palestrantes/Lucas_Lemes.jpeg';

export default function SpeakersGDGBHMeet2() {
    const speakers = [
        {
            photoUrl: LucasLemes,
            name: 'Lucas Lemes',
            role: 'Cyber Security Analyst',
            description: 'Banco do Brasil',
            links: { linkedin: 'https://www.linkedin.com/in/lucas-lemes-839359111/', post: 'https://www.linkedin.com/feed/update/urn:li:activity:7417146326984888320' },
        },
    ];

    return (
        <section className="bg-[#F7F9FB] py-20 overflow-hidden">
            <SectionTitle highlight="Palestrantes" />
            <div className="mb-16"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {speakers.length > 0 ? (
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
                ) : (
                    <div className="text-center text-gray-600">
                        <p className="text-xl font-medium">Em breve divulgaremos os palestrantes desta edição!</p>
                    </div>
                )}
            </div>
        </section>
    );
}
