import Sponsors from '../../components/pages/Home/Sponsors';
import Ideas from '../../components/pages/Home/Ideas';

import heroBG from '../../assets/pages/home/bg.png';
import { Hero } from '../../components/pages/Home/Hero';
import Impact from '../../components/pages/Home/Impact';
import Crew from '../../components/pages/Home/Crew';
import About from '../../components/pages/Home/About';
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
            <Impact />
            <Crew />
            <About />
            {/* <HighlightSection
                title="Save the Date!"
                text="O DevFest 2025 está chegando. Não perca o nosso maior evento do ano!"
                btnText="Saiba mais"
                btnLink="/devfest"
            /> */}
            <Sponsors />
            <Ideas />
        </>
    );
}
