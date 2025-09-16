import ContinuousSlider from '../../../Common/ContinuousSlider';

import devfest from '../../../../assets/logos/logo-devfest-bh.png';
import lucralize from '../../../../assets/logos/logo-lucralize.png';
import pucminas from '../../../../assets/logos/logo-puc-minas.png';
import wtm from '../../../../assets/logos/logo-wtm-bh.png';

export default function Sponsors() {
    const images = [devfest, wtm, lucralize, pucminas, devfest, wtm, lucralize, pucminas];

    return (
        <ContinuousSlider>
            {images.map((src, idx) => (
                <img
                    key={idx}
                    src={src}
                    alt={`Slide ${idx}`}
                    className="w-48 h-32 object-contain mx-2 flex-shrink-0"
                />
            ))}
        </ContinuousSlider>
    );
}
