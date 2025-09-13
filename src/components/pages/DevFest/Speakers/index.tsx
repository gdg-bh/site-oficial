import { Carousel } from '../../../Common/Carousel';
import ProfileCard from '../ProfileCard';

export default function Speakers() {
    const speakers = [
        {
            photoUrl: 'https://randomuser.me/api/portraits/men/11.jpg',
            name: 'Paulo Silva',
            role: 'Frontend Engineer',
            description: 'Apaixonado por interfaces e performance.',
            links: { linkedin: '#', instagram: '#', github: '#' },
        },
        {
            photoUrl: 'https://randomuser.me/api/portraits/women/21.jpg',
            name: 'Ana Costa',
            role: 'UX Designer',
            description: 'Curiosa por design centrado no usuário e acessibilidade.',
            links: { linkedin: '#', instagram: '#', github: '#' },
        },
        {
            photoUrl: 'https://randomuser.me/api/portraits/men/31.jpg',
            name: 'Rafael Mendes',
            role: 'DevOps Engineer',
            description: 'Focado em automação, CI/CD e cloud-native.',
            links: { linkedin: '#', instagram: '#', github: '#' },
        },
        {
            photoUrl: 'https://randomuser.me/api/portraits/women/41.jpg',
            name: 'Juliana Rocha',
            role: 'Data Scientist',
            description: 'Apaixonada por dados, estatística e machine learning.',
            links: { linkedin: '#', instagram: '#', github: '#' },
        },
        {
            photoUrl: 'https://randomuser.me/api/portraits/men/51.jpg',
            name: 'Lucas Almeida',
            role: 'Mobile Developer',
            description: 'Desenvolvedor React Native e entusiasta de apps.',
            links: { linkedin: '#', instagram: '#', github: '#' },
        },
        {
            photoUrl: 'https://randomuser.me/api/portraits/women/61.jpg',
            name: 'Fernanda Lima',
            role: 'Product Manager',
            description: 'Construindo pontes entre times e entregando valor.',
            links: { linkedin: '#', instagram: '#', github: '#' },
        },
        {
            photoUrl: 'https://randomuser.me/api/portraits/men/71.jpg',
            name: 'Gustavo Torres',
            role: 'Backend Developer',
            description: 'Amante de APIs escaláveis e arquitetura limpa.',
            links: { linkedin: '#', instagram: '#', github: '#' },
        },
        {
            photoUrl: 'https://randomuser.me/api/portraits/women/81.jpg',
            name: 'Mariana Oliveira',
            role: 'Fullstack Developer',
            description: 'Transita entre frontend e backend com paixão.',
            links: { linkedin: '#', instagram: '#', github: '#' },
        },
        {
            photoUrl: 'https://randomuser.me/api/portraits/men/91.jpg',
            name: 'André Barbosa',
            role: 'Game Developer',
            description: 'Criador de experiências interativas e engines customizadas.',
            links: { linkedin: '#', instagram: '#', github: '#' },
        },
        {
            photoUrl: 'https://randomuser.me/api/portraits/women/50.jpg',
            name: 'Camila Ferreira',
            role: 'AI Researcher',
            description: 'Pesquisando novas aplicações para inteligência artificial.',
            links: { linkedin: '#', instagram: '#', github: '#' },
        },
    ];

    return (
        <Carousel count={speakers.length}>
            {speakers.map((card, index) => (
                <ProfileCard
                    key={index}
                    photoUrl={card.photoUrl}
                    name={card.name}
                    role={card.role}
                    description={card.description}
                    links={card.links}
                />
            ))}
        </Carousel>
    );
}
