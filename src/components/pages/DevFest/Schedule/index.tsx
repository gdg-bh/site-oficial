import { useState, useMemo } from 'react';

const scheduleData = [
    {
        start: '09:00',
        end: '09:50',
        track: 'Iniciante',
        title: 'Introdução ao React',
        speaker: 'Ana Costa',
    },
    {
        start: '09:10',
        end: '10:00',
        track: 'Avançado',
        title: 'Design Systems em escala',
        speaker: 'Rafael Mendes',
    },
    {
        start: '09:20',
        end: '10:10',
        track: 'Carreiras',
        title: 'DevOps Moderno',
        speaker: 'Juliana Rocha',
    },
    {
        start: '09:30',
        end: '10:20',
        track: 'WTM',
        title: 'Carreiras em Tecnologia',
        speaker: 'Lucas Almeida',
    },
    {
        start: '09:40',
        end: '10:30',
        track: 'Workshop',
        title: 'Workshop de Node.js',
        speaker: 'Fernanda Lima',
    },
    {
        start: '10:00',
        end: '10:50',
        track: 'Iniciante',
        title: 'React Avançado',
        speaker: 'Gustavo Torres',
    },
    {
        start: '10:10',
        end: '11:00',
        track: 'Avançado',
        title: 'Front-end Performance',
        speaker: 'Mariana Oliveira',
    },
    {
        start: '10:20',
        end: '11:10',
        track: 'Carreiras',
        title: 'Inteligência Artificial na Prática',
        speaker: 'André Barbosa',
    },
    {
        start: '10:30',
        end: '11:20',
        track: 'WTM',
        title: 'UX/UI Design Essentials',
        speaker: 'Camila Ferreira',
    },
    {
        start: '10:40',
        end: '11:30',
        track: 'Workshop',
        title: 'Next.js Deep Dive',
        speaker: 'Paulo Silva',
    },
    {
        start: '11:00',
        end: '11:50',
        track: 'Iniciante',
        title: 'Introdução ao React',
        speaker: 'Juliana Rocha',
    },
    {
        start: '11:10',
        end: '12:00',
        track: 'Avançado',
        title: 'Design Systems em escala',
        speaker: 'Ana Costa',
    },
    {
        start: '11:20',
        end: '12:10',
        track: 'Carreiras',
        title: 'DevOps Moderno',
        speaker: 'Lucas Almeida',
    },
    {
        start: '11:30',
        end: '12:20',
        track: 'WTM',
        title: 'Carreiras em Tecnologia',
        speaker: 'Rafael Mendes',
    },
    {
        start: '11:40',
        end: '12:30',
        track: 'Workshop',
        title: 'Workshop de Node.js',
        speaker: 'Fernanda Lima',
    },
    {
        start: '12:00',
        end: '12:50',
        track: 'Iniciante',
        title: 'React Avançado',
        speaker: 'Gustavo Torres',
    },
    {
        start: '12:10',
        end: '13:00',
        track: 'Avançado',
        title: 'Front-end Performance',
        speaker: 'Mariana Oliveira',
    },
    {
        start: '12:20',
        end: '13:10',
        track: 'Carreiras',
        title: 'Inteligência Artificial na Prática',
        speaker: 'André Barbosa',
    },
    {
        start: '12:30',
        end: '13:20',
        track: 'WTM',
        title: 'UX/UI Design Essentials',
        speaker: 'Camila Ferreira',
    },
    {
        start: '12:40',
        end: '13:30',
        track: 'Workshop',
        title: 'Next.js Deep Dive',
        speaker: 'Paulo Silva',
    },
    {
        start: '13:00',
        end: '13:50',
        track: 'Iniciante',
        title: 'Introdução ao React',
        speaker: 'Ana Costa',
    },
    {
        start: '13:10',
        end: '14:00',
        track: 'Avançado',
        title: 'Design Systems em escala',
        speaker: 'Rafael Mendes',
    },
    {
        start: '13:20',
        end: '14:10',
        track: 'Carreiras',
        title: 'DevOps Moderno',
        speaker: 'Juliana Rocha',
    },
    {
        start: '13:30',
        end: '14:20',
        track: 'WTM',
        title: 'Carreiras em Tecnologia',
        speaker: 'Lucas Almeida',
    },
    {
        start: '13:40',
        end: '14:30',
        track: 'Workshop',
        title: 'Workshop de Node.js',
        speaker: 'Fernanda Lima',
    },
    {
        start: '14:00',
        end: '14:50',
        track: 'Iniciante',
        title: 'React Avançado',
        speaker: 'Gustavo Torres',
    },
    {
        start: '14:10',
        end: '15:00',
        track: 'Avançado',
        title: 'Front-end Performance',
        speaker: 'Mariana Oliveira',
    },
    {
        start: '14:20',
        end: '15:10',
        track: 'Carreiras',
        title: 'Inteligência Artificial na Prática',
        speaker: 'André Barbosa',
    },
    {
        start: '14:30',
        end: '15:20',
        track: 'WTM',
        title: 'UX/UI Design Essentials',
        speaker: 'Camila Ferreira',
    },
    {
        start: '14:40',
        end: '15:30',
        track: 'Workshop',
        title: 'Next.js Deep Dive',
        speaker: 'Paulo Silva',
    },
    {
        start: '15:00',
        end: '15:50',
        track: 'Iniciante',
        title: 'Introdução ao React',
        speaker: 'Juliana Rocha',
    },
];

const tracks = [
    { name: 'Iniciante', color: '#2163CE' },
    { name: 'Avançado', color: '#6AA84F' },
    { name: 'Carreiras', color: '#BE60DC' },
    { name: 'WTM', color: '#FF5858' },
    { name: 'Workshop', color: '#FF9900' },
];

export default function Schedule() {
    const [filter, setFilter] = useState('all');

    const sortedData = useMemo(() => {
        return [...scheduleData].sort((a, b) => a.start.localeCompare(b.start));
    }, []);

    const filteredData = useMemo(() => {
        if (filter === 'all') return sortedData;
        return sortedData.filter((item) => item.track === filter);
    }, [filter, sortedData]);

    return (
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
                                className="border-t border-gray-200 even:bg-white odd:bg-[#FAFAFC]"
                            >
                                <td className="px-3 py-5 align-center whitespace-nowrap">
                                    <div className="font-bold text-base text-gray-900">
                                        {item.start}
                                    </div>
                                    <div className="text-gray-500">{item.end}</div>
                                </td>

                                <td className="px-1 md:px-3 py-5 align-center">
                                    <div
                                        style={{
                                            backgroundColor: String(
                                                tracks.find((t) => t.name === item.track)?.color ??
                                                    '#ccc'
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
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
