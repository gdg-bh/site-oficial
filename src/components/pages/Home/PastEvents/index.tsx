import { SectionTitle } from '../../../Common/SectionTitle';
import { Container } from '../../../Common/Container';

interface PastEvent {
    id: string;
    name: string;
    year: string;
    link: string;
}

export default function PastEvents() {
    const events: PastEvent[] = [
        {
            id: '1',
            name: 'GDG BH Meet',
            year: '2024',
            link: '/gdg-bh-meet-2024',
        },
        // Adicione mais eventos aqui conforme necessário
    ];

    return (
        <section className="bg-[#FFF] py-20">
            <Container>
                <SectionTitle text="Eventos" highlight="Passados" />
                <p className="mx-auto w-10/12 lg:w-6/12 mb-12 mt-4 md:mt-3 text-center text-subtitle-color font-normal text-base">
                    Explore nossos eventos anteriores e veja as experiências incríveis que criamos para
                    nossa comunidade.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {events.map((event) => (
                        <a
                            key={event.id}
                            href={event.link}
                            className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:border-google-blue flex flex-col items-center justify-center text-center min-h-[200px]"
                        >
                            <h3 className="font-semibold text-2xl text-gray-800 mb-2 group-hover:text-google-blue transition-colors">
                                {event.name}
                            </h3>
                            <span className="text-google-blue font-medium text-xl">
                                {event.year}
                            </span>
                        </a>
                    ))}
                </div>
            </Container>
        </section>
    );
}
