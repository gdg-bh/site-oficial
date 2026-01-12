import { SectionTitle } from '../../../Common/SectionTitle';

const scheduleData = [
    {
        start: '08:30',
        end: '09:00',
        title: 'Credenciamento e Coffee',
    },
    {
        start: '09:00',
        end: '09:30',
        title: 'Abertura do Evento',
    },
    {
        start: '09:30',
        end: '10:30',
        title: 'Palestra 1',
        speaker: 'Em breve',
    },
    {
        start: '10:30',
        end: '11:30',
        title: 'Palestra 2',
        speaker: 'Em breve',
    },
    {
        start: '11:30',
        end: '12:00',
        title: 'Encerramento e Sorteios',
    },
];

export default function ScheduleGDGBHMeet2() {
    return (
        <section className="bg-white py-20 overflow-hidden">
            <SectionTitle highlight="Agenda" />
            <p className="mx-auto w-10/12 lg:w-6/12 mb-16 mt-4 md:mt-3 text-center text-subtitle-color font-normal text-base">
                Confira o cronograma completo do evento.
            </p>
            <div className="w-full max-w-7xl mx-auto p-4">
                <div className="border border-gray-200 rounded-lg h-[450px] overflow-y-auto">
                    <table className="w-full table-fixed text-left text-sm">
                        <thead className="bg-white sticky top-0 shadow-sm">
                            <tr>
                                <th className="px-3 py-2 font-medium text-[#21242C] text-base w-16 md:w-28 h-14">
                                    Horário
                                </th>
                                <th className="px-3 py-2 font-medium text-[#21242C] text-base w-[60%]">
                                    Atividade
                                </th>
                                <th className="px-3 py-2 font-medium text-[#21242C] text-base hidden md:table-cell">
                                    Palestrante
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {scheduleData.map((item, idx) => (
                                <tr
                                    key={idx}
                                    className={`border-t border-gray-200 even:bg-white odd:bg-[#FAFAFC]${!item.speaker ? ' bg-gradient-to-r from-google-blue/20 to-google-green/20 border-white' : ''}`}
                                >
                                    <td
                                        className={`px-3 align-center whitespace-nowrap${!item.speaker ? ' py-2' : ' py-5'}`}
                                    >
                                        <div className="font-bold text-base text-gray-900">
                                            {item.start}
                                        </div>
                                        <div className="text-gray-500">{item.end}</div>
                                    </td>

                                    {item.speaker ? (
                                        <>
                                            <td className="px-3 py-5 align-center">
                                                <div className="font-normal text-sm md:text-base text-gray-900">
                                                    {item.title}
                                                </div>
                                                <div className="text-gray-500 text-sm md:hidden mt-1">
                                                    {item.speaker}
                                                </div>
                                            </td>
                                            <td className="px-3 py-5 align-center text-gray-500 hidden md:table-cell">
                                                {item.speaker}
                                            </td>
                                        </>
                                    ) : (
                                        <td colSpan={2} className="px-3 py-2 align-center">
                                            <div className="font-bold text-sm md:text-base text-gray-800">
                                                {item.title}
                                            </div>
                                        </td>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
