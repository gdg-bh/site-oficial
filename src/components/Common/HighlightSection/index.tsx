interface highlightProps {
    title: string;
    text: string;
    btnText: string;
    btnLink: string;
}

export default function HighlightSection({ title, text, btnText, btnLink }: highlightProps) {
    return (
        <section className="bg-white pb-16">
            <div className="py-10 bg-gradient-to-r from-[#3B87EE] via-[#2FA1AE] to-[#22C261] text-center w-full max-w-7xl  mx-auto rounded-xl text-white">
                <h1 className="font-semibold text-3xl text-center mb-5">{title}</h1>
                <p className="font-normal text-lg w-4/5 md:w-1/2 mx-auto mb-8">{text}</p>
                <a
                    href={btnLink}
                    className="bg-white hover:bg-grey outline-none text-black px-6 py-3 rounded-lg font-normal transition-colors duration-200 shadow-soft cursor-pointer"
                >
                    {btnText}
                </a>
            </div>
        </section>
    );
}
