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
                'w-56 h-36 rounded-xl flex flex-col font-mono justify-center items-center gap-4 font-medium text-white sm:border',
                bgColors[bgColor]
            )}
        >
            <h1 className="text-4xl">{remainingQuantity}</h1>
            <p className="text-xl">{contentType}</p>
        </div>
    );
}
