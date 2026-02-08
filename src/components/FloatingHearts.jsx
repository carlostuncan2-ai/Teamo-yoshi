import { useEffect, useState } from 'react';

interface Heart {
    id: number;
    left: number;
    delay: number;
    size: number;
    duration: number;
}

const FloatingHearts = () => {
    const [hearts, setHearts] = useState<Heart[]>([]);

    useEffect(() => {
        const initialHearts: Heart[] = Array.from({ length: 15 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            delay: Math.random() * 5,
            size: 16 + Math.random() * 24,
            duration: 5 + Math.random() * 5,
        }));
        setHearts(initialHearts);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {hearts.map((heart) => (
                <div key={heart.id} className="absolute text-primary/30" style={{
                    left: `${heart.left}%`,
                    fontSize: `${heart.size}px`,
                    animation: `float-heart ${heart.duration}s linear infinite`,
                    animationDelay: `${heart.delay}s`,
                }}>
                    ♥
                </div>
            ))}
        </div>
    );
};

export default FloatingHearts;