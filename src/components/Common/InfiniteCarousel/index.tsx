import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import arrowRight from '../../../assets/icons/ArrowRightBlue.svg';

type InfiniteCarouselProps = {
    count?: number;
    viewCount?: number;
    children?: React.ReactNode;
};

export function InfiniteCarousel({ count = 5, viewCount = 4, children }: InfiniteCarouselProps) {
    const getInitialIndex = () => {
        return 1;
    };

    const [index, setIndex] = useState<number>(getInitialIndex());
    const [isResetting, setIsResetting] = useState<boolean>(false);

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

    useEffect(() => {
        if (index <= -count) {
            setIsResetting(true);
            setTimeout(() => {
                setIndex(0);
                setIsResetting(false);
            }, 50);
        }
        else if (index >= count * 2) {
            setIsResetting(true);
            setTimeout(() => {
                setIndex(count);
                setIsResetting(false);
            }, 50);
        }
    }, [index, count]);



    const prev = () => {
        setIndex((i) => i - 1);
    };

    const next = () => {
        setIndex((i) => i + 1);
    };

    const childArray = React.Children.toArray(children);
    const duplicatedArray = [...childArray, ...childArray, ...childArray];
    
    const adjustedIndex = index + count;
    const x = -(adjustedIndex * slotWidth);

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
                        transition={
                            isResetting 
                                ? { duration: 0 }
                                : { type: 'spring', stiffness: 220, damping: 30 }
                        }
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        {duplicatedArray.map((child, i) => (
                            <div
                                key={`carousel-${Date.now()}-${i}-${Math.random()}`}
                                className={`flex-shrink-0 max-w-[100%] min-w-[280px]`}
                                style={{ flexBasis: `${100 / viewCount}%` }}
                                tabIndex={0}
                                onKeyDown={handleKeyDown}
                                ref={
                                    i === count
                                        ? (el) => {
                                              slotRef.current = el;
                                              if (carouselRef.current === null)
                                                  carouselRef.current = el;
                                          }
                                        : null
                                }
                            >
                                {child}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}