import ProfileCard from '../../DevFest/ProfileCard';
import { SectionTitle } from '../../../Common/SectionTitle';

import AlexiaKattah from '../../../../assets/palestrantes/Alexia_Kattah.jpg';
import AndreMagalhaes from '../../../../assets/palestrantes/Andre_Luiz_Magalhaes.jpg';
import MatheusPacheco from '../../../../assets/palestrantes/Matheus_Pacheco.jpg';

export default function SpeakersGDGBHMeet() {
    const speakers = [
        {
            photoUrl: AlexiaKattah,
            name: 'Alexia Kattah',
            role: 'Software Engineer',
            description: 'Atria Institute',
            links: { linkedin: 'https://www.linkedin.com/in/alexiakattah/' },
        },
        {
            photoUrl: AndreMagalhaes,
            name: 'André Magalhães',
            role: 'Arquiteto de Soluções',
            description: 'Localiza',
            links: { linkedin: 'https://www.linkedin.com/in/andremagalhaes02/' },
        },
        {
            photoUrl: MatheusPacheco,
            name: 'Matheus Pacheco Spagiari',
            role: 'Arquiteto de Soluções',
            description: 'Localiza',
            links: { linkedin: 'https://www.linkedin.com/in/matheus-pacheco-spagiari/' },
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
