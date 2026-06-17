"use client";

import React from "react";
import { Target, Trophy, Flame, CheckCircle } from "lucide-react";

const challenges = [
  {
    title: "Daily DSA Practice",
    description: "Complete 3 algorithm visualizations today.",
    reward: "+50 XP",
    status: "Completed",
  },
  {
    title: "Sorting Master",
    description: "Learn all sorting algorithms this week.",
    reward: "+200 XP",
    status: "In Progress",
  },
  {
    title: "Graph Explorer",
    description: "Complete BFS and DFS visualizers.",
    reward: "+100 XP",
    status: "Pending",
  },
];

export default function LearningChallenges() {
  return (
    <div className="w-full max-w-5xl mx-auto my-6 p-5 bg-slate-900 text-white rounded-2xl shadow-lg">
      
      <div className="flex items-center gap-2 mb-5">
        <Target className="text-green-400" />
        <h2 className="text-2xl font-bold">
          Weekly Learning Challenges
        </h2>
      </div>

      <div className="space-y-4">
        {challenges.map((challenge, index) => (
          <div
            key={index}
            className="bg-slate-800 border border-slate-700 rounded-xl p-4 flex justify-between items-center"
          >
            <div>
              <h3 className="font-semibold text-lg">
                {challenge.title}
              </h3>

              <p className="text-sm text-slate-400">
                {challenge.description}
              </p>

              <div className="flex items-center gap-2 mt-2 text-yellow-400">
                <Trophy size={16} />
                <span>{challenge.reward}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {challenge.status === "Completed" ? (
                <>
                  <CheckCircle className="text-green-400" />
                  <span className="text-green-400">
                    Completed
                  </span>
                </>
              ) : challenge.status === "In Progress" ? (
                <>
                  <Flame className="text-orange-400" />
                  <span className="text-orange-400">
                    In Progress
                  </span>
                </>
              ) : (
                <span className="text-slate-400">
                  Pending
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 bg-slate-800 p-4 rounded-xl border border-slate-700">
        <p className="text-sm text-slate-300">
          Complete challenges regularly to earn XP, unlock achievements,
          and improve your rank on the global leaderboard.
        </p>
      </div>

    </div>
  );
}