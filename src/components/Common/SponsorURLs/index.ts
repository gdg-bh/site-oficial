
import pucminas from '../../../assets/logos/puc-minas.png';
import lucralize from '../../../assets/logos/lucralize.png';
import hotel from '../../../assets/logos/Hotel_Royal_Boutique_Savassi.png';
import strider from '../../../assets/logos/strider.png';


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
        url: 'https://royalhoteis.com.br/royal-savassi-boutique/',
        name: 'Hotel Royal Boutique Savassi'
    },
    {
        image: strider,
        url: 'https://www.onstrider.com/',
        name: 'Strider'
    }
];


export const sponsorImages = sponsors.map(sponsor => sponsor.image);
export const sponsorUrls = sponsors.map(sponsor => sponsor.url);


export const duplicatedImages = [...sponsorImages, ...sponsorImages];
export const duplicatedUrls = [...sponsorUrls, ...sponsorUrls];