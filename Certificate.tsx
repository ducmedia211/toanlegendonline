import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, AlertCircle, CheckCircle2, XCircle, Star, Sparkles, Zap } from 'lucide-react';
import { Question, QuizMode } from '../types';

interface QuizBoardProps {
  questions: Question[];
  onFinish: (score: number, correctAnswers: number, incorrectQuestions: Question[]) => void;
  onProgress?: (score: number, progress: number) => void;
  mode: QuizMode;
}

export const QuizBoard: React.FC<QuizBoardProps> = ({ questions, onFinish, onProgress, mode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(mode === 'EXAM' ? 600 : 30);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectQuestions, setIncorrectQuestions] = useState<Question[]>([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [showEmoji, setShowEmoji] = useState<string | null>(null);
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  if (!questions || questions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12">
        <AlertCircle className="w-16 h-16 text-anime-pink mb-4" />
        <h2 className="text-2xl font-display font-bold text-white">Không tìm thấy câu hỏi</h2>
        <p className="text-slate-500 mt-2">Vui lòng thử lại với lựa chọn khác.</p>
        <button 
          onClick={() => window.location.reload()}
          className="mt-6 anime-btn anime-gradient-blue"
        >
          Quay lại
        </button>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex) / questions.length) * 100;

  useEffect(() => {
    if (!hasStarted && mode === 'EXAM') return;

    if (mode === 'BANK') {
      stopTimer();
      return;
    }

    if (mode === 'PRACTICE') {
      startPerQuestionTimer();
    } else if (mode === 'EXAM') {
      startGlobalTimer();
    }
    return () => stopTimer();
  }, [currentIndex, mode, hasStarted]);

  const goToNext = (currentCorrectCount: number = correctCount, currentIncorrects: Question[] = incorrectQuestions) => {
    if (currentIndex >= questions.length - 1) {
      forceStopAllTimers();
      onFinish(currentCorrectCount * 10, currentCorrectCount, currentIncorrects);
    } else {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      setSelectedOption(null);
      setIsAnswered(false);
      setShowEmoji(null);
      if (mode === 'PRACTICE') setTimeLeft(30);
      
      if (onProgress) {
        onProgress(currentCorrectCount * 10, nextIndex);
      }
    }
  };

  const startPerQuestionTimer = () => {
    setTimeLeft(30);
    stopTimer();
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          const newIncorrects = [...incorrectQuestions, questions[currentIndex]];
          setIncorrectQuestions(newIncorrects);
          goToNext(correctCount, newIncorrects);
          return 30;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const startGlobalTimer = () => {
    if (currentIndex === 0 && !timerRef.current) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            const remaining = questions.slice(currentIndex);
            const finalIncorrects = [...incorrectQuestions, ...remaining];
            onFinish(correctCount * 10, correctCount, finalIncorrects);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
  };

  const stopTimer = () => {
    if (mode === 'PRACTICE') {
      if (timerRef.current) clearInterval(timerRef.current);
    }
  };

  const forceStopAllTimers = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  useEffect(() => {
    return () => forceStopAllTimers();
  }, []);

  const handleOptionClick = (index: number) => {
    if (isAnswered) return;
    
    setSelectedOption(index);
    setIsAnswered(true);
    
    if (mode === 'PRACTICE') stopTimer();

    const correct = index === currentQuestion.correctAnswer;
    const newCorrectCount = correct ? correctCount + 1 : correctCount;
    let newIncorrects = incorrectQuestions;
    
    if (correct) {
      setCorrectCount(newCorrectCount);
      setShowEmoji('✨');
      playEffect('correct');
      if (onProgress) {
        onProgress(newCorrectCount * 10, currentIndex);
      }
    } else {
      newIncorrects = [...incorrectQuestions, currentQuestion];
      setIncorrectQuestions(newIncorrects);
      setShowEmoji('💢');
      playEffect('error');
    }

    const board = document.querySelector('.quiz-board-container');
    if (board) {
      if (correct) {
        board.classList.add('animate-sparkle');
        setTimeout(() => board.classList.remove('animate-sparkle'), 500);
      } else {
        board.classList.add('animate-shake');
        setTimeout(() => board.classList.remove('animate-shake'), 500);
      }
    }

    setTimeout(() => {
      goToNext(newCorrectCount, newIncorrects);
    }, 1200);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const playEffect = (type: 'correct' | 'error') => {
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContext) return;
      const audioCtx = new AudioContext();
      if (audioCtx.state === 'suspended') audioCtx.resume();

      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      if (type === 'correct') {
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(880, audioCtx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(1320, audioCtx.currentTime + 0.1);
      } else {
        oscillator.type = 'sawtooth';
        oscillator.frequency.setValueAtTime(110, audioCtx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(55, audioCtx.currentTime + 0.2);
      }

      gainNode.gain.setValueAtTime(0.2, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.2);

      oscillator.start();
      oscillator.stop(audioCtx.currentTime + 0.2);
    } catch (e) {
      console.warn("Audio effect failed", e);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-6 font-sans">
      <AnimatePresence>
        {!hasStarted && mode === 'EXAM' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-white/80 backdrop-blur-md"
          >
            <div className="anime-card p-12 text-center max-w-md w-full border-anime-blue shadow-[0_12px_0_0_#00E5FF] bg-[#1A1F2B]">
              <div className="w-24 h-24 bg-anime-blue/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce-gentle">
                <Clock className="w-12 h-12 text-anime-blue" />
              </div>
              <h2 className="text-4xl font-display font-black text-white mb-4 tracking-tighter">SẴN SÀNG CHƯA?</h2>
              <p className="text-slate-400 mb-8 text-lg font-medium">
                Bài kiểm tra gồm 50 câu hỏi trong 10 phút. Cố gắng hết mình nhé! ⚔️
              </p>
              <button
                onClick={() => setHasStarted(true)}
                className="w-full anime-btn anime-gradient-blue text-xl"
              >
                BẤT ĐẦU NGAY!
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header Info */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6 md:mb-8">
        <div className="flex flex-row md:flex-col items-center md:items-start space-x-4 md:space-x-0">
          <div className="flex items-center space-x-2 text-anime-pink font-display font-bold shrink-0">
            <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
            <span className="uppercase tracking-widest text-[10px] md:text-sm">
               {mode === 'EXAM' ? 'Kiểm Tra' : mode === 'BANK' ? 'Thư Viện' : 'Luyện Tập'}
            </span>
          </div>
          <div className="flex items-baseline space-x-2">
             <span className="text-4xl md:text-5xl font-display font-black text-anime-pink drop-shadow-sm">{currentIndex + 1}</span>
             <span className="text-lg md:text-xl font-bold text-slate-300">/ {questions.length}</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="flex-1 max-w-sm w-full">
          <div className="h-3 md:h-4 bg-slate-100/10 rounded-full overflow-hidden border-2 border-white/5 shadow-inner">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full anime-gradient-pink relative"
            >
              <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/20" />
            </motion.div>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          {(mode === 'EXAM' || mode === 'PRACTICE') && (
            <div className={`p-3 md:p-4 rounded-2xl md:rounded-3xl flex items-center space-x-3 border-2 ${timeLeft < 10 ? "bg-red-500/10 border-red-500/20" : "bg-white/5 border-white/5"}`}>
              <Clock className={`w-5 h-5 md:w-6 md:h-6 ${timeLeft < 10 ? "text-red-500 animate-pulse" : "text-anime-blue"}`} />
              <div className="flex flex-col">
                <span className="text-[8px] md:text-[10px] font-bold text-slate-500 uppercase tracking-wider">Thời gian</span>
                <span className={`text-xl md:text-2xl font-display font-black tabular-nums ${timeLeft < 10 ? "text-red-500" : "text-slate-200"}`}>
                  {mode === 'EXAM' ? formatTime(timeLeft) : `${timeLeft}s`}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Quiz Body */}
      <div className="quiz-board-container relative">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.1, y: -20 }}
            transition={{ type: "spring", damping: 15 }}
            className="anime-card p-6 md:p-14 relative"
          >
            {/* Difficulty Badge */}
            <div className={`absolute top-4 right-6 md:top-6 md:right-8 px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-xs font-bold font-display border-2 ${
              currentQuestion.difficulty === 'HARD' ? 'bg-red-500/10 text-red-400 border-red-500/20' :
              currentQuestion.difficulty === 'MEDIUM' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' :
              'bg-blue-500/10 text-blue-400 border-blue-500/20'
            }`}>
              {currentQuestion.difficulty === 'HARD' ? 'KHÓ' : currentQuestion.difficulty === 'MEDIUM' ? 'VỪA' : 'DỄ'}
            </div>

            {/* Answer Feedback Emoji */}
            <AnimatePresence>
              {showEmoji && (
                <motion.div
                  initial={{ opacity: 0, scale: 0, y: 0 }}
                  animate={{ opacity: 1, scale: 1, y: -80 }}
                  exit={{ opacity: 0, scale: 2 }}
                  className="absolute left-1/2 -translate-x-1/2 text-5xl md:text-7xl z-20 pointer-events-none"
                >
                  {showEmoji}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="min-h-[100px] md:min-h-[120px] flex items-center justify-center mb-8 md:mb-10 px-2">
              <h2 className="text-xl md:text-3xl font-bold text-white text-center leading-relaxed font-sans">
                {currentQuestion.text}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
              {currentQuestion.options.map((option, index) => {
                const alphabet = ['A', 'B', 'C', 'D'];
                const isSelected = selectedOption === index;
                const isCorrect = isAnswered && index === currentQuestion.correctAnswer;
                const isWrong = isAnswered && isSelected && !isCorrect;

                return (
                  <button
                    key={index}
                    disabled={isAnswered}
                    onClick={() => handleOptionClick(index)}
                    className={`
                      group relative p-4 md:p-6 rounded-xl md:rounded-2xl border-2 text-left transition-all duration-200
                      ${isAnswered ? 'cursor-default' : 'bg-white/5 border-white/5 hover:border-anime-blue hover:bg-white/10 active:scale-95 shadow-sm'}
                      ${isCorrect ? 'border-anime-mint bg-anime-mint/20 !bg-opacity-20' : 
                        isWrong ? 'border-anime-pink bg-anime-pink/20 !bg-opacity-20' : 
                        ''}
                    `}
                  >
                    <div className="flex items-center space-x-4 md:space-x-6">
                      <div className={`
                        w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl md:rounded-2xl border-2 text-base md:text-xl font-display font-black transition-all
                        ${isCorrect ? 'bg-anime-mint border-anime-mint text-white scale-110 rotate-12' : 
                          isWrong ? 'bg-anime-pink border-anime-pink text-white scale-90' : 
                          'bg-white/10 border-white/10 text-slate-500 group-hover:text-anime-blue group-hover:border-anime-blue'}
                      `}>
                        {alphabet[index]}
                      </div>
                      <span className={`text-sm md:text-lg font-bold ${isAnswered && !isCorrect && !isWrong ? 'text-slate-600' : 'text-slate-200'} line-clamp-2 md:line-clamp-none`}>
                        {option}
                      </span>
                    </div>
                    
                    {isCorrect && (
                      <div className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2">
                        <Star className="text-anime-yellow w-6 h-6 md:w-8 md:h-8 fill-anime-yellow animate-pulse" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Decorative Icons */}
      <div className="flex justify-center mt-8 space-x-8 opacity-20 pointer-events-none">
        <Zap className="w-12 h-12 text-anime-yellow" />
        <Star className="w-12 h-12 text-anime-pink" />
        <Sparkles className="w-12 h-12 text-anime-blue" />
      </div>
    </div>
  );
};
