import { useState, useMemo } from 'react';
import { SectionTitle } from '../../../Common/SectionTitle';

const scheduleData = [
    {
        start: '09:00',
        end: '09:30',
        title: 'Credenciamento',
    },
    {
        start: '09:30',
        end: '10:00',
        title: 'Abertura',
    },
    {
        start: '10:00',
        end: '10:50',
        track: 'Palestra',
        title: 'Introdução ao Gemini e IA Generativa',
    },
    {
        start: '10:50',
        end: '11:40',
        track: 'Workshop',
        title: 'Construindo Aplicações com Gemini API',
    },
    {
        start: '11:40',
        end: '12:30',
        track: 'Palestra',
        title: 'Melhores Práticas em Prompt Engineering',
    },
    {
        start: '12:30',
        end: '13:30',
        title: 'Almoço',
    },
    {
        start: '13:30',
        end: '14:20',
        track: 'Palestra',
        title: 'IA Responsável e Ética',
    },
    {
        start: '14:20',
        end: '15:10',
        track: 'Workshop',
        title: 'Integração de IA em Aplicações Web',
    },
    {
        start: '15:10',
        end: '16:00',
        track: 'Palestra',
        title: 'Casos de Uso Reais com IA',
    },
    {
        start: '16:00',
        end: '16:30',
        title: 'Encerramento e Networking',
    },
];

const tracks = [
    { name: 'Palestra', color: '#2163CE' },
    { name: 'Workshop', color: '#FF9900' },
];

export default function ScheduleBuildWithAI2025() {
    const [filter, setFilter] = useState('all');

    const sortedData = useMemo(() => {
        return [...scheduleData].sort((a, b) => a.start.localeCompare(b.start));
    }, []);

    const filteredData = useMemo(() => {
        if (filter === 'all') return sortedData;
        return sortedData.filter((item) => item.track === filter || !item.track);
    }, [filter, sortedData]);

    return (
        <section className="bg-white py-20 overflow-hidden">
            <SectionTitle highlight="Agenda" />
            <p className="mx-auto w-10/12 lg:w-6/12 mb-16 mt-4 md:mt-3 text-center text-subtitle-color font-normal text-base">
                Confira o cronograma completo do evento.
            </p>
            <div className="w-full max-w-7xl mx-auto p-4">
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                    <button
                        onClick={() => setFilter('all')}
                        className={`px-7 py-1 rounded-lg text-sm md:text-base font-regular border-2 ${filter === 'all'
                                ? 'bg-white text-gray-700 border-gray-300 shadow-[0px_4px_4px_0px_#00000040]'
                                : 'hover:bg-gray-200'
                            }`}
                    >
                        Ver todos
                    </button>
                    {tracks.map((t) => (
                        <button
                            key={t.name}
                            onClick={() => setFilter(t.name)}
                            className={`px-6 py-1 rounded-lg text-sm md:text-base text-white font-regular transition  ${filter === t.name
                                    ? ' border-blue-600 shadow-[0px_4px_4px_0px_#00000040]'
                                    : `opacity-50 hover:opacity-100`
                                }`}
                            style={{ backgroundColor: t.color }}
                        >
                            {t.name}
                        </button>
                    ))}
                </div>

                <div className=" border border-gray-200 rounded-lg h-[450px] overflow-y-auto">
                    <table className="w-full table-fixed text-left text-sm">
                        <thead className="bg-white sticky top-0 shadow-sm">
                            <tr>
                                <th className="px-3 py-2 font-medium text-[#21242C] text-base w-16 md:w-28 h-14 ">
                                    Horário
                                </th>
                                <th className="px-3 py-2 font-medium text-[#21242C] text-base w-20 md:w-56">
                                    Trilha
                                </th>
                                <th className="px-3 py-2 font-medium text-[#21242C] text-base w-[60%]">
                                    Atividade
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((item, idx) => (
                                <tr
                                    key={idx}
                                    className={`border-t border-gray-200 even:bg-white odd:bg-[#FAFAFC]${!item.track ? ' bg-gradient-to-r from-google-blue/20 to-google-green/20 border-white' : ''}`}
                                >
                                    <td
                                        className={`px-3 align-center whitespace-nowrap${!item.track ? ' py-2' : 'py-5'}`}
                                    >
                                        <div className="font-bold text-base text-gray-900">
                                            {item.start}
                                        </div>
                                        <div className="text-gray-500">{item.end}</div>
                                    </td>

                                    {item.track ? (
                                        <>
                                            <td className="px-1 md:px-3 py-5 align-center">
                                                <div
                                                    style={{
                                                        backgroundColor: String(
                                                            tracks.find(
                                                                (t) => t.name === item.track
                                                            )?.color ?? '#ccc'
                                                        ),
                                                    }}
                                                    className="text-center bg-[#ccc] rounded-full text-white md:px-6 md:py-1 text-sm md:text-base max-w-36"
                                                >
                                                    {item.track}
                                                </div>
                                            </td>
                                            <td className="px-3 py-5 align-center">
                                                <div className="font-normal text-sm md:text-base text-gray-900">
                                                    {item.title}
                                                </div>
                                            </td>
                                        </>
                                    ) : (
                                        <td colSpan={2} className="px-3 py-2 align-center">
                                            <div className="font-bold text-sm  md:text-base text-gray-800">
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
