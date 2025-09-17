import { useState, useMemo } from 'react';

const scheduleData = [
    {
        start: '08:30',
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
        track: 'Iniciante',
        title: 'Desenvolvimento de Agents com o ADK',
        speaker: 'Douglas Augusto',
    },
    {
        start: '10:00',
        end: '10:50',
        track: 'Avançado',
        title: 'Generative UI: UIs Dinâmicas e LLMs',
        speaker: 'Jorge Mauro',
    },
    {
        start: '10:00',
        end: '10:50',
        track: 'Carreiras',
        title: 'Por dentro da Análise de Dados: o divertido, o difícil e o essencial',
        speaker: 'Yuri Fernandes',
    },
    {
        start: '10:00',
        end: '11:40',
        track: 'Workshop',
        title: 'Docker para iniciantes',
        speaker: 'Gabriel Nogueira',
    },
    {
        start: '10:50',
        end: '11:40',
        track: 'Iniciante',
        title: 'Earth Engine no atendimento das emergèncias climáticas',
        speaker: 'Eliana Fonseca',
    },
    {
        start: '10:50',
        end: '11:40',
        track: 'Avançado',
        title: '### LOREM IPSUM DOLOR SIT AMET',
        speaker: 'Mateus Pereira',
    },
    {
        start: '10:50',
        end: '11:40',
        track: 'Carreiras',
        title: 'Tenha o Linkedin como seu aliado para se destacar no mercado de trabalho',
        speaker: 'Victoria Boaventura',
    },
    {
        start: '11:40',
        end: '12:30',
        track: 'Iniciante',
        title: '### LOREM IPSUM DOLOR SIT AMET',
        speaker: 'Thais Falabella',
    },
    {
        start: '11:40',
        end: '12:30',
        track: 'Avançado',
        title: 'Implement Bulletproof AgentOps',
        speaker: 'Camilla Martins',
    },
    {
        start: '11:40',
        end: '12:30',
        track: 'Carreiras',
        title: 'Testes técnicos sem mistério: o guia para se destacar',
        speaker: 'Rafael Ribeiro Andrade',
    },
    {
        start: '13:30',
        end: '13:40',
        title: 'Almoço',
    },
    {
        start: '13:40',
        end: '14:30',
        track: 'Iniciante',
        title: 'A Era Gemma: Desvendando a Família de Modelos Abertos do Google',
        speaker: 'Victor Pugliese',
    },
    {
        start: '13:40',
        end: '14:30',
        track: 'Avançado',
        title: 'Docker Offload: To the Cloud and Beyond',
        speaker: 'Juliana Conde',
    },
    {
        start: '13:40',
        end: '14:30',
        track: 'Carreiras',
        title: 'Work-life Balance em Carreiras Globais',
        speaker: 'Nicole Barra',
    },
    {
        start: '13:40',
        end: '15:20',
        track: 'Workshop',
        title: 'Arquitetura Frontend Moderna: Sistemas Clean, Escaláveis e Sólidos',
        speaker: 'Mariana Mendonça',
    },
    {
        start: '14:30',
        end: '15:20',
        track: 'Iniciante',
        title: 'Vamos falar de Inteligência Artificial? Desenvolvendo Apps Inteligentes com Flutter e Gemini',
        speaker: 'Toshi Ossada',
    },
    {
        start: '14:30',
        end: '15:20',
        track: 'Avançado',
        title: 'BigQuery Advanced',
        speaker: 'Alisson Rosa',
    },
    {
        start: '14:30',
        end: '15:20',
        track: 'Carreiras',
        title: 'De Dev a Tech Manager: Coisas que aprendi nessa jornada',
        speaker: 'Diego Borges Ferreira',
    },
    {
        start: '15:20',
        end: '16:10',
        track: 'Iniciante',
        title: 'A Mentalidade do desenvolvedor Secure-First',
        speaker: 'Pedro Rosemberg',
    },
    {
        start: '15:20',
        end: '16:10',
        track: 'Avançado',
        title: 'Arquitetura Sob Demanda: Construindo um sistema do zero',
        speaker: 'Arthur e Arthur',
    },
    {
        start: '15:20',
        end: '16:10',
        track: 'Carreiras',
        title: 'Storytelling Estratégico: Como mostrar seu trabalho com intenção e gerar impacto',
        speaker: 'Júlia Vasconcelos',
    },
    {
        start: '16:10',
        end: '16:30',
        title: 'Encerramento + Sorteios + Foto oficial',
    },
    {
        start: '16:30',
        end: '17:30',
        title: 'Happy Hour',
    },
];

const tracks = [
    { name: 'Iniciante', color: '#2163CE' },
    { name: 'Avançado', color: '#6AA84F' },
    { name: 'Carreiras', color: '#BE60DC' },
    { name: 'WTM', color: '#FF5858' },
    { name: 'Onfly', color: '#009EFB' },
    { name: 'Workshop', color: '#FF9900' },
];

export default function Schedule() {
    const [filter, setFilter] = useState('all');

    const sortedData = useMemo(() => {
        return [...scheduleData].sort((a, b) => a.start.localeCompare(b.start));
    }, []);

    const filteredData = useMemo(() => {
        if (filter === 'all') return sortedData;
        return sortedData.filter((item) => item.track === filter || !item.track);
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
                                                        tracks.find((t) => t.name === item.track)
                                                            ?.color ?? '#ccc'
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
    );
}
