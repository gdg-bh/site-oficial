
import pucminas from '../../../assets/logos/puc-minas.png';
import lucralize from '../../../assets/logos/lucralize.png';
import hotel from '../../../assets/logos/Hotel_Royal_Boutique_Savassi.png';
import strider from '../../../assets/logos/strider.png';
import localiza from '../../../assets/logos/Localiza.png';
import squadra from '../../../assets/logos/squadra.png';


export interface Sponsor {
    image: string;
    url: string;
    name: string;
}


export const sponsors2024: Sponsor[] = [
    {
        image: pucminas,
        url: 'https://www.pucminas.br/',
        name: 'PUC Minas'
    },
    {
        image: lucralize, 
        url: 'https://lucralize.com.br/',
        name: 'Lucralize'
    },
    {
        image: hotel,
        url: 'https://royalhoteis.com.br/royal-collection-savassi/',
        name: 'Hotel Royal Boutique Savassi'
    },
    {
        image: strider,
        url: 'https://www.onstrider.com/',
        name: 'Strider'
    },
    {
        image: localiza,
        url: 'https://localiza-carreiras.webflow.io/',
        name: 'Localiza'
    },
    {
        image: squadra,
        url: 'https://www.squadra.com.br/',
        name: 'Squadra'
    }
];


export const sponsorImages2024 = sponsors2024.map(sponsor => sponsor.image);
export const sponsorUrls2024 = sponsors2024.map(sponsor => sponsor.url);


export const duplicatedImages2024 = [...sponsorImages2024, ...sponsorImages2024];
export const duplicatedUrls2024 = [...sponsorUrls2024, ...sponsorUrls2024];
