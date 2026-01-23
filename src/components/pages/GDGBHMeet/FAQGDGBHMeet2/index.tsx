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
            question: 'Posso Transferir Meu Ingresso Para Outra Pessoa?',
            answer: 'Não. Os ingressos são nominais e intransferíveis.',
        },
        {
            question: 'Existe Alguma Regra De Vestimenta Para Entrar No Local Do Evento?',
            answer: 'Sim. Para acesso ao local, é obrigatório o uso de sapato fechado, conforme regras da Localiza.',
        },
        {
            question: 'O Evento Terá Acessibilidade Em LIBRAS?',
            answer: 'Sim. O evento contará com tradução em LIBRAS.',
        },
        {
            question: 'Como Funciona A Entrega Dos Brindes?',
            answer: 'Os brindes são entregues somente no dia do evento e apenas para pessoas presentes.',
        },
        {
            question: 'O Evento Emite Certificado De Participação?',
            answer: 'Sim. O certificado será enviado na semana seguinte ao evento para o e-mail cadastrado no ingresso. Caso não o receba, ele também ficará disponível no aplicativo da Sympla.',
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
                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${
                                        openIndex === index
                                            ? 'grid-rows-[1fr] opacity-100'
                                            : 'grid-rows-[0fr] opacity-0'
                                    }`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="px-6 pb-4 pt-2">
                                            <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
