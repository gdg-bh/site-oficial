import { SectionTitle } from '../../../Common/SectionTitle';
import { Container } from '../../../Common/Container';
import { Carousel } from '../../../Common/Carousel';
import PastEventCard from '../PastEventCard';

interface PastEvent {
    id: string;
    name: string;
    date: string;
    participants: string;
    description: string;
    highlights: string[];
    link: string;
}

export default function PastEvents() {
    const events: PastEvent[] = [
        {
            id: '3',
            name: 'Build with AI 2026',
            date: 'Mai 2026',
            participants: '50+',
            description: 'O Build With AI 2026 proporcionará aprendizado prático, troca de experiências e oportunidades de networking com IA.',
            highlights: ['1 Palestrante', '3.5 Horas de conteúdo', 'Workshops Práticos', 'Demonstrações ao Vivo'],
            link: '/build-with-ai-2026',
        },
        {
            id: '9',
            name: 'International Women\'s Day 2026',
            date: 'Mar 2026',
            participants: '400+',
            description: 'Evento global exclusivo para o público feminino com foco em desenvolvimento e líderes de tecnologia.',
            highlights: ['6 Palestrantes', '5 Horas de conteúdo', 'Painel com Mulheres Líderes', 'Networking'],
            link: '/iwd-2026',
        },
        {
            id: '10',
            name: 'GDG BH Meet 2',
            date: 'Jan 2026',
            participants: '150+',
            description: 'Segunda edição focada em Segurança da Informação, trazendo conteúdos atuais com palestras, painéis e networking.',
            highlights: ['2 Palestrantes', '3 Horas de conteúdo', 'Café da manhã', 'Networking'],
            link: '/gdg-bh-meet-2',
        },
        {
            id: '1',
            name: 'DevFest 2025',
            date: 'Nov 2025',
            participants: '500',
            description: 'O DevFest é uma conferência anual do GDG que reúne desenvolvedores em um ambiente inclusivo, com palestras, workshops e networking, explorando tecnologias do Google e tendências de mercado.',
            highlights: ['33 Palestrantes', '30 Horas de conteúdo', 'Workshops Práticos', 'Networking'],
            link: '/devfest',
        },
        {
            id: '6',
            name: 'Google I/O Extended 2025',
            date: 'Jul 2025',
            participants: '385',
            description: 'A IA está mudando tudo — da forma como escrevemos código à maneira como idealizamos nossas aplicações.',
            highlights: ['2 Palestrantes', '4 Horas de conteúdo', 'Gemma 3n', 'Keras e JAX'],
            link: '/google-io-extended-2025',
        },
        {
            id: '4',
            name: 'Build with AI 2025',
            date: 'Mar 2025',
            participants: '100+',
            description: 'Descubra como criar soluções inovadoras utilizando as mais recentes ferramentas e modelos de Inteligência Artificial.',
            highlights: ['2 Palestrantes', '4 Horas de conteúdo', 'Demonstrações ao Vivo', 'Especialistas em IA'],
            link: '/build-with-ai-2025',
        },
        {
            id: '2',
            name: 'DevFest 2024',
            date: 'Out 2024',
            participants: '400',
            description: 'Essa edição do DevFest BH trouxe as principais tendências do mercado, com oportunidades de networking conectando a comunidade tech em uma experiência intensa.',
            highlights: ['26 Palestrantes', '28 Horas de conteúdo', 'Palestras Inspiradoras', 'Networking'],
            link: '/devfest-2024',
        },
        {
            id: '7',
            name: 'Google I/O Extended 2024',
            date: 'Jul 2024',
            participants: '190',
            description: 'Trazendo os anúncios e tecnologias do Google I/O diretamente para a comunidade de Belo Horizonte.',
            highlights: ['2 Palestrantes', '4 Horas de conteúdo', 'Inteligência Artificial Generativa', 'Firebase'],
            link: '/google-io-extended-2024',
        },
        {
            id: '11',
            name: 'GDG BH Meet',
            date: 'Jun 2024',
            participants: '208',
            description: 'Encontro dinâmico e criado para promover um espaço acolhedor onde profissionais e entusiastas trocam experiências.',
            highlights: ['3 Palestrantes', '4 Horas de conteúdo', 'Inovação Local', 'Networking'],
            link: '/gdg-bh-meet-1',
        },
        {
            id: '5',
            name: 'Build with AI 2024',
            date: 'Abr 2024',
            participants: '98',
            description: 'Explorando as fundações de IA generativa e como integrá-las em nossos projetos reais.',
            highlights: ['2 Palestrantes', '12 Horas de conteúdo', 'Code Labs', 'Sorteio de Brindes'],
            link: '/build-with-ai-2024',
        },
        {
            id: '8',
            name: 'Google I/O Extended 2023',
            date: 'Jul 2023',
            participants: '184',
            description: 'Trazendo as novidades em tecnologias Web, Mobile, Cloud e IA anunciadas no evento principal.',
            highlights: ['2 Palestrantes', '4 Horas de conteúdo', 'Anúncios do I/O', 'Networking'],
            link: '/google-io-extended-2023',
        },
    ];

    return (
        <section className="bg-[#FFF] py-20 overflow-hidden">
            <Container>
                <SectionTitle text="Eventos" highlight="Passados" />
                <p className="mx-auto w-10/12 lg:w-6/12 mb-12 mt-4 md:mt-3 text-center text-subtitle-color font-normal text-base">
                    Explore nossos eventos anteriores e veja as experiências incríveis que criamos para
                    nossa comunidade
                </p>

                <div className="mt-8">
                    <Carousel count={events.length} viewCount={3}>
                        {events.map((event) => (
                            <PastEventCard key={event.id} card={event} />
                        ))}
                    </Carousel>
                </div>
            </Container>
        </section>
    );
}
