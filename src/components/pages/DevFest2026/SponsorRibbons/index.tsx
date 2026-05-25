import React from 'react';

export default function SponsorRibbons() {
    const textPattern = Array(20).fill("SEJA PATROCINADOR • ").join("");

    return (
        <section className="relative w-full h-[200px] md:h-[300px] overflow-hidden bg-white mt-10 md:mt-0 flex items-center justify-center">
            
            <style>{`
                @keyframes slide-left {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes slide-right {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
                .animate-slide-left {
                    animation: slide-left 30s linear infinite;
                    white-space: nowrap;
                    display: inline-block;
                }
                .animate-slide-right {
                    animation: slide-right 30s linear infinite;
                    white-space: nowrap;
                    display: inline-block;
                }
            `}</style>

            {/* Ribbon 1 - Slanted top-left to bottom-right */}
            <div className="absolute w-[150%] max-w-[200vw] h-12 bg-google-blue transform rotate-[3deg] shadow-lg flex items-center z-10">
                <div className="animate-slide-left text-white font-bold tracking-wider text-xl">
                    {textPattern}
                </div>
            </div>

            {/* Ribbon 2 - Slanted bottom-left to top-right */}
            <div className="absolute w-[150%] max-w-[200vw] h-12 bg-[#2D9CA1] transform -rotate-[3deg] shadow-lg flex items-center z-0">
                <div className="animate-slide-right text-white font-bold tracking-wider text-xl">
                    {textPattern}
                </div>
            </div>
            
        </section>
    );
}