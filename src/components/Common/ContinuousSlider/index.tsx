import { useEffect, useRef, useState } from 'react';

export default function ContinuousSlider(props) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollWidth, setScrollWidth] = useState(0);
    const [duration, setDuration] = useState(40);

    useEffect(() => {
        if (containerRef.current) {
            setScrollWidth(containerRef.current.scrollWidth / 2);
        }

        const handleResize = () => {
            if (containerRef.current) {
                setScrollWidth(containerRef.current.scrollWidth / 2);
                setDuration(window.innerWidth < 768 ? 20 : 40);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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
                {props.children}
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
