"use client";

import React from "react";
import { Trophy, Medal, Star, Flame } from "lucide-react";

const users = [
  {
    rank: 1,
    name: "Alex",
    xp: 2500,
    badge: "🏆 Champion",
  },
  {
    rank: 2,
    name: "Sophia",
    xp: 2200,
    badge: "🥈 Master",
  },
  {
    rank: 3,
    name: "John",
    xp: 1900,
    badge: "🥉 Expert",
  },
  {
    rank: 4,
    name: "You",
    xp: 1500,
    badge: "🔥 Rising Learner",
  },
];

export default function GamifiedLeaderboard() {
  return (
    <div className="w-full max-w-5xl mx-auto my-6 p-5 bg-slate-900 text-white rounded-2xl shadow-lg">
      
      <div className="flex items-center gap-2 mb-5">
        <Trophy className="text-yellow-400" />
        <h2 className="text-2xl font-bold">
          Global Learning Leaderboard
        </h2>
      </div>

      <div className="space-y-3">
        {users.map((user) => (
          <div
            key={user.rank}
            className="flex items-center justify-between bg-slate-800 p-4 rounded-xl border border-slate-700"
          >
            <div className="flex items-center gap-4">
              <span className="text-lg font-bold">
                #{user.rank}
              </span>

              <div>
                <h3 className="font-semibold">
                  {user.name}
                </h3>

                <p className="text-sm text-slate-400">
                  {user.badge}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Star className="text-purple-400" size={18} />
              <span className="font-bold">
                {user.xp} XP
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 p-4 bg-slate-800 rounded-xl border border-slate-700 flex items-center gap-2">
        <Flame className="text-orange-400" />
        <p>
          Keep learning daily to increase your XP, maintain your streak, and climb the leaderboard!
        </p>
      </div>

    </div>
  );
}