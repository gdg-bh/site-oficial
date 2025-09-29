import { useEffect, useRef, useState } from 'react';

interface SliderProps {
    children: any;
}

export default function ContinuousSlider({ children }: SliderProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollWidth, setScrollWidth] = useState(0);
    const [duration, setDuration] = useState(40);
    const [repeatCount, setRepeatCount] = useState(2);

    useEffect(() => {
        if (containerRef.current) {
            setScrollWidth(containerRef.current.scrollWidth / 2);
        }

        const handleResize = () => {
            if (containerRef.current) {
                setScrollWidth(containerRef.current.scrollWidth / 2);
                setDuration(window.innerWidth < 768 ? 20 : 40);

                const containerWidth = containerRef.current.offsetWidth;
                const childWidth = containerRef.current.scrollWidth / 2;
                const count = Math.ceil(containerWidth / childWidth) + 1;
                setRepeatCount(count);
            }
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getRepeatedChildren = () => {
        const childrenArray = Array.isArray(children) ? children : [children];
        let repeated: any[] = [];
        for (let i = 0; i < repeatCount; i++) {
            repeated = repeated.concat(childrenArray);
        }
        return repeated;
    };

    return (
        <div className="overflow-hidden relative w-full">
            <div
                ref={containerRef}
                className="inline-flex"
                style={{
                    minWidth: 'max-content',
                    animation: scrollWidth ? `scroll ${duration}s linear infinite` : 'none',
                }}
            >
                {getRepeatedChildren()}
            </div>

            <style>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-${scrollWidth}px);
                    }
                }
            `}</style>
        </div>
    );
}