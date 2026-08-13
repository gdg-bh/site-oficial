import ContinuousSlider from '../../../Common/ContinuousSlider';
import { SectionTitle } from '../../../Common/SectionTitle';
import onfly from '../../../../assets/logos/Onfly.png';
import framework from '../../../../assets/logos/framework.png';
import casadocodigo from '../../../../assets/logos/casa_do_codigo.png';
import lucralize from '../../../../assets/logos/lucralize.png';
import royalCenter from '../../../../assets/logos/Hotel_Royal_Boutique_Savassi.png';

export default function Sponsors2026() {
    const sponsors = [
        { image: onfly, url: 'https://onfly.com.br/' },
        { image: framework, url: 'https://framework.com.br/' },
        { image: casadocodigo, url: 'https://casadocodigo.com.br/' },
        { image: lucralize, url: 'https://lucralize.com/' },
        { image: royalCenter, url: 'https://book.omnibees.com/hotelresults?c=1676&q=5733&hotel_folder=&NRooms=1&CheckIn=30102026&CheckOut=02112026&ad=1&ch=0&ag=&Code=devfestbh&lang=pt-BR&currencyId=16&version=4' }
    ];
    const images = sponsors.map(s => s.image);
    const urls = sponsors.map(s => s.url);
    const duplicatedImages2026 = [...images, ...images, ...images, ...images, ...images];
    const duplicatedUrls2026 = [...urls, ...urls, ...urls, ...urls, ...urls];

    return (
        <>
            <section className="bg-[#F7F9FB] py-20 overflow-hidden">
                <SectionTitle highlight="Patrocinadores" />
                <p className="mx-auto w-10/12 lg:w-6/12 mb-16 mt-4 md:mt-3 text-center text-subtitle-color font-normal text-base">
                    {/*
                    Temos orgulho de fazer parceria com líderes do setor que compartilham nossa
                    visão de promover o crescimento dos desenvolvedores
                    */}
                </p>
                <ContinuousSlider>
                    {duplicatedImages2026.map((src, idx) => (
                        <a
                            key={idx}
                            href={duplicatedUrls2026[idx]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mx-6 flex-shrink-0 transition-transform duration-200 hover:scale-105"
                        >
                            <img
                                src={src}
                                alt={`Patrocinador ${idx + 1}`}
                                className="w-48 h-32 object-contain"
                            />
                        </a>
                    ))}
                </ContinuousSlider>
            </section>
        </>
    );
}


