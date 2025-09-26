interface InfoProps {
    icon?: string;
    bigNumber?: string;
    title?: string;
    text?: string;
}

export default function InfoCard({ icon, bigNumber, title, text }: InfoProps) {
    return (
        <div className="flex-1 bg-white rounded-2xl shadow-md p-6">
            <span className="p-3 bg-[#EBF2FE] rounded-lg flex w-11 h-11">
                <img src={icon} />
            </span>
            <h3 className="mt-4 font-semibold text-gray-800">
                {bigNumber && (
                    <>
                        <span className="font-medium text-[#3C83F6] text-4xl block mb-3">
                            {bigNumber}
                        </span>
                    </>
                )}{' '}
                {title}
            </h3>
            <p className="text-gray-700 text-sm mt-4">{text}</p>
        </div>
    );
}
