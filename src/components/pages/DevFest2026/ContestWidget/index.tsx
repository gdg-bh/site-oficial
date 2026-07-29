import contestImage from '../../../../assets/pages/devfest2026/widget-concurso-camisa.png';

const contestFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfXhs5O1Wuw4uduwjrhEw5GF_gLbL6vDye53q-ol63j08uedg/viewform';

export default function ContestWidget() {
    return (
        <a
            href={contestFormUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir formulário do concurso de camisas do DevFest 2026"
            className="fixed bottom-3 right-3 z-50 inline-block transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-google-blue focus:ring-offset-2 focus:ring-offset-transparent sm:bottom-4 sm:right-4"
        >
            <img
                src={contestImage}
                alt="Concurso de camisas DevFest BH 2026"
                className="block h-auto w-[100px] object-cover sm:w-[140px] md:w-[180px]"
            />
        </a>
    );
}