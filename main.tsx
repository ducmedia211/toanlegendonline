import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GradeSelector } from './components/GradeSelector';
import { ModeSelector } from './components/ModeSelector';
import { DifficultySelector } from './components/DifficultySelector';
import { QuizBoard } from './components/QuizBoard';
import { ResultScreen } from './components/ResultScreen';
import { DongSonPattern } from './components/DongSonPattern';
import { getRandomQuestions } from './data/questions';
import { AuthUser, Grade, Question, UserStats, QuizMode } from './types';
import { Trophy, Shield, User, LogOut, Home as HomeIcon, Zap, Edit2, X, Check, Lock, Settings, Users } from 'lucide-react';

import { AuthScreen } from './components/AuthScreen';
import { BackgroundMusic } from './components/BackgroundMusic';
import { KnowledgeSummary } from './components/KnowledgeSummary';
import { LeaderboardScreen } from './components/LeaderboardScreen';
import { ChallengeView } from './components/ChallengeView';
import { submitScore } from './lib/leaderboard';
import { updateProfile } from './lib/auth';

export default function App() {
  const [view, setView] = useState<'AUTH' | 'MODE_SELECT' | 'GRADE_SELECT' | 'DIFFICULTY_SELECT' | 'QUIZ' | 'RESULT' | 'KNOWLEDGE_SUMMARY' | 'LEADERBOARD' | 'CHALLENGE'>('AUTH');
  const [user, setUser] = useState<AuthUser | null>(() => {
    const saved = localStorage.getItem('toan_legend_user');
    return saved ? JSON.parse(saved) : null;
  });
  
  const [tempUserName, setTempUserName] = useState('');
  const [isEditingName, setIsEditingName] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  
  const [quizMode, setQuizMode] = useState<QuizMode>('PRACTICE');
  const [selectedGrade, setSelectedGrade] = useState<Grade | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<Question['difficulty']>('EASY');
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);
  const [incorrectQuestions, setIncorrectQuestions] = useState<Question[]>([]);
  const [finalScore, setFinalScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [stats, setStats] = useState<UserStats>({
    points: 0,
    completedLessons: 0,
    level: 'Đồng',
    totalCorrect: 0,
    totalAnswered: 0
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('toan_legend_user', JSON.stringify(user));
      setStats(user.stats);
    } else {
      localStorage.removeItem('toan_legend_user');
    }
  }, [user]);

  useEffect(() => {
    if (user && view === 'AUTH') {
      setView('MODE_SELECT');
    }
  }, []);

  const handleAuthSuccess = (authUser: AuthUser) => {
    setUser(authUser);
    setView('MODE_SELECT');
  };

  const handleLogout = () => {
    setUser(null);
    setShowLogoutConfirm(false);
    setView('AUTH');
  };

  const percentage = Math.round((correctCount / (currentQuestions.length || 1)) * 100);
  const isVictory = view === 'RESULT' && percentage >= 60;
  const isFailure = view === 'RESULT' && percentage < 60;
  const isResultScreen = view === 'RESULT';

  const handleUpdateName = async () => {
    const trimmed = tempUserName.trim();
    if (!user) return;

    if (trimmed.length < 3 || trimmed.length > 20) {
      alert("Tên phải từ 3 đến 20 ký tự nhé!");
      return;
    }
    
    if (/[<>{}[\]\\/]/.test(trimmed)) {
      alert("Tên không được chứa ký tự đặc biệt nguy hiểm!");
      return;
    }

    if (confirm(`Bạn có chắc chắn muốn đổi tên thành "${trimmed}"?`)) {
      const success = await updateProfile(user.id, trimmed);
      if (success) {
        setUser({ ...user, displayName: trimmed });
        setIsEditingName(false);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);

        // Sync with leaderboard if user has points
        if (stats.points > 0 && selectedGrade) {
          submitScore(trimmed, stats.points, selectedGrade, user.id);
        }
      }
    }
  };

  const handleModeSelect = (mode: QuizMode) => {
    setQuizMode(mode);
    if (mode === 'CHALLENGE') {
      setView('CHALLENGE');
    } else {
      setView('GRADE_SELECT');
    }
  };

  const handleGradeSelect = (grade: Grade) => {
    setSelectedGrade(grade);
    if (quizMode === 'BANK') {
      setView('DIFFICULTY_SELECT');
    } else {
      setView('KNOWLEDGE_SUMMARY');
    }
  };

  const handleDifficultySelect = (difficulty: Question['difficulty']) => {
    setSelectedDifficulty(difficulty);
    if (selectedGrade) {
      startQuiz(selectedGrade, difficulty);
    }
  };

  const startQuiz = (grade: Grade, difficulty?: Question['difficulty']) => {
    let count = 20; 
    if (quizMode === 'EXAM') count = 50;
    else if (quizMode === 'BANK') count = 30;
    
    const qs = getRandomQuestions(grade, count, difficulty);
    setCurrentQuestions(qs);
    setIncorrectQuestions([]);
    setView('QUIZ');
  };

  const handleFinish = async (score: number, correct: number, incorrects: Question[]) => {
    setFinalScore(score);
    setCorrectCount(correct);
    setIncorrectQuestions(incorrects);
    
    if (!user) return;

    const multiplier = quizMode === 'EXAM' ? 2 : 1;
    const finalAwardedScore = score * multiplier;
    const newPoints = stats.points + finalAwardedScore;
    const newTotalCorrect = stats.totalCorrect + correct;
    const newTotalAnswered = stats.totalAnswered + currentQuestions.length;
    
    let newLevel: UserStats['level'] = 'Đồng';
    if (newPoints > 2000) newLevel = 'Kim Cương';
    else if (newPoints > 1000) newLevel = 'Vàng';
    else if (newPoints > 500) newLevel = 'Bạc';

    const newStats: UserStats = {
      points: newPoints,
      completedLessons: stats.completedLessons + 1,
      level: newLevel,
      totalCorrect: newTotalCorrect,
      totalAnswered: newTotalAnswered
    };

    setStats(newStats);
    
    // Submit score to database
    if (selectedGrade) {
      submitScore(user.displayName, newPoints, selectedGrade, user.id);
    }
    
    // Sync with user account
    await updateProfile(user.id, undefined, newStats);
    setUser({ ...user, stats: newStats });

    setView('RESULT');
  };

  const reset = () => {
    setView('MODE_SELECT');
    setSelectedGrade(null);
    setCurrentQuestions([]);
    setIncorrectQuestions([]);
  };

  const retry = () => {
    if (selectedGrade) startQuiz(selectedGrade, quizMode === 'BANK' ? selectedDifficulty : undefined);
  };

  const retryIncorrectOnly = () => {
    if (incorrectQuestions.length > 0) {
      setCurrentQuestions(incorrectQuestions);
      setIncorrectQuestions([]);
      setView('QUIZ');
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0E14] text-slate-200 font-sans relative overflow-x-hidden">
      {/* Anime Background Orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-anime-blue/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-anime-purple/5 blur-[120px] rounded-full pointer-events-none" />
      
      <BackgroundMusic 
        isPaused={isResultScreen} 
        resultType={isVictory ? 'VICTORY' : isFailure ? 'FAILURE' : null} 
      />

      <header className="relative z-50 flex justify-between items-center px-4 md:px-6 py-3 md:py-4 bg-[#151921]/80 backdrop-blur-md border-b-2 border-white/5">
        <div className="flex items-center space-x-2 md:space-x-3 cursor-pointer group" onClick={reset}>
          <div className="w-8 h-8 md:w-10 md:h-10 anime-gradient-blue rounded-lg md:rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
            <Zap className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </div>
          <span className="font-display font-black text-xl md:text-2xl tracking-tight hidden sm:block text-white">
            TOÁN<span className="text-anime-blue">LEGEND</span>
          </span>
        </div>

        <div className="flex items-center space-x-2 md:space-x-4">
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex flex-col items-end cursor-pointer hover:opacity-80 transition-opacity" onClick={() => setView('LEADERBOARD')}>
              <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest flex items-center">
                <Trophy className="w-3 h-3 mr-1 text-anime-yellow" />
                Xếp hạng
              </span>
              <span className={`text-sm font-black ${
                stats.level === 'Kim Cương' ? 'text-anime-blue' :
                stats.level === 'Vàng' ? 'text-yellow-400' :
                stats.level === 'Bạc' ? 'text-slate-300' : 'text-anime-pink'
              }`}>
                {stats.level}
              </span>
            </div>
            <div className="w-1 h-8 bg-white/5 rounded-full" />
            <div className="flex flex-col items-end">
              <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Điểm XP</span>
              <span className="text-sm font-black text-slate-200">{stats.points} ✨</span>
            </div>
          </div>
          
          <div className="relative group">
            <div className="flex items-center space-x-2 md:space-x-3 bg-white/5 hover:bg-white/10 px-3 md:px-4 py-1.5 md:py-2 rounded-xl md:rounded-2xl border-2 border-white/5 shadow-sm transition-all">
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-anime-blue/20 flex items-center justify-center">
                <User className="w-4 h-4 md:w-5 md:h-5 text-anime-blue" />
              </div>
              <span className="text-xs md:text-sm font-bold text-slate-300 truncate max-w-[60px] md:max-w-[100px]">{user?.displayName || 'Bạn'}</span>
              <div className="flex items-center">
                <button 
                  onClick={() => {
                    setTempUserName(user?.displayName || '');
                    setIsEditingName(true);
                  }}
                  className="p-1 hover:text-anime-blue transition-colors"
                  title="Đổi tên"
                >
                  <Edit2 className="w-3 md:w-3.5 h-3 md:h-3.5" />
                </button>
                <button 
                  onClick={() => setShowLogoutConfirm(true)}
                  className="p-1 hover:text-red-500 transition-colors"
                  title="Đăng xuất"
                >
                  <LogOut className="w-3 md:w-3.5 h-3 md:h-3.5" />
                </button>
              </div>
            </div>
            
            <AnimatePresence>
              {showSuccess && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute top-full mt-2 left-0 right-0 py-2 bg-anime-mint/10 border border-anime-mint/20 rounded-xl text-center"
                >
                  <span className="text-[10px] font-bold text-anime-mint uppercase">Thành công! ✨</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </header>

      <main className="relative z-10 w-full">
        <AnimatePresence mode="wait">
          {view === 'AUTH' && (
            <motion.div
              key="auth"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.4 }}
            >
              <AuthScreen onSuccess={handleAuthSuccess} />
            </motion.div>
          )}

          {view === 'MODE_SELECT' && (
             <motion.div
               key="mode"
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -30 }}
             >
               <ModeSelector onSelect={handleModeSelect} />
             </motion.div>
          )}

          {view === 'GRADE_SELECT' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <GradeSelector onSelect={handleGradeSelect} />
            </motion.div>
          )}

          {view === 'DIFFICULTY_SELECT' && (
             <motion.div
               key="difficulty"
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 1.05 }}
               transition={{ duration: 0.3 }}
             >
               <DifficultySelector onSelect={handleDifficultySelect} />
             </motion.div>
          )}

          {view === 'KNOWLEDGE_SUMMARY' && selectedGrade && (
            <motion.div
              key="knowledge"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ type: 'spring', damping: 20 }}
            >
              <KnowledgeSummary 
                grade={selectedGrade} 
                onBack={() => setView('GRADE_SELECT')} 
                onStartQuiz={() => startQuiz(selectedGrade)}
              />
            </motion.div>
          )}

          {view === 'QUIZ' && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ type: 'spring', damping: 20 }}
            >
              <QuizBoard 
                questions={currentQuestions} 
                onFinish={handleFinish} 
                mode={quizMode}
              />
            </motion.div>
          )}

          {view === 'RESULT' && selectedGrade && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
            >
              <ResultScreen 
                userName={user?.displayName || 'Legend'}
                score={finalScore}
                correctCount={correctCount}
                totalCount={currentQuestions.length}
                grade={selectedGrade}
                onRetry={retry}
                onRetryWrong={retryIncorrectOnly}
                incorrectCount={incorrectQuestions.length}
                onHome={reset}
                onLeaderboard={() => setView('LEADERBOARD')}
              />
            </motion.div>
          )}

          {view === 'CHALLENGE' && user && (
            <motion.div
              key="challenge"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <ChallengeView 
                user={user} 
                onBack={() => setView('MODE_SELECT')} 
                onFinishChallenge={(score, correct) => {
                  // Results are handled within ChallengeView usually, 
                  // but we might want to trigger some global state updates here if needed.
                }}
              />
            </motion.div>
          )}

          {view === 'LEADERBOARD' && (
            <motion.div
              key="leaderboard"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <LeaderboardScreen 
                onBack={() => setView('MODE_SELECT')} 
                currentUserId={user?.id || ''}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Mobile Sticky Footer Nav */}
      {view !== 'AUTH' && view !== 'QUIZ' && (
        <footer className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden">
           <div className="bg-[#151921]/80 backdrop-blur-xl border-2 border-white/5 rounded-full px-6 py-3 flex space-x-10 shadow-xl">
              <button onClick={reset} className="text-anime-blue"><HomeIcon className="w-6 h-6" /></button>
              <button onClick={() => setView('LEADERBOARD')} className={`${view === 'LEADERBOARD' ? 'text-anime-yellow' : 'text-slate-600'}`}><Trophy className="w-6 h-6" /></button>
              <button onClick={() => setView('CHALLENGE')} className={`${view === 'CHALLENGE' ? 'text-anime-mint' : 'text-slate-600'}`}><Users className="w-6 h-6" /></button>
              <button 
                onClick={() => setShowLogoutConfirm(true)}
                className="text-slate-600 hover:text-red-500 transition-colors"
                title="Đăng xuất"
              >
                <User className="w-6 h-6" />
              </button>
           </div>
        </footer>
      )}

      {/* Modals */}
      <AnimatePresence>
        {isEditingName && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="anime-card p-10 max-w-sm w-full border-anime-blue bg-[#1A1F2B]"
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-display font-black text-white">Đổi Tên Mới</h3>
                <button onClick={() => setIsEditingName(false)}><X className="w-6 h-6 text-slate-500 hover:text-white" /></button>
              </div>
              
              <div className="space-y-6 text-left">
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-3">Tên đăng nhập mới</label>
                  <input 
                    type="text"
                    value={tempUserName}
                    onChange={(e) => setTempUserName(e.target.value)}
                    maxLength={20}
                    className="w-full bg-white/5 border-2 border-white/5 rounded-2xl p-4 text-white font-bold focus:border-anime-blue outline-none transition-all"
                    placeholder="Nhập tên mới..."
                  />
                  <span className="text-[10px] text-slate-600 mt-2 block">{tempUserName.length}/20 ký tự</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => setIsEditingName(false)}
                    className="py-4 rounded-xl bg-white/5 text-slate-400 font-bold hover:bg-white/10 transition-colors"
                  >
                    Hủy
                  </button>
                  <button 
                    onClick={handleUpdateName}
                    className="anime-btn anime-gradient-blue flex items-center justify-center space-x-2"
                  >
                    <Check className="w-5 h-5" />
                    <span>Lưu</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
        {showLogoutConfirm && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full max-w-sm bg-[#151921] border-2 border-red-500/20 rounded-[2rem] p-8 text-center"
            >
              <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <LogOut className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-display font-black text-white mb-2 uppercase">Xác nhận đăng xuất?</h3>
              <p className="text-slate-500 text-sm font-bold mb-8">Bạn sẽ cần tên tài khoản và mật khẩu để quay lại hành trình Huyền Thoại.</p>
              
              <div className="grid grid-cols-2 gap-4">
                <button 
                  onClick={() => setShowLogoutConfirm(false)}
                  className="py-4 rounded-xl font-bold text-slate-400 bg-white/5 hover:bg-white/10 transition-colors"
                >
                  HỦY BỎ
                </button>
                <button 
                  onClick={handleLogout}
                  className="py-4 rounded-xl font-bold text-white bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/20 transition-all"
                >
                  ĐĂNG XUẤT
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
