import React from 'react';
import { motion } from 'motion/react';
import { Grade } from '../types';
import { knowledgeSummaries } from '../data/knowledge';
import { BookOpen, CheckCircle, ArrowLeft, Star, Heart } from 'lucide-react';

interface KnowledgeSummaryProps {
  grade: Grade;
  onBack: () => void;
  onStartQuiz: () => void;
}

export const KnowledgeSummary: React.FC<KnowledgeSummaryProps> = ({ grade, onBack, onStartQuiz }) => {
  const summary = knowledgeSummaries.find(s => s.grade === grade);

  if (!summary) return null;

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 font-sans">
      <div className="flex items-center justify-between mb-10">
        <button 
          onClick={onBack}
          className="flex items-center space-x-2 text-slate-500 hover:text-anime-blue transition-colors font-bold group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="uppercase tracking-widest text-xs">Quay lại</span>
        </button>
        <div className="text-right">
           <span className="text-[10px] font-black uppercase tracking-[0.4em] text-anime-blue">Kiến thức trọng tâm</span>
           <h2 className="text-3xl font-display font-black text-white tracking-tight">KỲ THÚ LỚP {grade}</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 mb-14">
        {summary.sections.map((section, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="anime-card p-8 md:p-10 relative overflow-hidden bg-[#151921] border-white/5"
          >
            <div className="absolute top-[-20px] right-[-20px] opacity-10 rotate-12">
              <BookOpen className="w-32 h-32 text-anime-blue" />
            </div>
            
            <h3 className="text-lg font-black text-anime-blue uppercase tracking-[0.2em] mb-8 flex items-center">
              <div className="w-3 h-3 bg-anime-blue rounded-full mr-4 shadow-[0_0_8px_rgba(0,229,255,0.5)]" />
              {section.title}
            </h3>
            
            <ul className="space-y-6 relative z-10">
              {section.content.map((item, i) => (
                <li key={i} className="flex items-start space-x-4 text-slate-300 group">
                  <div className="mt-1 flex-shrink-0">
                    <Heart className="w-5 h-5 text-anime-blue/20 group-hover:text-anime-blue transition-colors fill-current" />
                  </div>
                  <span className="text-base md:text-lg font-bold leading-relaxed tracking-tight">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center flex-col items-center space-y-6">
        <button
          onClick={onStartQuiz}
          className="anime-btn anime-gradient-blue px-16 py-6 text-xl flex items-center space-x-3 group"
        >
          <Star className="w-6 h-6 fill-white" />
          <span>CHIẾN NGAY!</span>
        </button>
        <p className="text-slate-500 font-bold text-sm">Sẵn sàng để trở thành cao thủ toán học chưa? ⚔️</p>
      </div>
    </div>
  );
};
