import { Users, MessageSquare, Clock, MapPin } from 'lucide-react';
import { Container } from '../../../Common/Container';

export default function EventStats() {
    const stats = [
        {
            icon: Users,
            number: '500',
            label: 'Participantes',
        },
        {
            icon: MessageSquare,
            number: '33',
            label: 'Palestrantes',
        },
        {
            icon: Clock,
            number: '30',
            label: 'Horas de conteúdo',
        }

    ];

    return (
        <section className="bg-[#F7F9FB] py-20">
            <Container>
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                        GDG BH Meet <span className="text-google-blue">2024</span>
                    </h2>
                    <p className="text-gray-600 flex items-center justify-center gap-2">
                        <span>📅</span> 08/09/2024
                    </p>
                </div>

                {/* Grid de Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="flex items-center justify-center w-12 h-12 bg-blue-50 rounded-lg mb-4">
                                    <Icon className="w-6 h-6 text-google-blue" />
                                </div>
                                <h3 className="text-3xl font-semibold text-google-blue mb-2">
                                    {stat.number}
                                </h3>
                                <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Sobre o Evento */}
                <div className="bg-blue-50 rounded-2xl p-8 md:p-12">
                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 flex items-center justify-center gap-3">
                        Sobre o evento
                        <span className="text-2xl">🔗</span>
                    </h3>
                    <p className="text-gray-700 text-center leading-relaxed max-w-3xl mx-auto">
                        Nosso maior DevFest até agora! Este ano focamos em Machine Learning e as últimas 
                        novidades em tecnologias do Google Cloud. Com workshops práticos, palestras inspiradoras 
                        e oportunidades únicas de networking, o DevFest 2024 reuniu a comunidade tech de BH 
                        para compartilhar conhecimento e experiências.
                    </p>
                    <div className="flex justify-center mt-8">
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 text-google-blue hover:text-blue-600 font-medium transition-colors duration-200"
                        >
                            Drive de fotos do evento
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    );
}
