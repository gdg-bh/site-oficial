import ProfileCard from '../../DevFest/ProfileCard';
import { SectionTitle } from '../../../Common/SectionTitle';

import BetoMuniz from '../../../../assets/palestrantes/Beto_Muniz.jpeg';
import AhirtonLopes from '../../../../assets/palestrantes/Ahirton_Lopes.jpeg';

export default function SpeakersGoogleIO2025() {
    const speakers = [
        {
            photoUrl: BetoMuniz,
            name: 'Beto Muniz',
            role: 'Senior Software Engineer',
            description: 'Grafana Labs',
            links: { linkedin: 'https://www.linkedin.com/in/obetomuniz/', post: 'https://www.linkedin.com/posts/gdg-bh_googleioextended-gdgbh-googleio-activity-7333083576839700481-XPWD?utm_source=share&utm_medium=member_desktop&rcm=ACoAADE_r8sBytcZ4uS3uwkauA8v1t31eEfJJZw' },
        },
        {
            photoUrl: AhirtonLopes,
            name: 'Ahirton Lopes',
            role: 'Senior Manager',
            description: 'Accenture',
            links: { linkedin: 'https://www.linkedin.com/in/ahirtonlopes/', post: 'https://www.linkedin.com/posts/gdg-bh_googleioextended-gdgbh-googleio-activity-7335612487985184768-czCz?utm_source=share&utm_medium=member_desktop&rcm=ACoAADE_r8sBytcZ4uS3uwkauA8v1t31eEfJJZw' },
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
