import React from 'react';
import { motion } from 'motion/react';
import { Award, Star, ShieldCheck } from 'lucide-react';

interface CertificateProps {
  userName: string;
  grade: number;
  score: number;
  totalQuestions: number;
}

export const Certificate: React.FC<CertificateProps> = ({ userName, grade, score, totalQuestions }) => {
  const percentage = (score / totalQuestions) * 100;
  
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      className="relative w-full max-w-3xl aspect-[1.414/1] bg-[#151921] border-[12px] border-anime-blue/20 p-2 shadow-2xl overflow-hidden rounded-sm"
    >
      {/* Decorative Border */}
      <div className="w-full h-full border-2 border-anime-blue/30 relative flex flex-col items-center justify-center p-12 text-white">
        
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(#00E5FF 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        </div>

        {/* Certificate Content */}
        <div className="text-center space-y-6 z-10 w-full">
          <div className="flex justify-center mb-4 relative">
            <motion.div
              animate={{ rotateY: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="relative z-10"
            >
              <Award className="w-24 h-24 text-anime-blue" />
            </motion.div>
            <div className="absolute inset-0 bg-anime-blue/20 blur-3xl rounded-full"></div>
          </div>
          
          <h1 className="text-6xl font-display font-black tracking-widest uppercase italic text-white drop-shadow-[0_0_15px_rgba(0,229,255,0.5)]">BẢNG VÀNG DANH DỰ</h1>
          <div className="w-64 h-1 bg-gradient-to-r from-transparent via-anime-blue to-transparent mx-auto mt-4"></div>
          
          <p className="text-xl font-bold italic mt-8 text-anime-blue/80 uppercase tracking-widest">HỆ THỐNG TOÁN LEGEND TUYÊN DƯƠNG HIỆP SĨ:</p>
          
          <h2 className="text-6xl font-display font-black tracking-tight text-white py-6 bg-white/5 inline-block px-12 rounded-2xl border border-white/10 shadow-inner">{userName || 'Học Viên Xuất Sắc'}</h2>
          
          <p className="text-lg font-bold max-w-lg mx-auto leading-relaxed text-slate-300">
            Đã hoàn thành xuất sắc thử thách Toán Học <span className="text-anime-blue">Lớp {grade}</span> với kết quả đạt <span className="text-anime-mint font-black">{score}/{totalQuestions} CÂU ĐÚNG</span>.
          </p>

          <div className="pt-16 flex items-center justify-around w-full">
            <div className="text-center">
                <div className="w-32 h-0.5 bg-white/10 mb-2"></div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-black">Ngày ghi danh</p>
                <p className="font-display font-bold text-sm tracking-widest text-white">{new Date().toLocaleDateString('vi-VN')}</p>
            </div>

            <div className="relative">
              <div className="absolute -inset-10 bg-anime-blue/10 rounded-full blur-2xl animate-pulse"></div>
              <div className="w-28 h-28 border-4 border-anime-blue/40 rounded-full flex items-center justify-center rotate-[-15deg] bg-anime-blue/5">
                 <div className="text-anime-blue font-black text-[12px] text-center leading-none tracking-tighter">
                    CHỨNG NHẬN<br/>SIÊU CẤP<br/>TOÁN LEGEND
                 </div>
              </div>
            </div>

            <div className="text-center">
                 <div className="w-32 h-0.5 bg-white/10 mb-2"></div>
                 <p className="text-[10px] uppercase tracking-widest text-slate-500 font-black">Hạng danh hiệu</p>
                 <p className="font-display font-bold text-sm tracking-widest text-anime-mint">
                    {percentage >= 90 ? 'SIÊU CẤP' : percentage >= 80 ? 'CAO THỦ' : 'CHIẾN BINH'}
                 </p>
            </div>
          </div>
        </div>

        {/* Corner Decorations */}
        <div className="absolute top-6 left-6 w-16 h-16 border-t-4 border-l-4 border-anime-blue shadow-[0_0_10px_rgba(0,229,255,0.3)]"></div>
        <div className="absolute top-6 right-6 w-16 h-16 border-t-4 border-r-4 border-anime-blue shadow-[0_0_10px_rgba(0,229,255,0.3)]"></div>
        <div className="absolute bottom-6 left-6 w-16 h-16 border-b-4 border-l-4 border-anime-blue shadow-[0_0_10px_rgba(0,229,255,0.3)]"></div>
        <div className="absolute bottom-6 right-6 w-16 h-16 border-b-4 border-r-4 border-anime-blue shadow-[0_0_10px_rgba(0,229,255,0.3)]"></div>
      </div>
    </motion.div>
  );
};
