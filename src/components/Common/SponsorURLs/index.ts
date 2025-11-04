
import pucminas from '../../../assets/logos/puc-minas.png';
import lucralize from '../../../assets/logos/lucralize.png';
import hotel from '../../../assets/logos/Hotel_Royal_Boutique_Savassi.png';
import strider from '../../../assets/logos/strider.png';
import onfly from '../../../assets/logos/Onfly.png';
import localiza from '../../../assets/logos/Localiza.png';
import luza from '../../../assets/logos/luza.png';


export interface Sponsor {
    image: string;
    url: string;
    name: string;
}


export const sponsors: Sponsor[] = [
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
        image: onfly,
        url: 'https://onfly.com.br/',
        name: 'Onfly'
    },
    {
        image: localiza,
        url: 'https://localiza-carreiras.webflow.io/',
        name: 'Localiza'
    },
    {
        image: luza,
        url: 'https://www.luzagroup.com/',
        name: 'Luza'
    }
];


export const sponsorImages = sponsors.map(sponsor => sponsor.image);
export const sponsorUrls = sponsors.map(sponsor => sponsor.url);


export const duplicatedImages = [...sponsorImages, ...sponsorImages];
export const duplicatedUrls = [...sponsorUrls, ...sponsorUrls];