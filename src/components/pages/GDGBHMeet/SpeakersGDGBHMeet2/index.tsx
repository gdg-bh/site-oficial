import ProfileCard from '../../DevFest/ProfileCard';
import { SectionTitle } from '../../../Common/SectionTitle';

// import palestrante1 from '../../../../assets/palestrantes/palestrante1.jpg';
// import palestrante2 from '../../../../assets/palestrantes/palestrante2.jpg';
// import palestrante3 from '../../../../assets/palestrantes/palestrante3.jpg';

export default function SpeakersGDGBHMeet2() {
    const speakers = [
        // Descomentar e atualizar com os dados dos palestrantes quando disponíveis
        // {
        //     photoUrl: palestrante1,
        //     name: 'Nome do Palestrante 1',
        //     role: 'Cargo',
        //     description: 'Empresa',
        //     links: { linkedin: 'https://www.linkedin.com/in/palestrante1/' },
        // },
        // {
        //     photoUrl: palestrante2,
        //     name: 'Nome do Palestrante 2',
        //     role: 'Cargo',
        //     description: 'Empresa',
        //     links: { linkedin: 'https://www.linkedin.com/in/palestrante2/' },
        // },
        // {
        //     photoUrl: palestrante3,
        //     name: 'Nome do Palestrante 3',
        //     role: 'Cargo',
        //     description: 'Empresa',
        //     links: { linkedin: 'https://www.linkedin.com/in/palestrante3/' },
        // },
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
