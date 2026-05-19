import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, GraduationCap, ChevronRight, Star, Sparkles } from 'lucide-react';
import { Grade } from '../types';

interface GradeSelectorProps {
  onSelect: (grade: Grade) => void;
}

const grades: { value: Grade; label: string; icon: any; color: string; desc: string }[] = [
  { value: 6, label: 'Lớp 6', icon: Star, color: 'anime-gradient-blue', desc: 'Lính mới tò te ✨' },
  { value: 7, label: 'Lớp 7', icon: Sparkles, color: 'anime-gradient-pink', desc: 'Đã lên tay rồi nè! 💖' },
  { value: 8, label: 'Lớp 8', icon: GraduationCap, color: 'bg-gradient-to-br from-[#9D81FF] to-[#BDADFF]', desc: 'Chiến binh toán học ⚔️' },
  { value: 9, label: 'Lớp 9', icon: BookOpen, color: 'bg-gradient-to-br from-[#FFD670] to-[#FFE4A1]', desc: 'Sắp về đích rồi! 🏆' },
];

export const GradeSelector: React.FC<GradeSelectorProps> = ({ onSelect }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 space-y-10 min-h-[75vh] font-sans">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="bg-anime-blue/10 px-4 py-1 rounded-full border-2 border-anime-blue/20 inline-block mb-4">
           <span className="text-[10px] font-black tracking-[0.3em] uppercase text-anime-blue">CHỌN KHỐI LỚP</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-black text-white tracking-tight mb-2">
          HÀNH TRÌNH <span className="text-anime-blue">KHÁM PHÁ</span>
        </h1>
        <p className="text-slate-400 font-bold max-w-sm mx-auto">Chọn một lớp để bắt đầu cuộc phiêu lưu nhé! ✨</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
        {grades.map((g, index) => (
          <motion.button
            key={g.value}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => onSelect(g.value)}
            className="group relative anime-card p-6 flex items-center justify-between transition-all hover:bg-white/5 active:scale-95 bg-[#151921] border-white/5"
          >
            <div className="flex items-center space-x-5 text-left">
              <div className={`w-14 h-14 rounded-2xl ${g.color} flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform`}>
                <g.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-left">
                <span className="block text-2xl font-display font-black text-white tracking-tight">{g.label}</span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">{g.desc}</span>
              </div>
            </div>

            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-anime-blue transition-all">
              <ChevronRight className="w-6 h-6 text-slate-600 group-hover:text-white" />
            </div>
          </motion.button>
        ))}
      </div>

      {/* Decorative rank icons */}
      <div className="flex items-center space-x-6 pt-8 opacity-40">
        <div className="flex flex-col items-center">
          <div className="text-2xl">🥉</div>
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2">Bronze</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-2xl">🥈</div>
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2">Silver</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-2xl">🥇</div>
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2">Gold</span>
        </div>
      </div>
    </div>
  );
};
