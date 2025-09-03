import { Hero } from '../../components/Common/Hero';
import devfestBg from '../../assets/pages/devfest/bg.png';
import { CountdownTimer } from '../../components/pages/DevFest/CountdownTimer';

export function DevFest() {
    return (
        <>
            <Hero title="DevFest 2025" location="Belo Horizonte" bgImage={devfestBg} />
            <CountdownTimer />
        </>
    );
}
