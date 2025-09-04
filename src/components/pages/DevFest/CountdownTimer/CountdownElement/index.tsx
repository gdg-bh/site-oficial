import { cn } from '../../../../../lib/cn';

interface CountdownElementProps {
    remainingQuantity: string;
    contentType: string;
    bgColor: string;
}

const bgColors: Record<string, string> = {
    'google-blue': 'bg-google-blue',
    'google-red': 'bg-google-red',
    'google-green': 'bg-google-green',
    'google-gold': 'bg-google-gold',
};

export function CountdownElement({
    remainingQuantity,
    contentType,
    bgColor,
}: CountdownElementProps) {
    return (
        <div
            className={cn(
                'w-36 h-28 lg:w-48 lg:h-28 rounded-xl flex flex-col font-mono justify-center items-center gap-2 lg:gap-3 font-medium text-white sm:border',
                bgColors[bgColor]
            )}
        >
            <h1 className="text-2xl lg:text-3xl">{remainingQuantity}</h1>
            <p className="text-base lg:text-lg">{contentType}</p>
        </div>
    );
}
