import devfestBg from '../../assets/pages/devfest/bg.png';
import { Hero } from '../../components/Common/Hero';
import { PageTitle } from '../../components/Common/PageTitle';
import { CountdownTimer } from '../../components/pages/DevFest/CountdownTimer';

export function DevFest() {
    return (
        <>
            <Hero title="DevFest 2025" location="Belo Horizonte" bgImage={devfestBg} />
            <CountdownTimer />
            <PageTitle text="O que é o" highlight="DevFest" />
        </>
    );
}
