import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import arrowRight from '../../../assets/icons/ArrowRightBlue.svg';

type CarouselSlotsProps = {
    count?: number;
    viewCount?: number;
    children?: React.ReactNode;
};

export function Carousel({ count = 5, viewCount = 4, children }: CarouselSlotsProps) {
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

    const prev = () => setIndex((i) => Math.max(0, i - 1));
    const next = () => {
        setIndex((i) => {
            if (windowWidth > 1280) {
                return Math.min(count - viewCount, i + 1);
            }
            if (windowWidth > 980) {
                return Math.min(count - 3, i + 1);
            }
            if (windowWidth > 768) {
                return Math.min(count - 2, i + 1);
            }
            return Math.min(count - 1, i + 1);
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
                <div className="absolute top-[-60px] right-8 xl:right-0 flex items-center gap-6">
                    <button
                        onClick={prev}
                        disabled={index === 0}
                        aria-label="Anterior"
                        className="w-11 h-11 rounded-full bg-white border border-gray-300 hover:bg-white/20 flex items-center justify-center transition-transform hover:scale-[1.15] disabled:scale-100 disabled:opacity-50 disabled:grayscale"
                    >
                        <img src={arrowRight} className="rotate-180" />
                    </button>

                    <button
                        onClick={next}
                        disabled={
                            windowWidth > 1280
                                ? index >= count - viewCount
                                : windowWidth > 980
                                  ? index >= count - 3
                                  : windowWidth > 768
                                    ? index >= count - 2
                                    : index >= count - 1
                        }
                        aria-label="Próximo"
                        className="w-11 h-11 rounded-full bg-white border border-gray-300 hover:bg-white/20 flex items-center justify-center transition-transform hover:scale-[1.15] disabled:scale-100 disabled:opacity-50 disabled:grayscale"
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
                                className={`flex-shrink-0 max-w-[100%] min-w-[280px] xl:basis-1/${viewCount}`}
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
