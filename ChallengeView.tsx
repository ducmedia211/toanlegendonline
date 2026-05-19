import { LeaderboardEntry, Grade } from "../types";

export const fetchLeaderboard = async (grade?: Grade): Promise<LeaderboardEntry[]> => {
  try {
    const url = grade ? `/api/leaderboard?grade=${grade}` : "/api/leaderboard";
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch leaderboard");
    return await response.json();
  } catch (err) {
    console.error("Error fetching leaderboard:", err);
    return [];
  }
};

export const submitScore = async (
  name: string,
  points: number,
  grade: Grade,
  userId: string
): Promise<boolean> => {
  try {
    const response = await fetch("/api/leaderboard", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, points, grade, userId }),
    });
    return response.ok;
  } catch (err) {
    console.error("Error submitting score:", err);
    return false;
  }
};
