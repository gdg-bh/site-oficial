import { InfiniteCarousel } from '../../../Common/InfiniteCarousel';
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
import MarianaAlmeida from '../../../../assets/palestrantes/Mariana_Almeida.jpeg';
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
    //exemplo de links: { linkedin: '#', instagram: '#', github: '#', post: '#' },

    const speakers = [
        {
            photoUrl: AlissonRosa,
            name: 'Alisson Rosa',
            role: 'Engenheiro de Dados',
            description: 'D-Analytics',
            links: { linkedin: 'https://www.linkedin.com/in/alissonrosa/', post: 'https://www.linkedin.com/posts/gdg-bh_devfestbh-gdgbh-devfest-activity-7386434431986655232-zT0K' },
        },
        {
            photoUrl: AnaPaulaBartels,
            name: 'Ana Paula Bartels',
            role: 'Head of Success',
            description: 'Strider',
            links: { linkedin: 'https://www.linkedin.com/in/anapaulabartels/', post: 'https://www.linkedin.com/posts/gdg-bh_devfestbh-gdgbh-devfest-activity-7384181350305775617-KcWi' },
        },
        {
            photoUrl: ArthurCarvalho,
            name: 'Arthur Carvalho',
            role: 'Software Developer',
            description: 'Hotmart',
            links: { linkedin: 'https://www.linkedin.com/in/arthurcarvalh0/', post: 'https://www.linkedin.com/posts/gdg-bh_devfestbh-gdgbh-devfest-activity-7387142458976968705-gTi6' },
        },
        {
            photoUrl: ArthurDrumond,
            name: 'Arthur Drumond',
            role: 'Software Engineer',
            description: 'dti digital',
            links: { linkedin: 'https://www.linkedin.com/in/arthur-drumond-52a2812b1/', post: 'https://www.linkedin.com/posts/gdg-bh_devfestbh-gdgbh-devfest-activity-7387142458976968705-gTi6' },
        },
        {
            photoUrl: ArturBomtempo,
            name: 'Artur Bomtempo',
            role: 'Software Developer',
            description: 'dti digital',
            links: { linkedin: 'https://www.linkedin.com/in/artur-bomtempo/', post: 'https://www.linkedin.com/posts/gdg-bh_devfestbh-gdgbh-devfest-activity-7384904217540313088-enKk' },
        },
        {
            photoUrl: CamillaMartins,
            name: 'Camilla Martins',
            role: 'Specialist Site Realiabitity Engineer',
            description: 'Storyblok',
            links: { linkedin: 'https://www.linkedin.com/in/camilla-martins-603344115/', post: 'https://www.linkedin.com/posts/gdg-bh_devfestbh-gdgbh-devfest-activity-7379099955552137216-1SO4' },
        },
        {
            photoUrl: DiegoBorgesFerreira,
            name: 'Diego Borges',
            role: 'Tech Manager',
            description: 'PicPay',
            links: { linkedin: 'https://www.linkedin.com/in/eudiegoborgs/', post: 'https://www.linkedin.com/posts/gdg-bh_devfestbh-gdgbh-devfest-activity-7387090285232726017-wnYY' },
        },
        {
            photoUrl: DouglasAugustoFerreiraAraujo,
            name: 'Douglas Augusto',
            role: 'Specialist Customer Engineer',
            description: 'Google',
            links: { linkedin: 'https://www.linkedin.com/in/douglasaugusto/', post: 'https://www.linkedin.com/posts/gdg-bh_devfestbh-gdgbh-devfest-activity-7382348118618603520-Wa25' },
        },
        {
            photoUrl: ElianaLimadaFonseca,
            name: 'Eliana Fonseca',
            role: 'Professora',
            description: 'UFRGS',
            links: { linkedin: 'http://www.linkedin.com/in/eliana-lima-da-fonseca-a99930228', post: 'https://www.linkedin.com/posts/gdg-bh_devfestbh-gdgbh-devfest-activity-7378750423010119680-mA81/' },
        },
        {
            photoUrl: FernandaCosta,
            name: 'Fernanda Costa',
            role: 'Engenheira de Software',
            description: 'Nubank',
            links: { linkedin: 'https://www.linkedin.com/in/fernandacosta-tech/', post: 'https://www.linkedin.com/posts/gdg-bh_devfestbh-gdgbh-devfest-activity-7384999450273824768-Z7dG' },
        },
        {
            photoUrl: GabrielNogueira,
            name: 'Gabriel Nogueira',
            role: 'Sotware Engineer Intern',
            description: 'WebTech',
            links: { linkedin: 'https://www.linkedin.com/in/gabriel-nogueira-vieira-resende/', post: 'https://www.linkedin.com/posts/gdg-bh_devfestbh-gdgbh-devfest-activity-7384904217540313088-enKk' },
        },
        {
            photoUrl: IzabelaCancado,
            name: 'Izabela Cançado',
            role: 'Agilista',
            description: 'Arcelor Mittal',
            links: { linkedin: 'https://www.linkedin.com/in/isabela-can%C3%A7ado/', post: 'https://www.linkedin.com/posts/gdg-bh_devfestbh-gdgbh-devfest-activity-7386814440018628608-4NSQ' },
        },
        {
            photoUrl: JorgeMauroGonçalves,
            name: 'Jorge Mauro',
            role: 'Software Engineer',
            description: 'Localiza',
            links: { linkedin: 'https://www.linkedin.com/in/jorge-m-goncalves/', post: 'https://www.linkedin.com/posts/gdg-bh_devfestbh-gdgbh-devfest-activity-7383813070432792576-Cyjn' },
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
            links: { linkedin: 'https://www.linkedin.com/in/luizanaves/', post: 'https://www.linkedin.com/posts/gdg-bh_devfestbh-gdgbh-devfest-activity-7387507679423983617-mZkp' },
        },
        {
            photoUrl: MarianaAlmeida,
            name: 'Mariana Almeida',
            role: 'Desenvolvedora de Software',
            description: 'Origami Lab',
            links: { linkedin: 'https://www.linkedin.com/in/marialmeidam/', post: 'https://www.linkedin.com/posts/gdg-bh_devfestbh-gdgbh-devfest-activity-7381351272718823424-poOS' },
        },
        {
            photoUrl: MateusPereira,
            name: 'Mateus Pereira',
            role: 'Partner Solutions Architect',
            description: 'AWS',
            links: { linkedin: 'https://www.linkedin.com/in/matgpereira/', post:'https://www.linkedin.com/posts/gdg-bh_devfestbh-gdgbh-devfest-activity-7381270937167527936-z-iG' },
        },
        {
            photoUrl: NicoleBarra,
            name: 'Nicole Barra',
            role: 'Co-founder & COO',
            description: 'Strider',
            links: { linkedin: 'https://www.linkedin.com/in/nicolebarraconde/', post: 'https://www.linkedin.com/posts/gdg-bh_devfestbh-gdgbh-devfest-activity-7386350713859129344-IutT' },
        },
        {
            photoUrl: PedroRosemberg,
            name: 'Pedro Rosemberg',
            role: 'Segurança da Informação',
            description: 'Fiemg',
            links: { linkedin: 'https://www.linkedin.com/in/pedrorosemberg/', post: 'https://www.linkedin.com/posts/gdg-bh_devfestbh-gdgbh-devfest-activity-7383883785957744641-G_s-' },
        },
        {
            photoUrl: RafaelRibeiroAndrade,
            name: 'Rafael Andrade',
            role: 'Lead Software Engineer',
            description: 'Strider',
            links: { linkedin: 'https://www.linkedin.com/in/rafaelra/', post: 'https://www.linkedin.com/posts/gdg-bh_devfestbh-gdgbh-devfest-activity-7379476262395842560-EMHP' },
        },
        {
            photoUrl: RafaelaMarcolino,
            name: 'Rafaela Marcolino',
            role: 'Tech Lead',
            description: 'ThoughtWorks',
            links: { linkedin: 'https://www.linkedin.com/in/rafaela-marcolino/', post: 'https://www.linkedin.com/posts/gdg-bh_devfestbh-gdgbh-devfest-activity-7382439878560473088-44Mm' },
        },
        {
            photoUrl: ThaisFalabella,
            name: 'Thais Falabella',
            role: 'Head Product Design',
            description: 'iFood',
            links: { linkedin: 'https://www.linkedin.com/in/thaisfalabella/', post: 'https://www.linkedin.com/posts/gdg-bh_devfestbh-gdgbh-devfest-activity-7386714641290133505-NmfB' },
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
            links: { linkedin: 'https://www.linkedin.com/in/victorpug-exe/', post:'https://www.linkedin.com/posts/gdg-bh_devfestbh-gdgbh-devfest-activity-7387441967300784129-HtWN' },
        },
        {
            photoUrl: VictoriaBoaventura,
            name: 'Victoria Boaventura',
            role: 'Tech Recruiter',
            description: 'Yellow.rec',
            links: { linkedin: 'https://www.linkedin.com/in/victoria-boaventura/', post: 'https://www.linkedin.com/posts/gdg-bh_devfestbh-gdgbh-devfest-activity-7384268907810914304-w38o' },
        },
        {
            photoUrl: YuriFernandes,
            name: 'Yuri Fernandes',
            role: 'Analista de Dados',
            description: 'Vivo Vita',
            links: { linkedin: 'https://www.linkedin.com/in/yurianalistabi/', post: 'https://www.linkedin.com/posts/gdg-bh_devfestbh-gdgbh-devfest-activity-7382015307407769600-Aa-e' },
        },
    ];

    return (
        <section className="bg-[#F7F9FB] py-20 overflow-hidden">
            <SectionTitle highlight="Palestrantes" />
            <div className="mb-24 md:mb-8"></div>
            {/* <p className="mx-auto w-10/12 lg:w-6/12 mb-28 mt-4 md:mt-3 text-center text-subtitle-color font-normal text-base">
                Desenvolvedores apaixonados e construtores de comunidades dedicados a promover o
                crescimento e o compartilhamento de conhecimento.
            </p> */}
            <InfiniteCarousel count={speakers.length}>
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
            </InfiniteCarousel>
        </section>
    );
}
