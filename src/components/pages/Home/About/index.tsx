import { SectionTitle } from '../../../Common/SectionTitle';

export default function About() {
    return (
        <section id="about" className="mx-auto w-10/12 lg:w-12/12 bg-white rounded rounded-xl px-3 px-lg-8 py-12 mb-16">
            <SectionTitle text="Sobre o" highlight="GDG" />
            <p className="mx-auto w-12/12 lg:w-6/12 mb-10 mt-4 md:mt-3 text-center text-subtitle-color font-normal text-base">
                Desenvolvedores apaixonados e construtores de comunidades dedicados a promover o
                crescimento e o compartilhamento de conhecimento.
            </p>
            <div className="flex flex-col md:flex-row px-4 md:px-12 gap-8">
                <div className="p-4 flex-1">
                    <h3 className="text-google-blue text-base font-medium">Nossa missão</h3>
                    <p className="text-sm text-gray-600">
                        Os Grupos de Desenvolvedores do Google (GDGs) são organizações voltadas para
                        a comunidade que criam espaços para desenvolvedores aprenderem,
                        compartilharem e se conectarem. Promovemos a inovação por meio da educação,
                        do compartilhamento de conhecimento e do networking.
                    </p>
                </div>
                <div className="p-4 flex-1">
                    <h3 className="text-google-blue text-base font-medium">Nossa missão</h3>
                    <p className="text-sm text-gray-600">
                        Os Grupos de Desenvolvedores do Google (GDGs) são organizações voltadas para
                        a comunidade que criam espaços para desenvolvedores aprenderem,
                        compartilharem e se conectarem. Promovemos a inovação por meio da educação,
                        do compartilhamento de conhecimento e do networking.
                    </p>
                </div>
            </div>
            <div className="cursor-1 text-[#8AB4F8] hidden lg:block">
                <svg
                    version="1.1"
                    width="20"
                    height="20"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <style type="text/css" />
                    <path
                        d="m106.66 8.16c-25.2-19.61-61.93-1.64-61.93 30.29v435.11c0 36.38 45.91 52.34 68.47 23.8l107.21-135.59c8.01-10.13 20.2-16.03 33.11-16.03h175.29c36.54 0 52.4-46.23 23.56-68.66l-345.71-268.92z"
                        className="st0"
                        fill="currentColor"
                    />
                </svg>

                <span className="text-black rounded-tl-sm px-2 py-1 ml-3 mt-1 inline-block rounded-tr-lg rounded-bl-lg rounded-br-lg bg-[#8AB4F8] font-medium">
                    Carreira em Tech
                </span>
            </div>
            <div className="cursor-2 text-[#FBBC04] hidden lg:block">
                <svg
                    version="1.1"
                    width="20"
                    height="20"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <style type="text/css" />
                    <path
                        d="m106.66 8.16c-25.2-19.61-61.93-1.64-61.93 30.29v435.11c0 36.38 45.91 52.34 68.47 23.8l107.21-135.59c8.01-10.13 20.2-16.03 33.11-16.03h175.29c36.54 0 52.4-46.23 23.56-68.66l-345.71-268.92z"
                        className="st0"
                        fill="currentColor"
                    />
                </svg>

                <span className="text-black rounded-tl-sm px-2 py-1 ml-3 mt-1 inline-block rounded-tr-lg rounded-bl-lg rounded-br-lg bg-[#FBBC04] font-medium">
                    Muuuito Networking
                </span>
            </div>
            <div className="cursor-3 text-[#81C995] hidden lg:block">
                <svg
                    version="1.1"
                    width="20"
                    height="20"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <style type="text/css" />
                    <path
                        d="m106.66 8.16c-25.2-19.61-61.93-1.64-61.93 30.29v435.11c0 36.38 45.91 52.34 68.47 23.8l107.21-135.59c8.01-10.13 20.2-16.03 33.11-16.03h175.29c36.54 0 52.4-46.23 23.56-68.66l-345.71-268.92z"
                        className="st0"
                        fill="currentColor"
                    />
                </svg>

                <span className="text-black rounded-tl-sm px-2 py-1 ml-3 mt-1 inline-block rounded-tr-lg rounded-bl-lg rounded-br-lg bg-[#81C995] font-medium">
                    Comunidade
                </span>
            </div>
            <style>
                {`
                .cursor-1 {
                    position: absolute;
                    top: 60px;
                    left: 16px;
                    animation: circular-move-1 10s linear infinite;
                }
                .cursor-2 {
                    position: absolute;
                    top: 48px;
                    right: 16px;
                    animation: circular-move-2 8s linear infinite;
                }
                .cursor-3 {
                    position: absolute;
                    bottom: -45px;
                    left: 60%;
                    animation: circular-move-3 12s linear infinite;
                }
                section {
                    position: relative;
                }
                @keyframes circular-move-1 {
                    0%   { transform: translate(0, 0); }
                    25%  { transform: translate(30px, -30px); }
                    50%  { transform: translate(0px, -60px); }
                    75%  { transform: translate(-30px, -30px); }
                    100% { transform: translate(0, 0); }
                }
                @keyframes circular-move-2 {
                    0%   { transform: translate(0, 0); }
                    25%  { transform: translate(-25px, -25px); }
                    50%  { transform: translate(0px, -50px); }
                    75%  { transform: translate(25px, -25px); }
                    100% { transform: translate(0, 0); }
                }
                @keyframes circular-move-3 {
                    0%   { transform: translate(0, 0); }
                    25%  { transform: translate(20px, -20px); }
                    50%  { transform: translate(0px, -40px); }
                    75%  { transform: translate(-20px, -20px); }
                    100% { transform: translate(0, 0); }
                }
            `}
            </style>
        </section>
    );
}
