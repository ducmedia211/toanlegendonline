export type Grade = 6 | 7 | 8 | 9;
export type QuizMode = 'PRACTICE' | 'EXAM' | 'BANK' | 'CHALLENGE';

export type GameStatus = 'waiting' | 'starting' | 'playing' | 'finished';

export interface MultiplayerPlayer {
  id: string;
  socketId: string;
  name: string;
  score: number;
  progress: number;
  ready: boolean;
  finished: boolean;
}

export interface GameRoom {
  id: string;
  grade: Grade;
  players: MultiplayerPlayer[];
  status: GameStatus;
  questions: Question[];
  startTime?: number;
}

export interface Question {
  id: string;
  grade: Grade;
  text: string;
  options: string[];
  correctAnswer: number; // Index 0-3
  explanation?: string;
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';
}

export interface UserStats {
  points: number;
  completedLessons: number;
  level: 'Đồng' | 'Bạc' | 'Vàng' | 'Kim Cương';
  totalCorrect: number;
  totalAnswered: number;
}

export interface AuthUser {
  id: string;
  username: string;
  displayName: string;
  stats: UserStats;
}

export interface LeaderboardEntry {
  id: string;
  name: string;
  points: number;
  grade: Grade;
  timestamp: number;
}

export interface QuizSession {
  questions: Question[];
  currentIndex: number;
  score: number;
  timeRemaining: number;
  answers: (number | null)[]; // -1 or null for skipped/timeout
  isFinished: boolean;
}
