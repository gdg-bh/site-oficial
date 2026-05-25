import { Container } from '../../../Common/Container';
import { Users, Zap, Code, Rocket } from 'lucide-react';

export default function SponsorHighlights() {
    const highlights = [
        {
            icon: Users,
            title: 'Comunidade',
            desc: 'Pessoas reais construindo juntas o futuro da tecnologia.'
        },
        {
            icon: Zap,
            title: 'Conexão',
            desc: 'Workshops, palestras e eventos de networking.'
        },
        {
            icon: Code,
            title: 'Tecnologia',
            desc: 'Apoiando o crescimento da nossa comunidade.'
        },
        {
            icon: Rocket,
            title: 'Impacto',
            desc: 'Conhecimento que transforma carreiras, produtos e o ecossistema BH.'
        }
    ];

    return (
        <section className="bg-white py-24 object-hidden z-20 relative">
            <Container>
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-gray-800 tracking-tight">
                        Sua marca no centro da <span className="text-google-blue font-bold">COMUNIDADE TECH.</span>
                    </h2>
                    <p className="text-gray-500 text-lg md:text-xl font-normal">
                        Grandioso de verdade! A edição 2026 será a maior da história do DevFest BH.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {highlights.map((item, idx) => (
                        <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
                            <span className="p-3 bg-blue-50 text-google-blue rounded-xl flex items-center justify-center w-12 h-12 mb-6">
                                <item.icon className="w-6 h-6" />
                            </span>
                            <h3 className="font-semibold text-2xl text-gray-800 mb-3 block">
                                {item.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}