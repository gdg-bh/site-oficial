import Sponsors from '../../components/pages/Home/Sponsors';
import Ideas from '../../components/pages/Home/Ideas';

import heroBG from '../../assets/pages/home/bg.png';
import { Hero } from '../../components/pages/Home/Hero';
import Impact from '../../components/pages/Home/Impact';
import Crew from '../../components/pages/Home/Crew';
import About from '../../components/pages/Home/About';
import PastEvents from '../../components/pages/Home/PastEvents';
import { CountdownTimer } from '../../components/pages/DevFest/CountdownTimer';
import HighlightSection from '../../components/Common/HighlightSection';

export function Home() {
    return (
        <>
            <Hero
                title="Google Developer Group"
                location="Belo Horizonte"
                text="Aprenda, conecte-se e evolua com uma comunidade inclusiva de desenvolvedores apaixonados por tecnologia."
                bgImage={heroBG}
            />
            <CountdownTimer targetDateString="2026-05-30T08:30:00-03:00" />
            <Impact />
            <Crew />
            <About />
            <PastEvents />
            <Sponsors />
            <Ideas />
        </>
    );
}
