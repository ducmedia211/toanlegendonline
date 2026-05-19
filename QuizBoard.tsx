import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { Trophy, RefreshCw, Home, Award, XCircle, FileText, Sparkles, Heart, Star } from 'lucide-react';
import { Grade } from '../types';
import { Certificate } from './Certificate';

interface ResultScreenProps {
  userName: string;
  score: number;
  correctCount: number;
  totalCount: number;
  grade: Grade;
  onRetry: () => void;
  onRetryWrong: () => void;
  incorrectCount: number;
  onHome: () => void;
  onLeaderboard?: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({ 
  userName,
  score, 
  correctCount, 
  totalCount, 
  grade, 
  onRetry, 
  onRetryWrong,
  incorrectCount,
  onHome,
  onLeaderboard
}) => {
  const [showCertificate, setShowCertificate] = useState(false);
  const percentage = Math.round((correctCount / totalCount) * 100);
  const isPassed = percentage >= 60;

  useEffect(() => {
    if (isPassed) {
      const duration = 5 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
      const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

      const interval: any = setInterval(function() {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return clearInterval(interval);
        const particleCount = 50 * (timeLeft / duration);
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
      }, 250);
    }
  }, [isPassed]);

  return (
    <div className="flex flex-col items-center justify-center p-4 space-y-8 min-h-[85vh] w-full max-w-2xl mx-auto font-sans">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full anime-card overflow-hidden bg-[#151921] border-white/5"
      >
        <div className={`p-10 text-center relative ${isPassed ? 'anime-gradient-blue' : 'anime-gradient-pink'}`}>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
          
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', damping: 10, stiffness: 100 }}
            className="w-28 h-28 mx-auto mb-6 rounded-full bg-[#0B0E14] flex items-center justify-center shadow-xl relative"
          >
            {isPassed ? (
              <>
                <Star className="w-14 h-14 text-anime-yellow fill-anime-yellow" />
                <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-white animate-pulse" />
              </>
            ) : (
              <XCircle className="w-14 h-14 text-anime-pink" />
            )}
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-2 tracking-tight">
            {isPassed ? 'CHIẾN THẮNG!' : 'CỐ GẮNG HƠN!'}
          </h2>
          <p className="text-white/80 font-bold text-lg">
            {isPassed ? `Chúc mừng ${userName}! Thật đỉnh cao! ✨` : `${userName} cần luyện tập thêm rồi! ⚔️`}
          </p>
        </div>

        <div className="p-10 flex flex-col items-center space-y-10">
          <div className="flex justify-around w-full">
            <div className="text-center group">
              <div className="text-[10px] font-bold tracking-widest text-slate-500 uppercase mb-2">Thành tích</div>
              <div className="flex items-baseline justify-center group-hover:scale-110 transition-transform">
                <span className={`text-6xl font-display font-black ${isPassed ? 'text-anime-blue' : 'text-anime-pink'}`}>{percentage}</span>
                <span className="text-2xl font-bold text-slate-400">%</span>
              </div>
            </div>

            <div className="text-center group">
              <div className="text-[10px] font-bold tracking-widest text-slate-500 uppercase mb-2">Đúng / Sai</div>
              <div className="flex items-baseline justify-center group-hover:scale-110 transition-transform">
                 <span className="text-4xl font-display font-black text-white">{correctCount}</span>
                 <span className="text-xl font-bold text-slate-500"> / {totalCount}</span>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col space-y-4">
            {isPassed && (
              <button
                onClick={() => setShowCertificate(true)}
                className="anime-btn anime-gradient-blue flex items-center justify-center space-x-3 text-lg"
              >
                <FileText className="w-6 h-6" />
                <span>XEM CHỨNG NHẬN 📜</span>
              </button>
             )}
            
            {incorrectCount > 0 && (
              <button
                onClick={onRetryWrong}
                className="anime-btn bg-anime-purple hover:bg-anime-purple/80 !text-white flex items-center justify-center space-x-3 text-lg shadow-[0_4px_0_0_rgba(123,97,255,0.4)]"
              >
                <RefreshCw className="w-6 h-6 group-hover:rotate-180 transition-transform" />
                <span>PHỤC THÙ CÂU SAI ({incorrectCount})</span>
              </button>
            )}

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={onRetry}
                className="px-6 py-4 rounded-2xl font-bold text-slate-300 bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center space-x-2 border border-white/5"
              >
                <RefreshCw className="w-5 h-5" />
                <span>THỬ LẠI</span>
              </button>
              <button
                onClick={onLeaderboard}
                className="px-6 py-4 rounded-2xl font-bold text-anime-yellow bg-anime-yellow/10 hover:bg-anime-yellow/20 transition-colors flex items-center justify-center space-x-2 border border-anime-yellow/20"
              >
                <Trophy className="w-5 h-5" />
                <span>BẢNG XẾP HẠNG</span>
              </button>
            </div>
            <button
              onClick={onHome}
              className="w-full px-6 py-4 rounded-2xl font-bold text-slate-300 bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center space-x-2 border border-white/5"
            >
              <Home className="w-5 h-5" />
              <span>VỀ TRANG CHỦ</span>
            </button>
          </div>
        </div>
      </motion.div>
      
      <AnimatePresence>
        {showCertificate && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-white/95 backdrop-blur-md"
          >
            <div className="absolute top-6 right-6 z-20">
              <button 
                onClick={() => setShowCertificate(false)}
                className="p-3 bg-slate-100 hover:bg-slate-200 text-slate-500 rounded-full transition-colors"
              >
                <XCircle className="w-8 h-8" />
              </button>
            </div>
            
            <div className="w-full max-w-5xl flex flex-col items-center">
               <motion.div 
                 initial={{ scale: 0.8, y: 50 }}
                 animate={{ scale: 1, y: 0 }}
                 className="scale-[0.5] sm:scale-[0.65] md:scale-90 lg:scale-100 origin-center"
               >
                 <Certificate 
                    userName={userName} 
                    grade={grade} 
                    score={correctCount} 
                    totalQuestions={totalCount} 
                 />
               </motion.div>
               <button 
                 onClick={() => setShowCertificate(false)}
                 className="mt-8 px-10 py-4 anime-btn anime-gradient-pink text-xl"
               >
                 TUYỆT QUÁ! ĐÓNG LẠI THÔI
               </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-center opacity-30 flex items-center space-x-2">
         <Heart className="w-4 h-4 text-anime-pink fill-anime-pink" />
         <p className="text-[10px] font-black tracking-[0.2em] uppercase text-slate-500">Học là phải vui - Toán Legend</p>
         <Heart className="w-4 h-4 text-anime-pink fill-anime-pink" />
      </div>
    </div>
  );
};
