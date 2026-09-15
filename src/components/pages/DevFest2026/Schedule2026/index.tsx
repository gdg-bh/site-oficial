import { useEffect, useMemo, useState } from 'react';
import { Check, Download, Share2, X } from 'lucide-react';
import { SectionTitle } from '../../../Common/SectionTitle';
import credentialImage from '../../../../assets/pages/devfest2026/credencial.jpeg';

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
        title: 'Em Breve',
        speaker: 'Em Breve',
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
        title: 'Da execução ao protagonismo: construindo sua carreira na tecnologia',
        speaker: 'Jéssica Flores',
    },
    {
        start: '11:10',
        end: '12:00',
        track: 'Horizonte',
        title: 'O Programador Generalista e a IA Generativa',
        speaker: 'Karol Attekita',
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
        title: 'Google Dorks: Não é Hacking, é Google!',
        speaker: 'Iza Batista',
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
        title: 'O Código da Contratação: A inteligência por trás de um LinkedIn estratégico.',
        speaker: 'Carol Severo',
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
        title: 'Recalculando a rota: como o app iFood para Entregadores voltou à App Store migrando do Android nativo para KMP + CMP',
        speaker: 'Marcella Souza',
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

const scheduleStorageKey = 'devfest-2026-personal-schedule';
const credentialSlots = [
    { start: '09:30', top: 435, bottom: 550, left: 244, right: 1030 },
    { start: '10:20', top: 589, bottom: 703, left: 244, right: 1030 },
    { start: '11:10', top: 742, bottom: 856, left: 244, right: 1030 },
    { start: '13:30', top: 894, bottom: 1008, left: 244, right: 1030 },
    { start: '14:20', top: 1047, bottom: 1161, left: 244, right: 1030 },
    { start: '15:10', top: 1201, bottom: 1315, left: 244, right: 1030 },
];

type Session = (typeof scheduleData)[number];

function isTalk(session: Session): session is Session & { track: string; speaker: string } {
    return Boolean(session.track && session.speaker);
}

function getTalkKey(session: Session) {
    return isTalk(session) ? `${session.track}:${session.title}` : session.title;
}

function wrapText(
    context: CanvasRenderingContext2D,
    text: string,
    maxWidth: number,
    fontSize: number
) {
    context.font = `700 ${fontSize}px Arial, sans-serif`;
    const words = text.split(' ');
    const lines: string[] = [];
    let currentLine = '';

    words.forEach((word) => {
        const candidate = currentLine ? `${currentLine} ${word}` : word;
        if (context.measureText(candidate).width <= maxWidth || !currentLine) {
            currentLine = candidate;
        } else {
            lines.push(currentLine);
            currentLine = word;
        }
    });

    if (currentLine) lines.push(currentLine);
    return lines;
}

export default function Schedule2026() {
    const [filter, setFilter] = useState('all');
    const [isPlannerOpen, setIsPlannerOpen] = useState(false);
    const [selectedTalks, setSelectedTalks] = useState<Record<string, string>>({});

    const sortedData = useMemo(() => {
        return [...scheduleData].sort((a, b) => a.start.localeCompare(b.start));
    }, []);

    const filteredData = useMemo(() => {
        if (filter === 'all') return sortedData;
        return sortedData.filter((item) => item.track === filter || !item.track);
    }, [filter, sortedData]);

    const talksByTime = useMemo(() => {
        return sortedData.reduce<Record<string, Session[]>>((groups, item) => {
            if (isTalk(item)) {
                groups[item.start] = [...(groups[item.start] ?? []), item];
            }
            return groups;
        }, {});
    }, [sortedData]);

    useEffect(() => {
        try {
            const savedSchedule = window.localStorage.getItem(scheduleStorageKey);
            if (savedSchedule) {
                const savedTalks = JSON.parse(savedSchedule) as Record<string, string>;
                const migratedTalks = Object.entries(savedTalks).reduce<Record<string, string>>(
                    (result, [start, selectedValue]) => {
                        const talksAtTime = talksByTime[start] ?? [];
                        const matchingTalks = talksAtTime.filter(
                            (talk) => talk.title === selectedValue || getTalkKey(talk) === selectedValue
                        );

                        if (matchingTalks.length === 1) {
                            result[start] = getTalkKey(matchingTalks[0]);
                        }

                        return result;
                    },
                    {},
                );
                setSelectedTalks(migratedTalks);
            }
        } catch {
            window.localStorage.removeItem(scheduleStorageKey);
        }
    }, [talksByTime]);

    useEffect(() => {
        window.localStorage.setItem(scheduleStorageKey, JSON.stringify(selectedTalks));
    }, [selectedTalks]);

    useEffect(() => {
        if (!isPlannerOpen) return;

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setIsPlannerOpen(false);
        };

        document.addEventListener('keydown', handleEscape);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = '';
        };
    }, [isPlannerOpen]);

    const toggleTalk = (start: string, talk: Session) => {
        const talkKey = getTalkKey(talk);
        setSelectedTalks((current) => {
            if (current[start] === talkKey) {
                const next = { ...current };
                delete next[start];
                return next;
            }

            return { ...current, [start]: talkKey };
        });
    };

    const shareSchedule = async () => {
        const selectedSessions = sortedData.filter(
            (item) => isTalk(item) && selectedTalks[item.start] === getTalkKey(item)
        );
        const scheduleText = selectedSessions.length
            ? selectedSessions
                  .map((item) => `${item.start} - ${item.title} (${item.track})`)
                  .join('\n')
            : 'Ainda não escolhi nenhuma palestra.';
        const shareText = `Minha grade personalizada do DevFest 2026:\n\n${scheduleText}\n\nConfira a agenda em ${window.location.href}`;

        try {
            const imageData = await createScheduleImage();
            const imageBlob = await fetch(imageData).then((response) => response.blob());
            const imageFile = new File([imageBlob], 'minha-grade-devfest-2026.png', { type: 'image/png' });

            if (navigator.canShare?.({ files: [imageFile] })) {
                await navigator.share({
                    title: 'Minha grade do DevFest 2026',
                    text: shareText,
                    files: [imageFile],
                });
                return;
            }

            const link = document.createElement('a');
            link.href = imageData;
            link.download = 'minha-grade-devfest-2026.png';
            link.click();

            try {
                await navigator.clipboard.writeText(shareText);
            } catch {
                // O download continua disponível mesmo quando a área de transferência é bloqueada.
            }

            window.alert('A imagem foi baixada e o texto foi copiado. Abra o WhatsApp para compartilhar.');
        } catch (error) {
            if (error instanceof DOMException && error.name === 'AbortError') return;
            window.alert('Não foi possível compartilhar sua grade agora.');
        }
    };

    const createScheduleImage = async () => {
            const image = new Image();
            image.src = credentialImage;
            await new Promise<void>((resolve, reject) => {
                image.onload = () => resolve();
                image.onerror = () => reject(new Error('Não foi possível carregar a credencial.'));
            });

            const canvas = document.createElement('canvas');
            canvas.width = image.naturalWidth;
            canvas.height = image.naturalHeight;
            const context = canvas.getContext('2d');
            if (!context) throw new Error('Não foi possível preparar a imagem.');

            context.drawImage(image, 0, 0);
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            context.fillStyle = '#202124';

            credentialSlots.forEach((slot) => {
                const session = sortedData.find(
                    (item) => isTalk(item) && item.start === slot.start && selectedTalks[item.start] === getTalkKey(item)
                );
                if (!session || !isTalk(session)) return;

                const centerX = (slot.left + slot.right) / 2;
                const centerY = (slot.top + slot.bottom) / 2;
                const maxWidth = slot.right - slot.left - 80;
                const titleLines = wrapText(context, session.title, maxWidth, 24).slice(0, 2);
                const metadata = `${session.track} · ${session.speaker}`;
                const lineHeight = 28;
                const titleHeight = titleLines.length * lineHeight;
                const textOffsetY = 'textOffsetY' in slot ? slot.textOffsetY ?? 0 : 0;
                const metadataY = centerY + (titleHeight + 12) / 2 + textOffsetY;

                context.font = '700 24px Arial, sans-serif';
                titleLines.forEach((line, index) => {
                    context.fillText(
                        line,
                        centerX,
                        centerY - titleHeight / 2 + index * lineHeight + 12 + textOffsetY,
                        maxWidth,
                    );
                });
                context.font = '16px Arial, sans-serif';
                context.fillText(metadata, centerX, metadataY, maxWidth);
            });

            return canvas.toDataURL('image/png');
    };

    const downloadScheduleImage = async () => {
        try {
            const imageData = await createScheduleImage();
            const link = document.createElement('a');
            link.href = imageData;
            link.download = 'minha-grade-devfest-2026.png';
            link.click();
        } catch {
            window.alert('Não foi possível gerar sua credencial agora.');
        }
    };

    return (
        <section className="bg-white py-20 overflow-hidden">
            <SectionTitle highlight="Agenda" />
            <p className="mx-auto w-10/12 lg:w-6/12 mb-16 mt-4 md:mt-3 text-center text-subtitle-color font-normal text-base">
                Confira o cronograma completo do evento.
            </p>
            <div className="w-full max-w-7xl mx-auto p-4">
                <div className="mb-8 flex flex-col items-center justify-between gap-4 rounded-2xl bg-[#f8f9fa] p-5 md:flex-row md:p-6">
                    <div>
                        <h3 className="text-lg font-bold text-[#21242C]">Monte sua experiência no DevFest</h3>
                        <p className="mt-1 text-sm text-gray-600">
                            Escolha uma palestra por horário e leve sua grade com você.
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={() => setIsPlannerOpen(true)}
                        className="inline-flex items-center justify-center rounded-lg bg-google-blue px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-google-blue focus:ring-offset-2"
                    >
                        Personalize Sua Grade
                    </button>
                </div>

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

            {isPlannerOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="planner-title"
                    onClick={() => setIsPlannerOpen(false)}
                >
                    <div
                        className="flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="flex items-start justify-between border-b border-gray-200 p-5 md:p-6">
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-wide text-google-blue">DevFest 2026</p>
                                <h2 id="planner-title" className="mt-1 text-2xl font-bold text-[#21242C]">
                                    Personalize sua grade
                                </h2>
                                <p className="mt-1 text-sm text-gray-600">Selecione no máximo uma palestra em cada horário.</p>
                            </div>
                            <button
                                type="button"
                                onClick={() => setIsPlannerOpen(false)}
                                className="rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
                                aria-label="Fechar personalizador"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <div className="overflow-y-auto p-5 md:p-6">
                            <div className="space-y-6">
                                {Object.entries(talksByTime).map(([time, talks]) => (
                                    <fieldset key={time}>
                                        <legend className="mb-3 text-base font-bold text-[#21242C]">{time}</legend>
                                        <div className="grid gap-3 md:grid-cols-2">
                                            {talks.map((talk) => {
                                                const isSelected = selectedTalks[time] === getTalkKey(talk);
                                                const track = tracks.find((item) => item.name === talk.track);

                                                return (
                                                    <button
                                                        type="button"
                                                        key={`${time}-${talk.title}`}
                                                        onClick={() => toggleTalk(time, talk)}
                                                        className={`flex min-h-24 items-start gap-3 rounded-xl border p-4 text-left transition focus:outline-none focus:ring-2 focus:ring-google-blue ${
                                                            isSelected
                                                                ? 'border-google-blue bg-blue-50 shadow-sm'
                                                                : 'border-gray-200 hover:border-google-blue/50 hover:bg-gray-50'
                                                        }`}
                                                    >
                                                        <span
                                                            className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2"
                                                            style={{
                                                                borderColor: isSelected ? track?.color : '#D1D5DB',
                                                                backgroundColor: isSelected ? track?.color : 'transparent',
                                                            }}
                                                        >
                                                            {isSelected && <Check className="h-3 w-3 text-white" />}
                                                        </span>
                                                        <span>
                                                            <span className="block text-sm font-semibold leading-snug text-gray-900">{talk.title}</span>
                                                            <span className="mt-2 block text-xs text-gray-500">{talk.track} · {talk.speaker}</span>
                                                        </span>
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </fieldset>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col-reverse gap-3 border-t border-gray-200 p-5 sm:flex-row sm:justify-between md:p-6">
                            <button
                                type="button"
                                onClick={() => setSelectedTalks({})}
                                className="rounded-lg px-4 py-2 text-sm font-semibold text-gray-600 transition hover:bg-gray-100"
                            >
                                Limpar escolhas
                            </button>
                            <div className="flex flex-col gap-3 sm:flex-row">
                                <button
                                    type="button"
                                    onClick={downloadScheduleImage}
                                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-google-blue px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
                                >
                                    <Download className="h-4 w-4" />
                                    Baixar
                                </button>
                                <button
                                    type="button"
                                    onClick={shareSchedule}
                                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-google-blue px-4 py-2 text-sm font-semibold text-google-blue transition hover:bg-blue-50"
                                >
                                    <Share2 className="h-4 w-4" />
                                    Compartilhar minha grade
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
