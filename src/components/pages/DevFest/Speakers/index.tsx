import { Carousel } from '../../../Common/Carousel';
import ProfileCard from '../ProfileCard';

import AnaPaulaBartels from '../../../../assets/palestrantes/Ana_Paula_Bartels.png';
import ArthurBomtempo from '../../../../assets/palestrantes/Arthur_Bomtempo.jpeg';
import ArthurCarvalho from '../../../../assets/palestrantes/Arthur_Carvalho.jpeg';
import ArthurDrumond from '../../../../assets/palestrantes/Arthur_Drumond.jpeg';
import CamillaMartins from '../../../../assets/palestrantes/Camilla_Martins.jpg';
import DiegoBorgesFerreira from '../../../../assets/palestrantes/Diego_Borges_Ferreira.png';
import DouglasAugustoFerreiraAraujo from '../../../../assets/palestrantes/Douglas_Augusto_Ferreira_Araujo.png';
import ElianaLimadaFonseca from '../../../../assets/palestrantes/Eliana_Lima_da_Fonseca.png';
import FernandaCosta from '../../../../assets/palestrantes/Fernanda_Costa.jpg';
import JorgeMauroGonçalves from '../../../../assets/palestrantes/Jorge_Mauro_Gonçalves.png';
import JuliaVasconcelos from '../../../../assets/palestrantes/Julia_Vasconcelos.jpg';
import JulianaConde from '../../../../assets/palestrantes/Juliana_Conde.jpg';
import LuizaNaves from '../../../../assets/palestrantes/Luiza_Naves.jpg';
import MarianaMendonca from '../../../../assets/palestrantes/Mariana_Mendonca.jpeg';
import NicoleBarra from '../../../../assets/palestrantes/Nicole_Barra.png';
import PedroRosemberg from '../../../../assets/palestrantes/Pedro_Rosemberg.jpeg';
import RafaelRibeiroAndrade from '../../../../assets/palestrantes/Rafael_Ribeiro_Andrade.png';
import ToshiOssada from '../../../../assets/palestrantes/Toshi_Ossada.png';
import VictorPugliese from '../../../../assets/palestrantes/Victor_Pugliese.jpeg';
import VictoriaBoaventura from '../../../../assets/palestrantes/Victoria_Boaventura.jpg';
import YuriFernandes from '../../../../assets/palestrantes/Yuri_Fernandes.jpeg';

import { SectionTitle } from '../../../Common/SectionTitle';

export default function Speakers() {
    //links: { linkedin: '#', instagram: '#', github: '#' },

    const speakers = [
        {
            photoUrl: AnaPaulaBartels,
            name: 'Ana Paula Bartels',
            role: 'Head of Success at Strider',
            description: 'Mentoria WTM',
            links: { linkedin: 'https://www.linkedin.com/in/anapaulabartels/' },
        },
        {
            photoUrl: ArthurBomtempo,
            name: 'Arthur Bomtempo',
            role: 'Software Developer at dti digital',
            description: 'Docker para iniciantes',
            links: { linkedin: 'https://www.linkedin.com/in/artur-bomtempo/' },
        },
        {
            photoUrl: ArthurCarvalho,
            name: 'Arthur Carvalho',
            role: 'Software Engineer',
            description: 'Arquitetura e Modelagem de Software: O Processo de Decisão por Trás de Sistemas Resilientes',
            links: { linkedin: 'https://www.linkedin.com/in/arthurcarvalh0/' },
        },
        {
            photoUrl: ArthurDrumond,
            name: 'Arthur Drumond',
            role: 'Software Engineer',
            description: 'Arquitetura e Modelagem de Software: O Processo de Decisão por Trás de Sistemas Resilientes',
            links: { linkedin: 'https://www.linkedin.com/in/arthur-drumond-52a2812b1/' },
        },
        {
            photoUrl: CamillaMartins,
            name: 'Camilla Martins',
            role: 'International Speaker',
            description: 'Implement Bulletproof AgentOps',
            links: { linkedin: 'https://www.linkedin.com/in/camilla-martins-603344115/' },
        },
        {
            photoUrl: DiegoBorgesFerreira,
            name: 'Diego Borges',
            role: 'Tech Manager at PicPay',
            description: 'De Dev a Tech Manager: Coisas que aprendi nessa jornada',
            links: { linkedin: 'https://www.linkedin.com/in/eudiegoborgs/' },
        },
        {
            photoUrl: DouglasAugustoFerreiraAraujo,
            name: 'Douglas Augusto',
            role: 'Specialist Customer Engineer',
            description: 'Desenvolvimento de Agents com o ADK',
            links: { linkedin: 'https://www.linkedin.com/in/douglasaugusto/' },
        },
        {
            photoUrl: ElianaLimadaFonseca,
            name: 'Eliana Lima da Fonseca',
            role: 'Full Professor at Universidade Federal do Rio Grande do Sul',
            description: 'Earth Engine no atendimento das emergèncias climáticas',
            links: { linkedin: 'http://www.linkedin.com/in/eliana-lima-da-fonseca-a99930228' },
        },
        {
            photoUrl: FernandaCosta,
            name: 'Fernanda Costa',
            role: 'Software Engineer',
            description: 'Mentoria WTM',
            links: { linkedin: 'https://www.linkedin.com/in/fernandacosta-tech/' },
        },
        {
            photoUrl: JorgeMauroGonçalves,
            name: 'Jorge Mauro Gonçalves',
            role: 'Software Engineer',
            description: 'Generative UI: UIs Dinâmicas e LLMs',
            links: { linkedin: 'https://www.linkedin.com/in/jorge-m-goncalves/' },
        },
        {
            photoUrl: JuliaVasconcelos,
            name: 'Julia Vasconcelos',
            role: 'Product Designer at TOTVS',
            description: 'Storytelling Estratégico: Como mostrar seu trabalho com intenção e gerar impacto',
            links: { linkedin: 'https://www.linkedin.com/in/juvscncls/' },
        },
        {
            photoUrl: JulianaConde,
            name: 'Juliana Conde',
            role: 'Senior Software Engineer',
            description: 'Docker Offload: To the Cloud and Beyond',
            links: { linkedin: 'https://www.linkedin.com/in/julianaconde/' },
        },
        {
            photoUrl: LuizaNaves,
            name: 'Luiza Naves',
            role: 'Principal Product Manager',
            description: 'Mentoria WTM',
            links: { linkedin: 'https://www.linkedin.com/in/luizanaves/' },
        },
        {
            photoUrl: MarianaMendonca,
            name: 'Mariana Almeida',
            role: 'Software Developer',
            description: 'Arquitetura Frontend Moderna: Sistemas Clean, Escaláveis e Sólidos',
            links: { linkedin: 'https://www.linkedin.com/in/marialmeidam/' },
        },
        {
            photoUrl: NicoleBarra,
            name: 'Nicole Barra',
            role: 'Co-founder at Strider',
            description: 'Work-life Balance em Carreiras Globais',
            links: { linkedin: 'https://www.linkedin.com/in/nicolebarraconde/' },
        },
        {
            photoUrl: PedroRosemberg,
            name: 'Pedro Rosemberg',
            role: 'DevSecOps',
            description: 'A Mentalidade do desenvolvedor Secure-First',
            links: { linkedin: 'https://www.linkedin.com/in/pedrorosemberg/' },
        },
        {
            photoUrl: RafaelRibeiroAndrade,
            name: 'Rafael Andrade',
            role: 'Lead Founding Engineer',
            description: 'Testes técnicos sem mistério: o guia para se destacar',
            links: { linkedin: 'https://www.linkedin.com/in/rafaelra/' },
        },
        {
            photoUrl: ToshiOssada,
            name: 'Toshi Ossada',
            role: 'Google Developer Expert',
            description: 'Vamos falar de Inteligência Artificial? Desenvolvendo Apps Inteligentes com Flutter e Gemini',
            links: { linkedin: 'https://www.linkedin.com/in/toshiossada/' },
        },
        {
            photoUrl: VictorPugliese,
            name: 'Victor Pugliese',
            role: 'Google Developer Expert',
            description: 'A Era Gemma: Desvendando a Família de Modelos Abertos do Google',
            links: { linkedin: 'https://www.linkedin.com/in/victorpug-exe/' },
        },
        {
            photoUrl: VictoriaBoaventura,
            name: 'Victoria Boaventura',
            role: 'Tech Recruiter',
            description: 'Tenha o Linkedin como seu aliado para se destacar no mercado de trabalho',
            links: { linkedin: 'https://www.linkedin.com/in/victoria-boaventura/' },
        },
        {
            photoUrl: YuriFernandes,
            name: 'Yuri Fernandes',
            role: 'Analista e Engenheiro de Dados',
            description: 'Por dentro da Análise de Dados: o divertido, o difícil e o essencial',
            links: { linkedin: 'https://www.linkedin.com/in/yurianalistabi/' },
        },
    ];

    return (
        <section className="bg-[#F7F9FB] py-20 overflow-hidden">
            <SectionTitle highlight="Palestrantes" />
            <p className="mx-auto w-10/12 lg:w-6/12 mb-28 mt-4 md:mt-3 text-center text-subtitle-color font-normal text-base">
                Desenvolvedores apaixonados e construtores de comunidades dedicados a promover o
                crescimento e o compartilhamento de conhecimento.
            </p>
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
        </section>
    );
}
