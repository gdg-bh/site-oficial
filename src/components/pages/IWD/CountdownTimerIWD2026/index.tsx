import { useState, useEffect } from 'react';
import { CountdownElement } from '../../DevFest/CountdownTimer/CountdownElement';

const colors = ['google-blue', 'google-red', 'google-green', 'google-gold'];

export function CountdownTimerIWD2026() {
    const targetDate = new Date('2026-03-14T08:00:00').getTime();
    const [timeLeft, setTimeLeft] = useState({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({
                    days: days.toString().padStart(2, '0'),
                    hours: hours.toString().padStart(2, '0'),
                    minutes: minutes.toString().padStart(2, '0'),
                    seconds: seconds.toString().padStart(2, '0'),
                });
            } else {
                setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);
        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <section className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
                    Contagem Regressiva para o Evento
                </h2>
                <div className="flex flex-wrap justify-center gap-8">
                    <CountdownElement remainingQuantity={timeLeft.days} contentType="Dias" bgColor={colors[0]} />
                    <CountdownElement remainingQuantity={timeLeft.hours} contentType="Horas" bgColor={colors[1]} />
                    <CountdownElement remainingQuantity={timeLeft.minutes} contentType="Minutos" bgColor={colors[2]} />
                    <CountdownElement remainingQuantity={timeLeft.seconds} contentType="Segundos" bgColor={colors[3]} />
                </div>
            </div>
        </section>
    );
}
