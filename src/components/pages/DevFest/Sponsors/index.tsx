import ContinuousSlider from '../../../Common/ContinuousSlider';

import logo1 from '../../../../assets/logos/logo-placeholder.svg';

export default function Sponsors() {
    const images = [logo1, logo1, logo1, logo1, logo1, logo1, logo1];

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
