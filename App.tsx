import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import path from "path";

const app = express();
app.use(express.json());

// In-memory data (resets on serverless cold starts)
let users: any[] = [];
let leaderboard: any[] = [];

// API Routes
app.post("/api/auth/join", (req, res) => {
  const { username } = req.body;
  if (!username) return res.status(400).json({ error: "Vui lòng nhập tên" });
  
  let user = users.find(u => u.username.toLowerCase() === username.toLowerCase());
  if (!user) {
    user = {
      id: Math.random().toString(36).substr(2, 9),
      username,
      displayName: username,
      stats: { points: 0, completedLessons: 0, level: 'Đồng', totalCorrect: 0, totalAnswered: 0 }
    };
    users.push(user);
  }
  res.json({ success: true, user });
});

app.get("/api/leaderboard", (req, res) => {
  const gradeParam = req.query.grade;
  let filtered = [...leaderboard];
  if (gradeParam) {
    const g = parseInt(gradeParam as string);
    filtered = filtered.filter(e => e.grade === g);
  }
  res.json(filtered.sort((a, b) => b.points - a.points).slice(0, 10));
});

app.post("/api/leaderboard", (req, res) => {
  const { name, points, grade, userId } = req.body;
  const id = userId || Math.random().toString(36).substr(2, 9);
  const existingIndex = leaderboard.findIndex(e => e.id === id);
  if (existingIndex !== -1) {
    if (points > leaderboard[existingIndex].points) {
      leaderboard[existingIndex] = { ...leaderboard[existingIndex], name, points, grade, timestamp: Date.now() };
    }
  } else {
    leaderboard.push({ id, name, points, grade, timestamp: Date.now() });
  }
  res.json({ success: true });
});

// Note: Socket.io won't work on Vercel Serverless Functions out of the box.
// This file is exported for Vercel's @vercel/node.
export default app;
