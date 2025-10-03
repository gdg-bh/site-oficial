import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import arrowRight from '../../../assets/icons/ArrowRightBlue.svg';

type InfiniteCarouselProps = {
    count?: number;
    viewCount?: number;
    children?: React.ReactNode;
};

export function InfiniteCarousel({ count = 5, viewCount = 4, children }: InfiniteCarouselProps) {
    const [index, setIndex] = useState<number>(0);

    const slotRef = useRef<HTMLDivElement | null>(null);
    const carouselRef = useRef<HTMLDivElement | null>(null);
    const [slotWidth, setSlotWidth] = useState<number>(300);
    const [windowWidth, setWindowWidth] = useState<number>(
        typeof window !== 'undefined' ? window.innerWidth : 0
    );
    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);

    useEffect(() => {
        const measure = () => {
            const width = slotRef.current?.offsetWidth ?? 0;
            setSlotWidth(width + 16);
            setWindowWidth(window.innerWidth);
        };

        if (typeof window === 'undefined') return;

        measure();
        window.addEventListener('resize', measure);
        return () => window.removeEventListener('resize', measure);
    }, []);



    // Função de navegação infinita para a esquerda
    const prev = () => {
        setIndex((i) => {
            // Se estiver no início, vai para o final
            if (i <= 0) {
                if (windowWidth > 1280) {
                    return Math.max(0, count - viewCount);
                }
                if (windowWidth > 980) {
                    return Math.max(0, count - 3);
                }
                if (windowWidth > 768) {
                    return Math.max(0, count - 2);
                }
                return Math.max(0, count - 1);
            }
            return i - 1;
        });
    };

    // Função de navegação infinita para a direita
    const next = () => {
        setIndex((i) => {
            let maxIndex;
            if (windowWidth > 1280) {
                maxIndex = Math.max(0, count - viewCount);
            } else if (windowWidth > 980) {
                maxIndex = Math.max(0, count - 3);
            } else if (windowWidth > 768) {
                maxIndex = Math.max(0, count - 2);
            } else {
                maxIndex = Math.max(0, count - 1);
            }

            const nextIndex = i + 1;
            // Se o próximo índice ultrapassar o máximo, volta para o início
            if (nextIndex > maxIndex) {
                return 0;
            }
            return nextIndex;
        });
    };

    const x = -(index * slotWidth);
    const childArray = React.Children.toArray(children);

    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent<HTMLDivElement>) => {
            if (e.key === 'ArrowLeft') {
                prev();
            } else if (e.key === 'ArrowRight') {
                next();
            }
        },
        [next, prev]
    );

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (touchStartX.current !== null && touchEndX.current !== null) {
            const delta = touchStartX.current - touchEndX.current;
            if (Math.abs(delta) > 50) {
                if (delta > 0) {
                    next();
                } else {
                    prev();
                }
            }
        }
        touchStartX.current = null;
        touchEndX.current = null;
    };

    return (
        <div className="relative w-full max-w-7xl mx-auto">
            <div className="relative p-4">
                <div
                    className="absolute top-[-60px] right-8 xl:right-0 flex items-center gap-6"
                    style={
                        windowWidth > 1200 && count <= viewCount && index == 0
                            ? { display: 'none' }
                            : {}
                    }
                >
                    <button
                        onClick={prev}
                        aria-label="Anterior"
                        className="w-11 h-11 rounded-full bg-white border border-gray-300 hover:bg-white/20 flex items-center justify-center transition-transform hover:scale-[1.15]"
                    >
                        <img src={arrowRight} className="rotate-180" />
                    </button>

                    <button
                        onClick={next}
                        aria-label="Próximo"
                        className="w-11 h-11 rounded-full bg-white border border-gray-300 hover:bg-white/20 flex items-center justify-center transition-transform hover:scale-[1.15]"
                    >
                        <img src={arrowRight} />
                    </button>
                </div>

                <div>
                    <motion.div
                        className="flex gap-4 pr-10"
                        animate={{ x }}
                        transition={{ type: 'spring', stiffness: 220, damping: 30 }}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        {Array.from({ length: count }).map((_, i) => (
                            <div
                                key={i}
                                className={`flex-shrink-0 max-w-[100%] min-w-[280px]`}
                                style={{ flexBasis: `${100 / viewCount}%` }}
                                tabIndex={0}
                                onKeyDown={handleKeyDown}
                                ref={
                                    i === 0
                                        ? (el) => {
                                              slotRef.current = el;
                                              if (carouselRef.current === null)
                                                  carouselRef.current = el;
                                          }
                                        : null
                                }
                            >
                                {childArray[i] ?? null}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}