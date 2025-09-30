import { Carousel } from '../../../Common/Carousel';
import ProfileCard from '../ProfileCard';

import AlissonRosa from '../../../../assets/palestrantes/Alisson_Rosa.png';
import AnaPaulaBartels from '../../../../assets/palestrantes/Ana_Paula_Bartels.png';
import ArthurCarvalho from '../../../../assets/palestrantes/Arthur_Carvalho.jpeg';
import ArthurDrumond from '../../../../assets/palestrantes/Arthur_Drumond.jpeg';
import ArturBomtempo from '../../../../assets/palestrantes/Artur_Bomtempo.jpeg';
import CamillaMartins from '../../../../assets/palestrantes/Camilla_Martins.jpg';
import DiegoBorgesFerreira from '../../../../assets/palestrantes/Diego_Borges_Ferreira.png';
import DouglasAugustoFerreiraAraujo from '../../../../assets/palestrantes/Douglas_Augusto_Ferreira_Araujo.png';
import ElianaLimadaFonseca from '../../../../assets/palestrantes/Eliana_Lima_da_Fonseca.png';
import FernandaCosta from '../../../../assets/palestrantes/Fernanda_Costa.jpg';
import GabrielNogueira from '../../../../assets/palestrantes/Gabriel_Nogueira.jpeg';
import IzabelaCancado from '../../../../assets/palestrantes/Izabela_Cancado.jpeg';
import JorgeMauroGonçalves from '../../../../assets/palestrantes/Jorge_Mauro_Gonçalves.png';
import JuliaVasconcelos from '../../../../assets/palestrantes/Julia_Vasconcelos.jpg';
import JulianaConde from '../../../../assets/palestrantes/Juliana_Conde.jpg';
import LuizaNaves from '../../../../assets/palestrantes/Luiza_Naves.jpg';
import MarianaMendonca from '../../../../assets/palestrantes/Mariana_Mendonca.jpeg';
import MateusPereira from '../../../../assets/palestrantes/Mateus_Pereira.jpeg';
import NicoleBarra from '../../../../assets/palestrantes/Nicole_Barra.png';
import PedroRosemberg from '../../../../assets/palestrantes/Pedro_Rosemberg.jpeg';
import RafaelRibeiroAndrade from '../../../../assets/palestrantes/Rafael_Ribeiro_Andrade.png';
import RafaelaMarcolino from '../../../../assets/palestrantes/Rafaela_Marcolino.jpg';
import ThaisFalabella from '../../../../assets/palestrantes/Thais_Falabella.png';
import ToshiOssada from '../../../../assets/palestrantes/Toshi_Ossada.png';
import VictorPugliese from '../../../../assets/palestrantes/Victor_Pugliese.jpeg';
import VictoriaBoaventura from '../../../../assets/palestrantes/Victoria_Boaventura.jpg';
import YuriFernandes from '../../../../assets/palestrantes/Yuri_Fernandes.jpeg';

import { SectionTitle } from '../../../Common/SectionTitle';

export default function Speakers() {
    //links: { linkedin: '#', instagram: '#', github: '#' },

    const speakers = [
        {
            photoUrl: AlissonRosa,
            name: 'Alisson Rosa',
            role: 'Engenheiro de Dados',
            description: 'D-Analytics',
            links: { linkedin: 'https://www.linkedin.com/in/alissonrosa/' },
        },
        {
            photoUrl: AnaPaulaBartels,
            name: 'Ana Paula Bartels',
            role: 'Head of Success',
            description: 'Strider',
            links: { linkedin: 'https://www.linkedin.com/in/anapaulabartels/' },
        },
        {
            photoUrl: ArthurCarvalho,
            name: 'Arthur Carvalho',
            role: 'Project Lead',
            description: 'WebTech',
            links: { linkedin: 'https://www.linkedin.com/in/arthurcarvalh0/' },
        },
        {
            photoUrl: ArthurDrumond,
            name: 'Arthur Drumond',
            role: 'Software Engineer',
            description: 'dti digital',
            links: { linkedin: 'https://www.linkedin.com/in/arthur-drumond-52a2812b1/' },
        },
        {
            photoUrl: ArturBomtempo,
            name: 'Artur Bomtempo',
            role: 'Software Developer',
            description: 'dti digital',
            links: { linkedin: 'https://www.linkedin.com/in/artur-bomtempo/' },
        },
        {
            photoUrl: CamillaMartins,
            name: 'Camilla Martins',
            role: 'Specialist Site Realiabitity Engineer',
            description: 'Storyblok',
            links: { linkedin: 'https://www.linkedin.com/in/camilla-martins-603344115/' },
        },
        {
            photoUrl: DiegoBorgesFerreira,
            name: 'Diego Borges',
            role: 'Tech Manager',
            description: 'PicPay',
            links: { linkedin: 'https://www.linkedin.com/in/eudiegoborgs/' },
        },
        {
            photoUrl: DouglasAugustoFerreiraAraujo,
            name: 'Douglas Augusto',
            role: 'Specialist Customer Engineer',
            description: 'Google',
            links: { linkedin: 'https://www.linkedin.com/in/douglasaugusto/' },
        },
        {
            photoUrl: ElianaLimadaFonseca,
            name: 'Eliana Fonseca',
            role: 'Professora',
            description: 'UFRGS',
            links: { linkedin: 'http://www.linkedin.com/in/eliana-lima-da-fonseca-a99930228' },
        },
        {
            photoUrl: FernandaCosta,
            name: 'Fernanda Costa',
            role: 'Engenheira de Software',
            description: 'Nubank',
            links: { linkedin: 'https://www.linkedin.com/in/fernandacosta-tech/' },
        },
        {
            photoUrl: GabrielNogueira,
            name: 'Gabriel Nogueira',
            role: 'Desenvolvedor de Software',
            description: 'WebTech',
            links: { linkedin: 'https://www.linkedin.com/in/gabriel-nogueira-vieira-resende/' },
        },
        {
            photoUrl: IzabelaCancado,
            name: 'Izabela Cançado',
            role: 'Agilista',
            description: 'Arcelor Mittal',
            links: { linkedin: 'https://www.linkedin.com/in/isabela-can%C3%A7ado/' },
        },
        {
            photoUrl: JorgeMauroGonçalves,
            name: 'Jorge Mauro',
            role: 'Software Engineer',
            description: 'Localiza',
            links: { linkedin: 'https://www.linkedin.com/in/jorge-m-goncalves/' },
        },
        {
            photoUrl: JuliaVasconcelos,
            name: 'Julia Vasconcelos',
            role: 'Product Designer',
            description: 'TOTVS',
            links: { linkedin: 'https://www.linkedin.com/in/juvscncls/' },
        },
        {
            photoUrl: JulianaConde,
            name: 'Juliana Conde',
            role: 'Especialista em Treinamento Técnico Corporativo',
            description: 'Matza',
            links: { linkedin: 'https://www.linkedin.com/in/julianaconde/' },
        },
        {
            photoUrl: LuizaNaves,
            name: 'Luiza Naves',
            role: 'Product Manager',
            description: 'Localiza',
            links: { linkedin: 'https://www.linkedin.com/in/luizanaves/' },
        },
        {
            photoUrl: MarianaMendonca,
            name: 'Mariana Mendonça',
            role: 'Desenvolvedora de Software',
            description: 'Origami Lab',
            links: { linkedin: 'https://www.linkedin.com/in/marialmeidam/' },
        },
        {
            photoUrl: MateusPereira,
            name: 'Mateus Pereira',
            role: 'Partner Solutions Architect',
            description: 'AWS',
            links: { linkedin: 'https://www.linkedin.com/in/matgpereira/' },
        },
        {
            photoUrl: NicoleBarra,
            name: 'Nicole Barra',
            role: 'Co-founder & COO',
            description: 'Strider',
            links: { linkedin: 'https://www.linkedin.com/in/nicolebarraconde/' },
        },
        {
            photoUrl: PedroRosemberg,
            name: 'Pedro Rosemberg',
            role: 'Segurança da Informação',
            description: 'Fiemg',
            links: { linkedin: 'https://www.linkedin.com/in/pedrorosemberg/' },
        },
        {
            photoUrl: RafaelRibeiroAndrade,
            name: 'Rafael Andrade',
            role: 'Lead Software Engineer',
            description: 'Strider',
            links: { linkedin: 'https://www.linkedin.com/in/rafaelra/' },
        },
        {
            photoUrl: RafaelaMarcolino,
            name: 'Rafaela Marcolino',
            role: 'Software Engineering Manager',
            description: 'Givisiez',
            links: { linkedin: 'https://www.linkedin.com/in/rafaela-marcolino/' },
        },
        {
            photoUrl: ThaisFalabella,
            name: 'Thais Falabella',
            role: 'Head Product Design',
            description: 'iFood',
            links: { linkedin: 'https://www.linkedin.com/in/thaisfalabella/' },
        },
        {
            photoUrl: ToshiOssada,
            name: 'Toshi Ossada',
            role: 'Lider Técnico',
            description: 'Famácias App',
            links: { linkedin: 'https://www.linkedin.com/in/toshiossada/' },
        },
        {
            photoUrl: VictorPugliese,
            name: 'Victor Pugliese',
            role: 'Google Developer Expert em AI',
            description: '',
            links: { linkedin: 'https://www.linkedin.com/in/victorpug-exe/' },
        },
        {
            photoUrl: VictoriaBoaventura,
            name: 'Victoria Boaventura',
            role: 'Tech Recruiter',
            description: 'Yellow.rec',
            links: { linkedin: 'https://www.linkedin.com/in/victoria-boaventura/' },
        },
        {
            photoUrl: YuriFernandes,
            name: 'Yuri Fernandes',
            role: 'Analista de Dados',
            description: 'Vivo Vita',
            links: { linkedin: 'https://www.linkedin.com/in/yurianalistabi/' },
        },
    ];

    return (
        <section className="bg-[#F7F9FB] py-20 overflow-hidden">
            <SectionTitle highlight="Palestrantes" />
            {/* <p className="mx-auto w-10/12 lg:w-6/12 mb-28 mt-4 md:mt-3 text-center text-subtitle-color font-normal text-base">
                Desenvolvedores apaixonados e construtores de comunidades dedicados a promover o
                crescimento e o compartilhamento de conhecimento.
            </p> */}
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
