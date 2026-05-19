import React, { useState } from 'react';
import { motion } from 'motion/react';
import { User, ArrowRight, Sparkles, Star } from 'lucide-react';

interface LoginScreenProps {
  onLogin: (name: string) => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name) {
      onLogin(name);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 md:p-6 min-h-[85vh] font-sans">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md anime-card p-8 md:p-14 relative group bg-[#151921] border-white/5"
      >
        {/* Floating elements */}
        <motion.div 
          animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute -top-6 -right-6 text-anime-blue hidden sm:block"
        >
          <Star className="w-16 h-16 fill-anime-blue/20" />
        </motion.div>
        
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-1/2 -left-8 text-anime-purple opacity-40 hidden sm:block"
        >
          <Sparkles className="w-12 h-12" />
        </motion.div>

        <div className="text-center mb-8 md:mb-10 relative">
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-20 h-20 md:w-24 md:h-24 anime-gradient-blue rounded-[2rem] md:rounded-[2.5rem] flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(0,229,255,0.3)] rotate-2"
          >
            <span className="font-display font-black text-5xl md:text-6xl text-white">M</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-display font-black text-white mb-2 leading-tight">
            TOÁN<br/>
            <span className="text-anime-blue">LEGEND</span>
          </h2>
          <p className="text-sm md:text-base text-slate-400 font-bold tracking-tight">Học toán siêu cấp, chiến hết mình! ⚔️</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8 relative">
          <div className="space-y-4">
            <div className="relative group">
              <div className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 md:w-6 md:h-6 text-slate-600 group-focus-within:text-anime-blue transition-colors">
                <User className="w-full h-full" />
              </div>
              <input
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tên của bạn?..."
                className="w-full bg-[#1A1F2B] border-4 border-transparent rounded-[1.5rem] md:rounded-[2rem] py-5 md:py-6 pl-14 md:pl-16 pr-6 text-white text-base md:text-lg font-bold placeholder:text-slate-700 focus:border-anime-blue focus:bg-[#1E2530] outline-none transition-all"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full anime-btn anime-gradient-blue text-lg md:text-xl flex items-center justify-center space-x-3 group py-4 md:py-5"
          >
            <span>BẮT ĐẦU CHIẾN!</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </motion.div>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        className="mt-8 text-slate-400 text-xs font-bold uppercase tracking-[0.2em]"
      >
        © 2024 • Thừa thắng xông lên!
      </motion.p>
    </div>
  );
};
