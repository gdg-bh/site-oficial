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
        end: '09:20',
        duration: '20 minutos',
        title: 'Abertura',
    },
    {
        start: '09:20',
        end: '10:10',
        duration: '50 minutos',
        title: 'How to Land a Remote International Job com Nicole Barra e Mariana Vilela',
    },
    {
        start: '10:10',
        end: '10:20',
        duration: '10 minutos',
        title: 'Tempo para transição',
    },
    {
        start: '10:20',
        end: '11:10',
        duration: '50 minutos',
        track: 'Dev',
        title: 'Excelência em Engenharia de Software com David Reis',
    },
    {
        start: '10:20',
        end: '11:10',
        duration: '50 minutos',
        track: 'AI',
        title: 'IA Responsável - Como usar IA de maneira consciente com Carol Carneiro',
    },
    {
        start: '10:20',
        end: '11:10',
        duration: '50 minutos',
        track: 'Carreiras',
        title: 'Data Path - Trilhando uma carreira de dados - Alisson Rosa',
    },
    {
        start: '10:20',
        end: '12:00',
        duration: '100 minutos',
        track: 'Workshop',
        title: 'Do Zero ao Deploy com React e Next.js: Mariana Almeida, Arthur Bomtempo e Nilson Deon',
    },
        {
        start: '10:20',
        end: '12:00',
        duration: '100 minutos',
        track: 'Workshop',
        title: 'Prompt-astic: A Engemagia do Prompt Engineering com Altino Alves',
    },
    {
        start: '10:20',
        end: '11:10',
        duration: '50 minutos',
        track: 'WTM',
        title: 'Profissões do futuro: liderança é uma habilidade ou uma cultura? com Yura Andaluz',
    },
    {
        start: '11:10',
        end: '12:00',
        duration: '50 minutos',
        track: 'Dev',
        title: 'Microfrontend é uma opção mas não é o único caminho com Jorge Mauro Gonçalves',
    },
    {
        start: '11:10',
        end: '12:00',
        duration: '50 minutos',
        track: 'AI',
        title: 'No PhD Required: IA prática com Ahirton Lopes',
    },
    {
        start: '11:10',
        end: '12:00',
        duration: '50 minutos',
        track: 'Carreiras',
        title: 'De Dev a CTO: O Passo a Passo para Liderança na Tecnologia com Luís Eduardo Ferraz Luz',
    },
    {
        start: '11:10',
        end: '12:00',
        duration: '50 minutos',
        track: 'WTM',
        title: 'Mentoria Carreira na IA com Jessica Costa',
    },
    {
        start: '12:00',
        end: '13:30',
        duration: '1h e 30 min',
        title: 'Almoço',
    },
    {
        start: '13:30',
        end: '14:20',
        duration: '50 minutos',
        track: 'Dev',
        title: 'Do localhost a pipeline com Guilherme Pais',
    },
    {
        start: '13:30',
        end: '14:20',
        duration: '50 minutos',
        track: 'AI',
        title: 'Usar GenAI ou não Usar GenAI: Eis a Questão com Jessica Costa',
    },
    {
        start: '13:30',
        end: '14:20',
        duration: '50 minutos',
        track: 'Carreiras',
        title: 'Explorando Carreiras no Mundo dos Aplicativos com Sávio Rodrigues Costa',
    },
    {
        start: '13:30',
        end: '14:20',
        duration: '50 minutos',
        track: 'Workshop',
        title: 'Node.js na Prática: Criando APIs REST com Luca Ferrari e Jhonata Silveira',
    },
    {
        start: '13:30',
        end: '14:20',
        duration: '50 minutos',
        track: 'WTM',
        title: 'Mentoria transição de carreira e primeiras oportunidades com Mariana Corrêa',
    },
    {
        start: '14:20',
        end: '15:10',
        duration: '50 minutos',
        track: 'Dev',
        title: 'Desenvolvimento com IA para Transformer Seu Código em Sistemas Inteligentes com Paula Oliveira',
    },
    {
        start: '14:20',
        end: '15:10',
        duration: '50 minutos',
        track: 'AI',
        title: 'Aplicações Reais com Aprendizado por Reforço com Victor Pugliese',
    },
    {
        start: '14:20',
        end: '15:10',
        duration: '50 minutos',
        track: 'Carreiras',
        title: 'Carreira como Product Manager com Bárbara Faria',
    },
    {
        start: '14:20',
        end: '15:10',
        duration: '50 minutos',
        track: 'WTM',
        title: 'Mentoria Financeira com Nathalia Ardizzone',
    },
    {
        start: '15:10',
        end: '16:00',
        duration: '50 minutos',
        track: 'Dev',
        title: 'Automatizando a Qualidade de Código com IA: Usando LLM para Revisar Pull Requests em Apps Flutter com Ana Ludmila de Oliveira',
    },
    {
        start: '15:10',
        end: '16:00',
        duration: '50 minutos',
        track: 'AI',
        title: 'Enriquecimento de dados no BigQuery com modelos Gemini com Fernando Sedrez',
    },
    {
        start: '15:10',
        end: '16:00',
        duration: '50 minutos',
        track: 'Carreiras',
        title: 'Tenha o LinkedIn como seu aliado para se destacar no mercado de trabalho com Victória Boaventura',
    },
    {
        start: '15:10',
        end: '16:00',
        duration: '50 minutos',
        track: 'WTM',
        title: 'Mentoria Desenvolvimento com Fernanda Costa',
    },
    {
        start: '16:00',
        end: '16:20',
        duration: '20 minutos',
        title: 'Encerramento + Sorteios + Foto oficial',
    },
    {
        start: '16:20',
        end: '18:00',
        duration: '1h e 40 min',
        title: 'Happy Hour',
    },
];

const tracks = [
    { name: 'Dev', color: '#2163CE' },
    { name: 'AI', color: '#6AA84F' },
    { name: 'Carreiras', color: '#FF5858' },
    { name: 'Workshop', color: '#FF9900' },
    { name: 'WTM', color: '#BE60DC' },
];

export default function Schedule2024() {
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
