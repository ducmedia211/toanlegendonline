import React from 'react';
import { motion } from 'motion/react';
import { Gauge, Zap, Flame, Brain, Rabbit, Cat, Ghost } from 'lucide-react';

type Difficulty = 'EASY' | 'MEDIUM' | 'HARD';

interface DifficultySelectorProps {
  onSelect: (difficulty: Difficulty) => void;
}

const difficulties: { value: Difficulty; label: string; description: string; icon: any; color: string; tint: string }[] = [
  { 
    value: 'EASY', 
    label: 'Dễ ợt!', 
    description: 'Bắt đầu nhẹ nhàng như thỏ con nhảy nhót. 🐰', 
    icon: Rabbit, 
    color: 'anime-gradient-blue',
    tint: 'text-anime-blue'
  },
  { 
    value: 'MEDIUM', 
    label: 'Vừa sức', 
    description: 'Cần một chút tập trung như mèo săn mồi nha! 🐱', 
    icon: Cat, 
    color: 'bg-gradient-to-br from-[#FFD670] to-[#FFAA00]',
    tint: 'text-yellow-500'
  },
  { 
    value: 'HARD', 
    label: 'Siêu khó!', 
    description: 'Thử thách cực đại, chỉ dành cho boss thực thụ! 👻', 
    icon: Ghost, 
    color: 'anime-gradient-pink',
    tint: 'text-anime-pink'
  }
];

export const DifficultySelector: React.FC<DifficultySelectorProps> = ({ onSelect }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 space-y-12 min-h-[70vh] font-sans">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <div className="inline-block p-4 rounded-full bg-anime-blue/10 mb-6 animate-bounce-gentle">
           <Gauge className="w-12 h-12 text-anime-blue" />
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-black text-slate-800 mb-4 tracking-tight">
          THỬ THÁCH <span className="text-anime-pink">MỨC NÀO?</span>
        </h1>
        <p className="text-slate-500 font-bold max-w-lg mx-auto">
          Chọn một mức độ để kiểm tra trình độ siêu cấp của mình nhé!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {difficulties.map((d, index) => (
          <motion.button
            key={d.value}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => onSelect(d.value)}
            className="group relative anime-card p-8 text-left transition-all hover:translate-y-[-8px] hover:shadow-[0_12px_20px_-5px_rgba(0,0,0,0.1)] active:scale-95"
          >
            <div className="relative z-10 flex flex-col items-start h-full">
              <div className={`w-16 h-16 rounded-2xl ${d.color} flex items-center justify-center mb-6 shadow-md transition-transform group-hover:rotate-12`}>
                <d.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className={`text-2xl font-display font-black mb-3 tracking-tight ${d.tint}`}>{d.label}</h3>
              <p className="text-slate-500 font-bold leading-relaxed">
                {d.description}
              </p>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};
