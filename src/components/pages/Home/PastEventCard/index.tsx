import calendar from '../../../../assets/icons/CalendarWhite.svg';
import users from '../../../../assets/icons/UsersFourWhite.svg';
import rightArrow from '../../../../assets/icons/ArrowRightBlue.svg';

export default function PastEventCard(props) {
    return (
        <div className="max-w-sm bg-white rounded-2xl shadow-md p-6 h-[100%] flex flex-col flex-none">
            <div className="relative">
                <img
                    src="https://picsum.photos/400/300"
                    alt="Evento"
                    className="w-full h-48 object-cover rounded-xl"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-3 rounded-tl-xl rounded-tr-xl rounded-br-none rounded-bl-none">
                    <h2 className="text-white text-[1.5rem] font-semibold mb-1">
                        {props.card.name}
                    </h2>
                    <div className="flex text-sm text-gray-200 gap-4">
                        <span className="flex gap-2 items-center text-[1rem]">
                            <img src={calendar} />
                            {props.card.date}
                        </span>
                        <span className="flex gap-2 items-center text-[1rem]">
                            <img src={users} />
                            {props.card.participants} participantes
                        </span>
                    </div>
                </div>
            </div>

            <p className="text-gray-700 text-sm mt-4">{props.card.description}</p>

            <h3 className="mt-4 font-semibold text-gray-800">Destaques do evento</h3>

            <ul className="list-disc list-inside text-gray-700 text-sm mt-1 space-y-1 mb-auto">
                {props.card.highlights?.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                ))}
            </ul>

            <div className="mt-4 text-right">
                <a
                    href={props.card.link}
                    className="text-blue-600 text-lg font-medium inline-flex justify-end gap-3 border-b-2 border-transparent hover:border-blue-500 transition"
                >
                    ver detalhes do evento <img src={rightArrow} />
                </a>
            </div>
        </div>
    );
}
