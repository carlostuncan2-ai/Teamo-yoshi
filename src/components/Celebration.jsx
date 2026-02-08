import { useEffect, useState } from 'react';
interface Particle {
    id: number;
    left: number;
    delay: number;
    emoji: string;
    size: number;
}

const Celebration = () => {
    const [particles, setParticles] = useState<Particle[]>([]);
    const emojis = ['🌸', '🌺', '🌷', '💐', '🌹', '💕', '💖', '✨', '🎀'];

    useEffect(() => {
        const newParticles: Particle[] = Array.from({ length: 50 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            delay: Math.random() * 2,
            emoji: emojis[Math.floor(Math.random() * emojis.length)],
            size: 20 + Math.random() * 30,
        }));
        setParticles(newParticles);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
            {particles.map((particle) => (
                <div key={particle.id} className="absolute animate-confetti" style={{ left: `${particle.left}%`, fontSize: `${particle.size}px`, animationDelay: `${particle.delay}s`, }}>
                    {particle.emoji}
                </div>
            ))}
        </div>
    );
};

export default Celebration;