import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Trophy, Target, Zap, ArrowRight, Heart, Sparkles, Star } from 'lucide-react';
import { QuizMode } from '../types';

interface ModeSelectorProps {
  onSelect: (mode: QuizMode) => void;
}

const modes: { value: QuizMode; label: string; description: string; icon: any; color: string; count: number; time?: string; emoji: string }[] = [
  { 
    value: 'PRACTICE', 
    label: 'Ôn Tập', 
    description: 'Chậm rãi củng cố kiến thức cùng 20 câu hỏi không giới hạn thời gian. 🎈', 
    icon: Heart, 
    color: 'anime-gradient-blue',
    count: 20,
    emoji: '🎈'
  },
  { 
    value: 'BANK', 
    label: 'Thư Viện', 
    description: 'Học hỏi 30 câu hỏi ngẫu nhiên từ thư viện tri thức bí ẩn. 📚', 
    icon: Sparkles, 
    color: 'anime-gradient-purple',
    count: 30,
    emoji: '📚'
  },
  { 
    value: 'EXAM', 
    label: 'Kiểm Tra', 
    description: 'Trận chiến 50 câu hỏi trong 10 phút đầy kịch tính. Sẵn sàng chưa? 🔥', 
    icon: Zap, 
    color: 'anime-gradient-pink',
    count: 50,
    time: '10:00',
    emoji: '🔥'
  },
  { 
    value: 'CHALLENGE', 
    label: 'Thách Đấu', 
    description: 'Đấu online thời gian thực cùng bạn bè. Ai sẽ là Legend? ⚔️', 
    icon: Trophy, 
    color: 'anime-gradient-yellow',
    count: 10,
    emoji: '⚔️'
  }
];

export const ModeSelector: React.FC<ModeSelectorProps> = ({ onSelect }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 space-y-12 min-h-[75vh] font-sans">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-anime-blue/10 border-2 border-anime-blue/20 rounded-full mb-6 text-anime-blue">
           <Zap className="w-4 h-4" />
           <span className="text-[10px] font-black uppercase tracking-[0.3em] font-display">CHỌN THỬ THÁCH</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-black text-white mb-4 tracking-tight">
          BẠN MUỐN <span className="text-anime-blue underline decoration-anime-blue/30 underline-offset-8">GÌ NÈ?</span>
        </h1>
        <p className="text-slate-400 font-bold max-w-xl mx-auto">
          Chọn một phong cách học tập phù hợp với tâm trạng của bạn hôm nay nha! 💖
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl">
        {modes.map((m, index) => (
          <motion.button
            key={m.value}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => onSelect(m.value)}
            className="group relative h-[420px] anime-card p-10 text-left transition-all hover:bg-white/5 active:scale-95 flex flex-col bg-[#151921] border-white/5"
          >
            <div className="flex justify-between items-start mb-8">
              <div className={`w-16 h-16 rounded-[1.5rem] ${m.color} flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform`}>
                <m.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl filter group-hover:scale-125 transition-transform">{m.emoji}</div>
            </div>

            <div className="mb-auto">
              {m.time && (
                 <div className="bg-red-500/10 text-red-500 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-red-500/20 mb-4 inline-block">
                    Hạn giờ: {m.time}
                 </div>
              )}
              <h3 className="text-3xl font-display font-black text-white mb-4 tracking-tight">{m.label}</h3>
              <p className="text-slate-400 font-bold leading-relaxed">
                {m.description}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t-2 border-white/5 flex items-center justify-between">
              <div className="flex items-center space-x-3 text-slate-500 font-bold">
                <Target className="w-5 h-5" />
                <span>{m.count} câu hỏi</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-anime-blue transition-colors">
                <ArrowRight className="w-6 h-6 text-slate-600 group-hover:text-white" />
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};
