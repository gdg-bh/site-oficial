interface PageTitleProps {
    text?: string;
    highlight?: string;
}

export function SectionTitle({ text, highlight }: PageTitleProps) {
    return (
        <h1 className="font-medium text-4xl text-center text-black">
            {text && <span>{text}</span>}
            {text && highlight && ' '}
            {highlight && (
                <span className="bg-gradient-to-r from-google-blue to-google-green bg-clip-text text-transparent">
                    {highlight}
                </span>
            )}
        </h1>
    );
}
