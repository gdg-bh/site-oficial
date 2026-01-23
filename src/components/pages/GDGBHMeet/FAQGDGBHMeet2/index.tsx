import { useState } from 'react';
import { SectionTitle } from '../../../Common/SectionTitle';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

export default function FAQGDGBHMeet2() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqItems: FAQItem[] = [
        {
            question: 'O que é o GDG BH Meet?',
            answer: 'O GDG BH Meet é um evento local promovido pelo Google Developer Group Belo Horizonte. É uma oportunidade para desenvolvedores, estudantes e entusiastas de tecnologia se reunirem para aprender, trocar experiências e fazer networking, explorando as últimas tendências e tecnologias do ecossistema Google.',
        },
        {
            question: 'Preciso ter conhecimento prévio para participar?',
            answer: 'Não é necessário ter conhecimento prévio específico. O evento é aberto a desenvolvedores, estudantes e entusiastas de tecnologia de todos os níveis de experiência. As palestras abordam temas de forma acessível, tanto para iniciantes quanto para profissionais experientes.',
        },
        {
            question: 'O evento é gratuito?',
            answer: 'Sim! O GDG BH Meet é um evento gratuito e aberto à comunidade. Nossa missão é tornar o conhecimento sobre tecnologia acessível a todos os interessados.',
        },
        {
            question: 'Onde o evento aconteceu?',
            answer: 'O GDG BH Meet 2ª Edição aconteceu na PUC Minas - Lourdes, localizada em Belo Horizonte.',
        },
        {
            question: 'Como posso me manter atualizado sobre próximos eventos?',
            answer: 'Você pode acompanhar o GDG Belo Horizonte através de nossas redes sociais e plataformas de eventos. Publicamos regularmente informações sobre nossos próximos encontros, workshops e eventos especiais. Entre em contato conosco através do nosso site para não perder nenhuma novidade!',
        },
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle text="Perguntas" highlight="frequentes" />
                <p className="mx-auto max-w-3xl mt-4 text-center text-subtitle-color font-normal text-base mb-12">
                    Tudo o que você precisa saber sobre a comunidade e eventos. Não encontrou a
                    resposta que procurava? Entre em contato com a nossa equipe por e-mail.
                </p>

                <div className="max-w-2xl mx-auto">
                    <div className="space-y-4">
                        {faqItems.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
                                >
                                    <span className="font-medium text-gray-900 pr-4">{item.question}</span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-google-blue flex-shrink-0 transition-transform duration-200 ${
                                            openIndex === index ? 'rotate-180' : ''
                                        }`}
                                    />
                                </button>
                                {openIndex === index && (
                                    <div className="px-6 pb-4 pt-2">
                                        <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
