import { useState, useMemo } from 'react';
import { SectionTitle } from '../../../Common/SectionTitle';

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
        title: 'BigQuery Advanced',
        speaker: 'Alisson Rosa',
    },
    {
        start: '10:00',
        end: '10:50',
        track: 'Carreiras',
        title: 'Testes Técnicos Sem Mistério: O Guia para se Destacar',
        speaker: 'Rafael Andrade',
    },
    {
        start: '10:00',
        end: '11:40',
        track: 'Workshop',
        title: 'Docker para Iniciantes',
        speaker: 'Artur Bomtempo e Gabriel Nogueira',
    },
    {
        start: '10:00',
        end: '10:50',
        track: 'WTM',
        title: 'Mary Kay',
        speaker: 'Ana Carolina',
    },
    {
        start: '10:00',
        end: '10:50',
        track: 'Onfly',
        title: 'Em Breve',
        speaker: 'Em Breve',
    },
    {
        start: '10:50',
        end: '11:40',
        track: 'Iniciante',
        title: 'Earth Engine no Atendimento das Emergências Climáticas',
        speaker: 'Eliana Fonseca',
    },
    {
        start: '10:50',
        end: '11:40',
        track: 'Avançado',
        title: 'Generative UI: UIs Dinâmicas e LLMs',
        speaker: 'Jorge Mauro',
    },
    {
        start: '10:50',
        end: '11:40',
        track: 'Carreiras',
        title: 'Tenha o Linkedin Como Seu Aliado para se Destacar no Mercado de Trabalho',
        speaker: 'Victoria Boaventura',
    },
    {
        start: '10:50',
        end: '11:40',
        track: 'WTM',
        title: 'Mentoria',
        speaker: 'Ana Paula Bartels',
    },
    {
        start: '10:50',
        end: '11:40',
        track: 'Onfly',
        title: 'Em Breve',
        speaker: 'Em Breve',
    },
    {
        start: '11:40',
        end: '12:30',
        track: 'Iniciante',
        title: 'IA no Design de Produtos Inovadores',
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
        title: 'Por dentro da Análise de Dados: O Divertido, o Difícil e o Essencial',
        speaker: 'Yuri Fernandes',
    },
    {
        start: '11:40',
        end: '12:30',
        track: 'WTM',
        title: 'Mentoria',
        speaker: 'Fernanda Costa',
    },
    {
        start: '11:40',
        end: '12:30',
        track: 'Onfly',
        title: 'Em Breve',
        speaker: 'Em Breve',
    },
    {
        start: '12:30',
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
        speaker: 'Mariana Almeida',
    },
    {
        start: '13:40',
        end: '14:30',
        track: 'WTM',
        title: 'Mentoria',
        speaker: 'Rafaela Marcolino',
    },
    {
        start: '13:40',
        end: '14:30',
        track: 'Onfly',
        title: 'Em Breve',
        speaker: 'Em Breve',
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
        title: 'Aprimorando Agentic AI com Servidores MCP Serverless',
        speaker: 'Mateus Pereira',
    },
    {
        start: '14:30',
        end: '15:20',
        track: 'Carreiras',
        title: 'De Dev a Tech Manager: Coisas que Aprendi nessa Jornada',
        speaker: 'Diego Borges Ferreira',
    },
    {
        start: '14:30',
        end: '15:20',
        track: 'WTM',
        title: 'Mentoria',
        speaker: 'Luiza Maria Taroni Naves',
    },
    {
        start: '14:30',
        end: '15:20',
        track: 'Onfly',
        title: 'Em Breve',
        speaker: 'Em Breve',
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
        title: 'Arquitetura e Modelagem de Software: O Processo de Decisão por Trás de Sistemas Resilientes',
        speaker: 'Arthur Carvalho e Arthur Drumond',
    },
    {
        start: '15:20',
        end: '16:10',
        track: 'Carreiras',
        title: 'Storytelling Estratégico: Como mostrar seu trabalho com intenção e gerar impacto',
        speaker: 'Julia Vasconcelos',
    },
    {
        start: '15:20',
        end: '16:10',
        track: 'WTM',
        title: 'Mentoria',
        speaker: 'Izabela Cançado',
    },
    {
        start: '15:20',
        end: '16:10',
        track: 'Onfly',
        title: 'Em Breve',
        speaker: 'Em Breve',
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
    { name: 'Iniciante', color: '#6AA84F' },
    { name: 'Avançado', color: '#2163CE' },
    { name: 'Carreiras', color: '#FF5858' },
    { name: 'Onfly', color: '#009EFB' },
    { name: 'Workshop', color: '#FF9900' },
    { name: 'WTM', color: '#BE60DC' },
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
