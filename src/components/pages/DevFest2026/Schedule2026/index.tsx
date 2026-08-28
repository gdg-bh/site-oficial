import { useState, useMemo } from 'react';
import { SectionTitle } from '../../../Common/SectionTitle';

const scheduleData = [
    {
        start: '08:00',
        end: '09:00',
        title: 'Credenciamento',
    },
    {
        start: '09:00',
        end: '09:30',
        title: 'Abertura',
    },
    {
        start: '09:30',
        end: '10:10',
        track: 'Horizonte',
        title: 'Em Breve',
        speaker: 'Em Breve',
    },
    {
        start: '09:30',
        end: '10:10',
        track: 'Pampulha',
        title: 'Nem só de Airflow vive o Data Engineer: Orquestrando Pipelines com Leoflow no GKE e BigQuery',
        speaker: 'Alisson Rosa',
    },
    {
        start: '09:30',
        end: '10:10',
        track: 'Mercado',
        title: 'Em Breve',
        speaker: 'Em Breve',
    },
    {
        start: '09:30',
        end: '10:10',
        track: 'Liberdade',
        title: 'Dinâmica de Networking',
        speaker: 'Juliana Ribeiro',
    },
    {
        start: '10:20',
        end: '11:00',
        track: 'Horizonte',
        title: 'Sobrevivência corporativa: Aprenda a Puxar Saco e conquiste a paz profissional',
        speaker: 'Luciana Azevedo',
    },
    {
        start: '10:20',
        end: '11:00',
        track: 'Pampulha',
        title: 'Em Breve',
        speaker: 'Em Breve',
    },
    {
        start: '10:20',
        end: '11:00',
        track: 'Mercado',
        title: 'Em Breve',
        speaker: 'Em Breve',
    },
    {
        start: '10:20',
        end: '11:00',
        track: 'Liberdade',
        title: 'Em Breve',
        speaker: 'Em Breve',
    },
    {
        start: '11:10',
        end: '12:00',
        track: 'Horizonte',
        title: 'Em Breve',
        speaker: 'Em Breve',
    },
    {
        start: '11:10',
        end: '12:00',
        track: 'Pampulha',
        title: 'Em Breve',
        speaker: 'Em Breve',
    },
    {
        start: '11:10',
        end: '12:00',
        track: 'Mercado',
        title: 'Em Breve',
        speaker: 'Em Breve',
    },
    {
        start: '11:10',
        end: '12:00',
        track: 'Liberdade',
        title: 'Em Breve',
        speaker: 'Em Breve',
    },
    {
        start: '12:00',
        end: '13:30',
        title: 'Almoço',
    },
    {
        start: '13:30',
        end: '14:10',
        track: 'Horizonte',
        title: 'Em Breve',
        speaker: 'Em Breve',
    },
    {
        start: '13:30',
        end: '14:10',
        track: 'Pampulha',
        title: 'Em Breve',
        speaker: 'Em Breve',
    },
    {
        start: '13:30',
        end: '14:10',
        track: 'Mercado',
        title: 'Em Breve',
        speaker: 'Em Breve',
    },
    {
        start: '13:30',
        end: '14:10',
        track: 'Liberdade',
        title: 'Em Breve',
        speaker: 'Em Breve',
    },
    {
        start: '14:20',
        end: '15:00',
        track: 'Horizonte',
        title: 'Em Breve',
        speaker: 'Em Breve',
    },
    {
        start: '14:20',
        end: '15:00',
        track: 'Pampulha',
        title: 'Em Breve',
        speaker: 'Em Breve',
    },
    {
        start: '14:20',
        end: '15:00',
        track: 'Mercado',
        title: 'Micro-frontends: Escalando Interfaces com Arquitetura Modular',
        speaker: 'Kevin Uehara',
    },
    {
        start: '14:20',
        end: '15:00',
        track: 'Liberdade',
        title: 'Em Breve',
        speaker: 'Em Breve',
    },
    {
        start: '15:10',
        end: '16:00',
        track: 'Horizonte',
        title: 'Agent Foundry: Engenharia de Agentes de IA com Google ADK',
        speaker: 'Ahirton Lopes',
    },
    {
        start: '15:10',
        end: '16:00',
        track: 'Pampulha',
        title: 'Em Breve',
        speaker: 'Em Breve',
    },
    {
        start: '15:10',
        end: '16:00',
        track: 'Mercado',
        title: 'Em Breve',
        speaker: 'Em Breve',
    },
    {
        start: '15:10',
        end: '16:00',
        track: 'Liberdade',
        title: 'Da Competência à Influência: Carreira e Liderança Feminina em Tecnologia',
        speaker: 'Daniela Oliveira',
    },
    {
        start: '16:00',
        end: '16:20',
        title: 'Encerramento + Sorteios',
    },
    {
        start: '16:20',
        end: '17:00',
        title: 'Happy Hour',
    },
];

const tracks = [
    { name: 'Horizonte', color: '#6AA84F' },
    { name: 'Pampulha', color: '#2163CE' },
    { name: 'Mercado', color: '#FF9900' },
    { name: 'Liberdade', color: '#FF5858' },
];

export default function Schedule2026() {
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
                        className={`px-7 py-1 rounded-lg text-sm md:text-base font-regular border-2 ${
                            filter === 'all'
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
                            className={`px-6 py-1 rounded-lg text-sm md:text-base text-white font-regular transition  ${
                                filter === t.name
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
                                    Palestra
                                </th>
                                <th className="px-3 py-2 font-medium text-[#21242C] text-base hidden md:table-cell">
                                    Palestrante
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
                                                <div className="text-gray-500 text-sm md:hidden mt-1">
                                                    {item.speaker}
                                                </div>
                                            </td>
                                            <td className="px-3 py-5 align-center text-gray-500 hidden md:table-cell">
                                                {item.speaker}
                                            </td>
                                        </>
                                    ) : (
                                        <td colSpan={3} className="px-3 py-2 align-center">
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
