import type { LucideIcon } from 'lucide-react';

interface EventInformationCardProps {
    children: React.ReactNode;
    icon: LucideIcon;
}

export function EventInformationCard({ children, icon: Icon }: EventInformationCardProps) {
    return (
        <div className="w-80 mx-auto md:w-[450px] xl:w-[388px] xl:h-[94px] bg-white inline-flex drop-shadow-card rounded-2xl px-5 py-4 md:p-6 items-center gap-5">
            <div className="bg-icon-bg  w-11 h-11 rounded p-2 flex items-center justify-center">
                <Icon className="text-blue-icon" />
            </div>
            <div>
                <p className="text-sm md:text-base font-normal">{children}</p>
            </div>
        </div>
    );
}
