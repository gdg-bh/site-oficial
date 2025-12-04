import ProfileCard from '../../DevFest/ProfileCard';
import { SectionTitle } from '../../../Common/SectionTitle';

import MikaeriOhana from '../../../../assets/palestrantes/Mikaeri_Ohana.jpg';
import LuisLeao from '../../../../assets/palestrantes/Luis_Leao.jpg';

export default function SpeakersGoogleIO2024() {
    const speakers = [
        {
            photoUrl: MikaeriOhana,
            name: 'Mikaeri Ohana',
            role: 'Solutions Architect, Gen AI',
            description: 'Google',
            links: { linkedin: 'https://www.linkedin.com/in/mikaeriohana/' },
        },
        {
            photoUrl: LuisLeao,
            name: 'Luís Leão',
            role: 'Staff Developer Evangelist',
            description: 'Twilio',
            links: { linkedin: 'https://www.linkedin.com/in/luisleao/' },
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
